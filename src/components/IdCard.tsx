import { useId, useState } from 'react';
import { profile } from '../content/profile';
import { Xr } from './Ui';
import { QrCode } from './QrCode';

// A fabric lanyard: two woven straps meeting at a metal clasp, with a ring that goes through the card's slot.
export function Lanyard({ className = '' }: { className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={`lanyard ${className}`} viewBox="0 0 140 170" aria-hidden="true">
      <defs>
        <pattern id={`weave${id}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
          <rect width="6" height="6" fill="transparent" />
          <rect width="3" height="6" fill="rgba(255,255,255,.12)" />
        </pattern>
        <linearGradient id={`metal${id}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#F2F4F7" />
          <stop offset=".45" stopColor="#A9B0BA" />
          <stop offset=".7" stopColor="#E3E7EC" />
          <stop offset="1" stopColor="#7C838D" />
        </linearGradient>
      </defs>
      {/* straps */}
      <path className="strap" d="M28 0 L50 0 L76 118 L64 118 Z" />
      <path d="M28 0 L50 0 L76 118 L64 118 Z" fill={`url(#weave${id})`} />
      <path className="strap strap-b" d="M90 0 L112 0 L76 118 L64 118 Z" />
      <path d="M90 0 L112 0 L76 118 L64 118 Z" fill={`url(#weave${id})`} />
      <path className="stitch" d="M39 0 L70 116 M101 0 L70 116" />
      {/* clasp, swivel and ring */}
      <rect x="57" y="112" width="26" height="22" rx="6" fill={`url(#metal${id})`} stroke="#6E747D" strokeWidth="1" />
      <rect x="63" y="118" width="14" height="5" rx="2.5" fill="#6E747D" opacity=".55" />
      <rect x="66" y="134" width="8" height="9" rx="2" fill={`url(#metal${id})`} stroke="#6E747D" strokeWidth="1" />
      <ellipse cx="70" cy="155" rx="9" ry="12" fill="none" stroke={`url(#metal${id})`} strokeWidth="3.6" />
      <ellipse cx="70" cy="155" rx="9" ry="12" fill="none" stroke="#6E747D" strokeWidth=".8" opacity=".6" />
    </svg>
  );
}

// The card itself: one <button> with a front and a back face. Used in the hero and in the pop-up.
export function CardButton({ autoFocus = false }: { autoFocus?: boolean }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button className={`idcard${flipped ? ' flipped' : ''}`} onClick={() => setFlipped((f) => !f)} aria-pressed={flipped} autoFocus={autoFocus}
      aria-label={flipped ? 'ID card, back side: why hire me. Tap to flip back.' : 'ID card. Tap to see why hire me.'} data-xr-ignore>
      <span className="idcard-inner">
        <span className="id-face id-front">
          <span className="id-slot" aria-hidden="true" />
          <span className="id-top"><span className="id-org">Portfolio</span><span className="id-status">{profile.status}</span></span>
          <span className="id-avatar" aria-hidden="true">SS</span>
          <span className="id-name">{profile.name}</span>
          <span className="id-role">{profile.role}</span>
          <span className="id-facts">
            {profile.card.facts.map(([k, v]) => (
              <span key={k} className="id-fact"><small>{k}</small><b>{v}</b></span>
            ))}
          </span>
          <span className="id-foot">
            <QrCode text={profile.linkedin} label="QR code that opens Sakshi's LinkedIn profile" />
            <span className="id-scan"><b>Scan me</b>Opens my LinkedIn on your phone</span>
          </span>
          <span className="id-flip">Tap the card to flip ↻</span>
        </span>
        <span className="id-face id-back">
          <span className="id-slot" aria-hidden="true" />
          <span className="id-name">Why hire me</span>
          <span className="id-why">
            {profile.card.why.map((w) => <span key={w}>{w}</span>)}
          </span>
          <span className="id-mail">{profile.email}</span>
          <span className="id-flip">Tap to flip back ↻</span>
        </span>
      </span>
    </button>
  );
}

// Hero version: the card hanging from its lanyard.
export function IdCard() {
  return (
    <Xr className="id-wrap" label="IdCard" file="components/IdCard.tsx"
      note="An SVG lanyard (woven pattern + metal gradient) and one <button> with two faces. CSS 3D does the flip; a slow swing makes it hang like a real ID card.">
      <Lanyard />
      <CardButton />
    </Xr>
  );
}
