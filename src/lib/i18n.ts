export const supportedLocales = ['en', 'sw', 'de', 'fr'] as const;

export type Locale = (typeof supportedLocales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  sw: 'Kiswahili',
  de: 'Deutsch',
  fr: 'Français'
};

export const localeShortNames: Record<Locale, string> = {
  en: 'EN',
  sw: 'SW',
  de: 'DE',
  fr: 'FR'
};

export const getLocaleFromPathname = (pathname: string): Locale => {
  const match = pathname.split('/').filter(Boolean)[0];
  return supportedLocales.includes(match as Locale) ? (match as Locale) : 'en';
};

export const stripLocaleFromPathname = (pathname: string) => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && supportedLocales.includes(parts[0] as Locale)) {
    return `/${parts.slice(1).join('/')}`;
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
};

export const localizePath = (pathname: string, locale: Locale) => {
  const cleanPath = stripLocaleFromPathname(pathname);
  if (locale === 'en') return cleanPath === '' ? '/' : cleanPath;
  if (cleanPath === '/' || cleanPath === '') return `/${locale}`;
  return `/${locale}${cleanPath}`;
};

export const ui = {
  en: {
    nav: {
      home: 'Home',
      packages: 'Packages',
      destinations: 'Destinations',
      activities: 'Activities',
      blogs: 'Blogs',
      faq: 'FAQ',
      contact: 'Contact'
    },
    actions: {
      talkToUs: 'Talk to us',
      bookNow: 'Book now',
      discoverStory: 'Discover our story',
      viewDetails: 'View details',
      from: 'From',
      viewAllPackages: 'View all packages',
      readBlog: 'Read blog',
      viewAllDestinations: 'View all destinations',
      browsePackages: 'Browse packages'
    },
    footer: {
      explore: 'Explore',
      packages: 'Packages',
      contact: 'Contact',
      planTrip: 'Plan a trip',
      terms: 'Terms',
      privacy: 'Privacy'
    },
    sidebar: {
      latestPosts: 'Latest posts',
      latestPackages: 'Latest packages',
      tags: 'Tags'
    },
    assistant: {
      title: 'Ask about trips',
      subtitle: 'Packages, destinations, activities, prices, durations, and fun facts.',
      greeting: 'Hi, I am your safari planning helper. Ask me things like "best honeymoon package" or "tell me about Lake Nakuru."',
      placeholder: 'Ask a travel question',
      send: 'Send',
      promptHoneymoon: 'Honeymoon package?',
      promptSafari: 'One day safari?',
      promptNaivasha: 'Tell me about Naivasha'
    },
    language: 'Language'
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      packages: 'Vifurushi',
      destinations: 'Vivutio',
      activities: 'Shughuli',
      blogs: 'Blogu',
      faq: 'Maswali',
      contact: 'Wasiliana'
    },
    actions: {
      talkToUs: 'Wasiliana nasi',
      bookNow: 'Weka nafasi',
      discoverStory: 'Gundua hadithi yetu',
      viewDetails: 'Tazama zaidi',
      from: 'Kuanzia',
      viewAllPackages: 'Tazama vifurushi vyote',
      readBlog: 'Soma blogu',
      viewAllDestinations: 'Tazama vivutio vyote',
      browsePackages: 'Vinjari vifurushi'
    },
    footer: {
      explore: 'Gundua',
      packages: 'Vifurushi',
      contact: 'Wasiliana',
      planTrip: 'Panga safari',
      terms: 'Masharti',
      privacy: 'Faragha'
    },
    sidebar: {
      latestPosts: 'Machapisho mapya',
      latestPackages: 'Vifurushi vipya',
      tags: 'Vigezo'
    },
    assistant: {
      title: 'Uliza kuhusu safari',
      subtitle: 'Vifurushi, vivutio, shughuli, bei, muda, na fun facts.',
      greeting: 'Habari, mimi ni msaidizi wako wa kupanga safari. Niulize kama "kifurushi bora cha honeymoon" au "niambie kuhusu Lake Nakuru."',
      placeholder: 'Uliza swali la safari',
      send: 'Tuma',
      promptHoneymoon: 'Honeymoon package?',
      promptSafari: 'One day safari?',
      promptNaivasha: 'Tell me about Naivasha'
    },
    language: 'Lugha'
  },
  de: {
    nav: {
      home: 'Start',
      packages: 'Pakete',
      destinations: 'Ziele',
      activities: 'Aktivitäten',
      blogs: 'Blog',
      faq: 'FAQ',
      contact: 'Kontakt'
    },
    actions: {
      talkToUs: 'Kontakt aufnehmen',
      bookNow: 'Jetzt buchen',
      discoverStory: 'Unsere Geschichte entdecken',
      viewDetails: 'Details ansehen',
      from: 'Ab',
      viewAllPackages: 'Alle Pakete ansehen',
      readBlog: 'Blog lesen',
      viewAllDestinations: 'Alle Reiseziele ansehen',
      browsePackages: 'Pakete entdecken'
    },
    footer: {
      explore: 'Entdecken',
      packages: 'Pakete',
      contact: 'Kontakt',
      planTrip: 'Reise planen',
      terms: 'Bedingungen',
      privacy: 'Datenschutz'
    },
    sidebar: {
      latestPosts: 'Neueste Beitrage',
      latestPackages: 'Neueste Pakete',
      tags: 'Tags'
    },
    assistant: {
      title: 'Fragen Sie nach Reisen',
      subtitle: 'Pakete, Ziele, Aktivitäten, Preise, Dauer und Wissenswertes.',
      greeting: 'Hallo, ich bin Ihr Reisehelfer. Fragen Sie mich zum Beispiel nach dem besten Honeymoon-Paket oder nach Lake Nakuru.',
      placeholder: 'Stellen Sie eine Reisefrage',
      send: 'Senden',
      promptHoneymoon: 'Honeymoon package?',
      promptSafari: 'One day safari?',
      promptNaivasha: 'Tell me about Naivasha'
    },
    language: 'Sprache'
  },
  fr: {
    nav: {
      home: 'Accueil',
      packages: 'Forfaits',
      destinations: 'Destinations',
      activities: 'Activités',
      blogs: 'Blog',
      faq: 'FAQ',
      contact: 'Contact'
    },
    actions: {
      talkToUs: 'Nous contacter',
      bookNow: 'Réserver',
      discoverStory: 'Découvrir notre histoire',
      viewDetails: 'Voir les détails',
      from: 'À partir de',
      viewAllPackages: 'Voir tous les forfaits',
      readBlog: 'Lire le blog',
      viewAllDestinations: 'Voir toutes les destinations',
      browsePackages: 'Voir les forfaits'
    },
    footer: {
      explore: 'Explorer',
      packages: 'Forfaits',
      contact: 'Contact',
      planTrip: 'Planifier un voyage',
      terms: 'Conditions',
      privacy: 'Confidentialité'
    },
    sidebar: {
      latestPosts: 'Derniers articles',
      latestPackages: 'Derniers forfaits',
      tags: 'Tags'
    },
    assistant: {
      title: 'Posez une question sur les voyages',
      subtitle: 'Forfaits, destinations, activités, prix, durées et infos utiles.',
      greeting: 'Bonjour, je suis votre assistant de voyage. Demandez-moi par exemple le meilleur forfait lune de miel ou des informations sur Lake Nakuru.',
      placeholder: 'Posez une question de voyage',
      send: 'Envoyer',
      promptHoneymoon: 'Honeymoon package?',
      promptSafari: 'One day safari?',
      promptNaivasha: 'Tell me about Naivasha'
    },
    language: 'Langue'
  }
} as const;

export const homeCopy = {
  en: {
    heroEyebrow: 'Private Kenya safari and coast holidays',
    heroTitle: 'Explore Kenya with trusted local safari planners.',
    heroDescription:
      'Premium wildlife safaris, beach escapes, corporate excursions, and custom itineraries across Kenya’s most memorable destinations.',
    heroPrimary: 'View packages',
    heroSecondary: 'Start booking',
    introEyebrow: 'Your Perfect Kenya Travel Partner',
    introTitle: 'Karibu to Zenzeni Africa Safaris',
    introBody:
      'Step away from the everyday and discover Kenya through a journey shaped around you. From the wildlife-rich plains of the Maasai Mara and Amboseli to Rift Valley lakes, mountain trails, authentic cultural encounters, and the warm Indian Ocean coast, we bring every part of your holiday together with care.',
    introClosing: 'Travel with Zenzeni Africa Safaris and return home with stories, connections, and memories made to last.',
    featuredDestinations: 'Featured destinations',
    featuredDestinationsTitle: 'Kenya places worth slowing down for',
    popularPackages: 'Popular packages',
    popularPackagesTitle: 'Safari and coast trips ready to book',
    activitiesEyebrow: 'Activities',
    activitiesTitle: 'Travel styles for every kind of guest',
    whyChooseEyebrow: 'Why choose us',
    whyChooseTitle: 'Thoughtful journeys, backed by people who know Kenya',
    whyChooseBody:
      'We combine practical local knowledge with attentive planning, dependable partners, and honest guidance so every guest feels looked after before, during, and after the journey.',
    guestStoriesEyebrow: 'Guest stories',
    guestStoriesTitle: 'Travel that feels carefully handled',
    safariNotesEyebrow: 'Safari notes',
    safariNotesTitle: 'Planning guides from our team',
    ctaEyebrow: 'Custom travel planning',
    ctaTitle: 'Ready to plan your Kenya escape?',
    ctaText: 'Tell us your dates, budget, and travel style. We will shape a safari or beach itinerary around you.'
  },
  sw: {
    heroEyebrow: 'Safari za Kenya na mapumziko ya pwani',
    heroTitle: 'Gundua Kenya na wapangaji wa safari wa kuaminika.',
    heroDescription:
      'Safari za wanyamapori za hadhi ya juu, mapumziko ya ufukweni, safari za kampuni, na ratiba maalum katika maeneo maarufu zaidi ya Kenya.',
    heroPrimary: 'Tazama vifurushi',
    heroSecondary: 'Anza kuweka nafasi',
    introEyebrow: 'Mshirika wako bora wa safari za Kenya',
    introTitle: 'Karibu to Zenzeni Africa Safaris',
    introBody:
      'Toka katika maisha ya kila siku na ugundue Kenya kupitia safari iliyopangwa kulingana na wewe. Kuanzia nyanda za Maasai Mara na Amboseli, maziwa ya Rift Valley, njia za milimani, uzoefu wa kitamaduni, hadi pwani yenye joto ya Bahari ya Hindi, tunakusanya kila sehemu ya likizo yako kwa uangalifu.',
    introClosing: 'Safiri na Zenzeni Africa Safaris na urudi nyumbani ukiwa na hadithi, mahusiano, na kumbukumbu za kudumu.',
    featuredDestinations: 'Vivutio vilivyochaguliwa',
    featuredDestinationsTitle: 'Sehemu za Kenya zinazostahili kutulia na kuzifurahia',
    popularPackages: 'Vifurushi maarufu',
    popularPackagesTitle: 'Safari na safari za pwani tayari kwa kuweka nafasi',
    activitiesEyebrow: 'Shughuli',
    activitiesTitle: 'Aina za safari kwa kila mgeni',
    whyChooseEyebrow: 'Kwa nini uchague sisi',
    whyChooseTitle: 'Safari zenye umakini, zikisaidiwa na watu wanaoijua Kenya',
    whyChooseBody:
      'Tunaunganisha uelewa wa karibu wa maeneo, mipango makini, washirika wa kuaminika, na mwongozo wa wazi ili kila mgeni ajisikie anahudumiwa kabla, wakati, na baada ya safari.',
    guestStoriesEyebrow: 'Hadithi za wageni',
    guestStoriesTitle: 'Safari zinazoonekana zimepangwa kwa uangalifu',
    safariNotesEyebrow: 'Vidokezo vya safari',
    safariNotesTitle: 'Mwongozo wa kupanga kutoka kwa timu yetu',
    ctaEyebrow: 'Upangaji wa safari maalum',
    ctaTitle: 'Tayari kupanga likizo yako ya Kenya?',
    ctaText: 'Tuambie tarehe zako, bajeti, na mtindo wa safari. Tutaandaa safari ya wanyamapori au ufukweni kulingana nawe.'
  },
  de: {
    heroEyebrow: 'Private Kenya-Safari- und Küstenreisen',
    heroTitle: 'Entdecken Sie Kenia mit vertrauenswürdigen lokalen Safari-Planern.',
    heroDescription:
      'Premium-Wildtier-Safaris, Strandurlaube, Firmenausflüge und maßgeschneiderte Reiserouten zu Kenias eindrucksvollsten Zielen.',
    heroPrimary: 'Pakete ansehen',
    heroSecondary: 'Buchung starten',
    introEyebrow: 'Ihr perfekter Kenia-Reisepartner',
    introTitle: 'Karibu to Zenzeni Africa Safaris',
    introBody:
      'Entfliehen Sie dem Alltag und entdecken Sie Kenia auf einer Reise, die auf Sie zugeschnitten ist. Von den Wildbeobachtungsgebieten der Maasai Mara und Amboseli bis zu den Rift-Valley-Seen, Bergpfaden, kulturellen Begegnungen und der warmen Küste des Indischen Ozeans verbinden wir jeden Teil Ihres Urlaubs mit Sorgfalt.',
    introClosing: 'Reisen Sie mit Zenzeni Africa Safaris und kehren Sie mit Geschichten, Begegnungen und bleibenden Erinnerungen zurück.',
    featuredDestinations: 'Ausgewählte Reiseziele',
    featuredDestinationsTitle: 'Orte in Kenia, an denen man gern verweilt',
    popularPackages: 'Beliebte Pakete',
    popularPackagesTitle: 'Safari- und Küstentrips bereit zur Buchung',
    activitiesEyebrow: 'Aktivitäten',
    activitiesTitle: 'Reisestile für jeden Gast',
    whyChooseEyebrow: 'Warum uns wählen',
    whyChooseTitle: 'Sorgfältig geplante Reisen mit Leuten, die Kenia kennen',
    whyChooseBody:
      'Wir verbinden praktisches lokales Wissen mit aufmerksamer Planung, verlässlichen Partnern und ehrlicher Beratung, damit sich jeder Gast vor, während und nach der Reise gut betreut fühlt.',
    guestStoriesEyebrow: 'Gästestimmen',
    guestStoriesTitle: 'Reisen, die sorgfältig betreut wirken',
    safariNotesEyebrow: 'Safari-Notizen',
    safariNotesTitle: 'Planungsleitfäden von unserem Team',
    ctaEyebrow: 'Individuelle Reiseplanung',
    ctaTitle: 'Bereit für Ihre Kenia-Reise?',
    ctaText: 'Teilen Sie uns Ihre Daten, Ihr Budget und Ihren Reisestil mit. Wir gestalten eine Safari oder Strandreise rund um Sie.'
  },
  fr: {
    heroEyebrow: 'Safaris privées au Kenya et séjours côtiers',
    heroTitle: 'Explorez le Kenya avec des experts locaux de confiance.',
    heroDescription:
      'Safaris premium, escapades à la plage, excursions d’entreprise et itinéraires sur mesure à travers les destinations les plus marquantes du Kenya.',
    heroPrimary: 'Voir les forfaits',
    heroSecondary: 'Commencer la réservation',
    introEyebrow: 'Votre partenaire de voyage idéal au Kenya',
    introTitle: 'Karibu to Zenzeni Africa Safaris',
    introBody:
      'Quittez le quotidien et découvrez le Kenya à travers un voyage pensé pour vous. Des plaines du Maasai Mara et d’Amboseli aux lacs de la Vallée du Rift, aux sentiers de montagne, aux expériences culturelles et à la côte chaude de l’océan Indien, nous réunissons chaque partie de vos vacances avec soin.',
    introClosing: 'Voyagez avec Zenzeni Africa Safaris et repartez avec des histoires, des rencontres et des souvenirs durables.',
    featuredDestinations: 'Destinations en vedette',
    featuredDestinationsTitle: 'Des lieux du Kenya où l’on aime prendre son temps',
    popularPackages: 'Forfaits populaires',
    popularPackagesTitle: 'Safaris et séjours côtiers prêts à réserver',
    activitiesEyebrow: 'Activités',
    activitiesTitle: 'Des styles de voyage pour chaque type de voyageur',
    whyChooseEyebrow: 'Pourquoi nous choisir',
    whyChooseTitle: 'Des voyages réfléchis, portés par des personnes qui connaissent le Kenya',
    whyChooseBody:
      'Nous associons connaissance locale, planification attentive, partenaires fiables et conseils honnêtes afin que chaque voyageur se sente accompagné avant, pendant et après le voyage.',
    guestStoriesEyebrow: 'Témoignages',
    guestStoriesTitle: 'Des voyages gérés avec soin',
    safariNotesEyebrow: 'Notes safari',
    safariNotesTitle: 'Guides de planification de notre équipe',
    ctaEyebrow: 'Planification de voyage sur mesure',
    ctaTitle: 'Prêt à organiser votre escapade au Kenya ?',
    ctaText: 'Donnez-nous vos dates, votre budget et votre style de voyage. Nous créerons un safari ou un séjour plage autour de vous.'
  }
} as const;

export type HomeCopy = (typeof homeCopy)[Locale];
