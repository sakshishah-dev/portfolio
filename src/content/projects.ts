// One object per project. Adding a project here adds its card AND its case-study page.
export type Decision = { title: string; text: string };
export type Section =
  | { kind: 'text'; heading: string; text: string }
  | { kind: 'list'; heading: string; items: string[] }
  | { kind: 'cards'; heading: string; cards: Decision[] }
  | { kind: 'flow'; heading: string; nodes: [string, string][]; caption: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  tags: string[];
  thumb: 'phone' | 'board' | 'soon';
  color: string;
  facts?: [string, string][];
  links?: { label: string; href: string; note?: string }[];
  note?: string;
  sections?: Section[];
};

export const projects: Project[] = [
  {
    slug: 'daily-assistant',
    name: 'Daily Assistant',
    kind: 'Side project · live',
    summary: 'A medicine and habit reminder app you install from the browser. Reminders arrive on time, even when the app is closed.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'PWA', 'Web Push'],
    thumb: 'phone',
    color: '#0F766E',
    facts: [
      ['Role', 'Solo · design to deployment'],
      ['Stack', 'React · TypeScript · Postgres'],
      ['Status', 'Live with invited testers'],
      ['Running cost', '₹0 / month'],
    ],
    links: [{ label: 'Open the app', href: 'https://daily-assistant-eta.vercel.app', note: 'invite-only sign-up' }],
    sections: [
      {
        kind: 'text',
        heading: 'The problem',
        text: 'People forget medicines when the day gets busy. Most reminder apps are paid, full of ads, or hard for older family members to use.',
      },
      {
        kind: 'list',
        heading: 'What I built',
        items: [
          'Reminders at morning, afternoon, after-dinner and night slots, or any custom time.',
          'Tap the notification to check in; "remind me again" repeats like an alarm until it is done.',
          'Stock and refill alerts, course duration, as-needed medicines and holiday mode.',
          'A Sunday summary and a report you can show your doctor.',
          'Works on iPhone and Android: installed from the browser, no app store needed.',
        ],
      },
      {
        kind: 'cards',
        heading: 'Hard problems I solved',
        cards: [
          { title: 'No double reminders', text: 'A scheduler runs every minute. If two runs overlap, a unique key in the database lets only one of them send.' },
          { title: 'Never miss a late run', text: 'Each run also checks the 5 minutes before, so a late or skipped run still delivers, exactly once.' },
          { title: 'Private by default', text: "Row-level security on every table: the database itself only returns a person's own rows." },
          { title: 'Login that works on iPhone', text: "Home-screen apps and Safari don't share logins, so Google sign-in breaks. A 6-digit code typed in the app always works." },
        ],
      },
      {
        kind: 'flow',
        heading: 'How a reminder travels',
        nodes: [
          ['pg_cron', 'every minute'],
          ['Serverless API', 'finds what is due'],
          ['Web Push', 'signed with VAPID'],
          ['Your phone', 'service worker'],
        ],
        caption: 'The database wakes the API every minute; the API claims each reminder, then pushes it to every device.',
      },
      {
        kind: 'text',
        heading: 'What I learned',
        text: "Designing database security, building around iPhone's limits, and running a real product with feedback from testers, all on free tiers.",
      },
    ],
  },
  {
    slug: 'finance-platform',
    name: 'Finance platform',
    kind: 'Client project · NDA',
    summary: "A live web app for a finance company in Australia. I'm the only developer: front end, back end, releases and client demos.",
    tags: ['.NET', 'ASP.NET Core', 'Angular', 'SQL Server'],
    thumb: 'board',
    color: '#26324A',
    facts: [
      ['Role', 'Sole full-stack developer'],
      ['Stack', '.NET · Angular · SQL Server'],
      ['Client', 'Finance · Australia'],
      ['Since', 'July 2025'],
    ],
    note: 'This project is under NDA, so there is no client name, code or screenshots here. I am happy to walk through the architecture and my decisions in an interview.',
    sections: [
      {
        kind: 'list',
        heading: 'What I own',
        items: [
          'All development, front end (Angular) and back end (.NET, SQL Server).',
          'Keeping the live product healthy: fixes, improvements and releases.',
          'Requirement discussions and demos with the client.',
          'Daily progress updates in Jira and Outlook.',
        ],
      },
      {
        kind: 'cards',
        heading: 'Highlights',
        cards: [
          { title: 'A full Tasks module', text: "A Jira-style module inside the product: create, assign and track tasks, so the client's team manages work without a separate tool." },
          { title: 'E-commerce integration', text: "Connected the product's public pages into a partner e-commerce website." },
          { title: 'Adding AI features', text: 'Now bringing AI-powered features into the product.' },
        ],
      },
      {
        kind: 'flow',
        heading: 'Architecture (simplified)',
        nodes: [
          ['Angular', 'front end'],
          ['ASP.NET Core', 'API + business rules'],
          ['SQL Server', 'data'],
        ],
        caption: 'A generic picture of the stack, with no client-specific details.',
      },
    ],
  },
  {
    slug: 'next',
    name: 'Next project',
    kind: 'Coming 2027',
    summary: 'A new project in React, to be announced. Follow along on GitHub.',
    tags: ['React', 'TypeScript'],
    thumb: 'soon',
    color: 'transparent',
  },
];
