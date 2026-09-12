import type { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const REPO_BASE_URL = 'https://github.com/Artur-SLO/WebDev';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/artur-v%C3%ADtor-a7a375401/';
export const GITHUB_PROFILE_URL = 'https://github.com/Artur-SLO';
export const MARVIN_REPO_URL = 'https://gitlab.labes.inf.ufes.br/marvin/marvin';
export const STUDEX_REPO_URL = 'https://github.com/lewislf/studex';
export const FACE_RECOG_REPO_URL = 'https://github.com/FeLiPeOLi7/FaceRecognitionApp/tree/main';
export const DELTASONG_REPO_URL = 'https://github.com/Artur-SLO/Deltasong';
export const DELTASONG_LIVE_URL = 'https://artur-slo.github.io/Deltasong/';

export const USER_PROFILE = {
    "name": "Artur Vítor",
    "role": "Computer Science Undergraduate @ UFES · Software Engineering Intern @ LabES",
    "headline": "Computer Science Undergraduate & Software Developer",
    "location": "Vitória, Espírito Santo, Brazil",
    "linkedin": "https://www.linkedin.com/in/artur-v%C3%ADtor-a7a375401/",
    "github": "https://github.com/Artur-SLO",
    "summary": "Computer Science undergraduate at UFES and Software Engineering Intern at LabES. I build React interfaces, Java enterprise services, and Python applications for retrieval-augmented generation and computer vision."
};

export const EXPERIENCES: ExperienceItem[] = [
    {
        "role": "Software Engineering Intern",
        "company": "LabES - UFES",
        "period": "Aug 2026 – Present",
        "location": "Vitória, Espírito Santo, Brazil · On-site",
        "type": "Internship / Scholarship",
        "description": "Contributing to Marvin, UFES’s platform for academic administration, research, and outreach, as part of the LabES Scrum team.",
        "highlights": [
            "Developing Java EE / Jakarta EE application flows with JSF, PrimeFaces, EJB, CDI, and JPA / Hibernate on WildFly.",
            "Working with access controls, CDI events, and MinIO / S3 document storage to connect modules and manage academic documents.",
            "Writing isolated business-logic tests with JUnit 5 and Mockito, alongside collaborative code reviews."
        ],
        "skills": [
            "Java",
            "Jakarta EE",
            "CDI / EJB",
            "JPA / Hibernate",
            "JUnit 5",
            "Mockito",
            "Scrum"
        ],
        "link": "https://gitlab.labes.inf.ufes.br/marvin/marvin"
    }
];

export const EDUCATION: EducationItem[] = [
    {
        "degree": "B.S. in Computer Science (Undergraduate)",
        "institution": "Universidade Federal do Espírito Santo (UFES)",
        "location": "Vitória, Espírito Santo, Brazil",
        "status": "In progress · 6th semester",
        "description": "Computer Science foundations in algorithms, operating systems, and distributed systems. Coauthored academic research on bone age prediction using transfer learning, cross-validation, ensembles, and HiResCAM.",
        "courses": [
            "Data Structures & Algorithms",
            "Software Engineering & Design Patterns",
            "Operating Systems & Networks",
            "Distributed and Event-driven Systems",
            "Applied Deep Learning & Computer Vision"
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        "id": "marvin",
        "title": "Marvin (LabES - UFES)",
        "category": "Enterprise Academic Management",
        "description": "Contributing to Marvin at LabES / UFES: an enterprise Java application supporting academic administration, research, and outreach.",
        "highlights": [
            "Java EE / Jakarta EE modules using JSF, PrimeFaces, EJB, and CDI events.",
            "JPA / Hibernate persistence and MinIO / S3 document storage on WildFly.",
            "Isolated business-logic tests with JUnit 5 and Mockito, developed within a Scrum team."
        ],
        "tags": [
            "Java",
            "Jakarta EE",
            "CDI / EJB",
            "JPA",
            "JUnit 5",
            "Mockito"
        ],
        "demoPath": "",
        "repoPath": "https://gitlab.labes.inf.ufes.br/marvin/marvin",
        "status": "Maintained",
        "iconType": "cv",
        "isExternal": true,
        "externalUrl": "https://gitlab.labes.inf.ufes.br/marvin/marvin"
    },
    {
        "id": "deltasong",
        "title": "Deltasong",
        "category": "Interactive Audio & Cloud Services",
        "description": "A music trivia web app with timed audio challenges, authentication, and a live leaderboard backed by Firebase.",
        "highlights": [
            "React and Mantine game flows with playback controlled through the YouTube IFrame API.",
            "Shared score service separates persistence and business logic from visual components.",
            "Firebase authentication, cloud persistence, and real-time leaderboard subscriptions."
        ],
        "tags": [
            "React",
            "Firebase",
            "Mantine",
            "Service Pattern",
            "YouTube API"
        ],
        "demoPath": "https://artur-slo.github.io/Deltasong/",
        "repoPath": "https://github.com/Artur-SLO/Deltasong",
        "status": "Live",
        "iconType": "music",
        "isExternal": true,
        "externalUrl": "https://artur-slo.github.io/Deltasong/"
    },
    {
        "id": "studex",
        "title": "Studex",
        "category": "AI Study Platform & RAG",
        "description": "A study platform that turns PDFs into summaries, flashcards, and mind maps through local language models and vector retrieval.",
        "highlights": [
            "PyMuPDF extraction and Qdrant retrieval with local inference through Ollama.",
            "Parallel document indexing and material generation, with map-reduce summarization for larger documents.",
            "Reused chunks, batched embeddings, and a multi-service environment orchestrated with Docker Compose."
        ],
        "tags": [
            "React",
            "Python",
            "Flask",
            "Qdrant",
            "Ollama",
            "Docker"
        ],
        "demoPath": "",
        "repoPath": "https://github.com/lewislf/studex",
        "status": "Maintained",
        "iconType": "cv",
        "isExternal": true,
        "externalUrl": "https://github.com/lewislf/studex"
    },
    {
        "id": "face-recognition",
        "title": "Face Recognition Web App",
        "category": "Computer Vision & Biometric Enrollment",
        "description": "A decoupled facial recognition application with React, Flask APIs, and a dedicated native TCP socket service for HTTP frame processing.",
        "highlights": [
            "OpenCV / dlib face embeddings, vector matching, and a NumPy fallback.",
            "Smaller recognition inputs and cached recognition results reduce repeated processing.",
            "Explicit consent checks in the enrollment interface and API for responsible biometric data handling."
        ],
        "tags": [
            "React",
            "Python",
            "Flask",
            "TCP sockets",
            "OpenCV",
            "dlib"
        ],
        "demoPath": "",
        "repoPath": "https://github.com/FeLiPeOLi7/FaceRecognitionApp/tree/main",
        "status": "Maintained",
        "iconType": "game",
        "isExternal": true,
        "externalUrl": "https://github.com/FeLiPeOLi7/FaceRecognitionApp/tree/main"
    },
    {
        "id": "shopping-cart",
        "title": "Shopping Cart",
        "category": "E-Commerce Platform",
        "description": "An e-commerce interface with a dynamic catalog, shared cart state, responsive checkout summaries, and behavior tests.",
        "highlights": [
            "Shared React state for quantities, item removal, and checkout totals.",
            "FakeStore API integration with loading and error states.",
            "Behavior tests using Vitest and React Testing Library."
        ],
        "tags": [
            "React 19",
            "React Router",
            "Vitest",
            "FakeStore API",
            "CSS"
        ],
        "demoPath": "Shopping-Cart/",
        "repoPath": "https://github.com/Artur-SLO/WebDev/tree/main/Projects/React/Shopping-Cart",
        "status": "Live",
        "iconType": "cart"
    },
    {
        "id": "cv-application",
        "title": "CV Application",
        "category": "Document & Resume Generator",
        "description": "A guided résumé builder with live editing, centralized form state, and a dedicated print layout for PDF export.",
        "highlights": [
            "Sequential wizard with interactive stepper progress bar and full-screen edit mode",
            "Responsive print CSS engine removing navigation and toolbar elements during export",
            "Centralized form state management for personal, educational, and experience details"
        ],
        "tags": [
            "React 19",
            "Vite",
            "State Management",
            "Print API",
            "CSS"
        ],
        "demoPath": "CV-Application/",
        "repoPath": "https://github.com/Artur-SLO/WebDev/tree/main/Projects/React/CV%20Application",
        "status": "Live",
        "iconType": "cv"
    }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        "title": "Frontend & Interactive Applications",
        "description": "Responsive React interfaces, typed components, application state, and interactive media.",
        "skills": [
            "React & TypeScript",
            "JavaScript & CSS Modules",
            "Mantine UI & React Router",
            "State Management & Service Pattern",
            "YouTube IFrame API & Canvas",
            "Vitest & React Testing Library"
        ]
    },
    {
        "title": "Backend & Enterprise Engineering",
        "description": "Business logic, persistence, and connected application services.",
        "skills": [
            "Java & Jakarta EE",
            "EJB / CDI & JPA / Hibernate",
            "Python / Flask & Node.js",
            "PostgreSQL & MinIO (S3 API)",
            "Firebase Authentication & Persistence",
            "JUnit 5 & Mockito"
        ]
    },
    {
        "title": "AI, Retrieval & Computer Vision",
        "description": "Local model inference, document pipelines, and computer vision applications.",
        "skills": [
            "RAG & Qdrant Vector Search",
            "Ollama & Local LLMs",
            "PyMuPDF & Document Processing",
            "Parallel Pipelines & Map-reduce",
            "OpenCV / dlib & Face Embeddings",
            "Transfer Learning & HiResCAM"
        ]
    },
    {
        "title": "Systems, Tooling & Foundations",
        "description": "Computer science fundamentals, reproducible environments, and collaborative development.",
        "skills": [
            "C, Linux & Operating Systems",
            "Data Structures & Algorithms",
            "Distributed Systems & Apache Kafka",
            "Docker & Docker Compose",
            "GitHub Actions & Git / GitLab",
            "Scrum & Peer Code Reviews"
        ]
    }
];
