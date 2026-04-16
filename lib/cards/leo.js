const leo = {
  cardTypeId: 'CT-CHARTER-001',
  handle: 'leo',
  identity: {
    name: 'Leo Prescott',
    initials: 'LP',
    credentials: 'PsyD',
    title: 'Licensed Psychologist',
    org: 'Prescott Counseling Group',
    tenure: '11 yrs in practice',
  },
  stats: {
    sessions: 2847,
    years: 11,
    clients: 340,
  },
  specialties: 4,
  modalities: ['EMDR', 'CBT', 'Somatic', 'ACT', 'Trauma-Informed'],
  tokens: [
    { code: 'STR-01', label: 'Trauma',       color: 'green'  },
    { code: 'STR-02', label: 'Grief',         color: 'blue'   },
    { code: 'STR-03', label: 'Anxiety',       color: 'violet' },
    { code: 'STR-04', label: 'Relationships', color: 'amber'  },
  ],
  engagements_list: [
    { id: '0001', name: 'Individual Therapy',      component: 'Ongoing',  status: 'active',    hours: 1240 },
    { id: '0002', name: 'Couples Counseling',       component: 'Ongoing',  status: 'active',    hours: 620  },
    { id: '0003', name: 'Group Therapy — Grief',    component: 'Cohort',   status: 'completed', hours: 480  },
    { id: '0004', name: 'Trauma Intensive Program', component: 'Program',  status: 'completed', hours: 507  },
  ],
  verification: { status: 'VERIFIED', source: 'State License Board', badge: true },
  license: 'PSY-CA-48821',
  billable_avg: '92.4%',
  url: 'ledger.dev/leo',
}

export default leo
