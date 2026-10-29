export interface Project {
  title: string; slug: string; summary: string; thumbnail: string | null;
  technologies: string[]; featured: boolean; github_url: string; live_demo_url: string;
}
export interface ProjectDetail extends Project {
  description: string; updated_at: string; case_study_content: Record<string, string | string[]>;
}
