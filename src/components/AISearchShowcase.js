"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaArrowRight, FaRobot, FaLink, FaPaperPlane, FaUser } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

// Plain-text engine labels only -- deliberately not reproducing ChatGPT/
// Claude/Gemini's actual logos (trademark/brand-guideline risk for a
// marketing page); a generic bot icon + the real product names is enough
// to make the point without implying any affiliation with those products.
const ENGINES = ["ChatGPT", "Claude", "Gemini"];

// Small, rule-based canned-reply set for the demo chat below -- not a real
// AI integration (no API call, no cost), just enough pattern-matching on
// the visitor's own typed text to make the mockup feel alive.
const GREETING_WORDS = {
  en: ["hi", "hello", "hey", "hiya", "good morning", "good afternoon", "good evening", "yo"],
  no: ["hei", "hallo", "morn", "god morgen", "god dag", "god kveld", "tja"],
};
const THANKS_WORDS = {
  en: ["thanks", "thank you", "thx", "ty"],
  no: ["takk", "tusen takk"],
};
const PRICE_WORDS = {
  en: ["price", "pricing", "cost", "how much"],
  no: ["pris", "priser", "koster", "hvor mye"],
};

const REPLIES = {
  greeting: {
    en: "Hi there! 👋 Try asking something like \"best web design agency in Bergen\" to see how AI search works.",
    no: "Hei! 👋 Prøv å spørre om noe som \"beste nettsidebyrå i Bergen\" for å se hvordan AI-søk fungerer.",
  },
  thanks: {
    en: "You're welcome! Let us know if you have more questions. 🙌",
    no: "Bare hyggelig! Si gjerne til hvis du har flere spørsmål. 🙌",
  },
  price: {
    en: "Our packages are transparent, fixed-fee, and listed on our Pricing page -- no hidden costs.",
    no: "Pakkene våre er transparente og fastpris, og ligger på prissiden vår -- ingen skjulte kostnader.",
  },
  default: {
    en: "Good question! For an answer tailored to your own business, contact us and we'll help you with this. 😊",
    no: "Godt spørsmål! For et svar skreddersydd din bedrift, ta kontakt med oss, så hjelper vi deg med dette. 😊",
  },
};

function matchesAny(text, words) {
  return words.some((w) => text.includes(w));
}

function getCannedReply(rawText, language) {
  const lang = language === "no" ? "no" : "en";
  const text = rawText.toLowerCase().trim();

  if (matchesAny(text, GREETING_WORDS.en) || matchesAny(text, GREETING_WORDS.no)) {
    return REPLIES.greeting[lang];
  }
  if (matchesAny(text, THANKS_WORDS.en) || matchesAny(text, THANKS_WORDS.no)) {
    return REPLIES.thanks[lang];
  }
  if (matchesAny(text, PRICE_WORDS.en) || matchesAny(text, PRICE_WORDS.no)) {
    return REPLIES.price[lang];
  }
  return REPLIES.default[lang];
}

const TypingDots = () => (
  <div className="flex gap-1 items-center px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-slate-400"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

const AISearchShowcase = () => {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    // Guard against the initial mount: with an empty `messages` array there's
    // nothing new to reveal, so scrolling here would pull the whole window
    // down to this demo on every page load (this chat has no scrollable
    // container of its own, so scrollIntoView moves the entire document).
    if (messages.length === 0) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isTyping) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsTyping(true);

    const reply = getCannedReply(text, language);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "ai", text: reply }]);
    }, 900);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-500 text-xs font-black uppercase tracking-widest">
              <FaRobot className="text-xs" />
              {t('aiSearch.eyebrow')}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter leading-tight"
            >
              {t('aiSearch.title')}
            </motion.h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
              {t('aiSearch.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-8">
              {ENGINES.map((engine) => (
                <span
                  key={engine}
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-600 dark:text-slate-300"
                >
                  {engine}
                </span>
              ))}
            </div>

            <Link
              href="/pricing#geo"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white font-black py-4 px-8 rounded-full uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-rose-500/25"
            >
              {t('aiSearch.cta')}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* Mockup side -- a stylized AI chat answering a local-business
              query, citing the client's own business in the response. Not
              a screenshot of any real product's UI, just a generic chat
              card in the site's own visual language. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-amber-500 rounded-[2.5rem] blur-2xl opacity-20" />
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 px-5 py-3 border-b border-slate-100 dark:border-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
              </div>

              <div className="p-6 space-y-4 max-h-[420px] overflow-y-auto scroll-smooth">
                {/* user query bubble */}
                <div className="flex justify-end">
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[85%]">
                    {t('aiSearch.query')}
                  </div>
                </div>

                {/* AI answer bubble */}
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[90%]">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white">
                      <FaRobot className="text-xs" />
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                      <p className="text-slate-600 dark:text-slate-400 mb-2">
                        {t('aiSearch.answerIntro')}
                      </p>
                      <p className="font-bold text-slate-900 dark:text-white mb-2">
                        {t('aiSearch.answerHighlight')}
                      </p>
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          {t('aiSearch.sourcesLabel')}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                          <FaLink className="text-[8px]" />
                          aone.no
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live demo conversation -- visitor's own typed messages and
                    the rule-based canned replies, appended below the seeded
                    example above. */}
                {messages.map((m, i) =>
                  m.role === "user" ? (
                    <div key={i} className="flex justify-end">
                      <div className="flex items-center gap-2 max-w-[85%]">
                        <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm">
                          {m.text}
                        </div>
                        <div className="shrink-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                          <FaUser className="text-[9px]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div key={i} className="flex justify-start">
                      <div className="flex gap-3 max-w-[90%]">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white">
                          <FaRobot className="text-xs" />
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 px-4 py-3 rounded-2xl rounded-bl-sm">
                          {m.text}
                        </div>
                      </div>
                    </div>
                  )
                )}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex gap-3 max-w-[90%]">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 flex items-center justify-center text-white">
                        <FaRobot className="text-xs" />
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-2xl rounded-bl-sm">
                        <TypingDots />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Interactive input -- a lightweight, rule-based demo (no
                  real AI call): typing a greeting gets a greeting back,
                  anything else gets a default reply pointing to contact,
                  just enough to make the mockup feel like a live system. */}
              <form
                onSubmit={handleSend}
                className="flex items-center gap-2 px-4 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === "no" ? "Spør om noe..." : "Ask something..."}
                  aria-label={language === "no" ? "Skriv en melding" : "Type a message"}
                  className="flex-1 min-w-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  aria-label={language === "no" ? "Send melding" : "Send message"}
                  className="shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-amber-500 text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISearchShowcase;
