// Service-area landing pages. Bergen is the genuine home base with real
// local case studies; Oslo and London have no client based in that exact
// city yet, so their copy is framed honestly as remote service delivery
// backed by real (but not locally-based) project work -- never implying a
// client exists there when one doesn't. See src/app/locations/[slug] for
// the page template that renders this data.
const locations = [
  {
    slug: "bergen",
    city: { en: "Bergen", no: "Bergen" },
    isHomeBase: true,
    metaTitle: {
      en: "Web Design & AI Automation in Bergen | Aone",
      no: "Webdesign og AI-automatisering i Bergen | Aone",
    },
    metaDescription: {
      en: "Aone is a Bergen-based digital agency building websites, SEO/GEO and AI automation for local businesses -- real Bergen case studies, not a generic pitch.",
      no: "Aone er et digitalbyrå i Bergen som bygger nettsider, SEO/GEO og AI-automatisering for lokale bedrifter -- ekte Bergen-case, ikke en generisk pitch.",
    },
    heroTitle: {
      en: "Web Design & AI in Bergen",
      no: "Webdesign og AI i Bergen",
    },
    heroSubtitle: {
      en: "Aone is based right here in Bergen -- real local case studies, not a generic agency pitch.",
      no: "Aone holder til her i Bergen -- ekte lokale kundecase, ikke en generisk byråpitch.",
    },
    intro: [
      {
        en: "We're a Bergen-based digital agency, which means kickoff meetings, photography days, and site visits happen in person when it helps the project -- not just over a video call.",
        no: "Vi er et digitalbyrå i Bergen, noe som betyr at oppstartsmøter, fotograferingsdager og befaringer skjer ansikt til ansikt når det er nyttig for prosjektet -- ikke bare over videosamtale.",
      },
      {
        en: "Below are real Bergen businesses we've built for, with the actual results they've seen.",
        no: "Under ser du ekte Bergen-bedrifter vi har bygget for, med de faktiske resultatene de har oppnådd.",
      },
    ],
    proofNote: {
      en: "Our home turf -- these are real Bergen clients.",
      no: "Hjemmebane -- dette er ekte Bergen-kunder.",
    },
    projectIds: ["clean-masters-renhold", "thai-ubon"],
    faq: [
      {
        q: { en: "Do you only work with Bergen businesses?", no: "Jobber dere kun med Bergen-bedrifter?" },
        a: {
          en: "No -- while Bergen is home, we also build for clients across Norway and internationally (see our Oslo and London pages). Being Bergen-based just means local clients get in-person visits when useful.",
          no: "Nei -- selv om Bergen er hjemmebane, bygger vi også for kunder over hele Norge og internasjonalt (se Oslo- og London-sidene våre). Å holde til i Bergen betyr bare at lokale kunder får besøk i person når det er nyttig.",
        },
      },
      {
        q: { en: "What industries have you worked with in Bergen?", no: "Hvilke bransjer har dere jobbet med i Bergen?" },
        a: {
          en: "Cleaning services, restaurants and take-away, and more -- see the real case studies above for the specifics.",
          no: "Rengjøringstjenester, restaurant og take-away, og flere andre -- se de ekte kundecasene over for detaljer.",
        },
      },
      {
        q: { en: "How fast can a Bergen-based project start?", no: "Hvor raskt kan et Bergen-prosjekt starte?" },
        a: {
          en: "Being local means faster kickoff meetings and site visits when needed -- most Bergen projects start within a week of signing.",
          no: "Å være lokal betyr raskere oppstartsmøter og befaringer ved behov -- de fleste Bergen-prosjekter starter innen en uke etter signering.",
        },
      },
    ],
  },
  {
    slug: "oslo",
    city: { en: "Oslo", no: "Oslo" },
    isHomeBase: false,
    metaTitle: {
      en: "Web Design & AI Automation for Oslo Businesses | Aone",
      no: "Webdesign og AI-automatisering for Oslo-bedrifter | Aone",
    },
    metaDescription: {
      en: "Aone builds websites, SEO/GEO and AI automation for businesses across Norway, including Oslo -- delivered remotely with the same fixed-fee process and results.",
      no: "Aone bygger nettsider, SEO/GEO og AI-automatisering for bedrifter over hele Norge, inkludert Oslo -- levert eksternt med samme fastpris-prosess og resultater.",
    },
    heroTitle: {
      en: "Web Design & AI for Oslo Businesses",
      no: "Webdesign og AI for Oslo-bedrifter",
    },
    heroSubtitle: {
      en: "Based in Bergen, working remotely with businesses across Norway -- including Oslo.",
      no: "Vi holder til i Bergen, men jobber med bedrifter over hele Norge -- inkludert Oslo.",
    },
    intro: [
      {
        en: "We don't have a client based in Oslo just yet, but our entire process -- video calls, shared project boards, staging links, and self-editable admin panels -- is already built for working with clients outside Bergen.",
        no: "Vi har ikke en kunde basert i Oslo ennå, men hele prosessen vår -- videosamtaler, delte prosjektoversikter, forhåndsvisningslenker og admin-paneler du selv kan redigere -- er allerede bygget for å jobbe med kunder utenfor Bergen.",
      },
      {
        en: "Here's real project work from Norwegian clients, delivered the same remote-first way an Oslo business would experience it.",
        no: "Her er ekte prosjektarbeid fra norske kunder, levert på samme eksternt-først måte som en Oslo-bedrift ville opplevd det.",
      },
    ],
    proofNote: {
      en: "Not based in Oslo -- but built with the same remote-first process we'd bring to an Oslo business.",
      no: "Ikke basert i Oslo -- men bygget med samme eksternt-først-prosess vi ville brukt for en Oslo-bedrift.",
    },
    projectIds: ["saray-steakhouse-kro", "saray-steakhouse"],
    faq: [
      {
        q: { en: "Can you build a website for my Oslo business if you're based in Bergen?", no: "Kan dere bygge en nettside for min Oslo-bedrift når dere holder til i Bergen?" },
        a: {
          en: "Yes -- most of our process already happens remotely (calls, shared boards, staging links), so Oslo is no different from any other Norwegian city for us.",
          no: "Ja -- det meste av prosessen vår skjer allerede eksternt (samtaler, delte oversikter, forhåndsvisningslenker), så Oslo er ikke annerledes enn noen annen norsk by for oss.",
        },
      },
      {
        q: { en: "Do you ever meet Oslo clients in person?", no: "Møter dere noen gang Oslo-kunder ansikt til ansikt?" },
        a: {
          en: "When it's useful -- a kickoff meeting or a photography day -- we can travel to Oslo. Day-to-day collaboration happens remotely either way.",
          no: "Når det er nyttig -- et oppstartsmøte eller en fotograferingsdag -- kan vi reise til Oslo. Den daglige oppfølgingen skjer uansett eksternt.",
        },
      },
      {
        q: { en: "Is pricing different for Oslo vs Bergen clients?", no: "Er prisene annerledes for Oslo- kontra Bergen-kunder?" },
        a: {
          en: "No -- our packages (see Pricing) are the same fixed-fee pricing regardless of where in Norway you're based.",
          no: "Nei -- pakkene våre (se Priser) har samme fastpris uansett hvor i Norge du holder til.",
        },
      },
    ],
  },
  {
    slug: "london",
    city: { en: "London", no: "London" },
    isHomeBase: false,
    metaTitle: {
      en: "Web Design & AI Automation for London & UK Businesses | Aone",
      no: "Webdesign og AI-automatisering for London og britiske bedrifter | Aone",
    },
    metaDescription: {
      en: "Aone has delivered website and branding projects for UK businesses, including firms in the London area -- fully remote, fixed-fee, with a 1-hour time difference.",
      no: "Aone har levert nettside- og merkevareprosjekter for britiske bedrifter, inkludert firmaer i London-området -- helt eksternt, til fast pris, med kun 1 times tidsforskjell.",
    },
    heroTitle: {
      en: "Web Design & AI for London & UK Businesses",
      no: "Webdesign og AI for London og britiske bedrifter",
    },
    heroSubtitle: {
      en: "We've delivered real projects for UK businesses -- fully remote, fixed-fee, just 1 hour's time difference from Norway.",
      no: "Vi har levert ekte prosjekter for britiske bedrifter -- helt eksternt, til fast pris, med kun 1 times tidsforskjell fra Norge.",
    },
    intro: [
      {
        en: "We're based in Bergen, Norway, but we've already worked with UK clients -- including a firm in Hemel Hempstead, Hertfordshire (part of the wider London commuter belt). The process is entirely remote: calls, shared project boards, and staging links, with only a 1-hour time difference to work around.",
        no: "Vi holder til i Bergen, Norge, men vi har allerede jobbet med britiske kunder -- blant annet et firma i Hemel Hempstead i Hertfordshire (del av det større London-pendlerbeltet). Prosessen er helt ekstern: samtaler, delte prosjektoversikter og forhåndsvisningslenker, med kun 1 times tidsforskjell å forholde seg til.",
      },
      {
        en: "Here's real project work delivered for UK businesses.",
        no: "Her er ekte prosjektarbeid levert for britiske bedrifter.",
      },
    ],
    proofNote: {
      en: "Real UK clients -- not based in London itself, but delivered the same way a London business would experience it.",
      no: "Ekte britiske kunder -- ikke basert i selve London, men levert på samme måte som en London-bedrift ville opplevd det.",
    },
    projectIds: ["kp-accountants", "qfs-accountants"],
    faq: [
      {
        q: { en: "Do you only work with Norwegian clients?", no: "Jobber dere kun med norske kunder?" },
        a: {
          en: "No -- we've completed projects for UK businesses too, including K&P Accountants in Hemel Hempstead, Hertfordshire, and QFS Accountants in the UK.",
          no: "Nei -- vi har også fullført prosjekter for britiske bedrifter, blant annet K&P Accountants i Hemel Hempstead i Hertfordshire, og QFS Accountants i Storbritannia.",
        },
      },
      {
        q: { en: "How does billing and currency work for UK clients?", no: "Hvordan fungerer fakturering og valuta for britiske kunder?" },
        a: {
          en: "We invoice in a currency that works for you and handle payment via Stripe or bank transfer -- just ask us for details for your specific case.",
          no: "Vi fakturerer i en valuta som passer deg, og håndterer betaling via Stripe eller banköverføring -- bare spør oss om detaljer for ditt tilfelle.",
        },
      },
      {
        q: { en: "What's the time difference for meetings?", no: "Hva er tidsforskjellen for møter?" },
        a: {
          en: "Norway is only 1 hour ahead of the UK, so scheduling calls that work for both of us is easy.",
          no: "Norge er kun 1 time foran Storbritannia, så det er enkelt å finne møtetider som passer for begge.",
        },
      },
    ],
  },
];

export default locations;
