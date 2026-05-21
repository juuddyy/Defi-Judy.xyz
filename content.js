// =============================================================
//  JUDY DEVREL PORTFOLIO — CONTENT.JS
//  ✏️  Edit any text inside the quote marks " " to update
//      your portfolio. Save the file, then refresh the browser.
//  ⚠️  Do NOT remove commas, brackets, or quote marks.
// =============================================================

const CONTENT = {

  // ─────────────────────────────────────────────────────────
  //  HERO
  // ─────────────────────────────────────────────────────────
  hero: {
    tag:         "Developer Relations · Ecosystem Growth · Web3",
    title:       "Developer Relations & Ecosystem Growth in Web3",
    subtitle:    "Supporting developer adoption, ecosystem education, and community growth across BitcoinFi and Web3 ecosystems.",
    cta_primary: "View Case Studies",
    cta_ghost:   "Let's Talk",
    badges: ["BitcoinFi", "Developer Onboarding", "Community Ops", "Technical Documentation", "IELTS 8.5"],
  },

  // ─────────────────────────────────────────────────────────
  //  ABOUT
  // ─────────────────────────────────────────────────────────
  about: {
    label: "about",
    title: "Bridging builders and ecosystems.",
    paragraphs: [
      "I'm a Developer Relations professional specializing in Web3 ecosystem growth, developer onboarding, and community-led education. With over three years embedded in fast-scaling blockchain protocols, I've built the instincts to understand what developers and power users need — and the communication skills to deliver it clearly.",
      "My work sits at the intersection of technical understanding, community architecture, and product feedback loops. I've served as the first line of clarity when protocols launch, turning confused early adopters into confident contributors.",
      "At Mezo Network, I helped establish the community infrastructure from the ground up — security systems, support protocols, onboarding campaigns, and a creator sub-community that remains Mezo's strongest voice on social platforms.",
      "I hold an IELTS band score of 8.5, placing me in the top 5% of test-takers globally — a reflection of the precision I bring to both written documentation and live developer communication.",
    ],
    stats: [
      { value: "3",   suffix: "+",  animated: true,  label: "Years in Web3" },
      { value: "8.5", suffix: "",   animated: true,  label: "IELTS Band Score" },
      { value: "5",   suffix: "+",  animated: true,  label: "Ecosystems Supported" },
      { value: "∞",   suffix: "",   animated: false, label: "Community Threads Resolved" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  EXPERIENCE
  // ─────────────────────────────────────────────────────────
  experience: {
    label: "experience",
    title: "Work and Impact",
    roles: [
      {
        period:   "2024 – 2025",
        badge:    "Most Recent",
        role:     "Lead Community Moderator",
        org:      "Mezo Network",
        org_url:  "https://mezo.org",
        featured: true,
        desc:     "Served as the primary community touchpoint during Mezo's growth phase — a BitcoinFi protocol building Bitcoin-native financial infrastructure. Owned the full community operations lifecycle from launch through scaling.",
        bullets: [
          "Provided prompt customer support by replicating user problems to identify root causes and deliver precise, documented solutions",
          "Created detailed walkthroughs and guides based on recurring user queries, reducing repeat support volume",
          "Escalated critical issues clearly and promptly, acting as liaison between users, the core team, and community contributors",
          "Managed the community creator team — sourcing, onboarding, and motivating contributors who became Mezo's strongest ecosystem voices",
          "Established and enforced community safety standards, maintaining a high-trust, high-engagement environment",
        ],
        tags: ["BitcoinFi", "Developer Onboarding", "Community Ops", "Technical Support", "Creator Programs"],
      },
      {
        period:   "2024 – 2025",
        badge:    "",
        role:     "Support Team Member",
        org:      "Superposition",
        org_url:  "#",
        featured: false,
        desc:     "Embedded within a fast-moving product team as a support specialist, with emphasis on developer and power-user feedback translation.",
        bullets: [
          "Stayed attentive to user complaints and escalated promptly using Trello and BetterStack to prioritize by urgency",
          "Reported structured product feedback and catalogued recurring feature requests for the engineering team",
          "Participated in alpha testing of new product features, matching observed bugs against documented user pain points",
        ],
        tags: ["Alpha Testing", "Product Feedback", "Trello", "BetterStack"],
      },
      {
        period:   "2024 – early 2025",
        badge:    "",
        role:     "Support Member → Executive Secretary",
        org:      "Acre BTC",
        org_url:  "#",
        featured: false,
        desc:     "Started in a support role and was promoted to Executive Secretary — taking on operational oversight of the community support structure.",
        bullets: [
          "Worked alongside the community manager to design efficient support protocols using Mava",
          "Introduced escalation and prioritization workflows, reducing response time for critical issues",
          "Created tutorial documentation and educational articles to improve user self-service",
        ],
        tags: ["Mava", "Support Protocols", "Documentation", "Bitcoin Ecosystem"],
      },
      {
        period:   "2023 – 2024",
        badge:    "",
        role:     "Community Moderator",
        org:      "Taho Wallet",
        org_url:  "#",
        featured: false,
        desc:     "Managed the Discord community for a self-custodial Web3 wallet, supporting both new and experienced crypto users through DeFi literacy and wallet troubleshooting.",
        bullets: [
          "Provided timely user support and maintained an engaging, welcoming community environment",
          "Initiated topic-led conversations around DeFi trends and emerging ecosystem tools",
          "Created detailed walkthroughs from recurring user problems — replicating issues firsthand before documenting solutions",
        ],
        tags: ["DeFi Education", "Discord Ops", "Wallet Support"],
      },
      {
        period:   "2022 – 2023",
        badge:    "",
        role:     "Partner Community Manager",
        org:      "Saddle Finance",
        org_url:  "#",
        featured: false,
        desc:     "First ecosystem role — owned community operations for a DeFi protocol, building the foundation for the support and moderation skills developed in later roles.",
        bullets: [
          "Provided timely user support and maintained a high-engagement community environment",
          "Shared articles and simple animations to boost product visibility and onboard new users",
          "Oversaw project collaborations between the core team and partner ecosystems",
          "Introduced community games, educational quizzes, and raffles to drive retention",
        ],
        tags: ["DeFi", "Community Growth", "Partnership Ops"],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  DEVREL SKILLS
  // ─────────────────────────────────────────────────────────
  skills: {
    label: "devrel skills",
    title: "What I bring to the table.",
    blocks: [
      {
        icon:  "⚙️",
        title: "Developer Support & Documentation",
        desc:  "Experienced in replicating user and developer problems firsthand to understand root causes. Produced structured FAQs, step-by-step walkthroughs, and onboarding guides using Coda and Google Docs. Tools: Mava, Trello, BetterStack.",
      },
      {
        icon:  "₿",
        title: "Blockchain & Protocol Knowledge",
        desc:  "3+ years navigating DeFi and BitcoinFi ecosystems including DEXes, lending markets, prediction markets, perp platforms, and Bitcoin-native applications. Capable of understanding, replicating, and explaining complex protocol mechanics clearly.",
      },
      {
        icon:  "🏗️",
        title: "Community Platform Operations",
        desc:  "Launched and scaled multiple Discord communities — designing channel structures, security configurations, bot integrations, support tiers, and contributor pipelines. Experience onboarding thousands of users into complex protocol environments.",
      },
      {
        icon:  "🎙️",
        title: "Technical Communication",
        desc:  "IELTS 8.5 (top 5% globally). Skilled at translating complex Web3 concepts into clear, accessible language for audiences ranging from crypto natives to first-time users. Experienced in written guides, live moderation, and educational content.",
      },
      {
        icon:  "📢",
        title: "Developer Feedback Loops",
        desc:  "Collected, categorized, and escalated product feedback from users and community members to core engineering and product teams. Participated in alpha testing, matching bugs to prior user-reported pain points with documented solutions.",
      },
      {
        icon:  "⚡",
        title: "Ecosystem & Partnership Growth",
        desc:  "Managed cross-community collaborations, co-hosted ecosystem events, and built creator programs that expanded protocol reach. Experience coordinating with BD, marketing, and product teams on aligned go-to-market activations.",
      },
    ],
    tools:     ["Discord", "Mava", "Trello", "BetterStack", "Coda", "Google Docs", "Twitter/X", "Notion"],
    technical: ["Bot Integrations", "Workflow Automations", "Data Analysis", "Content Creation", "Event Hosting", "Public Speaking"],
    soft:      ["Effective Communication", "Crisis Management", "Attentiveness", "Service-Oriented Leadership", "Empathy", "Problem Solving"],
  },

  // ─────────────────────────────────────────────────────────
  //  CASE STUDIES
  // ─────────────────────────────────────────────────────────
  cases: {
    label: "case studies",
    title: "Work that moved the needle.",
    items: [
      {
        tags:      ["Mezo Network", "Community Architecture"],
        title:     "Building Mezo's Community Infrastructure From Zero",
        featured:  true,
        challenge: "Mezo Network needed a fully operational, secure, and engaging community before its protocol went live — with no existing playbook for a Bitcoin-native DeFi community.",
        action:    "Designed the Discord server architecture from scratch — channels, roles, security systems, and support tiers. Created onboarding documentation for new users arriving through multiple campaign funnels. Built and managed a creator sub-community to generate authentic, organic protocol content on X (Twitter).",
        result:    "A high-trust, active community that sustained engagement through protocol milestones. The creator network continues to operate as one of the most recognized Mezo voices across Web3 social platforms.",
      },
      {
        tags:      ["Acre BTC", "Support Ops"],
        title:     "Designing a Scalable Support Protocol with Mava",
        featured:  false,
        challenge: "Acre BTC's support volume was outpacing its team's capacity, with no structured escalation system in place.",
        action:    "Partnered with the community manager to build a tiered support system using Mava — tagging issues by urgency, routing them to the right team member, and closing feedback loops with documented resolutions.",
        result:    "Faster resolution times for critical issues, a reusable escalation framework, and tutorial documentation that reduced repeat queries.",
      },
      {
        tags:      ["Superposition", "Alpha Testing"],
        title:     "Closing the Feedback Loop Between Users and Product",
        featured:  false,
        challenge: "The engineering team needed structured, prioritized user feedback — not a raw dump of complaints — to make informed product decisions.",
        action:    "Used BetterStack uptime monitoring alongside Trello to triage, categorize, and escalate bugs and feature requests in order of user impact. Participated in alpha testing by replicating reported issues to confirm and document reproducible steps.",
        result:    "Engineering received actionable, prioritized feedback. Several recurring feature requests made it into product roadmap discussions based on my documented findings.",
      },
      {
        tags:      ["Taho Wallet", "User Education"],
        title:     "Turning Common Errors Into Educational Content",
        featured:  false,
        challenge: "New users were repeatedly encountering the same wallet and DeFi interaction errors, flooding support with identical questions.",
        action:    "Replicated each common error firsthand, mapped the user's mental model, and produced step-by-step visual walkthroughs pinned in the community. Initiated topic-led discussions around DeFi trends to proactively educate before problems occurred.",
        result:    "Reduced repetitive support volume and a more confident, self-sufficient user base — especially among first-time DeFi users.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  TECHNICAL CONTENT
  // ─────────────────────────────────────────────────────────
  content_section: {
    label: "technical content",
    title: "Educating ecosystems at scale.",
    intro: "Developer Relations lives or dies by the quality of its educational output. Here's the type of technical content I produce and the audiences I've written for.",
    // ── Demo article slots — edit titles, excerpts, and links ──
    demo_articles: [
      {
        gradient: "linear-gradient(135deg, #4facfe 0%, #00d4ff 100%)",
        platform: "Mirror",
        date:     "Mar 2025",
        title:    "Building Developer Communities in BitcoinFi: Lessons from Mezo",
        excerpt:  "What I learned designing a Bitcoin-native Discord community from zero — channels, roles, security systems, and creator networks that lasted.",
        href:     "#",
      },
      {
        gradient: "linear-gradient(135deg, #f7931a 0%, #ffd166 100%)",
        platform: "Substack",
        date:     "Jan 2025",
        title:    "From Zero to Onboarded: Writing Docs for Web3 Protocols",
        excerpt:  "A practical guide to turning recurring user pain points into self-service documentation that actually gets read and reduces support volume.",
        href:     "#",
      },
      {
        gradient: "linear-gradient(135deg, #667eea 0%, #a78bfa 100%)",
        platform: "Mirror",
        date:     "Nov 2024",
        title:    "How I Scaled Community Support Using Mava at Acre BTC",
        excerpt:  "The triage system that cut resolution times and gave engineers clean, prioritized feedback for the first time — built with Mava.",
        href:     "#",
      },
    ],
    items: [
      {
        type:  "User Guides & FAQs",
        title: "Protocol Walkthroughs",
        desc:  "Step-by-step guides built from first-person problem replication. Written for both technical users (integrators, developers) and onboarding newcomers. Hosted in community wikis and pinned Discord resources.",
        meta:  "Tools: Coda, Google Docs, Notion",
      },
      {
        type:  "Educational Series",
        title: "DeFi & BitcoinFi Explainers",
        desc:  "Written and visual explainers covering lending markets, DEX mechanics, Bitcoin-native applications, and ecosystem navigation — designed to reduce friction for developers and users entering the BitcoinFi space for the first time.",
        meta:  "Platforms: Twitter/X, Discord, TikTok",
      },
      {
        type:  "Onboarding Campaigns",
        title: "Structured Onboarding Flows",
        desc:  "Designed multi-step onboarding journeys for protocol launches — combining welcome sequences, role-gating, documentation links, and community touchpoints to move users from discovery to active participation.",
        meta:  "Tools: Discord bots, Mava, custom automation",
      },
      {
        type:  "Community Programs",
        title: "Quizzes, Campaigns & Events",
        desc:  "Designed educational quiz campaigns that tested and reinforced protocol knowledge while keeping communities engaged. Ran raffles, community games, and ecosystem events that doubled as educational touchpoints.",
        meta:  "Platforms: Discord, Twitter/X",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  ECOSYSTEM IMPACT  ← numbers from your screenshot
  // ─────────────────────────────────────────────────────────
  impact: {
    label: "ecosystem impact",
    title: "Community numbers tell a story.",
    stats: [
      { value: "5",   suffix: "+",  animated: true,  label: "Ecosystems supported" },
      { value: "100", suffix: "+",  animated: true,  label: "Team member publishing thousands of educational contents." },
      { value: "100", suffix: "k+", animated: true,  label: "Users and developers Onboarded across various ecosystems" },
    ],
    narrative_title: "The Mezo Creator Network",
    narrative:       "One of my most impactful projects at Mezo was identifying, recruiting, and building a sub-community of ecosystem creators — individuals who were already passionate about the Mezo thesis and could articulate it authentically. I onboarded, briefed, and coordinated this group, equipping them with the technical context needed to produce high-quality content independently. This network still actively represents Mezo across X and other platforms, tracked and validated through on-chain analytics platforms. It's a compounding DevRel asset: organic, credible, and community-owned.",
    ecosystems: [
      { color: "orange", name: "Mezo Network",   desc: "BitcoinFi protocol, Bitcoin-native financial infrastructure" },
      { color: "blue",   name: "Acre BTC",       desc: "Bitcoin staking and yield protocol" },
      { color: "purple", name: "Superposition",  desc: "DeFi protocol with automated yield optimization" },
      { color: "green",  name: "Taho Wallet",    desc: "Self-custodial Web3 wallet and community" },
      { color: "gray",   name: "Saddle Finance",  desc: "Decentralized AMM for pegged value assets" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  CURRENTLY LEARNING
  // ─────────────────────────────────────────────────────────
  learning: {
    label: "currently learning",
    title: "Always deepening the stack.",
    intro: "DevRel requires staying ahead of the curve. Here's where I'm investing my learning time:",
    items: [
      {
        num:   "01",
        title: "Bitcoin Script & OP_RETURN",
        desc:  "Deepening my technical understanding of Bitcoin's programmability — relevant as BitcoinFi matures and developer tooling expands.",
      },
      {
        num:   "02",
        title: "Technical Writing for Developer Docs",
        desc:  "Studying documentation standards used by leading developer-focused teams — Stripe, Vercel, and Uniswap — to elevate the quality of my written output.",
      },
      {
        num:   "03",
        title: "Community Analytics & Data",
        desc:  "Building fluency in community data tools — tracking engagement, retention, and developer activity metrics to make growth decisions quantifiable.",
      },
      {
        num:   "04",
        title: "Smart Contract Fundamentals",
        desc:  "Developing a working understanding of how smart contracts are structured and deployed — so I can converse confidently with developers building on BitcoinFi protocols.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  CONTACT
  // ─────────────────────────────────────────────────────────
  contact: {
    label:        "contact",
    title:        "Let's build something together.",
    body:         "I'm currently open to Developer Relations, Ecosystem Growth, Developer Advocacy, and Developer Experience roles — particularly in BitcoinFi and emerging Web3 ecosystems. If you're building in this space and want someone who understands both the technical landscape and the human side of adoption, let's talk.",
    availability: "Available for full-time DevRel roles — open to remote and ecosystem-specific contracts",
    links: [
      { icon: "✉",  label: "kheity16@gmail.com", href: "mailto:kheity16@gmail.com" },
      { icon: "𝕏",  label: "Twitter / X",         href: "https://twitter.com" },
      { icon: "in", label: "LinkedIn",             href: "https://linkedin.com" },
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  FOOTER
  // ─────────────────────────────────────────────────────────
  footer: {
    copy:    "judy. © 2025",
    tagline: "Developer Relations · Web3 · BitcoinFi",
  },

};
