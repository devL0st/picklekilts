const { useState, useEffect } = React;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: 72,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled ? 'rgba(7,20,16,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(196,154,42,0.18)' : '1px solid transparent',
      transition: 'background 500ms, backdrop-filter 500ms, border-color 500ms',
    }}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'baseline', gap: 6, textDecoration: 'none' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 400, color: 'var(--cream)', letterSpacing: '-0.01em' }}>Pickle</span>
        <span style={{ fontFamily: 'var(--font-label)', fontSize: 22, fontWeight: 700, color: 'var(--gold-500)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Kilts</span>
      </a>

      {/* Links */}
      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {['The Kilt', 'Our Story', 'Technology', 'Press'].map(link => (
          <a key={link} href="#" style={{
            fontFamily: 'var(--font-label)', fontSize: 13, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--green-200)', textDecoration: 'none',
            transition: 'color 200ms',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--cream)'}
          onMouseLeave={e => e.target.style.color = 'var(--green-200)'}
          >{link}</a>
        ))}
        <a href="#waitlist" style={{
          fontFamily: 'var(--font-label)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          background: 'var(--gold-500)', color: 'var(--green-900)',
          padding: '10px 22px', borderRadius: 4, textDecoration: 'none',
          transition: 'background 200ms',
        }}
        onMouseEnter={e => e.target.style.background = 'var(--gold-400)'}
        onMouseLeave={e => e.target.style.background = 'var(--gold-500)'}
        >Join Waitlist</a>
      </div>
    </nav>
  );
};

Object.assign(window, { Nav });
