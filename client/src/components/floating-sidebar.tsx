import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = { id: number; role: "bot" | "user"; text: string };

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    className: "hover:bg-[#1877F2]/15 hover:text-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    className: "hover:bg-[#E4405F]/15 hover:text-[#E4405F]",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    className: "hover:bg-foreground/10 hover:text-foreground",
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
      </svg>
    ),
  },
] as const;

const QUICK_REPLIES = [
  "Quelles sont vos formules ?",
  "Prix en MAD ?",
  "Comment obtenir un devis ?",
  "Visa Omra inclus ?",
] as const;

const WELCOME =
  "As-salamu alaykum ! Je suis l'assistant Omra Lumen. Posez-moi vos questions sur l'Omra, les prix, le visa ou demandez un devis.";

function getBotReply(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("formule") || q.includes("pack") || q.includes("omra"))
    return "Nous proposons 3 formules : Omra Sérénité (14 500 MAD, 7j), Omra Essentiel (10 900 MAD, 5j) et Omra Famille (16 800 MAD, 9j). Départs depuis Casablanca, Rabat et Marrakech.";

  if (q.includes("prix") || q.includes("mad") || q.includes("coût") || q.includes("tarif"))
    return "Les prix débutent à 10 900 MAD par personne (formule Essentiel). Tous nos tarifs incluent vol A/R, visa Omra et hébergement. Taxes comprises.";

  if (q.includes("devis") || q.includes("réserver") || q.includes("reserver"))
    return "Demandez votre devis gratuit via le formulaire en bas de page — un conseiller vous rappelle sous 24h, sans engagement.";

  if (q.includes("visa"))
    return "Le visa Omra est inclus dans toutes nos formules. Nous préparons votre dossier et assurons le suivi jusqu'à l'obtention.";

  if (q.includes("contact") || q.includes("téléphone") || q.includes("telephone") || q.includes("appeler"))
    return "Contactez-nous au +212 5 22 45 67 89 ou par e-mail à contact@omralumen.ma. Agence : 12 Bd Zerktouni, Casablanca. Lun–Sam, 9h–19h.";

  if (q.includes("hajj") || q.includes("hadj"))
    return "Nous organisons des départs Hajj chaque année avec quota limité. Inscrivez-vous sur liste d'attente dès janvier.";

  if (q.includes("ramadan"))
    return "Nos formules Ramadan vous permettent de vivre le mois sacré à La Mecque et Médine, avec un rythme adapté au jeûne et à la prière.";

  if (q.includes("famille") || q.includes("enfant"))
    return "La formule Omra Famille inclut chambres communicantes, garderie, activités enfants et guide dédié — à partir de 16 800 MAD.";

  if (q.includes("bonjour") || q.includes("salam") || q.includes("hello"))
    return "Wa alaykum salam ! Comment puis-je vous orienter aujourd'hui ? Formules, prix, visa ou devis ?";

  return "Merci pour votre message. Pour une réponse personnalisée, appelez le +212 5 22 45 67 89 ou demandez un devis gratuit sur la page.";
}

function ChatAssistant({
  onNavigate,
  variant = "sidebar",
}: {
  onNavigate?: ((id: string) => void) | undefined;
  variant?: "sidebar" | "fab";
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "bot", text: WELCOME }]);
  const listRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userId = nextId.current++;
    const botId = nextId.current++;

    setMessages((prev) => [
      ...prev,
      { id: userId, role: "user", text: trimmed },
      { id: botId, role: "bot", text: getBotReply(trimmed) },
    ]);
    setInput("");

    if (trimmed.toLowerCase().includes("devis") && onNavigate) {
      setTimeout(() => onNavigate("devis"), 800);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant Omra Lumen"}
        aria-expanded={open}
        className="group relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-gold via-gold-light to-gold text-primary-deep shadow-[0_8px_24px_-4px_rgba(196,163,90,0.55)] ring-2 ring-cream/30 transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 scale-90 animate-ping rounded-full bg-gold/30 opacity-75 group-hover:opacity-0" />
        <span className="absolute -inset-1 rounded-full bg-gold/20 blur-sm" />
        {open ? <X className="relative size-5" strokeWidth={2.5} /> : <Bot className="relative size-5" strokeWidth={2} />}
      </button>

      {open && (
        <div
          className={cn(
            "fixed z-50 flex w-[min(20rem,calc(100%-2rem))] max-w-[calc(100%-2rem)] flex-col overflow-hidden rounded-2xl border border-cream/20 bg-cream shadow-[0_24px_64px_-12px_rgba(15,35,28,0.45)] ring-1 ring-black/5",
            variant === "fab" ? "bottom-20 right-4" : "bottom-6 right-20",
          )}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-deep to-primary-deep px-4 py-4 text-cream">
            <div className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-cream/15 ring-1 ring-cream/20">
                <Sparkles className="size-5 text-gold-light" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-semibold">Assistant Lumen</p>
                <p className="flex items-center gap-1.5 text-xs text-cream/70">
                  <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
                  En ligne · réponse instantanée
                </p>
              </div>
            </div>
          </div>

          <div ref={listRef} className="flex max-h-64 flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
              >
                <p
                  className={cn(
                    "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "rounded-br-md bg-primary text-cream"
                      : "rounded-bl-md bg-background text-foreground ring-1 ring-border/60",
                  )}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border/60 px-3 py-2">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  type="button"
                  onClick={() => send(reply)}
                  className="rounded-full bg-primary/8 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-primary transition-colors hover:bg-gold/15 hover:text-primary-deep"
                >
                  {reply}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Votre question…"
                className="h-10 flex-1 rounded-xl border border-border/70 bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-cream transition-colors hover:bg-primary-deep disabled:opacity-40"
                aria-label="Envoyer"
              >
                <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export function FloatingSidebar({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <aside
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden flex-col items-center gap-3 md:flex"
      aria-label="Réseaux sociaux et assistant"
    >
      <div className="flex flex-col gap-1 rounded-l-2xl border border-r-0 border-cream/15 bg-primary-deep/92 p-2 shadow-[0_12px_40px_-8px_rgba(15,35,28,0.5)] backdrop-blur-md">
        {SOCIAL_LINKS.map(({ label, href, icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={cn(
              "flex size-10 items-center justify-center rounded-xl text-cream/75 transition-all duration-200",
              className,
            )}
          >
            {icon}
          </a>
        ))}

        <div className="mx-1.5 my-0.5 h-px bg-cream/15" />

        <div className="flex justify-center pb-0.5 pt-1">
          <ChatAssistant {...(onNavigate ? { onNavigate } : {})} />
        </div>
      </div>
    </aside>
  );
}

/** Mobile-only floating social + chat */
export function MobileChatFab({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div
      className="fixed bottom-6 right-4 z-40 flex flex-col items-center gap-2 overflow-hidden md:hidden"
      aria-label="Réseaux sociaux et assistant"
    >
      <div className="flex flex-col gap-1 rounded-2xl border border-cream/15 bg-primary-deep/92 p-1.5 shadow-[0_12px_40px_-8px_rgba(15,35,28,0.5)] backdrop-blur-md">
        {SOCIAL_LINKS.map(({ label, href, icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={cn(
              "flex size-9 items-center justify-center rounded-xl text-cream/75 transition-all duration-200",
              className,
            )}
          >
            {icon}
          </a>
        ))}
      </div>
      <ChatAssistant {...(onNavigate ? { onNavigate } : {})} variant="fab" />
    </div>
  );
}
