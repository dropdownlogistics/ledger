import styles from './card.module.css'

// Hardcoded demo data — swap for DB lookup when CSV is wired
const CARDS = {
  dk: {
    handle: 'dk',
    name: 'Dave Kitchens',
    initials: 'DK',
    credentials: 'CPA',
    title: 'Commission Analyst II',
    org: 'UMB Bank',
    tenure: '10+ yrs Internal Audit',
    badge: 'auditforge',
    badgeLabel: 'AuditForge Verified',
    stats: [
      { val: '8',    label: 'Engagements' },
      { val: '212',  label: 'Controls'    },
      { val: '1,557h', label: 'Logged'   },
      { val: '9',    label: 'Domains'     },
    ],
    frameworks: ['SOX', 'COSO', 'NIST CSF', 'IIA Standards', 'Regulation W'],
    strengths: [
      { code: 'STR-08', label: 'Judgment',     color: 'crimson' },
      { code: 'STR-07', label: 'Methodology',  color: 'amber'   },
      { code: 'STR-03', label: 'Structure',    color: 'violet'  },
      { code: 'STR-05', label: 'Pattern Recog',color: 'blue'    },
    ],
    engagements: [
      { id: '0001', name: 'Transactions with Affiliates (Reg W)', component: 'Fieldwork',           status: 'completed', hours: 156.25  },
      { id: '0002', name: 'Social Media',                          component: 'Fieldwork',           status: 'completed', hours: 202.50  },
      { id: '0003', name: 'Corporate Treasury – Capital Planning', component: 'Fieldwork',           status: 'completed', hours: 182.00  },
      { id: '0004', name: 'CT File Reviews Continuous Audit',      component: 'Fieldwork',           status: 'completed', hours: 294.50  },
      { id: '0005', name: 'SOX – Corporate Trust',                 component: 'Fieldwork',           status: 'completed', hours: 68.50   },
      { id: '0006', name: 'SOX – Fund Services',                   component: 'Fieldwork',           status: 'completed', hours: 19.75   },
      { id: '0007', name: 'SOX – Entity Level Controls',           component: 'Fieldwork',           status: 'completed', hours: 23.50   },
      { id: '0008', name: 'Passive Custody / Directed Trustee',    component: 'Fieldwork',           status: 'completed', hours: 108.25  },
    ],
    billable_avg: '75.9%',
    url: 'ledger.dev/dk',
  }
}

export async function generateStaticParams() {
  return Object.keys(CARDS).map(handle => ({ handle }))
}

export async function generateMetadata({ params }) {
  const card = CARDS[params.handle]
  if (!card) return { title: 'Card not found' }
  return {
    title: `${card.name} — Ledger`,
    description: `${card.credentials} · ${card.title} · AuditForge Verified`,
  }
}

export default function CardPage({ params }) {
  const card = CARDS[params.handle]
  if (!card) return <NotFound />
  return <LedgerCard card={card} />
}

/* ── NOT FOUND ── */
function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.nfCode}>404</div>
      <div className={styles.nfMsg}>Card not found.</div>
      <a href="/" className={styles.nfBack}>← Back to Ledger</a>
    </div>
  )
}

/* ── ORBITAL (small) ── */
function OrbitalSmall() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" style={{overflow:'visible'}}>
      <ellipse cx="24" cy="24" rx="18" ry="5.8" fill="none"
        stroke="rgba(196,154,60,0.3)" strokeWidth="0.75" transform="rotate(-20 24 24)"/>
      <circle cx="41.5" cy="21" r="2.5" fill="#C49A3C" opacity="0.9"/>
      <text x="24" y="31" textAnchor="middle" fontSize="24"
        fontFamily="Georgia,serif" fontStyle="italic" fill="#C49A3C">ℒ</text>
    </svg>
  )
}

/* ── BADGE ── */
function Badge({ type }) {
  if (type === 'auditforge') return (
    <span className={`${styles.badge} ${styles.badgeGreen}`}>✅ AuditForge Verified</span>
  )
  if (type === 'connected') return (
    <span className={`${styles.badge} ${styles.badgeBlue}`}>🔗 Third-Party Connected</span>
  )
  return (
    <span className={`${styles.badge} ${styles.badgeSteel}`}>✏️ Self-Reported</span>
  )
}

/* ── MAIN CARD ── */
function LedgerCard({ card }) {
  const tokenClass = { crimson: styles.tokenCrimson, amber: styles.tokenAmber, violet: styles.tokenViolet, blue: styles.tokenBlue }

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow1}/>
      <div className={styles.bgGlow2}/>

      <div className={styles.wrap}>

        {/* ── CARD ── */}
        <div className={styles.card}>

          {/* Card header */}
          <div className={styles.cardHeader}>
            <OrbitalSmall />
            <Badge type={card.badge} />
          </div>

          {/* Identity */}
          <div className={styles.identity}>
            <div className={styles.avatar}>{card.initials}</div>
            <div className={styles.identityInfo}>
              <div className={styles.name}>{card.name}</div>
              <div className={styles.creds}>{card.credentials} · {card.title}</div>
              <div className={styles.org}>{card.org} · {card.tenure}</div>
            </div>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {card.stats.map((s, i) => (
              <div key={i} className={styles.statCell}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Strengths */}
          <div className={styles.tokens}>
            {card.strengths.map((t, i) => (
              <span key={i} className={`${styles.token} ${tokenClass[t.color]}`}>
                {t.code} {t.label}
              </span>
            ))}
          </div>

          {/* Frameworks */}
          <div className={styles.frameworks}>
            {card.frameworks.map((f, i) => (
              <span key={i} className={styles.fwTag}>{f}</span>
            ))}
          </div>

          {/* Card footer */}
          <div className={styles.cardFooter}>
            <span>{card.url}</span>
            <span>powered by <strong>AuditForge</strong></span>
          </div>
        </div>

        {/* ── ENGAGEMENT RECORD ── */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Engagement Record</div>
          <div className={styles.engagementList}>
            {card.engagements.map((e, i) => (
              <div key={i} className={styles.engRow}>
                <div className={styles.engLeft}>
                  <span className={styles.engId}>{e.id}</span>
                  <span className={styles.engName}>{e.name}</span>
                </div>
                <div className={styles.engRight}>
                  <span className={styles.engComponent}>{e.component}</span>
                  <span className={styles.engHours}>{e.hours.toFixed(2)}h</span>
                  <span className={styles.engStatus}>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BILLABLE SUMMARY ── */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Performance</div>
          <div className={styles.perfGrid}>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--amber)'}}>
                {card.billable_avg}
              </div>
              <div className={styles.perfLbl}>Avg Billable %</div>
              <div className={styles.perfSub}>75% goal · 9 months tracked</div>
            </div>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--green)'}}>
                {card.stats[0].val}
              </div>
              <div className={styles.perfLbl}>Engagements</div>
              <div className={styles.perfSub}>All COMPLETED status</div>
            </div>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--blue)'}}>
                {card.stats[2].val}
              </div>
              <div className={styles.perfLbl}>Hours Logged</div>
              <div className={styles.perfSub}>Verified from timesheet data</div>
            </div>
          </div>
        </div>

        {/* ── SHARE / ACTIONS ── */}
        <div className={styles.actions}>
          <a href="mailto:dave@dropdownlogistics.com" className={styles.btnPrimary}>
            Connect with {card.name.split(' ')[0]} →
          </a>
          <a href="/" className={styles.btnSecondary}>
            Get your Ledger card
          </a>
        </div>

        {/* ── FOOTER ── */}
        <div className={styles.pageFooter}>
          <span>Ledger · powered by <strong>AuditForge</strong> · Dropdown Logistics</span>
          <span className={styles.footerMeta}>The receiptsume ships.</span>
        </div>

      </div>
    </div>
  )
}
