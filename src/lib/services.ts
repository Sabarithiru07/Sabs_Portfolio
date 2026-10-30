// Services are based on the freelance and project experience in the resume. Edit text here; no prices or timelines are claimed.
export interface Shot { src: string; alt: string; caption: string; w: number; h: number }
export interface Service {
  slug: string; title: string; icon: 'globe' | 'app' | 'brain' | 'eye' | 'bot'; summary: string; bullets: string[]; overview: string;
  deliver: string[]; process: { title: string; text: string }[]; stack: string[]; goodFor: string[]; related: string[]; shots: Shot[];
}
export const servicesIntro = 'Freelance websites and AI applications, from first wireframe to deployment: machine learning, computer vision, chatbots and NLP, built around the way I already work on my own projects.';

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
    slug: 'machine-learning', title: 'Machine Learning', icon: 'brain',
    summary: 'ML models and predictive analytics wrapped in Django web apps with REST APIs and MySQL.',
    bullets: ['Predictive analytics and forecasting tools', 'Recommendation and screening systems', 'ML model integration into Django with REST APIs'],
    overview: 'I turn data into working products. From predictive analytics tools that deliver data-driven forecasts to recommendation and resume-screening systems, I build the model side and the web application around it, so the result is something people can actually use, not just a notebook.',
    deliver: ['Predictive analytics tools that turn structured inputs into forecasts and business insight', 'Recommendation and matching systems, such as job recommendation with compatibility scoring',
      'ML model integration into a Python Django application', 'REST APIs for connecting the model with other systems', 'MySQL storage for records, results and history', 'Dashboards and admin screens for reviewing results'],
    process: [
      { title: 'Problem and data', text: 'We define the question to answer and look at the data that is available.' },
      { title: 'Model selection', text: 'Choosing an approach that fits the problem and the amount of data.' },
      { title: 'Integration', text: 'The model is wrapped in a Django backend with REST APIs and a simple interface.' },
      { title: 'Testing', text: 'Checks on the outputs and on how the application behaves with real inputs.' },
      { title: 'Deployment', text: 'The application is deployed and handed over with its source and setup notes.' },
    ],
    stack: ['Python — data handling and model code', 'Machine Learning models — prediction, ranking and recommendation', 'Django — backend, admin and web interface', 'REST APIs — integrations and data exchange', 'MySQL — database', 'HTML5, CSS3, JavaScript — front end', 'Git — version control'],
    goodFor: ['Forecasting and reporting tools', 'Recommendation systems', 'Resume screening and candidate matching', 'Business intelligence from structured data'],
    related: ['ai-job-recommendation-resume-screening'],
    shots: [
      site('Ai_job.jpg', 'AI Based Job Recommendation & Resume Screening', 'This web application provides job recommendation and resume shortlisting'),
      site('Ai_rest.jpg', 'AI Restaurant Recommendation System', 'This web application provides recommended restaurants and cuisine based on sentiment analysis'),
      site('Ai_job1.jpg', 'AI Job Recommendation dashboard', 'Job recommendations ranked by resume compatibility'),
    ],
  },
  {
    slug: 'computer-vision', title: 'Computer Vision', icon: 'eye',
    summary: 'Detection and image-analysis apps that watch camera feeds or images and raise alerts automatically.',
    bullets: ['Real-time detection from camera or sensor input', 'Instant alerts with automatic incident logging', 'Medical image analysis for early screening'],
    overview: 'I build computer-vision applications for healthcare, public safety and transport. A model watches a camera feed or analyses an uploaded image, and a Django backend raises the alert, logs the incident and shows the result, so the detection leads to action.',
    deliver: ['Real-time detection systems, such as road accident and smoking detection', 'Instant alert notifications with location or incident details', 'Automatic incident logging and records stored in the Django backend',
      'Medical image analysis, such as early-stage foot ulcer screening with results and recommendations', 'Reports and analytics to review incidents over time'],
    process: [
      { title: 'Use case and input', text: 'We agree what must be detected and what camera, sensor or image input is available.' },
      { title: 'Model integration', text: 'A computer-vision or medical-imaging model is connected to the application.' },
      { title: 'Alerts and logging', text: 'The backend triggers notifications and records every incident automatically.' },
      { title: 'Testing', text: 'Checks on detection behaviour and on the alert and logging flow.' },
      { title: 'Deployment', text: 'The system is deployed and handed over with its source and setup notes.' },
    ],
    stack: ['Computer Vision — detection from camera, sensor and image data', 'Medical Imaging AI — image analysis for screening', 'Python — model integration and application logic', 'Django — backend, alerts and incident logging', 'MySQL — database', 'Git — version control'],
    goodFor: ['Public safety and transport monitoring', 'Smoke-free zones in offices, schools and hospitals', 'Healthcare image screening support', 'Any workflow where a camera should trigger an alert'],
    related: ['accident-detection-system', 'smoking-detection-system', 'ulcer-detection-tool'],
    shots: [cover('accident-detection-system', 'Accident Detection System'), cover('smoking-detection-system', 'Smoking Detection System'), cover('ulcer-detection-tool', 'Ulcer Detection Tool')],
  },
  {
    slug: 'chatbots-nlp', title: 'Chatbots & NLP', icon: 'bot',
    summary: 'Conversational AI on Claude and ChatGPT with designed prompts, built into Django web apps.',
    bullets: ['Chatbots built on Claude and ChatGPT', 'Prompt design for context-aware answers', 'Resume and text analysis with NLP'],
    overview: 'I build AI chatbots that answer in plain language and fit into a real product. Using Claude and ChatGPT with carefully designed prompts, I connect the conversation to your data through a Django backend and REST APIs, for areas such as healthcare enquiries, railway information and recruitment.',
    deliver: ['Custom chatbots on Claude or ChatGPT with prompts designed for your use case', 'Natural-language understanding of user questions through prompt flows', 'REST API connections so the bot can fetch live information',
      'Text and resume analysis with NLP, including skill extraction', 'A clean chat interface inside a Django web application', 'Conversation storage in MySQL when you need it'],
    process: [
      { title: 'Use case and tone', text: 'We define who the bot talks to, what it must answer and how it should sound.' },
      { title: 'Prompt design', text: 'Prompts and flows are designed so answers stay context-aware and easy to follow.' },
      { title: 'Backend and APIs', text: 'Django and REST APIs connect the bot to the information it needs.' },
      { title: 'Testing', text: 'Conversation checks on typical and unusual questions.' },
      { title: 'Deployment', text: 'The chatbot goes live and is handed over with its source and setup notes.' },
    ],
    stack: ['Claude (Anthropic) — conversational responses guided by designed prompts', 'ChatGPT (OpenAI) — natural-language understanding through prompt flows', 'Natural Language Processing — text and resume analysis', 'Python — application logic', 'Django — backend and chat interface', 'REST APIs — connect the chatbot to live data', 'MySQL — database'],
    goodFor: ['Healthcare enquiry assistants', 'Customer and travel enquiry bots, like my railway chatbot', 'Recruitment and resume screening', 'Support and workflow automation'],
    related: ['medical-chatbot', 'railway-enquiry-chatbot', 'ai-job-recommendation-resume-screening'],
    shots: [cover('medical-chatbot', 'Medical Chatbot'), cover('railway-enquiry-chatbot', 'Railway Enquiry Chatbot'), site('Ai_rest1.jpg', 'AI Restaurant Recommendation System', 'Recommendations driven by sentiment analysis of reviews')],
  },
];
export const getService = (slug: string) => services.find(s => s.slug === slug);
