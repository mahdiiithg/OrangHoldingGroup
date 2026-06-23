export type Sector = {
  slug: string;
  name: string;
  summary: string;
  positioningLine: string;
  overview: string;
  coreAreas: string[];
  whyItMatters: string;
  ctaLabel: string;
  imageUrl: string;
  logoLabel: string;
  future?: boolean;
};

export const sectors: Sector[] = [
  {
    slug: 'property-operations',
    name: 'Property Operations',
    summary:
      'Operational property and facility services focused on execution quality, tenant support, and asset reliability.',
    positioningLine: 'Structured property operations for long-term asset performance.',
    overview:
      'This operating field is led through our CPMS business platform, delivering day-to-day property and facility execution across commercial and mixed-use environments with clear service standards.',
    coreAreas: [
      'Property operations and facility coordination',
      'Preventive and corrective maintenance oversight',
      'Compliance and contractor management',
      'Tenant service delivery and reporting',
    ],
    whyItMatters:
      'Reliable operations and maintenance standards protect asset quality, support occupancy outcomes, and build long-term stakeholder confidence.',
    ctaLabel: 'Enquire with Property Operations',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'CPMS',
  },
  {
    slug: 'surety-risk-support',
    name: 'Surety & Risk Support',
    summary:
      'Surety and risk support services designed to improve execution confidence and governance readiness.',
    positioningLine: 'Risk-backed support for disciplined project and contract delivery.',
    overview:
      'Through Orange Surety, this field supports counterparties that require risk transparency, practical surety frameworks, and structured documentation aligned with delivery standards.',
    coreAreas: [
      'Project and contract risk support',
      'Surety framework structuring',
      'Risk documentation and advisory',
      'Execution assurance reporting',
    ],
    whyItMatters:
      'Complex projects need confidence layers beyond basic execution. This operating field helps strengthen delivery certainty and stakeholder trust.',
    ctaLabel: 'Enquire with Surety & Risk Support',
    imageUrl:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'Surety',
  },
  {
    slug: 'coastal-operations',
    name: 'Coastal Operations',
    summary:
      'Coastal service operations built for reliable execution in shoreline and maritime-adjacent environments.',
    positioningLine: 'Practical coastal operations with safety and service discipline.',
    overview:
      'This field is represented by Coast Plannet and focuses on operational delivery for coastal assets and service points where local execution capability is critical.',
    coreAreas: [
      'Coastal site operational support',
      'Marine-adjacent service coordination',
      'Safety and environmental operating procedures',
      'Local planning and operational response',
    ],
    whyItMatters:
      'Coastal environments require dependable, context-aware operating execution. This field supports that requirement with structured delivery capability.',
    ctaLabel: 'Enquire with Coastal Operations',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'Coast',
  },
  {
    slug: 'automotive-cleaning-car-services',
    name: 'Automotive Cleaning & Car Services',
    summary:
      'Car washing and detailing services designed for speed, consistency, and customer convenience.',
    positioningLine: 'Operational car service model for repeat-use customers and fleets.',
    overview:
      'This field is led by Tiptop Wash, a focused operating concept for modern car washing and detailing services with high service consistency and practical customer access.',
    coreAreas: [
      'Express exterior wash services',
      'Interior cleaning and detailing packages',
      'Fleet and recurring wash programs',
      'Membership and digital booking model',
    ],
    whyItMatters:
      'Vehicle owners and fleets need trusted, time-efficient car service options. This field responds with quality-focused, scalable operating execution.',
    ctaLabel: 'Enquire with Automotive Services',
    imageUrl:
      '/images/tiptop-wash.jpg',
    logoLabel: 'Tiptop',
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
