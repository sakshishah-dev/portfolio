import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'theme';

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function savedTheme(): Theme | null {
  try { const t = localStorage.getItem(KEY); return t === 'light' || t === 'dark' ? t : null; } catch { return null; }
}

// Light/dark switch. Starts with the device setting; a choice is remembered on this device.
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => savedTheme() ?? systemTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111113' : '#F6F5F1');
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-anim');
    window.setTimeout(() => root.classList.remove('theme-anim'), 400);
    setTheme(next);
    try { localStorage.setItem(KEY, next); } catch { /* private mode: just don't remember */ }
  };

  return (
    <button className="tool theme-btn" onClick={toggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
      <span className="ico" aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  );
}
