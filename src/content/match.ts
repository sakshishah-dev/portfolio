// Skills the "Check if I match your job" tool looks for in a job description.
// s: 'yes' = I use it at work today · 'learning' = honest "I'm learning this".
export type MatchSkill = { words: string[]; name: string; s: 'yes' | 'learning'; proof: string };

export const matchSkills: MatchSkill[] = [
  { words: ['angular', 'rxjs'], name: 'Angular', s: 'yes', proof: '2 years · built the full Tasks module UI' },
  { words: ['typescript', ' ts '], name: 'TypeScript', s: 'yes', proof: '2 years · every Angular screen I build' },
  { words: ['html', 'css', 'scss', 'sass', 'responsive', 'front-end', 'frontend', 'front end', ' ui '], name: 'HTML, CSS & responsive UI', s: 'yes', proof: 'Daily work · plus this portfolio' },
  { words: ['javascript', ' js '], name: 'JavaScript', s: 'yes', proof: 'Daily work' },
  { words: ['c#', 'csharp', '.net', 'dotnet', 'asp.net', 'web api', 'mvc', 'backend', 'back-end', 'back end'], name: 'C# / ASP.NET Core APIs', s: 'yes', proof: '2 years · back end of a live client product' },
  { words: ['rest', 'restful', ' api', 'apis'], name: 'REST APIs', s: 'yes', proof: 'Build them in .NET and use them from Angular, daily' },
  { words: ['full stack', 'full-stack', 'fullstack', 'end to end', 'end-to-end'], name: 'Full-stack ownership', s: 'yes', proof: 'Front end, back end and releases, on my own' },
  { words: ['sql', 'database'], name: 'SQL Server', s: 'yes', proof: 'Used day to day on the client project' },
  { words: ['client', 'communication', 'stakeholder', 'requirement', 'agile', 'jira', 'scrum'], name: 'Client communication & Jira', s: 'yes', proof: 'Demos, requirement calls, daily updates' },
  { words: ['git', 'github', 'azure devops'], name: 'Git', s: 'yes', proof: 'Daily work · every project' },
  { words: ['react', 'next.js', 'nextjs'], name: 'React', s: 'learning', proof: 'side projects in React' },
  { words: [' ai ', 'ai-', 'llm', 'openai', 'genai', 'machine learning'], name: 'AI features', s: 'learning', proof: 'adding AI features at work now' },
  { words: ['azure', 'aws', 'cloud', 'docker', 'devops', 'ci/cd'], name: 'Cloud / DevOps', s: 'learning', proof: 'basics: automatic deploys for my side projects' },
];

export const rolePresets: [string, string][] = [
  ['Angular Developer', 'Angular, TypeScript, HTML, CSS, REST APIs, responsive UI'],
  ['.NET Developer', 'C#, ASP.NET Core, Web API, SQL, REST, Git'],
  ['Full-stack Developer', 'Full-stack, Angular, .NET, REST APIs, client communication, Git'],
  ['React Developer', 'React, JavaScript, HTML, CSS, REST APIs'],
];
