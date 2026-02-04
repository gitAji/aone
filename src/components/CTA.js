import { useLanguage } from "@/context/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 text-center"
      aria-labelledby="cta"
    >
      <div className="container mx-auto px-6">
        <h2
          id="cta"
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-indigo-600 dark:from-white dark:to-indigo-400"
        >
          {t('cta.title')}
        </h2>
        <a
          href="/request-quote"
          className="btn-outline h-14"
        >
          <span>{t('cta.button')}</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
