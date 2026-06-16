export type Market = {
  name: string;
  status: 'active' | 'strategic';
  summary: string;
};

export const markets: Market[] = [
  {
    name: 'Australia',
    status: 'active',
    summary:
      'Primary operating base with established sector platforms across ICT, property, health, agrifood, and training.',
  },
  {
    name: 'Asia-Pacific',
    status: 'strategic',
    summary:
      'Priority expansion region with staged market entry guided by governance readiness and local partnership evaluation.',
  },
  {
    name: 'International Growth',
    status: 'strategic',
    summary:
      'Selective opportunities in markets where sector capability and operating standards can be replicated with discipline.',
  },
];
