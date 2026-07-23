/**
 * cn — tiny className combiner (clsx-like) without a dependency.
 * Accepts strings, falsy values, and objects of {class: boolean}.
 */
type ClassValue = string | false | null | undefined | Record<string, boolean>;

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === 'string') {
      out.push(input);
    } else {
      for (const [key, value] of Object.entries(input)) {
        if (value) out.push(key);
      }
    }
  }
  return out.join(' ');
}

export default cn;
