import { createContext, useContext, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react';

export type XrTarget = { label: string; file: string; note: string };

type Ui = {
  xray: boolean;
  dataReady: boolean;
  openCode: (t: XrTarget) => void;
  startReplay: () => void;
  goTo: (sectionId: string) => void;
};

export const UiContext = createContext<Ui>({
  xray: false,
  dataReady: true,
  openCode: () => {},
  startReplay: () => {},
  goTo: () => {},
});
export const useUi = () => useContext(UiContext);

type XrProps = {
  label: string;
  file: string;
  note: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'article';
  id?: string;
  className?: string;
  children: ReactNode;
};

// Wraps a part of the page. With X-ray on it gets an outline + label,
// and clicking it opens that component's real source code.
export function Xr({ label, file, note, as: Tag = 'div', id, className = '', children }: XrProps) {
  const { xray, openCode } = useUi();
  const open = (e: MouseEvent | KeyboardEvent) => {
    if ((e.target as HTMLElement).closest('[data-xr-ignore]')) return;
    e.preventDefault();
    e.stopPropagation();
    openCode({ label, file, note });
  };
  return (
    <Tag
      id={id}
      className={`xr ${className}`}
      data-xr-label={`<${label} />`}
      {...(xray && {
        onClick: open,
        onKeyDown: (e: KeyboardEvent) => (e.key === 'Enter' || e.key === ' ') && open(e),
        tabIndex: 0,
        role: 'button',
        'aria-label': `Show the code for ${label}`,
      })}
    >
      {children}
    </Tag>
  );
}
