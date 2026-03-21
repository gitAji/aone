export const packages = [
    {
        id: 'starter',
        name: 'Basic Pack',
        price: 4990,
        monthlyPrice: 249,
        features: [
            'Design & Delivery',
            'Full Responsive (Mobile/Desktop)',
            'Basic SEO Optimization',
            'Menu & Content Design',
            'Product Photo & Video',
            'Maintenance & Small Updates (Monthly)'
        ],
        recommended: false,
        description: 'Perfect for established small businesses who need a complete, high-quality digital footprint.'
    },
    {
        id: 'growth',
        name: 'Standard Pack',
        price: 19990,
        monthlyPrice: 999,
        features: [
            'Everything in Basic',
            'AI Chat / Custom Service',
            'Full Database Integration',
            'CMS Admin Access',
            'Voucher Support at Checkout',
            'Maintenance & Basic Updates (Monthly)'
        ],
        recommended: true,
        description: 'Advanced features including database access and AI capabilities to scale your business.'
    },
    {
        id: 'enterprise',
        name: 'Custom Pack',
        price: 0,
        monthlyPrice: 0,
        isCustom: true,
        features: [
            'Everything Custom',
            'Highly Scalable Systems',
            'Full Automation & LLMs',
            'Dedicated Project Manager',
            'Bespoke Enterprise Solutions'
        ],
        recommended: false,
        description: 'Bespoke AI infrastructure for organizations requiring high-scale, unique integrations.'
    },
    {
        id: 'chatbot',
        name: 'AI Sales Agent (Voiceflow)',
        price: 25000,
        monthlyPrice: 990,
        isAddon: true,
        features: [
            '24/7 Intelligent Customer Support',
            'Custom Knowledge Base Integration',
            'Lead Capture & CRM Sync',
            'Multi-language Support'
        ],
        description: 'A dedicated AI agent that works 24/7 to qualify leads and answer customer questions.'
    },
    {
        id: 'geo',
        name: 'GEO Dominance Package',
        price: 20000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Generative Engine Optimization',
            'AI-Search Visibility Strategy',
            'Competitor AI Content Audit',
            'Contextual Authority Building'
        ],
        description: 'Proactively shape how AI engines (Perplexity, ChatGPT, Gemini) describe your brand.'
    },
    {
        id: 'performance',
        name: 'Lightning Performance Audit',
        price: 15000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Lighthouse & Web Vitals Audit',
            'Image & Code Optimization',
            'Server-Side Rendering (SSR) Setup',
            'Accessibility Compliance (WCAG)'
        ],
        description: 'Boost your site speed to sub-1 second loading times to improve SEO and conversion.'
    },
    {
        id: 'branding',
        name: 'Digital-First Branding',
        price: 30000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Adaptive Logo & Brand System',
            'Modern Typography & Palette',
            'Social Media Asset Kit',
            'Brand Style Guide'
        ],
        description: 'A complete brand identity designed for high-impact digital experiences.'
    },
    {
        id: 'marketing',
        name: 'AI-Driven Marketing',
        price: 25000,
        monthlyPrice: 5000,
        isAddon: true,
        features: [
            'Predictive Ad Targeting',
            'Automated Campaign Optimization',
            'Personalized Content Clusters',
            'Real-time Performance Dashboard'
        ],
        description: 'Leverage AI to maximize your marketing ROI with data-driven precision.'
    },
    {
        id: 'maintenance',
        name: 'AI Ops & Maintenance',
        price: 0,
        monthlyPrice: 2500,
        isAddon: true,
        features: [
            'Weekly AI Model Updates',
            'Security & Uptime Monitoring',
            'Performance Optimization',
            'Minor Design/Content Updates'
        ],
        description: 'Comprehensive support to keep your AI-native site running at peak performance.'
    }
];
