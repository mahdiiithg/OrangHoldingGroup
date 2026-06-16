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
    slug: 'ict-solutions',
    name: 'ICT Solutions',
    summary:
      'AI, cybersecurity, managed services, and digital transformation for a connected world.',
    positioningLine: 'Technology infrastructure for resilient, connected operations.',
    overview:
      'Our ICT platform delivers enterprise-grade digital capability across cybersecurity, cloud, managed services, and applied AI. We support organizations that require secure, scalable technology foundations.',
    coreAreas: [
      'Cybersecurity and risk management',
      'Managed IT and cloud services',
      'Digital transformation programs',
      'Applied AI and automation',
    ],
    whyItMatters:
      'Digital capability is now a core operating requirement. Our ICT division provides the technical depth and governance discipline needed for long-horizon enterprise performance.',
    ctaLabel: 'Enquire with ICT Solutions',
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'ICT',
  },
  {
    slug: 'property-management',
    name: 'Property Management',
    summary:
      'Operational property services designed to support asset performance, consistency, and trust.',
    positioningLine: 'Operational excellence across essential property assets.',
    overview:
      'We provide property management services focused on operational consistency, tenant experience, and asset performance across residential and commercial portfolios.',
    coreAreas: [
      'Portfolio operations and compliance',
      'Tenant and stakeholder management',
      'Maintenance and asset care',
      'Performance reporting and oversight',
    ],
    whyItMatters:
      'Well-managed property assets underpin stable cash flows and stakeholder confidence. Our approach emphasizes accountability, transparency, and long-term asset stewardship.',
    ctaLabel: 'Enquire with Property Management',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'Property',
  },
  {
    slug: 'health-wellness-beauty',
    name: 'Health, Wellness & Beauty',
    summary:
      'Services and product innovation across healthcare, wellness, personal care, and beauty.',
    positioningLine: 'Human-centered services across health and personal care.',
    overview:
      'This platform spans clinical-adjacent services, wellness programs, and consumer personal care innovation with a focus on quality, safety, and sustainable growth.',
    coreAreas: [
      'Wellness and preventive care services',
      'Personal care product development',
      'Retail and distribution partnerships',
      'Quality and compliance frameworks',
    ],
    whyItMatters:
      'Health and wellness demand continues to grow across demographics. We invest in platforms that combine service quality with scalable operating models.',
    ctaLabel: 'Enquire with Health Platform',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'Health',
  },
  {
    slug: 'agrifood-nutrition',
    name: 'AgriFood & Nutrition',
    summary:
      'Agriculture, food science, nutrition, and consulting focused on resilience, innovation, and supply.',
    positioningLine: 'Food systems resilience through science and advisory capability.',
    overview:
      'Our AgriFood platform covers production, nutrition science, supply chain advisory, and food innovation with emphasis on sustainability and regional food security.',
    coreAreas: [
      'Agricultural production and supply',
      'Nutrition science and product development',
      'Food systems consulting',
      'Sustainability and traceability programs',
    ],
    whyItMatters:
      'Food security and nutrition innovation are structural growth themes. We build capability where science, operations, and market access intersect.',
    ctaLabel: 'Enquire with AgriFood & Nutrition',
    imageUrl:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'AgriFood',
  },
  {
    slug: 'training-development',
    name: 'Training & Development',
    summary:
      'Professional capability, technical learning, executive development, and workforce readiness.',
    positioningLine: 'Capability building for workforce and leadership readiness.',
    overview:
      'We deliver structured learning programs across technical skills, leadership development, and workforce transition to strengthen organizational capability.',
    coreAreas: [
      'Technical and professional upskilling',
      'Executive and leadership programs',
      'Workforce transition and readiness',
      'Corporate learning partnerships',
    ],
    whyItMatters:
      'Human capability is a compounding asset. Our training platform supports clients and portfolio companies in building durable talent pipelines.',
    ctaLabel: 'Enquire with Training & Development',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'Training',
  },
  {
    slug: 'emerging-ventures',
    name: 'Emerging Ventures',
    summary:
      'Future-facing initiatives in media, creativity, innovation, and new business opportunities.',
    positioningLine: 'Selective venture development for next-generation growth.',
    overview:
      'Emerging Ventures incubates new business lines and strategic partnerships in media, creativity, and innovation with disciplined stage-gate evaluation.',
    coreAreas: [
      'Media and content ventures',
      'Creative industry partnerships',
      'Innovation scouting and incubation',
      'Strategic venture structuring',
    ],
    whyItMatters:
      'Long-term holding companies must balance core stability with selective innovation. This platform provides structured exploration without diluting operating focus.',
    ctaLabel: 'Strategic Venture Enquiry',
    imageUrl:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
    logoLabel: 'Ventures',
    future: true,
  },
];

export function getSector(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
