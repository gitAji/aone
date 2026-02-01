import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const TestimonialCard = ({ text, imgSrc, imgAlt, client }) => {
  return (
    <div className="glass relative rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group border border-white/5">
      <div className="absolute top-6 right-8 text-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56928 13 6.017 13H5.017V21H6.017Z" />
        </svg>
      </div>
      <div className="relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={80}
          height={80}
          className="w-20 h-20 mb-6 rounded-2xl object-contain bg-white p-2 shadow-sm border border-slate-100"
          sizes="80px"
        />
        <p className="text-slate-600 dark:text-slate-300 italic mb-6 text-lg leading-relaxed">
          &quot;{text}&quot;
        </p>
        <p className="text-slate-900 dark:text-white font-bold tracking-tight">{client}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();
  return (
    <section
      className="py-24 bg-white dark:bg-slate-950"
      aria-labelledby="testimonials"
    >
      <header className="text-center mb-20 container">
        <h2
          id="testimonials"
          className="text-5xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 uppercase tracking-tighter"
        >
          {t('testimonials.title')}
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          {t('testimonials.subtitle')}
        </p>
      </header>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <TestimonialCard
          text={t('testimonials.cleanMasters')}
          imgSrc="/images/clients/clean.png"
          imgAlt="Clean Masters Renhold Logo"
          client="Clean Masters Renhold"
        />
        <TestimonialCard
          text={t('testimonials.saray')}
          imgSrc="/images/clients/saraysange.png"
          imgAlt="Saray Steakhouse Logo"
          client="Saray Steakhouse"
        />
        <TestimonialCard
          text={t('testimonials.goLocal')}
          imgSrc="/images/clients/shop-front.png"
          imgAlt="Go Local Logo"
          client="Go Local"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
