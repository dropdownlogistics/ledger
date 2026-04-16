const ava = {
  cardTypeId: 'CT-SET-001',
  handle: 'ava',
  identity: {
    name: 'Ava Sinclair',
    initials: 'AS',
    credentials: 'BMus',
    title: 'Music Educator',
    org: 'Sinclair Studio',
    tenure: '9 yrs teaching',
  },
  stats: {
    students: 94,
    lessons: 3210,
    years: 9,
  },
  instruments: 3,
  styles: ['Classical', 'Jazz', 'Contemporary', 'Improvisation', 'Music Theory'],
  tokens: [
    { code: 'STR-01', label: 'Piano',       color: 'violet' },
    { code: 'STR-02', label: 'Voice',       color: 'amber'  },
    { code: 'STR-03', label: 'Guitar',      color: 'blue'   },
    { code: 'STR-04', label: 'Composition', color: 'green'  },
  ],
  engagements_list: [
    { id: '0001', name: 'Piano — Beginner to Intermediate', component: 'Ongoing',  status: 'active',    hours: 1440 },
    { id: '0002', name: 'Voice — Performance Prep',         component: 'Seasonal', status: 'active',    hours: 380  },
    { id: '0003', name: 'Guitar — Adult Learners',          component: 'Ongoing',  status: 'active',    hours: 620  },
    { id: '0004', name: 'Theory & Composition Workshop',    component: 'Cohort',   status: 'completed', hours: 290  },
  ],
  verification: { status: 'SELF-REPORTED', source: 'Self-reported', badge: false },
  billable_avg: '88.1%',
  url: 'ledger.dev/ava',
}

export default ava
