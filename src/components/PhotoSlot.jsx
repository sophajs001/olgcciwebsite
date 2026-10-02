export default function PhotoSlot({ label, arch = false, style = {}, src, portrait = false }) {
  return (
    <div className={`${src ? 'parish-photo' : 'photo-slot'}${arch ? ' arch' : ''}${portrait ? ' parish-photo--portrait' : ''}`} style={style}>
      {src ? <img src={src} alt={label} loading="lazy" decoding="async" /> : <span>{label}</span>}
    </div>
  );
}
