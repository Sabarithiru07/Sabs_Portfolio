// Services are based on the freelance and project experience in the resume. Edit text here; no prices or timelines are claimed.
export interface Shot { src: string; alt: string; caption: string; w: number; h: number }
export interface Service {
  slug: string; title: string; icon: 'globe' | 'app'; summary: string; bullets: string[]; overview: string;
  deliver: string[]; process: { title: string; text: string }[]; stack: string[]; goodFor: string[]; related: string[]; shots: Shot[];
}
export const servicesIntro = 'Freelance web development from first wireframe to deployment, built around the way I already work on my own projects.';

const site = (file: string, alt: string, caption: string, w = 1200, h = 750): Shot => ({ src: `/services/${file}`, alt, caption, w, h });
const cover = (slug: string, title: string): Shot => ({ src: `/projects/${slug}.jpg`, alt: `${title} project cover`, caption: `${title}: project cover`, w: 1200, h: 800 });

export const services: Service[] = [
  {
    slug: 'website-development', title: 'Website Development', icon: 'globe',
    summary: 'Responsive websites designed in Figma and built with HTML5, CSS3, JavaScript and a Django backend.',
    bullets: ['Wireframes and high-fidelity Figma prototypes', 'Responsive layouts for mobile, tablet and desktop', 'Forms, content and data handled by Django and MySQL'],
    overview: 'I design and build websites that look right on every screen. Drawing on my freelance full-stack work and a UI/UX design course, I take a site from wireframes and high-fidelity Figma prototypes through development, testing and deployment, so you work with one person from idea to launch.',
    deliver: ['Responsive layouts that adapt to mobile, tablet and desktop', 'Figma wireframes and high-fidelity prototypes agreed before development starts', 'A clean front end in HTML5, CSS3 and JavaScript',
      'A Django (or PHP) backend for forms, content and data, with MySQL for storage', 'Git-based version control and a tested, deployed site'],
    process: [
      { title: 'Requirement gathering', text: 'We agree the goals, pages, content and features the site needs.' },
      { title: 'UI/UX design', text: 'Wireframes and high-fidelity prototypes in Figma, reviewed before any code is written.' },
      { title: 'Development', text: 'A responsive front end and, where needed, a Django backend with a MySQL database.' },
      { title: 'Testing', text: 'Checks across screen sizes, plus forms and data flows.' },
      { title: 'Deployment', text: 'The site goes live and is handed over with the source in Git.' },
    ],
    stack: ['HTML5 — semantic page structure', 'CSS3 — responsive styling and animation', 'JavaScript — interactivity', 'Figma — wireframes and prototypes',
      'Python Django — backend, forms and content', 'PHP — alternative backend option', 'MySQL — database', 'Git — version control'],
    goodFor: ['Portfolio websites', 'Business and landing pages', 'E-commerce concepts, like my Neobrew craft coffee design', 'Booking and event sites, like my Evento design', 'Wellness platforms, like my MindfulTech design'],
    related: [],
    shots: [
      site('Neobrew.jpg', 'Neobrew Coffee Craft Website', 'This Website shows the Coffee Crafting Website'),
      site('Eco.jpg', 'Eco-Friendly Website', 'This website: Shows the Eco-Friendly Products'),
      site('futuristic.jpg', 'Futuristic Digital Website', 'This website: Shows the Futuristic Digital Website'),
      
    ],
  },
  {
    slug: 'web-application-development', title: 'Web Application Development', icon: 'app',
    summary: 'Full-stack Django applications with REST APIs and MySQL, including AI chatbots and computer-vision detection apps.',
    bullets: ['Python Django backends with REST APIs and MySQL', 'AI chatbots built on Claude and ChatGPT', 'Detection and prediction apps using computer vision and ML models'],
    overview: 'As a freelance AI full-stack developer I build and deploy web applications in Python Django. That includes AI-powered chatbots on Claude and ChatGPT, detection and prediction apps that use computer vision and ML models for healthcare, public safety and transport, and predictive analytics tools. I manage the whole cycle: requirements, AI integration, backend engineering, testing and deployment.',
    deliver: ['Custom full-stack web applications in Python Django with MySQL', 'REST APIs for connecting your app with other systems', 'AI chatbots with prompts designed for Claude or ChatGPT',
      'Computer vision and ML model integration, with alerts and automatic incident logging', 'Predictive analytics tools that turn structured inputs into forecasts and business insight', 'Django admin interfaces for managing records and content'],
    process: [
      { title: 'Requirement gathering', text: 'We define the problem, the users and what the application must do.' },
      { title: 'AI integration planning', text: 'Choosing where an LLM or ML model fits and how it connects to the app.' },
      { title: 'Backend engineering', text: 'Django models, REST APIs and the database, with the front end on top.' },
      { title: 'Testing', text: 'Functional checks on the application and on the AI-driven parts.' },
      { title: 'Deployment', text: 'The application is deployed and handed over with its source and setup notes.' },
    ],
    stack: ['Python — application logic and model integration', 'Django — backend, admin and web interface', 'REST APIs — integrations and data exchange', 'MySQL — database',
      'Claude and ChatGPT — conversational AI through designed prompts', 'Computer Vision and ML models — detection and prediction', 'HTML5, CSS3, JavaScript — front end', 'Git — version control'],
    goodFor: ['Healthcare assistants and image-analysis tools', 'Public safety and transport monitoring', 'Customer enquiry chatbots', 'Management and workflow automation systems', 'Forecasting and reporting tools'],
    related: ['medical-chatbot', 'railway-enquiry-chatbot', 'accident-detection-system', 'smoking-detection-system', 'ulcer-detection-tool', 'ai-job-recommendation-resume-screening'],
    shots: [
      site('Ai_job.jpg', 'AI Based Job Recommendation & Resume Screening', 'This Web application provides job recommedation & Resume Shortlisting'),
      site('Ai_rest.jpg', 'AI Restaurant Recommendation System', 'This Web application provides recommended restaurant & Cuisine based on sentiment analysis'),
      cover('medical-chatbot', 'Medical Chatbot'), cover('railway-enquiry-chatbot', 'Railway Enquiry Chatbot'), cover('accident-detection-system', 'Accident Detection System'),
    ],
  },
];
export const getService = (slug: string) => services.find(s => s.slug === slug);
