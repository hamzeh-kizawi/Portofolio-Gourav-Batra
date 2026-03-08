import { TrendingUp, Settings, BarChart2, Users } from 'lucide-react'

// Dashboard screenshots
import dashboardOverview from '@/assets/images/dashboard_overview.png'
import dashboardProjects from '@/assets/images/dashboard_projects.png'
import dashboardAnalytics from '@/assets/images/dashboard_analytics.png'
import dashboardOrgs from '@/assets/images/dashboard_organizations.png'
import expenseManager from '@/assets/images/expense_manager-dashboard.png'

// Volunteer photos
import stageSpeakingPhoto from '@/assets/images/Stage-Speaking-Photo.jpg'
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
    role: 'Growth Marketing Manager',
    company: 'Austrian Association of Inclusive Society',
    period: '2023 – Present',
    location: 'Vienna, Austria',
    description:
      'Lead all growth marketing initiatives for the association, overseeing digital outreach, CRM strategy, and community engagement programs. Manage EUThink — an EU-funded research management platform — serving 9 partner organizations across 6 countries with 39 active projects tracked in real time.',
    highlights: [
      'Grew digital community engagement by 45% in 12 months',
      'Launched EUThink v1.0.0 Beta — live EU research platform',
      'Architected KPI dashboard tracking 39 projects across 9 organizations',
    ],
  },
  {
    role: 'Marketing Operations Specialist',
    company: 'EU Research & Development Agency',
    period: '2022 – 2023',
    location: 'Vienna, Austria',
    description:
      'Owned end-to-end marketing operations across EU R&D programs — from CRM setup and lead scoring to multi-channel campaign orchestration and executive reporting. Drove a 32% efficiency gain through CRM automation that replaced manual workflows.',
    highlights: [
      '32% efficiency improvement via HubSpot CRM automation',
      'Built lead scoring model serving 3 business units',
      '40% reduction in lead response time across EU campaigns',
    ],
  },
  {
    role: 'Digital Marketing Executive',
    company: 'VAEV Research and Development Agency',
    period: '2021 – 2022',
    location: 'Vienna, Austria',
    description:
      'Managed performance marketing, SEO, and content operations for a Vienna-based R&D consultancy. Built the company\'s first attribution model connecting digital spend to pipeline and led the transition from manual reporting to automated dashboards.',
    highlights: [
      '3× ROAS improvement on paid search and social',
      'Grew organic traffic 80% over 12 months',
      'Built first marketing analytics dashboard from scratch',
    ],
  },
  {
    role: 'Performance Marketing Manager',
    company: 'Flink SE',
    period: '2020 – 2021',
    location: 'Düsseldorf, Germany',
    description:
      'Managed high-budget performance marketing campaigns for Flink SE — a fast-growing quick-commerce company. Oversaw paid acquisition across Google, Meta, and programmatic channels with a focus on CAC optimization and customer lifetime value.',
    highlights: [
      'Managed €500K+ monthly paid media budget',
      'Reduced CAC by 22% through audience segmentation',
      'Scaled user acquisition to 3 new city markets',
    ],
  },
  {
    role: 'B2B Marketing & Lead Generation Specialist',
    company: 'SI-UK Global',
    period: '2018 – 2019',
    location: 'New Delhi, India',
    description:
      'Drove B2B demand generation and lead nurturing campaigns for SI-UK\'s India operations — one of the largest UK university application services. Managed outreach programs targeting students, partner institutions, and corporate clients.',
    highlights: [
      'Generated 1,200+ qualified student leads in 8 months',
      'Launched first automated email nurture series for B2B partners',
      'Coordinated 6 university recruitment fairs across North India',
    ],
  },
  {
    role: 'Marketing & Communications Officer',
    company: 'VFS Global',
    period: '2017 – 2018',
    location: 'New Delhi, India',
    description:
      'Supported marketing communications and brand campaigns for VFS Global — the world\'s largest outsourcing and technology services specialist for governments and diplomatic missions. Managed internal comms, applicant-facing materials, and social media presence.',
    highlights: [
      'Produced weekly social content reaching 50K+ followers',
      'Revamped applicant communication templates used at 4 centers',
      'Coordinated press and PR for high-profile embassy events',
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
    year: '2021',
    description:
      'Led the student union election campaign — designing outreach strategy, coordinating campaign materials, and presenting at university-wide events. Delivered a keynote presentation on student welfare and international student integration.',
    photo: stageSpeakingPhoto,
    photoAlt: 'Gourav Batra speaking on stage at Anhalt University',
  },
  {
    title: 'Diwali Cultural Event Coordinator',
    organization: 'Anhalt University of Applied Sciences',
    location: 'Köthen, Germany',
    year: '2021',
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
