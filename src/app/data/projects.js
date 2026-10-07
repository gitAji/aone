const projects = [
  {
    id: "clean-masters-renhold",
    title: { en: "Clean Masters Renhold", no: "Clean Masters Renhold" },
    // Shown only on the homepage "Our Work" tile instead of the client's own
    // name -- a keyword-forward label (matching the exact long-tail term
    // this case study targets) earns more on the site's highest-authority
    // page than a brand name strangers won't search for. The real business
    // name is still used everywhere else (portfolio listing, case study
    // page, metadata) since that's the actual client.
    homeTitle: { en: "Cleaning Company Bergen", no: "Rengjøringsbyrå Bergen" },
    description: {
      en: "Website for a professional cleaning company (rengjøringsbyrå) in Bergen.",
      no: "Nettside for et profesjonelt rengjøringsbyrå i Bergen.",
    },
    imageUrl: "/images/projects/cleanmasters.png",
    projectLink: "/references/clean-masters-renhold",
    featured: true,
    local: true,
    location: { en: "Bergen, Norway", no: "Bergen, Norge" },
    overview: {
      description1: {
        en: "Clean Masters Renhold is a professional cleaning company based in Bergen, Norway. Aone designed and developed a clean, modern, and trustworthy website built to generate leads and make it effortless for Bergen homeowners and businesses to request a quote or book a cleaning service.",
        no: "Clean Masters Renhold er et profesjonelt rengjøringsbyrå med base i Bergen. Aone designet og utviklet en ren, moderne og tillitvekkende nettside bygget for å generere leads og gjøre det enkelt for huseiere og bedrifter i Bergen å be om et tilbud eller bestille en rengjøringstjeneste.",
      },
      description2: {
        en: "We focused on creating a user-friendly experience with clear calls-to-action, detailed service descriptions, and a simple contact form, combined with local SEO targeting Bergen-area search terms such as \"rengjøringsbyrå Bergen\" and \"rengjøringstjenester Bergen.\" The website was designed to be fully responsive and optimized for search engines to attract local customers across Bergen and Vestland.",
        no: "Vi fokuserte på å skape en brukervennlig opplevelse med tydelige handlingsknapper, detaljerte tjenestebeskrivelser og et enkelt kontaktskjema, kombinert med lokal SEO rettet mot Bergen-søkeord som «rengjøringsbyrå Bergen» og «rengjøringstjenester Bergen». Nettsiden ble designet for å være fullt responsiv og søkemotoroptimalisert for å tiltrekke lokale kunder i Bergen og Vestland.",
      },
      imageUrl: "/images/projects/cleanmasters/cover1.png",
    },
    process: [
      {
        title: { en: "Brand Discovery & Strategy", no: "Merkevareanalyse & strategi" },
        description: {
          en: "We conducted workshops and interviews to understand the agency's values, mission, and target audience, laying the foundation for a unique brand strategy.",
          no: "Vi gjennomførte workshops og intervjuer for å forstå byråets verdier, misjon og målgruppe, og la grunnlaget for en unik merkevarestrategi.",
        },
        imageUrl: "/images/projects/cleanmasters/wireframe.png",
      },
      {
        title: { en: "Visual Identity Design", no: "Visuell identitetsdesign" },
        description: {
          en: "Our design team crafted a sleek, intuitive, and secure user interface, focusing on ease of use. Interactive prototypes were developed for user testing.",
          no: "Designteamet vårt utformet et elegant, intuitivt og sikkert brukergrensesnitt med fokus på brukervennlighet. Interaktive prototyper ble utviklet for brukertesting.",
        },
        imageUrl: "/images/projects/cleanmasters/cover.png",
      },
      {
        title: { en: "Secure Development", no: "Sikker utvikling" },
        description: {
          en: "The app was built with a strong emphasis on security, utilizing encryption, secure APIs, and robust backend infrastructure.",
          no: "Løsningen ble bygget med sterkt fokus på sikkerhet, med kryptering, sikre API-er og robust backend-infrastruktur.",
        },
        imageUrl: "/images/projects/cleanmasters/dev.png",
      },
      {
        title: { en: "Testing & Compliance", no: "Testing & regelverksetterlevelse" },
        description: {
          en: "Extensive testing was conducted to ensure functionality, usability, and performance across devices, along with compliance checks to meet industry standards.",
          no: "Omfattende testing ble gjennomført for å sikre funksjonalitet, brukervennlighet og ytelse på tvers av enheter, sammen med kontroller for å oppfylle bransjestandarder.",
        },
        imageUrl: "/images/projects/cleanmasters/test.png",
      },
    ],
    features: [
      { en: "AI-Driven Instant Quote Generator", no: "AI-drevet verktøy for umiddelbare pristilbud" },
      { en: "SEO & GEO Optimization (AI Search Ready)", no: "SEO- og GEO-optimalisering (klar for AI-søk)" },
      { en: "Vibrant, modern UI with sub-1s load times", no: "Livlig, moderne design med lastetid under 1 sekund" },
      { en: "Automated booking & scheduling system", no: "Automatisert booking- og timebestillingssystem" },
      { en: "Client Testimonials with verified metrics", no: "Kundeomtaler med verifiserte resultater" },
      { en: "Interactive Location & Zone Management", no: "Interaktiv håndtering av lokasjoner og soner" },
    ],
    technologies: ["Next.js", "Tailwind CSS", "AI Logic", "Firebase"],
    results: {
      summary: {
        en: "The new AI-enhanced platform led to a **40% increase in web traffic** and a **60% faster response time** via the automated quote generator. Local SEO gains helped Clean Masters Renhold rank for key Bergen cleaning-service searches, boosting service inquiries by 25% within the first three months and solidifying their market leadership in Bergen.",
        no: "Den nye AI-forbedrede plattformen ga en **40 % økning i nettrafikk** og **60 % raskere responstid** gjennom det automatiserte pristilbudsverktøyet. Lokale SEO-gevinster hjalp Clean Masters Renhold med å rangere på sentrale Bergen-søk innen rengjøring, noe som økte antall henvendelser med 25 % i løpet av de første tre månedene og styrket deres markedslederskap i Bergen.",
      },
      imageUrl: "/images/projects/cleanmasters/result.png",
    },
  },
  {
    id: "kids-learning-portal",
    title: { en: "Kids Learning Portal", no: "Læringsportal for barn" },
    description: { en: "Learning portal for kids.", no: "Læringsportal for barn." },
    imageUrl: "/images/projects/kidsportal.png",
    projectLink: "/references/kids-learning-portal",
    featured: true,
    overview: {
      description1: {
        en: "This project involved designing and developing a modern, user-friendly website for kids learning portal. The goal was to create an engaging platform that offers educational resources, interactive activities, and a safe online environment for children.",
        no: "Dette prosjektet omfattet design og utvikling av en moderne, brukervennlig nettside for en læringsportal for barn. Målet var å skape en engasjerende plattform som tilbyr læringsressurser, interaktive aktiviteter og et trygt digitalt miljø for barn.",
      },
      description2: {
        en: "where parents create account and add kids to the portal & create kids login credentials and then kids can login and access the learning materials.",
        no: "Foreldre oppretter en konto og legger til barn i portalen, med egne påloggingsopplysninger for barna, som deretter kan logge inn og få tilgang til læringsmaterialet.",
      },
      imageUrl: "/images/projects/kidsportal/project1.png",
    },
    process: [
      {
        title: { en: "Discovery & Planning", no: "Kartlegging & planlegging" },
        description: {
          en: "We began with in-depth consultations to understand the client's business, target audience, and pain points with the existing platform. This phase involved market research, competitor analysis, and defining project scope and objectives.",
          no: "Vi startet med grundige samtaler for å forstå kundens virksomhet, målgruppe og utfordringer med den eksisterende plattformen. Denne fasen omfattet markedsundersøkelser, konkurrentanalyse og definering av prosjektets omfang og mål.",
        },
        imageUrl: "/images/projects/kidsportal/plan.png",
      },
      {
        title: { en: "Wireframing & UI/UX Design", no: "Skisser & UI/UX-design" },
        description: {
          en: "Based on the discovery phase, we created wireframes and interactive prototypes to visualize the new user flows and interface. Our UI/UX team focused on creating an intuitive and aesthetically pleasing design.",
          no: "Basert på kartleggingsfasen laget vi skisser og interaktive prototyper for å visualisere de nye brukerflytene og grensesnittet. UI/UX-teamet vårt fokuserte på å skape et intuitivt og estetisk tiltalende design.",
        },
        imageUrl: "/images/projects/kidsportal/wireframe.png",
      },
      {
        title: { en: "Development & Integration", no: "Utvikling & integrasjon" },
        description: {
          en: "Our development team brought the designs to life, building a robust and scalable learning platform. This was including integrating a headless CMS for content management, setting up user authentication, and implementing interactive features.",
          no: "Utviklingsteamet vårt realiserte designene og bygget en robust og skalerbar læringsplattform. Dette inkluderte integrasjon av et headless CMS for innholdsstyring, oppsett av brukerautentisering og implementering av interaktive funksjoner.",
        },
        imageUrl: "/images/projects/kidsportal/dev.png",
      },
      {
        title: { en: "Testing & Deployment", no: "Testing & lansering" },
        description: {
          en: "Rigorous testing was conducted across various devices and browsers to ensure functionality, performance, and responsiveness. After successful testing, the platform was securely deployed.",
          no: "Grundig testing ble gjennomført på tvers av ulike enheter og nettlesere for å sikre funksjonalitet, ytelse og responsivitet. Etter vellykket testing ble plattformen sikkert lansert.",
        },
        imageUrl: "/images/projects/kidsportal/deploy.png",
      },
    ],
    features: [
      { en: "Firebase Authentication for secure user management.", no: "Firebase-autentisering for sikker brukerhåndtering." },
      { en: "User login with Google", no: "Innlogging med Google" },
      { en: "Responsive Design for optimal viewing on all devices.", no: "Responsivt design for optimal visning på alle enheter." },
      { en: "Parents dashboard & children dashboard.", no: "Dashbord for foreldre og barn." },
      { en: "SEO Optimization for local search visibility.", no: "SEO-optimalisering for lokal søkesynlighet." },
      { en: "Interactive learning activities including quizzes and video lessons.", no: "Interaktive læringsaktiviteter, inkludert quizer og videoleksjoner." },
    ],
    technologies: ["Next.js", "React", "Node.js", "Strapi (headless CMS)"],
    results: {
      summary: {
        en: "The new platform significantly enhanced the learning portal's online presence, leading to a **20% increase in active parent sign-ups** and improved student engagement. The intuitive parent and kids dashboards received positive feedback, contributing to a stronger brand image and increased customer satisfaction.",
        no: "Den nye plattformen styrket læringsportalens digitale tilstedeværelse betydelig, med en **20 % økning i aktive foreldreregistreringer** og bedre elevengasjement. De intuitive dashbordene for foreldre og barn fikk positive tilbakemeldinger, noe som bidro til et sterkere merkevareinntrykk og økt kundetilfredshet.",
      },
      imageUrl: "/images/projects/kidsportal/result.png",
    },
  },
  {
    id: "saray-steakhouse-kro",
    title: { en: "Saray steakhouse & kro", no: "Saray Steakhouse & Kro" },
    description: {
      en: "Multi-location restaurant platform for Saray Steakhouse & Kro.",
      no: "Restaurantplattform for flere avdelinger av Saray Steakhouse & Kro.",
    },
    imageUrl: "/images/projects/saray/intro.png",
    projectLink: "/references/saray-steakhouse-kro",
    featured: true,
    overview: {
      description1: {
        en: "This project involved creating a sophisticated and appetizing website for Saray Steakhouse, a premium dining restaurant. The primary goal was to reflect the restaurant's brand, showcase its culinary offerings, and provide a seamless online booking experience.",
        no: "Dette prosjektet omfattet å lage en sofistikert og appetittvekkende nettside for Saray Steakhouse, en restaurant i premiumsegmentet. Hovedmålet var å gjenspeile restaurantens merkevare, vise frem menyen og gi en sømløs bookingopplevelse på nett.",
      },
      description2: {
        en: "Key functionalities included a visually rich menu, an easy-to-use table reservation system, and a gallery to display the restaurant's ambiance and dishes. We aimed to create a digital presence that matches the elegance and quality of the Saray Steakhouse dining experience.",
        no: "Sentrale funksjoner inkluderte en visuelt rik meny, et brukervennlig bordreservasjonssystem og et galleri som viser restaurantens stemning og retter. Målet var å skape en digital tilstedeværelse som matcher eleganse og kvalitet i Saray Steakhouse sin spiseopplevelse.",
      },
      imageUrl: "/images/projects/saray/dev.png",
    },
    process: [
      {
        title: { en: "Brand Identity & Menu Design", no: "Merkevareidentitet & menydesign" },
        description: {
          en: "We worked with Saray to create a brand identity that reflected the restaurant's unique atmosphere and culinary style. We also designed a new menu that was both visually appealing and easy to navigate.",
          no: "Vi samarbeidet med Saray om å skape en merkevareidentitet som gjenspeilte restaurantens unike atmosfære og kulinariske stil. Vi designet også en ny meny som var både visuelt tiltalende og enkel å navigere i.",
        },
        imageUrl: "/images/projects/saray/logo.png",
      },
      {
        title: { en: "Website Design & Development", no: "Design & utvikling av nettside" },
        description: {
          en: "We designed and developed a new website that showcased the restaurant's menu, atmosphere, and story. The website is fully responsive and includes an online booking system.",
          no: "Vi designet og utviklet en ny nettside som viste frem restaurantens meny, atmosfære og historie. Nettsiden er fullt responsiv og har et innebygd bookingsystem.",
        },
        imageUrl: "/images/projects/saray/ui.png",
      },
      {
        title: { en: "Photography & Videography", no: "Foto & video" },
        description: {
          en: "We produced a series of high-quality photos and videos to showcase the restaurant's food, interior, and staff. This content is used on the website and social media channels.",
          no: "Vi produserte en rekke bilder og videoer av høy kvalitet for å vise frem restaurantens mat, interiør og ansatte. Dette innholdet brukes på nettsiden og i sosiale medier.",
        },
        imageUrl: "/images/projects/saray/photo.png",
      },
      {
        title: { en: "Social Media Marketing", no: "Markedsføring i sosiale medier" },
        description: {
          en: "We manage Saray's social media channels, creating engaging content and running targeted advertising campaigns to attract new customers.",
          no: "Vi forvalter Sarays kanaler i sosiale medier, skaper engasjerende innhold og kjører målrettede annonsekampanjer for å tiltrekke nye kunder.",
        },
        imageUrl: "/images/projects/saray/fb.png",
      },
    ],
    features: [
      { en: "AI-Powered Smart Reservation Assistant", no: "AI-drevet smart reservasjonsassistent" },
      { en: "Mobile-first responsive design (sub-1s load)", no: "Mobiloptimalisert design (lastetid under 1 sekund)" },
      { en: "Stunning brand-aligned food photography", no: "Imponerende matfotografi tilpasset merkevaren" },
      { en: "Engaging high-conversion video content", no: "Engasjerende videoinnhold med høy konvertering" },
      { en: "Automated lead nurturing via email/SMS", no: "Automatisert oppfølging av henvendelser via e-post/SMS" },
    ],
    technologies: ["Next.js", "React", "AI Booking Engine", "Wordpress"],
    results: {
      summary: {
        en: "The AI-Native transformation resulted in a **50% increase in online bookings** and a 30% reduction in manual admin time. The new lightning-fast interface (sub-1s load) significantly improved mobile conversion rates and customer satisfaction.",
        no: "Den AI-native omstillingen resulterte i en **50 % økning i nettbestillinger** og 30 % mindre manuelt administrasjonsarbeid. Det nye lynraske grensesnittet (lastetid under 1 sekund) ga en betydelig bedring i mobilkonvertering og kundetilfredshet.",
      },
      imageUrl: "/images/projects/saray/result.png",
    },
  },
  {
    id: "qfs-accountants",
    title: { en: "QFS Accountants", no: "QFS Accountants" },
    description: { en: "A financial services website.", no: "Nettside for en regnskapsvirksomhet." },
    imageUrl: "/images/projects/QFS/cover.png",
    projectLink: "/references/qfs-accountants",
    featured: true,
    overview: {
      description1: {
        en: "This project involved designing and developing a professional website for QFS Accountants, a reputable accounting firm. The objective was to create a modern, user-friendly online platform that effectively showcases their services, expertise, and client testimonials, while also providing easy access to contact information and resources for potential clients.",
        no: "Dette prosjektet omfattet design og utvikling av en profesjonell nettside for QFS Accountants, et anerkjent regnskapsfirma. Målet var å skape en moderne, brukervennlig plattform som effektivt viser frem tjenestene, ekspertisen og kundeomtalene deres, samtidig som den gir enkel tilgang til kontaktinformasjon og ressurser for potensielle kunder.",
      },
      description2: {
        en: "Key features of the website include a clean and intuitive design that reflects the professionalism of QFS Accountants, a detailed service section outlining their offerings, a blog for sharing industry insights and updates, and a contact form for inquiries. The website was built using Next.js to ensure fast performance and responsiveness across all devices. Additionally, SEO best practices were implemented to enhance the firm's online visibility and attract more potential clients.",
        no: "Sentrale funksjoner på nettsiden inkluderer et rent og intuitivt design som gjenspeiler profesjonaliteten til QFS Accountants, en detaljert tjenesteseksjon som beskriver tilbudene deres, en blogg for bransjeinnsikt og nyheter, samt et kontaktskjema for henvendelser. Nettsiden ble bygget med Next.js for å sikre rask ytelse og responsivitet på alle enheter. I tillegg ble beste praksis for SEO implementert for å styrke firmaets synlighet på nett og tiltrekke flere potensielle kunder.",
      },
      imageUrl: "/images/projects/QFS/cover.png",
    },
    process: [
      {
        title: { en: "Requirements & Compliance Analysis", no: "Krav- & regelverksanalyse" },
        description: {
          en: "We collaborated closely with QFS Accountants to gather detailed requirements, ensuring the app met all relevant financial regulations and compliance standards. We use public API to get latest news about accounting updates and HMRC forms to the site so that the user can get latest updates.",
          no: "Vi samarbeidet tett med QFS Accountants for å kartlegge detaljerte krav og sikre at løsningen oppfylte alle relevante finansregler og standarder. Vi bruker et offentlig API for å hente oppdateringer om regnskapsregler og HMRC-skjemaer til siden, slik at brukeren alltid har tilgang til siste nytt.",
        },
        imageUrl: "/images/projects/QFS/requirements.png",
      },
      {
        title: { en: "Secure Architecture Design", no: "Sikker arkitekturdesign" },
        description: {
          en: "We designed a robust architecture prioritizing data security, user authentication, and secure communication protocols to protect sensitive financial information.",
          no: "Vi designet en robust arkitektur med vekt på datasikkerhet, brukerautentisering og sikre kommunikasjonsprotokoller for å beskytte sensitiv finansiell informasjon.",
        },
        imageUrl: "/images/projects/QFS/mood board.png",
      },
      {
        title: { en: "Development & Integration", no: "Utvikling & integrasjon" },
        description: {
          en: "The site was developed using the latest technologies, integrating secure APIs for data handling and ensuring compliance with industry standards.",
          no: "Siden ble utviklet med den nyeste teknologien, med integrasjon av sikre API-er for databehandling og sikring av samsvar med bransjestandarder.",
        },
        imageUrl: "/images/projects/QFS/dev.png",
      },
      {
        title: { en: "Security Testing & Deployment", no: "Sikkerhetstesting & lansering" },
        description: {
          en: "Rigorous security testing, penetration testing, and user acceptance testing were conducted before a secure and compliant deployment to app stores.",
          no: "Grundig sikkerhetstesting, penetrasjonstesting og brukerakseptansetesting ble gjennomført før en sikker og regelverksetterlevende lansering.",
        },
        imageUrl: "/images/projects/QFS/test.png",
      },
    ],
    features: [
      { en: "Comprehensive Service Catalog with clear pricing.", no: "Omfattende tjenestekatalog med tydelig prising." },
      { en: "Online Booking and Scheduling System for convenience.", no: "Nettbasert booking- og timebestillingssystem for enkelhets skyld." },
      { en: "Client Testimonials and Reviews Section.", no: "Seksjon for kundeomtaler og anmeldelser." },
      { en: "Responsive Design for seamless access on any device.", no: "Responsivt design for sømløs tilgang på alle enheter." },
      { en: "Integrated Contact Forms and Service Inquiry options.", no: "Integrerte kontaktskjemaer og muligheter for tjenesteforespørsler." },
    ],
    technologies: ["Next.js", "React", "Booking API", "CMS"],
    results: {
      summary: {
        en: "The website launch resulted in a significant increase in online appointments and client inquiries for QFS Accountants. The user-friendly design and integrated booking system enhanced customer satisfaction, leading to positive feedback and repeat business. Overall, the new website played a crucial role in boosting the firm online presence and supporting its growth objectives.",
        no: "Lanseringen av nettsiden ga en betydelig økning i nettbaserte avtaler og kundehenvendelser for QFS Accountants. Det brukervennlige designet og det integrerte bookingsystemet styrket kundetilfredsheten, noe som ga positive tilbakemeldinger og gjentatte kundeforhold. Samlet sett spilte den nye nettsiden en avgjørende rolle i å styrke firmaets digitale tilstedeværelse og støtte deres vekstmål.",
      },
      imageUrl: "/images/projects/QFS/cover.png",
    },
  },
  {
    id: "saray-steakhouse",
    title: { en: "Saray Steakhouse", no: "Saray Steakhouse" },
    description: {
      en: "A flagship branch portal featuring a central landing page with two distinct website designs for the Gjøvik and Raufoss locations.",
      no: "En flaggskip-portal med en sentral landingsside og to separate nettsidedesign for avdelingene i Gjøvik og Raufoss.",
    },
    imageUrl: "/images/projects/saray steak/01.jpeg",
    projectLink: "/references/saray-steakhouse",
    featured: true,
    overview: {
      description1: {
        en: "This project involved designing and developing a professional WordPress-based branch portal for Saray Steakhouse. The platform features a sophisticated central landing page that seamlessly directs customers to two distinct, custom-designed sub-sites for the Gjøvik and Raufoss locations.",
        no: "Dette prosjektet omfattet design og utvikling av en profesjonell WordPress-basert avdelingsportal for Saray Steakhouse. Plattformen har en sofistikert sentral landingsside som sømløst leder kunder videre til to separate, skreddersydde undersider for avdelingene i Gjøvik og Raufoss.",
      },
      description2: {
        en: "Each branch website was tailored to its unique local atmosphere while maintaining core brand consistency, ensuring a premium experience for every guest, regardless of which location they visit.",
        no: "Hver avdelingsside ble skreddersydd til sin egen lokale atmosfære, samtidig som kjernen i merkevaren ble ivaretatt, slik at hver gjest får en premiumopplevelse uansett hvilken avdeling de besøker.",
      },
      imageUrl: "/images/projects/saray steak/cover.jpg",
    },
    process: [
      {
        title: { en: "Menu Design", no: "Menydesign" },
        description: {
          en: "We worked with Saray to design a mobile-first digital menu that was both visually appealing and easy to navigate for customers at both locations.",
          no: "Vi samarbeidet med Saray om å designe en mobiltilpasset digital meny som var både visuelt tiltalende og enkel å navigere i for kunder ved begge avdelingene.",
        },
        imageUrl: "/images/projects/saray steak/menu.jpg",
      },
      {
        title: { en: "Branding", no: "Merkevarebygging" },
        description: {
          en: "Redefining the Saray Steakhouse brand with a modern, premium logo and a cohesive visual identity that reflects their commitment to culinary excellence.",
          no: "Vi fornyet Saray Steakhouse sin merkevare med en moderne, eksklusiv logo og en helhetlig visuell identitet som gjenspeiler deres satsing på kulinarisk kvalitet.",
        },
        imageUrl: "/images/projects/saray steak/logo.jpg",
      },
      {
        title: { en: "Custom Theme", no: "Skreddersydd tema" },
        description: {
          en: "Developed a custom, lightweight WordPress theme to ensure the fastest possible load times while maintaining the sophisticated aesthetic of the Saray brand.",
          no: "Vi utviklet et skreddersydd og lettvekts WordPress-tema for å sikre raskest mulig lastetid, samtidig som vi beholdt den sofistikerte estetikken til Saray-merkevaren.",
        },
        imageUrl: "/images/projects/saray steak/saray_custom_theme_ai.png",
      },
    ],
    features: [
      { en: "High-Performance React-Based Landing Page", no: "Høyytelses landingsside bygget med React" },
      { en: "Individual WordPress Branch Websites", no: "Egne WordPress-nettsider per avdeling" },
      { en: "Integrated Table Booking System", no: "Integrert bordbookingsystem" },
      { en: "Admin Dashboard for Orders & Bookings Management", no: "Admin-dashbord for håndtering av bestillinger og bookinger" },
      { en: "Multi-location Information (Gjøvik & Raufoss)", no: "Informasjon for flere avdelinger (Gjøvik & Raufoss)" },
      { en: "Mobile-Optimized User Experience", no: "Mobiloptimalisert brukeropplevelse" },
      { en: "Cohesive Offline-to-Online Branding", no: "Helhetlig merkevarebygging fra fysisk til digital" },
    ],
    technologies: ["React", "WordPress", "PHP", "Next.js", "Brand Identity"],
    results: {
      summary: {
        en: "By combining a high-performance React landing page with custom-designed WordPress branch sites, we achieved a solid digital foundation for Saray Steakhouse, resulting in improved brand recognition and a 25% increase in guest engagement.",
        no: "Ved å kombinere en høyytelses React-landingsside med skreddersydde WordPress-avdelingssider, skapte vi et solid digitalt fundament for Saray Steakhouse, med bedre merkevaregjenkjennelse og en 25 % økning i gjesteengasjement.",
      },
      imageUrl: "/images/projects/saray steak/cover.png",
    },
  },
  {
    id: "rent-my-property-uk",
    title: { en: "Rent My Property UK", no: "Rent My Property UK" },
    description: { en: "A platform for renting properties.", no: "En plattform for utleie av eiendommer." },
    imageUrl: "/images/projects/rentmypropertyuk.png",
    projectLink: "/references/rent-my-property-uk",
    featured: true,
    overview: {
      description1: {
        en: "This project focused on developing a comprehensive online presence for Rent My Property UK, a property management service. Our goal was to create a user-friendly and visually appealing website that would facilitate property listings, inquiries, and bookings.",
        no: "Dette prosjektet handlet om å utvikle en helhetlig digital tilstedeværelse for Rent My Property UK, en eiendomsforvaltningstjeneste. Målet vårt var å skape en brukervennlig og visuelt tiltalende nettside som forenklet eiendomsannonsering, henvendelser og bookinger.",
      },
      description2: { en: "", no: "" },
      imageUrl: "/images/projects/rentmypropertyuk.png",
    },
    process: [
      {
        title: { en: "Requirements Gathering & User Needs Assessment", no: "Kravinnhenting & brukerbehovsanalyse" },
        description: {
          en: "We started by engaging with the client to understand their business model, target audience, and specific needs for the property management platform. This phase included user surveys and stakeholder interviews to gather comprehensive requirements.",
          no: "Vi startet med å samarbeide tett med kunden for å forstå forretningsmodellen, målgruppen og de spesifikke behovene for eiendomsforvaltningsplattformen. Denne fasen inkluderte brukerundersøkelser og intervjuer med interessenter for å kartlegge alle krav.",
        },
        imageUrl: "/images/projects/rentmyproperty/plan.png",
      },
      {
        title: { en: "UI/UX Redesign & Prototyping", no: "UI/UX-redesign & prototyping" },
        description: {
          en: "The design team created wireframes and interactive prototypes to visualize the new user interface. Emphasis was placed on intuitive navigation, clear property listings, and a seamless booking process.",
          no: "Designteamet laget skisser og interaktive prototyper for å visualisere det nye brukergrensesnittet. Det ble lagt vekt på intuitiv navigasjon, tydelige eiendomsannonser og en sømløs bookingprosess.",
        },
        imageUrl: "/images/projects/rentmyproperty/ui.png",
      },
      {
        title: { en: "Development & Feature Implementation", no: "Utvikling & funksjonsimplementering" },
        description: {
          en: "Our development team built the website using modern web technologies, ensuring it was responsive and optimized for performance. Key features included property search filters, detailed listings, user accounts, and a secure booking system.",
          no: "Utviklingsteamet vårt bygget nettsiden med moderne webteknologi, og sikret at den var responsiv og optimalisert for ytelse. Sentrale funksjoner inkluderte søkefiltre for eiendommer, detaljerte annonser, brukerkontoer og et sikkert bookingsystem.",
        },
        imageUrl: "/images/projects/rentmyproperty/dev.png",
      },
      {
        title: { en: "Accessibility & Performance Testing", no: "Tilgjengelighets- & ytelsestesting" },
        description: {
          en: "Rigorous testing was conducted to ensure the website met accessibility standards and performed well across all devices and browsers. User feedback was incorporated to refine the user experience further.",
          no: "Grundig testing ble gjennomført for å sikre at nettsiden oppfylte tilgjengelighetsstandarder og fungerte godt på tvers av alle enheter og nettlesere. Brukertilbakemeldinger ble tatt inn for å videreutvikle brukeropplevelsen.",
        },
        imageUrl: "/images/projects/rentmyproperty/logo.png",
      },
    ],
    features: [
      { en: "Responsive Design for optimal viewing on all devices.", no: "Responsivt design for optimal visning på alle enheter." },
      { en: "Detailed Property Listings with descriptions and amenities.", no: "Detaljerte eiendomsannonser med beskrivelser og fasiliteter." },
      { en: "SEO Optimization for local search visibility.", no: "SEO-optimalisering for lokal søkesynlighet." },
    ],
    technologies: ["WordPress (headless CMS)"],
    results: {
      summary: {
        en: "The revamped Rent My Property UK website successfully enhanced the user experience, leading to increased user engagement and higher booking rates. The client reported positive feedback from users regarding the ease of navigation and the clarity of property information. Overall, the project significantly contributed to the client's business growth and online presence.",
        no: "Den fornyede Rent My Property UK-nettsiden styrket brukeropplevelsen betydelig, med økt brukerengasjement og høyere bookingrate. Kunden rapporterte positive tilbakemeldinger fra brukere om enkel navigasjon og tydelig eiendomsinformasjon. Samlet sett bidro prosjektet vesentlig til kundens forretningsvekst og digitale tilstedeværelse.",
      },
      imageUrl: "/images/projects/rentmyproperty/cover.png",
    },
  },
  {
    id: "tulips-beauty",
    title: { en: "Tulips Beauty", no: "Tulips Beauty" },
    description: { en: "A beauty salon website.", no: "Nettside for en skjønnhetssalong." },
    imageUrl: "/images/projects/tulips.png",
    projectLink: "/references/tulips-beauty",
    featured: true,
    overview: {
      description1: {
        en: "Tulips Beauty is an elegant and user-friendly website for a modern beauty salon. The project's goal was to create a beautiful online presence that would attract new clients and make it easy for them to book appointments.",
        no: "Tulips Beauty er en elegant og brukervennlig nettside for en moderne skjønnhetssalong. Målet med prosjektet var å skape en vakker digital tilstedeværelse som tiltrekker nye kunder og gjør det enkelt for dem å bestille time.",
      },
      description2: {
        en: "The website features a stunning design, a detailed menu of services, a gallery of the salon's work, and an integrated online booking system. We aimed to create a website that is as beautiful and professional as the salon itself.",
        no: "Nettsiden har et imponerende design, en detaljert oversikt over tjenester, et galleri som viser salongens arbeid, og et integrert bookingsystem. Målet var å skape en nettside som er like vakker og profesjonell som salongen selv.",
      },
      imageUrl: "/images/projects/tulips/cover.png",
    },
    process: [
      {
        title: { en: "Beauty Industry & Client Needs Analysis", no: "Bransje- & kundebehovsanalyse" },
        description: {
          en: "We worked with Tulips Beauty to understand their brand, services, and target clientele. We researched the beauty industry to identify best practices for salon websites.",
          no: "Vi samarbeidet med Tulips Beauty for å forstå merkevaren, tjenestene og målgruppen deres. Vi undersøkte skjønnhetsbransjen for å identifisere beste praksis for salongnettsider.",
        },
        imageUrl: "/images/projects/tulips/plan.png",
      },
      {
        title: { en: "Elegant & User-Friendly Design", no: "Elegant & brukervennlig design" },
        description: {
          en: "We designed an elegant and visually appealing website that reflects the salon's brand. The design is user-friendly and makes it easy for clients to find information and book appointments.",
          no: "Vi designet en elegant og visuelt tiltalende nettside som gjenspeiler salongens merkevare. Designet er brukervennlig og gjør det enkelt for kundene å finne informasjon og bestille time.",
        },
        imageUrl: "/images/projects/tulips/ui.png",
      },
      {
        title: { en: "Website Development & Booking System", no: "Utvikling av nettside & bookingsystem" },
        description: {
          en: "The website was developed with an integrated online booking system, allowing clients to book appointments 24/7. The site also features a gallery of the salon's work and a menu of services.",
          no: "Nettsiden ble utviklet med et integrert bookingsystem, slik at kundene kan bestille time døgnet rundt. Siden har også et galleri med salongens arbeid og en oversikt over tjenester.",
        },
        imageUrl: "/images/projects/tulips/logo.png",
      },
      {
        title: { en: "Launch & Social Media Integration", no: "Lansering & integrasjon med sosiale medier" },
        description: {
          en: "After the launch, we integrated the website with the salon's social media channels to create a cohesive online presence and attract new clients.",
          no: "Etter lansering integrerte vi nettsiden med salongens kanaler i sosiale medier for å skape en helhetlig digital tilstedeværelse og tiltrekke nye kunder.",
        },
        imageUrl: "/images/projects/tulips/dev.png",
      },
    ],
    features: [
      { en: "Online appointment booking system", no: "Nettbasert timebestillingssystem" },
      { en: "Service menu with detailed descriptions and pricing", no: "Tjenesteoversikt med detaljerte beskrivelser og priser" },
      { en: "Photo gallery of the salon's work", no: "Bildegalleri av salongens arbeid" },
      { en: "Contact information and location map", no: "Kontaktinformasjon og kart med lokasjon" },
      { en: "Integration with social media channels", no: "Integrasjon med sosiale medier" },
    ],
    technologies: ["Wordpress", "PHP", "JavaScript", "CSS"],
    results: {
      summary: {
        en: "The new website has significantly improved Tulips Beauty's online presence and made it easier for clients to book appointments. The salon has seen an increase in online bookings and new clients since the website's launch.",
        no: "Den nye nettsiden har betydelig styrket Tulips Beauty sin digitale tilstedeværelse og gjort det enklere for kunder å bestille time. Salongen har sett en økning i nettbaserte bookinger og nye kunder siden lanseringen.",
      },
      imageUrl: "/images/projects/tulips/cover.png",
    },
  },
  {
    id: "rent-cars",
    title: { en: "Rent Cars", no: "Rent Cars" },
    description: { en: "A car rental platform.", no: "En plattform for bilutleie." },
    imageUrl: "/images/projects/rentcars.jpeg",
    projectLink: "/references/rent-cars",
    featured: true,
    overview: {
      description1: {
        en: "Rent Cars is a modern and efficient car rental platform. The project's goal was to create a seamless and user-friendly experience for customers looking to rent a car.",
        no: "Rent Cars er en moderne og effektiv plattform for bilutleie. Målet med prosjektet var å skape en sømløs og brukervennlig opplevelse for kunder som ønsker å leie bil.",
      },
      description2: {
        en: "The platform features a powerful search engine, real-time vehicle availability, a secure booking and payment system, and a user-friendly interface. We aimed to make the car rental process as quick and easy as possible.",
        no: "Plattformen har et kraftig søkesystem, sanntidsoversikt over ledige biler, et sikkert booking- og betalingssystem, og et brukervennlig grensesnitt. Målet var å gjøre bilutleieprosessen så rask og enkel som mulig.",
      },
      imageUrl: "/images/projects/rentcars.jpeg",
    },
    process: [
      {
        title: { en: "Car Rental Market Analysis", no: "Markedsanalyse for bilutleie" },
        description: {
          en: "We analyzed the car rental market to identify key features and user expectations for a modern car rental platform. We focused on creating a seamless booking experience.",
          no: "Vi analyserte bilutleiemarkedet for å identifisere sentrale funksjoner og brukerforventninger til en moderne bilutleieplattform. Vi fokuserte på å skape en sømløs bookingopplevelse.",
        },
        imageUrl: "/images/projects/rentcars/plan.png",
      },
      {
        title: { en: "Intuitive Booking Interface Design", no: "Design av intuitivt bookinggrensesnitt" },
        description: {
          en: "We designed an intuitive and easy-to-use booking interface that allows users to quickly find and book the right vehicle. The design is responsive and works on all devices.",
          no: "Vi designet et intuitivt og lettvint bookinggrensesnitt som lar brukerne raskt finne og booke riktig bil. Designet er responsivt og fungerer på alle enheter.",
        },
        imageUrl: "/images/projects/rentcars/ui.png",
      },
      {
        title: { en: "Platform Development & Fleet Management", no: "Plattformutvikling & bilparkstyring" },
        description: {
          en: "The platform was built with a robust backend for managing the vehicle fleet, bookings, and customers. We integrated a payment gateway for secure online payments.",
          no: "Plattformen ble bygget med en robust backend for å håndtere bilparken, bookinger og kunder. Vi integrerte en betalingsløsning for sikre nettbetalinger.",
        },
        imageUrl: "/images/projects/rentcars/dev.png",
      },
      {
        title: { en: "Launch & Optimization", no: "Lansering & optimalisering" },
        description: {
          en: "After the launch, we continue to monitor the platform's performance and user feedback to optimize the booking process and improve the user experience.",
          no: "Etter lansering fortsetter vi å følge med på plattformens ytelse og brukertilbakemeldinger for å optimalisere bookingprosessen og forbedre brukeropplevelsen.",
        },
        imageUrl: "/images/projects/rentcars/logo.png",
      },
    ],
    features: [
      { en: "Easy-to-use vehicle search and booking system", no: "Brukervennlig søke- og bookingsystem for biler" },
      { en: "Real-time vehicle availability", no: "Sanntidsoversikt over ledige biler" },
      { en: "Secure online payment gateway", no: "Sikker nettbetalingsløsning" },
      { en: "Customer accounts with booking history", no: "Kundekontoer med bookinghistorikk" },
      { en: "Admin panel for fleet and booking management", no: "Adminpanel for bilpark- og bookinghåndtering" },
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    results: {
      summary: {
        en: "Rent Cars has streamlined the car rental process, resulting in a significant increase in online bookings. The platform's user-friendly design and efficient booking system have been praised by customers.",
        no: "Rent Cars har effektivisert bilutleieprosessen, noe som har gitt en betydelig økning i nettbaserte bookinger. Plattformens brukervennlige design og effektive bookingsystem har blitt godt mottatt av kundene.",
      },
      imageUrl: "/images/projects/rentcars/result.png",
    },
  },
  {
    id: "shop-front",
    title: { en: "Shop Front", no: "Shop Front" },
    description: { en: "An e-commerce storefront.", no: "En nettbutikkløsning." },
    imageUrl: "/images/projects/shop-front.png",
    projectLink: "/references/shop-front",
    featured: true,
    overview: {
      description1: {
        en: "Shop Front is a versatile and customizable e-commerce storefront. The project's goal was to create a flexible and scalable solution for businesses looking to sell their products online.",
        no: "Shop Front er en allsidig og tilpasningsdyktig nettbutikkløsning. Målet med prosjektet var å skape en fleksibel og skalerbar løsning for bedrifter som ønsker å selge produktene sine på nett.",
      },
      description2: {
        en: "The platform offers a wide range of features, including a product catalog with categories and search, a secure shopping cart and checkout process, and an admin panel for managing products, orders, and customers.",
        no: "Plattformen tilbyr en rekke funksjoner, inkludert en produktkatalog med kategorier og søk, sikker handlekurv og betalingsprosess, samt et adminpanel for å administrere produkter, bestillinger og kunder.",
      },
      imageUrl: "/images/projects/shopfront/shop-front.png",
    },
    process: [
      {
        title: { en: "E-commerce Strategy & Planning", no: "E-handelsstrategi & planlegging" },
        description: {
          en: "We worked with the client to define their e-commerce strategy, target audience, and product catalog. We planned the features and functionality of the online store.",
          no: "Vi samarbeidet med kunden om å definere e-handelsstrategien, målgruppen og produktkatalogen. Vi planla funksjonene og funksjonaliteten til nettbutikken.",
        },
        imageUrl: "/images/projects/shopfront/plan.png",
      },
      {
        title: { en: "Custom Storefront Design", no: "Skreddersydd butikkdesign" },
        description: {
          en: "We designed a custom storefront that reflects the client's brand and provides an excellent shopping experience. The design is optimized for conversions.",
          no: "Vi designet en skreddersydd nettbutikk som gjenspeiler kundens merkevare og gir en utmerket handleopplevelse. Designet er optimalisert for konvertering.",
        },
        imageUrl: "/images/projects/shopfront/testing.png",
      },
      {
        title: { en: "E-commerce Platform Development", no: "Utvikling av e-handelsplattform" },
        description: {
          en: "We developed the e-commerce platform with all the necessary features, including a product catalog, shopping cart, secure checkout, and order management system.",
          no: "Vi utviklet e-handelsplattformen med alle nødvendige funksjoner, inkludert produktkatalog, handlekurv, sikker betaling og ordrehåndteringssystem.",
        },
        imageUrl: "/images/projects/shopfront/dev.png",
      },
      {
        title: { en: "Launch & Marketing", no: "Lansering & markedsføring" },
        description: {
          en: "After the launch, we implemented a digital marketing campaign to drive traffic to the new online store and generate sales.",
          no: "Etter lansering satte vi i gang en digital markedsføringskampanje for å drive trafikk til den nye nettbutikken og generere salg.",
        },
        imageUrl: "/images/projects/shopfront/deploy.png",
      },
    ],
    features: [
      { en: "Custom-branded storefront design", no: "Skreddersydd butikkdesign tilpasset merkevaren" },
      { en: "Product catalog with categories and search", no: "Produktkatalog med kategorier og søk" },
      { en: "Shopping cart and secure checkout", no: "Handlekurv og sikker betaling" },
      { en: "Order management system for the admin", no: "Ordrehåndteringssystem for administrator" },
      { en: "Integration with payment gateways and shipping providers", no: "Integrasjon med betalingsløsninger og fraktleverandører" },
    ],
    technologies: ["Magento", "PHP", "MySQL", "JavaScript"],
    results: {
      summary: {
        en: "The new e-commerce storefront has enabled the client to sell their products online and reach a wider audience. The platform has seen a steady increase in sales since its launch.",
        no: "Den nye nettbutikken har gjort det mulig for kunden å selge produktene sine på nett og nå et bredere publikum. Plattformen har hatt en jevn salgsøkning siden lanseringen.",
      },
      imageUrl: "/images/projects/shopfront/cover.png",
    },
  },
  {
    id: "trendify-tools",
    title: { en: "Trendify Tools Dashboard", no: "Trendify Tools Dashboard" },
    description: { en: "An e-commerce fashion platform.", no: "En e-handelsplattform for mote." },
    imageUrl: "/images/projects/trendify.png",
    projectLink: "/references/trendify-tools",
    featured: true,
    overview: {
      description1: {
        en: "Trendify Tools is a comprehensive website designed to offer different types of online tools that help creators to grow their audience on social media platforms. The project involved designing and developing a modern, user-friendly dashboard that provides access to a variety of tools such as hashtag generators, content planners, and analytics trackers. This project aimed to create an engaging online presence that showcases their services, allows clients to easily access the tools, and provides essential information about the platform.",
        no: "Trendify Tools er en omfattende nettside designet for å tilby ulike typer nettbaserte verktøy som hjelper skapere med å vokse publikummet sitt i sosiale medier. Prosjektet omfattet design og utvikling av et moderne, brukervennlig dashbord med tilgang til verktøy som hashtag-generatorer, innholdsplanleggere og analyseverktøy. Målet var å skape en engasjerende digital tilstedeværelse som viser frem tjenestene, gir kundene enkel tilgang til verktøyene, og formidler essensiell informasjon om plattformen.",
      },
      description2: {
        en: "The dashboard features a clean and elegant design that reflects the professionalism of Trendify Tools. Key functionalities include a comprehensive tool menu, an integrated user account system, a photo gallery showcasing their tools, and client testimonials to build trust with potential users. The site is built using Next.js to ensure fast load times and a responsive design that works seamlessly across all devices. Additionally, SEO best practices were implemented to enhance the platform's visibility in search engine results, attracting more visitors and potential users.",
        no: "Dashbordet har et rent og elegant design som gjenspeiler profesjonaliteten til Trendify Tools. Sentrale funksjoner inkluderer en omfattende verktøymeny, et integrert brukerkontosystem, et bildegalleri som viser frem verktøyene, og kundeomtaler som bygger tillit hos potensielle brukere. Siden er bygget med Next.js for å sikre rask lastetid og et responsivt design som fungerer sømløst på alle enheter. I tillegg ble beste praksis for SEO implementert for å styrke plattformens synlighet i søkeresultater og tiltrekke flere besøkende og potensielle brukere.",
      },
      imageUrl: "/images/projects/trendify/cover.png",
    },
    process: [
      {
        title: { en: "Data Integration & Pipeline Setup", no: "Dataintegrasjon & oppsett av dataflyt" },
        description: {
          en: "We began by integrating various data sources, including social media APIs and user databases, to ensure seamless data flow into the dashboard. This involved setting up ETL pipelines for data extraction, transformation, and loading.",
          no: "Vi startet med å integrere ulike datakilder, inkludert API-er for sosiale medier og brukerdatabaser, for å sikre sømløs dataflyt inn i dashbordet. Dette innebar oppsett av ETL-flyter for uttrekk, transformasjon og innlasting av data.",
        },
        imageUrl: "/images/projects/trendify/plan.png",
      },
      {
        title: { en: "Machine Learning Model Development & Training", no: "Utvikling & trening av maskinlæringsmodeller" },
        description: {
          en: "We developed and trained machine learning models to provide predictive analytics and insights. This included tasks such as trend analysis, user behavior prediction, and content optimization suggestions.",
          no: "Vi utviklet og trente maskinlæringsmodeller for å levere prediktiv analyse og innsikt. Dette omfattet blant annet trendanalyse, prediksjon av brukeratferd og forslag til innholdsoptimalisering.",
        },
        imageUrl: "/images/projects/trendify/ai.png",
      },
      {
        title: { en: "Dashboard UI/UX Design & Development", no: "UI/UX-design & utvikling av dashbord" },
        description: {
          en: "Our design team created an intuitive and visually appealing user interface for the dashboard. The development team then built the front-end and back-end components, ensuring a smooth user experience and robust functionality.",
          no: "Designteamet vårt skapte et intuitivt og visuelt tiltalende grensesnitt for dashbordet. Utviklingsteamet bygde deretter front-end- og back-end-komponentene, og sikret en smidig brukeropplevelse og solid funksjonalitet.",
        },
        imageUrl: "/images/projects/trendify/testing.png",
      },
      {
        title: { en: "Deployment & Performance Optimization", no: "Lansering & ytelsesoptimalisering" },
        description: {
          en: "Finally, we deployed the dashboard on a scalable cloud platform, ensuring high availability and performance. We also implemented monitoring tools to track usage and performance metrics, allowing for ongoing optimization.",
          no: "Til slutt lanserte vi dashbordet på en skalerbar skyplattform, med høy oppetid og ytelse. Vi implementerte også overvåkingsverktøy for å spore bruk og ytelse, slik at vi kunne fortsette å optimalisere løpende.",
        },
        imageUrl: "/images/projects/trendify/dev.png",
      },
    ],
    features: [
      { en: "AI-Powered Content Recommendation Engine", no: "AI-drevet anbefalingsmotor for innhold" },
      { en: "Automated Tool Discovery via AI Chat", no: "Automatisert verktøyoppdagelse via AI-chat" },
      { en: "Predictive Analytics Dashboard for Creators", no: "Dashbord med prediktiv analyse for skapere" },
      { en: "Lightning-fast SEO & GEO optimized pages", no: "Lynraske sider optimalisert for SEO og GEO" },
      { en: "Secure User Authentication & Cloud Storage", no: "Sikker brukerautentisering & skylagring" },
      { en: "Real-time Collaboration & Export Tools", no: "Sanntidssamarbeid & eksportverktøy" },
    ],
    technologies: ["Next.js", "OpenAI API", "Tailwind", "Supabase"],
    results: {
      summary: {
        en: "The AI-native dashboard drove a **45% increase in engagement** and a 30% boost in recurring tool usage. SEO/GEO efforts led to a **25% increase in organic traffic** from AI search engines like Perplexity, positioning Trendify as a 2026 industry leader.",
        no: "Det AI-native dashbordet ga en **45 % økning i engasjement** og en 30 % økning i gjentatt bruk av verktøyene. SEO/GEO-arbeidet ga en **25 % økning i organisk trafikk** fra AI-søkemotorer som Perplexity, og posisjonerte Trendify som en bransjeleder i 2026.",
      },
      imageUrl: "/images/projects/trendify.png",
    },
  },
];

export default projects;
