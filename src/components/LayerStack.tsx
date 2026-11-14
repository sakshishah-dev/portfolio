import type { CSSProperties } from 'react';
import { Xr } from './Ui';

// The layers I build, bottom to top. Rendered as an "exploded" isometric stack in pure CSS.
const layers = [
  { id: 'data', name: 'SQL Server', role: 'the data' },
  { id: 'api', name: '.NET API', role: 'the logic' },
  { id: 'ui', name: 'Angular · React', role: 'the screens' },
  { id: 'css', name: 'HTML · CSS', role: 'the design' },
  { id: 'you', name: 'You', role: 'the button you click' },
];

function Art({ id }: { id: string }) {
  if (id === 'data') return <span className="art art-rows"><i /><i /><i /><i /></span>;
  if (id === 'api') return <span className="art art-code">{'{ }'}</span>;
  if (id === 'ui') return <span className="art art-boxes"><i /><i /><i /></span>;
  if (id === 'css') return <span className="art art-dots"><i /><i /><i /><i /></span>;
  return <span className="art art-cursor">↖</span>;
}

export function LayerStack() {
  return (
    <Xr className="stack" label="LayerStack" file="components/LayerStack.tsx"
      note="Pure CSS 3D: five divs rotated into an isometric view and spaced apart by one animated custom property (--gap). No images, no 3D library.">
      <div className="stack-scene" aria-hidden="true">
        {layers.map((l, i) => (
          <div key={l.id} className={`layer layer-${l.id}`} style={{ '--i': i } as CSSProperties}>
            <Art id={l.id} />
          </div>
        ))}
      </div>
      <ol className="stack-legend" aria-label="The layers I build, from data to the screen">
        {layers.map((l, i) => (
          <li key={l.id} data-l={l.id} style={{ '--i': i } as CSSProperties}>
            <b>{l.name}</b> <span>{l.role}</span>
          </li>
        ))}
      </ol>
    </Xr>
  );
}
