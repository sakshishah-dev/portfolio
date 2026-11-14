import qrcode from 'qrcode-generator';

// Draws a QR code as an SVG, made in the browser from the text: no image file, no outside service.
// Always dark squares on white, because many phone scanners can't read light-on-dark codes.
export function QrCode({ text, size = 72, label }: { text: string; size?: number; label: string }) {
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const n = qr.getModuleCount();
  let d = '';
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (qr.isDark(r, c)) d += `M${c + 2} ${r + 2}h1v1h-1z`;
    }
  }
  return (
    <svg className="qr" width={size} height={size} viewBox={`0 0 ${n + 4} ${n + 4}`} role="img" aria-label={label} shapeRendering="crispEdges">
      <rect width={n + 4} height={n + 4} fill="#FFFFFF" />
      <path d={d} fill="#16161A" />
    </svg>
  );
}
