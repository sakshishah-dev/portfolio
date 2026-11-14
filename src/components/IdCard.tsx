import { useState } from 'react';
import { profile } from '../content/profile';
import { Xr } from './Ui';
import { QrCode } from './QrCode';

// An employee-style ID card hanging from a lanyard. Tap to flip for "Why hire me".
export function IdCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <Xr className="id-wrap" label="IdCard" file="components/IdCard.tsx"
      note="One <button> with two faces. CSS 3D (rotateY + backface-visibility) does the flip; a slow swing animation makes it hang like a real ID card.">
      <span className="lanyard" aria-hidden="true" />
      <button className={`idcard${flipped ? ' flipped' : ''}`} onClick={() => setFlipped((f) => !f)} aria-pressed={flipped}
        aria-label={flipped ? 'ID card, back side: why hire me. Tap to flip back.' : 'ID card. Tap to see why hire me.'} data-xr-ignore>
        <span className="idcard-inner">
          <span className="id-face id-front">
            <span className="id-clip" aria-hidden="true" />
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
            <span className="id-clip" aria-hidden="true" />
            <span className="id-name">Why hire me</span>
            <span className="id-why">
              {profile.card.why.map((w) => <span key={w}>{w}</span>)}
            </span>
            <span className="id-mail">{profile.email}</span>
            <span className="id-flip">Tap to flip back ↻</span>
          </span>
        </span>
      </button>
    </Xr>
  );
}
