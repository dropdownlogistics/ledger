import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <ReceiptsumeSection />
      <BadgeSection />
      <MoatSection />
      <FlywheelSection />
      <BusinessModelSection />
      <GeneralizationSection />
      <CTASection />
      <Footer />
    </main>
  )
}

/* ─────────────────────────────────────────
   ORBITAL
   viewBox: 0 0 560 400
   center:  280, 200
   rx/ry:   160, 52   (outer ring, tilted -20°)
   5 nodes spread clockwise from top-right
───────────────────────────────────────── */
function OrbitalHero() {
  const cx = 280, cy = 200
  const rx = 160, ry = 52
  const rot = -20

  // Node: [label, sub, nx, ny, color, delay]
  // Positioned so cards (w=96 h=50) stay well inside 560×400
  // nx/ny = top-left corner of the card
  const nodes = [
    { label: '✅ Verified', sub: 'AuditForge',    nx: 360, ny: 30,  color: '#4A9E6B', delay: '0.05s' },
    { label: '212',         sub: 'Controls',      nx: 440, ny: 172, color: '#C49A3C', delay: '0.15s' },
    { label: '4',           sub: 'Engagements',   nx: 350, ny: 316, color: '#6B9DC2', delay: '0.25s' },
    { label: 'CPA',         sub: '10+ yrs Audit', nx: 28,  ny: 310, color: '#8a6cc9', delay: '0.35s' },
    { label: 'Free',        sub: 'Forever',       nx: 16,  ny: 162, color: '#4A9E6B', delay: '0.45s' },
  ]

  // SVG animateMotion path for the orbiting dot (ellipse rotated -20°)
  const orbitD = `M ${cx + rx},${cy} A ${rx},${ry} 0 1 1 ${cx - rx},${cy} A ${rx},${ry} 0 1 1 ${cx + rx},${cy}`

  return (
    <svg
      viewBox="0 0 560 400"
      className={styles.orbitalSvg}
      aria-hidden="true"
    >
      <defs>
        <path id="op1" d={orbitD} transform={`rotate(${rot} ${cx} ${cy})`} />
        <radialGradient id="cg" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#C49A3C" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#C49A3C" stopOpacity="0"/>
        </radialGradient>
        <filter id="ns" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#000" floodOpacity="0.55"/>
        </filter>
      </defs>

      {/* Glow */}
      <circle cx={cx} cy={cy} r="80" fill="url(#cg)" />

      {/* Outer dashed orbit hint */}
      <ellipse cx={cx} cy={cy} rx={rx+18} ry={ry+18}
        fill="none" stroke="rgba(196,154,60,0.05)" strokeWidth="1" strokeDasharray="2 8"
        transform={`rotate(${rot} ${cx} ${cy})`}/>
      {/* Main ring */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
        fill="none" stroke="rgba(196,154,60,0.22)" strokeWidth="1"
        transform={`rotate(${rot} ${cx} ${cy})`}/>
      {/* Inner ring */}
      <ellipse cx={cx} cy={cy} rx={rx*0.68} ry={ry*0.68}
        fill="none" stroke="rgba(196,154,60,0.09)" strokeWidth="0.75"
        transform={`rotate(${rot} ${cx} ${cy})`}/>

      {/* Connector lines: center → card midpoint */}
      {nodes.map((n, i) => (
        <line key={`l${i}`}
          x1={cx} y1={cy}
          x2={n.nx + 48} y2={n.ny + 25}
          stroke={n.color} strokeWidth="0.75"
          strokeOpacity="0.2" strokeDasharray="3 5"
          className={styles.connLine}
          style={{ animationDelay: n.delay }}
        />
      ))}

      {/* Center circle */}
      <circle cx={cx} cy={cy} r="50" fill="#0f1e2c" stroke="rgba(196,154,60,0.38)" strokeWidth="1.5"/>
      <circle cx={cx} cy={cy} r="50" fill="none"    stroke="rgba(196,154,60,0.07)" strokeWidth="12"/>

      {/* ℒ mark */}
      <text
        x={cx} y={cy + 24}
        textAnchor="middle"
        fontSize="68"
        fontFamily="Georgia,'Times New Roman',serif"
        fontStyle="italic"
        fill="#C49A3C"
        className={styles.orbitalL}
      >ℒ</text>

      {/* Orbiting dots */}
      <circle r="5.5" fill="#C49A3C" opacity="0.9">
        <animateMotion dur="15s" repeatCount="indefinite">
          <mpath href="#op1"/>
        </animateMotion>
      </circle>
      <circle r="3" fill="#4A9E6B" opacity="0.5">
        <animateMotion dur="25s" repeatCount="indefinite"
          keyPoints="0.4;1;0.4" keyTimes="0;0.5;1" calcMode="linear">
          <mpath href="#op1"/>
        </animateMotion>
      </circle>
      <circle r="2" fill="#6B9DC2" opacity="0.35">
        <animateMotion dur="38s" repeatCount="indefinite"
          keyPoints="0.75;0;0.75" keyTimes="0;0.5;1" calcMode="linear">
          <mpath href="#op1"/>
        </animateMotion>
      </circle>

      {/* Node cards */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}
          className={styles.orbNode}
          style={{ animationDelay: n.delay }}
          transform={`translate(${n.nx}, ${n.ny})`}
          filter="url(#ns)"
        >
          <rect x="0" y="0" width="96" height="50" rx="6"
            fill="#0d1b2a" stroke={n.color} strokeWidth="0.8" strokeOpacity="0.5"/>
          {/* left accent bar */}
          <rect x="0" y="0" width="3" height="50" rx="1.5" fill={n.color} opacity="0.75"/>
          {/* label */}
          <text x="12" y="20" fontSize="15" fontWeight="700"
            fontFamily="'Space Grotesk',sans-serif" fill={n.color}>
            {n.label}
          </text>
          {/* sublabel */}
          <text x="12" y="37" fontSize="9" letterSpacing="0.06em"
            fontFamily="'JetBrains Mono',monospace" fill="#6B7B8D">
            {n.sub.toUpperCase()}
          </text>
        </g>
      ))}
    </svg>
  )
}

/* ── TICKER ── */
const ITEMS = [
  'RECEIPTSUME','AUDITFORGE VERIFIED','FREE FOREVER','SCHEMA-GOVERNED',
  'LINKEDIN IS SELF-REPORTED · THIS IS VERIFIED','CROSS-FIRM PORTABILITY',
  'THE BADGE IS THE BUSINESS','NON-ZERO-SUM','PORTABLE ACROSS FIRMS',
  'THE CARD IS A READ VIEW',
]
// Doubled for seamless loop
const TICKER_ITEMS = [...ITEMS, ...ITEMS]

function Ticker() {
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerTrack}>
        {TICKER_ITEMS.map((item, i) => (
          <span key={i} className={styles.tickerItem}>
            <span className={styles.tickerSep}>·</span>{item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow1}/>
      <div className={styles.heroGlow2}/>
      <div className={styles.heroInner}>

        <div className={styles.heroLeft}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowLine}/>
            <span className={styles.eyebrowText}>Dropdown Logistics · AuditForge Verified</span>
          </div>
          <h1 className={styles.heroHeadline}>
            Your work,<br/><em>verified.</em>
          </h1>
          <p className={styles.heroSub}>
            LinkedIn is self-reported.<br/>
            <strong>This is verified.</strong>
          </p>
          <p className={styles.heroReceiptsume}>
            This isn't a resume. It's a <span className={styles.receiptsume}>receiptsume.</span>
          </p>
          <div className={styles.heroActions}>
            <a href="#card" className={styles.btnPrimary}>See the card →</a>
            <a href="#how" className={styles.btnSecondary}>How it works</a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatLabel}>Powered by</span>
              <span className={styles.heroStatValue}>AuditForge</span>
            </div>
            <div className={styles.heroStatDivider}/>
            <div className={styles.heroStat}>
              <span className={styles.heroStatLabel}>Badge type</span>
              <span className={styles.heroStatValue}>Schema-governed</span>
            </div>
            <div className={styles.heroStatDivider}/>
            <div className={styles.heroStat}>
              <span className={styles.heroStatLabel}>Card cost</span>
              <span className={styles.heroStatValue} style={{color:'var(--green)'}}>Free</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <OrbitalHero />
        </div>

      </div>
    </section>
  )
}

/* ── RECEIPTSUME SECTION ── */
function ReceiptsumeSection() {
  return (
    <section className={styles.receiptsumeSec} id="card">
      <div className={styles.secLabel}>The Credential</div>
      <h2 className={styles.secTitle}>Not self-reported.<br/><em>Data-derived.</em></h2>
      <p className={styles.secBody}>
        Every stat on this card comes from a governed schema — not a text field, not a
        self-assessment. Completed engagements. Approved controls. Frameworks mapped.
        The badge doesn't fire until the work is done.
      </p>
      <div className={styles.demoCard}>
        <div className={styles.demoCardTop}>
          <svg width="44" height="44" viewBox="0 0 44 44" style={{overflow:'visible'}}>
            <ellipse cx="22" cy="22" rx="17" ry="5.5" fill="none"
              stroke="rgba(196,154,60,0.3)" strokeWidth="0.75" transform="rotate(-20 22 22)"/>
            <circle cx="38.5" cy="19.5" r="2.5" fill="#C49A3C" opacity="0.9"/>
            <text x="22" y="29" textAnchor="middle" fontSize="22"
              fontFamily="Georgia,serif" fontStyle="italic" fill="#C49A3C">ℒ</text>
          </svg>
          <div className={styles.badgeGreen}>✅ AuditForge Verified</div>
        </div>
        <div className={styles.demoCardBody}>
          <div className={styles.demoCardAvatar}>DK</div>
          <div className={styles.demoCardInfo}>
            <div className={styles.demoCardName}>Dave Kitchens</div>
            <div className={styles.demoCardTitle}>CPA · Commission Analyst II</div>
            <div className={styles.demoCardOrg}>UMB Bank · 10+ yrs Internal Audit</div>
          </div>
        </div>
        <div className={styles.demoCardStats}>
          <div className={styles.demoStat}><span className={styles.demoStatVal}>4</span><span className={styles.demoStatLbl}>Engagements</span></div>
          <div className={styles.demoStatDiv}/>
          <div className={styles.demoStat}><span className={styles.demoStatVal}>212</span><span className={styles.demoStatLbl}>Controls</span></div>
          <div className={styles.demoStatDiv}/>
          <div className={styles.demoStat}><span className={styles.demoStatVal}>789h</span><span className={styles.demoStatLbl}>Logged</span></div>
          <div className={styles.demoStatDiv}/>
          <div className={styles.demoStat}><span className={styles.demoStatVal}>9</span><span className={styles.demoStatLbl}>Domains</span></div>
        </div>
        <div className={styles.demoCardTokens}>
          <span className={styles.tokenCrimson}>STR-08 Judgment</span>
          <span className={styles.tokenAmber}>STR-07 Methodology</span>
          <span className={styles.tokenViolet}>STR-03 Structure</span>
        </div>
        <div className={styles.demoCardFrameworks}>
          <span className={styles.frameworkTag}>SOX</span>
          <span className={styles.frameworkTag}>COSO</span>
          <span className={styles.frameworkTag}>NIST CSF</span>
          <span className={styles.frameworkTag}>IIA Standards</span>
        </div>
        <div className={styles.demoCardFooter}>
          <span>ledger.dev/dk</span>
          <span>powered by <strong>AuditForge</strong></span>
        </div>
      </div>
    </section>
  )
}

/* ── BADGE SECTION ── */
function BadgeSection() {
  const badges = [
    { icon:'✅', ic:'var(--green)',  title:'AuditForge Verified',   desc:'Sourced directly from AuditForge. Engagement completed, controls approved, hours logged, frameworks mapped. The schema is the truth.',       rl:'Requires',     r:'Engagement COMPLETED · Controls APPROVED · Hours logged' },
    { icon:'🔗', ic:'var(--blue)',   title:'Third-Party Connected', desc:'Verified against TeamMate, Pentana, AuditBoard, or Workiva. The source system is clearly attributed. Not AuditForge — but still governed.',  rl:'Sources',      r:'TeamMate · Pentana · AuditBoard · Workiva' },
    { icon:'✏️', ic:'var(--steel)', title:'Self-Reported',          desc:'Manual entry. Clearly labeled. Not penalized — the card still works, the context is always present. Honesty is built into the system.',       rl:'Upgrade path', r:'Connect your platform → badge auto-upgrades' },
  ]
  return (
    <section className={styles.badgeSec} id="how">
      <div className={styles.secLabel}>The Badge System</div>
      <h2 className={styles.secTitle}>Honest by design.</h2>
      <p className={styles.secBody}>Every card shows exactly where the data came from. No ambiguity. No inflation. The source is always labeled.</p>
      <div className={styles.badgeGrid}>
        {badges.map((b,i) => (
          <div key={i} className={styles.badgeCard}>
            <div className={styles.badgeIcon} style={{color:b.ic}}>{b.icon}</div>
            <div className={styles.badgeTitle}>{b.title}</div>
            <div className={styles.badgeDesc}>{b.desc}</div>
            <div className={styles.badgeReq}>
              <span className={styles.badgeReqLabel}>{b.rl}</span>
              <span>{b.r}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── MOAT ── */
function MoatSection() {
  return (
    <section className={styles.moatSec}>
      <div className={styles.moatInner}>
        <div className={styles.moatLeft}>
          <div className={styles.secLabel}>The Moat</div>
          <h2 className={styles.secTitle} style={{textAlign:'left'}}>The badge<br/><em>is the business.</em></h2>
          <p className={styles.secBody} style={{textAlign:'left',maxWidth:'400px',margin:'0 0 0 0'}}>
            Manual cards look like the card. AuditForge cards <em>are</em> the card. That distinction compounds.
          </p>
          <p className={styles.moatPull}>The auditor becomes the <strong>distribution channel.</strong></p>
          <p className={styles.moatBody}>Every auditor who shares their Ledger card is a sales impression for AuditForge. Organic top-of-funnel. Cost: zero.</p>
        </div>
        <div className={styles.moatRight}>
          {[
            { val:'∞', c:'var(--amber)',   d:'Sales impressions per shared card · Cost: $0' },
            { val:'2', c:'var(--crimson)', d:'Revenue streams · Firm subscription + individual portability · One dataset' },
            { val:'↑', c:'var(--green)',   d:'Pull from below · Auditors request AuditForge at new firms · Individual-driven adoption' },
          ].map((s,i) => (
            <div key={i}>
              {i > 0 && <div className={styles.moatStatDiv}/>}
              <div className={styles.moatStat}>
                <span className={styles.moatStatVal} style={{color:s.c}}>{s.val}</span>
                <span className={styles.moatStatDesc}>{s.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FLYWHEEL ── */
function FlywheelSection() {
  const steps = [
    { n:'1', title:'Firm adopts AuditForge',         desc:'The CAE buys AuditForge. Engagements get scoped. Controls get tested. Data accumulates.' },
    { n:'2', title:'Auditors get their cards — free', desc:'Every auditor at the firm automatically gets a verified Ledger card from live engagement data. No action required.' },
    { n:'3', title:'Auditors share their cards',      desc:'LinkedIn. Email signatures. Job applications. Every share carries the "AuditForge Verified" badge. Every badge is a sales impression.' },
    { n:'4', title:'Auditors change firms',           desc:"After 3 years of verified stats, an auditor doesn't want to start over. They request AuditForge at their new firm. Pull from below." },
    { n:'5', title:'Portability becomes a paid feature', desc:'The firm owns the AuditForge data. The auditor pays to port their verified history. Two revenue streams. One dataset.' },
  ]
  return (
    <section className={styles.flywheelSec}>
      <div className={styles.secLabel}>The Flywheel</div>
      <h2 className={styles.secTitle}>It compounds.</h2>
      <div className={styles.flywheelSteps}>
        {steps.map((s,i) => (
          <div key={i} className={styles.flywheelStep}>
            <div className={styles.flywheelNum}>{s.n}</div>
            <div className={styles.flywheelContent}>
              <div className={styles.flywheelTitle}>{s.title}</div>
              <div className={styles.flywheelDesc}>{s.desc}</div>
            </div>
            {i < steps.length-1 && <div className={styles.flywheelArrow}>↓</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── BUSINESS MODEL ── */
function BusinessModelSection() {
  const cards = [
    { tag:'FREE FOREVER', tc:'var(--green)',   bc:'rgba(74,158,107,0.3)',  bg:'rgba(74,158,107,0.04)',  title:'Ledger Card',            desc:'Generated automatically from AuditForge. Verified badge included. Shareable link. Every auditor at an AuditForge firm — no setup, no fee.' },
    { tag:'INDIVIDUAL',   tc:'var(--blue)',                                                              title:'Ledger Standalone',      desc:'Manual entry for auditors without AuditForge. Card generates — no verified badge. Connect your platform and unlock verification.' },
    { tag:'FIRM',         tc:'var(--amber)',                                                             title:'Firm Branding',          desc:'"Verified by [Firm Name] via AuditForge." White-label the card. Your brand on every share, every impression, every job application.' },
    { tag:'INDIVIDUAL',   tc:'var(--violet)',                                                            title:'Card Analytics',         desc:'Who viewed your card. Impression count. Share tracking. LinkedIn-style analytics for your verified credential.' },
    { tag:'INDIVIDUAL',   tc:'var(--crimson)',                                                           title:'Portfolio Export',       desc:'Branded PDF. Print-ready. For partner track, job applications, CPE submissions. Your verified stats in a document that travels.' },
    { tag:'THE MOAT',     tc:'var(--amber)',   bc:'rgba(196,154,60,0.3)',  bg:'rgba(196,154,60,0.04)',  title:'Cross-Firm Portability', desc:'After 3 years of governed stats, no auditor wants to start over. They bring AuditForge with them. Two revenue streams. One dataset.', feat:true },
  ]
  return (
    <section className={styles.bizSec}>
      <div className={styles.secLabel}>Business Model</div>
      <h2 className={styles.secTitle}>Free card. Premium badge.</h2>
      <p className={styles.secBody}>The card is not gatekept. The verification is what compounds.</p>
      <div className={styles.bizGrid}>
        {cards.map((c,i) => (
          <div key={i} className={`${styles.bizCard} ${c.feat?styles.bizCardFeatured:''}`}
            style={{borderColor:c.bc||undefined, background:c.bg||undefined}}>
            <div className={styles.bizTag} style={{color:c.tc}}>{c.tag}</div>
            <div className={styles.bizTitle}>{c.title}</div>
            <div className={styles.bizDesc}>{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── GENERALIZATION ── */
function GeneralizationSection() {
  const verts = [
    { icon:'📋', title:'Audit Card',   sub:'Controls · Engagements · Frameworks', status:'BUILDING NOW', sc:'var(--green)',  sb:'rgba(74,158,107,0.12)',  active:true  },
    { icon:'🥃', title:'Drinksumé',    sub:'Hospitality · SergeBook',             status:'SHIPPED',      sc:'var(--blue)',   sb:'rgba(107,157,194,0.12)', active:true  },
    { icon:'💼', title:'Deal Card',    sub:'Transactions · Asset classes',        status:'QUEUED',       sc:'var(--steel)',  sb:'rgba(245,241,235,0.05)', active:false },
    { icon:'⚖️', title:'Case Card',    sub:'Cases · Practice areas · Outcomes',   status:'QUEUED',       sc:'var(--steel)',  sb:'rgba(245,241,235,0.05)', active:false },
    { icon:'📊', title:'Project Card', sub:'Engagements · Domains · Value',       status:'QUEUED',       sc:'var(--steel)',  sb:'rgba(245,241,235,0.05)', active:false },
  ]
  return (
    <section className={styles.genSec}>
      <div className={styles.secLabel}>The Platform</div>
      <h2 className={styles.secTitle}>Audit ships first.</h2>
      <p className={styles.secBody}>One verified badge system. Multiple professional verticals. The infrastructure is built once.</p>
      <div className={styles.genGrid}>
        {verts.map((v,i) => (
          <div key={i} className={`${styles.genCard} ${v.active?styles.genCardActive:''}`}>
            <div className={styles.genIcon}>{v.icon}</div>
            <div className={styles.genTitle}>{v.title}</div>
            <div className={styles.genSub}>{v.sub}</div>
            <div className={styles.genStatus} style={{color:v.sc,background:v.sb}}>{v.status}</div>
          </div>
        ))}
      </div>
      <a href="/coming-soon" className={styles.genLink}>View all verticals →</a>
    </section>
  )
}

/* ── CTA ── */
function CTASection() {
  return (
    <section className={styles.ctaSec}>
      <div className={styles.ctaOrbital}>
        <svg width="88" height="88" viewBox="0 0 88 88" style={{overflow:'visible',opacity:0.55}}>
          <ellipse cx="44" cy="44" rx="33" ry="10.5" fill="none"
            stroke="rgba(196,154,60,0.25)" strokeWidth="1" transform="rotate(-20 44 44)"/>
          <circle cx="76" cy="38.5" r="3.5" fill="#C49A3C" opacity="0.9"/>
          <text x="44" y="59" textAnchor="middle" fontSize="48"
            fontFamily="Georgia,serif" fontStyle="italic" fill="#C49A3C">ℒ</text>
        </svg>
      </div>
      <h2 className={styles.ctaHeadline}>The data is already there.</h2>
      <p className={styles.ctaSub}><em>The card is a read view.</em></p>
      <p className={styles.ctaBody}>
        AuditForge already captures everything Ledger needs. Dim_Auditor. Fact_Engagement.
        Bridge_ControlFramework. This is not a feature rebuild. It is a surface on a schema that exists.
      </p>
      <div className={styles.ctaButtons}>
        <a href="mailto:dave@dropdownlogistics.com" className={styles.btnPrimary}>Request Demo →</a>
        <a href="https://auditforge.dev" className={styles.btnSecondary}>View AuditForge →</a>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBrand}>
        Ledger · powered by <span>AuditForge</span> · Dropdown Logistics
      </div>
      <div className={styles.footerMeta}>The receiptsume ships.</div>
    </footer>
  )
}
