
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Compass,
  Users,
  
  CheckCircle2,
  Mountain,
  TentTree,
  Waves,
  Camera,
  Sparkles,
  MessageCircle,
  MoveUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import tiara1 from "../assets/tiara1.jpg";
import mara4 from "../assets/mara4.jpg";
import nakuru from "../assets/nakuru.jpg";
import nakuru2 from "../assets/nakuru2.jpg";
import nakuru3 from "../assets/nakuru3.jpg";
import image4 from "../assets/image4.jpg";
import diani5 from "../assets/diani5.jpg";
import kenya1 from "../assets/kenya1.jpg";


const WHATSAPP_NUMBER = "+254748799417";

const packages = [
  {
    id: 1,
    title: "Maasai Mara Safari",
    category: "Wildlife Safari",
    location: "Maasai Mara, Kenya",
    duration: "3 Days / 2 Nights",
    image:mara4,
    description:
      "Discover Kenya's iconic savannah, incredible wildlife, and unforgettable game-drive experiences in the legendary Maasai Mara.",
    highlights: [
      "Guided wildlife game drives",
      "Big Five viewing opportunities",
      "Scenic African landscapes",
    ],
    price: "Request a Quote",
    featured: true,
  },
  {
    id: 2,
    title: "Amboseli Adventure",
    category: "Wildlife Safari",
    location: "Amboseli, Kenya",
    duration: "3 Days / 2 Nights",
    image:nakuru2,
    description:
      "Experience vast open plains, spectacular elephant encounters, and breathtaking views of Mount Kilimanjaro.",
    highlights: [
      "Elephant viewing experiences",
      "Scenic mountain backdrops",
      "Morning and evening game drives",
    ],
    price: "Request a Quote",
    featured: false,
  },
  {
    id: 3,
    title: "Lake Nakuru Escape",
    category: "Nature Escape",
    location: "Lake Nakuru, Kenya",
    duration: "2 Days / 1 Night",
    image:nakuru3 ,
    description:
      "Explore a beautiful Rift Valley destination known for its wildlife, picturesque lake views, and peaceful natural surroundings.",
    highlights: [
      "National park exploration",
      "Wildlife photography",
      "Scenic Rift Valley views",
    ],
    price: "Request a Quote",
    featured: false,
  },
  {
    id: 4,
    title: "Tsavo Wilderness",
    category: "Wildlife Safari",
    location: "Tsavo, Kenya",
    duration: "3 Days / 2 Nights",
    image:image4,
    description:
      "Journey into one of Kenya's great wilderness regions, surrounded by dramatic landscapes and remarkable wildlife.",
    highlights: [
      "Expansive wilderness scenery",
      "Wildlife viewing opportunities",
      "Immersive safari experiences",
    ],
    price: "Request a Quote",
    featured: false,
  },
  {
    id: 5,
    title: "Diani Beach Retreat",
    category: "Beach Holiday",
    location: "Diani, Kenya",
    duration: "4 Days / 3 Nights",
    image:diani5,
    description:
      "Unwind on beautiful white-sand beaches, enjoy ocean views, and experience a relaxing coastal getaway.",
    highlights: [
      "White-sand beach relaxation",
      "Optional ocean adventures",
      "Coastal dining and leisure",
    ],
    price: "Request a Quote",
    featured: false,
  },
  {
    id: 6,
    title: "Mount Kenya Adventure",
    category: "Adventure",
    location: "Mount Kenya, Kenya",
    duration: "Custom Itinerary",
    image:kenya1,
    description:
      "Discover dramatic mountain scenery, fresh alpine air, and rewarding outdoor adventures in Kenya's highlands.",
    highlights: [
      "Mountain scenery",
      "Guided hiking options",
      "Nature and photography",
    ],
    price: "Request a Quote",
    featured: false,
  },
];

const categories = [
  { label: "All Experiences", icon: Compass },
  { label: "Wildlife Safari", icon: TentTree },
  { label: "Nature Escape", icon: Mountain },
  { label: "Beach Holiday", icon: Waves },
  { label: "Adventure", icon: Camera },
];

const reasons = [
  {
    number: "01",
    title: "Journeys Made for You",
    text: "Tell us what inspires you. We can help tailor your itinerary to your interests, schedule, and budget.",
  },
  {
    number: "02",
    title: "Africa, Up Close",
    text: "Explore spectacular landscapes, remarkable wildlife, and memorable destinations across Africa.",
  },
  {
    number: "03",
    title: "Planning with Care",
    text: "Get in touch with our team to discuss your travel dates, accommodation preferences, and experience.",
  },
];

function createWhatsAppLink(pkg) {
  const message = `Hello The Tiara Tours & Safaris! I am interested in the ${pkg.title} package (${pkg.duration}). Please share the itinerary, available dates, inclusions, and pricing.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export default function Packages() {
  const [activeCategory, setActiveCategory] = useState("All Experiences");

  const filteredPackages =
    activeCategory === "All Experiences"
      ? packages
      : packages.filter((pkg) => pkg.category === activeCategory);

  return (
    <main className="overflow-hidden bg-white text-[#101412]">
      {/* CINEMATIC HERO */}
      <section className="relative isolate flex min-h-[480px] items-end overflow-hidden bg-[#07130D] sm:min-h-[540px] lg:min-h-[600px]">
  <img
    src={tiara1}
    alt="Explore African safari adventures with The Tiara Tours and Safaris"
    className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
    fetchPriority="high"
  />

  <div className="absolute inset-0 -z-20 bg-black/35" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130D] via-[#07130D]/40 to-black/10" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />

  <div className="absolute inset-3 -z-0 rounded-xl border border-white/15 sm:inset-5 lg:inset-7" />

  <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 pt-28 sm:px-10 sm:pb-14 sm:pt-32 lg:px-16 lg:pb-16">
    <div className="max-w-4xl">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:text-xs">
        <Sparkles size={14} className="text-green-400" />
        The Tiara Collection
      </div>

      <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
        Find Your
        <span className="block font-serif font-normal italic text-green-400">
          next adventure.
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
        From thrilling wildlife safaris to peaceful coastal escapes,
        explore experiences designed to bring you closer to the beauty
        and wonder of Africa.
      </p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href="#packages"
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B5D36] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
        >
          Explore Packages
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
        >
          Plan a Custom Trip
          <ArrowRight size={17} />
        </Link>
      </div>
    </div>

    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4 text-[10px] uppercase tracking-[0.16em] text-white/70 sm:mt-12 sm:text-xs">
      <span>Discover. Experience. Remember.</span>
      <a
        href="#packages"
        className="inline-flex items-center gap-2 transition hover:text-white"
      >
        Find Your Experience
        <ArrowRight size={15} />
      </a>
    </div>
  </div>
</section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#0B5D36]">
              <span className="h-px w-10 bg-[#0B5D36]" />
              Extraordinary Places
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your dream trip.
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                Your kind of Africa.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              Every traveler has a different idea of the perfect adventure.
              Browse our sample experiences and contact us to discuss an
              itinerary that suits your interests, travel dates, and budget.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2.5 text-sm font-medium text-[#0B5D36]">
                <TentTree size={17} />
                Wildlife
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2.5 text-sm font-medium text-[#0B5D36]">
                <Mountain size={17} />
                Nature
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2.5 text-sm font-medium text-[#0B5D36]">
                <Waves size={17} />
                Coastal Escapes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        id="packages"
        className="scroll-mt-24 bg-[#F7F8F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0B5D36]">
                <span className="h-px w-10 bg-[#0B5D36]" />
                Explore Our Packages
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Experiences worth
                <span className="block font-serif font-normal italic text-[#0B5D36]">
                  travelling for.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                Discover sample safari and holiday ideas. Contact us for
                confirmed itineraries, availability, and personalized quotes.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-gray-500 lg:flex">
              <MapPin size={17} className="text-[#0B5D36]" />
              Explore Africa with Tiara
            </div>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition duration-300 sm:px-5 ${
                    isActive
                      ? "border-[#0B5D36] bg-[#0B5D36] text-white shadow-lg shadow-green-900/10"
                      : "border-gray-200 bg-white text-gray-600 hover:border-[#0B5D36] hover:text-[#0B5D36]"
                  }`}
                >
                  <Icon size={17} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* PACKAGE GRID */}
          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-500 hover:-translate-y-2 hover:border-green-800/30 hover:shadow-[0_25px_70px_rgba(11,93,54,0.12)]"
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden sm:h-[310px]">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {pkg.category}
                  </span>

                  {pkg.featured && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[#0B5D36] px-3 py-2 text-xs font-bold text-white">
                      <Sparkles size={13} />
                      Featured
                    </span>
                  )}

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
                      <MapPin size={15} />
                      {pkg.location}
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#0B5D36]">
                    <CalendarDays size={17} />
                    {pkg.duration}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {pkg.description}
                  </p>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-gray-400">
                      Experience Highlights
                    </p>

                    <ul className="space-y-3">
                      {pkg.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-0.5 shrink-0 text-[#0B5D36]"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-7">
                    <div className="mb-5 flex items-center justify-between gap-3 border-t border-gray-100 pt-5">
                      <div>
                        <p className="text-xs text-gray-400">Package pricing</p>
                        <p className="mt-1 font-semibold text-[#101412]">
                          {pkg.price}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-[#0B5D36] transition group-hover:bg-[#0B5D36] group-hover:text-white">
                        <ArrowUpRight size={21} />
                      </div>
                    </div>

                    <a
                      href={createWhatsAppLink(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B5D36] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#084629]"
                    >
                      <MessageCircle size={18} />
                      Enquire About This Package
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <p className="py-12 text-center text-gray-500">
              No packages found in this category.
            </p>
          )}

          <p className="mt-8 text-center text-xs leading-6 text-gray-400">
            The packages displayed are sample concepts. Final prices,
            inclusions, accommodation, travel dates, and availability
            should be confirmed directly with The Tiara Tours & Safaris.
          </p>
        </div>
      </section>

      {/* WHY BOOK WITH TIARA */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B5D36]">
              <span className="h-px w-10 bg-[#0B5D36]" />
              The Tiara Difference
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              More than a trip.
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                A story to remember.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group rounded-2xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0B5D36] hover:shadow-xl sm:p-9"
              >
                <div className="mb-9 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B5D36]/10 text-[#0B5D36]">
                    {reason.number === "01" ? (
                      <Compass size={23} />
                    ) : reason.number === "02" ? (
                      <Mountain size={23} />
                    ) : (
                      <Users size={23} />
                    )}
                  </div>

                  <span className="text-sm tracking-widest text-gray-300">
                    {reason.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{reason.title}</h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {reason.text}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#0B5D36] transition-all duration-300 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM TRIP CTA */}
      <section className="relative isolate overflow-hidden bg-[#07130D] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <img
          src={tiara1}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07130D] via-[#07130D]/95 to-[#0B5D36]/70" />

        <div className="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-[450px] sm:w-[450px]" />

        <div className="relative mx-auto flex max-w-[1240px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-green-300">
              <Sparkles size={16} />
              Made for Your Next Adventure
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Your dream.
              <span className="block font-serif font-normal italic text-green-400">
                Your itinerary.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/65">
              Have a destination in mind? Let us know what you would love
              to experience, and contact our team to discuss your own
              African adventure.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B5D36] px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Create My Trip
              <MoveUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello The Tiara Tours & Safaris! I would like to enquire about a customized safari package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1240px] border-t border-white/15 pt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-white/40">
            The Tiara Tours & Safaris · Your Journey. Our Passion.
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
            ["Safari Packages", "/packages"],
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
                href="/packages"
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