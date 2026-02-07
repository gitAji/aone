# Agent Instructions: Order → Contract → Posten Signering → Payment Flow

## Purpose
Implement a legally binding order flow where:
1. User selects a package
2. User enters business & personal details
3. A contract is digitally signed via Posten Signering (BankID)
4. User is redirected back to the site
5. Payment is completed after successful signing

This flow ensures legal acceptance before payment and uses Posten Signering as an external signing provider.

---

## High-Level Flow

1. Package selection (frontend)
2. Data collection (frontend)
3. Contract generation (backend)
4. Redirect user to Posten Signering (external)
5. User signs with BankID on posten.no
6. Redirect back to site
7. Verify signature status (backend)
8. Payment (frontend)
9. Order activation (backend)

---

## Frontend Responsibilities

### 1. Package Selection Page
- Display available packages
- Store selected package in session or draft order
- Generate a temporary `order_id`

Required data:
- package_id
- price
- currency
- order_id

---

### 2. Business & Person Details Form
Collect:
- Company name
- Organization number
- Contact person full name
- Email
- Phone number
- Billing address (if needed)

Validation:
- Required fields must be validated client-side
- Email and phone format validation

Submit data to backend:

Backend actions:
- Persist order as `DRAFT`
- Store package + user data
- Generate contract PDF from template
- Assign internal reference ID (order_id)

---

### 4. Create Posten Signering Request
Backend integrates with Posten Signering API.

Actions:
- Upload generated PDF
- Define signer (email / phone)
- Set redirect URLs:
  - success_url: https://yourdomain.no/signing-complete?order_id={order_id}
  - cancel_url: https://yourdomain.no/signing-cancelled?order_id={order_id}
- Store Posten `signing_id`

Return to frontend:
- `signing_url`

---

## Frontend Redirect

### 5. Redirect to Posten
Frontend must redirect the user to:

Notes:
- Signing must NOT be embedded (no iframe)
- User completes BankID signing on posten.no

---

## Post-Signing Flow

### 6. Signing Completion Page
Route:

Frontend:
- Show loading / confirmation message
- Call backend to verify signing

Backend:

---

### 7. Verify Signing (Backend)
Backend must:
- Call Posten API OR rely on webhook
- Confirm signing status = `SIGNED`
- Store signed document reference
- Update order status → `SIGNED`

⚠️ Do NOT trust redirect alone — always verify.

---

## Payment Flow

### 8. Payment Page
Only allow payment if:
- order.status === SIGNED

Payment methods:
- Vipps
- Card / Stripe (optional)

Endpoint:

---

### 9. Order Activation
On successful payment:
- Update order status → `ACTIVE`
- Send confirmation email
- Grant access / activate service

---

## Error Handling

### User cancels signing
- Redirect to `/signing-cancelled`
- Order remains `DRAFT`
- Allow retry signing

### Signing timeout
- Expire signing session
- Regenerate signing request if needed

### Payment failure
- Order remains `SIGNED`
- Allow retry payment

---

## Security & Compliance Notes

- Never expose Posten API keys client-side
- Always verify signing server-side
- Store signed PDFs securely
- Log timestamps and signer identity
- Ensure GDPR compliance for stored personal data

---

## Status Lifecycle


---

## Future Improvements (Optional)
- Webhooks from Posten for real-time updates
- Admin dashboard for contract status
- Replace Posten with Signit API for lower cost at scale

---

## Summary
This architecture:
- Is legally compliant in Norway
- Uses BankID without direct integration
- Ensures contract acceptance before payment
- Scales from MVP to production

End of agent instructions.
