import styles from './coming-soon.module.css'
export const metadata = {
  title: 'The Platform – Ledger',
  description: 'One verified badge system. Six professional verticals. The infrastructure is built once.',
}

const VERTICALS = [
  {
    name: 'Ledger',
    tag: 'Internal Audit',
    color: '#B23531',
    headline: 'Your work,',
    headlineEm: 'verified.',
    sub: 'LinkedIn is self-reported. This is verified.',
    distinction: 'Not a resume. A receiptsume.',
    status: 'live',
    url: '/',
    cardUrl: '/card/dk',
    demos: ['Dave Kitchens · CPA · 10+ yrs Internal Audit'],
  },
  {
    name: 'AdmitOne',
    tag: 'Events & Memory',
    color: '#C49A3C',
    headline: 'You were there.',
    headlineEm: 'Verified.',
    sub: 'Every show. Every venue. Every setlist. Governed by the ticket, verified by the record.',
    distinction: 'Not a photo dump. A verified stub card.',
    status: 'live',
    url: 'https://admitone.vercel.app',
    demos: ['Radiohead · Red Rocks Amphitheatre · Sep 14, 2024'],
  },
  {
    name: 'Charter',
    tag: 'Therapy & Counseling',
    color: '#6B8F71',
    headline: 'Your practice,',
    headlineEm: 'credentialed.',
    sub: 'Your clinical record, verified and portable. Licensure, modalities, populations served – governed by your practice management system, attributed to you.',
    distinction: 'Not a Psychology Today profile. A governed practice record.',
    status: 'coming',
    demos: [],
  },
  {
    name: 'Pour',
    tag: 'Hospitality',
    color: '#C49A3C',
    headline: 'Your creative record,',
    headlineEm: 'clarified.',
    sub: 'Every program you built, every venue you ran, every menu you developed – governed and portable.',
    distinction: 'Like a résumé. Like a consommé. Your bar program distilled to its essence.',
    status: 'coming',
    demos: ['Sergio · Bar Professional'],
  },
  {
    name: 'Set',
    tag: 'Music & Education',
    color: '#8a6cc9',
    headline: 'Your program,',
    headlineEm: 'credentialed.',
    sub: 'Every ensemble directed, every student developed, every performance conducted – governed and shareable.',
    distinction: 'Not a bio. A record of what you built.',
    status: 'coming',
    demos: [],
  },
  {
    name: 'Stead',
    tag: 'Specialty Plant Care',
    color: '#4A9E6B',
    headline: 'I care for your plants',
    headlineEm: 'like you never left.',
    sub: 'Specialized, attentive plant care for collections that deserve more than guesswork. Every client, every species, every outcome – documented.',
    distinction: 'Not a Craigslist listing. A verified service record.',
    status: 'coming',
    demos: [],
  },
]

function SmallOrbital({ color = '#C49A3C', letter = 'ℒ', id }) {
  const pathId = `orbit-${id}`
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" style={{overflow:'visible'}} aria-hidden="true">
      <defs>
        <path id={pathId} d="M 49,28 A 21,6.5 0 1 1 7,28 A 21,6.5 0 1 1 49,28"
          transform="rotate(-20 28 28)"/>
      </defs>
      <ellipse cx="28" cy="28" rx="21" ry="6.5" fill="none"
        stroke={`${color}40`} strokeWidth="1" transform="rotate(-20 28 28)"/>
      <ellipse cx="28" cy="28" rx="14" ry="4.5" fill="none"
        stroke={`${color}22`} strokeWidth="0.75" transform="rotate(-20 28 28)"/>
      <circle r="3" fill={color} opacity="0.9">
        <animateMotion dur="14s" repeatCount="indefinite">
          <mpath href={`#${pathId}`}/>
        </animateMotion>
      </circle>
      <circle cx="28" cy="28" r="17" fill="#10202f" stroke={`${color}50`} strokeWidth="1"/>
      <text x="28" y="35" textAnchor="middle" fontSize="20"
        fontFamily="Georgia,'Times New Roman',serif" fontStyle="italic"
        fill={color} opacity="0.9">{letter}</text>
    </svg>
  )
}

export default function ComingSoon() {
  return (
    <div className={styles.page}>
      <div className={styles.glow1}/>
      <div className={styles.glow2}/>

      {/* ── PLATFORM HEADER ── */}
      <section className={styles.platformHeader}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine}/>
          <span className={styles.eyebrowText}>Dropdown Logistics · The Ledger Platform</span>
        </div>
        <h1 className={styles.platformTitle}>
          One badge system.<br/>
          <em>Six verticals.</em>
        </h1>
        <p className={styles.platformSub}>
          The architecture is built once. The data changes.
          Every professional deserves a verified record – not just auditors.
        </p>
        <div className={styles.platformMeta}>
          <div className={styles.metaItem}>
            <span className={styles.metaVal} style={{color:'var(--green)'}}>2</span>
            <span className={styles.metaLbl}>Live now</span>
          </div>
          <div className={styles.metaDiv}/>
          <div className={styles.metaItem}>
            <span className={styles.metaVal} style={{color:'var(--amber)'}}>4</span>
            <span className={styles.metaLbl}>Coming soon</span>
          </div>
          <div className={styles.metaDiv}/>
          <div className={styles.metaItem}>
            <span className={styles.metaVal}>∞</span>
            <span className={styles.metaLbl}>Verticals possible</span>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(2)].flatMap(() => VERTICALS.map((v, i) => (
            <span key={`${v.name}-${i}`} className={styles.tickerItem}>
              <span className={styles.tickerDot} style={{color: v.color}}>·</span>
              {v.name.toUpperCase()} – {v.tag.toUpperCase()}
            </span>
          )))}
        </div>
      </div>

      {/* ── VERTICALS ── */}
      <div className={styles.verticals}>
        {VERTICALS.map((v, i) => (
          <section
            key={v.name}
            className={`${styles.vertical} ${v.status === 'live' ? styles.verticalLive : styles.verticalComing}`}
            style={{'--accent': v.color}}
          >
            <div className={styles.verticalInner}>

              {/* Left */}
              <div className={styles.verticalLeft}>
                <div className={styles.verticalMeta}>
                  <SmallOrbital color={v.color} letter={v.name[0]} id={`v${i}`}/>
                  <div>
                    <div className={styles.verticalName} style={{color: v.color}}>{v.name}</div>
                    <div className={styles.verticalTag}>{v.tag}</div>
                  </div>
                  <div className={v.status === 'live' ? styles.statusLive : styles.statusComing}>
                    {v.status === 'live' ? '● LIVE' : '○ COMING SOON'}
                  </div>
                </div>

                <h2 className={styles.verticalHeadline}>
                  {v.headline}<br/>
                  <em style={{color: v.color}}>{v.headlineEm}</em>
                </h2>

                <p className={styles.verticalSub}>{v.sub}</p>

                <div className={styles.distinction} style={{borderColor: `${v.color}40`}}>
                  <span className={styles.distinctionLabel} style={{color: v.color}}>The distinction</span>
                  <span className={styles.distinctionText}>{v.distinction}</span>
                </div>

                {v.demos.length > 0 && (
                  <div className={styles.demos}>
                    <span className={styles.demosLabel}>Demo cards</span>
                    {v.demos.map((d, di) => (
                      <span key={di} className={styles.demoItem}>{d}</span>
                    ))}
                  </div>
                )}

                {v.status === 'live' ? (
                  <div className={styles.verticalActions}>
                    <a href={v.url} className={styles.btnPrimary} style={{background: v.color}}>
                      See Ledger →
                    </a>
                    {v.cardUrl && (
                      <a href={v.cardUrl} className={styles.btnSecondary} style={{borderColor: `${v.color}50`, color: v.color}}>
                        View demo card
                      </a>
                    )}
                  </div>
                ) : (
                  <div className={styles.notifyRow}>
                    <span className={styles.notifyText}>Interested in {v.name}?</span>
                    <a href="mailto:dave@dropdownlogistics.com"
                      className={styles.btnSecondary}
                      style={{borderColor: `${v.color}50`, color: v.color}}>
                      Get early access →
                    </a>
                  </div>
                )}
              </div>

              {/* Right – accent */}
              <div className={styles.verticalRight}>
                <div className={styles.accentCard} style={{borderColor: `${v.color}25`}}>
                  <div className={styles.accentCardTop} style={{borderColor: `${v.color}30`}}>
                    <span className={styles.accentCardLabel} style={{color: v.color}}>
                      {v.name} Card
                    </span>
                    <span className={v.status === 'live' ? styles.accentBadgeLive : styles.accentBadgeComing}>
                      {v.status === 'live' ? '✅ Verified' : '○ Coming Soon'}
                    </span>
                  </div>
                  <div className={styles.accentCardBody}>
                    <div className={styles.accentAvatar} style={{background: `${v.color}22`, border: `1px solid ${v.color}40`}}>
                      <span style={{color: v.color, fontFamily: 'Georgia,serif', fontStyle:'italic', fontSize:'18px'}}>
                        {v.name[0]}
                      </span>
                    </div>
                    <div>
                      <div className={styles.accentName}>{v.name} Professional</div>
                      <div className={styles.accentRole} style={{color: v.color}}>{v.tag}</div>
                    </div>
                  </div>
                  <div className={styles.accentStats}>
                    {['Record', 'Verified', 'Portable'].map((s, si) => (
                      <div key={si} className={styles.accentStat}>
                        <div className={styles.accentStatDot} style={{background: v.color}}/>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                  {v.status !== 'live' && (
                    <div className={styles.accentOverlay}>
                      <span className={styles.accentOverlayText} style={{color: v.color}}>
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <div className={styles.secLabel}>Build on the Platform</div>
          <h2 className={styles.ctaTitle}>
            Your vertical<br/>
            <em>doesn't exist yet.</em>
          </h2>
          <p className={styles.ctaSub}>
            The architecture repeats. The data changes. If your profession
            deserves a verified record, we want to hear from you.
          </p>
          <a href="mailto:dave@dropdownlogistics.com" className={styles.btnPrimary} style={{background:'var(--crimson)'}}>
            Pitch your vertical →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span>Ledger Platform · Dropdown Logistics</span>
        <span className={styles.footerMeta}>The architecture does not change. The data does.</span>
      </footer>

    </div>
  )
}
