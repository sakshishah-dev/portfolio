import { profile } from '../content/profile';
import { Xr } from '../components/Ui';

export function QuickAnswers() {
  return (
    <Xr as="section" id="answers" className="wrap" label="QuickAnswers" file="sections/QuickAnswers.tsx"
      note="Native <details> elements: open and close with no JavaScript, and work with keyboards and screen readers out of the box.">
      <p className="eyebrow">Quick answers</p>
      <h2>Your screening call, already answered</h2>
      <div className="qa-list">
        {profile.quickAnswers.map(([q, a], i) => (
          <details key={q} className="qa" open={i < 2}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </Xr>
  );
}
