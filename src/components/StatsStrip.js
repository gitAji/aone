'use client';

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { number: "50+",  label: "Projects Delivered",    labelNo: "Prosjekter levert" },
  { number: "4.9★", label: "Client Rating",          labelNo: "Klientvurdering" },
  { number: "3+",   label: "Years of Excellence",    labelNo: "År med dyktighet" },
  { number: "24h",  label: "Avg. Response Time",     labelNo: "Svartid" },
];

const StatsStrip = () => {
  const { language } = useLanguage();
  const isNo = language === 'no';

  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-slate-800">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-6"
            >
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 font-clash">
                {stat.number}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                {isNo ? stat.labelNo : stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
