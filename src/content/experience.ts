export type Job = { role: string; company: string; when: string; summary: string; points: string[] };

export const experience: Job[] = [
  {
    role: 'Associate Software Engineer',
    company: 'Tatvasoft',
    when: 'Jul 2025 – now',
    summary: 'Sole full-stack developer on a live finance web app for a client in Australia (.NET, Angular, SQL Server).',
    points: [
      'Built a complete Tasks module (Jira-style: create, assign and track work) inside the product.',
      "Integrated the product's public pages into a partner e-commerce website.",
      'Now adding AI-powered features to the product.',
      'Maintain the whole application: new features, fixes and releases.',
      'Run demos and requirement discussions with the client; share daily progress in Jira and Outlook.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Tatvasoft',
    when: '6 months · 2025',
    summary: 'Learned .NET and Angular from the ground up by building a complete project over six months.',
    points: [
      'Took the project from first screen to final demo as part of the internship team.',
      'Learned how a real team works: code reviews, tasks and deadlines.',
    ],
  },
];
