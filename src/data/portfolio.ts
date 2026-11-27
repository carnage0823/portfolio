// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Rohit Sharma",
  firstName: "Rohit",
  lastName: "Sharma",
  title: "Full-Stack Developer",
  location: "Jaipur, Rajasthan",
  email: "rohitsharma233294@gmail.com",
  phone: "+91 82902 48704",
  phoneHref: "tel:+918290248704",
  linkedin: "https://www.linkedin.com/in/rohit-sharma-941518198",
  resume: "/Rohit_Sharma_FullStack_Resume.pdf",
  careerStart: { year: 2022, month: 8 },
  roles: [
    "Full-Stack Developer",
    "React & Next.js Engineer",
    "React Native Developer",
    "Node.js Backend Engineer",
  ],
  summary:
    "Full-Stack Developer with 4+ years of experience building web and mobile applications using React.js, React Native, Next.js, TypeScript and Node.js. Experienced in implementing complex business workflows, admin portals, CMS integrations, offline mobile functionality, REST API integrations and real-time application features.",
};

export function yearsOfExperience() {
  const { year, month } = profile.careerStart;
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month);
  return Math.floor(months / 12);
}

export const highlights = [
  "Complex business workflows",
  "Admin portals & CMS",
  "Offline-first mobile",
  "Real-time features",
  "REST API integrations",
  "Regulated data (KYC)",
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Protean eGov Technologies",
    role: "Assistant Manager",
    start: "Jun 2025",
    end: "Present",
    location: "Delhi, India",
    current: true,
  },
  {
    company: "Sysquare Technologies Pvt. Ltd.",
    role: "Associate Software Engineer",
    start: "Aug 2022",
    end: "May 2025",
    location: "Jaipur, Rajasthan",
  },
];

export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  description: string;
  points: string[];
  link?: string;
};

export const featuredProjects: Project[] = [
  {
    name: "CKYCRR 2.0",
    tagline: "Central KYC Records Registry",
    stack: ["React.js", "Redux", "TypeScript", "MUI"],
    description:
      "An enhanced KYC platform used by financial institutions in India to centralize and manage customer KYC records, ensuring regulatory compliance and reducing redundancy in verification.",
    points: [
      "Developed frontend features for Reporting Entity (RE) login and sign-up workflows.",
      "Built RE-KYC lifecycle modules — create, update, deactivate, reactivate, suspend and revoke — for individual and legal entities.",
      "Implemented CERSAI admin workflows for approving and rejecting RE users and KYC requests.",
      "Designed secure, scalable interfaces for sensitive KYC data in compliance with regulatory standards.",
    ],
  },
  {
    name: "Arun Parivar Patra",
    tagline: "Govt. of Arunachal Pradesh · Household Identity",
    stack: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    description:
      "A government-led digital household identity platform creating a centralized family database to streamline citizen enrollment and delivery of welfare schemes, subsidies and public services.",
    points: [
      "Developed and maintained the public landing page and administrative portal.",
      "Built mobile app features with offline support, so key features work without an active internet connection.",
      "Implemented CMS-driven content management through the admin portal.",
      "Integrated CMS content into the landing page with dynamic rendering and seamless sync.",
    ],
  },
  {
    name: "Indonesia Open Network",
    tagline: "ION · Open Digital Commerce",
    stack: ["React.js", "Redux", "TypeScript", "MUI"],
    description:
      "An open digital commerce infrastructure connecting buyers, sellers, businesses and service providers through a unified, interoperable network.",
    points: [
      "Developed the admin portal with complex vendor and client onboarding workflows.",
      "Built multi-step onboarding with form handling, data validation and submission flows.",
      "Developed administrative modules to manage vendor and client registrations and profiles.",
      "Integrated backend APIs for onboarding operations and administrative data management.",
    ],
  },
];

export const additionalProjects: Project[] = [
  {
    name: "Bud-e",
    tagline: "Gamified social platform",
    stack: ["React.js", "Redux", "TypeScript", "MUI"],
    description:
      "A gamified platform for social mining, app building, NFT creation and AI, designed to encourage member collaboration.",
    points: [
      "Built comment functionality for posts to drive engagement.",
      "Integrated Agora live-streaming for real-time broadcasting.",
      "Integrated CometChat for real-time messaging.",
    ],
  },
  {
    name: "WHOOSIT",
    tagline: "QR-based video calling",
    stack: ["Node.js", "Express.js", "MySQL", "Sequelize"],
    description:
      "A QR-code-based video-calling app connecting visitors with owners or residents across homes, workplaces, societies and vehicles.",
    points: [
      "Developed and integrated user authentication.",
      "Designed database structures for users and connection logs with a focus on integrity and fast retrieval.",
    ],
    link: "https://whoisit.in/",
  },
  {
    name: "Anania Jewelers",
    tagline: "Mobile marketplace",
    stack: ["React Native", "Redux", "TypeScript"],
    description:
      "A mobile marketplace connecting buyers and sellers for browsing and purchasing products.",
    points: [
      "Designed and implemented responsive mobile interfaces.",
      "Built navigation flows for browsing, account management and purchases.",
      "Implemented filtering and sorting by price, category and ratings.",
    ],
  },
  {
    name: "Share4Earth",
    tagline: "WhatsApp ride-pooling chatbot",
    stack: ["Node.js", "Express.js", "TypeScript", "MongoDB"],
    description:
      "A WhatsApp chatbot for vehicle pooling that matches riders and drivers based on shared routes.",
    points: [
      "Designed a schedule-based architecture to align ride offers and requests.",
      "Built a location-based matching algorithm pairing riders and drivers by proximity and route.",
    ],
    link: "https://www.share4earth.team/",
  },
  {
    name: "Zipang Auctions",
    tagline: "Web app",
    stack: [],
    description: "Online auction platform.",
    points: [],
    link: "https://zipang.myauctions.jp/en/zipang",
  },
  {
    name: "Secure Link",
    tagline: "Mobile app",
    stack: [],
    description: "Mobile application published on Google Play.",
    points: [],
    link: "https://play.google.com/store/apps/details?id=com.securelink",
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["JavaScript", "TypeScript"] },
  {
    title: "Frontend & Mobile",
    items: ["React.js", "React Native", "Next.js", "Material UI", "shadcn/ui"],
  },
  { title: "State & Data", items: ["Redux Toolkit", "Zustand", "TanStack Query"] },
  { title: "Backend", items: ["Node.js", "Express.js"] },
  {
    title: "Databases & ORM",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Sequelize", "Prisma", "Mongoose"],
  },
  { title: "Cloud & Services", items: ["AWS S3", "Firebase", "Crashlytics", "Redis", "Sentry"] },
  {
    title: "Real-time & Communication",
    items: ["WebSockets", "SSE", "Agora", "100ms", "CometChat", "ConnectyCube", "Twilio"],
  },
  {
    title: "Other Integrations",
    items: ["Plaid", "FAST2SMS", "Brevo", "Kaleyra", "ValueFirst / Botsup", "Agenda"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Bitbucket", "VS Code", "Xcode", "Android Studio", "macOS", "Linux", "Windows"],
  },
  {
    title: "AI Development",
    items: ["Claude Code", "ChatGPT", "GitHub Copilot", "Cursor", "Windsurf"],
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  school: "Manipal University Jaipur",
  period: "Aug 2019 – Jun 2022",
  location: "Jaipur, Rajasthan",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
