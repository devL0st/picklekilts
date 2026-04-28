const { useState } = React;

const WaitlistSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const inputStyle = {
    fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 16,
    background: 'rgba(255,255,255,0.06)', color: 'var(--cream)',
    border: '1px solid rgba(196,154,42,0.3)', borderRadius: 4,
    padding: '14px 18px', outline: 'none', width: '100%',
    transition: 'border-color 200ms',
  };

  return (
    <section id="waitlist" style={{
      background: 'var(--green-800)', padding: '120px 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Gold accent line top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, var(--gold-500) 30%, var(--gold-500) 70%, transparent)' }} />

      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--gold-500)', marginBottom: 20,
        }}>Waitlist · Season One</div>

        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 400,
          fontSize: 'clamp(40px, 6vw, 64px)',
          letterSpacing: '-0.02em', lineHeight: 1.05,
          color: 'var(--cream)', marginBottom: 20,
        }}>
          Reserve your kilt.
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 18,
          color: 'var(--green-200)', lineHeight: 1.65, marginBottom: 48,
        }}>
          We're taking names. When Season One drops, waitlist members get first access and a small discount that we'll pretend is larger than it is.
        </p>

        {submitted ? (
          <div style={{
            background: 'rgba(48,117,79,0.2)', border: '1px solid rgba(48,117,79,0.4)',
            borderRadius: 4, padding: '32px 40px',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28,
              color: 'var(--cream)', marginBottom: 10,
            }}>You're on the list.</div>
            <div style={{
              fontFamily: 'var(--font-body)', fontSize: 15,
              color: 'var(--green-200)', lineHeight: 1.6,
            }}>
              We'll be in touch when kilts are ready. In the meantime, stretch.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div style={{ textAlign: 'left' }}>
                <label style={{
                  display: 'block', fontFamily: 'var(--font-label)', fontSize: 10,
                  fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--gold-500)', marginBottom: 6,
                }}>Your Name</label>
                <input
                  style={inputStyle}
                  type="text" placeholder="First Last"
                  value={name} onChange={e => setName(e.target.value)}
                  onFocus={e => e.target.style.borderColor = 'rgba(196,154,42,0.8)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(196,154,42,0.3)'}
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <label style={{
                  display: 'block', fontFamily: 'var(--font-label)', fontSize: 10,
                  fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--gold-500)', marginBottom: 6,
                }}>Email Address</label>
                <input
                  style={inputStyle}
                  type="email" placeholder="you@example.com" required
                  value={email} onChange={e => setEmail(e.target.value)}
                  onFocus={e => e.target.style.borderColor = 'rgba(196,154,42,0.8)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(196,154,42,0.3)'}
                />
              </div>
            </div>
            <button type="submit" style={{
              fontFamily: 'var(--font-label)', fontSize: 15, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'var(--gold-500)', color: 'var(--green-900)',
              border: 'none', borderRadius: 4, padding: '16px 48px',
              cursor: 'pointer', width: '100%', marginTop: 4,
              transition: 'background 200ms',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--gold-400)'}
            onMouseLeave={e => e.target.style.background = 'var(--gold-500)'}
            >
              Join the Waitlist
            </button>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 12,
              color: 'var(--green-300)', marginTop: 14, lineHeight: 1.5,
            }}>
              No spam. No governing bodies. Just kilts.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { WaitlistSection });
