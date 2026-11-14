import { profile } from '../content/profile';
import { Xr } from '../components/Ui';

export function HowIWork() {
  return (
    <Xr as="section" id="how" className="wrap" label="HowIWork" file="sections/HowIWork.tsx"
      note="An ordered list, because these steps really happen in this order on my client project.">
      <p className="eyebrow">How I work</p>
      <h2>From the client's idea to a live feature</h2>
      <ol className="steps">
        {profile.process.map((s, i) => (
          <li key={s.title}>
            <span className="step-n" aria-hidden="true">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </Xr>
  );
}
