import { projects, type Project } from '../content/projects';
import { useUi, Xr } from '../components/Ui';

function Thumb({ p }: { p: Project }) {
  return (
    <div className={`thumb thumb-${p.thumb}`} style={{ background: p.color }} aria-hidden="true">
      {p.thumb === 'phone' && <span className="mini-phone"><i /><i /><i /><i /></span>}
      {p.thumb === 'board' && <span className="mini-board"><span><i /><i /></span><span><i /></span><span><i /><i /><i /></span></span>}
      {p.thumb === 'soon' && <span className="mini-soon">in progress</span>}
    </div>
  );
}

export function Work() {
  const { dataReady } = useUi();
  return (
    <Xr as="section" id="work" className="wrap" label="Work" file="sections/Work.tsx"
      note="Cards are generated from content/projects.ts. Adding a project = adding one object; its card and case-study page appear automatically.">
      <h2>Work</h2>
      {!dataReady ? (
        <ul className="cards">
          {[0, 1, 2].map((i) => <li key={i} className="card skeleton"><span>Loading projects…</span></li>)}
        </ul>
      ) : (
        <ul className="cards">
          {projects.map((p) => {
            const body = (
              <>
                <Thumb p={p} />
                <span className="kind">{p.kind}</span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                {p.sections && <span className="more">Read the case study →</span>}
              </>
            );
            return (
              <li key={p.slug} className={`card${p.sections ? '' : ' soon'}`}>
                {p.sections ? <a href={`#/work/${p.slug}`}>{body}</a> : <div className="card-body">{body}</div>}
              </li>
            );
          })}
        </ul>
      )}
    </Xr>
  );
}
