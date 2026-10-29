import type { Project, ProjectDetail } from './types';

// Bundled copy of the portfolio projects (from the resume and cover images). Used when the API is unreachable or empty,
// and to fill in cover images and case-study detail. Keep in sync with backend/projects/management/commands/seed_portfolio.py.
export const projectCovers: Record<string, string> = {
  'medical-chatbot': '/projects/medical-chatbot.jpg',
  'railway-enquiry-chatbot': '/projects/railway-enquiry-chatbot.jpg',
  'accident-detection-system': '/projects/accident-detection-system.jpg',
  'smoking-detection-system': '/projects/smoking-detection-system.jpg',
  'ulcer-detection-tool': '/projects/ulcer-detection-tool.jpg',
  'ai-job-recommendation-resume-screening': '/projects/AI-Powered_Job_Matching_Banner.jpg',
};
export const coverOf = (p: Pick<Project, 'slug' | 'thumbnail'>): string | null => p.thumbnail || projectCovers[p.slug] || null;

export const fallbackProjects: ProjectDetail[] = [
  {
    "slug": "medical-chatbot",
    "title": "Medical Chatbot",
    "summary": "AI health assistant for symptom checks and medical Q&A.",
    "description": "An AI health assistant that handles symptom checks and general medical questions in a simple chat interface. Prompts were designed to guide Claude toward context-aware, easy-to-follow conversational responses, with a Django backend and MySQL behind it.",
    "technologies": [
      "Python",
      "Django",
      "Claude",
      "MySQL"
    ],
    "featured": true,
    "case_study_content": {
      "Domain": "Healthcare",
      "Overview": "An AI health assistant that handles symptom checks and general medical questions in a simple chat interface. Prompts were designed to guide Claude toward context-aware, easy-to-follow conversational responses, with a Django backend and MySQL behind it.",
      "Problem": "People often want quick, understandable answers to basic health questions before they can reach a professional. A conversational assistant can explain common symptoms and point to sensible next steps.",
      "Key features": [
        "Answers everyday health queries in plain language",
        "Symptom checks through natural conversation",
        "Context-aware replies shaped by prompts designed for Claude",
        "Basic guidance and wellness tips",
        "Appointment support"
      ],
      "How it works": [
        "The user describes symptoms or asks a medical question in the chat.",
        "The Django backend sends the message to Claude together with prompts designed to keep answers context-aware.",
        "Claude's reply is returned and shown in the conversation.",
        "The conversation continues turn by turn."
      ],
      "Technology stack": [
        "Python — application logic and prompt handling",
        "Django — web backend and chat interface",
        "Claude (Anthropic) — conversational responses guided by designed prompts",
        "MySQL — database"
      ],
      "Note": "Provides general information only and does not replace professional medical advice."
    },
    "thumbnail": null,
    "github_url": "",
    "live_demo_url": "",
    "updated_at": ""
  },
  {
    "slug": "railway-enquiry-chatbot",
    "title": "Railway Enquiry Chatbot",
    "summary": "Intelligent chatbot for Indian Railway: PNR status, live schedules and booking help.",
    "description": "An intelligent chatbot for Indian Railway enquiries. Travellers ask about PNR status, live train schedules and booking help in natural language, powered by ChatGPT prompt flows on a Django backend.",
    "technologies": [
      "Python",
      "Django",
      "ChatGPT",
      "REST APIs"
    ],
    "featured": true,
    "case_study_content": {
      "Domain": "Transport",
      "Overview": "An intelligent chatbot for Indian Railway enquiries. Travellers ask about PNR status, live train schedules and booking help in natural language, powered by ChatGPT prompt flows on a Django backend.",
      "Problem": "Railway information is spread across screens and forms, while passengers simply want a quick answer, such as where their train is or whether a PNR is confirmed.",
      "Key features": [
        "PNR status checks",
        "Live train status and schedules",
        "Train timings and general enquiries",
        "Seat availability and booking help",
        "Natural-language questions handled by ChatGPT prompt flows"
      ],
      "How it works": [
        "The passenger types a question, for example a PNR status or a train schedule.",
        "ChatGPT prompt flows interpret the request and work out what information is needed.",
        "The Django backend uses REST APIs to fetch the railway information.",
        "The answer is composed and returned in the chat window."
      ],
      "Technology stack": [
        "Python — application logic",
        "Django — web backend and chat interface",
        "ChatGPT (OpenAI) — natural-language understanding through prompt flows",
        "REST APIs — connect the chatbot to railway information"
      ]
    },
    "thumbnail": null,
    "github_url": "",
    "live_demo_url": "",
    "updated_at": ""
  },
  {
    "slug": "accident-detection-system",
    "title": "Accident Detection System",
    "summary": "Real-time road accident detection that alerts authorities.",
    "description": "A real-time road accident detection system. AI/ML models analyse camera or sensor input and alert authorities when an accident is detected, while a Django backend automatically logs the incident data.",
    "technologies": [
      "Computer Vision",
      "Django"
    ],
    "featured": true,
    "case_study_content": {
      "Domain": "Public safety and transport",
      "Overview": "A real-time road accident detection system. AI/ML models analyse camera or sensor input and alert authorities when an accident is detected, while a Django backend automatically logs the incident data.",
      "Problem": "After a road accident every minute before help arrives matters, yet crashes are often noticed late. Automatic detection shortens the gap between an accident and an emergency response.",
      "Key features": [
        "Real-time accident detection with computer vision",
        "Instant alerts to authorities and emergency contacts",
        "Location details sent with each alert",
        "Automatic logging of incident data",
        "Incident records stored by the Django backend"
      ],
      "How it works": [
        "Video or sensor input is monitored continuously.",
        "Computer vision and ML models detect an accident in the feed.",
        "An alert with the incident details is sent to the authorities.",
        "The Django backend logs the incident automatically for later review."
      ],
      "Technology stack": [
        "Computer Vision — detects accidents from camera or sensor data",
        "AI / ML models — classification and alert triggering",
        "Django — backend, alert handling and incident logging",
        "Python — model integration and application logic"
      ]
    },
    "thumbnail": null,
    "github_url": "",
    "live_demo_url": "",
    "updated_at": ""
  },
  {
    "slug": "smoking-detection-system",
    "title": "Smoking Detection System",
    "summary": "Detects smoking in restricted zones and triggers instant alerts.",
    "description": "A computer-vision system that detects smoking in restricted zones and triggers instant alert notifications, helping keep offices, schools, hospitals and public spaces smoke-free.",
    "technologies": [
      "Computer Vision",
      "Django"
    ],
    "featured": false,
    "case_study_content": {
      "Domain": "Public safety",
      "Overview": "A computer-vision system that detects smoking in restricted zones and triggers instant alert notifications, helping keep offices, schools, hospitals and public spaces smoke-free.",
      "Problem": "Smoking rules in restricted areas are hard to enforce with manual patrols alone, and the fire and health risks are real.",
      "Key features": [
        "AI-powered detection of smoking behaviour in video feeds",
        "Instant alerts to security or authorities",
        "Continuous real-time monitoring",
        "Incident reports and analytics to track compliance"
      ],
      "How it works": [
        "Camera feeds from restricted zones are monitored.",
        "Computer vision detects smoking behaviour in the footage.",
        "An alert notification is triggered immediately.",
        "The incident is recorded so patterns can be reviewed and compliance improved."
      ],
      "Technology stack": [
        "Computer Vision — detects smoking in video feeds",
        "Django — backend, alert notifications and incident records",
        "Python — application logic"
      ]
    },
    "thumbnail": null,
    "github_url": "",
    "live_demo_url": "",
    "updated_at": ""
  },
  {
    "slug": "ulcer-detection-tool",
    "title": "Ulcer Detection Tool",
    "summary": "Medical image analysis platform for early-stage ulcer detection.",
    "description": "A medical image analysis platform for early-stage foot ulcer detection. A user uploads a foot image, AI analyses it, and the platform returns results and recommendations to support clinical decisions.",
    "technologies": [
      "Medical Imaging AI",
      "Django"
    ],
    "featured": false,
    "case_study_content": {
      "Domain": "Healthcare",
      "Overview": "A medical image analysis platform for early-stage foot ulcer detection. A user uploads a foot image, AI analyses it, and the platform returns results and recommendations to support clinical decisions.",
      "Problem": "Foot ulcers that go unnoticed can lead to serious complications. Early, easy-to-use image-based screening helps patients and clinicians act sooner.",
      "Key features": [
        "Image analysis: upload a foot image for AI-powered review",
        "Early-stage ulcer detection",
        "Results with practical recommendations",
        "Progress tracking over time",
        "Simple, non-invasive workflow"
      ],
      "How it works": [
        "A foot image is uploaded through the web interface.",
        "AI models analyse the image for signs of an ulcer.",
        "The platform shows the result together with recommendations.",
        "Progress can be tracked to support treatment decisions."
      ],
      "Technology stack": [
        "Medical Imaging AI — image analysis for early-stage ulcer detection",
        "Django — web platform and results delivery",
        "Python — application logic"
      ],
      "Note": "Supports clinical decisions and does not replace professional diagnosis."
    },
    "thumbnail": null,
    "github_url": "",
    "live_demo_url": "",
    "updated_at": ""
  },
  {
    "slug": "ai-job-recommendation-resume-screening",
    "title": "AI-Based Job Recommendation & Resume Screening System",
    "summary": "AI-powered platform for resume screening and personalized job recommendations.",
    "description": "A web-based recruitment platform developed using Python and Django that analyzes resumes, extracts candidate skills and qualifications, and recommends suitable job opportunities based on job descriptions. The system helps job seekers discover relevant vacancies and assists recruiters in screening candidates efficiently.",
    "technologies": [
      "Python",
      "Django",
      "Artificial Intelligence",
      "Natural Language Processing",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    "featured": false,
    "case_study_content": {
      "Domain": "Recruitment and Human Resources",
      "Overview": "An AI-powered recruitment web application that automates resume screening and recommends suitable job opportunities based on candidate skills, qualifications, and experience. Developed using Python, Django, and MySQL, the platform simplifies job searching and supports efficient candidate evaluation.",
      "Problem": "Job seekers often struggle to find relevant vacancies, while recruiters spend considerable time manually reviewing resumes. Automated resume analysis and personalized job recommendations can reduce repetitive work and improve recruitment efficiency.",
      "Key features": [
        "Resume upload and information extraction from PDF and DOCX files",
        "AI-based resume screening and candidate evaluation",
        "Personalized job recommendations based on candidate profiles",
        "Resume-to-job compatibility scoring",
        "Candidate profile and skill management",
        "Job posting and management for recruiters",
        "Job application and status tracking",
        "Dashboard for recommended jobs and resume analysis results"
      ],
      "How it works": [
        "The job seeker registers, logs in, and uploads a resume through the web interface.",
        "The Django backend processes the resume and extracts skills, qualifications, education, and experience.",
        "AI and text-processing techniques compare candidate information with available job descriptions.",
        "The system calculates matching scores and ranks suitable job opportunities.",
        "The job seeker reviews recommendations and applies for relevant vacancies.",
        "Recruiters manage job listings, review candidate profiles, and evaluate applications through the dashboard."
      ],
      "Technology stack": [
        "Python — application logic, resume processing, and matching algorithms",
        "Django — web backend, authentication, and recruitment workflows",
        "Artificial Intelligence and NLP — resume analysis, skill extraction, and job recommendations",
        "MySQL — storage for candidate profiles, job listings, and application records",
        "HTML, CSS, JavaScript, Bootstrap — responsive user interface and dashboards",
        "PDF/DOCX processing libraries — resume text extraction"
      ],
      "Note": "Job recommendations and compatibility scores support recruitment decisions but do not guarantee candidate suitability. Human review is essential for fair and informed hiring decisions."
    },
    "thumbnail": "/projects/AI-Powered_Job_Matching_Banner.jpg",
    "github_url": "",
    "live_demo_url": "",
    "updated_at": ""
  }
];
