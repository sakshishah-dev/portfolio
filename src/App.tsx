import { useCallback, useEffect, useState } from 'react';
import { UiContext, type XrTarget } from './components/Ui';
import { Nav } from './components/Nav';
import { CodePanel } from './components/CodePanel';
import { ReplayCaption, useReplay, LAST } from './components/BuildReplay';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { CardDock, CardModal } from './components/CardDock';
import { Footer } from './components/Footer';

// Tiny hash router: GitHub Pages serves static files, so routes live after the #.
function useRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  const m = hash.match(/^#\/work\/([\w-]+)/);
  return m ? { page: 'project' as const, slug: m[1] } : { page: 'home' as const, slug: '' };
}

export default function App() {
  const route = useRoute();
  const replay = useReplay();
  const [xray, setXray] = useState(false);
  const [code, setCode] = useState<XrTarget | null>(null);
  const [heroCardVisible, setHeroCardVisible] = useState(true);
  const [cardOpen, setCardOpen] = useState(false);

  // Watch the big hero ID card: when it scrolls out of view, the small corner badge appears.
  useEffect(() => {
    if (route.page !== 'home') { setHeroCardVisible(false); return; }
    const el = document.querySelector('.id-wrap');
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setHeroCardVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [route.page]);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [route.page, route.slug]);

  const goTo = useCallback((id: string) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window.location.hash.startsWith('#/work')) {
      window.location.hash = '#/';
      setTimeout(scroll, 60);
    } else scroll();
  }, []);

  const startReplay = useCallback(() => {
    setXray(false);
    setCode(null);
    if (window.location.hash.startsWith('#/work')) window.location.hash = '#/';
    replay.start();
  }, [replay]);

  // Each style layer switches on at its replay stage. Normal browsing = every layer on.
  const s = replay.stage ?? LAST;
  const layers = [s === 0 && 'st-empty', s >= 2 && 'st-layout', s >= 3 && 'st-look', s >= 4 && 'st-comp', s >= 6 && 'st-motion']
    .filter(Boolean)
    .join(' ');

  return (
    <UiContext.Provider value={{ xray, dataReady: s >= 5, openCode: setCode, startReplay, goTo }}>
      <div className={`app ${layers}${xray ? ' xray-on' : ''}`}>
        <a className="skip" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to content</a>
        <Nav onToggleXray={() => setXray((x) => !x)} replaying={replay.stage !== null} />
        <main id="main" tabIndex={-1}>
          {route.page === 'project' ? <Project slug={route.slug} /> : <Home />}
        </main>
        <Footer />
        {xray && <div className="xray-badge" role="status">X-ray on · click any outlined part to see its code</div>}
        <CardDock show={!heroCardVisible && !xray && replay.stage === null && !cardOpen} onOpen={() => setCardOpen(true)} />
        <CardModal open={cardOpen} onClose={() => setCardOpen(false)} />
        <ReplayCaption {...replay} />
        <CodePanel target={code} onClose={() => setCode(null)} />
      </div>
    </UiContext.Provider>
  );
}
