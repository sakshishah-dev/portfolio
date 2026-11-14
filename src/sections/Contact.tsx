import { useState } from 'react';
import { profile } from '../content/profile';
import { Xr } from '../components/Ui';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };
  return (
    <Xr as="section" id="contact" className="wrap contact" label="Contact" file="sections/Contact.tsx"
      note="No contact form and no third-party service: a copy-email button and plain links. Nothing to pay for, nothing that can break.">
      <p className="eyebrow">Contact</p>
      <h2>Let's talk</h2>
      <p className="lede">Open to full-stack and front-end web roles. Based in {profile.city}, notice period {profile.noticePeriod}. I reply within a day.</p>
      <div className="contact-rows" data-xr-ignore>
        <div className="row">
          <span>{profile.email}</span>
          <button className="mini-btn" onClick={copy}>{copied ? 'Copied ✓' : 'Copy email'}</button>
        </div>
        <a className="row" href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><span className="mini-btn">Open ↗</span></a>
        <a className="row" href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><span className="mini-btn">Open ↗</span></a>
      </div>
    </Xr>
  );
}
