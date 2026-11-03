/* eslint-disable no-unused-vars */

import React from "react";
import {
  ArrowRight,  ArrowUpRight,  Compass,  Binoculars,  Plane,  Hotel,  Mountain,  Waves,  Camera,  Users,
  // eslint-disable-next-line no-unused-vars
  MapPin,  CalendarDays,  CheckCircle2,  Sparkles,  MessageCircle,  TentTree,  Heart,  CarFront,  Globe2,} from "lucide-react";
import { Link } from "react-router-dom";

import meru from "../assets/meru.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import gorilla from "../assets/gorilla.jpg";
import serengeti from "../assets/serengeti.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";
import diani5 from "../assets/diani5.jpg";
import tailormade2 from "../assets/tailormade2.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";

import tiara1 from "../assets/tiara1.jpg";
import tiara2 from "../assets/tiara2.jpg";
import tiara5 from "../assets/tiara5.jpg";
//import safarivan from "../assets/safarivan.jpg";

const WHATSAPP_NUMBER = "+254748799417";

const services = [
  {
    number: "01",
    title: "Wildlife Safaris",
    category: "Explore the Wild",
    description:
      "Experience Africa's remarkable wildlife through memorable safari adventures, scenic game drives, and encounters with extraordinary natural landscapes.",
    image:serengeti,
    icon: Binoculars,
    features: [
      "National park and reserve visits",
      "Wildlife viewing experiences",
      "Private and group safari options",
    ],
    tag: "Safari Adventures",
  },
  {
    number: "02",
    title: "Tailor-Made Tours",
    category: "Designed Around You",
    description:
      "Turn your travel ideas into a personalized journey with destinations, activities, and experiences selected around your interests and schedule.",
    image:tailormade2,
    icon: Compass,
    features: [
      "Personalized itineraries",
      "Flexible travel experiences",
      "Trips for individuals and groups",
    ],
    tag: "Personalized Travel",
  },
  {
    number: "03",
    title: "Beach Holidays",
    category: "Escape to the Coast",
    description:
      "Discover relaxing coastal escapes, beautiful beaches, ocean views, and opportunities to unwind along Kenya's spectacular coastline.",
    image: diani5,
    icon: Waves,
    features: [
      "Coastal holiday planning",
      "Beach and resort experiences",
      "Optional ocean activities",
    ],
    tag: "Coastal Escapes",
  },
  {
    number: "04",
    title: "Hotel & Accommodation",
    category: "Stay in Comfort",
    description:
      "Find accommodation options that complement your travel plans, from safari lodges and nature retreats to hotels and coastal resorts.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1100&q=85",
    icon: Hotel,
    features: [
      "Accommodation enquiries",
      "Lodge and hotel options",
      "Stays matched to your itinerary",
    ],
    tag: "Comfortable Stays",
  },
  {
    number: "05",
    title: "Adventure & Nature",
    category: "Go Beyond Ordinary",
    description:
      "Explore scenic landscapes, discover outdoor experiences, and enjoy opportunities to connect with the natural beauty of Africa.",
    image:climbinglongonot,
    icon: Mountain,
    features: [
      "Nature and scenic excursions",
      "Outdoor adventure planning",
      "Photography opportunities",
    ],
    tag: "Outdoor Experiences",
  },
  {
    number: "06",
    title: "Group & Family Tours",
    category: "Make Memories Together",
    description:
      "Bring family, friends, colleagues, or travel groups together for shared adventures and memorable experiences across remarkable destinations.",
    image:
      tiara2,
    icon: Users,
    features: [
      "Family holiday planning",
      "Group travel coordination",
      "Customizable group experiences",
    ],
    tag: "Travel Together",
  },
];

const additionalServices = [
  {
    icon: Plane,
    title: "Travel Planning",
    description:
      "Get assistance planning your destinations, travel dates, itinerary, and trip arrangements.",
  },
  {
    icon: CarFront,
    title: "Transport Arrangements",
    description:
      "Discuss transport options for your safari, excursions, transfers, and other travel needs.",
  },
  {
    icon: Camera,
    title: "Photography Experiences",
    description:
      "Explore destinations known for beautiful scenery, memorable wildlife encounters, and photography opportunities.",
  },
  {
    icon: Heart,
    title: "Romantic Getaways",
    description:
      "Plan a special escape for anniversaries, honeymoons, celebrations, or quality time together.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell Us Your Dream",
    description:
      "Share your preferred destination, travel dates, group size, and the experience you have in mind.",
  },
  {
    number: "02",
    title: "Plan Your Journey",
    description:
      "Discuss itinerary ideas, accommodation options, transport, and a package that suits your needs.",
  },
  {
    number: "03",
    title: "Prepare to Explore",
    description:
      "Confirm your arrangements with the team and get ready for your next adventure.",
  },
];

function createServiceWhatsAppLink(serviceTitle) {
  const message = `Hello The Tiara Tours & Safaris! I would like to enquire about your ${serviceTitle} services. Please share more information, available options, and pricing.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

export default function Services() {
  return (
    <main className="overflow-hidden bg-white text-[#101412]">
      {/* CINEMATIC HERO */}
      
<section className="relative isolate flex min-h-[380px] items-end overflow-hidden bg-[#07130D] sm:min-h-[430px] lg:min-h-[480px]">
  {/* BACKGROUND IMAGE */}
  <img
    src={tiara1}
    alt="Discover African travel experiences with The Tiara Tours and Safaris"
    className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
    fetchPriority="high"
  />

  {/* OVERLAYS */}
  <div className="absolute inset-0 -z-20 bg-black/35" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130D] via-[#07130D]/55 to-black/10" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

  {/* FRAME */}
  <div className="absolute inset-3 -z-0 rounded-xl border border-white/15 sm:inset-5 lg:inset-7" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-12 pt-24 sm:px-10 sm:pb-14 sm:pt-28 lg:px-16 lg:pb-16 lg:pt-32">
    <div className="max-w-4xl">

      {/* BRAND BADGE */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:mb-6 sm:text-xs">
        <Sparkles size={14} className="text-green-400" />
        Discover the Tiara Experience
      </div>

      {/* HEADLINE */}
      <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-[76px]">
        Experiences
        <span className="block font-serif font-normal italic text-green-400">
          without limits.
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-xl text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7">
        From unforgettable wildlife encounters to peaceful beach retreats,
        discover travel services designed to bring your African adventure
        to life.
      </p>

      {/* BUTTONS */}
      <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
        <a
          href="#our-services"
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B5D36] px-5 py-3 text-xs font-semibold text-white transition hover:bg-green-700 sm:px-6 sm:py-3.5 sm:text-sm"
        >
          Explore Our Services
          <ArrowUpRight
            size={17}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/5 px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black sm:px-6 sm:py-3.5 sm:text-sm"
        >
          Talk to Our Team
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>

    {/* BOTTOM BRAND LINE */}
    <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-4 text-[9px] uppercase tracking-[0.15em] text-white/60 sm:mt-12 sm:pt-5 sm:text-[10px]">
      <span>Discover. Experience. Remember.</span>

      <a
        href="#services"
        className="inline-flex items-center gap-2 transition hover:text-white"
      >
        Explore What We Do
        <ArrowRight size={14} />
      </a>
    </div>
  </div>
</section>


      {/* INTRODUCTION */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B5D36]">
              <span className="h-px w-10 bg-[#0B5D36]" />
              Travel Your Way
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              One destination.
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                Endless possibilities.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              The perfect journey begins with the right experience.
              Whether you want to explore the wild, escape to the coast,
              discover new landscapes, or organize a special group trip,
              The Tiara Tours & Safaris can help you explore your options.
            </p>

            <p className="mt-5 leading-8 text-gray-500">
              Tell us what inspires you, and let us help you plan a
              memorable trip around your interests, preferred dates,
              and budget.
            </p>

            <Link
              to="/packages"
              className="group mt-8 inline-flex items-center gap-3 border-b-2 border-[#0B5D36] pb-2 text-sm font-bold text-[#0B5D36]"
            >
              Browse Safari Packages
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#0B5D36] sm:-left-5 sm:-top-5" />

            <img
              src={meru}
              alt="Wildlife and landscapes of Africa"
              loading="lazy"
              className="relative h-[350px] w-full rounded-2xl object-cover shadow-xl sm:h-[480px]"
            />

            <div className="absolute -bottom-5 right-4 max-w-[270px] rounded-xl bg-[#0B5D36] p-5 text-white shadow-xl sm:right-7 sm:p-6">
              <Globe2 size={26} className="mb-3 text-green-200" />
              <p className="text-xl font-semibold">
                Africa, Your Way
              </p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Meaningful experiences, remarkable places, lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section
        id="our-services"
        className="scroll-mt-24 bg-[#F7F8F6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B5D36]">
                <span className="h-px w-10 bg-[#0B5D36]" />
                What We Offer
              </p>

              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Designed around
                <span className="block font-serif font-normal italic text-[#0B5D36]">
                  your next adventure.
                </span>
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-500">
              Explore our travel service categories and enquire about the
              experience that best matches your plans.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-500 hover:-translate-y-2 hover:border-green-800/30 hover:shadow-[0_25px_70px_rgba(11,93,54,0.12)]"
                >
                  {/* SERVICE IMAGE */}
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      {service.tag}
                    </span>

                    <span className="absolute right-5 top-5 text-sm font-semibold tracking-widest text-white/80">
                      {service.number}
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-[#0B5D36]/90 text-white backdrop-blur-md">
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* SERVICE DETAILS */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B5D36]">
                      {service.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-500">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                        What to Explore
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm text-gray-600"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#0B5D36]"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={createServiceWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-between gap-3 border-t border-gray-100 pt-6 text-sm font-bold text-[#0B5D36]"
                    >
                      <span>Enquire About This Service</span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 transition duration-300 group-hover:bg-[#0B5D36] group-hover:text-white">
                        <ArrowUpRight size={20} />
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-[#0B5D36]">
              <span className="h-px w-10 bg-[#0B5D36]" />
              More Ways to Explore
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Every detail.
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                Thoughtfully considered.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-500">
              Complement your journey with additional travel arrangements
              and experiences discussed with our team.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#0B5D36] hover:shadow-xl sm:p-7"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B5D36]/10 text-[#0B5D36] transition duration-300 group-hover:bg-[#0B5D36] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>

                  <a
                    href={createServiceWhatsAppLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B5D36]"
                  >
                    Make an Enquiry
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#101412] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-14 max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-green-300">
              <span className="h-px w-10 bg-green-400" />
              Your Journey Starts Here
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              From first idea
              <span className="block font-serif font-normal italic text-green-400">
                to unforgettable.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/60">
              Planning your next trip can be straightforward. Start with
              an idea, discuss the details, and work towards an experience
              that fits your travel goals.
            </p>
          </div>

          <div className="grid gap-0 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={`group border-t border-white/15 py-8 md:pr-8 ${
                  index !== 0 ? "md:border-l md:pl-8" : ""
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-[0.2em] text-green-300">
                    STEP {step.number}
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-300"
                  />
                </div>

                <h3 className="text-2xl font-semibold">{step.title}</h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#07130D] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <img
          src={tiara1}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#07130D] via-[#07130D]/95 to-[#0B5D36]/70" />

        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10 sm:h-[450px] sm:w-[450px]" />

        <div className="relative mx-auto flex max-w-[1240px] flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.23em] text-green-300">
              <Sparkles size={16} />
              Let's Plan Something Extraordinary
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Your next chapter.
              <span className="block font-serif font-normal italic text-green-400">
                Your next adventure.
              </span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/65 sm:text-lg">
              Whether you have a destination in mind or need inspiration,
              get in touch with The Tiara Tours & Safaris and start
              exploring your options.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0B5D36] px-7 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Start Planning
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello The Tiara Tours & Safaris! I would like to enquire about your travel services."
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
