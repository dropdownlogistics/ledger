import styles from './profile.module.css'

export const metadata = {
  title: 'Dave Kitchens — Ledger Profile',
  description: 'CPA, Commission Analyst II, Studio Operator. Audit + Events. 2 domains, 1 identity.',
}

const STUBS = [
  { event: 'Chiefs vs Bills',       venue: 'Arrowhead Stadium, KC',           date: 'Jan 2024', badge: 'Verified',        badgeCls: 'badgeGreen' },
  { event: 'Radiohead',             venue: 'Red Rocks Amphitheatre, Morrison CO', date: 'Sep 2024', badge: 'High Confidence', badgeCls: 'badgeAmber' },
  { event: 'Turnpike Troubadours',  venue: "Cain's Ballroom, Tulsa",          date: 'Sep 2019', badge: 'High Confidence', badgeCls: 'badgeAmber' },
  { event: 'Tyler Childers',        venue: 'Starlight Theatre, KC',           date: 'Jul 2023', badge: 'High Confidence', badgeCls: 'badgeAmber' },
  { event: 'Dune Part Two',         venue: 'Alamo Drafthouse, KC',            date: 'Mar 2024', badge: 'Self-reported',   badgeCls: 'badgeSteel' },
]

export default function DaveProfile() {
  return (
    <div className={styles.page}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      {/* ── SECTION 1: PROFILE HEADER ── */}
      <section className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.photoWrap}>
            <img src="/dave.png" alt="Dave Kitchens" className={styles.photo} />
          </div>
          <div className={styles.headerInfo}>
            <h1 className={styles.name}>Dave Kitchens</h1>
            <div className={styles.title}>CPA &middot; Commission Analyst II &middot; Studio Operator</div>
            <div className={styles.tagline}>The architecture doesn&rsquo;t change. The data does.</div>
            <div className={styles.domainPills}>
              <span className={styles.domainPill}>{'\uD83D\uDCCB'} Audit</span>
              <span className={styles.domainPill}>{'\uD83C\uDFAB'} Events &amp; Memory</span>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.metaTile}>
            <span className={styles.metaVal}>2</span>
            <span className={styles.metaLbl}>Cards</span>
          </div>
          <div className={styles.metaTile}>
            <span className={styles.metaVal}>2</span>
            <span className={styles.metaLbl}>Domains</span>
          </div>
          <div className={styles.metaTile}>
            <span className={styles.metaVal}>1</span>
            <span className={styles.metaLbl}>Verified</span>
          </div>
          <div className={styles.metaTile}>
            <span className={styles.metaVal}>0</span>
            <span className={styles.metaLbl}>Self-reported</span>
          </div>
          <div className={styles.metaTile}>
            <span className={styles.metaVal}>2024</span>
            <span className={styles.metaLbl}>Member since</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE STACK ── */}
      <section className={styles.section}>
        <div className={styles.secLabel}>MY STACK</div>
        <div className={styles.stackRow}>
          {/* Audit Card */}
          <div className={styles.stackCard} style={{ borderTopColor: '#B23531' }}>
            <div className={styles.stackCardHeader}>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <ellipse cx="16" cy="16" rx="12" ry="3.8" fill="none"
                  stroke="rgba(178,53,49,0.3)" strokeWidth="0.75" transform="rotate(-20 16 16)" />
                <text x="16" y="22" textAnchor="middle" fontSize="16"
                  fontFamily="Georgia,serif" fontStyle="italic" fill="#B23531">&#8466;</text>
              </svg>
              <span className={`${styles.stackBadge} ${styles.badgeGreen}`}>{'\u2705'} AuditForge Verified</span>
            </div>
            <div className={styles.stackCardName}>Dave Kitchens</div>
            <div className={styles.stackCardCreds}>CPA &middot; Audit Card</div>
            <div className={styles.stackStats}>
              <span>4 Engagements</span>
              <span>&middot;</span>
              <span>212 Controls</span>
              <span>&middot;</span>
              <span>789h Logged</span>
            </div>
            <div className={styles.stackTags}>
              <span className={styles.tagCrimson}>SOX</span>
              <span className={styles.tagCrimson}>COSO</span>
              <span className={styles.tagCrimson}>IIA Standards</span>
            </div>
            <div className={styles.stackCardFooter}>powered by <strong>AuditForge</strong></div>
          </div>

          {/* AdmitOne Summary */}
          <div className={styles.stackCard} style={{ borderTopColor: '#C49A3C' }}>
            <div className={styles.stackCardHeader}>
              <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
                <ellipse cx="16" cy="16" rx="12" ry="3.8" fill="none"
                  stroke="rgba(196,154,60,0.3)" strokeWidth="0.75" transform="rotate(-20 16 16)" />
                <text x="16" y="22" textAnchor="middle" fontSize="16"
                  fontFamily="Georgia,serif" fontStyle="italic" fill="#C49A3C">&#8466;</text>
              </svg>
              <span className={`${styles.stackBadge} ${styles.badgeAmber}`}>{'\u2705'} AdmitOne Collection</span>
            </div>
            <div className={styles.stackCardName}>Events &amp; Memory</div>
            <div className={styles.stackCardCreds}>AdmitOne &middot; Stub Cards</div>
            <div className={styles.stackStats}>
              <span>127 Stubs</span>
              <span>&middot;</span>
              <span>43 Venues</span>
              <span>&middot;</span>
              <span>12 States</span>
              <span>&middot;</span>
              <span>8 Years</span>
            </div>
            <div className={styles.stackTags}>
              <span className={styles.tagAmber}>Turnpike Troubadours</span>
              <span className={styles.tagAmber}>Tyler Childers</span>
              <span className={styles.tagAmber}>Jason Isbell</span>
            </div>
            <div className={styles.stackCardFooter}>powered by <strong style={{ color: '#C49A3C' }}>AdmitOne</strong></div>
          </div>
        </div>
        <div className={styles.stackLinks}>
          <a href="/card/dk" className={styles.stackLink}>View full Audit Card &rarr;</a>
          <a href="https://admitone.vercel.app/demo/dave" className={styles.stackLink}>View full AdmitOne collection &rarr;</a>
        </div>
      </section>

      {/* ── SECTION 3: ADMITONE HIGHLIGHTS ── */}
      <section className={styles.section}>
        <div className={styles.secLabel}>RECENT STUBS</div>
        <div className={styles.stubScroll}>
          {STUBS.map((s, i) => (
            <div key={i} className={styles.stub}>
              <div className={styles.stubTop}>
                <span className={styles.stubEvent}>{s.event}</span>
                <span className={`${styles.stubBadge} ${styles[s.badgeCls]}`}>{s.badge}</span>
              </div>
              <div className={styles.stubVenue}>{s.venue}</div>
              <div className={styles.stubDate}>{s.date}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: PRIVACY CONTROLS ── */}
      <section className={styles.section}>
        <div className={styles.secLabel}>VISIBILITY</div>
        <div className={styles.privacySub}>Control what&rsquo;s public on your profile.</div>
        <div className={styles.privacyRows}>
          <div className={styles.privacyRow}>
            <span className={styles.privacyName}>Audit Card</span>
            <span className={styles.privacyStatus}>
              <span className={styles.dotGreen}>{'\u25CF'}</span> PUBLIC
            </span>
          </div>
          <div className={styles.privacyRow}>
            <span className={styles.privacyName}>AdmitOne Collection</span>
            <span className={styles.privacyStatus}>
              <span className={styles.dotGreen}>{'\u25CF'}</span> PUBLIC
            </span>
          </div>
          <div className={`${styles.privacyRow} ${styles.privacyRowDim}`}>
            <span className={styles.privacyName}>Charter Card</span>
            <a href="/coming-soon" className={styles.privacyAdd}>{'\u25CB'} ADD CARD</a>
          </div>
          <div className={`${styles.privacyRow} ${styles.privacyRowDim}`}>
            <span className={styles.privacyName}>Set Card</span>
            <a href="/coming-soon" className={styles.privacyAdd}>{'\u25CB'} ADD CARD</a>
          </div>
        </div>
        <div className={styles.privacyNote}>Privacy controls are card-level. Each card can be set independently.</div>
      </section>

      {/* ── SECTION 5: IDENTITY STATS ── */}
      <section className={styles.section}>
        <div className={styles.secLabel}>ACROSS DOMAINS</div>
        <div className={styles.identityGrid}>
          <div className={styles.identityTile}>
            <span className={styles.identityVal} style={{ color: 'var(--crimson)' }}>1,557h</span>
            <span className={styles.identityLbl}>Total hours logged</span>
            <span className={styles.identitySub}>Audit</span>
          </div>
          <div className={styles.identityTile}>
            <span className={styles.identityVal} style={{ color: 'var(--amber)' }}>127</span>
            <span className={styles.identityLbl}>Events attended</span>
            <span className={styles.identitySub}>AdmitOne</span>
          </div>
          <div className={styles.identityTile}>
            <span className={styles.identityVal} style={{ color: 'var(--green)' }}>50%</span>
            <span className={styles.identityLbl}>Verification rate</span>
            <span className={styles.identitySub}>1 of 2 cards fully verified</span>
          </div>
          <div className={styles.identityTile}>
            <span className={styles.identityVal} style={{ color: 'var(--blue)' }}>8</span>
            <span className={styles.identityLbl}>Years on record</span>
            <span className={styles.identitySub}>Oldest data: 2016</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className={styles.cta}>
        <p className={styles.ctaTagline}>This is what your stack looks like.</p>
        <div className={styles.ctaButtons}>
          <a href="/how-it-works" className={styles.btnPrimary}>Build your stack &rarr;</a>
          <a href="/stack" className={styles.btnSecondary}>View the Stack &rarr;</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.pageFooter}>
        <span>Ledger &middot; Dropdown Logistics</span>
        <span className={styles.pageFooterMeta}>Your life. On the record.</span>
      </footer>
    </div>
  )
}
