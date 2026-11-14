import { useEffect, useState } from 'react';

// The page is styled in layers (see styles/). Replay removes them all, then adds them back one by one.
export const STAGES = [
  { title: 'An empty page', text: 'The browser starts with one empty <div id="root">. React is about to fill it.' },
  { title: 'Plain HTML', text: 'React renders the content as plain HTML: headings, lists, links. No styling yet, this is how a browser shows it by default.' },
  { title: 'Layout', text: 'CSS Grid and Flexbox place everything: columns, spacing and alignment, from phone to desktop.' },
  { title: 'Type and colour', text: 'Self-hosted fonts, a type scale, and colour tokens that also power dark mode.' },
  { title: 'Components', text: 'Cards, buttons and the timeline get their shape. Each one is a reusable React component.' },
  { title: 'Data', text: 'Projects and experience load from plain content files, so adding a project is one new entry.' },
  { title: 'Interaction', text: 'Hover states, focus rings for keyboard users, and gentle motion. Done!' },
];
export const LAST = STAGES.length - 1;
const STEP_MS = 2200;

export function useReplay() {
  const [stage, setStage] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (stage === null || paused) return;
    const t = setTimeout(() => setStage(stage >= LAST ? null : stage + 1), stage >= LAST ? STEP_MS + 800 : STEP_MS);
    return () => clearTimeout(t);
  }, [stage, paused]);

  return {
    stage,
    paused,
    start: () => { window.scrollTo({ top: 0 }); setPaused(false); setStage(0); },
    stop: () => setStage(null),
    togglePause: () => setPaused((p) => !p),
    step: (d: number) => setStage((s) => (s === null ? s : Math.min(LAST, Math.max(0, s + d)))),
  };
}

type Props = ReturnType<typeof useReplay>;

export function ReplayCaption({ stage, paused, stop, togglePause, step }: Props) {
  if (stage === null) return null;
  const s = STAGES[stage];
  return (
    <div className="replay-ui" role="status" aria-live="polite">
      {stage === 0 && <code className="replay-root">&lt;div id="root"&gt;&lt;/div&gt;</code>}
      <div className="replay-card">
        <div className="replay-top">
          <span className="replay-step">Step {stage + 1} of {STAGES.length}</span>
          <div className="replay-btns">
            <button onClick={() => step(-1)} disabled={stage === 0} aria-label="Previous step">‹</button>
            <button onClick={togglePause} aria-label={paused ? 'Play' : 'Pause'}>{paused ? '▶' : '❚❚'}</button>
            <button onClick={() => step(1)} disabled={stage === LAST} aria-label="Next step">›</button>
            <button onClick={stop} className="replay-skip">Skip</button>
          </div>
        </div>
        <b className="replay-title">{s.title}</b>
        <p className="replay-text">{s.text}</p>
        <div className="replay-bar" aria-hidden="true">
          {STAGES.map((_, i) => <i key={i} className={i <= stage ? 'on' : ''} />)}
        </div>
      </div>
    </div>
  );
}
