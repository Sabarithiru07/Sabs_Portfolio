import type { Metadata } from 'next';
import { WelcomeIntro } from '@/components/WelcomeIntro';
import { profile } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: `Welcome | ${profile.name}` },
  description: 'Welcome to the portfolio of Sabari Thirunavukkarasu, AI / GenAI developer.',
  alternates: { canonical: '/portfolio/' },
};

export default function Welcome() {
  return <WelcomeIntro />;
}
