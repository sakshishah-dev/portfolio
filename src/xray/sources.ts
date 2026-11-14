// Pulls the REAL source files into the site at build time, so X-ray shows the actual code.
const files = import.meta.glob(
  ['../sections/*.tsx', '../pages/*.tsx', '../components/*.tsx', '../content/*.ts'],
  { query: '?raw', import: 'default', eager: true },
) as Record<string, string>;

export function sourceOf(path: string): string {
  return files[`../${path}`] ?? '// Source not found';
}
