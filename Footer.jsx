const FooterSection = () => (
  <footer style={{
    background: 'var(--green-950)',
    borderTop: '1px solid rgba(196,154,42,0.15)',
    padding: '64px 80px 40px',
  }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48 }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 400, color: 'var(--cream)' }}>Pickle</span>
            <span style={{ fontFamily: 'var(--font-label)', fontSize: 24, fontWeight: 700, color: 'var(--gold-500)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Kilts</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 300,
            color: 'var(--green-300)', lineHeight: 1.6, maxWidth: 260,
          }}>
            Premium sporting kilts for the pickleball court. Made in Edinburgh. Worn anywhere you dare.
          </p>
        </div>

        {/* Nav columns */}
        <div style={{ display: 'flex', gap: 64 }}>
          {[
            { heading: 'Product', links: ['The Kilt', 'Technology', 'Sizing Guide', 'Care Instructions'] },
            { heading: 'Company', links: ['Our Story', 'Press', 'Wholesale', 'Contact'] },
            { heading: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Returns'] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <div style={{
                fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--gold-500)', marginBottom: 16,
              }}>{heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <a key={link} href="#" style={{
                    fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400,
                    color: 'var(--green-300)', textDecoration: 'none',
                    transition: 'color 200ms',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.target.style.color = 'var(--green-300)'}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gold rule */}
      <div style={{ height: 1, background: 'rgba(196,154,42,0.2)', marginBottom: 24 }} />

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-body)', fontSize: 12,
          color: 'var(--green-400)',
        }}>
          © 2024 PickleKilts Ltd. No governing body was consulted. Tartan registered with the Scottish Register of Tartans.
        </div>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 600,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--green-500)',
        }}>
          Made in Edinburgh · Worn Everywhere
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { FooterSection });
