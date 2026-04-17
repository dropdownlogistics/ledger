'use client'
import { useState } from 'react'
import styles from './stack.module.css'

/* ── CARD DATA ── */
const STACK_CARDS = [
  {
    id: 'ava',
    name: 'Ava Sinclair',
    initials: 'AS',
    credentials: 'BMus',
    title: 'Music Educator',
    vertical: 'Set Card',
    accent: '#8a6cc9',
    badge: { text: 'Self-Reported', icon: '✏️', cls: 'badgeSteel' },
    dashboard: {
      org: 'Sinclair Studio',
      tenure: '9 yrs teaching',
      domains: 1,
      domainLabel: 'Set',
      stats: [
        { val: '94', label: 'Students' },
        { val: '3,210', label: 'Lessons' },
        { val: '9', label: 'Years' },
      ],
      tags: ['Classical', 'Jazz', 'Contemporary', 'Improvisation', 'Music Theory'],
      tagsLabel: 'Styles',
      footer: { url: 'ledger.dev/ava', sub: 'Self-reported' },
    },
  },
  {
    id: 'dk',
    name: 'Dave Kitchens',
    initials: 'DK',
    credentials: 'CPA',
    title: 'Commission Analyst II',
    vertical: 'Audit Card',
    accent: '#B23531',
    photo: '/dave.png',
    badge: { text: 'AuditForge Verified', icon: '✅', cls: 'badgeGreen' },
    dashboard: {
      org: 'UMB Bank',
      tenure: '10+ yrs Internal Audit',
      domains: 2,
      domainLabel: 'Audit + Events',
      stats: [
        { val: '4', label: 'Engagements' },
        { val: '212', label: 'Controls' },
        { val: '789h', label: 'Logged' },
      ],
      tags: ['SOX', 'COSO', 'NIST CSF', 'IIA Standards'],
      tagsLabel: 'Frameworks',
      miniCards: [
        { label: 'Audit Card', accent: '#B23531', sub: 'AuditForge Verified' },
        { label: 'Stub Cards', accent: '#C49A3C', sub: 'AdmitOne Verified' },
      ],
      stubs: [
        { artist: 'Chiefs vs Bills', venue: 'GEHA Field at Arrowhead', date: 'Jan 2024', badge: 'Verified', badgeCls: 'stubBadgeGreen' },
        { artist: 'Radiohead', venue: 'Red Rocks Amphitheatre', date: 'Sep 2024', badge: 'High Confidence', badgeCls: 'stubBadgeAmber' },
        { artist: 'Turnpike Troubadours', venue: "Cain's Ballroom", date: 'Sep 2019', badge: 'High Confidence', badgeCls: 'stubBadgeAmber' },
      ],
      footer: { url: 'ledger.dev/dave', sub: '2 domains \u00b7 1 identity' },
    },
  },
  {
    id: 'leo',
    name: 'Leo Prescott',
    initials: 'LP',
    credentials: 'PsyD',
    title: 'Licensed Psychologist',
    vertical: 'Charter Card',
    accent: '#6B8F71',
    badge: { text: 'State License Board Verified', icon: '✅', cls: 'badgeGreen' },
    dashboard: {
      org: 'Prescott Counseling Group',
      tenure: '11 yrs in practice',
      domains: 1,
      domainLabel: 'Charter',
      stats: [
        { val: '2,847', label: 'Sessions' },
        { val: '11', label: 'Years' },
        { val: '340', label: 'Clients' },
      ],
      tags: ['EMDR', 'CBT', 'Somatic', 'ACT', 'Trauma-Informed'],
      tagsLabel: 'Modalities',
      footer: { url: 'ledger.dev/leo', sub: 'State License Board Verified' },
    },
  },
]

export default function StackPage() {
  const [activeId, setActiveId] = useState(null)
  const active = STACK_CARDS.find(c => c.id === activeId)

  return (
    <div className={styles.page}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Ledger &middot; The Stack</span>
        </div>
        <h1 className={styles.headline}>Every card tells a story.</h1>
        <p className={styles.subhead}>Click one.</p>
      </section>

      {/* ── FAN ── */}
      {!active && (
        <section className={styles.fan}>
          <div className={styles.fanGlow} />
          <div className={styles.fanRow}>
            {STACK_CARDS.map((card, i) => {
              const pos = i === 0 ? 'left' : i === 1 ? 'center' : 'right'
              return (
                <button
                  key={card.id}
                  className={`${styles.fanCard} ${styles[`fanCard_${pos}`]}`}
                  style={{ '--accent': card.accent }}
                  onClick={() => setActiveId(card.id)}
                  aria-label={`View ${card.name}'s card`}
                >
                  <div className={styles.fanCardFront}>
                    <div className={styles.fanCardAccent} />
                    <div className={styles.fanCardOrbital}>
                      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
                        <ellipse cx="18" cy="18" rx="13" ry="4.2" fill="none"
                          stroke={`${card.accent}55`} strokeWidth="0.75" transform="rotate(-20 18 18)" />
                        <text x="18" y="24" textAnchor="middle" fontSize="18"
                          fontFamily="Georgia,serif" fontStyle="italic" fill={card.accent}>&#8466;</text>
                      </svg>
                    </div>
                    <div className={styles.fanCardBody}>
                      {card.photo ? (
                        <img src={card.photo} alt="" className={styles.fanCardPhoto} style={{ borderColor: card.accent }} />
                      ) : (
                        <div className={styles.fanCardAvatar} style={{ background: `${card.accent}22`, borderColor: `${card.accent}55`, color: card.accent }}>
                          {card.initials}
                        </div>
                      )}
                      <div className={styles.fanCardName}>{card.name}</div>
                      <div className={styles.fanCardCreds} style={{ color: card.accent }}>{card.credentials}</div>
                    </div>
                    <div className={styles.fanCardMeta}>
                      <span className={styles.fanCardVertical}>{card.vertical}</span>
                      <span className={`${styles.fanCardBadge} ${styles[card.badge.cls]}`}>
                        {card.badge.icon}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* ── DASHBOARD ── */}
      {active && (
        <section className={styles.dashboard}>
          <button
            className={styles.backBtn}
            onClick={() => setActiveId(null)}
          >
            &larr; Back to stack
          </button>

          {/* Flipped card */}
          <div className={styles.flippedCard} style={{ '--accent': active.accent }}>
            <div className={styles.flippedInner}>
              <div className={styles.flippedBack}>
                <div className={styles.flippedBackAccent} />
                <div className={styles.flippedBackOrbital}>
                  <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
                    <ellipse cx="24" cy="24" rx="18" ry="5.8" fill="none"
                      stroke={`${active.accent}44`} strokeWidth="0.75" transform="rotate(-20 24 24)" />
                    <circle r="2.5" fill={active.accent} opacity="0.9">
                      <animateMotion dur="14s" repeatCount="indefinite"
                        path="M 42,24 A 18,5.8 0 1 1 6,24 A 18,5.8 0 1 1 42,24"
                      />
                    </circle>
                    <text x="24" y="31" textAnchor="middle" fontSize="24"
                      fontFamily="Georgia,serif" fontStyle="italic" fill={active.accent}>&#8466;</text>
                  </svg>
                </div>
                <div className={styles.flippedBackBody}>
                  {active.photo ? (
                    <img src={active.photo} alt="" className={styles.dashPhoto} style={{ borderColor: active.accent }} />
                  ) : (
                    <div className={styles.dashAvatar} style={{ background: `${active.accent}18`, borderColor: active.accent, color: active.accent }}>
                      {active.initials}
                    </div>
                  )}
                  <div className={styles.dashName}>{active.name}</div>
                  <div className={styles.dashCreds} style={{ color: active.accent }}>
                    {active.credentials} &middot; {active.title}
                  </div>
                  <div className={styles.dashOrg}>{active.dashboard.org} &middot; {active.dashboard.tenure}</div>
                  <div className={styles.dashDomains}>
                    <span className={styles.dashDomainCount} style={{ color: active.accent }}>{active.dashboard.domains}</span>
                    <span className={styles.dashDomainLabel}>{active.dashboard.domains === 1 ? 'Domain' : 'Domains'} &middot; {active.dashboard.domainLabel}</span>
                  </div>
                  <span className={`${styles.dashBadge} ${styles[active.badge.cls]}`}>
                    {active.badge.icon} {active.badge.text}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className={styles.dashStats}>
            {active.dashboard.stats.map((s, i) => (
              <div key={i} className={styles.dashStatCell}>
                <span className={styles.dashStatVal} style={{ color: active.accent }}>{s.val}</span>
                <span className={styles.dashStatLbl}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* Tags (frameworks / modalities / styles) */}
          <div className={styles.dashSection}>
            <div className={styles.dashSectionLabel}>{active.dashboard.tagsLabel}</div>
            <div className={styles.dashTags}>
              {active.dashboard.tags.map((t, i) => (
                <span key={i} className={styles.dashTag} style={{ borderColor: `${active.accent}40`, color: `${active.accent}cc` }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Mini card stack (Dave only) */}
          {active.dashboard.miniCards && (
            <div className={styles.dashSection}>
              <div className={styles.dashSectionLabel}>Card Stack</div>
              <div className={styles.miniCards}>
                {active.dashboard.miniCards.map((mc, i) => (
                  <div key={i} className={styles.miniCard} style={{ borderTopColor: mc.accent }}>
                    <div className={styles.miniCardLabel} style={{ color: mc.accent }}>{mc.label}</div>
                    <div className={styles.miniCardSub}>{mc.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AdmitOne stubs (Dave only) */}
          {active.dashboard.stubs && (
            <div className={styles.dashSection}>
              <div className={styles.dashSectionLabel}>AdmitOne Stubs</div>
              <div className={styles.stubScroll}>
                {active.dashboard.stubs.map((s, i) => (
                  <div key={i} className={styles.stubCard}>
                    <div className={styles.stubArtist}>{s.artist}</div>
                    <div className={styles.stubVenue}>{s.venue}</div>
                    <div className={styles.stubDate}>{s.date}</div>
                    <span className={`${styles.stubBadge} ${styles[s.badgeCls]}`}>{s.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className={styles.dashFooter}>
            <span>{active.dashboard.footer.url}</span>
            <span>{active.dashboard.footer.sub}</span>
          </div>
        </section>
      )}

      {/* ── PAGE FOOTER ── */}
      <footer className={styles.pageFooter}>
        <span>Ledger &middot; Dropdown Logistics</span>
        <span className={styles.pageFooterMeta}>Your life. On the record.</span>
      </footer>
    </div>
  )
}
