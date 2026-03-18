const products = [
  {
    id: "pos",
    title: "Aone POS System",
    description: "Our comprehensive Point of Sale system streamlining sales, inventory, and operations for retail and restaurants.",
    projectLink: "/products/pos",
    subdomain: "https://pos.aone.no/",
    imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop",
    overview: {
      description1: "A robust POS system designed to fit seamless business operations. It supports fast checkout, detailed reporting, and effortless inventory management. Whether you're running a restaurant or a retail store, our POS is built to scale with you.",
      description2: "Unlock a new level of efficiency with intelligent insights, multi-location support, and real-time synchronization.",
    },
    features: [
      "Intuitive checkout interface",
      "Real-time inventory tracking",
      "Comprehensive sales reports & analytics",
      "Multi-store management",
      "Employee access control",
      "Customer loyalty programs"
    ],
    technologies: ["React", "Node.js", "Cloud Database", "Secure Payment Integrations"]
  },
  {
    id: "crm",
    title: "Aone CRM System",
    description: "Manage relationships, optimize sales pipelines, and engage customers effectively with our intelligent CRM.",
    projectLink: "/products/crm",
    subdomain: "https://crm.aone.no/",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    overview: {
      description1: "Aone CRM is a dedicated platform connecting you closer to your customers. Track every interaction, follow up on quotes, and improve closure rates with automated pipelines and analytics.",
      description2: "From marketing automation to customer support ticketing, our CRM centralizes every process, enabling your team to focus on what matters most: growing the business.",
    },
    features: [
      "Contact & Lead Management",
      "Automated Sales Pipelines",
      "Email & Marketing Automation",
      "Customizable Dashboards",
      "Task & Calendar Sync",
      "Detailed Performance Analytics"
    ],
    technologies: ["Next.js", "AI Automation", "Scalable Cloud Architecture", "Real-time sync"]
  }
];

export default products;
