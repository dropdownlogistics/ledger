'use client'
import { useState } from 'react'
import styles from './connect.module.css'

export default function ConnectionReceipt() {
  const [expanded, setExpanded] = useState(null)
  const toggle = (id) => setExpanded(prev => prev === id ? null : id)

  return (
    <div className={styles.page}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      {/* ── SECTION 1: HERO ── */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Ledger &middot; Connection Receipt</span>
        </div>
        <h1 className={styles.headline}>
          Dave Kitchens <span className={styles.headlineX}>&times;</span> Leo Prescott
        </h1>
        <p className={styles.subhead}>Your records found each other.</p>
        <p className={styles.heroMeta}>3 domains &middot; 3 verified overlaps &middot; Connected 2026-04-16</p>
      </section>

      {/* ── SECTION 2: IDENTITY STRIP ── */}
      <section className={styles.strip}>
        <div className={styles.stripTile} style={{ borderLeftColor: '#B23531' }}>
          <img src="/dave.png" alt="" className={styles.stripPhoto} />
          <div className={styles.stripInfo}>
            <div className={styles.stripName}>Dave Kitchens</div>
            <div className={styles.stripCreds}>CPA &middot; Commission Analyst II</div>
            <div className={styles.stripDomains}>
              <span className={styles.stripPill}>{'\uD83D\uDCCB'} Audit</span>
              <span className={styles.stripPill}>{'\uD83C\uDFAB'} Events</span>
            </div>
          </div>
        </div>

        <div className={styles.stripCenter}>
          <span className={styles.stripX}>&times;</span>
          <span className={styles.stripOverlap}>3 overlaps detected</span>
        </div>

        <div className={styles.stripTile} style={{ borderLeftColor: '#6B8F71' }}>
          <div className={styles.stripAvatar} style={{ borderColor: '#6B8F71', color: '#6B8F71' }}>LP</div>
          <div className={styles.stripInfo}>
            <div className={styles.stripName}>Leo Prescott</div>
            <div className={styles.stripCreds}>PsyD &middot; Licensed Psychologist</div>
            <div className={styles.stripDomains}>
              <span className={styles.stripPill}>{'\uD83E\uDDE0'} Charter</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OVERLAP CARDS ── */}
      <section className={styles.cards}>

        {/* ── CARD 1: ITGC (full width, dense grid) ── */}
        <button
          className={`${styles.card1} ${expanded === 'itgc' ? styles.card1Expanded : ''}`}
          onClick={() => toggle('itgc')}
          aria-expanded={expanded === 'itgc'}
        >
          <div className={styles.card1Surface}>
            <div className={styles.card1Label}>PROFESSIONAL OVERLAP &middot; VERIFIED</div>
            <div className={styles.card1Headline}>ITGC &amp; Systems Architecture</div>
            <div className={styles.card1Pills}>
              <span className={styles.pillCrimson}>8 Shared Frameworks</span>
              <span className={styles.pillGreen}>12 Joint Engagements</span>
            </div>
            <div className={styles.card1Sub}>Where the software meets the ledger.</div>
            <div className={styles.cardHint}>{expanded === 'itgc' ? '\u2190 BACK' : 'REVEAL DATA \u2192'}</div>
          </div>

          {expanded === 'itgc' && (
            <div className={styles.card1Data}>
              <div className={styles.dataHeader}>SHARED FRAMEWORKS &mdash; FACT LAYER</div>
              <div className={styles.fwGrid}>
                {[
                  'SOX IT General Controls', 'ISO 27001 Data Integrity',
                  'Bitemporal Database Auditing', 'COSO IT Framework',
                  'IIA Standards', 'NIST CSF',
                  'System-Generated Report Testing', 'Control Design & Operating Effectiveness',
                ].map((fw, i) => (
                  <span key={i} className={styles.fwTag}>{fw}</span>
                ))}
              </div>
              <div className={styles.angleSplit}>
                <div className={styles.angleCol}>
                  <div className={styles.angleLabel}>DAVE&rsquo;S ANGLE</div>
                  <div className={styles.angleText}>Financial risk. Controls. Engagements.</div>
                </div>
                <div className={styles.angleCol}>
                  <div className={styles.angleLabel}>LEO&rsquo;S ANGLE</div>
                  <div className={styles.angleText}>Database integrity. Systems. ITGC.</div>
                </div>
              </div>
              <div className={styles.cardPull}>Same boundary. Different sides of it.</div>
            </div>
          )}
        </button>

        {/* ── ROW 2: TICKET + WORKBENCH ── */}
        <div className={styles.row2}>

          {/* ── CARD 2: NIN TICKET (wide, atmospheric) ── */}
          <button
            className={`${styles.card2} ${expanded === 'nin' ? styles.card2Expanded : ''}`}
            onClick={() => toggle('nin')}
            aria-expanded={expanded === 'nin'}
          >
            <div className={styles.card2Surface}>
              <div className={styles.ticketLeft}>
                <div className={styles.ticketVenue}>RED ROCKS AMPHITHEATRE &middot; MORRISON, CO</div>
                <div className={styles.ticketArtist}>Nine Inch Nails</div>
                <div className={styles.ticketDate}>Sep 18, 2018</div>
                <div className={styles.ticketVerify}>{'\u2705'} Setlist Verified via Setlist.fm</div>
              </div>
              <div className={styles.ticketPerf} />
              <div className={styles.ticketRight}>
                <div className={styles.ticketSeat}>
                  <span className={styles.ticketInitialsCrimson}>DK</span>
                  <span className={styles.ticketRow}>ROW 12</span>
                </div>
                <div className={styles.ticketSeat}>
                  <span className={styles.ticketInitialsGreen}>LP</span>
                  <span className={styles.ticketRow}>SOUNDBOARD</span>
                </div>
              </div>
            </div>
            <div className={styles.ticketStrip}>
              ADMITONE VERIFIED &middot; BOTH ATTENDED &middot; DIFFERENT LENSES
            </div>
            <div className={styles.cardHint}>{expanded === 'nin' ? '\u2190 BACK' : 'REVEAL DATA \u2192'}</div>

            {expanded === 'nin' && (
              <div className={styles.card2Data}>
                <div className={styles.dataHeader}>SETLIST &mdash; SEP 18, 2018</div>
                <div className={styles.setlistGrid}>
                  {[
                    '01 Copy of A', '02 Came Back Haunted', '03 March of the Pigs',
                    '04 Piggy', '05 The Frail', '06 The Wretched', '07 Gave Up',
                    '08 Various Methods of Escape', '09 All Time Low', '10 Disappointed',
                    '11 Hurt', '12 Closer', '13 Head Like a Hole',
                  ].map((t, i) => (
                    <span key={i} className={styles.setlistItem}>{t}</span>
                  ))}
                </div>
                <div className={styles.angleSplit}>
                  <div className={styles.angleCol}>
                    <div className={styles.angleLabel}>DAVE</div>
                    <div className={styles.angleText}>Row 12. Transcendent experience.</div>
                  </div>
                  <div className={styles.angleCol}>
                    <div className={styles.angleLabel}>LEO</div>
                    <div className={styles.angleText}>Soundboard. Analyzing DMX lighting rig latency.</div>
                  </div>
                </div>
                <div className={styles.cardPull}>Same event. Different lens.</div>
              </div>
            )}
          </button>

          {/* ── CARD 3: WORKBENCH (tall, monumental) ── */}
          <button
            className={`${styles.card3} ${expanded === 'bench' ? styles.card3Expanded : ''}`}
            onClick={() => toggle('bench')}
            aria-expanded={expanded === 'bench'}
          >
            <div className={styles.card3Surface}>
              <div className={styles.card3Label}>SET OVERLAP &middot; SELF-REPORTED</div>
              <div className={styles.card3Big}>100%</div>
              <div className={styles.card3Sub}>Monospace &amp; Dark Mode</div>
              <div className={styles.card3Bottom}>The workbench is the same.</div>
              <div className={styles.cardHint}>{expanded === 'bench' ? '\u2190 BACK' : 'REVEAL DATA \u2192'}</div>
            </div>

            {expanded === 'bench' && (
              <div className={styles.card3Data}>
                <div className={styles.dataHeader}>SHARED OPERATING PARAMETERS</div>
                <div className={styles.paramRows}>
                  <div className={styles.paramRow}>
                    <span className={styles.paramIcon}>{'\u2328'}</span>
                    <div>
                      <div className={styles.paramLabel}>INPUT</div>
                      <div className={styles.paramText}>Tactile mechanical switches &middot; Heavy actuation &middot; Typing should feel like cementing a decision</div>
                    </div>
                  </div>
                  <div className={styles.paramRow}>
                    <span className={styles.paramIcon}>{'\uD83D\uDD15'}</span>
                    <div>
                      <div className={styles.paramLabel}>SIGNAL</div>
                      <div className={styles.paramText}>Zero-notification posture &middot; Async by default &middot; Interruptions are bugs</div>
                    </div>
                  </div>
                  <div className={styles.paramRow}>
                    <span className={styles.paramIcon}>{'\u2615'}</span>
                    <div>
                      <div className={styles.paramLabel}>FUEL</div>
                      <div className={styles.paramText}>Caffeine as computational substrate &middot; Black &middot; No exceptions</div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardPull}>Different problems. Same workshop.</div>
              </div>
            )}
          </button>
        </div>
      </section>

      {/* ── SECTION 4: THE RECEIPT ── */}
      <section className={styles.receipt}>
        <pre className={styles.receiptPre}>{`\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
    LEDGER \u00b7 CONNECTION RECEIPT
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
FROM    Dave Kitchens      DK-001
TO      Leo Prescott       LP-001

OVERLAP DETECTED: 3 DOMAINS

01  ITGC & Systems         VERIFIED
02  NIN @ Red Rocks        HIGH CONFIDENCE
03  The Workbench          SELF-REPORTED

CONNECTED: 2026-04-16 04:48:33 UTC
LEDGER PLATFORM: v0.1 \u00b7 DEMO MODE
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501
"Your records found each other."
\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501`}</pre>
        <div className={styles.receiptCta}>
          <a href="/profile/dave" className={styles.btnPrimary}>View Dave&rsquo;s profile &rarr;</a>
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
