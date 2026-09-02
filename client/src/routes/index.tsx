import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ComponentType } from "react";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import iwan from "@/assets/iwan.jpg";
import portrait from "@/assets/portrait.jpg";
import { Check, ChevronDown, Mail, MapPin, Phone, Plane, Users, Moon, Building2, Sparkles, Heart, Calendar, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { FloatingSidebar, MobileChatFab } from "@/components/floating-sidebar";
import { PageLoader } from "@/components/page-loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HERO_OMRA_NIGHT_VIDEO = "/videos/hero-omra-night.mp4";

const CITIES = ["Toutes", "Casablanca", "Rabat", "Marrakech"];
const MONTHS = ["Tous", "Octobre 2026", "Novembre 2026", "Décembre 2026"];
const TRAVELERS = ["2 personnes", "1 personne", "3 personnes", "4 personnes"];

type Departure = {
  id: string;
  city: string;
  date: string;
  month: string;
  duration: string;
  name: string;
  description: string;
  priceMad: number;
  hotel: string;
  stars: number;
  distance: string;
  inclusions: string[];
  highlights?: string[];
  spotsLeft?: number;
  featured?: boolean;
  badge?: string;
};

function formatMad(amount: number) {
  return `${amount.toLocaleString("fr-MA")} MAD`;
}

const DEPARTURES: Departure[] = [
  {
    id: "serenite",
    city: "Casablanca",
    date: "25 oct",
    month: "Octobre 2026",
    duration: "7 jours",
    name: "Omra Sérénité",
    description: "Formule premium pour vivre l'Omra dans le calme, avec un encadrement discret et raffiné.",
    priceMad: 14_500,
    hotel: "Pullman Zamzam",
    stars: 5,
    distance: "300 m du Haram",
    inclusions: [
      "Vol A/R depuis Casablanca",
      "Visa Omra & assurance inclus",
      "Guide francophone dédié",
      "Hôtel 5★ à 300 m du Haram",
      "Petit-déjeuner & dîner",
      "Ziyarat Médine (3 sites sacrés)",
      "Navette Haram 24h/24",
      "Kit pèlerin (ihram, guide & tasbih)",
      "Conférence pré-départ avec imam",
      "Assistance médicale 24h/24",
      "SIM card locale incluse",
      "Accès lounge aéroport",
    ],
    highlights: ["Premium", "Visa inclus", "5★ Haram"],
    spotsLeft: 6,
  },
  {
    id: "essentiel",
    city: "Rabat",
    date: "18 nov",
    month: "Novembre 2026",
    duration: "5 jours",
    name: "Omra Essentiel",
    description: "Le meilleur rapport qualité-prix : confort, proximité du Haram et accompagnement complet.",
    priceMad: 10_900,
    hotel: "Anjum Hotel",
    stars: 4,
    distance: "Vue sur le Haram",
    inclusions: [
      "Vol A/R depuis Rabat",
      "Visa Omra inclus",
      "Hôtel 4★ proche du Haram",
      "Guide francophone",
      "Ziyarat essentielle à Médine",
      "Transferts aéroport & hôtel",
      "Petit-déjeuner inclus",
      "Assurance voyage incluse",
      "Conférence pré-départ en ligne",
      "Carte SIM & Wi-Fi hôtel",
      "Support WhatsApp 24h/24",
      "Rappel des rituels pas à pas",
    ],
    highlights: ["Meilleur prix", "Visa inclus", "4★ Haram"],
    spotsLeft: 3,
    featured: true,
    badge: "Choix",
  },
  {
    id: "famille",
    city: "Marrakech",
    date: "2 déc",
    month: "Décembre 2026",
    duration: "9 jours",
    name: "Omra Famille",
    description: "Pensée pour les familles : chambres spacieuses, rythme adapté et activités pour les enfants.",
    priceMad: 16_800,
    hotel: "Mövenpick Hajar Tower",
    stars: 5,
    distance: "Chambres familiales",
    inclusions: [
      "Vol A/R depuis Marrakech",
      "Visa Omra pour toute la famille",
      "Hôtel 5★ chambres familiales",
      "Chambres communicantes",
      "Garderie & activités enfants",
      "Guide famille francophone",
      "Ziyarat étendue (Médine & Taif)",
      "Repas adaptés & collation",
      "Menu enfant & chaise haute",
      "Puériculture à l'hôtel",
      "Assurance famille incluse",
      "Photos souvenir offertes",
      "Briefing famille avant départ",
    ],
    highlights: ["Famille", "Garderie", "5★"],
    spotsLeft: 8,
  },
];

const NAV_LINKS = [
  { label: "OMRA", href: "#departs" },
  { label: "RAMADAN", href: "#services" },
  { label: "HAJJ", href: "#services" },
  { label: "VOLS", href: "#services" },
  { label: "GROUPES", href: "#services" },
  { label: "LABBAIKA", href: "#services" },
  { label: "CONTACT", href: "#contact" },
] as const;

const SERVICES = [
  {
    icon: Moon,
    title: "Omra",
    description: "Formules encadrées toute l'année, hôtels proches du Haram et guide francophone.",
    tag: "Départs réguliers",
  },
  {
    icon: Sparkles,
    title: "Ramadan",
    description: "Vivez le mois sacré à La Mecque et Médine, avec un rythme adapté à la prière et au jeûne.",
    tag: "Programme spirituel",
  },
  {
    icon: Building2,
    title: "Hajj",
    description: "Accompagnement complet pour le pèlerinage majeur : visa, logistique et encadrement religieux.",
    tag: "Places limitées",
  },
  {
    icon: Plane,
    title: "Vols",
    description: "Billets A/R depuis Casablanca, Rabat ou Marrakech, avec assistance à l'aéroport.",
    tag: "Meilleurs tarifs",
  },
  {
    icon: Users,
    title: "Groupes",
    description: "Voyages sur mesure pour associations, mosquées et familles — de 10 à 40 pèlerins.",
    tag: "Devis groupé",
  },
  {
    icon: Heart,
    title: "Labbaika",
    description: "Formule premium tout inclus : suites vue Haram, concierge et accompagnement VIP.",
    tag: "Expérience exclusive",
  },
] as const;

const STATS = [
  { value: "2 400+", label: "Pèlerins accompagnés" },
  { value: "12 ans", label: "D'expérience" },
  { value: "98 %", label: "Clients satisfaits" },
  { value: "3", label: "Villes de départ" },
] as const;

const TESTIMONIALS = [
  {
    quote: "Nous avons vécu une Omra en toute paix. L'encadrement était d'une discrétion rare, et chaque détail était anticipé.",
    name: "Fatima R.",
    detail: "Départ Rabat · novembre 2025",
    image: portrait,
  },
  {
    quote: "Notre groupe de quinze personnes a été parfaitement organisé. Hôtel, transferts, ziyarat — tout était fluide.",
    name: "Ahmed B.",
    detail: "Groupe Casablanca · octobre 2025",
    image: portrait,
  },
  {
    quote: "Première Omra en famille avec trois enfants. Les chambres communicantes et la garderie nous ont vraiment rassurés.",
    name: "Khadija M.",
    detail: "Départ Marrakech · décembre 2025",
    image: portrait,
  },
] as const;

const FAQS = [
  {
    q: "Faut-il un visa pour l'Arabie Saoudite ?",
    a: "Oui, le visa Omra est obligatoire. Nous nous chargeons de toute la démarche dans le cadre de votre formule : dossier, frais consulaires et suivi jusqu'à l'obtention.",
  },
  {
    q: "Quelle est la meilleure période pour partir ?",
    a: "L'Omra est possible toute l'éannée. Les mois de mars à novembre offrent un climat plus doux. Le Ramadan et les vacances scolaires sont très demandés — réservez à l'avance.",
  },
  {
    q: "Puis-je voyager seul, en couple ou en famille ?",
    a: "Absolument. Nous proposons des formules individuelles, en couple et familiales. Chaque départ est limité à vingt pèlerins pour préserver la qualité de l'accompagnement.",
  },
  {
    q: "Les femmes peuvent-elles voyager sans mahram ?",
    a: "Oui, depuis 2019, les femmes de plus de 45 ans ou voyageant en groupe encadré peuvent effectuer l'Omra sans tuteur masculin. Notre équipe vous conseille selon votre situation.",
  },
  {
    q: "Que comprend le prix affiché ?",
    a: "Vol A/R, visa Omra, hébergement, transferts aéroport-hôtel, guide francophone et les prestations listées dans chaque formule. Les taxes et l'assurance voyage sont incluses.",
  },
  {
    q: "Comment se déroule le paiement ?",
    a: "Un acompte de 30 % confirme votre réservation. Le solde est payable jusqu'à 15 jours avant le départ. Paiement par virement, espèces ou chèque dans nos agences.",
  },
  {
    q: "Proposez-vous des formules Hajj ?",
    a: "Oui, nous organisons des départs Hajj chaque année avec un quota limité. Inscrivez-vous sur liste d'attente dès janvier pour garantir votre place.",
  },
  {
    q: "Que faire en cas d'annulation ?",
    a: "Les conditions d'annulation varient selon la proximité du départ. Un conseiller vous transmet le détail lors de la réservation. Une assurance annulation est disponible en option.",
  },
] as const;

const FOOTER_LINKS = {
  formules: [
    { label: "Omra Sérénité", href: "#departs" },
    { label: "Omra Essentiel", href: "#departs" },
    { label: "Omra Famille", href: "#departs" },
    { label: "Formule Labbaika", href: "#services" },
    { label: "Hajj", href: "#services" },
  ],
  infos: [
    { label: "Notre parcours", href: "#etapes" },
    { label: "Nos services", href: "#services" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faqs" },
    { label: "Demander un devis", href: "#devis" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Conditions générales", href: "#" },
    { label: "Assurance voyage", href: "#" },
  ],
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omra Lumen — Voyages Omra encadrés au départ de France" },
      {
        name: "description",
        content:
          "Omra Lumen organise des départs Omra encadrés depuis Casablanca, Rabat et Marrakech : hôtels proches du Haram, guide francophone, devis gratuit sous 24h.",
      },
      { property: "og:title", content: "Omra Lumen — Voyages Omra encadrés au départ de France" },
      {
        property: "og:description",
        content:
          "Départs Omra encadrés, hôtels proches du Haram, guide francophone. Demandez votre devis gratuit sous 24h.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [city, setCity] = useState<string>(CITIES[0]!);
  const [month, setMonth] = useState<string>(MONTHS[0]!);
  const [travelers, setTravelers] = useState<string>(TRAVELERS[0]!);
  const [searched, setSearched] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [devisSent, setDevisSent] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const results = useMemo(() => {
    if (!searched) return DEPARTURES;
    return DEPARTURES.filter(
      (d) =>
        (city === "Toutes" || d.city === city) &&
        (month === "Tous" || d.month === month),
    );
  }, [city, month, searched]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {pageLoading && <PageLoader duration={1000} onComplete={() => setPageLoading(false)} />}

      <div
        className={cn(
          "overflow-x-clip font-body bg-background text-foreground antialiased transition-opacity duration-300",
          pageLoading ? "opacity-0" : "opacity-100",
        )}
      >
      <SiteHeader scrolled={headerScrolled} onNavigate={scrollTo} />
      <FloatingSidebar onNavigate={scrollTo} />
      <MobileChatFab onNavigate={scrollTo} />

      {/* HERO */}
      <section className="relative -mt-20 min-h-screen overflow-x-clip pt-20">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={HERO_OMRA_NIGHT_VIDEO}
            poster={heroKaaba}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Vidéo nocturne de pèlerins autour de la Kaaba à La Mecque"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 lg:min-h-[calc(100vh-4rem)] lg:pb-24 lg:pt-36">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Copy */}
            <div className="max-w-xl">
              <p className="animate-rise mb-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-light ring-1 ring-cream/15 backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-gold-light" />
                Omra sous les étoiles
              </p>
              <h1 className="animate-rise-delayed font-display text-4xl font-semibold leading-[1.08] text-balance text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[3.25rem]">
                La Kaaba illuminée, dans la quiétude de la nuit
              </h1>
              <p className="animate-rise-late mt-5 max-w-md text-pretty text-base leading-relaxed text-cream/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
                Départs encadrés depuis le Maroc — guide francophone, hôtels proches du Haram et sérénité à chaque instant.
              </p>
              <div className="animate-rise-late mt-8 hidden flex-wrap gap-3 sm:flex">
                {[
                  ["3", "villes de départ"],
                  ["4", "formules"],
                  ["24h", "devis gratuit"],
                ].map(([val, lbl]) => (
                  <div
                    key={lbl}
                    className="rounded-xl bg-cream/10 px-4 py-2.5 ring-1 ring-cream/15 backdrop-blur-sm"
                  >
                    <p className="font-display text-xl font-semibold text-gold-light">{val}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-cream/80">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Search */}
            <div className="animate-rise-late w-full lg:max-w-md lg:justify-self-end">
              <div className="rounded-2xl bg-cream p-4 shadow-[0_16px_48px_-12px_rgba(15,35,28,0.35)] ring-1 ring-black/8">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold text-primary">Votre départ</p>
                    <p className="text-xs text-muted-foreground">Recherche rapide</p>
                  </div>
                  <span className="rounded-full bg-gold/12 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-gold">
                    Omra 2026
                  </span>
                </div>

                <div className="space-y-3">
                  <SearchField label="Départ" icon={MapPin} value={city} options={CITIES} onChange={setCity} compact />
                  <SearchField label="Mois" icon={Calendar} value={month} options={MONTHS} onChange={setMonth} compact />
                  <SearchField label="Voyageurs" icon={Users} value={travelers} options={TRAVELERS} onChange={setTravelers} compact />
                  <Button
                    size="lg"
                    onClick={() => {
                      setSearched(true);
                      scrollTo("departs");
                    }}
                    className="mt-1 h-11 w-full rounded-xl bg-primary text-cream shadow-sm hover:bg-primary-deep"
                  >
                    <Search className="size-4" />
                    Rechercher un départ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* AVANTAGES */}
      <section id="depart" className="pt-8 pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Pourquoi Omra Lumen</p>
              <h2 className="font-display text-4xl font-semibold text-balance text-primary md:text-5xl">
                Une hospitalité<br />au service du recueillement
              </h2>
            </div>
            <p className="hidden max-w-xs text-pretty text-sm text-muted-foreground md:block">
              Chaque détail est choisi pour vous épargner la logistique, jamais l'émotion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["(a)", "Vols directs", "Départs à l'aube, escales maîtrisées, hôtels à moins de dix minutes de la Mosquée."],
              ["(b)", "Guide francophone", "Un accompagnateur présent du vol d'aller au vol de retour, disponible à tout moment."],
              ["(c)", "Formules sur mesure", "Confort, sérénité ou famille : ajustez la durée, le rythme et le niveau d'encadrement."],
            ].map(([tag, title, text]) => (
              <div key={title} className="rounded-2xl bg-cream p-6 ring-1 ring-black/5 transition-colors hover:ring-gold/40">
                <span className="font-mono text-xs text-gold">{tag}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉPARTS */}
      <section id="departs" className="bg-primary-deep py-20 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-cream/15 pb-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-light">Départs &amp; calendrier</p>
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                {searched ? "Résultats de votre recherche" : "Prochains départs"}
              </h2>
            </div>
            <p className="hidden max-w-xs text-pretty text-sm text-cream/60 md:block">
              Taille limitée à vingt pèlerins par départ, pour préserver la quiétude du groupe.
            </p>
          </div>
          {results.length === 0 ? (
            <p className="text-sm text-cream/60">
              Aucun départ ne correspond à ces critères.{" "}
              <button onClick={() => scrollTo("devis")} className="text-gold-light underline underline-offset-4">
                Demandez un devis sur mesure
              </button>
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {results.map((d) => (
                <DepartureCard key={d.id} d={d} onCta={() => scrollTo("devis")} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y border-border bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Nos formules</p>
            <h2 className="font-display text-4xl font-semibold text-balance text-primary md:text-5xl">
              Un voyage pour chaque intention
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground">
              Omra, Ramadan, Hajj ou vols seuls — chaque formule est pensée pour vous accompagner dans la sérénité.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, description, tag }) => (
              <article
                key={title}
                className="group rounded-2xl bg-background p-6 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:ring-gold/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gold">{tag}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-pretty text-sm text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary py-14 text-cream">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {STATS.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl font-semibold text-gold-light md:text-5xl">{value}</p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/60">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ÉTAPES */}
      <section id="etapes" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <img
              src={iwan}
              alt="Cour de mosquée avec arcs en plein cintre au coucher du soleil"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Le parcours</p>
              <h2 className="font-display text-4xl font-semibold text-balance text-primary md:text-5xl">Quatre temps, un seul fil</h2>
              <div className="mt-8 space-y-6">
                {[
                  ["(01)", "Consultation", "Un échange gratuit pour caler vos dates, votre budget et vos attentes."],
                  ["(02)", "Préparation", "Papiers, santé et rituels expliqués pas à pas, en toute sérénité."],
                  ["(03)", "Le voyage", "Accompagnement de bout en bout, dans le calme et la dignité."],
                  ["(04)", "Retour", "Debrief et suivi après le voyage, pour prolonger le recueillement."],
                ].map(([num, title, text]) => (
                  <div key={num} className="flex gap-4">
                    <span className="w-10 shrink-0 font-display text-2xl font-semibold text-gold">{num}</span>
                    <div>
                      <h3 className="font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-pretty text-sm text-muted-foreground">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo("devis")} className="mt-8 inline-block text-sm font-medium text-primary transition-colors hover:text-gold">
                Commencer ma consultation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section id="temoignages" className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Ils nous ont fait confiance</p>
            <h2 className="font-display text-4xl font-semibold text-balance text-primary md:text-5xl">
              Des voix de pèlerins
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, detail, image }) => (
              <blockquote
                key={name}
                className="flex flex-col rounded-2xl bg-background p-6 ring-1 ring-black/5"
              >
                <span className="font-display text-4xl leading-none text-gold/50">"</span>
                <p className="-mt-2 flex-1 text-pretty text-sm leading-relaxed text-foreground/90">{quote}</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <img
                    src={image}
                    alt={`Portrait de ${name}`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{detail}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Questions fréquentes</p>
              <h2 className="font-display text-4xl font-semibold text-balance text-primary md:text-5xl">
                Tout ce que vous devez savoir
              </h2>
              <p className="mt-4 max-w-sm text-pretty text-sm text-muted-foreground">
                Visa, paiement, annulation, formules familiales — retrouvez les réponses aux questions les plus posées.
              </p>
              <div className="mt-8 rounded-2xl bg-cream p-6 ring-1 ring-black/5">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold">Besoin d'aide ?</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Notre équipe répond sous 24h, du lundi au samedi.
                </p>
                <button
                  onClick={() => scrollTo("contact")}
                  className="mt-4 text-sm font-medium text-primary transition-colors hover:text-gold"
                >
                  Nous contacter →
                </button>
              </div>
            </div>
            <div className="border-t border-border lg:border-t-0">
              {FAQS.map((f, i) => (
                <div key={f.q} className="border-b border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-medium text-foreground">{f.q}</span>
                    <ChevronDown
                      className={`size-4 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="pb-5 text-pretty text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-y border-border bg-cream py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Contact</p>
            <h2 className="font-display text-4xl font-semibold text-balance text-primary md:text-5xl">
              Parlons de votre projet
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Téléphone",
                lines: ["+212 5 22 45 67 89", "Lun–Sam · 9h–19h"],
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: ["contact@omralumen.ma", "Réponse sous 24h"],
              },
              {
                icon: MapPin,
                title: "Agence",
                lines: ["12 Bd Zerktouni, Casablanca", "Sur rendez-vous"],
              },
            ].map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="rounded-2xl bg-background p-6 text-center ring-1 ring-black/5"
              >
                <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{title}</h3>
                {lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVIS */}
      <section id="devis" className="relative overflow-hidden bg-primary-deep py-20 text-cream">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gold-light/20 to-transparent" />
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-cream/5 p-8 ring-1 ring-cream/10 backdrop-blur-xl md:grid-cols-2 md:p-12">
            <span className="pointer-events-none absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-gold to-transparent" />
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-light">Devis gratuit</p>
              <h2 className="font-display text-4xl font-semibold text-balance md:text-5xl">
                Recevez une proposition<br />sur mesure sous 24h
              </h2>
              <p className="mt-4 max-w-sm text-pretty text-sm text-cream/70">
                Sans engagement. Un conseiller vous recontacte pour construire le voyage qui vous ressemble.
              </p>
            </div>
            {devisSent ? (
              <div className="rounded-2xl bg-cream/10 p-8 text-center ring-1 ring-gold/30">
                <p className="font-display text-2xl font-semibold text-gold-light">Demande envoyée</p>
                <p className="mt-2 text-sm text-cream/70">
                  Merci ! Un conseiller Omra Lumen vous recontacte sous 24h.
                </p>
              </div>
            ) : (
              <form
                className="space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDevisSent(true);
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  className="w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold/60"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Ville de départ"
                    className="w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold/60"
                  />
                  <input
                    type="number"
                    min={1}
                    placeholder="Voyageurs"
                    className="w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold/60"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gold py-3.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-gold-light"
                >
                  Recevoir mon devis
                </button>
                <p className="text-center text-[11px] text-cream/40">Réponse en 24h · sans engagement</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary-deep text-cream/70">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-cream">Omra</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-light">Lumen</span>
              </div>
              <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-cream/60">
                Voyages Omra, Ramadan et Hajj encadrés depuis le Maroc. Hôtels proches du Haram, guide francophone et accompagnement sur mesure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Instagram", "Facebook", "WhatsApp"].map((network) => (
                  <a
                    key={network}
                    href="#"
                    className="rounded-full border border-cream/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-cream/70 transition-colors hover:border-gold/40 hover:text-gold-light"
                  >
                    {network}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">Formules</h3>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.formules.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => {
                        if (href.startsWith("#") && href.length > 1) {
                          e.preventDefault();
                          scrollTo(href.slice(1));
                        }
                      }}
                      className="text-sm transition-colors hover:text-gold-light"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">Informations</h3>
              <ul className="mt-4 space-y-2.5">
                {FOOTER_LINKS.infos.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={(e) => {
                        if (href.startsWith("#") && href.length > 1) {
                          e.preventDefault();
                          scrollTo(href.slice(1));
                        }
                      }}
                      className="text-sm transition-colors hover:text-gold-light"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold-light" />
                  <span>12 Bd Zerktouni<br />Casablanca, Maroc</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-gold-light" />
                  <a href="tel:+212522456789" className="transition-colors hover:text-gold-light">
                    +212 5 22 45 67 89
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-4 shrink-0 text-gold-light" />
                  <a href="mailto:contact@omralumen.ma" className="transition-colors hover:text-gold-light">
                    contact@omralumen.ma
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-cream/45">© 2026 Omra Lumen. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-5 text-xs">
              {FOOTER_LINKS.legal.map(({ label, href }) => (
                <a key={label} href={href} className="transition-colors hover:text-gold-light">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

function SiteHeader({
  scrolled,
  onNavigate,
}: {
  scrolled: boolean;
  onNavigate: (id: string) => void;
}) {
  const handleNav = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      onNavigate(href.slice(1));
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
        scrolled
          ? "border-b border-border/50 bg-cream/92 py-0 shadow-[0_8px_32px_-8px_rgba(15,35,28,0.12)] backdrop-blur-xl"
          : "border-b border-cream/10 bg-gradient-to-b from-primary-deep/55 via-primary-deep/20 to-transparent py-1 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:h-[4.5rem]">
        <a href="#" className="group flex items-baseline gap-2">
          <span
            className={cn(
              "font-display text-2xl font-semibold tracking-tight transition-colors duration-300",
              scrolled ? "text-primary" : "text-cream",
            )}
          >
            Omra
          </span>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300",
              scrolled ? "text-gold" : "text-gold-light",
            )}
          >
            Lumen
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                if (href.startsWith("#") && href.length > 1) {
                  e.preventDefault();
                  handleNav(href);
                }
              }}
              className={cn(
                "relative rounded-full px-3.5 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300",
                scrolled
                  ? "text-foreground/75 hover:bg-primary/5 hover:text-primary"
                  : "text-cream/75 hover:bg-cream/10 hover:text-cream",
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => onNavigate("devis")}
            size="sm"
            className={cn(
              "hidden rounded-full px-5 transition-all duration-300 sm:inline-flex",
              scrolled
                ? "bg-primary text-cream shadow-sm hover:bg-primary-deep"
                : "border border-cream/25 bg-cream/10 text-cream shadow-none backdrop-blur-md hover:bg-cream/20",
            )}
          >
            Demander un devis
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full lg:hidden",
                  scrolled
                    ? "text-primary hover:bg-primary/10"
                    : "text-cream hover:bg-cream/15 hover:text-cream",
                )}
                aria-label="Ouvrir le menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-border bg-cream">
              <SheetHeader>
                <SheetTitle className="flex items-baseline gap-2 text-left">
                  <span className="font-display text-xl font-semibold text-primary">Omra</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Lumen</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => {
                      if (href.startsWith("#") && href.length > 1) {
                        e.preventDefault();
                        handleNav(href);
                      }
                    }}
                    className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <Button
                onClick={() => onNavigate("devis")}
                className="mt-6 w-full rounded-full bg-primary text-cream hover:bg-primary-deep"
              >
                Demander un devis
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SearchField({
  label,
  icon: Icon,
  value,
  options,
  onChange,
  bordered,
  compact,
}: {
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  bordered?: boolean;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <Icon className="size-3 text-gold" strokeWidth={2} />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        </div>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="h-10 w-full rounded-lg border-border/60 bg-background/80 px-3 text-sm font-medium shadow-none focus:ring-gold/30">
            <SelectValue placeholder={`Choisir ${label.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent className="z-[100] overflow-hidden rounded-xl border-border/80 bg-cream shadow-lg">
            {options.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="cursor-pointer rounded-lg py-2 focus:bg-gold/10 focus:text-primary"
              >
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-2 p-4 sm:p-5 ${bordered ? "lg:border-r lg:border-border/60" : ""}`}
    >
      <div className="flex items-center gap-2">
        <Icon className="size-3.5 text-gold" strokeWidth={2} />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      </div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-11 w-full rounded-xl border-border/70 bg-background/60 px-3.5 text-sm font-medium shadow-none transition-colors hover:bg-background focus:ring-gold/30">
          <SelectValue placeholder={`Choisir ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent className="z-[100] overflow-hidden rounded-xl border-border/80 bg-cream shadow-lg">
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option}
              className="cursor-pointer rounded-lg py-2.5 focus:bg-gold/10 focus:text-primary"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function DepartureCard({ d, onCta }: { d: Departure; onCta: () => void }) {
  const featured = d.featured === true;

  return (
    <article
      className={
        featured
          ? "flex flex-col rounded-2xl bg-cream p-6 text-foreground ring-1 ring-black/5 transition-colors hover:ring-gold/50"
          : "flex flex-col rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 backdrop-blur-sm transition-colors hover:ring-gold/50"
      }
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={
            featured
              ? "font-mono text-[10px] uppercase tracking-[0.2em] text-gold"
              : "font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light"
          }
        >
          {d.city} · {d.date}
        </span>
        <span
          className={
            featured
              ? "font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
              : "font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50"
          }
        >
          {d.duration}
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
        {d.badge && (
          <span className="shrink-0 rounded-full bg-gold/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-gold">
            {d.badge}
          </span>
        )}
      </div>

      <p
        className={
          featured
            ? "mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
            : "mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cream/55"
        }
      >
        {d.hotel} · {"★".repeat(d.stars)} · {d.distance}
      </p>

      <p className={featured ? "mt-3 text-pretty text-sm text-muted-foreground" : "mt-3 text-pretty text-sm text-cream/70"}>
        {d.description}
      </p>

      {d.highlights && d.highlights.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {d.highlights.map((tag) => (
            <span
              key={tag}
              className={
                featured
                  ? "rounded-full bg-primary/8 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-primary"
                  : "rounded-full bg-cream/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-gold-light"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4">
        <p
          className={
            featured
              ? "mb-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-gold"
              : "mb-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-gold-light"
          }
        >
          Inclus dans la formule
        </p>
        <ul className="space-y-1.5">
          {d.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs leading-snug">
              <Check
                className={featured ? "mt-0.5 size-3.5 shrink-0 text-gold" : "mt-0.5 size-3.5 shrink-0 text-gold-light"}
                strokeWidth={2.5}
              />
              <span className={featured ? "text-foreground/85" : "text-cream/75"}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {d.spotsLeft !== undefined && (
        <p
          className={
            featured
              ? "mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-gold"
              : "mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-gold-light"
          }
        >
          {d.spotsLeft} places restantes
        </p>
      )}

      <div
        className={
          featured
            ? "mt-auto flex items-end justify-between border-t border-border pt-5"
            : "mt-auto flex items-end justify-between border-t border-cream/10 pt-5"
        }
      >
        <div>
          <span
            className={
              featured
                ? "font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
                : "font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50"
            }
          >
            à partir de
          </span>
          <div className={featured ? "font-display text-3xl font-semibold text-primary" : "font-display text-3xl font-semibold text-gold-light"}>
            {formatMad(d.priceMad)}
          </div>
          <span className={featured ? "text-[10px] text-muted-foreground" : "text-[10px] text-cream/45"}>
            par personne · taxes incluses
          </span>
        </div>
        <button
          onClick={onCta}
          className={
            featured
              ? "text-sm font-medium text-primary transition-colors hover:text-gold"
              : "text-sm font-medium text-cream transition-colors hover:text-gold-light"
          }
        >
          Voir le départ
        </button>
      </div>
    </article>
  );
}
