import { projects, type Section } from '../content/projects';
import { Xr } from '../components/Ui';

function Block({ s }: { s: Section }) {
  switch (s.kind) {
    case 'text':
      return <section className="cs-sec"><h2>{s.heading}</h2><p>{s.text}</p></section>;
    case 'list':
      return <section className="cs-sec"><h2>{s.heading}</h2><ul className="cs-list">{s.items.map((i) => <li key={i}>{i}</li>)}</ul></section>;
    case 'cards':
      return (
        <section className="cs-sec"><h2>{s.heading}</h2>
          <div className="decisions">{s.cards.map((c) => <div key={c.title} className="decision"><h3>{c.title}</h3><p>{c.text}</p></div>)}</div>
        </section>
      );
    case 'flow':
      return (
        <section className="cs-sec"><h2>{s.heading}</h2>
          <ol className="flow">{s.nodes.map(([a, b]) => <li key={a}><b>{a}</b><span>{b}</span></li>)}</ol>
          <p className="flow-cap">{s.caption}</p>
        </section>
      );
  }
}

export function Project({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug && x.sections);
  if (!p) {
    return <section className="wrap cs"><h1>Project not found</h1><p><a href="#/">← Back to all work</a></p></section>;
  }
  return (
    <Xr as="article" className="wrap cs" label="CaseStudy" file="pages/Project.tsx"
      note="One component renders every case study from data, so each project page has the same clear shape.">
      <a className="back" href="#/">← All work</a>
      <span className="kind">{p.kind}</span>
      <h1>{p.name}</h1>
      <p className="lede">{p.summary}</p>
      {p.facts && <dl className="cs-facts">{p.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
      {p.links && (
        <div className="actions">
          {p.links.map((l) => (
            <a key={l.href} className="btn primary" href={l.href} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
          {p.links.some((l) => l.note) && <span className="link-note">{p.links.find((l) => l.note)?.note}</span>}
        </div>
      )}
      {p.note && <p className="nda-note">{p.note}</p>}
      {p.sections?.map((s) => <Block key={s.heading} s={s} />)}
    </Xr>
  );
}
