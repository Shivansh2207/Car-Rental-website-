/**
 * teamData.ts
 * PLACEHOLDER team members. Names and photographs are placeholders to be
 * replaced with the real team when available.
 */
import type { TeamMember } from '@/types/site';
import { buildImage, images } from './images';

export const team: TeamMember[] = [
  {
    name: '[Founder Name]',
    role: 'Founder',
    image: buildImage(images.company.team, { w: 600, h: 700 }),
    imageAlt: 'Placeholder portrait of the company founder',
    bio: 'Placeholder — leading the company vision and overall direction. Replace with the founder’s name, photograph and a short bio.',
  },
  {
    name: '[Operations Head Name]',
    role: 'Operations Head',
    image: buildImage(images.company.team, { w: 600, h: 700 }),
    imageAlt: 'Placeholder portrait of the operations head',
    bio: 'Placeholder — overseeing daily operations, vehicle assignments and service coordination. Replace with real details.',
  },
  {
    name: '[Fleet Coordinator Name]',
    role: 'Fleet Coordinator',
    image: buildImage(images.company.team, { w: 600, h: 700 }),
    imageAlt: 'Placeholder portrait of the fleet coordinator',
    bio: 'Placeholder — managing vehicle readiness, maintenance and quality. Replace with real details.',
  },
  {
    name: '[Customer Support Lead Name]',
    role: 'Customer Support Lead',
    image: buildImage(images.company.team, { w: 600, h: 700 }),
    imageAlt: 'Placeholder portrait of the customer support lead',
    bio: 'Placeholder — leading customer communication and support. Replace with real details.',
  },
];

export default team;
