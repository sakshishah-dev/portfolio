import { profile } from '../content/profile';
import { useUi, Xr } from '../components/Ui';
import { LayerStack } from '../components/LayerStack';

export function Hero() {
  const { goTo, startReplay } = useUi();
  return (
    <Xr as="section" id="top" className="wrap hero" label="Hero" file="sections/Hero.tsx"
      note="Plain HTML and CSS: no images or scripts are needed to read it, so it appears instantly, even on slow mobile data.">
      <div className="hero-text">
        <p className="eyebrow">{profile.role} · {profile.city}</p>
        <h1>Hi, I'm Sakshi. <span className="h1-line">I build web apps, <em>from the database to the button you click.</em></span></h1>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#/" onClick={(e) => { e.preventDefault(); goTo('work'); }}>See my work</a>
          <a className="btn" href="#/" onClick={(e) => { e.preventDefault(); goTo('contact'); }}>Contact me</a>
        </div>
        <p className="hint" data-xr-ignore>
          Developer? Turn on <b>X-ray</b> to see the code behind any part of this page, or{' '}
          <button className="linkish" onClick={startReplay}>watch it get built ▶</button>
        </p>
      </div>
      <LayerStack />
      <ul className="facts">
        {profile.facts.map((f) => (
          <li key={f.big}><b>{f.big}</b>{f.small}</li>
        ))}
      </ul>
    </Xr>
  );
}
