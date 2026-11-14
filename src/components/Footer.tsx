import { useState } from 'react';
import { profile } from '../content/profile';
import { useUi, Xr } from './Ui';

export function Footer() {
  const { goTo } = useUi();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  };
  const link = (id: string, text: string) => (
    <li><a href="#/" onClick={(e) => { e.preventDefault(); goTo(id); }}>{text}</a></li>
  );
  return (
    <Xr as="footer" className="site-foot" label="Footer" file="components/Footer.tsx"
      note="A real footer: who I am, where to go, how to reach me. Same data as the rest of the site (content/profile.ts).">
      <div className="wrap foot-grid">
        <div className="foot-me">
          <span className="foot-name">{profile.name}</span>
          <span className="foot-role">{profile.role} · {profile.city}</span>
          <span className="foot-status">{profile.status} · notice period {profile.noticePeriod}</span>
        </div>
        <nav className="foot-col" aria-label="Footer">
          <span className="foot-h">On this site</span>
          <ul>
            {link('match', 'Job match')}
            {link('work', 'Work')}
            {link('experience', 'Experience')}
            {link('answers', 'Quick answers')}
          </ul>
        </nav>
        <div className="foot-col" data-xr-ignore>
          <span className="foot-h">Say hello</span>
          <ul>
            <li><button className="linkish" onClick={copy}>{copied ? 'Email copied ✓' : profile.email}</button></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
            <li><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {new Date().getFullYear()} {profile.name} · Built with React + TypeScript · <a href={profile.repo} target="_blank" rel="noreferrer">View the code</a></span>
        <a href="#/" className="to-top" onClick={(e) => { e.preventDefault(); goTo('top'); }}>Back to top ↑</a>
      </div>
    </Xr>
  );
}
