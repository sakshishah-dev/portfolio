// Tiny, dependency-free syntax colouring for the X-ray code panel (one line at a time).
const RE =
  /(\/\/.*$|\{\/\*.*?\*\/\})|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)|\b(import|from|export|default|const|let|function|return|if|else|type|as|true|false|null|new)\b|(<\/?[A-Za-z][\w.]*)/g;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CLASS = ['c', 's', 'k', 't'];

export function highlightLine(line: string): string {
  let out = '';
  let last = 0;
  RE.lastIndex = 0;
  for (let m = RE.exec(line); m; m = RE.exec(line)) {
    out += esc(line.slice(last, m.index));
    const kind = CLASS[[m[1], m[2], m[3], m[4]].findIndex(Boolean)];
    out += `<span class="tok-${kind}">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
  }
  return out + esc(line.slice(last));
}
