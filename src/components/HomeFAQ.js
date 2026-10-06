"use client";
import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

// The FAQPage schema mirrors the Norwegian copy specifically (not the
// active `language`) -- the server always renders Norwegian first (see
// LanguageContext), so the structured data has to match what's actually
// in the initial HTML rather than drift with a client-side toggle.
const faqSchemaItems = translations.no.homeFaq.items;

const HomeFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);
  const faq = t("homeFaq");
  const items = faq?.items || [];

  return (
    <section className="py-24 bg-white dark:bg-slate-950" aria-labelledby="home-faq-heading">
      {/* Plain <script>, not next/script -- see layout.js's schema-script
          for why: JSON-LD needs to be in the raw server-rendered HTML. */}
      <script
        id="home-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchemaItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
      <div className="container mx-auto px-6 max-w-3xl">
        <header className="text-center mb-12">
          <h2
            id="home-faq-heading"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-clash"
          >
            {faq?.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">{faq?.subtitle}</p>
        </header>
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 dark:text-white text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`text-rose-500 text-2xl flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {/* The answer stays mounted in the DOM at all times -- for
                    search engines and the FAQPage schema above to match,
                    only its visual height/opacity is toggled, it's never
                    removed the way the shared Accordion component does it. */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
