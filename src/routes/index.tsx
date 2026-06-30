import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  Sparkles,
  Globe2,
  MapPin,
  CalendarHeart,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Clock,
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
import svcEmergency from "@/assets/emergency.webp.asset.json";

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

const services = [
  {
    title: "Smile Design",
    img: svcSmile.url,
    blurb: "Bespoke smile architecture, planned digitally and crafted by hand for a result that feels unmistakably yours.",
    featured: true,
  },
  {
    title: "Veneers & Whitening",
    img: svcVeneers.url,
    blurb: "Bright, natural-looking results — whitening, veneers and confidence-focused aesthetic care.",
  },
  {
    title: "Implants",
    img: svcImplant.url,
    blurb: "Permanent, biocompatible solutions for missing teeth, planned with 3D imaging.",
  },
  {
    title: "Orthodontics",
    img: svcOrtho.url,
    blurb: "Clear aligners and modern braces, calibrated to your bite.",
    featured: true,
  },
  {
    title: "Restorative",
    img: svcRestorative.url,
    blurb: "Crowns, bridges and full-mouth rehabilitation done with precision.",
  },
  {
    title: "Family Care",
    img: svcFamily.url,
    blurb: "Gentle, preventive dentistry for every age in your family.",
  },
];

const trustItems = [
  { icon: Star, label: "5.0 Reviews" },
  { icon: CalendarHeart, label: "10+ Years" },
  { icon: Globe2, label: "Multilingual" },
  { icon: MapPin, label: "Central Saranda" },
  { icon: Sparkles, label: "Aesthetic Dentistry" },
];

function HomePage() {
  return (
    <div className="bg-ivory text-ink selection:bg-amber-warm/30 overflow-x-hidden">
      {/* ===== Nav ===== */}
      <nav className="sticky top-0 z-40 bg-walnut/95 backdrop-blur-md border-b border-ivory/10">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 min-w-0">
            <img
              src={logoAsset.url}
              alt="Trimax Dent Clinic"
              width={180}
              height={60}
              className="h-10 sm:h-11 w-auto"
            />
          </a>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 bg-amber-warm text-white rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:brightness-110 transition"
          >
            Book
          </a>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <header className="px-5 pt-12 pb-10 lg:pt-20 lg:pb-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <span className="inline-block px-3 py-1 border border-walnut/20 rounded-full text-[9px] uppercase tracking-[0.22em] text-walnut mb-6">
              Saranda · Albania
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-walnut leading-[1.05] mb-5">
              Confidence
              <br />
              <span className="italic text-ink">Redefined.</span>
            </h1>
            <p className="text-base lg:text-lg text-walnut/70 leading-relaxed mb-8 mx-auto lg:mx-0 max-w-md">
              Boutique dentistry where modern clinical precision meets the warmth of the Mediterranean.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-3">
              <a
                href="#contact"
                className="w-full max-w-xs lg:w-auto px-8 py-4 bg-amber-warm text-white rounded-full font-bold uppercase text-xs tracking-[0.18em] hover:brightness-110 transition text-center"
              >
                Book Your Visit
              </a>
              <a
                href="tel:+355692082722"
                className="text-sm font-medium text-walnut/70 hover:text-amber-warm"
              >
                or call +355 69 208 2722
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-12 lg:mt-0 rounded-[32px] overflow-hidden border-[6px] border-white shadow-2xl shadow-walnut/15 mx-auto max-w-md lg:max-w-none w-full">
            <img
              src={clinic2}
              alt="Trimax Dent clinic interior"
              width={680}
              height={760}
              className="w-full aspect-[5/6] object-cover object-center"
            />
          </div>
        </div>
      </header>

      {/* ===== Trust Strip (Marquee) ===== */}
      <section aria-label="Why patients choose us" className="px-5 -mt-2 mb-10 lg:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-white/65 backdrop-blur-md border border-walnut/5 shadow-sm shadow-walnut/5 px-4 py-4 lg:px-6 lg:py-5 overflow-hidden">
            <div className="animate-marquee">
              {/* first set */}
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  key={`a-${label}`}
                  className="shrink-0 inline-flex items-center gap-2.5 h-14 px-5 mx-1.5 rounded-full bg-ivory/80 border border-walnut/10 text-walnut transition hover:-translate-y-0.5 hover:border-amber-warm/60 hover:shadow-md hover:shadow-amber-warm/10"
                >
                  <Icon className="h-4 w-4 text-amber-warm" strokeWidth={1.6} />
                  <span className="text-[12px] font-medium tracking-wide whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
              {/* duplicate set for seamless loop */}
              {trustItems.map(({ icon: Icon, label }) => (
                <div
                  key={`b-${label}`}
                  className="shrink-0 inline-flex items-center gap-2.5 h-14 px-5 mx-1.5 rounded-full bg-ivory/80 border border-walnut/10 text-walnut transition hover:-translate-y-0.5 hover:border-amber-warm/60 hover:shadow-md hover:amber-warm/10"
                >
                  <Icon className="h-4 w-4 text-amber-warm" strokeWidth={1.6} />
                  <span className="text-[12px] font-medium tracking-wide whitespace-nowrap">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services (editorial) ===== */}
      <section id="services" className="bg-white py-16 lg:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold">
              Our Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-walnut mt-3 leading-tight">
              Complete Dental Care,
              <br className="hidden sm:block" />
              <span className="italic">Tailored to You.</span>
            </h2>
            <p className="text-walnut/70 leading-relaxed mt-5 text-sm lg:text-base">
              From routine prevention to full smile design — every treatment is planned
              around your face, your bite, and the result you want to live with.
            </p>
          </div>

          {/* Editorial grid: featured wide + stacked siblings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                service={s}
                className={
                  s.featured
                    ? "lg:col-span-2 lg:row-span-1"
                    : "lg:col-span-1"
                }
                tall={s.featured}
                priority={i < 2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Clinic ===== */}
      <section id="clinic" className="py-16 lg:py-24 px-5 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <span className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold">
              The Clinic
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-walnut mt-3 mb-5 leading-tight">
              Where surgery feels like <span className="italic">sanctuary</span>.
            </h2>
            <p className="text-walnut/70 leading-relaxed mb-8 mx-auto lg:mx-0 max-w-md">
              Every curve of our interior is designed to reduce anxiety — a state of clinical calm
              you can feel the moment you step in.
            </p>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-6 text-left max-w-md mx-auto lg:mx-0">
              {[
                ["Modern Suite", "3D imaging & precision tools."],
                ["Multilingual", "Albanian, English, Italian."],
                ["Natural Aesthetics", "Restorations that look real."],
                ["Calm by Design", "Warm lighting, no glare."],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="text-amber-warm font-semibold text-sm mb-1">{t}</dt>
                  <dd className="text-xs text-walnut/60 leading-relaxed">{d}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold text-center lg:text-left mb-4">
              Before &amp; After
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <figure className="rounded-2xl overflow-hidden border border-walnut/10 shadow-sm shadow-walnut/10 bg-white">
                <img
                  src={clinic3}
                  alt="Smile transformation — before and after"
                  loading="lazy"
                  width={680}
                  height={850}
                  className="w-full aspect-[4/5] object-cover object-center"
                />
              </figure>
              <figure className="rounded-2xl overflow-hidden border border-walnut/10 shadow-sm shadow-walnut/10 bg-white">
                <img
                  src={clinic4}
                  alt="Smile transformation — before and after"
                  loading="lazy"
                  width={680}
                  height={850}
                  className="w-full aspect-[4/5] object-cover object-center"
                />
              </figure>
            </div>
            <p className="text-[11px] text-walnut/50 text-center lg:text-left mt-3 italic">
              Real patient results · TRIMAX dent
            </p>
          </div>

        </div>
      </section>

      {/* ===== Tourism ===== */}
      <section id="tourism" className="relative py-20 lg:py-28 px-5 overflow-hidden bg-walnut">
        <div className="absolute inset-0 opacity-25">
          <img
            src={sarandaImg}
            alt="Saranda coastline"
            loading="lazy"
            width={1920}
            height={1088}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-walnut/70 via-walnut/50 to-walnut/85" />
        <div className="relative max-w-xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-amber-warm font-semibold">
            Dental Tourism
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory mt-4 mb-5 italic leading-tight">
            Your perfect smile starts in Saranda.
          </h2>
          <p className="text-ivory/75 text-sm lg:text-base mb-8 leading-relaxed">
            Combine treatment with a Mediterranean escape. Concierge support, travel logistics,
            same-day consultations on arrival.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-amber-warm text-white rounded-full font-bold uppercase text-xs tracking-[0.18em] hover:brightness-110 transition"
          >
            Request a Plan
          </a>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section
        id="contact"
        className="relative py-20 lg:py-28 px-5 bg-[#5A4348] overflow-hidden"
      >
        {/* decorative blurred amber glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-amber-warm/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-20 h-[24rem] w-[24rem] rounded-full bg-amber-warm/10 blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold">
              Visit Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory mt-3 leading-tight">
              Ready when <span className="italic">you</span> are.
            </h2>
            <p className="text-ivory/70 mt-4 text-sm lg:text-base max-w-md mx-auto">
              Book a consultation or message us on WhatsApp — we reply within one business day.
            </p>
          </div>

          <div className="bg-white rounded-[36px] lg:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-2xl shadow-walnut/20">
            <div className="grid lg:grid-cols-[45fr_55fr] gap-10 lg:gap-14 items-start">
              {/* Left — info */}
              <div className="order-2 lg:order-1 space-y-6">
                <div className="rounded-3xl overflow-hidden border border-walnut/10 shadow-sm">
                  <iframe
                    title="Trimax Dent Clinic location in Saranda"
                    src="https://www.google.com/maps?q=Rruga+Telat+Noga,+Sarand%C3%AB,+Albania&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-56 lg:h-64 border-0"
                  />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-walnut/50 mb-2">
                    Address
                  </p>
                  <p className="text-walnut text-sm leading-relaxed">
                    Rruga Telat Noga, 2nd floor
                    <br />
                    Above Fibank · Sarandë, Albania
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+355692082722"
                    className="inline-flex items-center gap-3 h-14 px-5 rounded-2xl bg-ivory/70 border border-walnut/10 text-walnut hover:border-amber-warm/60 transition"
                  >
                    <Phone className="h-4 w-4 text-amber-warm" strokeWidth={1.8} />
                    <span className="font-serif text-lg">+355 69 208 2722</span>
                  </a>
                  <a
                    href="https://wa.me/355692082722"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 h-14 px-5 rounded-2xl bg-[#25D366] text-white font-bold uppercase text-xs tracking-[0.18em] hover:brightness-110 transition"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    Message on WhatsApp
                  </a>
                </div>

                <div className="flex items-start gap-3 text-walnut/75 text-sm">
                  <Clock className="h-4 w-4 mt-0.5 text-amber-warm" strokeWidth={1.8} />
                  <div>
                    <p className="font-medium text-walnut">Mon – Sat</p>
                    <p>09:00 – 19:00</p>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="order-1 lg:order-2 space-y-4"
              >
                <h3 className="font-serif text-2xl text-walnut">Book Consultation</h3>
                <p className="text-sm text-walnut/60 -mt-2">
                  Tell us a little about your visit and we'll be in touch.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  <FormInput placeholder="Full name" />
                  <FormInput placeholder="Phone (+code)" />
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <FormInput type="email" placeholder="Email" />
                  <select className="h-14 w-full px-5 rounded-2xl bg-[#F8F4ED] border border-walnut/10 focus:border-amber-warm focus:ring-2 focus:ring-amber-warm/20 outline-none text-sm text-walnut/80 transition">
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
                  className="w-full px-5 py-4 rounded-2xl bg-[#F8F4ED] border border-walnut/10 focus:border-amber-warm focus:ring-2 focus:ring-amber-warm/20 outline-none text-sm resize-none transition"
                />
                <button
                  type="submit"
                  className="w-full h-[60px] bg-amber-warm text-white rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition"
                >
                  Book Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-walnut text-ivory py-14 px-5 text-center">
        <img
          src={logoAsset.url}
          alt="Trimax Dent"
          width={260}
          height={86}
          className="h-20 sm:h-24 w-auto mx-auto mb-6"
        />
        <p className="text-ivory/60 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed mb-6">
          Boutique dental care focused on longevity, aesthetics & patient comfort.
        </p>
        <div className="text-xs sm:text-sm text-ivory/70 space-y-1 mb-6">
          <p>Rruga Telat Noga · Sarandë, Albania</p>
          <a href="tel:+355692082722" className="block hover:text-amber-warm">+355 69 208 2722</a>
          <a href="mailto:hello@trimaxdent.al" className="block hover:text-amber-warm">hello@trimaxdent.al</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-ivory/40">
          © {new Date().getFullYear()} Trimax Dent Clinic
        </p>
      </footer>
    </div>
  );
}

function ServiceCard({
  service,
  className = "",
  tall = false,
  priority = false,
}: {
  service: { title: string; img: string; blurb: string };
  className?: string;
  tall?: boolean;
  priority?: boolean;
}) {
  return (
    <article
      className={`group relative flex flex-col rounded-[28px] overflow-hidden bg-white border border-[#E6DED2] shadow-sm hover:shadow-xl hover:shadow-walnut/10 transition-all duration-500 hover:-translate-y-1 ${className}`}
    >
      <div
        className={`overflow-hidden ${
          tall ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={service.img}
          alt={service.title}
          loading={priority ? "eager" : "lazy"}
          width={1200}
          height={900}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition duration-700"
        />
      </div>
      <div className="flex-1 flex flex-col p-6 lg:p-7">
        <h3 className="font-serif text-xl lg:text-2xl text-walnut leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-walnut/65 leading-relaxed mt-2 flex-1">
          {service.blurb}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold">
            Learn more
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory text-walnut group-hover:bg-amber-warm group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </article>
  );
}

function FormInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-14 w-full px-5 rounded-2xl bg-[#F8F4ED] border border-walnut/10 focus:border-amber-warm focus:ring-2 focus:ring-amber-warm/20 outline-none text-sm text-walnut transition"
    />
  );
}
