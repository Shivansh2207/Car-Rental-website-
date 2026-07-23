import {
  Plane,
  MapPin,
  Mountain,
  Briefcase,
  Heart,
  Camera,
  ArrowRightLeft,
  Users,
  CalendarClock,
  Building2,
  Car,
  ShieldCheck,
  HeadsetIcon,
  Route,
  SlidersHorizontal,
  Sparkles,
  Clock,
  PhoneCall,
  MessageSquare,
  CreditCard,
  type LucideIcon,
  type LucideProps,
} from 'lucide-react';

/** Map of string keys to lucide icons — lets data files reference icons by name. */
const iconMap: Record<string, LucideIcon> = {
  Plane,
  MapPin,
  Mountain,
  Briefcase,
  Heart,
  Camera,
  ArrowRightLeft,
  Users,
  CalendarClock,
  Building2,
  Car,
  ShieldCheck,
  Headset: HeadsetIcon,
  Route,
  SlidersHorizontal,
  Sparkles,
  Clock,
  PhoneCall,
  MessageSquare,
  CreditCard,
};

interface IconProps extends LucideProps {
  name: string;
}

export default function Icon({ name, ...rest }: IconProps) {
  const Cmp = iconMap[name] ?? Car;
  return <Cmp {...rest} />;
}
