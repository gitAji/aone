"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

// The agent is instructed (see the n8n workflow's system prompt) to end a
// reply with a bare path alone, e.g. "/pricing", when it has a relevant next
// step to offer -- never inline, never bracketed. We still tolerate a
// leftover [bracket]/(paren) wrapper here in case the model doesn't follow
// that formatting perfectly, since a weaker local model's instruction-
// following isn't perfectly reliable.
const CTA_LABELS = {
  "/request-quote": { en: "Get a Quote", no: "Få et tilbud" },
  "/free-consultation": { en: "Book Free Consultation", no: "Book gratis konsultasjon" },
  "/pricing": { en: "View Pricing", no: "Se priser" },
  "/support": { en: "Contact Support", no: "Kontakt support" },
};
const CTA_PATTERN = /[\[(]?(\/(?:request-quote|free-consultation|pricing|support))[\])]?\s*$/;

function splitReply(raw) {
  const text = (raw || "").trim();
  const match = text.match(CTA_PATTERN);
  if (!match) return { text, cta: null };
  return { text: text.slice(0, match.index).trim(), cta: match[1] };
}

// Floating support-chat widget. Talks to /api/chat, which proxies to the
// n8n "Aone Support Chat Agent" webhook (local Ollama + knowledge base) --
// see that workflow for the actual answering logic. Local inference can
// take a while, and the webhook is only reachable while the laptop hosting
// n8n/Ollama is on, so this widget is built around that reality:
//   - a visible "thinking, this can take a bit" state instead of a plain
//     spinner, so a 30-90s wait doesn't read as broken
//   - an always-visible "leave your details instead" escape hatch, not
//     just a post-failure fallback, for anyone who doesn't want to wait
//   - an automatic fallback to that same name/email form the moment the
//     agent call fails or times out (API route's own 120s timeout)
const SESSION_KEY = "aone_chat_session_id";

function getSessionId() {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

const ChatWidget = () => {
  const { language } = useLanguage();
  const isNo = language === "no";

  // 'closed' | 'chat' | 'offline-form' | 'lead-sent'
  const [view, setView] = useState("closed");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "" });
  const [isSendingLead, setIsSendingLead] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isSending]);

  const t = {
    greeting: isNo
      ? "Hei! Spør meg om noe som helst om Aone, så svarer jeg eller hjelper deg videre."
      : "Hi! Ask me anything about Aone and I'll help, or point you in the right direction.",
    placeholder: isNo ? "Skriv en melding..." : "Type a message...",
    thinking: isNo
      ? "Tenker... dette kan ta opptil et minutt siden assistenten kjører lokalt."
      : "Thinking... this can take up to a minute since the assistant runs locally.",
    offlineNotice: isNo
      ? "Assistenten er utilgjengelig akkurat nå. Legg igjen navn og e-post, så tar vi kontakt."
      : "The assistant is unavailable right now. Leave your name and email and we'll get back to you.",
    leaveDetails: isNo ? "Legg igjen kontaktinfo i stedet" : "Leave your details instead",
    name: isNo ? "Navn" : "Name",
    email: "Email",
    send: isNo ? "Send" : "Send",
    leadSent: isNo
      ? "Takk! Vi tar kontakt innen 24 timer."
      : "Thanks! We'll be in touch within 24 hours.",
    backToChat: isNo ? "Tilbake til chat" : "Back to chat",
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isSending) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId: getSessionId() }),
      });

      if (!res.ok) throw new Error("offline");
      const data = await res.json();
      const { text: replyText, cta } = splitReply(data.reply);

      setMessages((prev) => [...prev, { role: "agent", text: replyText, cta }]);
    } catch {
      setView("offline-form");
    } finally {
      setIsSending(false);
    }
  };

  const sendLead = async (e) => {
    e.preventDefault();
    if (!leadForm.name.trim() || !leadForm.email.trim() || isSendingLead) return;
    setIsSendingLead(true);

    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.text || "";

    try {
      await fetch("/api/chat/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: leadForm.name.trim(), email: leadForm.email.trim(), message: lastUserMessage }),
      });
      setView("lead-sent");
    } catch {
      // Keep them on the form -- nothing else useful to show on failure here.
    } finally {
      setIsSendingLead(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setView(view === "closed" ? "chat" : "closed")}
        className="fixed bottom-6 right-6 z-[99999] w-14 h-14 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-500/30 flex items-center justify-center transition-colors"
        aria-label={isNo ? "Åpne chat" : "Open chat"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {view === "closed" ? (
            <motion.span key="open" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
              <FaComments className="text-xl" />
            </motion.span>
          ) : (
            <motion.span key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
              <FaTimes className="text-xl" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {view !== "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-label={isNo ? "Chat med Aone" : "Chat with Aone"}
            className="fixed bottom-24 right-6 z-[99998] w-[calc(100vw-3rem)] max-w-sm h-[520px] max-h-[70vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
          >
            <div className="px-5 py-4 bg-slate-900 dark:bg-slate-950 text-white flex items-center justify-between shrink-0">
              <span className="font-bold text-sm">Aone {isNo ? "Assistent" : "Assistant"}</span>
              {view === "chat" && (
                <button
                  onClick={() => setView("offline-form")}
                  className="text-[11px] font-semibold text-rose-300 hover:text-rose-200 transition-colors underline underline-offset-2"
                >
                  {t.leaveDetails}
                </button>
              )}
            </div>

            {view === "chat" && (
              <>
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                  <div className="flex">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm px-4 py-2.5">
                      {t.greeting}
                    </div>
                  </div>
                  {messages.map((m, i) => (
                    <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"} gap-1.5`}>
                      <div
                        className={`max-w-[85%] text-sm px-4 py-2.5 whitespace-pre-wrap ${
                          m.role === "user"
                            ? "bg-rose-600 text-white rounded-2xl rounded-br-sm"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl rounded-bl-sm"
                        }`}
                      >
                        {m.text}
                      </div>
                      {m.cta && CTA_LABELS[m.cta] && (
                        <Link
                          href={m.cta}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-amber-500 rounded-full px-4 py-2 hover:opacity-90 transition-opacity"
                        >
                          {CTA_LABELS[m.cta][isNo ? "no" : "en"]}
                          <FaArrowRight className="text-[10px]" />
                        </Link>
                      )}
                    </div>
                  ))}
                  {isSending && (
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs px-4 py-2.5 italic">
                        {t.thinking}
                      </div>
                    </div>
                  )}
                </div>

                <form onSubmit={sendMessage} className="p-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 shrink-0">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t.placeholder}
                    disabled={isSending}
                    className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-rose-500 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={isSending || !input.trim()}
                    className="w-10 h-10 shrink-0 rounded-full bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white flex items-center justify-center transition-colors"
                    aria-label={t.send}
                  >
                    <FaPaperPlane className="text-xs" />
                  </button>
                </form>
              </>
            )}

            {view === "offline-form" && (
              <form onSubmit={sendLead} className="flex-1 flex flex-col p-5 gap-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.offlineNotice}</p>
                <input
                  type="text"
                  required
                  value={leadForm.name}
                  onChange={(e) => setLeadForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder={t.name}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-rose-500"
                />
                <input
                  type="email"
                  required
                  value={leadForm.email}
                  onChange={(e) => setLeadForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder={t.email}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  disabled={isSendingLead}
                  className="mt-1 bg-rose-600 hover:bg-rose-700 disabled:opacity-60 text-white text-sm font-bold rounded-xl py-2.5 transition-colors"
                >
                  {t.send}
                </button>
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setView("chat")}
                    className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                  >
                    {t.backToChat}
                  </button>
                )}
              </form>
            )}

            {view === "lead-sent" && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 gap-3">
                <FaCheckCircle className="text-3xl text-emerald-500" />
                <p className="text-sm text-slate-700 dark:text-slate-300">{t.leadSent}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
