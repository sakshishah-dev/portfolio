import { useEffect, useRef } from 'react';
import { sourceOf } from '../xray/sources';
import { highlightLine } from '../xray/highlight';
import type { XrTarget } from './Ui';

export function CodePanel({ target, onClose }: { target: XrTarget | null; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!target) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [target, onClose]);

  if (!target) return null;
  const lines = sourceOf(target.file).trimEnd().split('\n');

  return (
    <div className="cp-backdrop" onClick={onClose}>
      <aside className="cp" role="dialog" aria-modal="true" aria-label={`Source code of ${target.file}`} onClick={(e) => e.stopPropagation()}>
        <header className="cp-head">
          <div>
            <span className="cp-kicker">X-ray · real source code</span>
            <b className="cp-file">src/{target.file}</b>
          </div>
          <button ref={closeRef} className="cp-close" onClick={onClose} aria-label="Close code panel">×</button>
        </header>
        <p className="cp-why"><b>Why it's built this way:</b> {target.note}</p>
        <pre className="cp-code"><code>
          {lines.map((line, i) => (
            <span className="cp-line" key={i}>
              <i aria-hidden="true">{i + 1}</i>
              <span dangerouslySetInnerHTML={{ __html: highlightLine(line) || ' ' }} />
            </span>
          ))}
        </code></pre>
        <a className="cp-gh" href={`https://github.com/sakshishah-dev/portfolio/blob/main/src/${target.file}`} target="_blank" rel="noreferrer">
          Open this file on GitHub ↗
        </a>
      </aside>
    </div>
  );
}
