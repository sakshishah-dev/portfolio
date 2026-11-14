// Everything about me in one place. Edit here; the whole site updates.
export const profile = {
  name: 'Sakshi Shah',
  greeting: "Hi, I'm Sakshi.",
  headline: 'I build web apps people enjoy using.',
  role: 'Full-stack Web Developer',
  title: 'Associate Software Engineer',
  company: 'Tatvasoft',
  city: 'Ahmedabad, India',
  email: 'sakshishah5704@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sakshishah5704/',
  github: 'https://github.com/sakshishah-dev',
  repo: 'https://github.com/sakshishah-dev/portfolio',
  noticePeriod: '2 months',
  status: 'Open to new roles',
  intro:
    "Associate Software Engineer at Tatvasoft. For the last 1.5 years I've been the only developer on a live finance " +
    'web app for a client in Australia: Angular screens, .NET APIs, releases and client demos. Learning React on the side.',
  card: {
    facts: [
      ['Experience', '2 years'],
      ['Notice', '2 months'],
      ['Main stack', '.NET · Angular'],
      ['Based in', 'Ahmedabad'],
    ],
    why: [
      'Sole developer on a live client product',
      'Built a full Jira-style Tasks module',
      'Talks to the client directly: demos and requirements',
      'Ships side projects too: Daily Assistant',
    ],
  },
  process: [
    { title: 'Listen', text: 'Requirement calls with the client to understand what they actually need.' },
    { title: 'Plan', text: 'Break it into tasks in Jira and agree on what ships first.' },
    { title: 'Build', text: 'Angular screens and .NET APIs, built and tested end to end.' },
    { title: 'Demo & ship', text: 'Show it to the client, take feedback, release it.' },
  ],
  quickAnswers: [
    ['What is your current role?', 'Associate Software Engineer at Tatvasoft. I am the sole full-stack developer on a live finance web app for a client in Australia.'],
    ['How many years of experience?', 'About 2 years: a 6-month internship, then 1.5 years full-time, all with .NET and Angular.'],
    ['What is your notice period?', '2 months.'],
    ['What kind of role are you looking for?', 'Full-stack or front-end heavy web development roles with .NET and Angular, and I am keen to grow in React.'],
    ['Have you worked directly with clients?', 'Yes. I run demos and requirement discussions with the client, and share daily progress in Jira and Outlook.'],
    ['What are you best at?', 'Owning a feature end to end: understanding what the client needs, building it, and demoing it.'],
  ] as [string, string][],
  skills: {
    comfortable: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'C# / .NET', 'ASP.NET Core Web API', 'SQL Server (day to day)'],
    learning: ['React', 'AI features in web apps'],
    working: ['Client demos', 'Requirement discussions', 'Jira', 'Owning releases'],
  },
};
