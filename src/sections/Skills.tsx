import { profile } from '../content/profile';
import { Xr } from '../components/Ui';

const groups: [string, string[]][] = [
  ['Comfortable with', profile.skills.comfortable],
  ['Learning now', profile.skills.learning],
  ['Working with clients', profile.skills.working],
];

export function Skills() {
  return (
    <Xr as="section" id="skills" className="wrap" label="Skills" file="sections/Skills.tsx"
      note="Honest groups instead of star ratings or percentage bars: what I use daily, what I am learning, and how I work with clients.">
      <p className="eyebrow">Skills</p>
      <h2>What I work with</h2>
      <div className="skills">
        {groups.map(([title, items]) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>{items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </Xr>
  );
}
