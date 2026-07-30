const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
require('dotenv').config({ path: '.env.local' });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seedData = {
    consultation_requests: {
        full_name: "Sample User",
        email: "sample@example.com",
        phone: "12345678",
        company_name: "Sample Corp",
        services_of_interest: ["Web Development"],
        biggest_challenge: "No online presence",
        preferred_time: "Morning",
        created_at: serverTimestamp(),
    },
    quote_requests: {
        full_name: "Quote Request Test",
        email: "quote@example.com",
        phone: "87654321",
        company_name: "Quote Inc",
        services_of_interest: ["UI/UX Design"],
        project_description: "A brand new website for our business.",
        estimated_budget: "$5,000 - $10,000",
        desired_timeline: "3 months",
        created_at: serverTimestamp(),
    },
    contact_messages: {
        full_name: "Contact Test",
        email: "contact@example.com",
        subject: "Hello!",
        message: "This is a test message from the contact form.",
        created_at: serverTimestamp(),
    },
    feedback_submissions: {
        full_name: "Feedback Test",
        email: "feedback@example.com",
        subject: "Great Service",
        message: "I really like the new design!",
        created_at: serverTimestamp(),
    },
    support_requests: {
        full_name: "Support Test",
        email: "support@example.com",
        subject: "Technical Issue",
        issue_description: "Having trouble with the login.",
        priority: "High",
        created_at: serverTimestamp(),
    },
    referrals: {
        referrer_name: "Referrer Name",
        referrer_email: "referrer@example.com",
        referred_name: "Referred Friend",
        referred_email: "referred@example.com",
        referred_company: "Friend's Company",
        referred_service: "Digital Marketing",
        additional_notes: "Please reach out to them soon!",
        created_at: serverTimestamp(),
    },
    design_requirements: {
        full_name: "Design Test",
        email: "design@example.com",
        phone: "99887766",
        company_name: "Creative Labs",
        logo_url: null,
        primary_color: "#FF0000",
        secondary_color: "#00FF00",
        accent_color: "#0000FF",
        primary_font: "Roboto",
        secondary_font: "Open Sans",
        header_requirements: { content: "Sticky header" },
        footer_requirements: { content: "Social links only" },
        navigation_requirements: { content: "Clean and simple" },
        other_sections_requirements: { content: "Testimonials section needed" },
        project_description: "A modern design for our new app.",
        additional_notes: "None",
        created_at: serverTimestamp(),
    }
};

async function seed() {
    console.log("Starting Firebase seeding...");
    for (const [colName, data] of Object.entries(seedData)) {
        try {
            const docRef = await addDoc(collection(db, colName), data);
            console.log(`✅ Collection '${colName}' created with sample ID: ${docRef.id}`);
        } catch (e) {
            console.error(`❌ Error adding to ${colName}: `, e);
        }
    }
    console.log("Seeding complete! You can now see these collections in your Firebase Console.");
    process.exit(0);
}

seed();
