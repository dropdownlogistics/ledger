const toddy = {
  cardTypeId: 'CT-SLOPESTAT-001',
  handle: 'toddy',
  identity: {
    name: 'Toddy K',
    initials: 'TK',
    credentials: 'Snowboarder',
    title: 'Rider',
    org: 'Independent',
    tenure: 'Bothell, WA',
  },
  stats: {
    peakSpeed: '64.9 mph',
    sessions: 12,
    mountains: 2,
  },
  boards: 5,
  boardList: ['Aeronaut 159W', 'Howler 160W', 'Chemist 159W', 'BSOD 159', 'Excavator 158'],
  tokens: [
    { code: 'BSOD-159',   label: '64.9 mph', color: 'crimson' },
    { code: 'AERO-159W',  label: '54.4 mph', color: 'amber'   },
    { code: 'HOWL-160W',  label: '53.1 mph', color: 'blue'    },
    { code: 'CHEM-159W',  label: '51.2 mph', color: 'violet'  },
  ],
  sessions_list: [
    { id: '0001', name: 'BSOD 159 — Revelstoke BC',         component: 'Freeride', status: 'completed', hours: 64.9 },
    { id: '0002', name: 'Aeronaut 159W — Crystal Mountain',  component: 'Groomed',  status: 'completed', hours: 54.4 },
    { id: '0003', name: 'Howler 160W — Crystal Mountain',    component: 'Groomed',  status: 'completed', hours: 53.1 },
    { id: '0004', name: 'Chemist 159W — Crystal Mountain',   component: 'Groomed',  status: 'completed', hours: 51.2 },
    { id: '0005', name: 'Excavator 158 — Crystal Mountain',  component: 'Park',     status: 'completed', hours: 44.8 },
  ],
  verification: { status: 'HIGH_CONFIDENCE', source: 'SlopeStat', badge: true },
  notes: 'Aeronaut 159 71.3mph reading excluded — identified as phantom read by rider. Verified peak: 64.9mph BSOD 159 at Revelstoke BC.',
  billable_avg: '64.9 mph peak',
  url: 'slopestat.vercel.app/rider/toddy',
}

export default toddy
