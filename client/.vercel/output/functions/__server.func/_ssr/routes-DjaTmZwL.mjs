import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime, r as Slot } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as Building2, a as Search, c as Moon, d as Mail, f as Heart, g as Calendar, h as Check, i as Send, l as Menu, m as ChevronDown, n as Users, o as Plane, p as ChevronUp, r as Sparkles, s as Phone, t as X, u as MapPin, v as Bot } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjaTmZwL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_kaaba_default = "/assets/hero-kaaba-CJTfX5ee.jpg";
var iwan_default = "/assets/iwan-Dv_E2GAo.jpg";
var portrait_default = "/assets/portrait-Bd66MJTf.jpg";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
var SOCIAL_LINKS = [
	{
		label: "Facebook",
		href: "https://facebook.com",
		className: "hover:bg-[#1877F2]/15 hover:text-[#1877F2]",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
		})
	},
	{
		label: "Instagram",
		href: "https://instagram.com",
		className: "hover:bg-[#E4405F]/15 hover:text-[#E4405F]",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
		})
	},
	{
		label: "TikTok",
		href: "https://tiktok.com",
		className: "hover:bg-foreground/10 hover:text-foreground",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-4 fill-current",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" })
		})
	}
];
var QUICK_REPLIES = [
	"Quelles sont vos formules ?",
	"Prix en MAD ?",
	"Comment obtenir un devis ?",
	"Visa Omra inclus ?"
];
var WELCOME = "As-salamu alaykum ! Je suis l'assistant Omra Lumen. Posez-moi vos questions sur l'Omra, les prix, le visa ou demandez un devis.";
function getBotReply(input) {
	const q = input.toLowerCase();
	if (q.includes("formule") || q.includes("pack") || q.includes("omra")) return "Nous proposons 3 formules : Omra Sérénité (14 500 MAD, 7j), Omra Essentiel (10 900 MAD, 5j) et Omra Famille (16 800 MAD, 9j). Départs depuis Casablanca, Rabat et Marrakech.";
	if (q.includes("prix") || q.includes("mad") || q.includes("coût") || q.includes("tarif")) return "Les prix débutent à 10 900 MAD par personne (formule Essentiel). Tous nos tarifs incluent vol A/R, visa Omra et hébergement. Taxes comprises.";
	if (q.includes("devis") || q.includes("réserver") || q.includes("reserver")) return "Demandez votre devis gratuit via le formulaire en bas de page — un conseiller vous rappelle sous 24h, sans engagement.";
	if (q.includes("visa")) return "Le visa Omra est inclus dans toutes nos formules. Nous préparons votre dossier et assurons le suivi jusqu'à l'obtention.";
	if (q.includes("contact") || q.includes("téléphone") || q.includes("telephone") || q.includes("appeler")) return "Contactez-nous au +212 5 22 45 67 89 ou par e-mail à contact@omralumen.ma. Agence : 12 Bd Zerktouni, Casablanca. Lun–Sam, 9h–19h.";
	if (q.includes("hajj") || q.includes("hadj")) return "Nous organisons des départs Hajj chaque année avec quota limité. Inscrivez-vous sur liste d'attente dès janvier.";
	if (q.includes("ramadan")) return "Nos formules Ramadan vous permettent de vivre le mois sacré à La Mecque et Médine, avec un rythme adapté au jeûne et à la prière.";
	if (q.includes("famille") || q.includes("enfant")) return "La formule Omra Famille inclut chambres communicantes, garderie, activités enfants et guide dédié — à partir de 16 800 MAD.";
	if (q.includes("bonjour") || q.includes("salam") || q.includes("hello")) return "Wa alaykum salam ! Comment puis-je vous orienter aujourd'hui ? Formules, prix, visa ou devis ?";
	return "Merci pour votre message. Pour une réponse personnalisée, appelez le +212 5 22 45 67 89 ou demandez un devis gratuit sur la page.";
}
function ChatAssistant({ onNavigate, variant = "sidebar" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [input, setInput] = (0, import_react.useState)("");
	const [messages, setMessages] = (0, import_react.useState)([{
		id: 0,
		role: "bot",
		text: WELCOME
	}]);
	const listRef = (0, import_react.useRef)(null);
	const nextId = (0, import_react.useRef)(1);
	(0, import_react.useEffect)(() => {
		listRef.current?.scrollTo({
			top: listRef.current.scrollHeight,
			behavior: "smooth"
		});
	}, [messages, open]);
	const send = (text) => {
		const trimmed = text.trim();
		if (!trimmed) return;
		const userId = nextId.current++;
		const botId = nextId.current++;
		setMessages((prev) => [
			...prev,
			{
				id: userId,
				role: "user",
				text: trimmed
			},
			{
				id: botId,
				role: "bot",
				text: getBotReply(trimmed)
			}
		]);
		setInput("");
		if (trimmed.toLowerCase().includes("devis") && onNavigate) setTimeout(() => onNavigate("devis"), 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen((v) => !v),
		"aria-label": open ? "Fermer l'assistant" : "Ouvrir l'assistant Omra Lumen",
		"aria-expanded": open,
		className: "group relative flex size-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-gold via-gold-light to-gold text-primary-deep shadow-[0_8px_24px_-4px_rgba(196,163,90,0.55)] ring-2 ring-cream/30 transition-transform hover:scale-105 active:scale-95",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 scale-90 animate-ping rounded-full bg-gold/30 opacity-75 group-hover:opacity-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -inset-1 rounded-full bg-gold/20 blur-sm" }),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
				className: "relative size-5",
				strokeWidth: 2.5
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, {
				className: "relative size-5",
				strokeWidth: 2
			})
		]
	}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed z-50 flex w-[min(20rem,calc(100%-2rem))] max-w-[calc(100%-2rem)] flex-col overflow-hidden rounded-2xl border border-cream/20 bg-cream shadow-[0_24px_64px_-12px_rgba(15,35,28,0.45)] ring-1 ring-black/5", variant === "fab" ? "bottom-20 right-4" : "bottom-6 right-20"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-gradient-to-br from-primary via-primary-deep to-primary-deep px-4 py-4 text-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-gold/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-xl bg-cream/15 ring-1 ring-cream/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5 text-gold-light" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-base font-semibold",
							children: "Assistant Lumen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 text-xs text-cream/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 animate-pulse rounded-full bg-emerald-400" }), "En ligne · réponse instantanée"]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: listRef,
				className: "flex max-h-64 flex-col gap-3 overflow-y-auto px-4 py-4",
				children: messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("flex", msg.role === "user" ? "justify-end" : "justify-start"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed", msg.role === "user" ? "rounded-br-md bg-primary text-cream" : "rounded-bl-md bg-background text-foreground ring-1 ring-border/60"),
						children: msg.text
					})
				}, msg.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-border/60 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-2 flex flex-wrap gap-1.5",
					children: QUICK_REPLIES.map((reply) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => send(reply),
						className: "rounded-full bg-primary/8 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-primary transition-colors hover:bg-gold/15 hover:text-primary-deep",
						children: reply
					}, reply))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2",
					onSubmit: (e) => {
						e.preventDefault();
						send(input);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: input,
						onChange: (e) => setInput(e.target.value),
						placeholder: "Votre question…",
						className: "h-10 flex-1 rounded-xl border border-border/70 bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold/50 focus:ring-1 focus:ring-gold/30"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: !input.trim(),
						className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-cream transition-colors hover:bg-primary-deep disabled:opacity-40",
						"aria-label": "Envoyer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" })
					})]
				})]
			})
		]
	})] });
}
function FloatingSidebar({ onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden flex-col items-center gap-3 md:flex",
		"aria-label": "Réseaux sociaux et assistant",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1 rounded-l-2xl border border-r-0 border-cream/15 bg-primary-deep/92 p-2 shadow-[0_12px_40px_-8px_rgba(15,35,28,0.5)] backdrop-blur-md",
			children: [
				SOCIAL_LINKS.map(({ label, href, icon, className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": label,
					title: label,
					className: cn("flex size-10 items-center justify-center rounded-xl text-cream/75 transition-all duration-200", className),
					children: icon
				}, label)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1.5 my-0.5 h-px bg-cream/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center pb-0.5 pt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAssistant, { ...onNavigate ? { onNavigate } : {} })
				})
			]
		})
	});
}
/** Mobile-only floating social + chat */
function MobileChatFab({ onNavigate }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-4 z-40 flex flex-col items-center gap-2 overflow-hidden md:hidden",
		"aria-label": "Réseaux sociaux et assistant",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col gap-1 rounded-2xl border border-cream/15 bg-primary-deep/92 p-1.5 shadow-[0_12px_40px_-8px_rgba(15,35,28,0.5)] backdrop-blur-md",
			children: SOCIAL_LINKS.map(({ label, href, icon, className }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href,
				target: "_blank",
				rel: "noopener noreferrer",
				"aria-label": label,
				title: label,
				className: cn("flex size-9 items-center justify-center rounded-xl text-cream/75 transition-all duration-200", className),
				children: icon
			}, label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatAssistant, {
			...onNavigate ? { onNavigate } : {},
			variant: "fab"
		})]
	});
}
var STATUS_STEPS = [
	{
		at: 0,
		label: "Préparation du voyage"
	},
	{
		at: 28,
		label: "Chargement des départs"
	},
	{
		at: 58,
		label: "Sélection des formules"
	},
	{
		at: 82,
		label: "Ouverture des portes"
	},
	{
		at: 100,
		label: "Bienvenue"
	}
];
function PageLoader({ duration = 1e3, onComplete }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [exiting, setExiting] = (0, import_react.useState)(false);
	const onCompleteRef = (0, import_react.useRef)(onComplete);
	onCompleteRef.current = onComplete;
	const status = [...STATUS_STEPS].reverse().find((step) => progress >= step.at)?.label ?? STATUS_STEPS[0].label;
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "";
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			const elapsed = now - start;
			const next = Math.min(100, elapsed / duration * 100);
			setProgress(next);
			if (next < 100) frame = requestAnimationFrame(tick);
			else {
				window.setTimeout(() => setExiting(true), 60);
				window.setTimeout(() => onCompleteRef.current(), 420);
			}
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [duration]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "progressbar",
		"aria-valuenow": Math.round(progress),
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": "Chargement de la page",
		className: cn("fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-primary-deep transition-[opacity,visibility] duration-400 ease-out", exiting ? "pointer-events-none opacity-0 invisible" : "opacity-100 visible"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-1/3 size-[28rem] -translate-x-1/2 -translate-y-1/2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-full rounded-full bg-gold/10 blur-3xl loader-glow" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-[0.07]",
						style: {
							backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.965 0.014 88) 1px, transparent 0)",
							backgroundSize: "28px 28px"
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative z-10 flex w-full max-w-md flex-col items-center px-8 transition-all duration-400 ease-out", exiting ? "translate-y-6 scale-[0.98] opacity-0" : "translate-y-0 scale-100 opacity-100"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-10 flex size-24 items-center justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border border-gold/20 loader-ring-outer" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-2 rounded-full border border-gold/30 loader-ring-inner" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-4 rounded-full border-2 border-transparent border-t-gold border-r-gold/40 loader-spin" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex flex-col items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl font-semibold tracking-tight text-cream",
									children: "Omra"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[9px] uppercase tracking-[0.35em] text-gold-light",
									children: "Lumen"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-end gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-6xl font-semibold tabular-nums leading-none text-cream",
							children: Math.round(progress)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 font-mono text-sm text-gold-light",
							children: "%"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-1 w-full overflow-hidden rounded-full bg-cream/10 ring-1 ring-cream/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "loader-bar-shimmer absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold transition-[width] duration-75 ease-linear",
							style: { width: `${progress}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 min-h-[1.25rem] font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 transition-opacity duration-300",
						children: [status, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "loader-dots inline-flex w-4",
							"aria-hidden": true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-xs text-center text-sm leading-relaxed text-cream/45",
						children: "Voyages Omra encadrés · Départs Casablanca, Rabat & Marrakech"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pointer-events-none absolute inset-x-0 bottom-0 h-0 bg-background transition-[height] duration-400 ease-in-out", exiting && "h-full") })
		]
	});
}
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "item-aligned", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent$1, {
	ref,
	onCloseAutoFocus: (e) => e.preventDefault(),
	sideOffset: 4,
	collisionPadding: 16,
	className: cn("relative z-50 min-w-[var(--radix-select-trigger-width)] max-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md", position === "popper" && "w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-0 data-[side=top]:translate-y-0", className),
	position,
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
		className: cn("w-full max-w-full p-1"),
		children
	})
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var HERO_OMRA_NIGHT_VIDEO = "/videos/hero-omra-night.mp4";
var CITIES = [
	"Toutes",
	"Casablanca",
	"Rabat",
	"Marrakech"
];
var MONTHS = [
	"Tous",
	"Octobre 2026",
	"Novembre 2026",
	"Décembre 2026"
];
var TRAVELERS = [
	"2 personnes",
	"1 personne",
	"3 personnes",
	"4 personnes"
];
function formatMad(amount) {
	return `${amount.toLocaleString("fr-MA")} MAD`;
}
var DEPARTURES = [
	{
		id: "serenite",
		city: "Casablanca",
		date: "25 oct",
		month: "Octobre 2026",
		duration: "7 jours",
		name: "Omra Sérénité",
		description: "Formule premium pour vivre l'Omra dans le calme, avec un encadrement discret et raffiné.",
		priceMad: 14500,
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
			"Accès lounge aéroport"
		],
		highlights: [
			"Premium",
			"Visa inclus",
			"5★ Haram"
		],
		spotsLeft: 6
	},
	{
		id: "essentiel",
		city: "Rabat",
		date: "18 nov",
		month: "Novembre 2026",
		duration: "5 jours",
		name: "Omra Essentiel",
		description: "Le meilleur rapport qualité-prix : confort, proximité du Haram et accompagnement complet.",
		priceMad: 10900,
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
			"Rappel des rituels pas à pas"
		],
		highlights: [
			"Meilleur prix",
			"Visa inclus",
			"4★ Haram"
		],
		spotsLeft: 3,
		featured: true,
		badge: "Choix"
	},
	{
		id: "famille",
		city: "Marrakech",
		date: "2 déc",
		month: "Décembre 2026",
		duration: "9 jours",
		name: "Omra Famille",
		description: "Pensée pour les familles : chambres spacieuses, rythme adapté et activités pour les enfants.",
		priceMad: 16800,
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
			"Briefing famille avant départ"
		],
		highlights: [
			"Famille",
			"Garderie",
			"5★"
		],
		spotsLeft: 8
	}
];
var NAV_LINKS = [
	{
		label: "OMRA",
		href: "#departs"
	},
	{
		label: "RAMADAN",
		href: "#services"
	},
	{
		label: "HAJJ",
		href: "#services"
	},
	{
		label: "VOLS",
		href: "#services"
	},
	{
		label: "GROUPES",
		href: "#services"
	},
	{
		label: "LABBAIKA",
		href: "#services"
	},
	{
		label: "CONTACT",
		href: "#contact"
	}
];
var SERVICES = [
	{
		icon: Moon,
		title: "Omra",
		description: "Formules encadrées toute l'année, hôtels proches du Haram et guide francophone.",
		tag: "Départs réguliers"
	},
	{
		icon: Sparkles,
		title: "Ramadan",
		description: "Vivez le mois sacré à La Mecque et Médine, avec un rythme adapté à la prière et au jeûne.",
		tag: "Programme spirituel"
	},
	{
		icon: Building2,
		title: "Hajj",
		description: "Accompagnement complet pour le pèlerinage majeur : visa, logistique et encadrement religieux.",
		tag: "Places limitées"
	},
	{
		icon: Plane,
		title: "Vols",
		description: "Billets A/R depuis Casablanca, Rabat ou Marrakech, avec assistance à l'aéroport.",
		tag: "Meilleurs tarifs"
	},
	{
		icon: Users,
		title: "Groupes",
		description: "Voyages sur mesure pour associations, mosquées et familles — de 10 à 40 pèlerins.",
		tag: "Devis groupé"
	},
	{
		icon: Heart,
		title: "Labbaika",
		description: "Formule premium tout inclus : suites vue Haram, concierge et accompagnement VIP.",
		tag: "Expérience exclusive"
	}
];
var STATS = [
	{
		value: "2 400+",
		label: "Pèlerins accompagnés"
	},
	{
		value: "12 ans",
		label: "D'expérience"
	},
	{
		value: "98 %",
		label: "Clients satisfaits"
	},
	{
		value: "3",
		label: "Villes de départ"
	}
];
var TESTIMONIALS = [
	{
		quote: "Nous avons vécu une Omra en toute paix. L'encadrement était d'une discrétion rare, et chaque détail était anticipé.",
		name: "Fatima R.",
		detail: "Départ Rabat · novembre 2025",
		image: portrait_default
	},
	{
		quote: "Notre groupe de quinze personnes a été parfaitement organisé. Hôtel, transferts, ziyarat — tout était fluide.",
		name: "Ahmed B.",
		detail: "Groupe Casablanca · octobre 2025",
		image: portrait_default
	},
	{
		quote: "Première Omra en famille avec trois enfants. Les chambres communicantes et la garderie nous ont vraiment rassurés.",
		name: "Khadija M.",
		detail: "Départ Marrakech · décembre 2025",
		image: portrait_default
	}
];
var FAQS = [
	{
		q: "Faut-il un visa pour l'Arabie Saoudite ?",
		a: "Oui, le visa Omra est obligatoire. Nous nous chargeons de toute la démarche dans le cadre de votre formule : dossier, frais consulaires et suivi jusqu'à l'obtention."
	},
	{
		q: "Quelle est la meilleure période pour partir ?",
		a: "L'Omra est possible toute l'éannée. Les mois de mars à novembre offrent un climat plus doux. Le Ramadan et les vacances scolaires sont très demandés — réservez à l'avance."
	},
	{
		q: "Puis-je voyager seul, en couple ou en famille ?",
		a: "Absolument. Nous proposons des formules individuelles, en couple et familiales. Chaque départ est limité à vingt pèlerins pour préserver la qualité de l'accompagnement."
	},
	{
		q: "Les femmes peuvent-elles voyager sans mahram ?",
		a: "Oui, depuis 2019, les femmes de plus de 45 ans ou voyageant en groupe encadré peuvent effectuer l'Omra sans tuteur masculin. Notre équipe vous conseille selon votre situation."
	},
	{
		q: "Que comprend le prix affiché ?",
		a: "Vol A/R, visa Omra, hébergement, transferts aéroport-hôtel, guide francophone et les prestations listées dans chaque formule. Les taxes et l'assurance voyage sont incluses."
	},
	{
		q: "Comment se déroule le paiement ?",
		a: "Un acompte de 30 % confirme votre réservation. Le solde est payable jusqu'à 15 jours avant le départ. Paiement par virement, espèces ou chèque dans nos agences."
	},
	{
		q: "Proposez-vous des formules Hajj ?",
		a: "Oui, nous organisons des départs Hajj chaque année avec un quota limité. Inscrivez-vous sur liste d'attente dès janvier pour garantir votre place."
	},
	{
		q: "Que faire en cas d'annulation ?",
		a: "Les conditions d'annulation varient selon la proximité du départ. Un conseiller vous transmet le détail lors de la réservation. Une assurance annulation est disponible en option."
	}
];
var FOOTER_LINKS = {
	formules: [
		{
			label: "Omra Sérénité",
			href: "#departs"
		},
		{
			label: "Omra Essentiel",
			href: "#departs"
		},
		{
			label: "Omra Famille",
			href: "#departs"
		},
		{
			label: "Formule Labbaika",
			href: "#services"
		},
		{
			label: "Hajj",
			href: "#services"
		}
	],
	infos: [
		{
			label: "Notre parcours",
			href: "#etapes"
		},
		{
			label: "Nos services",
			href: "#services"
		},
		{
			label: "Témoignages",
			href: "#temoignages"
		},
		{
			label: "FAQ",
			href: "#faqs"
		},
		{
			label: "Demander un devis",
			href: "#devis"
		}
	],
	legal: [
		{
			label: "Mentions légales",
			href: "#"
		},
		{
			label: "Politique de confidentialité",
			href: "#"
		},
		{
			label: "Conditions générales",
			href: "#"
		},
		{
			label: "Assurance voyage",
			href: "#"
		}
	]
};
function Index() {
	const [city, setCity] = (0, import_react.useState)(CITIES[0]);
	const [month, setMonth] = (0, import_react.useState)(MONTHS[0]);
	const [travelers, setTravelers] = (0, import_react.useState)(TRAVELERS[0]);
	const [searched, setSearched] = (0, import_react.useState)(false);
	const [openFaq, setOpenFaq] = (0, import_react.useState)(0);
	const [devisSent, setDevisSent] = (0, import_react.useState)(false);
	const [headerScrolled, setHeaderScrolled] = (0, import_react.useState)(false);
	const [pageLoading, setPageLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setHeaderScrolled(window.scrollY > 32);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const results = (0, import_react.useMemo)(() => {
		if (!searched) return DEPARTURES;
		return DEPARTURES.filter((d) => (city === "Toutes" || d.city === city) && (month === "Tous" || d.month === month));
	}, [
		city,
		month,
		searched
	]);
	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [pageLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoader, {
		duration: 1e3,
		onComplete: () => setPageLoading(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-x-clip font-body bg-background text-foreground antialiased transition-opacity duration-300", pageLoading ? "opacity-0" : "opacity-100"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {
				scrolled: headerScrolled,
				onNavigate: scrollTo
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingSidebar, { onNavigate: scrollTo }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileChatFab, { onNavigate: scrollTo }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative -mt-20 min-h-screen overflow-x-clip pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							className: "absolute inset-0 h-full w-full object-cover",
							src: HERO_OMRA_NIGHT_VIDEO,
							poster: hero_kaaba_default,
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							preload: "auto",
							"aria-label": "Vidéo nocturne de pèlerins autour de la Kaaba à La Mecque"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 lg:min-h-[calc(100vh-4rem)] lg:pb-24 lg:pt-36",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "animate-rise mb-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-light ring-1 ring-cream/15 backdrop-blur-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-gold-light" }), "Omra sous les étoiles"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "animate-rise-delayed font-display text-4xl font-semibold leading-[1.08] text-balance text-cream drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-[3.25rem]",
										children: "La Kaaba illuminée, dans la quiétude de la nuit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "animate-rise-late mt-5 max-w-md text-pretty text-base leading-relaxed text-cream/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]",
										children: "Départs encadrés depuis le Maroc — guide francophone, hôtels proches du Haram et sérénité à chaque instant."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "animate-rise-late mt-8 hidden flex-wrap gap-3 sm:flex",
										children: [
											["3", "villes de départ"],
											["4", "formules"],
											["24h", "devis gratuit"]
										].map(([val, lbl]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl bg-cream/10 px-4 py-2.5 ring-1 ring-cream/15 backdrop-blur-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-xl font-semibold text-gold-light",
												children: val
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-mono text-[9px] uppercase tracking-[0.1em] text-cream/80",
												children: lbl
											})]
										}, lbl))
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "animate-rise-late w-full lg:max-w-md lg:justify-self-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl bg-cream p-4 shadow-[0_16px_48px_-12px_rgba(15,35,28,0.35)] ring-1 ring-black/8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 flex items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-lg font-semibold text-primary",
											children: "Votre départ"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Recherche rapide"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-gold/12 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-gold",
											children: "Omra 2026"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
												label: "Départ",
												icon: MapPin,
												value: city,
												options: CITIES,
												onChange: setCity,
												compact: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
												label: "Mois",
												icon: Calendar,
												value: month,
												options: MONTHS,
												onChange: setMonth,
												compact: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchField, {
												label: "Voyageurs",
												icon: Users,
												value: travelers,
												options: TRAVELERS,
												onChange: setTravelers,
												compact: true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												size: "lg",
												onClick: () => {
													setSearched(true);
													scrollTo("departs");
												},
												className: "mt-1 h-11 w-full rounded-xl bg-primary text-cream shadow-sm hover:bg-primary-deep",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), "Rechercher un départ"]
											})
										]
									})]
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "depart",
				className: "pt-8 pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex items-end justify-between gap-6 border-b border-border pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold",
							children: "Pourquoi Omra Lumen"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl font-semibold text-balance text-primary md:text-5xl",
							children: [
								"Une hospitalité",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"au service du recueillement"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-xs text-pretty text-sm text-muted-foreground md:block",
							children: "Chaque détail est choisi pour vous épargner la logistique, jamais l'émotion."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 md:grid-cols-3",
						children: [
							[
								"(a)",
								"Vols directs",
								"Départs à l'aube, escales maîtrisées, hôtels à moins de dix minutes de la Mosquée."
							],
							[
								"(b)",
								"Guide francophone",
								"Un accompagnateur présent du vol d'aller au vol de retour, disponible à tout moment."
							],
							[
								"(c)",
								"Formules sur mesure",
								"Confort, sérénité ou famille : ajustez la durée, le rythme et le niveau d'encadrement."
							]
						].map(([tag, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-cream p-6 ring-1 ring-black/5 transition-colors hover:ring-gold/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-xs text-gold",
									children: tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl font-semibold text-foreground",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-pretty text-sm text-muted-foreground",
									children: text
								})
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "departs",
				className: "bg-primary-deep py-20 text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex items-end justify-between gap-6 border-b border-cream/15 pb-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-light",
							children: "Départs & calendrier"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold text-balance md:text-5xl",
							children: searched ? "Résultats de votre recherche" : "Prochains départs"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hidden max-w-xs text-pretty text-sm text-cream/60 md:block",
							children: "Taille limitée à vingt pèlerins par départ, pour préserver la quiétude du groupe."
						})]
					}), results.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-cream/60",
						children: [
							"Aucun départ ne correspond à ces critères.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollTo("devis"),
								className: "text-gold-light underline underline-offset-4",
								children: "Demandez un devis sur mesure"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-5 md:grid-cols-3",
						children: results.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepartureCard, {
							d,
							onCta: () => scrollTo("devis")
						}, d.id))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "services",
				className: "border-y border-border bg-cream py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold",
								children: "Nos formules"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl font-semibold text-balance text-primary md:text-5xl",
								children: "Un voyage pour chaque intention"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-4 max-w-2xl text-pretty text-sm text-muted-foreground",
								children: "Omra, Ramadan, Hajj ou vols seuls — chaque formule est pensée pour vous accompagner dans la sérénité."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: SERVICES.map(({ icon: Icon, title, description, tag }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group rounded-2xl bg-background p-6 ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:ring-gold/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gold/15 group-hover:text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-5",
											strokeWidth: 1.75
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[10px] uppercase tracking-[0.12em] text-gold",
										children: tag
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl font-semibold text-foreground",
									children: title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-pretty text-sm text-muted-foreground",
									children: description
								})
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-primary py-14 text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4",
					children: STATS.map(({ value, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl font-semibold text-gold-light md:text-5xl",
							children: value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/60",
							children: label
						})]
					}, label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "etapes",
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 items-center gap-12 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: iwan_default,
							alt: "Cour de mosquée avec arcs en plein cintre au coucher du soleil",
							width: 1024,
							height: 1280,
							loading: "lazy",
							className: "aspect-[4/5] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold",
								children: "Le parcours"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl font-semibold text-balance text-primary md:text-5xl",
								children: "Quatre temps, un seul fil"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 space-y-6",
								children: [
									[
										"(01)",
										"Consultation",
										"Un échange gratuit pour caler vos dates, votre budget et vos attentes."
									],
									[
										"(02)",
										"Préparation",
										"Papiers, santé et rituels expliqués pas à pas, en toute sérénité."
									],
									[
										"(03)",
										"Le voyage",
										"Accompagnement de bout en bout, dans le calme et la dignité."
									],
									[
										"(04)",
										"Retour",
										"Debrief et suivi après le voyage, pour prolonger le recueillement."
									]
								].map(([num, title, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-10 shrink-0 font-display text-2xl font-semibold text-gold",
										children: num
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-foreground",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-pretty text-sm text-muted-foreground",
										children: text
									})] })]
								}, num))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollTo("devis"),
								className: "mt-8 inline-block text-sm font-medium text-primary transition-colors hover:text-gold",
								children: "Commencer ma consultation →"
							})
						] })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "temoignages",
				className: "bg-cream py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold",
							children: "Ils nous ont fait confiance"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold text-balance text-primary md:text-5xl",
							children: "Des voix de pèlerins"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 md:grid-cols-3",
						children: TESTIMONIALS.map(({ quote, name, detail, image }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex flex-col rounded-2xl bg-background p-6 ring-1 ring-black/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-4xl leading-none text-gold/50",
									children: "\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "-mt-2 flex-1 text-pretty text-sm leading-relaxed text-foreground/90",
									children: quote
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
									className: "mt-6 flex items-center gap-3 border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: image,
										alt: `Portrait de ${name}`,
										width: 512,
										height: 512,
										loading: "lazy",
										className: "size-10 rounded-full object-cover outline-1 -outline-offset-1 outline-black/5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold text-foreground",
										children: name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: detail
									})] })]
								})
							]
						}, name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "faqs",
				className: "py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold",
								children: "Questions fréquentes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl font-semibold text-balance text-primary md:text-5xl",
								children: "Tout ce que vous devez savoir"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-sm text-pretty text-sm text-muted-foreground",
								children: "Visa, paiement, annulation, formules familiales — retrouvez les réponses aux questions les plus posées."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-2xl bg-cream p-6 ring-1 ring-black/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.15em] text-gold",
										children: "Besoin d'aide ?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Notre équipe répond sous 24h, du lundi au samedi."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => scrollTo("contact"),
										className: "mt-4 text-sm font-medium text-primary transition-colors hover:text-gold",
										children: "Nous contacter →"
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border lg:border-t-0",
							children: FAQS.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-b border-border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setOpenFaq(openFaq === i ? null : i),
									className: "flex w-full items-center justify-between gap-4 py-5 text-left",
									"aria-expanded": openFaq === i,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-foreground",
										children: f.q
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `size-4 shrink-0 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}` })]
								}), openFaq === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "pb-5 text-pretty text-sm leading-relaxed text-muted-foreground",
									children: f.a
								})]
							}, f.q))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "contact",
				className: "border-y border-border bg-cream py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-4xl font-semibold text-balance text-primary md:text-5xl",
							children: "Parlons de votre projet"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-6 md:grid-cols-3",
						children: [
							{
								icon: Phone,
								title: "Téléphone",
								lines: ["+212 5 22 45 67 89", "Lun–Sam · 9h–19h"]
							},
							{
								icon: Mail,
								title: "E-mail",
								lines: ["contact@omralumen.ma", "Réponse sous 24h"]
							},
							{
								icon: MapPin,
								title: "Agence",
								lines: ["12 Bd Zerktouni, Casablanca", "Sur rendez-vous"]
							}
						].map(({ icon: Icon, title, lines }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-background p-6 text-center ring-1 ring-black/5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-auto flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl font-semibold text-foreground",
									children: title
								}),
								lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: line
								}, line))
							]
						}, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "devis",
				className: "relative overflow-hidden bg-primary-deep py-20 text-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gold-light/20 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid items-center gap-10 overflow-hidden rounded-3xl bg-cream/5 p-8 ring-1 ring-cream/10 backdrop-blur-xl md:grid-cols-2 md:p-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute left-0 top-0 h-px w-32 bg-gradient-to-r from-gold to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold-light",
									children: "Devis gratuit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-4xl font-semibold text-balance md:text-5xl",
									children: [
										"Recevez une proposition",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"sur mesure sous 24h"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-sm text-pretty text-sm text-cream/70",
									children: "Sans engagement. Un conseiller vous recontacte pour construire le voyage qui vous ressemble."
								})
							] }),
							devisSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-cream/10 p-8 text-center ring-1 ring-gold/30",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-semibold text-gold-light",
									children: "Demande envoyée"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-cream/70",
									children: "Merci ! Un conseiller Omra Lumen vous recontacte sous 24h."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "space-y-3",
								onSubmit: (e) => {
									e.preventDefault();
									setDevisSent(true);
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										required: true,
										placeholder: "Votre nom",
										className: "w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold/60"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "Ville de départ",
											className: "w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold/60"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: 1,
											placeholder: "Voyageurs",
											className: "w-full rounded-xl border border-cream/15 bg-cream/10 px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold/60"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "w-full rounded-xl bg-gold py-3.5 text-sm font-semibold text-primary-deep transition-colors hover:bg-gold-light",
										children: "Recevoir mon devis"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-[11px] text-cream/40",
										children: "Réponse en 24h · sans engagement"
									})
								]
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "bg-primary-deep text-cream/70",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 pt-16 pb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 md:grid-cols-2 lg:grid-cols-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-2xl font-semibold text-cream",
											children: "Omra"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold-light",
											children: "Lumen"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 max-w-xs text-pretty text-sm leading-relaxed text-cream/60",
										children: "Voyages Omra, Ramadan et Hajj encadrés depuis le Maroc. Hôtels proches du Haram, guide francophone et accompagnement sur mesure."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-3",
										children: [
											"Instagram",
											"Facebook",
											"WhatsApp"
										].map((network) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#",
											className: "rounded-full border border-cream/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-cream/70 transition-colors hover:border-gold/40 hover:text-gold-light",
											children: network
										}, network))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light",
								children: "Formules"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: FOOTER_LINKS.formules.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									onClick: (e) => {
										if (href.startsWith("#") && href.length > 1) {
											e.preventDefault();
											scrollTo(href.slice(1));
										}
									},
									className: "text-sm transition-colors hover:text-gold-light",
									children: label
								}) }, label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light",
								children: "Informations"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-2.5",
								children: FOOTER_LINKS.infos.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									onClick: (e) => {
										if (href.startsWith("#") && href.length > 1) {
											e.preventDefault();
											scrollTo(href.slice(1));
										}
									},
									className: "text-sm transition-colors hover:text-gold-light",
									children: label
								}) }, label))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light",
								children: "Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-gold-light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"12 Bd Zerktouni",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Casablanca, Maroc"
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-gold-light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+212522456789",
											className: "transition-colors hover:text-gold-light",
											children: "+212 5 22 45 67 89"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-gold-light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:contact@omralumen.ma",
											className: "transition-colors hover:text-gold-light",
											children: "contact@omralumen.ma"
										})]
									})
								]
							})] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-between gap-4 md:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-cream/45",
							children: "© 2026 Omra Lumen. Tous droits réservés."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-5 text-xs",
							children: FOOTER_LINKS.legal.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								className: "transition-colors hover:text-gold-light",
								children: label
							}, label))
						})]
					})]
				})
			})
		]
	})] });
}
function SiteHeader({ scrolled, onNavigate }) {
	const handleNav = (href) => {
		if (href.startsWith("#") && href.length > 1) onNavigate(href.slice(1));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out", scrolled ? "border-b border-border/50 bg-cream/92 py-0 shadow-[0_8px_32px_-8px_rgba(15,35,28,0.12)] backdrop-blur-xl" : "border-b border-cream/10 bg-gradient-to-b from-primary-deep/55 via-primary-deep/20 to-transparent py-1 backdrop-blur-[2px]"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:h-[4.5rem]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "group flex items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-display text-2xl font-semibold tracking-tight transition-colors duration-300", scrolled ? "text-primary" : "text-cream"),
						children: "Omra"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300", scrolled ? "text-gold" : "text-gold-light"),
						children: "Lumen"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: NAV_LINKS.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						onClick: (e) => {
							if (href.startsWith("#") && href.length > 1) {
								e.preventDefault();
								handleNav(href);
							}
						},
						className: cn("relative rounded-full px-3.5 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300", scrolled ? "text-foreground/75 hover:bg-primary/5 hover:text-primary" : "text-cream/75 hover:bg-cream/10 hover:text-cream"),
						children: label
					}, label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => onNavigate("devis"),
						size: "sm",
						className: cn("hidden rounded-full px-5 transition-all duration-300 sm:inline-flex", scrolled ? "bg-primary text-cream shadow-sm hover:bg-primary-deep" : "border border-cream/25 bg-cream/10 text-cream shadow-none backdrop-blur-md hover:bg-cream/20"),
						children: "Demander un devis"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: cn("rounded-full lg:hidden", scrolled ? "text-primary hover:bg-primary/10" : "text-cream hover:bg-cream/15 hover:text-cream"),
							"aria-label": "Ouvrir le menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						className: "border-border bg-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, {
								className: "flex items-baseline gap-2 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl font-semibold text-primary",
									children: "Omra"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold",
									children: "Lumen"
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "mt-8 flex flex-col gap-1",
								children: NAV_LINKS.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									onClick: (e) => {
										if (href.startsWith("#") && href.length > 1) {
											e.preventDefault();
											handleNav(href);
										}
									},
									className: "rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:bg-primary/5 hover:text-primary",
									children: label
								}, label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => onNavigate("devis"),
								className: "mt-6 w-full rounded-full bg-primary text-cream hover:bg-primary-deep",
								children: "Demander un devis"
							})
						]
					})] })]
				})
			]
		})
	});
}
function SearchField({ label, icon: Icon, value, options, onChange, bordered, compact }) {
	if (compact) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-3 text-gold",
				strokeWidth: 2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value,
			onValueChange: onChange,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "h-10 w-full rounded-lg border-border/60 bg-background/80 px-3 text-sm font-medium shadow-none focus:ring-gold/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: `Choisir ${label.toLowerCase()}` })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				className: "z-[100] overflow-hidden rounded-xl border-border/80 bg-cream shadow-lg",
				children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option,
					className: "cursor-pointer rounded-lg py-2 focus:bg-gold/10 focus:text-primary",
					children: option
				}, option))
			})]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex flex-col gap-2 p-4 sm:p-5 ${bordered ? "lg:border-r lg:border-border/60" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-3.5 text-gold",
				strokeWidth: 2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value,
			onValueChange: onChange,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				className: "h-11 w-full rounded-xl border-border/70 bg-background/60 px-3.5 text-sm font-medium shadow-none transition-colors hover:bg-background focus:ring-gold/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: `Choisir ${label.toLowerCase()}` })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				className: "z-[100] overflow-hidden rounded-xl border-border/80 bg-cream shadow-lg",
				children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: option,
					className: "cursor-pointer rounded-lg py-2.5 focus:bg-gold/10 focus:text-primary",
					children: option
				}, option))
			})]
		})]
	});
}
function DepartureCard({ d, onCta }) {
	const featured = d.featured === true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: featured ? "flex flex-col rounded-2xl bg-cream p-6 text-foreground ring-1 ring-black/5 transition-colors hover:ring-gold/50" : "flex flex-col rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 backdrop-blur-sm transition-colors hover:ring-gold/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: featured ? "font-mono text-[10px] uppercase tracking-[0.2em] text-gold" : "font-mono text-[10px] uppercase tracking-[0.2em] text-gold-light",
					children: [
						d.city,
						" · ",
						d.date
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: featured ? "font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground" : "font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50",
					children: d.duration
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-semibold",
					children: d.name
				}), d.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "shrink-0 rounded-full bg-gold/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-gold",
					children: d.badge
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: featured ? "mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground" : "mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-cream/55",
				children: [
					d.hotel,
					" · ",
					"★".repeat(d.stars),
					" · ",
					d.distance
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: featured ? "mt-3 text-pretty text-sm text-muted-foreground" : "mt-3 text-pretty text-sm text-cream/70",
				children: d.description
			}),
			d.highlights && d.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-1.5",
				children: d.highlights.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: featured ? "rounded-full bg-primary/8 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-primary" : "rounded-full bg-cream/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-gold-light",
					children: tag
				}, tag))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: featured ? "mb-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-gold" : "mb-2.5 font-mono text-[9px] uppercase tracking-[0.15em] text-gold-light",
					children: "Inclus dans la formule"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-1.5",
					children: d.inclusions.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-2 text-xs leading-snug",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: featured ? "mt-0.5 size-3.5 shrink-0 text-gold" : "mt-0.5 size-3.5 shrink-0 text-gold-light",
							strokeWidth: 2.5
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: featured ? "text-foreground/85" : "text-cream/75",
							children: item
						})]
					}, item))
				})]
			}),
			d.spotsLeft !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: featured ? "mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-gold" : "mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-gold-light",
				children: [d.spotsLeft, " places restantes"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: featured ? "mt-auto flex items-end justify-between border-t border-border pt-5" : "mt-auto flex items-end justify-between border-t border-cream/10 pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: featured ? "font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground" : "font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50",
						children: "à partir de"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: featured ? "font-display text-3xl font-semibold text-primary" : "font-display text-3xl font-semibold text-gold-light",
						children: formatMad(d.priceMad)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: featured ? "text-[10px] text-muted-foreground" : "text-[10px] text-cream/45",
						children: "par personne · taxes incluses"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onCta,
					className: featured ? "text-sm font-medium text-primary transition-colors hover:text-gold" : "text-sm font-medium text-cream transition-colors hover:text-gold-light",
					children: "Voir le départ"
				})]
			})
		]
	});
}
//#endregion
export { Index as component };
