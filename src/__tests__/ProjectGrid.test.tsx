import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectGrid } from '@/components/ProjectGrid';
import type { Project } from '@/lib/types';

const mk = (slug: string, technologies: string[]): Project => ({
  title: slug, slug, summary: 's', thumbnail: null, technologies, featured: false, github_url: '', live_demo_url: '',
});

describe('ProjectGrid', () => {
  it('filters by technology tag', async () => {
    render(<ProjectGrid projects={[mk('alpha', ['Django']), mk('beta', ['Next.js'])]} />);
    expect(screen.getByText('alpha')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Next.js' }));
    await waitFor(() => expect(screen.queryByText('alpha')).toBeNull());
    expect(screen.getByText('beta')).toBeInTheDocument();
  });

  it('renders an empty state', () => {
    render(<ProjectGrid projects={[]} />);
    expect(screen.getByText(/no published projects/i)).toBeInTheDocument();
  });
});
