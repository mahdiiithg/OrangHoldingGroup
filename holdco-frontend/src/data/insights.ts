export type Insight = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  publishDate: string;
  author: string;
  imageUrl: string;
};

export const insights: Insight[] = [
  {
    slug: 'portfolio-governance-multi-sector-groups',
    title: 'Portfolio Governance in Multi-Sector Groups',
    category: 'Insight',
    excerpt:
      'Framework principles for balancing sector specialization and group-level oversight.',
    body: `Multi-sector holding companies face a recurring governance challenge: how to preserve sector agility while maintaining parent-level accountability.

Effective portfolio governance starts with clear mandate boundaries. Each operating platform should have defined decision rights, reporting cadence, and capital allocation criteria aligned to its strategic role.

At group level, the parent company should focus on capital discipline, risk oversight, leadership succession, and strategic coherence — not day-to-day operational interference.

The most resilient structures combine sector expertise with centralized standards for finance, compliance, and stakeholder communication. This creates trust with investors, partners, and regulators without slowing operating responsiveness.`,
    publishDate: '2026-05-12',
    author: 'Corporate Strategy Office',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'capability-building-roadmap-2027',
    title: 'Capability Building Roadmap for 2027',
    category: 'Update',
    excerpt:
      'Priority programs across leadership development, technical learning, and cyber readiness.',
    body: `Orang Holding Group has outlined its 2027 capability investment priorities across three pillars: leadership depth, technical readiness, and cyber resilience.

Leadership programs will focus on succession planning, board-ready executive development, and cross-sector knowledge sharing. Technical learning initiatives will expand digital skills pathways for portfolio company teams.

Cyber readiness remains a top priority given increasing operational digitization. The group will roll out baseline security standards, incident response drills, and vendor risk assessments across all sectors.

These programs reflect our view that human and technical capability are compounding assets that strengthen long-term portfolio performance.`,
    publishDate: '2026-04-28',
    author: 'Group HR & Capability',
    imageUrl:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'agrifood-resilience-nutrition-innovation',
    title: 'AgriFood Resilience and Nutrition Innovation',
    category: 'Market View',
    excerpt:
      'Long-term opportunities across food systems, applied science, and advisory models.',
    body: `Global food systems are under pressure from climate variability, supply chain disruption, and shifting nutrition expectations. AgriFood platforms that combine production capability with science and advisory services are well positioned.

We see durable opportunity in traceability, nutrition-forward product development, and regional supply resilience. Advisory models that help producers and distributors adapt to regulatory and consumer change add recurring value.

Our AgriFood & Nutrition platform is structured to capture these themes through integrated operating and consulting capability, with governance emphasis on food safety and sustainability reporting.`,
    publishDate: '2026-03-15',
    author: 'AgriFood Platform',
    imageUrl:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'australia-apac-expansion-outlook',
    title: 'Australia Base, Asia-Pacific Expansion Outlook',
    category: 'Market View',
    excerpt:
      'Staged regional growth guided by governance readiness and operating capability.',
    body: `Orang Holding Group remains anchored in Australia while evaluating selective Asia-Pacific expansion opportunities aligned to sector strength and governance maturity.

Market entry will follow a staged model: capability assessment, local partnership evaluation, pilot operations, and full integration only after operating standards are validated.

Priority regions include Southeast Asia and selected Pacific markets where our ICT, AgriFood, and training platforms have identifiable demand and partnership pathways.`,
    publishDate: '2026-02-08',
    author: 'Markets & Strategy',
    imageUrl:
      'https://images.unsplash.com/photo-1525626928887-22704c4d4d7c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'sustainability-reporting-framework',
    title: 'Group Sustainability Reporting Framework',
    category: 'Insight',
    excerpt:
      'Establishing consistent ESG disclosure standards across portfolio companies.',
    body: `Consistent sustainability reporting strengthens stakeholder trust and supports capital access. Orang Holding Group is implementing a group-wide ESG reporting framework aligned to recognized disclosure standards.

The framework covers environmental performance, workforce practices, governance transparency, and supply chain responsibility. Each sector platform will report against common metrics with sector-specific supplements where relevant.

This approach mirrors institutional best practice and prepares the group for deeper investor and regulatory engagement over time.`,
    publishDate: '2026-01-20',
    author: 'Sustainability Office',
    imageUrl:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
