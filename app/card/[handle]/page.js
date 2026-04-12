import styles from './card.module.css'
import { CARDS } from '../../../lib/cards'
import CARD_TYPE_AUDIT from '../../../lib/cardTypes/CT-AUDIT-001'

const CARD_TYPES = {
  [CARD_TYPE_AUDIT.cardTypeId]: CARD_TYPE_AUDIT,
}

const STAT_LABELS = {
  engagements: 'Engagements',
  controls:    'Controls',
  hours:       'Logged',
  domains:     'Domains',
}

export async function generateStaticParams() {
  return Object.keys(CARDS).map(handle => ({ handle }))
}

export async function generateMetadata({ params }) {
  const card = CARDS[params.handle]
  if (!card) return { title: 'Card not found' }
  const { credentials, title, name } = card.identity
  return {
    title: `${name} — Ledger`,
    description: `${credentials} · ${title} · ${card.verification.source} Verified`,
  }
}

export default function CardPage({ params }) {
  const card = CARDS[params.handle]
  if (!card) return <NotFound />
  const cardType = CARD_TYPES[card.cardTypeId]
  if (!cardType) return <NotFound />
  return <LedgerCard card={card} cardType={cardType} />
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
function LedgerCard({ card, cardType }) {
  const tokenClass = { crimson: styles.tokenCrimson, amber: styles.tokenAmber, violet: styles.tokenViolet, blue: styles.tokenBlue }

  const statCells = [
    ...cardType.statFields.map(f => ({ val: card.stats[f], label: STAT_LABELS[f] })),
    { val: card[cardType.domainField], label: STAT_LABELS[cardType.domainField] },
  ]

  const tokens      = card[cardType.tokenField]
  const frameworks  = card[cardType.frameworkField]
  const engagements = card[cardType.engagementField]
  const badgeType   = card.verification.source.toLowerCase()

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
            <Badge type={badgeType} />
          </div>

          {/* Identity */}
          <div className={styles.identity}>
            <div className={styles.avatar}>{card.identity.initials}</div>
            <div className={styles.identityInfo}>
              <div className={styles.name}>{card.identity.name}</div>
              <div className={styles.creds}>{card.identity.credentials} · {card.identity.title}</div>
              <div className={styles.org}>{card.identity.org} · {card.identity.tenure}</div>
            </div>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {statCells.map((s, i) => (
              <div key={i} className={styles.statCell}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Tokens */}
          <div className={styles.tokens}>
            {tokens.map((t, i) => (
              <span key={i} className={`${styles.token} ${tokenClass[t.color]}`}>
                {t.code} {t.label}
              </span>
            ))}
          </div>

          {/* Frameworks */}
          <div className={styles.frameworks}>
            {frameworks.map((f, i) => (
              <span key={i} className={styles.fwTag}>{f}</span>
            ))}
          </div>

          {/* Card footer */}
          <div className={styles.cardFooter}>
            <span>{card.url}</span>
            <span>powered by <strong>{card.verification.source}</strong></span>
          </div>
        </div>

        {/* ── ENGAGEMENT RECORD ── */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Engagement Record</div>
          <div className={styles.engagementList}>
            {engagements.map((e, i) => (
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
                {card.stats.engagements}
              </div>
              <div className={styles.perfLbl}>Engagements</div>
              <div className={styles.perfSub}>All COMPLETED status</div>
            </div>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--blue)'}}>
                {card.stats.hours}
              </div>
              <div className={styles.perfLbl}>Hours Logged</div>
              <div className={styles.perfSub}>Verified from timesheet data</div>
            </div>
          </div>
        </div>

        {/* ── SHARE / ACTIONS ── */}
        <div className={styles.actions}>
          <a href="mailto:dave@dropdownlogistics.com" className={styles.btnPrimary}>
            Connect with {card.identity.name.split(' ')[0]} →
          </a>
          <a href="/" className={styles.btnSecondary}>
            Get your Ledger card
          </a>
        </div>

        {/* ── FOOTER ── */}
        <div className={styles.pageFooter}>
          <span>Ledger · powered by <strong>{card.verification.source}</strong> · Dropdown Logistics</span>
          <span className={styles.footerMeta}>The receiptsume ships.</span>
        </div>

      </div>
    </div>
  )
}
