import { profile } from '../content/profile';
import { useUi, Xr } from '../components/Ui';

export function Hero() {
  const { goTo, startReplay } = useUi();
  return (
    <Xr as="section" id="top" className="wrap hero" label="Hero" file="sections/Hero.tsx"
      note="Plain HTML and CSS: no images or scripts are needed to read it, so it appears instantly, even on slow mobile data.">
      <p className="eyebrow">{profile.role} · {profile.city}</p>
      <h1>I build and run a live client app <em>on my own</em>, from code to client demos.</h1>
      <p className="lede">{profile.intro}</p>
      <div className="actions">
        <a className="btn primary" href="#/" onClick={(e) => { e.preventDefault(); goTo('work'); }}>See my work</a>
        <a className="btn" href="#/" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Contact me</a>
      </div>
      <p className="hint" data-xr-ignore>
        Developer? Turn on <b>X-ray</b> (top right) to see the code behind any part of this page, or{' '}
        <button className="linkish" onClick={startReplay}>watch this page get built ▶</button>
      </p>
      <ul className="facts">
        {profile.facts.map((f) => (
          <li key={f.big}><b>{f.big}</b>{f.small}</li>
        ))}
      </ul>
    </Xr>
  );
}
