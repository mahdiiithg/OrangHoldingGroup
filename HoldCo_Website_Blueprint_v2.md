# Holding Company Website Blueprint v2

Prepared date: 2026-06-13  
Prepared for: Diversified multi-sector holding company

## 1) Vision

Build a premium, listed-style corporate platform that presents one strong parent identity and multiple business divisions under a disciplined structure.

Positioning line:

Building long-term value across essential and growth industries.

## 2) Strategic Outcome

The website should function as:

- a trust layer for partners, investors, and institutional stakeholders,
- a sector navigation system for business discovery,
- a lead-routing engine for qualified enquiries,
- a scalable content platform for growth into countries, subsidiaries, and insights.

## 3) Recommended Stack

- Frontend: Astro
- CMS: Sanity
- Deployment: Cloudflare Pages or Vercel
- Forms: Serverless endpoint with anti-spam and routing rules
- Analytics: GA4 with event tracking

Why this stack:

- excellent Core Web Vitals,
- high SEO control,
- modular and scalable content architecture,
- editor-friendly without layout breakage.

## 4) Site Architecture

```mermaid
flowchart TD
  A[Home] --> B[About Us]
  A --> C[Our Sectors]
  A --> D[Leadership and Governance]
  A --> E[Markets]
  A --> F[News and Insights]
  A --> G[Contact]

  C --> C1[ICT Solutions]
  C --> C2[Property Management]
  C --> C3[Health Wellness and Beauty]
  C --> C4[AgriFood and Nutrition]
  C --> C5[Training and Development]
  C --> C6[Emerging Ventures optional]

  G --> G1[General Corporate Enquiry]
  G --> G2[Sector Enquiry Routing]
  G --> G3[Partnerships and Investment]
```

## 5) Portfolio Logic Diagram

```mermaid
flowchart LR
  P[Parent Holding Company]
  P --> T[Technology and Capability]
  P --> S[Essential Services]
  P --> F[Food Science and Sustainability]

  T --> T1[ICT Solutions]
  T --> T2[Training and Development]

  S --> S1[Property Management]
  S --> S2[Health Wellness and Beauty]

  F --> F1[AgriFood and Nutrition]
```

## 6) Primary User Flows

### Flow A: Partner or Enterprise Client

```mermaid
flowchart TD
  U1[Landing on Home] --> U2[Review group positioning]
  U2 --> U3[Open relevant sector page]
  U3 --> U4[Read capabilities and why it matters]
  U4 --> U5[Submit sector enquiry]
  U5 --> U6[Routing to correct business mailbox]
```

### Flow B: Investor or Strategic Counterparty

```mermaid
flowchart TD
  I1[Landing on Home or About] --> I2[Read Leadership and Governance]
  I2 --> I3[Review Markets and portfolio logic]
  I3 --> I4[Submit Partnerships and Investment enquiry]
  I4 --> I5[Internal team qualification and response]
```

### Flow C: Media and Search Visitor

```mermaid
flowchart TD
  M1[Discover News or Insights from search] --> M2[Read article]
  M2 --> M3[Navigate to related sector page]
  M3 --> M4[Submit media or business enquiry]
```

## 7) Content Model and Schema

```mermaid
classDiagram
  class SiteSettings {
    string companyName
    string tagline
    string contactEmail
    string phone
    string officeAddress
    string analyticsConfig
  }

  class Page {
    string title
    string slug
    string pageType
    string seoTitle
    string seoDescription
    string ogImage
    block[] sections
  }

  class Sector {
    string name
    string slug
    string summary
    string positioningLine
    text overview
    string[] coreAreas
    text whyItMatters
    string ctaLabel
    string ctaRoute
  }

  class LeadershipProfile {
    string fullName
    string role
    text biography
    image photo
    int displayOrder
  }

  class Market {
    string regionName
    string status
    text summary
    int displayOrder
  }

  class InsightPost {
    string title
    string slug
    string category
    text excerpt
    text body
    date publishDate
    string author
    image featuredImage
  }

  class ContactRoutingRule {
    string enquiryType
    string destinationEmail
    string backupEmail
    string autoResponseTemplate
  }

  SiteSettings --> Page
  Page --> Sector
  Page --> LeadershipProfile
  Page --> Market
  Page --> InsightPost
  ContactRoutingRule --> Sector
```

## 8) Form Routing Flow

```mermaid
flowchart TD
  F1[User submits form] --> F2[Validation and anti-spam]
  F2 --> F3{Enquiry type}
  F3 -->|General| R1[Corporate inbox]
  F3 -->|ICT| R2[ICT inbox]
  F3 -->|Property| R3[Property inbox]
  F3 -->|Health Wellness Beauty| R4[Health inbox]
  F3 -->|AgriFood Nutrition| R5[AgriFood inbox]
  F3 -->|Training Development| R6[Training inbox]
  F3 -->|Partnerships Investment| R7[Strategy inbox]
  F3 -->|Media Other| R8[Media inbox]
  R1 --> L[Submission log and analytics event]
  R2 --> L
  R3 --> L
  R4 --> L
  R5 --> L
  R6 --> L
  R7 --> L
  R8 --> L
```

## 9) SEO System Map

```mermaid
flowchart LR
  S1[Clean URLs] --> S6[Search visibility]
  S2[Metadata and OG] --> S6
  S3[Schema markup] --> S6
  S4[Sitemap and robots] --> S6
  S5[Performance and CWV] --> S6
```

## 10) Build and Delivery Flow

```mermaid
flowchart TD
  D1[Discovery and inputs] --> D2[Information architecture]
  D2 --> D3[Wireframes]
  D3 --> D4[UI design system]
  D4 --> D5[CMS schema and modeling]
  D5 --> D6[Frontend implementation]
  D6 --> D7[SEO analytics forms compliance]
  D7 --> D8[QA and launch]
  D8 --> D9[Handover and support]
```

## 11) Delivery Timeline

```mermaid
gantt
  title Website Delivery Plan
  dateFormat  YYYY-MM-DD
  section Phase 1 Foundation
  Discovery and IA              :a1, 2026-06-20, 7d
  Wireframes and UI system      :a2, after a1, 10d
  CMS modeling and build        :a3, after a2, 12d
  SEO forms analytics compliance:a4, after a3, 6d
  QA launch handover            :a5, after a4, 5d

  section Phase 2 Growth
  Insights and publishing scale :b1, after a5, 10d
  Regional pages                :b2, after b1, 8d
  Emerging Ventures page        :b3, after b2, 5d
```

## 12) Client Deliverables Pack

- Information architecture and sitemap.
- Responsive UI design system.
- Astro frontend implementation.
- Sanity CMS configuration and content model.
- Sector templates and reusable page modules.
- Contact routing with anti-spam.
- SEO foundation and page-level controls.
- Analytics and cookie consent integration.
- Legal pages setup.
- Editor guide and technical handover notes.

## 13) What the Client Receives at Launch

- Complete production-ready website.
- CMS admin access and editor roles.
- Reusable templates for future sectors and regions.
- Performance-tuned pages and SEO baseline.
- Routing-ready contact workflow.
- Documentation for content updates and governance.

## 14) Inputs Needed to Start Immediately

- Final company name and approved logo.
- Leadership bios and profile photos.
- Contact and office details.
- Legal text for privacy, terms, cookies.
- Preferred brand tone and typography direction.
- Approval of homepage and sector copy.

## 15) Final Recommendation

Proceed with Astro plus Sanity as the long-term digital foundation. This gives the strongest balance of speed, SEO, scalability, governance, and marketing readiness for a multi-sector holding company.
