import { Achievement, SkillCategory, ProjectPlaceholder, BeyondCodeItem, TimelineStage, CreativeCraftItem, InternshipExperience } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "ATCHAYA R",
  eyebrow: "2ND YEAR STUDENT • DEVELOPER • HACKATHON ENTHUSIAST",
  role: "Developer • Hackathon Enthusiast • Creative • Dancer",
  college: "Rathinam Technical Campus",
  academicYear: "2nd Year",
  headline: "I build ideas into meaningful digital experiences.",
  philosophy: "Minimalism × Technology × Creativity × Nature × Youthful Energy",
  identityStatement: "I build, I compete, I create, I communicate, and I keep learning.",
  brandQuote: "Build with curiosity. Compete with purpose. Create with personality.",
  statusText: "Available for Hackathons & Collaborations",
  shortIntro: "2nd-year computer science engineering student at Rathinam Technical Campus. Obsessed with building robust software, competing under hackathon pressure, visual storytelling, and rhythm.",
  profileImagePlaceholder: "YOUR_PROFILE_IMAGE_HERE",
  contact: {
    email: "atchayaravi724@gmail.com",
    linkedin: "https://www.linkedin.com/in/atchaya-ravikumar-50857b374/",
    instagram: "https://www.instagram.com/achuu__24/"
  }
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "sih-2025",
    badgeText: "FINALIST",
    title: "Smart India Hackathon (SIH)",
    event: "SIH 2025",
    role: "FINALIST · 2025",
    year: "2025",
    description: "Selected as national finalist in India's premier government-backed nationwide innovation competition.",
    tag: "Click to View Photos 📸",
    highlight: true,
    galleryImages: ["./sih-1.jpg"],
    galleryTitle: "Smart India Hackathon 2025 — National Finals",
    galleryCaption: "Smart India Hackathon (SIH 2025) National Finals. Award presentation on stage with Ministry of Education dignitaries."
  },
  {
    id: "nidar-2025",
    badgeText: "FINALIST",
    title: "NIDAR Hackathon",
    event: "NIDAR 2025",
    role: "FINALIST · 2025",
    year: "2025",
    description: "Advanced to finals solving high-impact defense & tech challenges under tight time constraints.",
    tag: "Click to View Photos 📸",
    highlight: true,
    galleryImages: ["./nidar-2.jpg", "./nidar-1.jpg"],
    galleryTitle: "NIDAR Hackathon 2025 — National Finals",
    galleryCaption: "National Innovation Challenge for Drone Application and Research (NIDAR 2025). Team photos at the national competition arena."
  },
  {
    id: "visai-winner",
    badgeText: "WINNER",
    title: "VISAI Hackathon",
    event: "VISAI 2025",
    role: "WINNER",
    year: "2025",
    description: "Secured 1st Place for architectural solution design, rapid prototyping, and impactful presentation.",
    tag: "Click to View Photos 📸",
    highlight: true,
    galleryImages: ["./visai-1.png"],
    galleryTitle: "VISAI Hackathon — 1st Place Winner",
    galleryCaption: "VISAI Hackathon 1st Place Victory. Trophy presentation ceremony on stage at Vel Tech University."
  },
  {
    id: "hackathons-10plus",
    badgeText: "10+ EVENTS",
    title: "10+ Hackathons Participated",
    event: "National & Regional Circuit",
    role: "BUILD • PRESENT • LEARN",
    year: "2024 - Present",
    description: "Battle-tested through 10+ intense hackathons, honing rapid problem solving and pressure resilience.",
    tag: "Click to View Gallery 📸",
    highlight: true,
    galleryImages: [
      "./circuit-5.png",
      "./circuit-3.jpg",
      "./circuit-4.jpg",
      "./circuit-2.jpg",
      "./circuit-1.jpg"
    ],
    galleryTitle: "National & Regional Hackathon Circuit — 10+ Events",
    galleryCaption: "Highlights across 10+ hackathons: SIH Grand Finale, Maker Lab prototyping, jury presentations, and live solution pitches."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Development",
    description: "Core programming languages and engineering fundamentals.",
    skills: ["C", "Java", "DSA with Java", "Python", "Web Development"],
    icon: "Code2"
  },
  {
    title: "Creative",
    description: "Visual editing, timing, narrative rhythm, and content design.",
    skills: ["Video / Photo Editing", "Visual Storytelling", "Color Grading", "Motion Concepts"],
    icon: "Video"
  },
  {
    title: "People",
    description: "Effectively conveying ideas, pitching to judges, and teamwork.",
    skills: ["Communication", "Presentation", "Team Collaboration", "Pitching"],
    icon: "Users"
  },
  {
    title: "Mindset",
    description: "Approaching complex challenges with clarity and adaptability.",
    skills: ["Problem Solving", "Creative Thinking", "Adaptability", "Rapid Execution"],
    icon: "Brain"
  }
];

export const TECH_STACK_STRIP = [
  "C", "JAVA", "DSA WITH JAVA", "PYTHON", "HTML5", "CSS3", "JAVASCRIPT", "WEB DEVELOPMENT", "PROBLEM SOLVING"
];

export const HACKATHON_TIMELINE: TimelineStage[] = [
  { step: 1, stage: "Participate", title: "Step Out & Commit", description: "Entering hackathons to test capability against real challenges.", highlight: "10+ Hackathons" },
  { step: 2, stage: "Ideate", title: "Deconstruct Problem", description: "Analyzing problem statements, defining target scope and user impact." },
  { step: 3, stage: "Build", title: "Rapid Prototyping", description: "Architecting data structures, algorithms, and clean interfaces under time limit." },
  { step: 4, stage: "Present", title: "Pitching & Communication", description: "Articulating technical value clearly to jury members and industry leaders." },
  { step: 5, stage: "Learn", title: "Feedback & Iteration", description: "Absorbing insights from mentors, judges, and competing teams." },
  { step: 6, stage: "Improve", title: "Refining Craft", description: "Integrating DSA patterns and code modularity for the next arena." },
  { step: 7, stage: "Win", title: "Milestones & Victory", description: "SIH 2025 Finalist • NIDAR 2025 Finalist • VISAI Winner.", highlight: "SIH & NIDAR Finalist • VISAI Winner" }
];

export const INTERNSHIP_EXPERIENCE: InternshipExperience[] = [
  {
    id: "intern-01",
    role: "Software & Web Development Intern",
    company: "THIRANEX",
    period: "Duration / Term",
    location: "Remote / On-site",
    badge: "PRACTICAL EXPERIENCE",
    points: [
      "Applied core Java, Data Structures, and Web Development logic to build modular software components and user interfaces.",
      "Collaborated with cross-functional development team members to analyze problem requirements and optimize code efficiency.",
      "Engaged in rapid prototyping, debugging, and solution design for real-world software project deliverables.",
      "Prepared technical presentation materials and effectively communicated project milestones to team mentors."
    ]
  }
];

export const PROJECTS: ProjectPlaceholder[] = [
  {
    id: "proj-01",
    title: "PROJECT_NAME",
    subtitle: "FEATURED INNOVATION PROTOTYPE",
    description: "PROJECT_DESCRIPTION — High performance software application engineered with modular architecture, efficient problem solving, and intuitive responsive user interface.",
    technologies: ["TECH_01", "TECH_02", "TECH_03", "Java / DSA"],
    liveUrl: "Live Demo ↗",
    featured: true,
    category: "Full Stack Development"
  },
  {
    id: "proj-02",
    title: "PROJECT_NAME",
    subtitle: "ALGORITHMIC SYSTEM / WEB APP",
    description: "PROJECT_DESCRIPTION — Scalable digital platform featuring algorithmic data processing, clean component structures, and seamless user workflow.",
    technologies: ["TECH_01", "TECH_02", "Python"],
    liveUrl: "Live Demo ↗",
    featured: false,
    category: "Software Engineering"
  },
  {
    id: "proj-03",
    title: "PROJECT_NAME",
    subtitle: "HACKATHON WINNING SOLVER",
    description: "PROJECT_DESCRIPTION — Rapidly prototyped solution built under 36-hour hackathon pressure with efficient data flow and interactive visual components.",
    technologies: ["TECH_01", "TECH_02", "TECH_03"],
    liveUrl: "Live Demo ↗",
    featured: false,
    category: "Hackathon Project"
  }
];

export const BEYOND_CODE_ITEMS: BeyondCodeItem[] = [
  {
    id: "editing",
    title: "Video & Photo Editing",
    category: "EDITING",
    tagline: "Creative Editing & Visual Storytelling",
    description: "Translating raw footage into cohesive visual narratives with precise pacing, composition, and emotional resonance.",
    icon: "Film",
    badge: "Visual Craft"
  },
  {
    id: "communication",
    title: "Communication & Leadership",
    category: "COMMUNICATION",
    tagline: "Explaining Ideas, Presenting & Collaborating",
    description: "Bridging complex technical concepts and clear human understanding. Confident stage presence, pitch presentation, and team synergy.",
    icon: "MessageSquare",
    badge: "Human Connection"
  },
  {
    id: "dance",
    title: "Movement & Dance",
    category: "DANCE",
    tagline: "Expression, Discipline, Confidence & Energy",
    description: "Dance is a physical discipline that sharpens rhythm, focus, spatial awareness, and stage confidence—qualities that directly enrich problem solving.",
    icon: "Activity",
    badge: "Creative Energy"
  }
];

export const CREATIVE_CRAFT: CreativeCraftItem[] = [
  {
    id: "cr-1",
    title: "Rhythmic Video Pacing",
    category: "VIDEO EDITING",
    description: "Cutting to the beat, timing transitions, and aligning narrative beats to sound direction.",
    highlights: ["Beat-Sync Transitions", "Timeline Pacing", "Audio Flow"]
  },
  {
    id: "cr-2",
    title: "Color & Visual Mood",
    category: "PHOTO & COLOR GRADING",
    description: "Enhancing color balance, contrast, and visual tones to evoke clear emotional responses.",
    highlights: ["Color Palette Balance", "Visual Contrast", "Atmospheric Tone"]
  },
  {
    id: "cr-3",
    title: "Visual Story Composition",
    category: "CREATIVE STORYTELLING",
    description: "Structuring raw sequences into clean, compelling stories for presentations, event highlights, and social media.",
    highlights: ["Narrative Structure", "Sequence Composition", "Audience Engagement"]
  }
];
