import { TrendingUp, Settings, BarChart2, Users } from 'lucide-react'

// Dashboard screenshots
import dashboardOverview from '@/assets/images/dashboard_overview.png'
import dashboardProjects from '@/assets/images/dashboard_projects.png'
import dashboardAnalytics from '@/assets/images/dashboard_analytics.png'
import dashboardOrgs from '@/assets/images/dashboard_organizations.png'
import expenseManager from '@/assets/images/expense_manager-dashboard.png'

// Volunteer photos
import votePic from '@/assets/images/vote-pic.jpeg'
import awardCeremonyPhoto from '@/assets/images/Award-Ceremony-Photo.jpg'

// Certification images
import hubspotImage from '@/assets/images/HubSpot.jpeg'
import hubspotInboundImage from '@/assets/images/Inbound-Marketing-Certification.jpeg'
import semrushImage from '@/assets/images/Semrush-academy.jpeg'
import mailchimpImage from '@/assets/images/Mailchimp.jpeg'
import leanSixSigmaImage from '@/assets/images/Lean-Six-Sigma.jpeg'
import recognitionImage from '@/assets/images/Recognition-from-CEO-VFS-Global.png'

// Concept project images
import theFormulaImage from '@/assets/images/The-Formula.png'
import aurpayImage from '@/assets/images/Aurpay.png'
import apaleoImage from '@/assets/images/Apaleo.png'
import loxoneImage from '@/assets/images/Loxone.png'

// Work project images
import b2bImage from '@/assets/images/B2B.png'
import euDigitalImage from '@/assets/images/EU-Digital.png'
import vfsGlobalImage from '@/assets/images/VFS-Global.png'
import euRdImage from '@/assets/images/EU-R&D.png'
import thesisImage from '@/assets/images/Masters-Thesis.png'

// ─── EXPERTISE ────────────────────────────────────────────────────────────────

export const expertise = [
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description:
      'Designing and executing data-driven growth loops across paid, owned, and earned channels — from acquisition funnels to retention campaigns that move the needle.',
    accentFrom: '#0D9488',
    accentTo: '#0F766E',
  },
  {
    icon: Settings,
    title: 'Marketing Operations',
    description:
      'Building scalable MarTech stacks, CRM workflows, and automation pipelines that eliminate friction and give teams clean, actionable data.',
    accentFrom: '#1E3A5F',
    accentTo: '#0F172A',
  },
  {
    icon: BarChart2,
    title: 'Analytics & Reporting',
    description:
      'Translating raw data into executive-ready dashboards and attribution models that connect marketing spend directly to revenue outcomes.',
    accentFrom: '#0F766E',
    accentTo: '#1E3A5F',
  },
  {
    icon: Users,
    title: 'Cross-functional Leadership',
    description:
      'Aligning sales, product, and marketing teams around shared OKRs, managing EU-wide research programs spanning 9 organizations across 6 countries.',
    accentFrom: '#0F172A',
    accentTo: '#0D9488',
  },
]

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────

export const experience = [
  {
    role: 'Marketing Project Associate',
    company: 'Austrian Association of Inclusive Society (EU R&D Agency)',
    period: '2026 – Present',
    location: 'Vienna, Austria',
    description:
      'Executing multi-channel B2B campaigns across EU innovation initiatives. Optimizing CRM workflows, funnel reporting, and marketing analytics visibility. Supporting campaign performance analysis and stakeholder communication across international teams.',
    highlights: [
      'Executing multi-channel B2B campaigns across EU innovation initiatives',
      'Optimizing CRM workflows, funnel reporting, and analytics visibility',
      'Supporting stakeholder communication across international teams',
    ],
  },
  {
    role: 'Marketing & Project Management Intern',
    company: 'EU Research & Development Agency',
    period: '2025 – 2026',
    location: 'Vienna, Austria',
    description:
      'Supported paid media campaigns across Google Ads and LinkedIn Ads. Coordinated remote stakeholders during campaign launches. Analyzed ROI indicators, CAC signals, and landing page conversion performance.',
    highlights: [
      'Supported paid media campaigns on Google Ads and LinkedIn Ads',
      'Coordinated remote stakeholders across campaign launches',
      'Analyzed ROI indicators, CAC signals, and conversion performance',
    ],
  },
  {
    role: 'Marketing & Social Media Intern',
    company: 'VAEV Research and Development Agency',
    period: '2025',
    location: 'Vienna, Austria',
    description:
      'Executed digital outreach campaigns supporting EU research initiatives. Managed SEO optimization, content calendars, and engagement analytics. Contributed to a 25% increase in campaign engagement.',
    highlights: [
      'Executed digital outreach campaigns for EU research initiatives',
      'Managed SEO, content calendars, and engagement analytics',
      '25% increase in campaign engagement',
    ],
  },
  {
    role: 'Operations Associate',
    company: 'Flink SE',
    period: '2023',
    location: 'Düsseldorf, Germany',
    description:
      'Supported logistics operations and marketing activations across teams. Assisted cross-functional coordination for operational campaigns.',
    highlights: [
      'Supported logistics operations and marketing activations',
      'Assisted cross-functional coordination for operational campaigns',
    ],
  },
  {
    role: 'Marketing Specialist',
    company: 'SI-UK Global',
    period: '2021 – 2022',
    location: 'New Delhi, India',
    description:
      'Managed B2B growth campaigns combining paid media and lifecycle marketing. Improved lead qualification processes using CRM segmentation and funnel tracking. Increased qualified leads by 30%.',
    highlights: [
      'Managed B2B growth campaigns with paid media and lifecycle marketing',
      'Improved lead qualification via CRM segmentation and funnel tracking',
      'Increased qualified leads by 30%',
    ],
  },
  {
    role: 'Junior Marketing Specialist',
    company: 'VFS Global',
    period: '2019 – 2021',
    location: 'New Delhi, India',
    description:
      'Coordinated multi-channel marketing campaigns across international markets. Analyzed advertising performance, audience data, and ROI indicators. Supported CRM reporting and campaign optimization processes.',
    highlights: [
      'Coordinated multi-channel campaigns across international markets',
      'Analyzed advertising performance, audience data, and ROI indicators',
      'Supported CRM reporting and campaign optimization',
    ],
  },
  {
    role: 'Marketing Trainee',
    company: 'VFS Global',
    period: '2018 – 2019',
    location: 'New Delhi, India',
    description:
      'Assisted digital campaign execution and performance tracking. Supported paid promotions and campaign reporting activities.',
    highlights: [
      'Assisted digital campaign execution and performance tracking',
      'Supported paid promotions and campaign reporting activities',
    ],
  },
]

// ─── EDUCATION ────────────────────────────────────────────────────────────────

export const education = [
  {
    degree: 'MBA – Marketing',
    institution: 'Anhalt University of Applied Sciences',
    location: 'Germany',
    period: '2023 – 2025',
    description:
      'Specialized in marketing management and business strategy within an international academic environment.',
    thesis: 'Agility & AI in Marketing Project Portfolio Management',
    thesisLabel: 'Research',
    highlight: true,
  },
  {
    degree: 'Marketing Certificate Program',
    institution: 'Anhalt University of Applied Sciences',
    location: 'Germany',
    period: '2023',
    description:
      'Certificate program focusing on international marketing strategy, market analysis, and campaign planning.',
    thesis: null,
    thesisLabel: null,
    highlight: false,
  },
  {
    degree: 'Erasmus Exchange Program',
    institution: 'University of Valladolid',
    location: 'Spain',
    period: '2024',
    description:
      'International academic exchange program focused on global marketing perspectives.',
    thesis: null,
    thesisLabel: null,
    highlight: false,
  },
  {
    degree: 'BBA – Marketing',
    institution: 'Maharshi Dayanand University',
    location: 'India',
    period: '2015 – 2018',
    description:
      'Undergraduate studies in marketing, management, and business administration.',
    thesis: null,
    thesisLabel: null,
    highlight: false,
  },
]

// ─── SKILLS ───────────────────────────────────────────────────────────────────

export const skills = [
  {
    category: 'Growth Marketing',
    items: [
      'Paid Acquisition (Google, Meta)',
      'SEO / SEM',
      'Demand Generation',
      'Conversion Rate Optimization',
      'Email Marketing',
      'Content Strategy',
    ],
  },
  {
    category: 'CRM & Automation',
    items: [
      'HubSpot',
      'Salesforce',
      'Marketo',
      'ActiveCampaign',
      'Workflow Automation',
      'Lead Scoring',
    ],
  },
  {
    category: 'Analytics & Data',
    items: [
      'Google Analytics 4',
      'Google Tag Manager',
      'Looker Studio',
      'Power BI',
      'Attribution Modeling',
      'KPI Dashboard Design',
    ],
  },
  {
    category: 'AI & Tech Tools',
    items: [
      'GPT-4 / ChatGPT',
      'Midjourney',
      'Notion AI',
      'Zapier',
      'Make (Integromat)',
      'Webflow',
    ],
  },
  {
    category: 'Marketing Operations',
    items: [
      'MarTech Stack Architecture',
      'Campaign Orchestration',
      'Budget Management',
      'Performance Reporting',
      'A/B Testing',
      'Project Management',
    ],
  },
  {
    category: 'Languages',
    items: [
      'English — Fluent',
      'Hindi — Native',
      'German — Upper Intermediate (B2)',
      'Spanish — Basic (A2)',
    ],
  },
]

// ─── VOLUNTEER ────────────────────────────────────────────────────────────────

export const volunteer = [
  {
    title: 'University Senate Member & Student Representative (Elected)',
    organization: 'Anhalt University of Applied Sciences',
    location: 'Köthen, Germany',
    year: '2024',
    description:
      'Contested and successfully won three student representative offices in the 2024 university elections, including the main Senate position. Led the campaign strategy through student outreach, messaging, and engagement activities across campus. Represented students in academic and policy discussions while advocating for student welfare, international student integration, and improved communication between students and university administration.',
    photo: votePic,
    photoAlt: 'Gourav Batra at university senate election campaign',
  },
  {
    title: 'Diwali Cultural Event Coordinator & Stage Host',
    organization: 'Hindu Mandir Association',
    location: 'Vienna, Austria',
    year: '2025',
    description:
      'Coordinated the 29th Diwali Mela cultural celebration organized by the Hindu Mandir Association in Vienna, attended by nearly 500 people including officials from the Embassy of India in Austria. Managed end-to-end event coordination including planning, volunteer management, performer scheduling, stage operations, and live telecast support. Also served as the event\'s stage anchor, hosting cultural performances and engaging the audience throughout the program. Received a recognition award from the organizing committee for contributions to the successful execution of the event.',
    photo: awardCeremonyPhoto,
    photoAlt: 'Gourav Batra at Diwali Mela award ceremony, Vienna',
  },
]

// ─── PROJECTS ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'euthink-platform',
    title: 'EUThink Research Platform',
    subtitle: 'EU Research Project Management System',
    description:
      'End-to-end platform for managing EU-funded research programs. As Admin, I architected the KPI framework, analytics infrastructure, and data model tracking 39 projects across 9 organizations spanning 6 countries — replacing manual spreadsheets with a live, collaborative system.',
    role: 'Platform Admin & Growth Lead',
    tags: ['MarTech', 'Analytics', 'Data Architecture', 'EU Research', 'Project Management'],
    screenshots: [
      {
        label: 'Overview',
        image: dashboardOverview,
        caption: 'Main KPI dashboard — 39 projects, 40 tasks, 50% completion rate tracked in real time',
      },
      {
        label: 'Projects',
        image: dashboardProjects,
        caption: '27 EU research projects managed across Spain, Serbia, Romania, UAE, Italy and beyond',
      },
      {
        label: 'Analytics',
        image: dashboardAnalytics,
        caption: 'KPI Metrics, PM Performance, and Resource Workload views for data-driven decisions',
      },
    ],
  },
]

// ─── DASHBOARD SCREENSHOTS (for DashboardMasonry) ─────────────────────────────

export const dashboardScreenshots = [
  { image: dashboardOverview, caption: 'Overview — 39 projects, 40 tasks live', span: 'large' },
  { image: dashboardAnalytics, caption: 'Analytics — KPI metrics & PM performance', span: 'normal' },
  { image: dashboardOrgs, caption: 'Organizations — 9 partners tracked', span: 'normal' },
  { image: dashboardProjects, caption: 'Projects — 27 EU research programs', span: 'normal' },
  { image: expenseManager, caption: 'Expense Manager — budget attribution', span: 'normal' },
]

// ─── WORK PROJECTS (Campaign & Creative) ──────────────────────────────────────

export const workProjects = [
  {
    id: 'b2b-siuk',
    title: 'B2B Lead Generation Campaign',
    subtitle: 'SI-UK Global',
    role: 'Marketing Specialist',
    description:
      'International education recruitment campaigns targeting prospective students and institutional partners.',
    highlights: [
      'CRM audience segmentation',
      'Lifecycle email automation',
      'Campaign reporting improvements',
      'Marketing funnel monitoring',
    ],
    tools: ['Salesforce', 'HubSpot', 'Email Marketing Platforms'],
    result: '30% increase in qualified leads',
    image: b2bImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'eu-digital',
    title: 'EU Digital Outreach Campaign',
    subtitle: 'VAEV Research & Development Agency',
    role: 'Marketing & Social Media Intern',
    description:
      'Digital outreach campaigns supporting EU research and innovation initiatives.',
    highlights: [
      'SEO optimization',
      'Content calendar planning',
      'Engagement analytics tracking',
      'A/B testing of campaign formats',
    ],
    tools: ['Google Analytics', 'SEMrush'],
    result: '25% engagement growth across digital channels',
    image: euDigitalImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'vfs-campaigns',
    title: 'VFS Global Campaigns',
    subtitle: 'VFS Global',
    role: 'Junior Marketing Specialist',
    description:
      'Marketing campaigns supporting global visa and government service programs across multiple international markets.',
    highlights: [
      'Digital campaign coordination',
      'Paid advertising performance monitoring',
      'Marketing analytics reporting',
      'CRM-based partner communication',
    ],
    tools: [],
    result: 'Improved campaign targeting using audience insights and performance metrics',
    image: vfsGlobalImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'eu-rd',
    title: 'EU R&D Campaigns',
    subtitle: 'EU Innovation Initiatives',
    role: 'Marketing & Project Management Intern',
    description:
      'Marketing support across EU innovation initiatives, focusing on campaign analytics and paid media performance.',
    highlights: [
      'Campaign launch coordination',
      'Paid media support (Google Ads, LinkedIn Ads)',
      'ROI and CAC analysis',
      'Landing page performance evaluation',
    ],
    tools: ['Google Ads', 'LinkedIn Ads'],
    result: 'Strengthened campaign analytics visibility for optimization decisions',
    image: euRdImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'eu-promo-video',
    title: 'EU Promotional Video — Volvente',
    subtitle: 'EU Innovation Communication',
    role: 'Concept, Script & Production',
    description:
      'Promotional video created to support EU innovation communication initiatives.',
    highlights: [
      'Developed narrative concept and script',
      'Produced and edited final video',
      'Delivered reusable digital communication asset',
    ],
    tools: [],
    result: null,
    image: null,
    video: 'https://www.youtube.com/watch?v=BNOXtzFWo7I',
    link: null,
    featured: false,
  },
  {
    id: 'fashion-doc',
    title: 'Fashion Documentary',
    subtitle: 'Wise Fashion EU Project',
    role: 'Video Editor',
    description:
      'Documentary created from large volumes of raw footage recorded by multiple contributors.',
    highlights: [
      'Organized and reviewed 100+ raw clips',
      'Reconstructed narrative structure',
      'Added infographic elements for storytelling',
    ],
    tools: [],
    result: 'Coherent documentary narrative from fragmented source footage',
    image: null,
    video: null,
    link: { url: 'https://wisefashion.eu/project-results/', label: 'View Project Results' },
    featured: false,
  },
  {
    id: 'masters-thesis',
    title: "Master's Thesis",
    subtitle: 'Agility & AI in Marketing Project Portfolio Management',
    role: 'Researcher — Anhalt University of Applied Sciences',
    description:
      'Evaluated how Agile methodologies and AI tools improve efficiency in marketing project portfolios.',
    highlights: [],
    tools: [],
    result: '32% improvement in portfolio efficiency · 27% reduction in project delays',
    image: thesisImage,
    video: null,
    link: null,
    featured: true,
  },
]

// ─── CONCEPT PROJECTS ─────────────────────────────────────────────────────────

export const conceptProjects = [
  {
    id: 'the-formula',
    title: 'The Formula – Brand Identity Concept',
    subtitle: 'Berlin Recruiting Consultancy',
    role: 'Brand Identity · Interview Assignment',
    description:
      'Minimalist logo concepts developed for a Berlin-based recruiting consultancy. The task focused on redesigning the existing identity into a cleaner and more modern brand mark suitable for digital platforms and professional recruitment branding. Multiple logo variations were explored to improve visual clarity, scalability, and brand recognition.',
    highlights: [],
    tools: [],
    result: null,
    image: theFormulaImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'aurpay',
    title: 'AURPAY – Fintech Promotional Poster',
    subtitle: 'Fintech Payment Platform',
    role: 'Visual Design · Interview Assignment',
    description:
      'Promotional poster concept designed for a fintech payment platform highlighting product benefits, trust signals, and simplified communication of crypto payment solutions. The design focused on clear visual hierarchy, modern fintech aesthetics, and strong call-to-action placement to attract merchants and technology-oriented audiences.',
    highlights: [],
    tools: [],
    result: null,
    image: aurpayImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'apaleo',
    title: 'Apaleo – SaaS Growth Strategy Concept',
    subtitle: 'Hospitality SaaS Platform',
    role: 'Growth Strategy · Interview Assignment',
    description:
      'Strategic concept presentation created for Apaleo, a hospitality SaaS platform. The project explored opportunities to improve platform adoption through app ecosystem integrations, enhanced onboarding experience, and developer engagement strategies aimed at increasing user activation and marketplace visibility.',
    highlights: [],
    tools: [],
    result: null,
    image: apaleoImage,
    video: null,
    link: null,
    featured: false,
  },
  {
    id: 'loxone',
    title: 'Loxone – Smart Audio Product Launch Strategy',
    subtitle: 'Smart Home · DACH Region',
    role: 'Performance Marketing · Interview Assignment',
    description:
      'Performance marketing strategy developed as part of an interview assignment for the Loxone Smart Audio product launch across the DACH region. The concept included full-funnel campaign planning, search and social advertising strategies, webinar lead generation campaigns, and landing page optimization to convert installers and system integrators into qualified leads.',
    highlights: [],
    tools: [],
    result: null,
    image: loxoneImage,
    video: null,
    link: null,
    featured: false,
  },
]

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────

export const certifications = [
  {
    id: 'hubspot-seo',
    name: 'SEO Certification',
    issuer: 'HubSpot',
    image: hubspotImage,
  },
  {
    id: 'hubspot-inbound',
    name: 'Inbound Marketing Certification',
    issuer: 'HubSpot',
    image: hubspotInboundImage,
  },
  {
    id: 'semrush',
    name: 'Master Your Brand Voice Certification',
    issuer: 'SEMrush Academy',
    image: semrushImage,
  },
  {
    id: 'mailchimp',
    name: 'Foundations Certification',
    issuer: 'Mailchimp',
    image: mailchimpImage,
  },
  {
    id: 'lean-six-sigma',
    name: 'Yellow Belt Certification',
    issuer: 'Lean Six Sigma',
    image: leanSixSigmaImage,
  },
]

export const recognition = {
  title: 'Recognition from CEO – VFS Global',
  label: 'Appreciation',
  description:
    'Recognised under the "Fellowship of Winners" program by the CEO of VFS Global for demonstrating exceptional dedication to operational excellence, outstanding client service quality, and consistently maintaining the highest standards in a demanding global service environment.',
  image: recognitionImage,
}

// ─── STATS (About section) ────────────────────────────────────────────────────

export const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 39, suffix: '+', label: 'Projects Managed' },
  { value: 9, suffix: '', label: 'Partner Organizations' },
  { value: 6, suffix: '+', label: 'Countries' },
]
