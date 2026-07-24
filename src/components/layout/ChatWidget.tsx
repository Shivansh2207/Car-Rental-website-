import { FormEvent, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Bot, CalendarDays, Car, MapPin, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import { whatsappLink, siteData } from '@/data/siteData';
import useReducedMotion from '@/hooks/useReducedMotion';

type Message = { id: number; from: 'bot' | 'user'; text: string };

const quickQuestions = [
  { label: 'Find my vehicle', icon: Car, prompt: 'Which vehicle is right for me?' },
  { label: 'Airport transfer', icon: MapPin, prompt: 'I need an airport transfer.' },
  { label: 'Outstation trip', icon: CalendarDays, prompt: 'I am planning an outstation trip.' },
  { label: 'Get a quote', icon: Sparkles, prompt: 'I want to get a quote.' },
];

const welcome: Message = {
  id: 1,
  from: 'bot',
  text: 'Hi! I’m the Shree Krishna travel assistant. Tell me what you’re planning and I’ll point you to the right vehicle or service.',
};

export default function ChatWidget() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([welcome]);
  const nextId = useRef(2);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }, [messages, open, reduced]);

  function replyTo(text: string): string {
    const lower = text.toLowerCase();
    if (lower.includes('airport')) return 'For airport pickups, a sedan is ideal for 1–3 travellers. Choose an SUV or MUV if you have more luggage or a larger group. I can help coordinate Mumbai airport pickups 24/7.';
    if (lower.includes('outstation') || lower.includes('trip') || lower.includes('holiday')) return 'For outstation travel, tell us your destination, date and passenger count. We’ll recommend a comfortable sedan, SUV or traveller and coordinate the driver directly.';
    if (lower.includes('vehicle') || lower.includes('car') || lower.includes('right')) return 'For city travel, choose a sedan. For families and extra luggage, choose an SUV/MUV. For executive travel, our premium vehicles are the best fit. Want to share your group size?';
    if (lower.includes('quote') || lower.includes('price') || lower.includes('cost')) return 'Pricing depends on route, duration, vehicle and pickup time. Tap “Continue on WhatsApp” and our team will send a tailored quote quickly.';
    if (lower.includes('corporate') || lower.includes('business')) return 'We support executive transfers, employee movement and recurring corporate travel with one coordination point and professional drivers.';
    return 'I can help with vehicle selection, airport transfers, outstation journeys, corporate travel or a quote. Choose a quick question below or tell me a little about your journey.';
  }

  function send(text = input) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const answer = replyTo(trimmed);
    setMessages((current) => [
      ...current,
      { id: nextId.current++, from: 'user', text: trimmed },
      { id: nextId.current++, from: 'bot', text: answer },
    ]);
    setInput('');
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    send();
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.section
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: reduced ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-20 right-4 z-50 flex w-[min(92vw,390px)] flex-col overflow-hidden rounded-3xl border border-graphite-200 bg-soft-white shadow-2xl lg:bottom-24 lg:right-6"
            aria-label="Shree Krishna travel assistant"
          >
            <div className="flex items-center justify-between bg-graphite-900 px-5 py-4 text-soft-white">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-soft-white"><Bot className="h-5 w-5" /></span>
                <div>
                  <p className="font-heading font-bold">Shree Krishna Assistant</p>
                  <p className="text-xs text-soft-white/60">Usually replies instantly</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-2 text-soft-white/70 transition-colors hover:bg-white/10 hover:text-white"><X className="h-5 w-5" /></button>
            </div>

            <div className="max-h-[min(52vh,420px)] space-y-3 overflow-y-auto bg-ivory/40 px-4 py-4" aria-live="polite">
              {messages.map((message) => (
                <div key={message.id} className={message.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <p className={message.from === 'user' ? 'max-w-[86%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-sm text-white' : 'max-w-[90%] rounded-2xl rounded-bl-md border border-graphite-200 bg-soft-white px-3.5 py-2.5 text-sm leading-relaxed text-graphite-700'}>{message.text}</p>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-graphite-200 bg-soft-white px-4 py-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {quickQuestions.map(({ label, icon: Icon, prompt }) => (
                  <button key={label} type="button" onClick={() => send(prompt)} className="inline-flex flex-none items-center gap-1.5 rounded-full border border-graphite-200 px-3 py-1.5 text-xs font-semibold text-graphite-700 transition-colors hover:border-accent hover:text-accent"><Icon className="h-3.5 w-3.5" />{label}</button>
                ))}
              </div>
              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about your journey…" aria-label="Ask the travel assistant" className="input-field min-w-0 rounded-full py-2.5" />
                <button type="submit" aria-label="Send message" className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent text-white transition-transform hover:scale-105"><Send className="h-4 w-4" /></button>
              </form>
              <a href={whatsappLink(`Hello ${siteData.company.name}, I'd like help planning a journey.`)} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover">Continue on WhatsApp <ArrowRight className="h-3.5 w-3.5" /></a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close travel assistant' : 'Open travel assistant'}
        aria-expanded={open}
        whileHover={reduced ? undefined : { scale: 1.05, y: -2 }}
        whileTap={reduced ? undefined : { scale: 0.96 }}
        className="fixed bottom-20 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-glow lg:bottom-6 lg:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        {!open && <span className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-soft-white bg-graphite-900 text-[10px] font-bold">1</span>}
      </motion.button>
    </>
  );
}
