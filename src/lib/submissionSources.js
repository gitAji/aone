// Shared by every /api/admin/submissions* route. Each form writes to its
// own Firestore collection with its own field names (see the individual
// /api/<form>/route.js handlers) -- this maps each collection to a `type`
// slug and a normalizer so the admin UI can render one unified list, and
// so the detail/edit/delete routes can resolve a `type` back to the right
// collection without duplicating this table.
const SOURCES = [
  {
    collection: 'contact_messages',
    type: 'contact',
    label: 'Contact',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.subject }),
  },
  {
    collection: 'consultation_requests',
    type: 'consultation',
    label: 'Consultation',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.company_name || d.biggest_challenge }),
  },
  {
    collection: 'job_applications',
    type: 'application',
    label: 'Job Application',
    map: (d) => ({ name: d.name, email: d.email, summary: d.role }),
  },
  {
    collection: 'quote_requests',
    type: 'quote',
    label: 'Quote Request',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.project_description }),
  },
  {
    collection: 'referrals',
    type: 'referral',
    label: 'Referral',
    map: (d) => ({ name: d.referrer_name, email: d.referrer_email, summary: `Referred ${d.referred_name || '—'}` }),
  },
  {
    collection: 'support_requests',
    type: 'support',
    label: 'Support Ticket',
    map: (d) => ({ name: d.full_name, email: d.email, summary: `[${d.priority || 'n/a'}] ${d.subject || ''}` }),
  },
  {
    collection: 'feedback_submissions',
    type: 'feedback',
    label: 'Feedback',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.subject }),
  },
  {
    collection: 'design_requirements',
    type: 'design_requirements',
    label: 'Design Requirements',
    map: (d) => ({ name: d.full_name, email: d.email, summary: d.company_name || d.project_description }),
  },
  {
    collection: 'seo_audit_requests',
    type: 'seo_audit',
    label: 'Free SEO Audit',
    map: (d) => ({ name: d.email, email: d.email, summary: d.url }),
  },
  {
    collection: 'orders',
    type: 'order',
    label: 'Order',
    map: (d) => ({
      name: d.formData?.name || d.formData?.fullName || '—',
      email: d.formData?.email || '—',
      summary: `${d.package || 'package'} -- ${d.status || 'unknown'}${d.totalAmount ? ` -- ${d.totalAmount} NOK` : ''}`,
    }),
    // orders writes createdAt as an ISO string, not a Firestore Timestamp.
    createdAtField: 'createdAt',
  },
];

export function getAllSources() {
  return SOURCES;
}

export function getSourceByType(type) {
  return SOURCES.find((s) => s.type === type) || null;
}

export function toIsoString(value) {
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (typeof value.toDate === 'function') return value.toDate().toISOString();
  return null;
}
