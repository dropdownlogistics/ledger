import styles from './card.module.css'
import { CARDS } from '../../../lib/cards'
import CARD_TYPE_AUDIT from '../../../lib/cardTypes/CT-AUDIT-001'
import CARD_TYPE_CHARTER from '../../../lib/cardTypes/CT-CHARTER-001'
import CARD_TYPE_SET from '../../../lib/cardTypes/CT-SET-001'
import CARD_TYPE_SLOPESTAT from '../../../lib/cardTypes/CT-SLOPESTAT-001'

const CARD_TYPES = {
  [CARD_TYPE_AUDIT.cardTypeId]:     CARD_TYPE_AUDIT,
  [CARD_TYPE_CHARTER.cardTypeId]:   CARD_TYPE_CHARTER,
  [CARD_TYPE_SET.cardTypeId]:       CARD_TYPE_SET,
  [CARD_TYPE_SLOPESTAT.cardTypeId]: CARD_TYPE_SLOPESTAT,
}

const STAT_LABELS = {
  engagements:  'Engagements',
  controls:     'Controls',
  hours:        'Logged',
  domains:      'Domains',
  sessions:     'Sessions',
  years:        'Years',
  clients:      'Clients',
  specialties:  'Specialties',
  students:     'Students',
  lessons:      'Lessons',
  instruments:  'Instruments',
  peakSpeed:    'Peak Speed',
  mountains:    'Mountains',
  boards:       'Boards',
}

export async function generateStaticParams() {
  return Object.keys(CARDS).map(handle => ({ handle }))
}

export async function generateMetadata({ params }) {
  const { handle } = await params
  const card = CARDS[handle]
  if (!card) return { title: 'Card not found' }
  const { credentials, title, name } = card.identity
  return {
    title: `${name} — Ledger`,
    description: `${credentials} · ${title} · ${card.verification.source} Verified`,
  }
}

export default async function CardPage({ params }) {
  const { handle } = await params
  const card = CARDS[handle]
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
function Badge({ verification }) {
  if (verification.status === 'VERIFIED') return (
    <span className={`${styles.badge} ${styles.badgeGreen}`}>✅ {verification.source} Verified</span>
  )
  if (verification.status === 'HIGH_CONFIDENCE') return (
    <span className={`${styles.badge} ${styles.badgeAmber}`}>◈ High Confidence</span>
  )
  if (verification.status === 'CONNECTED') return (
    <span className={`${styles.badge} ${styles.badgeBlue}`}>🔗 Third-Party Connected</span>
  )
  return (
    <span className={`${styles.badge} ${styles.badgeSteel}`}>✏️ Self-Reported</span>
  )
}

/* ── MAIN CARD ── */
function LedgerCard({ card, cardType }) {
  const tokenClass = { crimson: styles.tokenCrimson, amber: styles.tokenAmber, violet: styles.tokenViolet, blue: styles.tokenBlue, green: styles.tokenGreen }

  const statCells = [
    ...cardType.statFields.map(f => ({ val: card.stats[f], label: STAT_LABELS[f] })),
    { val: card[cardType.domainField], label: STAT_LABELS[cardType.domainField] },
  ]

  const tokens      = card[cardType.tokenField]
  const frameworks  = card[cardType.frameworkField]
  const engagements = card[cardType.engagementField]
  const totalHours  = engagements.reduce((sum, e) => sum + e.hours, 0)
  const completedCount = engagements.filter(e => e.status === 'completed').length
  const activeCount    = engagements.filter(e => e.status === 'active').length

  const isSlopestat = cardType.vertical === 'slopestat'
  const topSpeed    = isSlopestat ? Math.max(...engagements.map(e => e.hours)) : null

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
            <Badge verification={card.verification} />
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
          <div className={styles.sectionLabel}>{isSlopestat ? 'Session Record' : 'Engagement Record'}</div>
          <div className={styles.engagementList}>
            {engagements.map((e, i) => (
              <div key={i} className={styles.engRow}>
                <div className={styles.engLeft}>
                  <span className={styles.engId}>{e.id}</span>
                  <span className={styles.engName}>{e.name}</span>
                </div>
                <div className={styles.engRight}>
                  <span className={styles.engComponent}>{e.component}</span>
                  <span className={styles.engHours}>{isSlopestat ? `${e.hours} mph` : `${e.hours.toFixed(2)}h`}</span>
                  <span className={styles.engStatus}>✓</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PERFORMANCE SUMMARY ── */}
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Performance</div>
          <div className={styles.perfGrid}>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--amber)'}}>
                {isSlopestat ? card.stats.peakSpeed : card.billable_avg}
              </div>
              <div className={styles.perfLbl}>{isSlopestat ? 'Peak Speed' : 'Avg Billable %'}</div>
            </div>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--green)'}}>
                {engagements.length}
              </div>
              <div className={styles.perfLbl}>{isSlopestat ? 'Sessions' : (cardType.engagementField === 'engagements_list' ? 'Engagements' : 'Records')}</div>
              <div className={styles.perfSub}>{completedCount} completed · {activeCount} active</div>
            </div>
            <div className={styles.perfCard}>
              <div className={styles.perfVal} style={{color:'var(--blue)'}}>
                {isSlopestat ? `${topSpeed.toFixed(1)} mph` : `${totalHours.toLocaleString()}h`}
              </div>
              <div className={styles.perfLbl}>{isSlopestat ? 'Top Speed' : 'Hours Logged'}</div>
              <div className={styles.perfSub}>{
                card.verification.status === 'VERIFIED'        ? `${card.verification.source} verified` :
                card.verification.status === 'HIGH_CONFIDENCE' ? `${card.verification.source} · High Confidence` :
                'Self-reported'
              }</div>
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
