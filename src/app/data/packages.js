export const packages = [
    {
        id: 'starter',
        name: 'Starter Pack',
        price: 9900,
        monthlyPrice: 490,
        features: [
            'Up to 10 pages',
            'Logo design (basic)',
            'CMS-based website',
            'Responsive design',
            'Basic SEO',
            '1 domain + 1 year hosting'
        ],
        recommended: false
    },
    {
        id: 'business',
        name: 'Business Pack',
        price: 19900,
        monthlyPrice: 990,
        features: [
            'Everything in Starter',
            'Booking / calendar / menu',
            'Advanced UX',
            'Lead capture forms',
            'Priority Support',
            '1 domain + 1 year hosting'
        ],
        recommended: true
    },
    {
        id: 'photography',
        name: 'Photography Add-on',
        price: 5000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Professional photos (up to 10)',
            'Gallery integration',
            'Web usage rights'
        ],
        description: 'Professional product, menu, or facility photography (up to 10 high-resolution photos) tailored for your website.'
    },
    {
        id: 'videography',
        name: 'Videography Add-on',
        price: 9000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Professional video (up to 2 mins)',
            'Video integration',
            'Web usage rights'
        ],
        description: 'Engaging 2-minute video showcasing your business, products, or facility, optimized for website and social media use.'
    },
    {
        id: 'seo',
        name: 'Advanced SEO',
        price: 4500,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Keyword research',
            'On-page optimization',
            'Technical SEO audit'
        ],
        description: 'Comprehensive keyword research, on-page optimization, and a technical audit to boost your site’s search engine visibility.'
    },
    {
        id: 'socialmedia',
        name: 'Social Media Management',
        price: 5000,
        monthlyPrice: 1500,
        isAddon: true,
        features: [
            'Profile setup',
            'Post scheduling',
            'Community engagement'
        ],
        description: 'Full social media management, including profile setup, content scheduling, and active community engagement to grow your brand.'
    },
    {
        id: 'maintenance',
        name: 'Monthly Maintenance',
        price: 0,
        monthlyPrice: 990,
        isAddon: true,
        features: [
            'Software updates',
            'Security backups',
            'Minor content updates'
        ],
        description: 'Worry-free monthly maintenance covering software updates, automated security backups, and small content changes.'
    },
    {
        id: 'logodesign',
        name: 'Logo Design',
        price: 3500,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Custom logo (3 concepts)',
            'Unlimited revisions',
            'High-resolution files'
        ],
        description: 'Custom professional logo design with 3 initial concepts, unlimited revisions, and all high-resolution files included.'
    },
    {
        id: 'ai-automation',
        name: 'AI Automation',
        price: 15000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'Basic AI chatbot',
            'Workflow automation',
            'Time-saving integrations'
        ],
        description: 'Intelligent AI chatbot and custom workflow automations to streamline your operations and save valuable time.'
    },
    {
        id: 'digital-marketing',
        name: 'Digital Marketing Kickstart',
        price: 7500,
        monthlyPrice: 2000,
        isAddon: true,
        features: [
            'Google Ads setup',
            'Campaign management',
            'Performance reporting'
        ],
        description: 'Strategic digital marketing kickstart including Google Ads setup, ongoing campaign management, and detailed reporting.'
    },
    {
        id: 'uiux-design',
        name: 'Premium UI/UX Audit',
        price: 5000,
        monthlyPrice: 0,
        isAddon: true,
        features: [
            'User journey mapping',
            'Interactive prototypes',
            'Accessibility audit'
        ],
        description: 'Premium UI/UX analysis featuring user journey mapping, interactive prototypes, and a full accessibility audit.'
    }
];
