// All content below comes from Sabari's resume. Edit this file to change what the site shows.
export const profile = {
  name: 'Sabari Thirunavukkarasu',
  title: 'AI / GenAI Developer',
  tagline: 'Python, Django, LLMs and Computer Vision',
  roles: ['GenAI applications', 'Claude and ChatGPT integrations', 'computer vision systems', 'Django backends'],
  status: 'Open to AI / GenAI developer roles',
  intro: 'AI/ML developer and fresh graduate who builds GenAI-powered products that integrate Claude and ChatGPT across healthcare, safety and transport.',
  bio: 'AI/ML enthusiast and fresh graduate with hands-on experience building GenAI-powered applications, integrating large language models (Claude, ChatGPT) into real-world products across healthcare, safety, and transport. Skilled in Python, prompt engineering, and ML model integration, with practical exposure to computer vision and predictive analytics. Eager to apply and deepen expertise in frameworks like LangChain, LlamaIndex, and Hugging Face, and contribute to cutting-edge Generative AI products in a collaborative engineering environment.',
  location: 'Erode, India',
  email: 'sabariarasu54@gmail.com',
  linkedin: 'https://linkedin.com/in/sabari-thirunavukkarasu-550805263',
  behance: 'https://behance.net/sabarit',
  resume: '/Sabari_T_Resume.pdf',
  whatsapp: '919677339073', // international format, digits only (from the resume: +91 96773 39073)
  whatsappLabel: '',
};
export const facts = [
  { icon: 'pin', label: 'Location', value: 'Erode, India' },
  { icon: 'grad', label: 'Education', value: 'B.Sc Computer Science, Bharathidasan University (GPA 8.2 / 10)' },
  { icon: 'target', label: 'Focus', value: 'GenAI apps, LLM integration, computer vision, predictive analytics' },
  { icon: 'book', label: 'Learning', value: 'LangChain, LlamaIndex and Hugging Face (self-learning)' },
];
// Skill levels are rough tiers ESTIMATED from the resume's wording ("skilled in" = strong, hands-on/used in jobs = working,
// "self-learning" = learning). They are not measured scores: edit the tier next to each skill to match your own view.
export type Level = 'learning' | 'working' | 'strong';
export const LEVELS: Record<Level, { label: string; pct: number }> = {
  learning: { label: 'Learning', pct: 35 }, working: { label: 'Working', pct: 65 }, strong: { label: 'Strong', pct: 90 },
};
export const skills: Record<string, { icon: string; items: { name: string; level: Level }[] }> = {
  'GenAI and NLP': { icon: 'brain', items: [
    { name: 'LLM Integration (Claude, ChatGPT)', level: 'strong' }, { name: 'Prompt Engineering', level: 'strong' },
    { name: 'LangChain', level: 'learning' }, { name: 'LlamaIndex', level: 'learning' }, { name: 'Hugging Face', level: 'learning' }] },
  'AI Tools': { icon: 'sparkles', items: [
    { name: 'Claude (Anthropic)', level: 'strong' }, { name: 'ChatGPT', level: 'strong' }, { name: 'AI Workflow Automation', level: 'working' }] },
  Backend: { icon: 'server', items: [
    { name: 'Python', level: 'strong' }, { name: 'Django', level: 'strong' }, { name: 'REST APIs', level: 'strong' },
    { name: 'MySQL', level: 'working' }, { name: 'PHP', level: 'working' }, { name: 'Git', level: 'working' }] },
  'AI and ML': { icon: 'scan', items: [
    { name: 'ML Model Integration', level: 'strong' }, { name: 'Computer Vision', level: 'working' },
    { name: 'Medical Image Analysis', level: 'working' }, { name: 'Detection Systems', level: 'working' }] },
  'Frontend and Design': { icon: 'palette', items: [
    { name: 'HTML5 and CSS3', level: 'working' }, { name: 'JavaScript', level: 'working' },
    { name: 'Figma', level: 'strong' }, { name: 'Responsive UI', level: 'working' }] },
};
export interface TimelineEntry { when?: string; what: string; where: string; details?: string[] }
export const timeline: TimelineEntry[] = [
  { what: 'Python AI/ML Developer', where: 'JLA Tech Service', details: [
    'Built AI-powered management and automation systems with Python Django, integrating Claude and ChatGPT for intelligent workflow automation.',
    'Developed predictive analytics tools delivering data-driven forecasts and business intelligence from structured inputs.',
    'Managed end-to-end development: requirement gathering, AI integration, backend engineering, testing and deployment.'] },
  { what: 'AI Full Stack Developer', where: 'Freelance', details: [
    'Developed and deployed full-stack web applications and AI-powered chatbots using Python Django, HTML/CSS/JavaScript and MySQL.',
    'Built detection and prediction web apps with computer vision and ML models for healthcare, public safety and transport.'] },
  { what: 'B.Sc Computer Science', where: 'Bharathidasan University', when: '2021 to 2024', details: ['GPA 8.2 / 10'] },
  { what: 'UI/UX Design Course', where: 'Fortune Innovatives', when: '2024 to 2025' },
  { what: 'Certifications', where: 'Workshops', details: ['Website Evaluation Workshop (Dec 2024)', 'Branding Workshop (Jan 2024)', 'Digital Marketing Workshop (Feb 2025)'] },
];
// Hero avatar. body.webp is the avatar without its waving forearm; avatar-forearm.webp is the forearm piece the hero animates.
export const avatar = { body: '/avatar.webp' };

// Shown in the scrolling marquee under the hero. `icon` is a brand key (see components/BrandIcons.tsx) or a generic key
// (brain, sparkles, eye, message, cpu, languages, plug) drawn with lucide. Edit freely.
export const marqueeSkills: { name: string; icon: string }[] = [
  { name: 'Artificial Intelligence', icon: 'brain' }, { name: 'Generative AI', icon: 'sparkles' }, { name: 'Python', icon: 'python' },
  { name: 'Django', icon: 'django' }, { name: 'Machine Learning', icon: 'cpu' }, { name: 'Computer Vision', icon: 'eye' },
  { name: 'LLM Integration', icon: 'openai' }, { name: 'Prompt Engineering', icon: 'message' }, { name: 'Claude', icon: 'claude' },
  { name: 'ChatGPT', icon: 'openai' }, { name: 'NLP', icon: 'languages' }, { name: 'REST APIs', icon: 'plug' },
  { name: 'LangChain', icon: 'langchain' }, { name: 'Hugging Face', icon: 'huggingface' }, { name: 'MySQL', icon: 'mysql' },
  { name: 'JavaScript', icon: 'javascript' }, { name: 'Figma', icon: 'figma' }, { name: 'Git', icon: 'git' },
];

// Icons orbiting the hero avatar.
export const orbitIcons = ['python', 'django', 'git', 'figma', 'claude', 'openai', 'huggingface', 'mysql'] as const;

// Numbers that roll up in the hero and in the Achievements section.
export const stats = [
  { value: 2, suffix: '+', label: 'Years Developing Experience' },
  { value: 20, suffix: '+', label: 'Projects Shipped' },
  { value: 5, suffix: '+', label: 'Core Technologies' },
];
// ---------------------------------------------------------------------------------------------------------------------
// UI/UX Design section. Each item gets a card in the section and its own detail page at /design/<slug>/.
// `cover`: put the screenshot in /public/design/ (or reuse one from /public/projects/). If the file is missing the card shows
// a coloured placeholder, so nothing breaks. The Behance link is shown at the end of every description.
// ---------------------------------------------------------------------------------------------------------------------
export interface DesignProject {
  slug: string; title: string; tagline: string; cover: string; tools: string[]; role: string; year: string;
  overview: string; problem: string; process: string[]; features: string[]; outcome: string; behance: string;
}
export const design = { enabled: true, heading: 'UI/UX Design' };
export const designProjects: DesignProject[] = [
  {
    slug: 'evento', title: 'Evento', tagline: 'Event booking app', cover: '/design/evento.jpg',
    tools: ['Figma', 'Wireframing', 'Prototyping'], role: 'UI/UX designer', year: '2024 to 2025',
    overview: 'Evento is an event booking app concept: discover events, view the details and book a place in a few taps. I designed the full flow in Figma, from low-fidelity wireframes to a clickable high-fidelity prototype.',
    problem: 'Finding an event, comparing options and booking usually takes too many screens. The goal was a short, clear path from browsing to a confirmed booking.',
    process: ['Mapped the user flow from home to booking confirmation.', 'Sketched low-fidelity wireframes for every key screen.', 'Built a consistent colour, type and component set in Figma.', 'Turned the wireframes into high-fidelity screens and a clickable prototype.'],
    features: ['Event discovery and browsing', 'Clear event detail screens', 'Simple booking flow', 'Consistent components across screens'],
    outcome: 'A complete, clickable prototype that shows the whole booking journey end to end.',
    behance: 'https://behance.net/sabarit',
  },
  {
    slug: 'neobrew', title: 'Neobrew', tagline: 'Craft coffee e-commerce', cover: '/projects/Neobrew.jpg',
    tools: ['Figma', 'Wireframing', 'Prototyping'], role: 'UI/UX designer', year: '2024 to 2025',
    overview: 'Neobrew is an e-commerce concept for craft coffee. I designed the storefront in Figma with warm, rich visuals, product browsing and a simple checkout journey, then linked the screens into a high-fidelity prototype.',
    problem: 'Online coffee shops often look like generic stores. The brief was to make buying coffee feel as good as drinking it, while keeping the path to checkout short.',
    process: ['Defined the brand mood: warm, premium and approachable.', 'Wireframed the home, product, cart and checkout screens.', 'Designed the high-fidelity UI with a coffee-inspired palette.', 'Linked the screens into an interactive prototype and refined the flow.'],
    features: ['Product browsing with strong visuals', 'Clear product pages', 'Short cart and checkout flow', 'Brand-led colour and typography'],
    outcome: 'A polished e-commerce prototype with a distinct brand feel.',
    behance: 'https://behance.net/sabarit',
  },
  {
    slug: 'mindfultech', title: 'MindfulTech', tagline: 'Mental health platform', cover: '/design/mindfultech.jpg',
    tools: ['Figma', 'Wireframing', 'Prototyping'], role: 'UI/UX designer', year: '2024 to 2025',
    overview: 'MindfulTech is a mental health platform concept built around calm, clarity and trust. I designed the experience in Figma, from wireframes to a high-fidelity prototype, with soft visuals and gentle interactions.',
    problem: 'Wellbeing apps can feel overwhelming. The design needed to be calm, easy to navigate and never pushy, so people feel comfortable using it.',
    process: ['Researched the tone and visual language of calm, trustworthy products.', 'Wireframed the main journeys with as few steps as possible.', 'Designed soft, accessible high-fidelity screens.', 'Prototyped the flows and checked them for clarity.'],
    features: ['Calm, low-stimulation visual style', 'Simple navigation', 'Readable typography and spacing', 'Consistent component library'],
    outcome: 'A gentle, accessible prototype that puts the user at ease.',
    behance: 'https://behance.net/sabarit',
  },
];


// ---------------------------------------------------------------------------------------------------------------------
// Achievements: shown as a carousel; clicking a card opens its description (and photos when `gallery` is set).
// icon is one of: mic, grad, palette, megaphone, globe, trending.
// ---------------------------------------------------------------------------------------------------------------------
export interface Achievement {
  id: string; icon: string; badge: string; title: string; subtitle: string; date: string; summary: string;
  details: string[]; highlights: string[]; tags?: string[]; poster?: string; gallery?: { src: string; alt: string }[];
}
export const achievements: Achievement[] = [
  {
    id: 'chief-guest', icon: 'mic', badge: 'Chief Guest', title: 'Chief Guest, Association Function 2k26',
    subtitle: 'RVS Polytechnic College, Sulur, Coimbatore', date: '24 July 2026',
    summary: 'Invited as Chief Guest by the Departments of Computer Engineering and Information Technology.',
    details: [
      'A major career milestone and a proud moment: I was invited as the Chief Guest for the Association Function 2k26, hosted by the Departments of Computer Engineering and Information Technology at RVS Polytechnic College, Sulur, Coimbatore.',
      'Standing on that stage and addressing passionate students as a Python AI/ML Developer representing INITZ Technologies and JLA Tech Service has been one of the biggest achievements of my professional journey so far.',
      'A heartfelt thank you to the management, Principal Dr. M. Nadarajan, ME., Ph.D, the department faculty and the student organisers for the warm welcome and the seamless event.',
      'Stepping into a mentor and guest speaker role reinforces my passion for building impactful AI solutions while giving back to the tech community.',
    ],
    highlights: ['Shared insights on emerging trends in Artificial Intelligence and Machine Learning.', 'Discussed practical roadmap strategies for students aspiring to build modern tech and software careers.', 'Interacted with energetic minds eager to innovate and make an impact in the industry.'],
    tags: ['Chief Guest', 'Public Speaking', 'AI / ML', 'Python', 'Mentorship', 'RVS Group'],
    poster: '/achievements/invitation.jpg',
    gallery: [
      { src: '/achievements/guest-panel.jpg', alt: 'On stage with the Principal, faculty and staff at the Association Function' },
      { src: '/achievements/guest-speaking-1.jpg', alt: 'Addressing the students on how AI will change jobs' },
      { src: '/achievements/guest-speaking-2.jpg', alt: 'Presenting AI trends in front of the XENORA 2k26 stage' },
      { src: '/achievements/guest-award.jpg', alt: 'Receiving a token of appreciation from the Principal' },
      { src: '/achievements/guest-speaking-3.jpg', alt: 'Talking with students about AI and future skills' },
    ],
  },
  {
    id: 'bsc', icon: 'grad', badge: 'Degree', title: 'B.Sc Computer Science', subtitle: 'Bharathidasan University', date: '2021 to 2024',
    summary: 'Graduated with a GPA of 8.2 / 10.',
    details: ['I completed my B.Sc in Computer Science at Bharathidasan University between 2021 and 2024, finishing with a GPA of 8.2 out of 10.', 'The degree gave me the programming and computer science foundation behind my work today: building GenAI-powered applications with Python and Django, integrating large language models such as Claude and ChatGPT, and shipping computer vision projects.'],
    highlights: ['GPA 8.2 / 10', 'Foundation for AI/ML and full-stack development', 'Led straight into professional roles at JLA Tech Service and freelance work'],
    tags: ['Computer Science', 'Bharathidasan University'],
  },
  {
    id: 'uiux', icon: 'palette', badge: 'Course', title: 'UI/UX Design Course', subtitle: 'Fortune Innovatives', date: '2024 to 2025',
    summary: 'Learned user-centred design and built three Figma prototypes.',
    details: ['I completed the UI/UX Design course at Fortune Innovatives from 2024 to 2025, learning how to turn an idea into clear wireframes and polished, high-fidelity prototypes in Figma.', 'The course work became my design portfolio: Evento (event booking), Neobrew (craft coffee e-commerce) and MindfulTech (mental health platform).'],
    highlights: ['Figma wireframes and high-fidelity prototypes', 'Three complete design projects: Evento, Neobrew and MindfulTech', 'Design skills that now shape the interfaces of my own AI products'],
    tags: ['UI/UX', 'Figma', 'Prototyping'],
  },
  {
    id: 'branding', icon: 'megaphone', badge: 'Workshop', title: 'Branding Workshop', subtitle: 'Workshop certification', date: 'January 2024',
    summary: 'A workshop on how brands are built and presented.',
    details: ['I attended the Branding Workshop in January 2024, which looked at how a brand identity is built and kept consistent across colour, typography, tone and presentation.', 'It improved how I approach visual identity in my UI/UX and web projects.'],
    highlights: ['Brand identity fundamentals', 'Consistency in colour, type and tone', 'Applied in my design projects'],
    tags: ['Branding', 'Design'],
  },
  {
    id: 'website-eval', icon: 'globe', badge: 'Workshop', title: 'Website Evaluation Workshop', subtitle: 'Workshop certification', date: 'December 2024',
    summary: 'A workshop on judging and improving websites.',
    details: ['I completed the Website Evaluation Workshop in December 2024, which covered how to review a website for usability, clarity, performance and overall quality.', 'I use this thinking when I review my own builds before delivery.'],
    highlights: ['Reviewing usability and clarity', 'Spotting performance and quality issues', 'Applied to my web development work'],
    tags: ['Web', 'Usability'],
  },
  {
    id: 'digital-marketing', icon: 'trending', badge: 'Workshop', title: 'Digital Marketing Workshop', subtitle: 'Workshop certification', date: 'February 2025',
    summary: 'A workshop on reaching audiences online.',
    details: ['I completed the Digital Marketing Workshop in February 2025, an introduction to how products and brands reach and engage audiences online.', 'It helps me build web projects that are ready to be found and shared.'],
    highlights: ['How online audiences are reached', 'Content and visibility basics', 'Supports my freelance web projects'],
    tags: ['Marketing', 'Digital'],
  },
];
