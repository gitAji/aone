// The two SOW packages from the Master Services Agreement, intentionally
// kept out of packages.js / PricingClient.js's public listing -- these are
// only reachable via the discreet link on the pricing page, per request.
// Server-side checkout code must resolve price from here, never trust a
// client-sent price, same rule as packages.js.
export const specialOfferPackages = [
    {
        id: 'special-basic',
        name: 'Basic Digital Solution Pack',
        yearlyPrice: 2500,
        features: [
            'Website',
            'Web hosting',
            'Admin Panel (text, menu & prices)',
            'Daily technical maintenance',
        ],
        description: 'Special SMB offer: a complete, managed website with ongoing maintenance, billed once a year.',
    },
    {
        id: 'special-pro',
        name: 'Pro Digital Solution Pack',
        yearlyPrice: 5000,
        features: [
            'Everything in Basic',
            'Custom Next.js website (up to 5 pages)',
            'Photography package (up to 5 photos or a 1-min promo video)',
            'Social media account setup',
        ],
        description: 'A fully custom site plus photography and social media setup, billed once a year.',
    },
];
