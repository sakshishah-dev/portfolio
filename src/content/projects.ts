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
    summary: 'A free web app for medicine and routine reminders. It reminds you on time, tracks what you took, warns before a medicine runs out, and lets family follow a parent\'s medicines.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'PWA', 'Web Push'],
    thumb: 'phone',
    color: '#0F766E',
    facts: [
      ['Role', 'Solo · idea to launch'],
      ['Stack', 'React · TypeScript · Supabase'],
      ['Status', 'Live with invited testers'],
      ['Works on', 'Android, iPhone and desktop'],
    ],
    links: [{ label: 'Open the app', href: 'https://daily-assistant-eta.vercel.app', note: 'sign-up is invite-only for now' }],
    sections: [
      {
        kind: 'text',
        heading: 'The problem',
        text: 'Remembering medicines is hard when the day gets busy, and harder for older parents. Most reminder apps are paid, full of ads or confusing. I wanted one simple, free app for medicines, water, habits and daily tasks that a family could use together.',
      },
      {
        kind: 'list',
        heading: 'What it does',
        items: [
          'Reminders at Morning, Afternoon, After Dinner and Night (at your own times) or an exact time; every day, some days, monthly or once.',
          'Tap a notification to check in, snooze for 10/30/60 minutes, or get reminded again like an alarm until it is ticked.',
          'Courses that stop by themselves ("for 5 days"), only-when-needed (SOS) medicines, and a holiday mode that pauses everything.',
          'Stock tracking: counts down every dose and warns before a medicine runs out; add a refill in one tap.',
          'Water reminders with a daily goal, plus a daily task checklist with a week view.',
          'Progress: streaks, a Sunday summary ("most often missed: Monday mornings"), fixing past days, and a report to show your doctor.',
          'Family: follow a parent\'s medicines, get a "not taken yet" alert, and manage their medicines if they allow it.',
          'Installs from the browser on any phone or computer. Sign in with a 6-digit email code, no password.',
        ],
      },
      {
        kind: 'cards',
        heading: 'Hard problems I solved',
        cards: [
          { title: 'Reminders that go out exactly once', text: 'A scheduler runs every minute. A unique key in the database works as a lock, so a reminder is never sent twice, and each run also checks the last 5 minutes so a late run still delivers.' },
          { title: 'Private, even with family', text: "Row-level security in the database: people only see their own data. A family member sees only medicines, only after accepting an invite, and can edit only with the owner's permission." },
          { title: 'One app for every device', text: 'Built as a PWA, so the same app installs on Android, iPhone and desktop. Each platform has its own notification rules, so a short setup guide walks people through turning them on.' },
          { title: 'Shaped by tester feedback', text: 'Friends and family test every release. Their feedback led to alarm-style "remind me again", a simpler refill picker and in-app feedback that reaches me by email.' },
        ],
      },
      {
        kind: 'flow',
        heading: 'How a reminder travels',
        nodes: [
          ['Database clock', 'every minute'],
          ['Serverless API', 'finds what is due'],
          ['Web Push', 'to every device'],
          ['Your phone', 'shows it, even if closed'],
        ],
        caption: 'The database wakes the API every minute; the API claims each reminder once, then sends it to all of your devices.',
      },
      {
        kind: 'text',
        heading: 'What I learned',
        text: 'Designing database security, background scheduling and push notifications, and shipping small improvements every week based on what testers say. It runs on free tiers, so it costs nothing to keep online.',
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
