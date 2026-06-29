import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  Sparkles,
  ShoppingBag,
  Scissors,
  ArrowRight,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Gallery } from "@/components/Gallery";
import { Logo } from "@/components/Logo";
import { SITE, waLink } from "@/lib/site";

import heroPets from "@/assets/hero-pets.jpg";
import aboutShop from "@/assets/about-shop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pawfect Petshop — Sahabat Setia Hewan Kesayangan Anda" },
      {
        name: "description",
        content:
          "Petshop modern menyediakan makanan, vitamin, aksesoris, dan grooming hewan peliharaan dengan pelayanan yang hangat dan terpercaya.",
      },
      { property: "og:title", content: "Pawfect Petshop" },
      {
        property: "og:description",
        content:
          "Semua kebutuhan sahabat berbulu Anda, dalam satu tempat. Chat kami via WhatsApp.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <GallerySection />
        <Hours />
        <Location />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-soft blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cream blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-xs font-semibold text-foreground">
            <Heart className="h-3.5 w-3.5 fill-accent text-accent" />
            Dipercaya pecinta hewan sejak 2018
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Semua Kebutuhan{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Sahabat Berbulu</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-primary/60" />
            </span>{" "}
            Anda.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            Kami menyediakan makanan, vitamin, aksesoris, hingga layanan grooming
            untuk hewan peliharaan dengan pelayanan yang ramah dan terpercaya.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03] sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Chat via WhatsApp
            </a>
            <a
              href="#galeri"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-primary-soft sm:w-auto"
            >
              Lihat Galeri
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center lg:text-left">
            {[
              { k: "5★", v: "Rating Pelanggan" },
              { k: "1K+", v: "Hewan Bahagia" },
              { k: "7th", v: "Pengalaman" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-primary/40" />
          <div className="relative overflow-hidden rounded-[2.5rem] bg-cream shadow-card">
            <img
              src={heroPets}
              alt="Anjing dan kucing yang ceria"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-background p-4 shadow-card sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Pelayanan</p>
                <p className="text-sm font-bold">Ramah & Terpercaya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES STRIP ---------- */
function Services() {
  const items = [
    { icon: ShoppingBag, title: "Makanan & Vitamin", desc: "Brand premium untuk gizi optimal." },
    { icon: Scissors, title: "Grooming", desc: "Mandi, potong kuku, dan perawatan bulu." },
    { icon: Heart, title: "Aksesoris", desc: "Mainan, kalung, tempat tidur, dan lainnya." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
      <div className="grid grid-cols-1 gap-4 rounded-3xl bg-primary-soft p-4 sm:grid-cols-3 sm:p-6">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex items-start gap-4 rounded-2xl bg-background p-5 shadow-card"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <it.icon className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h3 className="text-base font-bold text-foreground">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 rotate-3 rounded-[2rem] bg-cream" />
          <img
            src={aboutShop}
            alt="Suasana toko Pawfect Petshop"
            loading="lazy"
            width={1024}
            height={1024}
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Tentang Kami
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Karena setiap hewan adalah bagian dari keluarga.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Kami percaya bahwa setiap hewan peliharaan layak mendapat yang terbaik.
            Dengan pengalaman bertahun-tahun melayani para pecinta hewan, kami
            menyediakan berbagai kebutuhan berkualitas — mulai dari makanan, vitamin,
            aksesoris, hingga layanan grooming — dengan pelayanan yang hangat dan
            bersahabat.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Produk pilihan dengan kualitas terjamin",
              "Staf berpengalaman dan ramah",
              "Layanan grooming profesional & aman",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Heart className="h-3 w-3 fill-current" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function GallerySection() {
  return (
    <section id="galeri" className="bg-primary-soft/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Galeri
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Sekilas suasana toko & sahabat kami.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Klik gambar untuk melihat lebih besar.
          </p>
        </div>
        <div className="mt-12">
          <Gallery />
        </div>
      </div>
    </section>
  );
}

/* ---------- HOURS ---------- */
function Hours() {
  return (
    <section id="jam" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
          Jam Buka
        </span>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Kami siap melayani setiap hari.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {SITE.hours.map((h) => (
          <div
            key={h.day}
            className="rounded-3xl border border-border bg-background p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-foreground">
              <Clock className="h-6 w-6" />
            </span>
            <p className="mt-5 text-sm font-medium text-muted-foreground">{h.day}</p>
            <p className="mt-1 text-2xl font-extrabold text-foreground">{h.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- LOCATION ---------- */
function Location() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Alamat
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Mampir ke toko kami.
          </h2>
          <div className="mt-6 flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <MapPin className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-lg font-bold text-foreground">{SITE.addressLine1}</p>
              <p className="text-muted-foreground">{SITE.addressLine2}</p>
            </div>
          </div>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Lihat di Google Maps
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-card">
          <iframe
            title="Lokasi Pawfect Petshop"
            src="https://www.google.com/maps?q=Jakarta+Selatan&output=embed"
            className="h-72 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: SITE.whatsappDisplay, href: waLink() },
    { icon: Phone, label: "Telepon", value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  ];
  return (
    <section id="kontak" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
          Hubungi Kami
        </span>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Ada pertanyaan? Kami siap membantu.
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-border bg-background p-6 shadow-card transition-transform hover:-translate-y-1"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <it.icon className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {it.label}
              </p>
              <p className="truncate text-base font-bold text-foreground">{it.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-center shadow-soft sm:p-14">
        <div
          aria-hidden
          className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/30 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-background/30 blur-2xl"
        />
        <h2 className="relative mx-auto max-w-3xl text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
          Siap memberikan yang terbaik untuk hewan kesayangan Anda?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
          Chat kami sekarang — kami akan bantu memilih kebutuhan terbaik untuk
          sahabat berbulu Anda.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          Hubungi Kami via WhatsApp
        </a>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">{SITE.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground">Alamat</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            {SITE.addressLine1}
            <br />
            {SITE.addressLine2}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground">Jam Buka</h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {SITE.hours.map((h) => (
              <li key={h.day}>
                {h.day}: {h.time}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-foreground">Kontak</h4>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>WA: {SITE.whatsappDisplay}</li>
            <li>Telp: {SITE.phone}</li>
            <li>{SITE.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {SITE.name}. Dibuat dengan ❤️ untuk hewan kesayangan Anda.
        </p>
      </div>
    </footer>
  );
}
