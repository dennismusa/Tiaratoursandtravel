
import React from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Heart,
  ShieldCheck,
  Leaf,
  Users,
  Target,
  Eye,
  Mountain,
  CheckCircle2,
  Sparkles,
  MoveUpRight,
  Phone,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";
import tiara1 from "../assets/tiara1.jpg";

const values = [
  {
    number: "01",
    icon: Heart,
    title: "Personalized Journeys",
    description:
      "Every traveler is different. We aim to create experiences shaped around your interests, travel style, and sense of adventure.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Trust & Reliability",
    description:
      "From the first enquiry to the final destination, we value clear communication, thoughtful planning, and dependable service.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Responsible Exploration",
    description:
      "We encourage respect for wildlife, appreciation of local communities, and a thoughtful approach to exploring nature.",
  },
  {
    number: "04",
    icon: Users,
    title: "Meaningful Experiences",
    description:
      "We bring people closer to remarkable landscapes, fascinating cultures, and the unforgettable moments that travel creates.",
  },
];

const experiences = [
  "Wildlife safaris and game drives",
  "Scenic getaways and nature escapes",
  "Cultural encounters and heritage",
  "Beach holidays and coastal retreats",
];

const stats = [
  { value: "01", label: "A personal approach" },
  { value: "∞", label: "Possibilities to explore" },
  { value: "AFRICA", label: "A world of discovery" },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white text-[#101412]">
      {/* CINEMATIC HERO */}
      
<section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#07130D] sm:min-h-[480px] lg:min-h-[540px]">
  {/* BACKGROUND IMAGE */}
  <img
    src={tiara1}
    alt="Discover the beauty of Africa with The Tiara Tours and Safaris"
    className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
    fetchPriority="high"
  />

  {/* OVERLAYS */}
  <div className="absolute inset-0 -z-20 bg-black/35" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130D] via-[#07130D]/50 to-black/15" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

  {/* DECORATIVE FRAME */}
  <div className="pointer-events-none absolute inset-3 -z-0 rounded-xl border border-white/15 sm:inset-5 lg:inset-7" />

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 pt-24 sm:px-10 sm:pb-14 sm:pt-28 lg:px-16 lg:pb-16 lg:pt-32">
    <div className="max-w-4xl">

      {/* BRAND BADGE */}
      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:mb-6 sm:text-xs sm:tracking-[0.2em]">
        <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
        The Tiara Tours & Safaris
      </div>

      {/* HEADLINE */}
      <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[76px]">
        Beyond the
        <span className="block font-serif font-normal italic text-green-400">
          ordinary.
        </span>
      </h1>

      {/* DESCRIPTION AND BUTTONS */}
      <div className="mt-5 grid gap-5 sm:mt-6 md:grid-cols-[1fr_auto] md:items-end md:gap-6">
        <p className="max-w-lg text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
          Discover the extraordinary side of Africa through wildlife
          encounters, breathtaking landscapes, cultural discoveries,
          and journeys worth remembering.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/safari-packages"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B5D36] px-5 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-green-700 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Explore Safaris
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/5 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#101412] sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>

    {/* BOTTOM BRAND LINE */}
    <div className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4 text-[9px] uppercase tracking-[0.14em] text-white/60 sm:mt-11 sm:pt-5 sm:text-[10px] sm:tracking-[0.18em]">
      <span>Explore. Experience. Remember.</span>

      <a
        href="#our-story"
        className="inline-flex items-center gap-2 transition hover:text-white"
      >
        Discover Our Story
        <ArrowDownRight size={16} />
      </a>
    </div>
  </div>
</section>


      {/* BRAND INTRODUCTION */}
      <section
        id="our-story"
        className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0B5D36]">
                <span className="h-px w-10 bg-[#0B5D36]" />
                Who We Are
              </div>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Travel with
                <span className="block font-serif font-normal italic text-[#0B5D36]">
                  purpose.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-8 text-gray-500">
                We believe travel is more than reaching a destination.
                It is about the people you meet, the places that inspire
                you, and the memories you carry home.
              </p>

              <div className="mt-9 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B5D36] text-white">
                  <Compass size={23} />
                </div>
                <div>
                  <p className="font-semibold">The Tiara Tours & Safaris</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Your journey. Our passion.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pt-2">
              <p className="text-lg leading-9 text-gray-700 sm:text-xl sm:leading-10">
                The Tiara Tours and Safaris is a travel brand dedicated
                to helping people discover the beauty, diversity, and
                wonder of Africa. Our experiences bring together
                remarkable wildlife, beautiful landscapes, cultural
                encounters, and opportunities to create lasting memories.
              </p>

              <p className="mt-6 leading-8 text-gray-500">
                Whether you dream of witnessing elephants beneath
                Mount Kilimanjaro, exploring Kenya's spectacular
                national parks, discovering local traditions, or
                unwinding along the coast, we want to help you plan
                a journey that reflects your travel dreams.
              </p>

              <Link
                to="/safari-packages"
                className="group mt-9 inline-flex items-center gap-3 border-b-2 border-[#0B5D36] pb-2 text-sm font-bold text-[#0B5D36]"
              >
                Discover Our Experiences
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Editorial highlights */}
          <div className="mt-20 grid overflow-hidden rounded-2xl border border-gray-200 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-7 sm:p-9 ${
                  index !== 0 ? "border-t border-gray-200 sm:border-l sm:border-t-0" : ""
                }`}
              >
                <p className="text-3xl font-semibold tracking-tight text-[#0B5D36] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE STRIP */}
      <section className="bg-[#0B5D36] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-green-200">
              <Sparkles size={16} />
              Made for Discovery
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Your kind of
              <span className="block font-serif font-normal italic text-green-200">
                adventure.
              </span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-white/75">
              From the thrill of a wildlife encounter to the calm
              of an ocean sunset, find inspiration for your next
              escape.
            </p>

            <Link
              to="/safari-packages"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0B5D36] transition hover:bg-green-50"
            >
              View Safari Packages
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            {experiences.map((experience, index) => (
              <div
                key={experience}
                className="group flex gap-4 border-t border-white/20 py-6 sm:px-5"
              >
                <span className="pt-1 text-sm text-green-200">
                  0{index + 1}
                </span>
                <div className="flex-1">
                  <p className="text-lg font-medium leading-7">
                    {experience}
                  </p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-white/60 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#F7F8F6] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0B5D36]">
              <span className="h-px w-10 bg-[#0B5D36]" />
              Our Direction
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Driven by purpose.
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                Defined by experience.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-2xl bg-[#101412] p-8 text-white transition duration-300 hover:-translate-y-1 sm:p-11 lg:p-12">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B5D36]">
                  <Target size={27} />
                </div>

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-green-300">
                  What We Do
                </p>

                <h3 className="text-3xl font-semibold">Our Mission</h3>

                <p className="mt-6 max-w-lg leading-8 text-white/65">
                  To create memorable travel experiences by connecting
                  people with Africa's wildlife, natural beauty,
                  cultural heritage, and exceptional destinations
                  through thoughtful planning and personalized service.
                </p>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-11 lg:p-12">
              <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#0B5D36]/10 transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B5D36] text-white">
                  <Eye size={27} />
                </div>

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0B5D36]">
                  Where We Aspire to Go
                </p>

                <h3 className="text-3xl font-semibold">Our Vision</h3>

                <p className="mt-6 max-w-lg leading-8 text-gray-500">
                  To become a trusted choice for unforgettable African
                  travel experiences, known for inspiring adventures,
                  responsible tourism, and meaningful connections
                  between travelers and the places they explore.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0B5D36]">
                <span className="h-px w-10 bg-[#0B5D36]" />
                The Tiara Standard
              </p>

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                The values behind
                <span className="block font-serif font-normal italic text-[#0B5D36]">
                  every journey.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-500">
              The principles that shape our approach to travel,
              service, discovery, and the experiences we hope
              to create.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#0B5D36] hover:shadow-[0_20px_60px_rgba(11,93,54,0.10)] sm:p-8"
                >
                  <div className="mb-12 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B5D36]/10 text-[#0B5D36] transition duration-300 group-hover:bg-[#0B5D36] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="text-sm font-medium tracking-widest text-gray-300">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {value.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-[#0B5D36] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE TRAVEL */}
      <section className="border-y border-gray-200 bg-white px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#0B5D36]/10 text-[#0B5D36]">
              <Globe2 size={27} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold">
                Travel thoughtfully. Discover deeply.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                We believe meaningful travel starts with curiosity,
                respect for local cultures, and appreciation for
                the natural world.
              </p>
            </div>
          </div>

          <Leaf
            size={38}
            className="hidden shrink-0 text-[#0B5D36]/30 md:block"
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#07130D] px-6 py-24 text-white sm:px-10 lg:px-16 lg:py-32">
        <div className="absolute inset-0 -z-20 opacity-20">
          <img
            src={tiara1}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07130D] via-[#07130D]/95 to-[#0B5D36]/60" />

        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10 sm:h-[450px] sm:w-[450px]" />
        <div className="absolute -right-12 -top-12 -z-10 h-56 w-56 rounded-full border border-white/10 sm:h-[350px] sm:w-[350px]" />

        <div className="relative mx-auto flex max-w-[1240px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-green-300">
              <Sparkles size={16} />
              Your Next Chapter Starts Here
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              The world is waiting.
              <span className="mt-2 block font-serif font-normal italic text-green-400">
                Let's explore it.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Your next unforgettable experience begins with a
              conversation. Tell us what inspires you, and let's
              start planning your African adventure.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B5D36] px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Plan Your Journey
              <MoveUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href="https://wa.me/254737087846"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1240px] border-t border-white/15 pt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            The Tiara Tours & Safaris · Discover More. Experience More.
          </p>
        </div>
      </section>


<footer
  id="contact"
  className="relative isolate overflow-hidden bg-[#101412] text-white"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#0B5D36]/25 blur-[130px]" />
    <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-emerald-900/20 blur-[120px]" />
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
        backgroundSize: "20px 20px",
      }}
    />
  </div>

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* NEWSLETTER / BOOKING CTA */}
   

    {/* MAIN FOOTER CONTENT */}
    <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
      {/* BRAND */}
      <div className="sm:col-span-2 lg:col-span-4">
        <a href="/" className="group inline-flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/25 bg-[#0B5D36]/20 font-serif text-3xl font-bold italic text-emerald-300 transition-colors group-hover:bg-[#0B5D36]">
            T
          </span>

          <span>
            <span className="block font-serif text-xl font-bold tracking-wide text-white sm:text-2xl">
              THE TIARA
            </span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-emerald-300">
              Tours & Safaris
            </span>
          </span>
        </a>

        <p className="mt-6 max-w-sm text-sm leading-8 text-white/60">
          Discover the beauty of Africa through wildlife adventures, scenic
          getaways, cultural experiences and relaxing beach holidays. Your
          next journey begins here.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {["Wildlife", "Culture", "Nature", "Coast"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-white/65"
            >
              {item}
            </span>
          ))}
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-8">
          <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/45">
            Follow Our Journey
          </p>

          <a
            href="https://www.tiktok.com/@thetiaratoursandtravel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow The Tiara Tours and Safaris on TikTok"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 transition-all hover:border-emerald-300/50 hover:bg-[#0B5D36]/30"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-white transition-colors group-hover:text-emerald-300"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.1V2h-3.56v13.67a2.9 2.9 0 0 1-2.9 2.75 2.9 2.9 0 1 1 0-5.8c.31 0 .61.05.89.14V9.14a6.7 6.7 0 1 0 5.57 6.6V8.75a8.3 8.3 0 0 0 4.85 1.55V6.76c-.36 0-.72-.02-1.08-.07Z" />
            </svg>

            <span className="text-xs font-bold text-white">
              @tiaratoursandtravel
            </span>

            <span className="text-sm text-emerald-300">↗</span>
          </a>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="lg:col-span-2">
        <h3 className="mb-6 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white">
          <span className="h-5 w-1 rounded-full bg-[#0B5D36]" />
          Explore
        </h3>

        <ul className="space-y-4">
          {[
            ["Home", "/"],
            ["Destinations", "/destinations"],
            ["Safari Packages", "/safari-packages"],
            ["About Us", "/about"],
            ["Contact Us", "/contact"],
          ].map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-emerald-300"
              >
                <span className="h-px w-0 bg-emerald-300 transition-all duration-300 group-hover:w-3" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* EXPERIENCES */}
      <div className="lg:col-span-3">
        <h3 className="mb-6 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white">
          <span className="h-5 w-1 rounded-full bg-[#0B5D36]" />
          Our Experiences
        </h3>

        <ul className="space-y-4">
          {[
            ["Wildlife Safaris", "Explore Kenya's remarkable wildlife."],
            ["Scenic Getaways", "Reconnect with nature."],
            ["Cultural Experiences", "Discover local traditions."],
            ["Beach Holidays", "Unwind along the coast."],
          ].map(([title, description]) => (
            <li key={title} className="group">
              <a
                href="/safari-packages"
                className="block"
              >
                <span className="text-sm font-semibold text-white/80 transition-colors group-hover:text-emerald-300">
                  {title}
                </span>
                <span className="mt-1 block text-xs leading-6 text-white/40">
                  {description}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div className="lg:col-span-3">
        <h3 className="mb-6 flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white">
          <span className="h-5 w-1 rounded-full bg-[#0B5D36]" />
          Get In Touch
        </h3>

        <p className="mb-6 text-sm leading-7 text-white/55">
          Have a destination in mind? Talk to our team about your next trip.
        </p>

        <div className="space-y-5">
          <a
            href="https://wa.me/254748799417"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-emerald-300 transition-colors group-hover:bg-[#0B5D36]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.2A8.4 8.4 0 1 1 21 11.5Z" />
                <path d="M8.5 8.5c.4 2.1 2.1 3.8 4.2 4.2l1.1-1.1 2 1c-.1 1.1-.9 1.8-2 1.8-3.5-.2-6.5-3.2-6.7-6.7 0-1.1.7-1.9 1.8-2l1 2-1.4.8Z" />
              </svg>
            </span>

            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Call or WhatsApp
              </span>
              <span className="mt-1 block text-sm font-semibold text-white/85 transition-colors group-hover:text-emerald-300">
                +254 748 799417
              </span>
            </span>
          </a>

          <a
            href="mailto:thetiaratoursandtravel@gmail.com"
            className="group flex items-start gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-emerald-300 transition-colors group-hover:bg-[#0B5D36]">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </span>

            <span className="min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Email Us
              </span>
              <span className="mt-1 block break-all text-sm font-semibold text-white/85 transition-colors group-hover:text-emerald-300">
                thetiaratoursandtravel@gmail.com
              </span>
            </span>
          </a>

          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-emerald-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>

            <span>
              <span className="block text-[9px] font-bold uppercase tracking-[0.15em] text-white/40">
                Find Us
              </span>
              <span className="mt-1 block text-sm font-semibold text-white/85">
                Nairobi, Kenya 00100
              </span>
            </span>
          </div>
        </div>

        <a
          href={`https://wa.me/254748799417?text=${encodeURIComponent(
            "Hello The Tiara Tours & Safaris! I'd like to enquire about planning a trip."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-emerald-300/30 bg-[#0B5D36]/20 px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.1em] text-emerald-200 transition-all hover:bg-[#0B5D36] hover:text-white"
        >
          Send An Enquiry
          <span>↗</span>
        </a>
      </div>
    </div>

    {/* FOOTER BOTTOM */}
    <div className="border-t border-white/10 py-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-white/40">
          © {new Date().getFullYear()} The Tiara Tours & Safaris.
          <span className="block sm:inline"> All rights reserved.</span>
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="/privacy-policy"
            className="text-[10px] font-semibold text-white/40 transition-colors hover:text-emerald-300"
          >
            Privacy Policy
          </a>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <a
            href="/terms"
            className="text-[10px] font-semibold text-white/40 transition-colors hover:text-emerald-300"
          >
            Terms & Conditions
          </a>
        </div>

        <a
          href="/"
          className="group inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-emerald-300"
        >
          Back to Top
          <span className="transition-transform group-hover:-translate-y-1">
            ↑
          </span>
        </a>
      </div>
    </div>
  </div>
</footer>

    </main>
  );
}
