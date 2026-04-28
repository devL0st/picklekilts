const Hero = () => {
  const tartanBg = {
    backgroundImage: `
      repeating-linear-gradient(0deg,
        transparent, transparent 32px,
        rgba(196,154,42,0.09) 32px, rgba(196,154,42,0.09) 36px,
        transparent 36px, transparent 72px,
        rgba(14,35,24,0.6) 72px, rgba(14,35,24,0.6) 82px
      ),
      repeating-linear-gradient(90deg,
        transparent, transparent 32px,
        rgba(196,154,42,0.09) 32px, rgba(196,154,42,0.09) 36px,
        transparent 36px, transparent 72px,
        rgba(14,35,24,0.6) 72px, rgba(14,35,24,0.6) 82px
      )`,
    backgroundColor: 'var(--green-900)',
  };

  return (
    <section style={{
      ...tartanBg,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px 80px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(7,20,16,0.55) 100%)',
      }} />

      <div style={{ position: 'relative', maxWidth: 900 }}>
        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 12, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--gold-500)', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ width: 32, height: 1, background: 'var(--gold-500)' }} />
          Season One · Est. 2024
        </div>

        {/* Display headline */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 'clamp(56px, 8vw, 96px)',
          letterSpacing: '-0.02em', lineHeight: 1.0,
          color: 'var(--cream)', marginBottom: 12,
        }}>
          Engineered for<br />the Court.
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400, fontStyle: 'italic',
          fontSize: 'clamp(56px, 8vw, 96px)',
          letterSpacing: '-0.02em', lineHeight: 1.0,
          color: 'var(--gold-400)', marginBottom: 40,
        }}>
          Approved by no one.
        </h1>

        {/* Subline */}
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 20,
          color: 'var(--green-200)', lineHeight: 1.6,
          maxWidth: 520, marginBottom: 48,
        }}>
          Premium sporting kilts for the pickleball court. Scottish Highland tradition. Modern athletic performance. Deep side pockets.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <a href="#waitlist" style={{
            fontFamily: 'var(--font-label)', fontSize: 15, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            background: 'var(--gold-500)', color: 'var(--green-900)',
            padding: '16px 36px', borderRadius: 4, textDecoration: 'none',
            transition: 'background 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-400)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold-500)'}
          >Join the Waitlist</a>
          <a href="#technology" style={{
            fontFamily: 'var(--font-label)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--green-200)', textDecoration: 'none',
            padding: '16px 24px', border: '1px solid rgba(196,154,42,0.3)',
            borderRadius: 4, transition: 'color 200ms, border-color 200ms',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.color='var(--cream)'; e.currentTarget.style.borderColor='rgba(196,154,42,0.7)'; }}
          onMouseLeave={e => { e.currentTarget.style.color='var(--green-200)'; e.currentTarget.style.borderColor='rgba(196,154,42,0.3)'; }}
          >View the Kilt</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--green-300)',
        }}>Scroll</div>
        <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, var(--gold-500), transparent)' }} />
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
