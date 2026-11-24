"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaArrowRight, FaArrowLeft, FaSpinner, FaFileSignature, FaLock } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { specialOfferPackages } from "@/app/data/specialOfferPackages";

// Condensed, bilingual summary of the Master Services Agreement (Part 1) and
// Statement of Work (Part 2) -- the full legal document lives outside this
// component; this is what a signer actually reads before ticking the box,
// same pattern as OrderClient.js's inline agreement summary.
const AGREEMENT_TEXT = {
  en: {
    heading: "Master Services Agreement & Statement of Work",
    clauses: [
      {
        title: "1. Scope",
        body: "Aone.no delivers a managed website, hosting, an Admin Panel (text/menu/price edits), and daily technical maintenance, per the selected package. The domain is not included -- the Client points their own domain to Aone.no within 5 business days.",
      },
      {
        title: "2. Hosting & Source Code",
        body: "The site is hosted and operated on Aone.no's own service, pointed to the Client's domain, for as long as the subscription is active. The Client is not given direct access to source code, repositories, or the hosting panel. A full transfer of website files, backups (including any database), and the Admin Panel is available as a separate paid service (NOK 4,890) upon request or at termination.",
      },
      {
        title: "3. Billing",
        body: "Billed annually at the selected package price (not VAT-registered in Norway). The subscription renews automatically each year unless cancelled in writing at least 45 days before renewal. No fixed commitment period beyond the current annual term -- cancel before the next renewal date to stop future charges.",
      },
      {
        title: "4. Liability & Law",
        body: "The Service runs via third-party providers; Aone.no accepts no liability for downtime, data loss, or third-party failures, except where caused by Aone.no's gross negligence or willful misconduct. Governed by Norwegian law.",
      },
      {
        title: "5. Business Customers Only",
        body: "This agreement applies only to the Client acting as a business (næringsdrivende), not as a private consumer.",
      },
    ],
  },
  no: {
    heading: "Hovedavtale om webtjenester & leveransebeskrivelse",
    clauses: [
      {
        title: "1. Omfang",
        body: "Aone.no leverer en administrativt styrt nettside, hosting, et Admin Panel (redigering av tekst/meny/priser) og daglig teknisk vedlikehold, i henhold til valgt pakke. Domene er ikke inkludert -- Kunden peker eget domene til Aone.no innen 5 virkedager.",
      },
      {
        title: "2. Hosting & kildekode",
        body: "Nettsiden driftes via Aone.no sin egen tjeneste, pekende mot Kundens domene, så lenge abonnementet er aktivt. Kunden får ikke direkte tilgang til kildekode, repositorier eller hosting-kontrollpanel. Full overføring av nettsidefiler, sikkerhetskopier (inkl. database) og Admin Panel er tilgjengelig som en separat betalt tjeneste (NOK 4 890) ved forespørsel eller ved ophør.",
      },
      {
        title: "3. Fakturering",
        body: "Faktureres årlig til valgt pakkepris (ikke registrert for MVA i Norge). Abonnementet fornyes automatisk hvert år med mindre det sies opp skriftlig senest 45 dager før fornyelse. Ingen bindingstid utover inneværende årlige periode -- si opp før neste fornyelsesdato for å stoppe fremtidige belastninger.",
      },
      {
        title: "4. Ansvar & lovvalg",
        body: "Tjenesten driftes via tredjepartsleverandører; Aone.no påtar seg intet ansvar for nedetid, datatap eller tredjepartsfeil, med mindre dette skyldes grov uaktsomhet eller forsett fra Aone.no sin side. Reguleres av norsk rett.",
      },
      {
        title: "5. Kun næringsdrivende",
        body: "Denne avtalen gjelder kun Kunden i egenskap av næringsdrivende, ikke som privat forbruker.",
      },
    ],
  },
};

const STEP_LABELS = {
  en: ["Package", "Business Info", "Agreement", "Payment"],
  no: ["Pakke", "Bedriftsinfo", "Avtale", "Betaling"],
};

export default function SpecialOfferClient() {
  const { language } = useLanguage();
  const isNo = language === "no";
  const t = STEP_LABELS[language] || STEP_LABELS.en;
  const agreement = AGREEMENT_TEXT[language] || AGREEMENT_TEXT.en;

  const [step, setStep] = useState(1);
  const [selectedPackId, setSelectedPackId] = useState(null);
  const [formData, setFormData] = useState({ businessName: "", orgNumber: "", name: "", email: "" });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [signatureName, setSignatureName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const selectedPack = specialOfferPackages.find((p) => p.id === selectedPackId);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canProceedStep2 = formData.businessName.trim() && formData.name.trim() && formData.email.trim();
  const canSubmit = agreedToTerms && signatureName.trim().length > 1;

  const handleSubmit = async () => {
    if (!canSubmit || !selectedPack) return;
    setIsSubmitting(true);
    setError(null);
    try {
      const orderId = `SO-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const res = await fetch("/api/checkout/special-offer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          packageId: selectedPack.id,
          formData,
          agreement: { accepted: true, signatureName, language },
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Checkout failed.");
      }
      window.location.href = data.url;
    } catch (err) {
      setError(err.message || "Something went wrong.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {t.map((label, i) => {
            const n = i + 1;
            const active = step === n;
            const done = step > n;
            return (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                      done
                        ? "bg-emerald-500 text-white"
                        : active
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-400"
                    }`}
                  >
                    {done ? <FaCheck className="text-[10px]" /> : n}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 hidden sm:block">{label}</span>
                </div>
                {n < 4 && <div className={`h-[2px] w-8 sm:w-16 ${step > n ? "bg-emerald-500" : "bg-slate-200 dark:bg-slate-800"}`} />}
              </React.Fragment>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Package */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                {isNo ? "Velg pakke" : "Choose your package"}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                {isNo ? "Spesialtilbud, faktureres årlig." : "Special offer, billed annually."}
              </p>
              <div className="space-y-4">
                {specialOfferPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackId(pkg.id)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                      selectedPackId === pkg.id
                        ? "border-slate-900 dark:border-white bg-white dark:bg-slate-900 shadow-lg"
                        : "border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-3">
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">{pkg.name}</h3>
                      <span className="text-xl font-black text-emerald-500">{pkg.yearlyPrice.toLocaleString()} NOK/{isNo ? "år" : "yr"}</span>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{pkg.description}</p>
                    <ul className="space-y-1.5">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <FaCheck className="text-emerald-500 text-[10px] shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </button>
                ))}
              </div>
              <button
                disabled={!selectedPackId}
                onClick={() => setStep(2)}
                className="w-full mt-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                {isNo ? "Neste" : "Next"} <FaArrowRight className="text-sm" />
              </button>
            </motion.div>
          )}

          {/* Step 2: Business info */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                {isNo ? "Bedriftsinformasjon" : "Business information"}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                {isNo ? "Denne avtalen gjelder kun næringsdrivende." : "This agreement applies to business customers only."}
              </p>
              <div className="space-y-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{isNo ? "Bedriftsnavn" : "Business Name"}</label>
                  <input name="businessName" value={formData.businessName} onChange={handleInputChange} className="w-full mt-1.5 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white" placeholder="AS / LLC name" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{isNo ? "Org.nr. (valgfritt)" : "Org. Number (optional)"}</label>
                  <input name="orgNumber" value={formData.orgNumber} onChange={handleInputChange} className="w-full mt-1.5 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white" placeholder="000 000 000" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">{isNo ? "Kontaktperson" : "Contact Name"}</label>
                  <input name="name" value={formData.name} onChange={handleInputChange} className="w-full mt-1.5 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white" placeholder={isNo ? "Fullt navn" : "Full name"} />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full mt-1.5 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white" placeholder="name@company.com" />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(1)} className="px-6 py-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  disabled={!canProceedStep2}
                  onClick={() => setStep(3)}
                  className="flex-1 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {isNo ? "Neste" : "Next"} <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Agreement */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">{agreement.heading}</h1>
              <p className="text-slate-500 dark:text-slate-400 mb-6">
                {isNo ? "Les gjennom og godta vilkårene for å fortsette." : "Read through and accept the terms to continue."}
              </p>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-h-72 overflow-y-auto space-y-5 mb-6">
                {agreement.clauses.map((c) => (
                  <div key={c.title}>
                    <h4 className="text-xs font-black uppercase text-slate-900 dark:text-white mb-1">{c.title}</h4>
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">{c.body}</p>
                  </div>
                ))}
              </div>

              <label className="flex items-start gap-3 mb-6 cursor-pointer">
                <input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="mt-1 w-4 h-4 accent-slate-900 dark:accent-white" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  {isNo
                    ? "Jeg bekrefter at jeg har lest og godtar hovedavtalen og leveransebeskrivelsen, og at jeg handler i egenskap av næringsdrivende."
                    : "I confirm I have read and accept the Master Services Agreement and Statement of Work, and that I am acting as a business."}
                </span>
              </label>

              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 flex items-center gap-1.5">
                  <FaFileSignature className="text-rose-500" /> {isNo ? "Elektronisk signatur (fullt navn)" : "Electronic Signature (full name)"}
                </label>
                <input value={signatureName} onChange={(e) => setSignatureName(e.target.value)} className="w-full mt-1.5 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-bold text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white" placeholder={formData.name || (isNo ? "Skriv fullt navn" : "Type full name")} />
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(2)} className="px-6 py-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  disabled={!canSubmit}
                  onClick={() => setStep(4)}
                  className="flex-1 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {isNo ? "Neste" : "Next"} <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 4: Payment */}
          {step === 4 && selectedPack && (
            <motion.div key="s4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                {isNo ? "Gjennomgå & betal" : "Review & pay"}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                {isNo ? "Du blir videresendt til en sikker betalingsside." : "You'll be redirected to a secure payment page."}
              </p>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{isNo ? "Pakke" : "Package"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{selectedPack.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{isNo ? "Bedrift" : "Business"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formData.businessName}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">{isNo ? "Fakturering" : "Billing"}</span>
                  <span className="font-bold text-slate-900 dark:text-white">{isNo ? "Årlig" : "Yearly"}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline">
                  <span className="text-xs font-black uppercase text-slate-500">{isNo ? "Totalt i dag" : "Total due today"}</span>
                  <span className="text-2xl font-black text-emerald-500">{selectedPack.yearlyPrice.toLocaleString()} NOK</span>
                </div>
              </div>

              {error && (
                <p className="text-rose-600 text-sm font-bold mb-4 text-center">{error}</p>
              )}

              <div className="flex gap-3">
                <button onClick={() => setStep(3)} disabled={isSubmitting} className="px-6 py-4 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors disabled:opacity-50">
                  <FaArrowLeft className="text-sm" />
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 py-4 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? <FaSpinner className="animate-spin" /> : <FaLock className="text-sm" />}
                  {isSubmitting ? (isNo ? "Behandler..." : "Processing...") : (isNo ? "Gå til betaling" : "Proceed to payment")}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
