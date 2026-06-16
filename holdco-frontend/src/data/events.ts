export type CorporateEvent = {
  label: string;
  title: string;
  summary: string;
  tags?: string[];
  imageUrl?: string;
  isLogo?: boolean;
};

export const corporateEvents: CorporateEvent[] = [
  {
    label: '1981',
    title: '1981',
    summary:
      'Orang Holding Group was established as a focused corporate platform in Australia with a clear mandate for disciplined long-term portfolio development.',
    tags: ['Foundation', 'Australia'],
    isLogo: true,
  },
  {
    label: '1982-1987',
    title: 'From 1982–1987',
    summary:
      'Expanded through early strategic partnerships and operating investments, building sector capabilities that later shaped the group architecture.',
    tags: ['Expansion', 'Partnerships'],
    imageUrl:
      'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: '1988-1996',
    title: 'From 1988–1996',
    summary:
      'Entered additional strategic sectors and strengthened group capability in cross-border operations and governance systems.',
    tags: ['Cross-border', 'Governance'],
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: '1998-2010',
    title: 'From 1998–2010',
    summary:
      'Rebalanced the portfolio and sharpened operating focus around resilient, long-horizon sectors with disciplined capital deployment.',
    tags: ['Portfolio', 'Capital'],
    imageUrl:
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: '2011-2026',
    title: 'From 2011–2026',
    summary:
      'Scaled into a modern multi-sector holding platform with stronger operating discipline, sector clarity, and international readiness.',
    tags: ['Modernization', 'International'],
    imageUrl:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80',
  },
  {
    label: '2026',
    title: '2026',
    summary:
      'Formalized the sector-led portfolio model and launched the institutional digital platform to support stakeholder communication and growth.',
    tags: ['Digital', 'Governance'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  },
];
