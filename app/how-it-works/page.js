import styles from './how-it-works.module.css'

export const metadata = {
  title: 'How It Works — Ledger',
  description: 'Five ways to build your record. One governed output. Every card starts with a source.',
}

const METHODS = [
  {
    num: '01',
    icon: '\u25CE',
    name: 'Your vertical generates it',
    body: [
      'Some cards are built for you. AuditForge builds your Audit Card automatically \u2014 every completed engagement, every control signed off, every hour logged goes into the schema without you touching anything. The card is a read view of your work, not a form you fill out.',
    ],
    tier: 'VERIFIED',
    tierColor: 'green',
    tierDesc: 'The system that generated the data is the verification source.',
    ship: 'AVAILABLE AT LAUNCH',
    steps: [
      { num: '01', text: 'Work happens in your vertical (AuditForge, AdmitOne, Charter)' },
      { num: '02', text: 'Schema captures every event automatically' },
      { num: '03', text: "Card updates. You didn\u2019t touch it." },
    ],
  },
  {
    num: '02',
    icon: '\u25A3',
    name: 'Connect an account',
    body: [
      'Link a third-party account and the platform reads your data directly. Ticketmaster purchase history. A state license board lookup by license number. An employer verification API. The connection is the proof.',
    ],
    tier: 'VERIFIED',
    tierColor: 'green',
    tierDesc: 'Structured data from a known source.',
    ship: 'COMING IN V1.1',
    steps: [
      { num: '01', text: 'Connect your account or enter your license number' },
      { num: '02', text: 'Platform reads structured data from the source' },
      { num: '03', text: 'Card updates with third-party verified badge' },
    ],
  },
  {
    num: '03',
    icon: '\u2709',
    name: 'Forward a document',
    body: [
      'Email a confirmation, certificate, or official document to your Ledger inbox. The system parses it \u2014 event name, date, issuer, credential type. Supported at launch: ticket confirmations, course certificates, professional licenses. Parser rules live in an editable table \u2014 adding a new document type is a config change, not a deploy.',
    ],
    tier: 'VERIFIED',
    tierColor: 'green',
    tierDesc: 'Document from a known issuer.',
    ship: 'COMING IN V1.1',
    steps: [
      { num: '01', text: 'Forward document to log@ledger.dev' },
      { num: '02', text: 'Parser reads issuer, credential, date' },
      { num: '03', text: 'Card updates. Source document attached.' },
    ],
  },
  {
    num: '04',
    icon: '\u270E',
    name: 'Log it yourself',
    body: [
      "Type it in. Name, date, what happened. No photo, no receipt, no connection. Pure memory and honest record-keeping. \u2018I taught 94 students over 9 years. I don\u2019t have a governing body. But I was there.\u2019 That\u2019s enough. The record accepts it.",
      "Self-reported cards are first-class citizens. No penalty, no visual downgrade, just clearly labeled. The badge says Self-reported, not Sorry.",
    ],
    tier: 'SELF-REPORTED',
    tierColor: 'steel',
    tierDesc: 'No external proof, clearly labeled.',
    ship: 'AVAILABLE AT LAUNCH',
    steps: [
      { num: '01', text: 'Open the form. Fill in what you know.' },
      { num: '02', text: 'Choose your card type. Set your privacy level.' },
      { num: '03', text: 'Card created. Self-reported badge attached.' },
    ],
  },
  {
    num: '05',
    icon: '\u25C9',
    name: 'Snap a photo',
    body: [
      'Photograph a physical document, ticket stub, certificate, or boarding pass. Claude Vision API reads the image \u2014 extracts name, date, issuer, credential type, and any barcode text. The system pre-fills the card form with extracted data. You confirm or correct.',
      'If the OCR extraction matches a known issuer or event record, it lands as High Confidence. If no match, it lands as Self-reported with the OCR data attached \u2014 still richer than a blank manual entry.',
    ],
    tier: 'HIGH CONFIDENCE',
    tierAlt: 'SELF-REPORTED if not matched',
    tierColor: 'amber',
    tierDesc: 'OCR-matched or self-reported with extraction data.',
    ship: 'AVAILABLE AT LAUNCH',
    steps: [
      { num: '01', text: 'Photograph your document or stub' },
      { num: '02', text: 'Claude Vision extracts name, date, issuer' },
      { num: '03', text: 'Card pre-filled. You confirm. Badge assigned.' },
    ],
  },
]

const TIERS = [
  {
    name: 'Verified',
    color: 'var(--green)',
    bg: 'rgba(74,158,107,0.08)',
    border: 'rgba(74,158,107,0.25)',
    icon: '\u2705',
    body: 'Data came from a known, structured source \u2014 a vertical, an account connection, or a verified document issuer. The system can trace the data back to its origin.',
  },
  {
    name: 'High Confidence',
    color: 'var(--amber)',
    bg: 'rgba(196,154,60,0.08)',
    border: 'rgba(196,154,60,0.25)',
    icon: '\u2705',
    body: "Data was extracted via OCR or matched against a public record. The match is strong but not a direct API handshake. The system did the work \u2014 you confirmed it.",
  },
  {
    name: 'Self-Reported',
    color: 'var(--steel)',
    bg: 'rgba(107,123,141,0.08)',
    border: 'rgba(107,123,141,0.25)',
    icon: '\u270F\uFE0F',
    body: "You entered it. No external source. Clearly labeled, never penalized. The record of what you showed up for is yours to keep regardless of what receipts you held onto.",
  },
]

export default function HowItWorks() {
  return (
    <div className={styles.page}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />

      {/* ── SECTION 1: HERO ── */}
      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Ledger &middot; How It Works</span>
        </div>
        <h1 className={styles.headline}>
          Five ways in.
        </h1>
        <p className={styles.subhead}>One record out.</p>
        <p className={styles.heroBody}>
          Every card starts with a source. The source determines the verification tier.
          The tier determines the badge. The record is yours regardless.
        </p>
      </section>

      {/* ── SECTION 2: THE FIVE METHODS ── */}
      <section className={styles.methods}>
        {METHODS.map((m) => (
          <div key={m.num} className={styles.method}>
            <div className={styles.methodHeader}>
              <span className={styles.methodNum}>{m.num}</span>
              <span className={styles.methodIcon}>{m.icon}</span>
            </div>
            <h2 className={styles.methodName}>{m.name}</h2>
            {m.body.map((p, i) => (
              <p key={i} className={styles.methodBody}>{p}</p>
            ))}

            {/* Three-step flow */}
            <div className={styles.flow}>
              {m.steps.map((s, i) => (
                <div key={i} className={styles.flowGroup}>
                  {i > 0 && <div className={styles.flowArrow}>&rarr;</div>}
                  <div className={styles.flowStep}>
                    <div className={styles.flowStepNum}>{s.num}</div>
                    <div className={styles.flowStepText}>{s.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification + ship status */}
            <div className={styles.methodFooter}>
              <div className={styles.methodShip}>{m.ship}</div>
              <div className={styles.methodTierRow}>
                <span className={`${styles.tierPill} ${styles[`tier_${m.tierColor}`]}`}>
                  {m.tier}
                </span>
                {m.tierAlt && (
                  <span className={`${styles.tierPill} ${styles.tier_steel}`}>
                    {m.tierAlt}
                  </span>
                )}
              </div>
              <div className={styles.methodTierDesc}>{m.tierDesc}</div>
            </div>
          </div>
        ))}
      </section>

      {/* ── SECTION 3: THE RULE ── */}
      <section className={styles.rule}>
        <div className={styles.ruleLabel}>THE INVARIANT</div>
        <blockquote className={styles.rulePull}>
          The input changes. The record doesn&rsquo;t.
        </blockquote>
        <p className={styles.ruleBody}>
          Photo, connection, document, keyboard, vertical &mdash; five doors into
          the same room. Every card lands in the same schema, gets the same privacy
          controls, surfaces the same way in your Stack. The method of entry is
          metadata. The record is permanent.
        </p>
      </section>

      {/* ── SECTION 4: VERIFICATION TIERS ── */}
      <section className={styles.tiers}>
        <div className={styles.tiersLabel}>THE BADGES</div>
        <div className={styles.tiersGrid}>
          {TIERS.map((t, i) => (
            <div
              key={i}
              className={styles.tierCard}
              style={{ borderColor: t.border, background: t.bg }}
            >
              <div className={styles.tierCardIcon}>{t.icon}</div>
              <div className={styles.tierCardName} style={{ color: t.color }}>{t.name}</div>
              <p className={styles.tierCardBody}>{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: CTA ── */}
      <section className={styles.cta}>
        <h2 className={styles.ctaHeadline}>Ready to build your stack?</h2>
        <div className={styles.ctaButtons}>
          <a href="/stack" className={styles.btnPrimary}>View the Stack &rarr;</a>
          <a href="/card/dk" className={styles.btnSecondary}>See the cards &rarr;</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span>Ledger &middot; Dropdown Logistics</span>
        <span className={styles.footerMeta}>Your life. On the record.</span>
      </footer>
    </div>
  )
}
