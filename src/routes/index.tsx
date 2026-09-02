import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroKaaba from "@/assets/hero-kaaba.jpg";
import iwan from "@/assets/iwan.jpg";
import portrait from "@/assets/portrait.jpg";

const CITIES = ["Toutes", "Paris", "Lyon", "Marseille"];
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
  price: string;
  featured?: boolean;
  badge?: string;
};

const DEPARTURES: Departure[] = [
  {
    id: "serenite",
    city: "Paris",
    date: "25 oct",
    month: "Octobre 2026",
    duration: "7 jours",
    name: "Omra Sérénité",
    description: "Hôtel cinq étoiles, guide dédié, repas du soir inclus.",
    price: "1 290 €",
  },
  {
    id: "essentiel",
    city: "Lyon",
    date: "18 nov",
    month: "Novembre 2026",
    duration: "5 jours",
    name: "Omra Essentiel",
    description: "L'équilibre idéal entre confort et budget, hôtel quatre étoiles.",
    price: "980 €",
    featured: true,
    badge: "Choix",
  },
  {
    id: "famille",
    city: "Marseille",
    date: "2 déc",
    month: "Décembre 2026",
    duration: "9 jours",
    name: "Omra Famille",
    description: "Chambres communicantes, garderie et programmes adaptés aux enfants.",
    price: "1 540 €",
  },
];

const FAQS = [
  { q: "Faut-il un visa pour l'Arabie Saoudite ?", a: "Nous nous en chargeons" },
  { q: "Quelle est la période la plus recommandée ?", a: "De mars à novembre" },
  { q: "Puis-je voyager seul ou en couple ?", a: "Oui, formules individuelles" },
  { q: "Les femmes peuvent-elles voyager sans tuteur ?", a: "Oui, depuis 2019" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omra Lumen — Voyages Omra encadrés au départ de France" },
      {
        name: "description",
        content:
          "Omra Lumen organise des départs Omra encadrés depuis Paris, Lyon et Marseille : hôtels proches du Haram, guide francophone, devis gratuit sous 24h.",
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
  const [city, setCity] = useState(CITIES[0]);
  const [month, setMonth] = useState(MONTHS[0]);
  const [travelers, setTravelers] = useState(TRAVELERS[0]);
  const [searched, setSearched] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [devisSent, setDevisSent] = useState(false);

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
    <div className="font-body bg-background text-foreground antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-cream/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-primary">Omra</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Lumen</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-foreground/80 md:flex">
            <button onClick={() => scrollTo("depart")} className="transition-colors hover:text-primary">Départs</button>
            <button onClick={() => scrollTo("etapes")} className="transition-colors hover:text-primary">Étapes</button>
            <button onClick={() => scrollTo("faqs")} className="transition-colors hover:text-primary">Conseils</button>
          </nav>
          <button
            onClick={() => scrollTo("devis")}
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-cream ring-1 ring-black/5 transition-colors hover:bg-primary-deep"
          >
            Demander un devis
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="relative h-[78vh] min-h-[560px] overflow-hidden">
          <img
            src={heroKaaba}
            alt="La Kaaba à La Mecque à l'heure dorée, minarets illuminés"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gold-light/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gold-light/25 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-deep/30 via-transparent to-cream/55" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
        </div>

        <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-6 pb-40">
          <div className="max-w-2xl">
            <p className="animate-rise mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-light">
              L'Omra, du seuil au seuil
            </p>
            <h1 className="animate-rise-delayed font-display text-5xl font-semibold leading-[1.05] text-balance text-cream md:text-6xl">
              Le seuil d'un sanctuaire, baigné de lumière dorée
            </h1>
            <p className="animate-rise-late mt-5 max-w-lg text-pretty text-cream/85">
              Des départs encadrés, des compagnes spirituelles et un voyage pensé dans le calme, de la Mosquée du Prophète à la Maison.
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="relative z-10 mx-auto -mt-24 max-w-5xl px-6">
          <div className="relative flex flex-col items-stretch gap-2 overflow-hidden rounded-2xl bg-cream/85 p-2.5 ring-1 ring-black/5 backdrop-blur-xl sm:flex-row">
            <span className="pointer-events-none absolute bottom-2 left-6 hidden h-px w-16 bg-gradient-to-r from-gold to-transparent sm:block" />
            <SearchField label="Départ" value={city} options={CITIES} onChange={setCity} bordered />
            <SearchField label="Mois" value={month} options={MONTHS} onChange={setMonth} bordered />
            <SearchField label="Voyageurs" value={travelers} options={TRAVELERS} onChange={setTravelers} />
            <button
              onClick={() => {
                setSearched(true);
                scrollTo("departs");
              }}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-primary-deep"
            >
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section id="depart" className="py-20">
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

      {/* TÉMOIGNAGE */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="block font-display text-6xl leading-none text-gold/60">“</span>
          <p className="-mt-6 font-display text-3xl font-medium italic leading-snug text-balance text-primary md:text-4xl">
            Nous avons vécu une Omra en toute paix. L'encadrement était d'une discrétion rare, et chaque détail était anticipé.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img
              src={portrait}
              alt="Portrait de Fatima R., pèlerine"
              width={512}
              height={512}
              loading="lazy"
              className="size-12 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Fatima R.</p>
              <p className="text-xs text-muted-foreground">Départ Lyon · novembre 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faqs" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-3 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-gold">Questions fréquentes</p>
          <h2 className="mb-12 text-center font-display text-4xl font-semibold text-balance text-primary md:text-5xl">
            Tout ce que vous devez savoir
          </h2>
          <div className="border-t border-border">
            {FAQS.map((f, i) => (
              <div key={f.q} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-foreground">{f.q}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{openFaq === i ? "Fermer ↑" : "Voir →"}</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm text-muted-foreground">{f.a} — notre équipe vous accompagne sur toutes les démarches.</p>
                )}
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
      <footer className="border-t border-cream/10 bg-primary-deep text-cream/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold text-cream">Omra</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-light">Lumen</span>
          </div>
          <div className="flex gap-6 text-xs">
            <a href="#" className="transition-colors hover:text-gold-light">Mentions</a>
            <a href="#" className="transition-colors hover:text-gold-light">Confidentialité</a>
            <a href="#" className="transition-colors hover:text-gold-light">Contact</a>
          </div>
          <p className="text-xs">© 2026 Omra Lumen — Paris</p>
        </div>
      </footer>
    </div>
  );
}

function SearchField({
  label,
  value,
  options,
  onChange,
  bordered,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  bordered?: boolean;
}) {
  return (
    <label className={`flex flex-1 items-center gap-3 px-4 py-3 ${bordered ? "sm:border-r sm:border-border" : ""}`}>
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer bg-transparent text-sm font-medium text-foreground outline-none"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function DepartureCard({ d, onCta }: { d: Departure; onCta: () => void }) {
  if (d.featured) {
    return (
      <article className="rounded-2xl bg-cream p-6 text-foreground ring-1 ring-black/5 transition-colors hover:ring-gold/50">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">{d.city} · {d.date}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{d.duration}</span>
        </div>
        <div className="mt-4 flex items-start justify-between">
          <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
          {d.badge && (
            <span className="shrink-0 rounded-full bg-gold/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-gold">{d.badge}</span>
          )}
        </div>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">{d.description}</p>
        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">à partir de</span>
            <div className="font-display text-3xl font-semibold text-primary">{d.price}</div>
          </div>
          <button onClick={onCta} className="text-sm font-medium text-primary transition-colors hover:text-gold">Voir le départ</button>
        </div>
      </article>
    );
  }
  return (
    <article className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 backdrop-blur-sm transition-colors hover:ring-gold/50">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light">{d.city} · {d.date}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50">{d.duration}</span>
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold">{d.name}</h3>
      <p className="mt-2 text-pretty text-sm text-cream/70">{d.description}</p>
      <div className="mt-5 flex items-end justify-between border-t border-cream/10 pt-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50">à partir de</span>
          <div className="font-display text-3xl font-semibold text-gold-light">{d.price}</div>
        </div>
        <button onClick={onCta} className="text-sm font-medium text-cream transition-colors hover:text-gold-light">Voir le départ</button>
      </div>
    </article>
  );
}
