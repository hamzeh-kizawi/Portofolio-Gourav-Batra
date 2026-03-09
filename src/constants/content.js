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
    degree: 'MBA — International Management',
    institution: 'Anhalt University of Applied Sciences',
    location: 'Köthen, Germany',
    period: '2020 – 2022',
    description:
      'Specialized in international business strategy, marketing management, and cross-cultural leadership. Thesis focused on CRM automation — achieving a 32% efficiency improvement in marketing operations workflows.',
    thesis: '32% efficiency improvement via CRM automation',
    highlight: true,
  },
  {
    degree: 'Erasmus Exchange — Business & Marketing',
    institution: 'University of Valladolid',
    location: 'Valladolid, Spain',
    period: '2021',
    description:
      'Semester abroad through the Erasmus+ program. Studied international marketing strategy and participated in cross-European student business projects.',
    thesis: null,
    highlight: false,
  },
  {
    degree: 'BBA — Marketing Management',
    institution: 'Maharshi Dayanand University',
    location: 'Rohtak, India',
    period: '2014 – 2017',
    description:
      'Bachelor of Business Administration with a specialization in Marketing Management. Coursework covered consumer behaviour, brand management, advertising, and market research.',
    thesis: null,
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
      'German — Intermediate (B1)',
      'Spanish — Basic (A2)',
    ],
  },
]

// ─── VOLUNTEER ────────────────────────────────────────────────────────────────

export const volunteer = [
  {
    title: 'Student Union Election Campaign Lead',
    organization: 'Anhalt University of Applied Sciences',
    location: 'Köthen, Germany',
    year: '2024',
    description:
      'Led the student union election campaign — designing outreach strategy, coordinating campaign materials, and presenting at university-wide events. Delivered a keynote presentation on student welfare and international student integration.',
    photo: votePic,
    photoAlt: 'Gourav Batra at student union election campaign',
  },
  {
    title: 'Diwali Cultural Event Coordinator',
    organization: 'Anhalt University of Applied Sciences',
    location: 'Köthen, Germany',
    year: '2025',
    description:
      'Organized and coordinated Diwali 2021 — a 200+ attendee cultural celebration that brought together students from 20+ nationalities. Managed logistics, entertainment, and communications from concept to execution.',
    photo: awardCeremonyPhoto,
    photoAlt: 'Gourav Batra at Diwali cultural event award ceremony',
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
  {
    id: 'expense-intelligence',
    title: 'Expense Intelligence Suite',
    subtitle: 'Financial Operations & Reporting Pipeline',
    description:
      'Designed and implemented the financial operations layer for EUThink — an expense management system with real-time spend tracking, category breakdowns, and project-level budget attribution across 9 international partner organizations.',
    role: 'Operations Architect',
    tags: ['Financial Ops', 'Reporting', 'Data Visualization', 'Automation', 'Budget Tracking'],
    screenshots: [
      {
        label: 'Expense Dashboard',
        image: expenseManager,
        caption: 'Real-time spending over time with category and per-project budget attribution',
      },
      {
        label: 'Organizations',
        image: dashboardOrgs,
        caption: '9 partner organizations tracked across Austria, Slovakia, Bulgaria, UAE, and Portugal',
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

// ─── STATS (About section) ────────────────────────────────────────────────────

export const stats = [
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 39, suffix: '+', label: 'Projects Managed' },
  { value: 9, suffix: '', label: 'Partner Organizations' },
  { value: 6, suffix: '+', label: 'Countries' },
]
