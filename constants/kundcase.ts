export type KundcaseLink = {
  label: string;
  href: string;
};

export type KundcaseQuote = {
  text: string;
  author: string;
  role: string;
};

export type Kundcase = {
  slug: string;
  client: string;
  logo?:string;
  tagline: string;
  description: string;
  summary: string;
  links: KundcaseLink[];
  assignment: string[];
  quote: KundcaseQuote | null;
};

export const KUNDCASE_LIST: Kundcase[] = [
  {
    slug: "sproud",
    client: "Sproud",
    logo:"https://images.squarespace-cdn.com/content/v1/688ba16ce11dfe11cd5d300f/6e0ab131-cbfb-43b5-8602-6d2771efddf7/1.png?format=1500w",
    tagline: "THE ALT ALT M*LK",
    description:
      "Sproud är ett Malmöbaserat, innovativt växtbaserat företag grundat 2018 som erbjuder klimatsmarta mejerialternativ baserade på ärtprotein.",
    summary:
      "Brand awareness, Google Ads, Meta Ads och konverteringsoptimering i Shopify – resulterade i försäljningsrekord.",
    links: [
      { label: "sproudglobal.com", href: "https://sproudglobal.com" },
      { label: "sproud.uk", href: "https://sproud.uk" },
    ],
    assignment: [
      "Sproud hade en kombinerad målsättning om att driva brand awareness och sales för e-handelskanalen sproud.uk. Strategin omfattade annonsering på Google Ads, Meta Ads samt konverteringsoptimering i Shopify bland annat.",
      "I takt med målsättningen om ökade sales implementerades en struktur för email marketing och uppdatering av deras nuvarande marketing automation med syfte att öka intäkterna i form av merförsäljning och fånga upp potentiella borttappade kunder. Detta resulterade i ett lyckat tillskott i försäljningen.",
      "Som stöd till kanalstrategi implementerades konverteringsspårning och dataflöde för Meta, Google Ads och GA4 för att underlätta databaserat beslutsfattande. Som komplement till konverteringsspårning implementerades även verktyg för heatmaps och session recordings för att ytterligare stärka beslutsfattandet kring konverteringsoptimering och flöde.",
      "Förslag till konverteringsoptimering på start, produktsida och checkoutflöde samt landningssidor implementerades i linje med målsättningen baserat på data från heatmaps och sessionrecordings.",
      "Dessa insatser var en viktig del av ett större initiativ som resulterade i försäljningsrekord.",
    ],
    quote: {
      text: "Ian har kommit in i Sproud i en tillväxtfas där bolaget skalar upp sin verksamhet inte bara i e-commerce utan också inom övriga kanaler. Vi är särskilt imponerade av hur självgående, kunnig och ansvarstagande Ian är. Han har varit ett stort tillskott till teamet och hans kunskaper inom e-commerce och kommersiellt tänkande är exceptionellt. Ian har fungerat som en teammedlem från dag ett och gjort ett arbete som vi förväntar oss från en ordinarie anställd. Vi är otroligt nöjda med Ians driv, prestation och resultat. Vi vill lyfta två fantastiska egenskaper som Ian besitter och där han utmärkt sig extra mycket: 1) Pragmatisk och resultatdrivet arbetssätt – I en scale-up med högt tempo är det lätt att tappa fokus på mål och resultatuppföljning. Ian har kommit in i teamet och arbetat snabbt, arbetat självständigt och målinriktat. Han har ett internationellt team med många kontaktytor utan en satt struktur vilket ställer stora krav på eget driv och initiativtagande. Han har en stor förmåga att anpassa sig och hitta vägar för att leverera snabbt och professionellt. 2) Konvertering och försäljningsdriv – Ian har utvecklat en D2C kampanj där han arbetat utifrån en brand awareness plattform och adderat säljelement och email marketing. Genom att analysera trafik och beteende så har Ian optimerat sidan i konverteringssyfte. Den stora vinsten och lärdomen är att få dom att stanna och genomföra köp. Ians kampanj satt all time high säljrekord på vår brittiska Shopify-sida.",
      author: "Sara Berger",
      role: "VD för Sproud International AB",
    },
  },
  {
    slug: "hatthyllan",
    client: "Hatthyllan Malmö AB",
    logo:"https://images.squarespace-cdn.com/content/v1/688ba16ce11dfe11cd5d300f/c526a6ac-3716-4848-9f83-55ef767bb525/3.png?format=1500w",
    tagline: "Hattar, kepsar & mössor",
    description:
      "Hatthyllan är en anrik butik med e-handel vid Davidshallstorg i Malmö som säljer hattar, kepsar och mössor med fokus på hög kvalitet och personlig service.",
    summary:
      "Google Ads och konverteringsoptimering i Shopify – stabil och mätbar försäljning med fokus på effektivitet.",
    links: [{ label: "hatthyllan.se", href: "https://hatthyllan.se" }],
    assignment: [
      "Hatthyllan är ett varumärke med tydligt produktfokus och höga krav på att digital marknadsföring ska bidra till faktisk försäljning. Målsättningen med samarbetet var att skapa en stabil och mätbar försäljning genom digital annonsering, med fullt fokus på effektivitet, relevans och konvertering.",
      "Uppdraget omfattade planering, genomförande och löpande optimering av annonsering i Google Ads, med specifikt fokus på konverteringsoptimering genom hela köpresan i Shopify.",
      "Arbetet bedrevs med hög kostnadsmedvetenhet och strikt prioritering av effektivitet. Fokus låg på att skapa maximal effekt genom strategi, struktur och datadrivna beslut snarare än volym. Insatsen omfattade strukturering av sök-, shopping- och Performance Max-kampanjer, målgrupps- och söktermsanalys samt kontinuerlig optimering av annonser, budskap och tillgångar.",
    ],
    quote: null,
  },
];

export const KUNDCASE_BY_SLUG: Record<string, Kundcase> = Object.fromEntries(
  KUNDCASE_LIST.map((c) => [c.slug, c])
);
