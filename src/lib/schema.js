/**
 * Firestore Database Schema Reference
 * 
 * This file documents the structure of the collections used in Aone.
 * These are created automatically when documents are added via the API routes.
 */

export const SCHEMA = {
    /**
     * Collection: consultation_requests
     * Triggered by: /free-consultation form
     */
    consultation_requests: {
        full_name: "string",
        email: "string",
        phone: "string (optional)",
        company_name: "string (optional)",
        services_of_interest: "string[]",
        biggest_challenge: "string (optional)",
        preferred_time: "string (Morning | Afternoon | Evening)",
        created_at: "serverTimestamp"
    },

    /**
     * Collection: quote_requests
     * Triggered by: /request-quote form
     */
    quote_requests: {
        full_name: "string",
        email: "string",
        phone: "string",
        company_name: "string (optional)",
        services_of_interest: "string[]",
        project_description: "string",
        estimated_budget: "string",
        desired_timeline: "string",
        created_at: "serverTimestamp"
    },

    /**
     * Collection: contact_messages
     * Triggered by: /contact form
     */
    contact_messages: {
        full_name: "string",
        email: "string",
        subject: "string",
        message: "string",
        created_at: "serverTimestamp"
    },

    /**
     * Collection: feedback_submissions
     * Triggered by: /feedback form
     */
    feedback_submissions: {
        full_name: "string (optional)",
        email: "string (optional)",
        subject: "string",
        message: "string",
        created_at: "serverTimestamp"
    },

    /**
     * Collection: support_requests
     * Triggered by: /support form
     */
    support_requests: {
        full_name: "string",
        email: "string",
        subject: "string",
        issue_description: "string",
        priority: "string (Low | Medium | High)",
        created_at: "serverTimestamp"
    },

    /**
     * Collection: referrals
     * Triggered by: /referral form & Popup
     */
    referrals: {
        referrer_name: "string",
        referrer_email: "string",
        referred_name: "string",
        referred_email: "string",
        referred_company: "string (optional)",
        referred_service: "string (optional)",
        additional_notes: "string (optional)",
        created_at: "serverTimestamp"
    },

    /**
     * Collection: design_requirements
     * Triggered by: /design-requirements form
     */
    design_requirements: {
        full_name: "string",
        email: "string",
        phone: "string (optional)",
        company_name: "string (optional)",
        logo_url: "string (URL from Firebase Storage)",
        primary_color: "string",
        secondary_color: "string",
        accent_color: "string",
        primary_font: "string",
        secondary_font: "string",
        header_requirements: "object { content: string }",
        footer_requirements: "object { content: string }",
        navigation_requirements: "object { content: string }",
        other_sections_requirements: "object { content: string }",
        project_description: "string",
        additional_notes: "string (optional)",
        created_at: "serverTimestamp"
    }
};
