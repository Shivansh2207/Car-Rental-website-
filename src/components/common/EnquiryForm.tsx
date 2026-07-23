import { useState, type FormEvent } from 'react';
import { Send, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { siteData, whatsappLink } from '@/data/siteData';

interface EnquiryFormProps {
  /** Optional preset fields (e.g. service type on a service page) */
  defaultService?: string;
  defaultVehicle?: string;
  /** compact variant hides some optional fields */
  compact?: boolean;
}

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  vehicle: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: string;
  message: string;
};

const empty: FormState = {
  name: '',
  phone: '',
  email: '',
  service: defaultServiceOption(),
  vehicle: '',
  pickup: '',
  destination: '',
  date: '',
  passengers: '',
  message: '',
};

function defaultServiceOption(): string {
  return '';
}

const serviceOptions = [
  'Airport Transfer',
  'Local Car Rental',
  'Outstation Travel',
  'One-Way Cab',
  'Corporate Travel',
  'Wedding & Event Cars',
  'Mumbai Sightseeing',
  'Group & Traveller Rental',
  'Monthly Rental',
  'Hotel & Guest Transportation',
  'Other',
];

type Errors = Partial<Record<keyof FormState, string>>;

/** Indian phone format: +91 or 0 followed by 10 digits, or 10 digits */
function isValidPhone(v: string): boolean {
  const digits = v.replace(/[\s\-+]/g, '');
  return /^[6-9]\d{9}$/.test(digits) || /^91[6-9]\d{9}$/.test(digits) || /^0[6-9]\d{9}$/.test(digits);
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export default function EnquiryForm({ defaultService, defaultVehicle, compact = false }: EnquiryFormProps) {
  const [values, setValues] = useState<FormState>({
    ...empty,
    service: defaultService ?? '',
    vehicle: defaultVehicle ?? '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!isValidPhone(values.phone)) next.phone = 'Please enter a valid phone number.';
    if (values.email.trim() && !isValidEmail(values.email))
      next.email = 'Please enter a valid email address.';
    if (!values.service) next.service = 'Please select a service type.';
    if (!values.pickup.trim()) next.pickup = 'Please enter a pickup location.';
    if (!values.passengers.trim()) next.passengers = 'Please enter the number of passengers.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function buildMessage(): string {
    return [
      `Hello ${siteData.company.name},`,
      '',
      'I would like to enquire about a car rental.',
      '',
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : '',
      `Service: ${values.service}`,
      values.vehicle ? `Vehicle Preference: ${values.vehicle}` : '',
      `Pickup: ${values.pickup}`,
      values.destination ? `Destination: ${values.destination}` : '',
      values.date ? `Travel Date: ${values.date}` : '',
      `Passengers: ${values.passengers}`,
      values.message ? `Additional Details: ${values.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return; // disable repeated submissions
    if (!validate()) return;
    setSubmitting(true);

    const message = buildMessage();

    // Provider handling. Default + unconfigured fallback: WhatsApp.
    const { provider, web3formsAccessKey, formspreeEndpoint, customApiEndpoint } = siteData.form;
    const configured =
      (provider === 'web3forms' && web3formsAccessKey) ||
      (provider === 'formspree' && formspreeEndpoint) ||
      (provider === 'custom' && customApiEndpoint);

    if (configured) {
      try {
        if (provider === 'web3forms') {
          await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ access_key: web3formsAccessKey, ...values }),
          });
        } else if (provider === 'formspree') {
          await fetch(formspreeEndpoint, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: JSON.stringify(values),
          });
        } else if (provider === 'custom') {
          await fetch(customApiEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
          });
        }
      } catch {
        // network failure — fall back to WhatsApp so the enquiry still goes through
      }
    }

    // Open WhatsApp with the prefilled enquiry.
    // No personal data is stored by this site.
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setSubmitting(false);
  }

  const fieldClass = (key: keyof FormState) =>
    cn('input-field', errors[key] && 'border-red-400 focus:border-red-500 focus:ring-red-200');

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" required error={errors.name} htmlFor="enq-name">
          <input
            id="enq-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            className={fieldClass('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'enq-name-err' : undefined}
          />
        </Field>
        <Field label="Phone Number" required error={errors.phone} htmlFor="enq-phone">
          <input
            id="enq-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={fieldClass('phone')}
            placeholder="+91 98765 43210"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'enq-phone-err' : undefined}
          />
        </Field>
      </div>

      {!compact && (
        <Field label="Email" error={errors.email} htmlFor="enq-email" hint="Optional">
          <input
            id="enq-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            className={fieldClass('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'enq-email-err' : undefined}
          />
        </Field>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Service Type" required error={errors.service} htmlFor="enq-service">
          <select
            id="enq-service"
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
            className={fieldClass('service')}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'enq-service-err' : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Vehicle Category" htmlFor="enq-vehicle" hint="Optional">
          <select
            id="enq-vehicle"
            value={values.vehicle}
            onChange={(e) => update('vehicle', e.target.value)}
            className={fieldClass('vehicle')}
          >
            <option value="">No preference</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>MUV</option>
            <option>Luxury</option>
            <option>Traveller</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Pickup Location" required error={errors.pickup} htmlFor="enq-pickup">
          <input
            id="enq-pickup"
            type="text"
            value={values.pickup}
            onChange={(e) => update('pickup', e.target.value)}
            className={fieldClass('pickup')}
            placeholder="Area, city or address"
            aria-invalid={!!errors.pickup}
            aria-describedby={errors.pickup ? 'enq-pickup-err' : undefined}
          />
        </Field>
        <Field label="Destination" htmlFor="enq-dest" hint="Optional">
          <input
            id="enq-dest"
            type="text"
            value={values.destination}
            onChange={(e) => update('destination', e.target.value)}
            className={fieldClass('destination')}
            placeholder="Where are you headed?"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Travel Date" htmlFor="enq-date" hint="Optional">
          <input
            id="enq-date"
            type="date"
            value={values.date}
            onChange={(e) => update('date', e.target.value)}
            className={fieldClass('date')}
          />
        </Field>
        <Field label="Number of Passengers" required error={errors.passengers} htmlFor="enq-pax">
          <input
            id="enq-pax"
            type="number"
            min={1}
            value={values.passengers}
            onChange={(e) => update('passengers', e.target.value)}
            className={fieldClass('passengers')}
            placeholder="e.g. 4"
            aria-invalid={!!errors.passengers}
            aria-describedby={errors.passengers ? 'enq-pax-err' : undefined}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="enq-message" hint="Optional">
        <textarea
          id="enq-message"
          rows={3}
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className={cn(fieldClass('message'), 'resize-y')}
          placeholder="Any other details about your journey..."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-graphite-400">
          Submitting opens WhatsApp with your enquiry. No booking is confirmed. We don't store your
          details on this site.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary group flex-none disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Preparing…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Enquiry
            </>
          )}
        </button>
      </div>
    </form>
  );
}

/** Labelled field wrapper with connected error messaging for accessibility */
function Field({
  label,
  htmlFor,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-sm font-medium text-graphite-700">
        <span>{label}</span>
        {required && <span className="text-accent" aria-hidden="true">*</span>}
        {hint && <span className="text-xs font-normal text-graphite-400">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-err`} className="flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}
