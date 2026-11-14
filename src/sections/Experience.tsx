import { experience } from '../content/experience';
import { useUi, Xr } from '../components/Ui';

export function Experience() {
  const { dataReady } = useUi();
  return (
    <Xr as="section" id="experience" className="wrap" label="Experience" file="sections/Experience.tsx"
      note="An ordered list (<ol>), because the order means something. The data lives in content/experience.ts.">
      <h2>Experience</h2>
      {!dataReady ? (
        <p className="skeleton-line">Loading experience…</p>
      ) : (
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.role}>
              <div className="when">{job.when}</div>
              <div>
                <h3>{job.role} <span className="at">· {job.company}</span></h3>
                <p className="job-sum">{job.summary}</p>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </li>
          ))}
        </ol>
      )}
    </Xr>
  );
}
