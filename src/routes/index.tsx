import { createFileRoute } from "@tanstack/react-router";
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
  { title: "Smile Design", img: svcSmile.url, blurb: "Custom-crafted aesthetics" },
  { title: "Veneers & Whitening", img: svcVeneers.url, blurb: "Bright, natural results" },
  { title: "Implants", img: svcImplant.url, blurb: "Permanent solutions" },
  { title: "Orthodontics", img: svcOrtho.url, blurb: "Clear aligners & braces" },
  { title: "Restorative", img: svcRestorative.url, blurb: "Crowns & bridges" },
  { title: "Family Care", img: svcFamily.url, blurb: "Gentle for all ages" },
  { title: "Emergency", img: svcEmergency.url, blurb: "Same-day relief" },
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
      <header className="px-5 pt-12 pb-16 lg:pt-20 lg:pb-24 max-w-6xl mx-auto">
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
              height={1020}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </header>

      {/* ===== Services Grid ===== */}
      <section id="services" className="bg-white py-16 lg:py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 lg:mb-14">
            <span className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold">
              Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-walnut mt-3">
              Artistry &amp; <span className="italic">Science</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 max-w-5xl mx-auto">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl overflow-hidden bg-ivory/60 shadow-sm hover:shadow-lg transition"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="font-serif text-base sm:text-lg text-walnut leading-tight">
                    {s.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-walnut/60 mt-1">{s.blurb}</p>
                </div>
              </article>
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

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="rounded-2xl overflow-hidden">
              <img src={clinic3} alt="Treatment room" loading="lazy" width={680} height={1020} className="w-full aspect-[3/4] object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden mt-8">
              <img src={clinic4} alt="Clinic reception" loading="lazy" width={680} height={1020} className="w-full aspect-[3/4] object-cover" />
            </div>
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
            className="w-full h-full object-cover"
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
      <section id="contact" className="py-16 lg:py-24 px-5 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[10px] uppercase tracking-[0.22em] text-amber-warm font-semibold">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-walnut mt-3 leading-tight">
            Ready when <span className="italic">you</span> are.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="grid grid-cols-1 gap-3 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-5 text-center lg:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-walnut/50 mb-2">Address</p>
              <p className="text-walnut text-sm leading-relaxed">
                Rruga Telat Noga, 2nd floor<br />Above Fibank · Sarandë
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center lg:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-walnut/50 mb-2">Call</p>
              <a href="tel:+355692082722" className="font-serif text-xl text-walnut hover:text-amber-warm">
                +355 69 208 2722
              </a>
            </div>
            <div className="bg-white rounded-2xl p-5 text-center lg:text-left">
              <p className="text-[10px] uppercase tracking-[0.2em] text-walnut/50 mb-2">Hours</p>
              <p className="text-walnut text-sm leading-relaxed">
                Mon–Fri · 09:00–18:00<br />Sat · 09:00–14:00
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-walnut/5 space-y-3 order-1 lg:order-2"
          >
            <h3 className="font-serif text-xl text-walnut text-center">Request an Appointment</h3>
            <p className="text-xs text-walnut/60 text-center mb-3">We'll reply within one business day.</p>
            <input placeholder="Full name" className="h-12 w-full px-5 rounded-full bg-ivory/60 border border-transparent focus:border-amber-warm outline-none text-sm" />
            <input type="email" placeholder="Email" className="h-12 w-full px-5 rounded-full bg-ivory/60 border border-transparent focus:border-amber-warm outline-none text-sm" />
            <input placeholder="Phone (+code)" className="h-12 w-full px-5 rounded-full bg-ivory/60 border border-transparent focus:border-amber-warm outline-none text-sm" />
            <select className="h-12 w-full px-5 rounded-full bg-ivory/60 border border-transparent focus:border-amber-warm outline-none text-sm text-walnut/70">
              <option>I'm interested in…</option>
              {services.map((s) => <option key={s.title}>{s.title}</option>)}
              <option>Dental Tourism Plan</option>
            </select>
            <textarea
              rows={3}
              placeholder="Anything we should know? (optional)"
              className="w-full px-5 py-3 rounded-2xl bg-ivory/60 border border-transparent focus:border-amber-warm outline-none text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-amber-warm text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:brightness-110 transition"
            >
              Send Request
            </button>
          </form>
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
