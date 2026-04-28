// Brand Statement + Technology sections

const StatementSection = () => (
  <section style={{
    background: 'var(--cream)', padding: '120px 80px',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Decorative gold rule top */}
    <div style={{ position: 'absolute', top: 0, left: 80, right: 80, height: 1, background: 'var(--cream-dark)' }} />

    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
      {/* Left: editorial text */}
      <div>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--green-600)', marginBottom: 24,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{ width: 24, height: 1, background: 'var(--green-600)' }} />
          The Philosophy
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 'clamp(40px, 5vw, 64px)',
          letterSpacing: '-0.02em', lineHeight: 1.05,
          color: 'var(--green-900)', marginBottom: 32,
        }}>
          Not for everyone.<br />
          <em style={{ color: 'var(--gold-700)', fontStyle: 'italic' }}>Statistically,<br />for you.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 18,
          color: 'var(--charcoal-600)', lineHeight: 1.7,
          maxWidth: 440, marginBottom: 16,
        }}>
          You've spent years perfecting your dink. Your footwear — and everything below your waist — should match the effort.
        </p>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 18,
          color: 'var(--charcoal-600)', lineHeight: 1.7, maxWidth: 440,
        }}>
          PickleKilts are made for people who take the game seriously and dress accordingly. The court is your stage. Dress like it.
        </p>
      </div>

      {/* Right: stat grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {[
          { num: '100%', label: 'Moisture-wicking' },
          { num: '4"', label: 'Deep side pockets' },
          { num: '0', label: 'Governing bodies consulted' },
          { num: 'S–3XL', label: 'Available sizes' },
        ].map(({ num, label }) => (
          <div key={label} style={{
            background: 'var(--cream-mid)', padding: '36px 32px',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 400,
              fontSize: 52, letterSpacing: '-0.02em', lineHeight: 1,
              color: 'var(--green-800)', marginBottom: 8,
            }}>{num}</div>
            <div style={{
              fontFamily: 'var(--font-label)', fontWeight: 600,
              fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--charcoal-400)',
            }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TechnologySection = () => (
  <section id="technology" style={{
    background: 'var(--green-950)', padding: '120px 80px',
    position: 'relative',
  }}>
    {/* Subtle tartan texture */}
    <div style={{
      position: 'absolute', inset: 0, opacity: 0.06,
      backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 36px, rgba(196,154,42,1) 36px, rgba(196,154,42,1) 38px), repeating-linear-gradient(90deg, transparent, transparent 36px, rgba(196,154,42,1) 36px, rgba(196,154,42,1) 38px)`,
      pointerEvents: 'none',
    }} />

    <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--gold-500)', marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ width: 24, height: 1, background: 'var(--gold-500)' }} />
            Engineering
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 400,
            fontSize: 'clamp(36px, 5vw, 56px)',
            letterSpacing: '-0.02em', lineHeight: 1.1,
            color: 'var(--cream)',
          }}>
            Highland craft.<br />
            <em style={{ color: 'var(--gold-400)' }}>Athletic science.</em>
          </h2>
        </div>
        <div style={{
          fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16,
          color: 'var(--green-300)', lineHeight: 1.65, maxWidth: 320,
        }}>
          Every panel, pleat, and pocket engineered for the demands of competitive pickleball. Tested on real courts. By real players. In real kilts.
        </div>
      </div>

      {/* Feature grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {[
          {
            label: 'Performance Twill',
            title: 'Moves like you do',
            body: 'Four-way stretch performance twill with a 150gsm weight — light enough to sprint, structured enough to impress.',
          },
          {
            label: 'Moisture Management',
            title: 'Stays dry, stays sharp',
            body: 'Moisture-wicking lining drawn from alpine mountaineering fabric. You\'ll perspire. The kilt will not show it.',
          },
          {
            label: 'Pocket Architecture',
            title: 'Where your gear lives',
            body: '4-inch inseam side pockets, a magnetic ball pocket at the front pleat, and a hidden phone slot at the waistband.',
          },
          {
            label: 'Tartan Heritage',
            title: 'Authenticated pattern',
            body: 'A proprietary PickleKilts tartan registered with the Scottish Register of Tartans. Yes, that\'s a real thing.',
          },
          {
            label: 'Fit System',
            title: 'Elastic. Adjustable. Dignified.',
            body: 'Hidden elastic waistband with external flat-front aesthetic. Sizes S through 3XL. Adjust while on court.',
          },
          {
            label: 'Made to Order',
            title: 'No inventory. No compromise.',
            body: 'Every kilt is made to order in Edinburgh. Expect 6–8 weeks. Patience, they say, is a Highland virtue.',
          },
        ].map(({ label, title, body }) => (
          <div key={label} style={{
            background: 'var(--green-900)',
            border: '1px solid rgba(196,154,42,0.15)',
            padding: '36px 32px',
            transition: 'border-color 300ms, transform 300ms',
            cursor: 'default',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(196,154,42,0.45)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(196,154,42,0.15)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            <div style={{
              fontFamily: 'var(--font-label)', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--gold-500)', marginBottom: 14,
            }}>{label}</div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24,
              color: 'var(--cream)', lineHeight: 1.2, marginBottom: 12,
            }}>{title}</div>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 14,
              color: 'var(--green-200)', lineHeight: 1.65,
            }}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { StatementSection, TechnologySection });
