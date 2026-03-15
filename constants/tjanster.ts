export type TjansterSection = {
  title: string;
  content: string;
};

export type TjansterDetail = {
  title: string;
  description: string;
  fullText: string;
  sections?: TjansterSection[];
  benefits?: string[];
  process?: string[];
};

export type TjansterListing = TjansterDetail & {
  slug: string;
  iconKey: string;
};

const tjänsterData: (TjansterDetail & { slug: string; iconKey: string })[] = [
  {
    slug: "digital-analys",
    title: "Digital Analys",
    description: "Här börjar allt. Vi granskar din data grundligt – webbanalys, beteendemönster, konverteringsflöden och konkurrenter – och hittar insikter som hjälper dig ta smarta, databaserade beslut. Du får en tydlig rapport med konkreta rekommendationer, inte bara siffror.",
    iconKey: "BarChart2",
    fullText:
      "Vi kartlägger era målgrupper och affärsmål i detalj så att varje insats bygger på tydliga insikter. Genom att analysera din nuvarande digitala närvaro, webbtrafik och konverteringsdata identifierar vi möjligheter och utmaningar som formar grunden för din strategi.",
    sections: [
      {
        title: "Vad vi analyserar",
        content:
          "Vi gräver djupt i din data: webbanalys, beteendemönster, konverteringsflöden och konkurrentanalys. Vi tittar på hur besökare rör sig på din webbplats, var de faller bort och vilka kanaler som driver mest värde.",
      },
      {
        title: "Vad du får",
        content:
          "En tydlig rapport med konkreta rekommendationer och prioriteringar. Du får inte bara siffror – du får förståelse för vad som fungerar, vad som inte gör det och hur du kan ta nästa steg.",
      },
    ],
    benefits: [
      "Kartläggning av målgrupper och beteenden",
      "Identifiering av flaskhalsar i konverteringsflödet",
      "Konkurrentanalys och marknadsinsikter",
      "Datadriven grund för strategibeslut",
    ],
    process: ["Kickoff & målsättning", "Datainsamling & analys", "Rapport & presentation", "Rekommendationer & nästa steg"],
  },
  {
    slug: "digital-strategi",
    title: "Digital Strategi",
    description: "Vi tar fram en tydlig, genomförbar strategi baserat på datadrivna insikter. Vi definierar mål, KPI:er och en roadmap som guidar dig från nu till där du vill vara – med fokus på långsiktig tillväxt och lönsamhet online.",
    iconKey: "Cpu",
    fullText:
      "Vi hjälper dig att sätta upp en långsiktig plan med målet att bygga ett starkt varumärke och öka din lönsamhet. Strategin bygger på insikter från analysen och är skräddarsydd för era affärsmål och budget.",
    sections: [
      {
        title: "Strategi som fungerar",
        content:
          "Vi skapar en plan som inte bara ser bra ut på papper – den är genomförbar och mätbar. Vi definierar tydliga mål, KPI:er och en roadmap som guidar er från nu till där ni vill vara.",
      },
      {
        title: "Långsiktighet",
        content:
          "En bra strategi bygger på förståelse för både marknaden och er organisation. Vi hjälper er att säkerställa att varje investering i digital marknadsföring bidrar till ert övergripande mål.",
      },
    ],
    benefits: [
      "Tydlig roadmap med målgrupper och kanaler",
      "Definierade KPI:er och framgångsmått",
      "Prioriterad handlingsplan",
      "Budgetfördelning och resursplanering",
    ],
    process: ["Målsättning & workshops", "Strategiutveckling", "Presentation & validering", "Implementeringsplan"],
  },
  {
    slug: "konverterings-optimering",
    title: "Konverterings-optimering",
    description: "Fler konverteringar genom att förbättra varje steg i kundresan. Vi använder A/B-testning, heatmaps och användartester för att hitta var besökare tappas bort – och optimerar sedan landningssidor, formulär och checkoutflöden så att fler blir kunder.",
    iconKey: "CircleFadingArrowUp",
    fullText:
      "Varje steg i kundresan är avgörande. Vi skapar en smidig och användarvänlig köpupplevelse där design, struktur och optimering skapar tillit från kunder och genererar fler konverteringar.",
    sections: [
      {
        title: "Optimering från data",
        content:
          "Vi använder A/B-testning, heatmaps och användartester för att förstå var besökare tappas bort. Sedan optimerar vi landningssidor, formulär och checkoutflöden för att säkerställa att fler konverterar.",
      },
      {
        title: "Kontinuerlig förbättring",
        content:
          "Konverteringsoptimering är inte en engångsinsats – det är en iterativ process. Vi hjälper er att bygga upp rutiner och strukturer för att ständigt förbättra och mäta resultat.",
      },
    ],
    benefits: [
      "Analys av konverteringsflöden",
      "A/B-testning och experiment",
      "Optimerade landningssidor och formulär",
      "Ökad konverteringsgrad över tid",
    ],
    process: ["Kartläggning & analys", "Hypoteser & testplan", "Implementering", "Mätning & iteration"],
  },
  {
    slug: "webb-design",
    title: "Webbproduktion",
    description: "Vi hjälper dig bygga och förbättra din hemsida med fokus på användarupplevelse och konvertering. Vi skapar moderna, snabba och mobilvänliga webbplatser som är SEO-vänliga från start och bygger på bästa praxis för design och teknik.",
    iconKey: "Code2",
    fullText:
      "En bra webbplats är mer än snygg design – den ska konvertera besökare till kunder. Vi skapar moderna, snabba och användarvänliga webbplatser som bygger på tydlig struktur och bästa praxis för SEO och UX.",
    sections: [
      {
        title: "Design som konverterar",
        content:
          "Vi designar med fokus på användarupplevelse och konvertering. Varje layout, val av färger och call-to-action är genomtänkt för att leda besökare mot målet – oavsett om det är ett köp, en kontaktförfrågan eller en nyhetsbrevsprenumeration.",
      },
      {
        title: "Teknik och utveckling",
        content:
          "Vi bygger på moderna webbtekniker som säkerställer snabb laddning, mobilvänlighet och god sökmotoroptimering. Din webbplats ska vara stabil, säker och enkel att underhålla.",
      },
    ],
    benefits: [
      "Användarvänlig design med fokus på konvertering",
      "Responsiv och mobiloptimerad",
      "SEO-vänlig struktur från start",
      "Snabb laddning och god prestanda",
    ],
    process: ["Krav & wireframes", "Design & prototyp", "Utveckling", "Test & lansering"],
  },
  
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "Var med i kundens köpresa från första klicket. Vi skapar kampanjer som fångar upp köpklara kunder via sökannonser, Display och YouTube – med rätt målgrupper, budskap och budgivning så att varje investerad krona ger maximal avkastning.",
    iconKey: "Megaphone",
    fullText:
      "Vi skapar kampanjer som fångar upp köpklara kunder och ser till att varje investerad krona ger maximal avkastning. Google Ads är kraftfullt när det används rätt – med rätt målgrupper, budskap och budgivning.",
    sections: [
      {
        title: "Sökannonser",
        content:
          "Vi bygger kampanjer som syns när kunder aktivt söker efter dina produkter eller tjänster. Genom noggrann nyckelordsoptimering, kvalitetsstyrning och budgivning säkerställer vi att era annonser når rätt personer i rätt ögonblick.",
      },
      {
        title: "Display & YouTube",
        content:
          "Utöver sökannonser kan vi hjälpa er nå kunder via Display-nätverket och YouTube. Vi skapar kampanjer som bygger varumärkesmedvetenhet och driver konverteringar längs hela kundresan.",
      },
    ],
    benefits: [
      "Kampanjer som når köpklara kunder",
      "Optimerad budgivning och ROI",
      "Ständig förbättring och optimering",
      "Tydlig rapportering och insikter",
    ],
    process: ["Kickoff & målsättning", "Kampanjsetup & strategi", "Lansering", "Optimering & skalning"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Annonser som engagerar och konverterar på Facebook och Instagram. Vi når rätt personer genom datadriven målgruppsstyrning, lookalike-publiker och retargeting – och skapar kreativ som sticker ut i flödet och driver mätbara resultat.",
    iconKey: "Share2",
    fullText:
      "Vi hjälper dig nå rätt personer på Facebook och Instagram med annonser som engagerar och konverterar. Genom datadriven målgruppsstyrning och kreativ annonsering ser vi till att dina budskap träffar kunderna i rätt ögonblick.",
    sections: [
      {
        title: "Målgruppsstyrning",
        content:
          "Vi använder Meta:s kraftfulla målgruppsverktyg för att nå rätt personer – baserat på intressen, beteenden och lookalike-publiker. Vi testar och optimerar kontinuerligt för att hitta de mest lönsamma segmenten.",
      },
      {
        title: "Kreativ och format",
        content:
          "Vi skapar annonser som sticker ut i flödet. Oavsett om det är video, carousel eller statiska bilder – vi väljer format och budskap som matchar er målgrupp och era mål.",
      },
    ],
    benefits: [
      "Målgruppsstyrning med lookalike och custom audiences",
      "Kreativ annonsering som engagerar",
      "Retargeting för att fånga upp intresserade besökare",
      "Tydlig rapportering och insikter",
    ],
    process: ["Kickoff & målsättning", "Målgruppsstrategi", "Kreativ produktion", "Lansering & optimering"],
  },
  {
    slug: "microsoft-ads",
    title: "Microsoft Ads",
    description: "Syns när kunderna letar efter dina produkter eller tjänster via Bing och Microsofts söknätverk. Vi når en unik målgrupp – ofta B2B-köpbeslutsfattare och professionella användare – med lägre konkurrens och potentiellt lägre kostnad per klick än på Google.",
    iconKey: "Monitor",
    fullText:
      "Vi hjälper dig nå rätt personer via Microsofts söknätverk med annonser som syns när kunderna aktivt letar efter dina produkter eller tjänster. Microsoft Ads når en unik målgrupp – ofta B2B-köpbeslutsfattare och professionella användare som söker via Bing och Microsoft 365.",
    sections: [
      {
        title: "Microsoft Search Network",
        content:
          "Vi bygger kampanjer som syns på Bing, Yahoo och andra Microsoft-partners. Målgruppen skiljer sig från Google – ofta äldre, med högre köpkraft och mer B2B-fokus. Vi optimerar för denna unika publik.",
      },
      {
        title: "LinkedIn-integration",
        content:
          "Microsoft Ads kan kombineras med LinkedIn för att nå professionella målgrupper. Vi hjälper er att bygga kampanjer som träffar rätt personer baserat på jobbtitel, bransch och företagsstorlek.",
      },
    ],
    benefits: [
      "Når en unik målgrupp – ofta B2B",
      "Lägre konkurrens om många nyckelord",
      "Potentiellt lägre kostnad per klick",
      "Tydlig rapportering och insikter",
    ],
    process: ["Kickoff & målsättning", "Kampanjsetup", "Lansering", "Optimering & skalning"],
  },
];

export const TJANSTER_LIST = tjänsterData;

export const TJANSTER_BY_SLUG: Record<string, TjansterDetail> = Object.fromEntries(
  tjänsterData.map(({ iconKey, slug, ...detail }) => [slug, detail])
);

export const TJANSTER_NAV_LINKS = [
  { href: "/tjanster", label: "Alla tjänster" },
  ...tjänsterData.map((t) => ({ href: `/tjanster/${t.slug}`, label: t.title })),
];
