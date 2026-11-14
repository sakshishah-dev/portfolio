import { useEffect } from 'react';
import { profile } from '../content/profile';
import { CardButton, Lanyard } from './IdCard';

// Small badge in the corner whenever the big ID card is out of sight (scrolled past, or on a project page).
export function CardDock({ show, onOpen }: { show: boolean; onOpen: () => void }) {
  return (
    <button className={`dock${show ? ' show' : ''}`} onClick={onOpen} aria-hidden={!show} tabIndex={show ? 0 : -1}
      aria-label="Show Sakshi's ID card">
      <span className="dock-ring" aria-hidden="true" />
      <span className="dock-av" aria-hidden="true">SS</span>
      <span className="dock-txt"><b>{profile.name}</b><small>{profile.status}</small></span>
      <span className="dock-open" aria-hidden="true">View ID</span>
    </button>
  );
}

// Pop-up: the full card drops down from the top of the screen on its lanyard.
export function CardModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="card-modal" role="dialog" aria-modal="true" aria-label="Sakshi's ID card" onClick={onClose}>
      <div className="card-modal-drop" onClick={(e) => e.stopPropagation()}>
        <Lanyard className="lanyard-long" />
        <CardButton autoFocus />
      </div>
      <button className="card-modal-close" onClick={onClose} aria-label="Close ID card">×</button>
    </div>
  );
}
