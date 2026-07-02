import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Zap,
  Smile,
  ShieldCheck,
  HeartPulse,
  Baby,
  Stethoscope,
} from "lucide-react";
import logoAsset from "@/assets/trimax_dent_logo.webp.asset.json";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import clinic4 from "@/assets/clinic-4.jpg";
import sarandaImg from "@/assets/saranda.jpg";
import svcSmile from "@/assets/smile_design.webp.asset.json";
import svcVeneers from "@/assets/veneers_whitening.webp.asset.json";
import svcImplant from "@/assets/implants.webp.asset.json";
import svcOrtho from "@/assets/orthodontics.webp.asset.json";
import svcRestorative from "@/assets/restorative.webp.asset.json";
import svcFamily from "@/assets/family_care.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trimax Dent Clinic — Boutique Dental Care in Saranda, Albania" },
      {
        name: "description",
        content:
          "Boutique dental clinic in Saranda, Albania. Implants, veneers, smile design, orthodontics & family care. English & Italian spoken. Book your visit.",
      },
      { property: "og:title", content: "Trimax Dent Clinic — Boutique Dental Care in Saranda" },
      {
        property: "og:description",
        content:
          "Modern clinical precision meets Mediterranean warmth. Implants, veneers & smile design in central Saranda, Albania.",
      },
      { property: "og:image", content: clinic2 },
      { name: "twitter:image", content: clinic2 },
    ],
  }),
  component: HomePage,
});

const INK = "#3D2B1F";
const IVORY = "#F5F0E8";
const AMBER = "#D97706";

const trustWords = [
  "5.0 Google Reviews",
  "10+ Years of Practice",
  "English & Italian Spoken",
  "Digital Smile Design",
  "Central Saranda",
  "Family & Aesthetic Care",
];

const services = [
  { title: "Smile Design", img: svcSmile.url, blurb: "Digitally planned, hand-finished smiles tailored to your face.", icon: Sparkles },
  { title: "Veneers & Whitening", img: svcVeneers.url, blurb: "Bright, natural-looking results with lasting shade stability.", icon: Smile },
  { title: "Implants", img: svcImplant.url, blurb: "Permanent, biocompatible solutions planned with 3D imaging.", icon: ShieldCheck },
  { title: "Orthodontics", img: svcOrtho.url, blurb: "Clear aligners and modern braces, calibrated to your bite.", icon: Zap },
  { title: "Restorative", img: svcRestorative.url, blurb: "Crowns, bridges and full-mouth rehabilitation done precisely.", icon: Stethoscope },
  { title: "Family Care", img: svcFamily.url, blurb: "Gentle, preventive dentistry for every age in your family.", icon: Baby },
];

function HomePage() {
  return (
    <div
      className="min-h-screen w-full text-[color:var(--ink)]"
      style={{ backgroundColor: IVORY, color: INK }}
    >
      {/* ===== Nav ===== */}
      <nav className="sticky top-0 z-40 backdrop-blur-md border-b" style={{ backgroundColor: `${IVORY}ee`, borderColor: `${INK}12` }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-4 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 min-w-0">
            <img src={logoAsset.url} alt="Trimax Dent Clinic" width={180} height={60} className="h-10 sm:h-11 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: `${INK}b3` }}>
            <a href="#services" className="hover:text-[color:var(--ink)] transition">Services</a>
            <a href="#clinic" className="hover:text-[color:var(--ink)] transition">Clinic</a>
            <a href="#tourism" className="hover:text-[color:var(--ink)] transition">Tourism</a>
            <a href="#contact" className="hover:text-[color:var(--ink)] transition">Contact</a>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] text-white hover:brightness-110 transition"
            style={{ backgroundColor: AMBER }}
          >
            Book
          </a>
        </div>
      </nav>

      <main className="max-w-7xl w-full mx-auto px-5 lg:px-8 py-10 md:py-16">
        {/* ===== Hero & Stats Bento ===== */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 mb-6 lg:mb-8">
          {/* Hero tile */}
          <div
            className="md:col-span-12 lg:col-span-8 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden relative min-h-[440px] lg:min-h-[560px]"
            style={{ backgroundColor: INK, color: IVORY }}
          >
            <div className="relative z-10">
              <span
                className="inline-block px-4 py-1.5 border rounded-full text-[10px] font-bold uppercase tracking-widest mb-8"
                style={{ borderColor: `${IVORY}33` }}
              >
                Saranda · Boutique Dental Excellence
              </span>
              <h1
                className="font-display font-extrabold leading-[0.85] mb-8 tracking-tighter text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]"
              >
                TRIMAX
                <br />
                <span style={{ color: AMBER }}>DENT.</span>
              </h1>
              <p className="max-w-md text-base lg:text-lg leading-relaxed" style={{ color: `${IVORY}b3` }}>
                Where Mediterranean tranquility meets world-class implantology. Precision dentistry for global smiles.
              </p>
            </div>
            <div className="relative z-10 mt-12 flex flex-wrap gap-3 lg:gap-4">
              <a
                href="#contact"
                className="px-8 py-4 font-bold rounded-full hover:brightness-110 hover:scale-[1.03] transition-all text-sm tracking-wide"
                style={{ backgroundColor: AMBER, color: IVORY }}
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="px-8 py-4 font-bold rounded-full transition-all text-sm tracking-wide border"
                style={{ borderColor: `${IVORY}33`, color: IVORY }}
              >
                Explore Services
              </a>
            </div>
            <div
              className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
              style={{ backgroundColor: `${AMBER}1a` }}
            />
          </div>

          {/* Right stats column */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-5 lg:gap-6">
            <div
              className="bg-white rounded-[2rem] lg:rounded-[3rem] p-6 lg:p-8 flex flex-col justify-center items-center text-center shadow-sm min-h-[180px]"
              style={{ border: `1px solid ${INK}0d` }}
            >
              <div className="font-display font-extrabold italic text-5xl lg:text-6xl mb-1" style={{ color: INK }}>10+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: `${INK}66` }}>Years of Mastery</div>
            </div>
            <div className="rounded-[2rem] lg:rounded-[3rem] overflow-hidden min-h-[180px]">
              <img
                src={clinic2}
                alt="Trimax Dent clinic interior"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* ===== Trust Marquee ===== */}
        <section
          aria-label="Trust indicators"
          className="w-full overflow-hidden py-8 lg:py-10 border-y mb-6 lg:mb-8"
          style={{ borderColor: `${INK}1a` }}
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...trustWords, ...trustWords].map((w, i) => (
              <span
                key={i}
                className="font-display font-bold uppercase mx-8 lg:mx-12 text-lg md:text-2xl lg:text-3xl opacity-30 shrink-0"
              >
                {w}
                <span className="mx-6 lg:mx-10" style={{ color: AMBER, opacity: 0.6 }}>•</span>
              </span>
            ))}
          </div>
        </section>

        {/* ===== Services Bento ===== */}
        <section id="services" className="mb-6 lg:mb-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-6 lg:mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: AMBER }}>Our Services</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mt-2">
                Complete care,<br /><span className="italic">tailored to you.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm lg:text-base" style={{ color: `${INK}b3` }}>
              From routine prevention to full smile design — every treatment planned around your face, bite, and result you want to live with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
            {/* Before & After tile */}
            <div
              className="md:col-span-12 lg:col-span-4 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between"
              style={{ backgroundColor: "#E5DFD5" }}
            >
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: AMBER }}>Real Patients</span>
                <h3 className="font-display font-extrabold text-3xl lg:text-4xl mt-2 mb-6">Before &amp; After</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white">
                    <img src={clinic3} alt="Smile transformation before" className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white">
                    <img src={clinic4} alt="Smile transformation after" className="w-full h-full object-cover object-center" />
                  </div>
                </div>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest mt-6" style={{ color: `${INK}99` }}>
                Visible results. No compromise.
              </p>
            </div>

            {/* Services grid (2×3) */}
            <div className="md:col-span-12 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              {services.slice(0, 4).map((s, i) => {
                const dark = i === 1 || i === 2;
                return (
                  <ServiceCard key={s.title} service={s} dark={dark} />
                );
              })}
            </div>

            {/* Remaining services row */}
            {services.slice(4).map((s, i) => (
              <div key={s.title} className={`md:col-span-6 ${i === 0 ? "lg:col-span-6" : "lg:col-span-6"}`}>
                <ServiceCard service={s} dark={i === 1} wide />
              </div>
            ))}
          </div>
        </section>

        {/* ===== Clinic ===== */}
        <section id="clinic" className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 mb-6 lg:mb-8">
          <div
            className="md:col-span-12 lg:col-span-5 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 bg-white flex flex-col justify-between"
            style={{ border: `1px solid ${INK}0d` }}
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: AMBER }}>The Clinic</span>
              <h2 className="font-display font-extrabold text-3xl lg:text-5xl leading-tight tracking-tight mt-2 mb-5">
                Where surgery feels like <span className="italic">sanctuary</span>.
              </h2>
              <p className="text-sm lg:text-base leading-relaxed mb-8" style={{ color: `${INK}b3` }}>
                Every curve of our interior is designed to reduce anxiety — a state of clinical calm you can feel the moment you step in.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-6">
              {[
                ["Modern Suite", "3D imaging & precision tools."],
                ["Multilingual", "Albanian, English, Italian."],
                ["Natural Aesthetics", "Restorations that look real."],
                ["Calm by Design", "Warm lighting, no glare."],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-bold text-sm mb-1" style={{ color: AMBER }}>{t}</dt>
                  <dd className="text-xs leading-relaxed" style={{ color: `${INK}99` }}>{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-12 lg:col-span-7 rounded-[2rem] lg:rounded-[3rem] overflow-hidden min-h-[360px] lg:min-h-[520px]">
            <img src={clinic2} alt="Trimax Dent clinical suite" className="w-full h-full object-cover object-center" />
          </div>
        </section>

        {/* ===== Tourism ===== */}
        <section id="tourism" className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 mb-6 lg:mb-8">
          <div className="md:col-span-12 lg:col-span-7 h-[400px] lg:h-[500px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden relative">
            <img src={sarandaImg} alt="Saranda coastline" className="w-full h-full object-cover object-center" />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${INK} 0%, ${INK}33 40%, transparent 80%)`,
              }}
            />
            <div className="absolute bottom-8 lg:bottom-10 left-8 lg:left-10 right-8 lg:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-sm" style={{ color: IVORY }}>
                <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: AMBER }}>Dental Tourism</span>
                <h3 className="font-display font-extrabold text-3xl lg:text-5xl mt-2 mb-4 leading-tight">Your smile starts by the Ionian.</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  Combine treatment with a Mediterranean escape. Concierge support, travel logistics, same-day consultations on arrival.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-8 py-4 font-bold rounded-full transition-all hover:scale-[1.03] text-sm tracking-wide"
                style={{ backgroundColor: IVORY, color: INK }}
              >
                Request a Plan
              </a>
            </div>
          </div>

          <div
            className="md:col-span-12 lg:col-span-5 bg-white p-8 lg:p-12 rounded-[2rem] lg:rounded-[3rem] flex flex-col justify-between"
            style={{ border: `1px solid ${INK}0d` }}
          >
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: AMBER }}>Quick Contact</span>
              <h3 className="font-display font-extrabold text-2xl lg:text-3xl mt-2 mb-8">Reach us directly.</h3>
              <div className="space-y-6">
                <ContactRow icon={<Phone className="w-5 h-5" strokeWidth={1.8} />} label="Phone / WhatsApp" value="+355 69 208 2722" href="tel:+355692082722" />
                <ContactRow icon={<MapPin className="w-5 h-5" strokeWidth={1.8} />} label="Address" value="Rruga Telat Noga, Sarandë" />
                <ContactRow icon={<Clock className="w-5 h-5" strokeWidth={1.8} />} label="Hours" value="Mon–Sat · 09:00–19:00" />
                <ContactRow icon={<HeartPulse className="w-5 h-5" strokeWidth={1.8} />} label="Response Time" value="Under 2 hours" />
              </div>
            </div>
            <a
              href="https://wa.me/355692082722"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2 h-14 rounded-2xl font-bold uppercase text-xs tracking-[0.18em] text-white transition hover:brightness-110"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2} />
              Message on WhatsApp
            </a>
          </div>
        </section>

        {/* ===== Contact / Booking ===== */}
        <section
          id="contact"
          className="rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{ backgroundColor: INK, color: IVORY }}
        >
          <div
            className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: `${AMBER}33` }}
          />
          <div
            className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full blur-3xl pointer-events-none"
            style={{ backgroundColor: `${AMBER}1a` }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: AMBER }}>Visit Us</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mt-3 mb-6">
                Ready when <span className="italic">you</span> are.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: `${IVORY}b3` }}>
                Book a consultation or message us on WhatsApp — we reply within one business day.
              </p>
              <div className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${IVORY}1a` }}>
                <iframe
                  title="Trimax Dent Clinic location in Saranda"
                  src="https://www.google.com/maps?q=Rruga+Telat+Noga,+Sarand%C3%AB,+Albania&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-56 lg:h-64 border-0"
                />
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-7 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-6 md:p-10 space-y-4"
              style={{ color: INK }}
            >
              <h3 className="font-display font-extrabold text-2xl lg:text-3xl">Book Consultation</h3>
              <p className="text-sm -mt-1" style={{ color: `${INK}99` }}>
                Tell us a little about your visit and we'll be in touch.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <FormInput placeholder="Full name" />
                <FormInput placeholder="Phone (+code)" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <FormInput type="email" placeholder="Email" />
                <select
                  className="h-14 w-full px-5 rounded-2xl outline-none text-sm transition focus:ring-2"
                  style={{ backgroundColor: "#F8F4ED", border: `1px solid ${INK}1a`, color: `${INK}cc` }}
                >
                  <option>I'm interested in…</option>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Dental Tourism Plan</option>
                </select>
              </div>
              <textarea
                rows={4}
                placeholder="Anything we should know? (optional)"
                className="w-full px-5 py-4 rounded-2xl outline-none text-sm resize-none transition focus:ring-2"
                style={{ backgroundColor: "#F8F4ED", border: `1px solid ${INK}1a`, color: INK }}
              />
              <button
                type="submit"
                className="w-full h-[60px] rounded-2xl font-bold uppercase text-xs tracking-[0.2em] text-white hover:brightness-110 transition"
                style={{ backgroundColor: AMBER }}
              >
                Book Consultation
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className="py-14 px-5 text-center" style={{ backgroundColor: INK, color: IVORY }}>
        <img src={logoAsset.url} alt="Trimax Dent" width={260} height={86} className="h-20 sm:h-24 w-auto mx-auto mb-6" />
        <p className="text-xs sm:text-sm max-w-sm mx-auto leading-relaxed mb-6" style={{ color: `${IVORY}99` }}>
          Boutique dental care focused on longevity, aesthetics & patient comfort.
        </p>
        <div className="text-xs sm:text-sm space-y-1 mb-6" style={{ color: `${IVORY}b3` }}>
          <p>Rruga Telat Noga · Sarandë, Albania</p>
          <a href="tel:+355692082722" className="block hover:opacity-80" style={{ color: AMBER }}>+355 69 208 2722</a>
          <a href="mailto:hello@trimaxdent.al" className="block hover:opacity-80" style={{ color: AMBER }}>hello@trimaxdent.al</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: `${IVORY}66` }}>
          © {new Date().getFullYear()} Trimax Dent Clinic
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({
  service,
  dark = false,
  wide = false,
}: {
  service: { title: string; blurb: string; img: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }> };
  dark?: boolean;
  wide?: boolean;
}) {
  const Icon = service.icon;
  const bg = dark ? INK : "#ffffff";
  const fg = dark ? IVORY : INK;
  const sub = dark ? `${IVORY}b3` : `${INK}b3`;
  return (
    <article
      className={`group relative rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-10 flex ${wide ? "flex-col md:flex-row" : "flex-col"} justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 min-h-[280px]`}
      style={{ backgroundColor: bg, color: fg, border: dark ? "none" : `1px solid ${INK}0d` }}
    >
      <div className={wide ? "md:flex-1" : ""}>
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: dark ? `${IVORY}1a` : `${AMBER}1a` }}
        >
          <Icon className="w-7 h-7" strokeWidth={1.6} />
        </div>
        <h3 className="font-display font-extrabold text-2xl lg:text-3xl mb-3 leading-tight">{service.title}</h3>
        <p className="text-sm lg:text-base leading-relaxed max-w-xs" style={{ color: sub }}>
          {service.blurb}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 font-bold text-sm" style={{ color: AMBER }}>
          Learn more
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
        </div>
      </div>
      {wide && (
        <div className="mt-6 md:mt-0 md:ml-8 md:w-56 rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-40 shrink-0">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover object-center" />
        </div>
      )}
    </article>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: `${INK}0d`, color: INK }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: `${INK}66` }}>{label}</p>
        <p className="font-bold truncate" style={{ color: INK }}>{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition">{content}</a> : content;
}

function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-14 w-full px-5 rounded-2xl outline-none text-sm transition focus:ring-2"
      style={{ backgroundColor: "#F8F4ED", border: `1px solid ${INK}1a`, color: INK }}
    />
  );
}
