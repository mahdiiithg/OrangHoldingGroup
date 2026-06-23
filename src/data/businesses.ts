export type BusinessEntry = {
  slug: string;
  name: string;
  industry: string;
  shortDescription: string;
  overview: string;
  coreServices: string[];
  valueProposition: string;
  imageUrl: string;
  status?: string;
};

export const ownedBusinesses: BusinessEntry[] = [
  {
    slug: 'cpms',
    name: 'CPMS',
    industry: 'Property operations and management services',
    shortDescription:
      'Integrated property operations platform focused on reliable asset performance and compliant facility execution.',
    overview:
      'CPMS provides structured property and facilities operations for commercial and mixed-use assets. The business is designed around operational discipline, service-level consistency, and transparent reporting for asset owners.',
    coreServices: [
      'End-to-end property operations management',
      'Preventive and corrective maintenance coordination',
      'Compliance oversight and contractor governance',
      'Tenant service response and site performance reporting',
    ],
    valueProposition:
      'CPMS helps improve occupancy experience and reduce unplanned downtime by combining proactive maintenance with clear operational accountability.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'orange-surety',
    name: 'Orange Surety',
    industry: 'Surety and risk support services',
    shortDescription:
      'Risk and surety support business built to strengthen project confidence and execution assurance.',
    overview:
      'Orange Surety supports institutions and projects with risk-backed service frameworks that improve delivery confidence. The operating model emphasizes due diligence, risk transparency, and disciplined documentation.',
    coreServices: [
      'Project and contract risk support',
      'Surety framework design and structuring',
      'Risk documentation and advisory support',
      'Stakeholder confidence reporting',
    ],
    valueProposition:
      'Orange Surety enables partners to execute with stronger confidence through practical, governance-aligned risk support services.',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'coast-plannet',
    name: 'Coast Plannet',
    industry: 'Coastal services and operations platform',
    shortDescription:
      'Coastal-focused operations platform supporting shoreline assets, service points, and maritime-adjacent business needs.',
    overview:
      'Coast Plannet is positioned as a coastal services platform for operations that require reliable execution in shoreline and maritime-adjacent environments. The business combines local operational knowledge with structured service delivery.',
    coreServices: [
      'Coastal site operations support',
      'Marine-adjacent asset service coordination',
      'Safety and environmental operating procedures',
      'Operational planning for coastal locations',
    ],
    valueProposition:
      'Coast Plannet provides dependable coastal operations capability where execution quality and environmental awareness must work together.',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'tiptop-wash',
    name: 'Tiptop Wash',
    industry: 'Automotive cleaning and car services',
    shortDescription:
      'Car washing and detailing concept focused on fast turnaround, consistent quality, and customer convenience.',
    overview:
      'Tiptop Wash is a growth idea centered on modern car washing services with a customer-friendly operating model. The concept combines efficient site flow, quality wash standards, and optional detailing services to build a repeat-use customer base.',
    coreServices: [
      'Express exterior car wash programs',
      'Interior cleaning and detailing packages',
      'Fleet and recurring service options',
      'Digital booking and customer membership model',
    ],
    valueProposition:
      'Tiptop Wash targets everyday vehicle owners and fleet operators with reliable, time-efficient, and quality-focused car services.',
    imageUrl:
      '/images/tiptop-wash.jpg',
  },
];

export const partnershipPipeline: BusinessEntry[] = [
  {
    slug: 'partnership-opportunity-01',
    name: 'Strategic Partner A',
    industry: 'In negotiation',
    shortDescription: 'Potential partner under active strategic discussion.',
    overview: 'Pipeline entry reserved for pending partnership disclosure.',
    coreServices: ['Confidential partnership scope in development'],
    valueProposition: 'Additional portfolio capacity through selective partnerships.',
    imageUrl:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
    status: 'Pipeline',
  },
  {
    slug: 'partnership-opportunity-02',
    name: 'Strategic Partner B',
    industry: 'In negotiation',
    shortDescription: 'Potential partner under active strategic discussion.',
    overview: 'Pipeline entry reserved for pending partnership disclosure.',
    coreServices: ['Confidential partnership scope in development'],
    valueProposition: 'Additional portfolio capacity through selective partnerships.',
    imageUrl:
      'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&w=900&q=80',
    status: 'Pipeline',
  },
  {
    slug: 'partnership-opportunity-03',
    name: 'Strategic Partner C',
    industry: 'In negotiation',
    shortDescription: 'Potential partner under active strategic discussion.',
    overview: 'Pipeline entry reserved for pending partnership disclosure.',
    coreServices: ['Confidential partnership scope in development'],
    valueProposition: 'Additional portfolio capacity through selective partnerships.',
    imageUrl:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80',
    status: 'Pipeline',
  },
];

export function getBusiness(slug: string): BusinessEntry | undefined {
  return ownedBusinesses.find((business) => business.slug === slug);
}
