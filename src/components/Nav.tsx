import { profile } from '../content/profile';
import { useUi, Xr } from './Ui';

export function Nav({ onToggleXray, replaying }: { onToggleXray: () => void; replaying: boolean }) {
  const { xray, goTo, startReplay } = useUi();
  const link = (id: string, text: string) => (
    <li><a href="#/" onClick={(e) => { e.preventDefault(); goTo(id); }}>{text}</a></li>
  );
  return (
    <Xr as="header" className="site-head" label="Nav" file="components/Nav.tsx"
      note="The X-ray switch lives in React context. Turning it on adds one class to the page, and CSS draws every outline and label.">
      <div className="wrap site-nav">
        <a className="logo" href="#/" onClick={(e) => { e.preventDefault(); goTo('top'); }}>{profile.name}</a>
        <ul className="nav-links">
          {link('work', 'Work')}
          {link('experience', 'Experience')}
          {link('contact', 'Contact')}
        </ul>
        <div className="tools" data-xr-ignore>
          <button className="tool" onClick={startReplay} disabled={replaying}>
            <span aria-hidden="true">▶</span> Watch it get built
          </button>
          <button className="tool switch" role="switch" aria-checked={xray} onClick={onToggleXray} disabled={replaying}>
            <span className="knob" aria-hidden="true" /> X-ray
          </button>
        </div>
      </div>
    </Xr>
  );
}
