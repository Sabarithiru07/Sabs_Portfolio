import { describe, it, expect, beforeAll } from 'vitest';
import { render } from '@testing-library/react';
import { Avatar } from '@/components/Avatar';

beforeAll(() => { window.matchMedia = ((q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} })) as unknown as typeof window.matchMedia; });

describe('Avatar', () => {
  it('shows the greeting bubble', () => {
    const { container } = render(<Avatar greeting="Hi, I'm Sabari!" />);
    expect(container.querySelector('.bubble')?.textContent).toBe("Hi, I'm Sabari!");
  });
  it('waves with its own arm: a forearm piece and a hand with four fingers and a thumb, no separate badge', () => {
    const { container } = render(<Avatar greeting="Hi" />);
    expect(container.querySelector('.avatar-arm .arm image')).not.toBeNull();
    expect(container.querySelectorAll('.avatar-arm .hand .finger:not(.thumb)').length).toBe(4);
    expect(container.querySelector('.avatar-arm .hand .finger.thumb')).not.toBeNull();
    expect(container.querySelector('.hello-hand')).toBeNull();
  });
  it('renders the body image once and is decorative for screen readers', () => {
    const { container } = render(<Avatar greeting="Hi" />);
    expect(container.querySelectorAll('img').length).toBe(1);
    expect(container.querySelector('.avatar')?.getAttribute('aria-hidden')).toBe('true');
  });
});
