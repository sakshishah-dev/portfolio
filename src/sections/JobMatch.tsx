import { useMemo, useState } from 'react';
import { matchSkills, rolePresets } from '../content/match';
import { profile } from '../content/profile';
import { useUi, Xr } from '../components/Ui';

export function JobMatch() {
  const { goTo } = useUi();
  const [text, setText] = useState(rolePresets[2][1]);
  const [preset, setPreset] = useState(2);

  const hits = useMemo(() => {
    const t = ` ${text.toLowerCase().replace(/[,;/()]/g, ' ')} `;
    return t.trim() ? matchSkills.filter((s) => s.words.some((w) => t.includes(w))) : [];
  }, [text]);
  const yes = hits.filter((h) => h.s === 'yes').length;

  return (
    <Xr as="section" id="match" className="wrap match" label="JobMatch" file="sections/JobMatch.tsx"
      note="Plain keyword matching on the page (content/match.ts): instant, private (nothing is sent anywhere) and free. Skills I'm still learning are shown honestly.">
      <div className="match-head">
        <p className="eyebrow">For recruiters</p>
        <h2>Hiring? Check if I match your job.</h2>
        <p className="lede">Pick a role, or paste your job description. You'll see which skills match, with proof for each one.</p>
      </div>
      <div className="match-box">
        <div className="match-input">
          <div className="presets" role="group" aria-label="Common roles">
            {rolePresets.map(([label, words], i) => (
              <button key={label} className="chip" aria-pressed={preset === i} onClick={() => { setPreset(i); setText(words); }}>{label}</button>
            ))}
          </div>
          <label className="field-label" htmlFor="jd">Job description</label>
          <textarea id="jd" value={text} rows={5} onChange={(e) => { setPreset(-1); setText(e.target.value); }}
            placeholder="Paste the job post here, e.g. 'Angular developer with TypeScript, REST APIs, .NET…'" />
        </div>
        <div className="match-result" aria-live="polite">
          {hits.length === 0 ? (
            <p className="match-empty">Paste a job description or pick a role to see how I match.</p>
          ) : (
            <>
              <div className="score">
                <b>{yes}<span>/{hits.length}</span></b>
                <p>skills in this job I already use at work{hits.length > yes && <>, and {hits.length - yes} I'm learning</>}</p>
              </div>
              <ul className="mlist">
                {hits.map((h) => (
                  <li key={h.name} className={h.s}>
                    <i aria-hidden="true">{h.s === 'yes' ? '✓' : '↗'}</i>
                    <span><b>{h.name}</b><small>{h.s === 'learning' ? 'Learning: ' : ''}{h.proof}</small></span>
                  </li>
                ))}
              </ul>
              <div className="match-foot">
                <span>Notice period: {profile.noticePeriod} · {profile.city}</span>
                <a className="btn primary small" href="#/" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Contact me</a>
              </div>
            </>
          )}
        </div>
      </div>
    </Xr>
  );
}
