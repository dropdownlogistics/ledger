const dk = {
  cardTypeId: 'CT-AUDIT-001',
  handle: 'dk',
  identity: {
    name: 'Dave Kitchens',
    initials: 'DK',
    credentials: 'CPA',
    title: 'Commission Analyst II',
    org: 'UMB Bank',
    tenure: '10+ yrs Internal Audit',
  },
  stats: {
    engagements: 8,
    controls: 212,
    hours: '1,557h',
  },
  domains: 9,
  frameworks: ['SOX', 'COSO', 'NIST CSF', 'IIA Standards', 'Regulation W'],
  tokens: [
    { code: 'STR-08', label: 'Judgment',      color: 'crimson' },
    { code: 'STR-07', label: 'Methodology',   color: 'amber'   },
    { code: 'STR-03', label: 'Structure',     color: 'violet'  },
    { code: 'STR-05', label: 'Pattern Recog', color: 'blue'    },
  ],
  engagements_list: [
    { id: '0001', name: 'Transactions with Affiliates (Reg W)', component: 'Fieldwork', status: 'completed', hours: 156.25 },
    { id: '0002', name: 'Social Media',                          component: 'Fieldwork', status: 'completed', hours: 202.50 },
    { id: '0003', name: 'Corporate Treasury – Capital Planning', component: 'Fieldwork', status: 'completed', hours: 182.00 },
    { id: '0004', name: 'CT File Reviews Continuous Audit',      component: 'Fieldwork', status: 'completed', hours: 294.50 },
    { id: '0005', name: 'SOX – Corporate Trust',                 component: 'Fieldwork', status: 'completed', hours: 68.50  },
    { id: '0006', name: 'SOX – Fund Services',                   component: 'Fieldwork', status: 'completed', hours: 19.75  },
    { id: '0007', name: 'SOX – Entity Level Controls',           component: 'Fieldwork', status: 'completed', hours: 23.50  },
    { id: '0008', name: 'Passive Custody / Directed Trustee',    component: 'Fieldwork', status: 'completed', hours: 108.25 },
  ],
  verification: { status: 'VERIFIED', source: 'AuditForge', badge: true },
  billable_avg: '75.9%',
  url: 'ledger.dev/dk',
}

export default dk
