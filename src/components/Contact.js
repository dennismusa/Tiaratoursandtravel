
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import tiara1 from "../assets/tiara1.jpg";
import tiara2 from "../assets/tiara2.jpg";

const WHATSAPP_NUMBER = "+254748799417";
const PHONE_NUMBER = "+254748799417";
const ALTERNATE_PHONE = "+254748799417";
const EMAIL = "thetiaratoursandtravel@gmail.com";

const contactDetails = [
  {
    icon: Phone,
    label: "Call our team",
    value: PHONE_NUMBER,
    subtext: "Speak with us about your next adventure.",
    href: "tel:+254748799417",
  },
  {
    icon: Mail,
    label: "Email us",
    value: EMAIL,
    subtext: "Send us your travel questions and enquiries.",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Our location",
    value: "Nairobi, Kenya",
    subtext: "Your gateway to unforgettable African adventures.",
    href: "https://www.google.com/maps/search/?api=1&query=Nairobi%2C+Kenya",
  },
];

const travelInterests = [
  "Wildlife Safari",
  "Beach Holiday",
  "Cultural Experience",
  "Group Joining Safari",
  "Family Holiday",
  "Custom Tour",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Wildlife Safari",
    date: "",
    travelers: "2",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Hello Tiara Tours and Safaris!",
      "",
      "I would like to make a travel enquiry.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not provided"}`,
      `Travel interest: ${formData.interest}`,
      `Preferred date: ${formData.date || "Flexible"}`,
      `Number of travellers: ${formData.travelers}`,
      `Message: ${formData.message || "Please share more details."}`,
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-white text-[#101412]">
      {/* HERO */}
      
<section className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-[#07130D] sm:min-h-[480px]">
  {/* BACKGROUND IMAGE */}
  <img
    src={tiara1}
    alt="Explore Kenya with Tiara Tours and Safaris"
    className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
  />

  {/* OVERLAYS */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06110B]/95 via-[#06110B]/75 to-[#06110B]/30" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130D]/70 via-transparent to-black/20" />

  {/* HERO CONTENT */}
  <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
    <div className="max-w-3xl">

      {/* BADGE */}
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white backdrop-blur-md sm:text-xs">
        <span className="h-2 w-2 rounded-full bg-[#76D49B]" />
        We are here to help
      </div>

      {/* EYEBROW */}
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#83D6A2] sm:text-xs sm:tracking-[0.25em]">
        Let's plan something extraordinary
      </p>

      {/* HEADING */}
      <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Your next
        <span className="mt-1 block text-[#83D6A2]">
          adventure
        </span>
        starts here.
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-5 max-w-lg text-sm leading-6 text-white/80 sm:mt-6 sm:text-base sm:leading-7">
        Have a destination in mind or need help choosing your perfect
        getaway? Our team is ready to help you plan an unforgettable
        African experience.
      </p>

      {/* ACTION BUTTONS */}
      <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hello Tiara Tours and Safaris! I would like to plan a trip."
          )}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-[#0B5D36] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#147A49] sm:px-6 sm:text-sm"
        >
          <MessageCircle size={17} />
          Chat on WhatsApp
          <ArrowUpRight size={16} />
        </a>

        <a
          href="#contact"
          className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-xs font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#101412] sm:px-6 sm:text-sm"
        >
          Send an enquiry
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </div>

  {/* FLOATING INFORMATION CARD */}
  <div className="absolute bottom-0 right-0 hidden w-64 border-l border-t border-white/20 bg-[#0B5D36]/90 p-5 text-white backdrop-blur-md lg:block">
    <Compass className="mb-3 text-[#A7E6BC]" size={23} />
    <p className="text-xs text-white/70">
      Your journey. Your story.
    </p>
    <p className="mt-1 text-lg font-bold">
      Let's make it memorable.
    </p>
  </div>
</section>


      {/* INTRODUCTION */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0B5D36]">
              <span className="h-px w-8 bg-[#0B5D36]" />
              Get in touch
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Every great journey begins with a{" "}
              <span className="text-[#0B5D36]">conversation.</span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-gray-600 lg:justify-self-end">
            Whether you are dreaming of the Maasai Mara, planning an Amboseli
            getaway, discovering Kenya's culture, or relaxing on the coast,
            we can help you explore the possibilities and find a trip that
            suits your interests.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0B5D36]/30 hover:shadow-xl hover:shadow-[#0B5D36]/10 sm:p-8"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B5D36]/10 text-[#0B5D36] transition group-hover:bg-[#0B5D36] group-hover:text-white">
                  <Icon size={25} />
                </div>

                <p className="text-sm font-semibold text-gray-500">
                  {item.label}
                </p>

                <h3 className="mt-2 break-words text-lg font-extrabold sm:text-xl">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.subtext}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#0B5D36]">
                  Get in touch
                  <ArrowUpRight
                    size={17}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM AND DETAILS */}
      <section
        id="contact-form"
        className="bg-[#F5F8F5] px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* LEFT PANEL */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0B5D36]">
                Tell us what you have in mind
              </p>

              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Let's design your next{" "}
                <span className="text-[#0B5D36]">escape.</span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-600">
                Share a few details about your plans. Your enquiry will open
                in WhatsApp so you can send it directly to our team.
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B5D36] shadow-sm">
                    <ShieldCheck size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold">Personalised assistance</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Tell us your preferences and we can discuss suitable
                      travel options.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B5D36] shadow-sm">
                    <Globe2 size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold">African travel experiences</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Ask us about wildlife safaris, cultural experiences,
                      beach holidays, and more.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0B5D36] shadow-sm">
                    <Clock size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold">Planning made easier</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Send your enquiry whenever it suits you, and our team
                      can follow up.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-[#07130D] p-7 text-white sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B5D36]">
                  <MessageCircle size={23} />
                </div>
                <div>
                  <p className="font-bold">Prefer a quick chat?</p>
                  <p className="mt-1 text-sm text-white/60">
                    Contact us directly on WhatsApp.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-bold text-[#83D6A2] transition hover:text-white"
              >
                Start a conversation
                <ArrowRight size={18} />
              </a>

              <p className="mt-5 border-t border-white/10 pt-5 text-sm text-white/60">
                Alternative contact: {ALTERNATE_PHONE}
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl shadow-black/[0.04] sm:p-9 lg:p-10">
            <div className="mb-8">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B5D36]/10 text-[#0B5D36]">
                <Sparkles size={23} />
              </div>

              <h3 className="text-2xl font-black sm:text-3xl">
                Plan your adventure
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill in the details below to prepare your WhatsApp enquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Full name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold"
                  >
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254..."
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="mb-2 block text-sm font-bold"
                  >
                    Travel interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                  >
                    {travelInterests.map((interest) => (
                      <option key={interest} value={interest}>
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-bold"
                  >
                    Preferred travel date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="travelers"
                    className="mb-2 block text-sm font-bold"
                  >
                    Number of travellers
                  </label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                  >
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9+"].map(
                      (number) => (
                        <option key={number} value={number}>
                          {number} {number === "1" ? "traveller" : "travellers"}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Tell us about your trip
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Which destination would you love to visit? Tell us about your plans, budget, or any special requests..."
                  className="w-full resize-y rounded-xl border border-gray-200 bg-[#FAFBFA] px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#0B5D36] focus:ring-4 focus:ring-[#0B5D36]/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#0B5D36] px-6 py-4 font-bold text-white transition hover:bg-[#084629] focus:outline-none focus:ring-4 focus:ring-[#0B5D36]/20"
              >
                <Send size={18} />
                Send enquiry via WhatsApp
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              {submitted && (
                <p
                  role="status"
                  className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm leading-6 text-green-800"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0"
                  />
                  Your enquiry was prepared. Complete sending it in the
                  WhatsApp tab that opened.
                </p>
              )}

              <p className="text-center text-xs leading-5 text-gray-500">
                Submitting opens WhatsApp with your details. Your enquiry is
                sent only when you press Send in WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0B5D36]">
              Find us in Kenya
            </p>

            <h2 className="text-4xl font-black sm:text-5xl">
              Your African adventure begins in{" "}
              <span className="text-[#0B5D36]">Nairobi.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-600">
              Contact Tiara Tours and Safaris to discuss your travel
              plans, discover available packages, and start planning your
              next getaway.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Nairobi%2C+Kenya"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#101412] px-6 py-3.5 font-bold text-white transition hover:bg-[#0B5D36]"
            >
              <MapPin size={18} />
              Explore Nairobi on the map
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#07130D] sm:min-h-[390px]">
            <iframe
              title="Map of Nairobi, Kenya"
              src="https://maps.google.com/maps?q=Nairobi%2C%20Kenya&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#07130D] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <img
          src={tiara2}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[#07130D]/85" />

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#83D6A2]">
              <Sparkles size={17} />
              The world is waiting
            </p>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Ready to turn your travel dreams into reality?
            </h2>

            <p className="mt-5 leading-7 text-white/70">
              Reach out today and let's start planning a journey worth
              remembering.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0B5D36] px-7 py-4 font-bold text-white transition hover:bg-[#147A49]"
            >
              <MessageCircle size={19} />
              Plan with us
              <ArrowRight size={18} />
            </a>

            <Link
              to="/packages"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#101412]"
            >
              Explore safaris
              <ArrowUpRight size={18} />
            </Link>
          </div>
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
                +254748799417
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
            "Hello Tiara Tours & Safaris! I'd like to enquire about planning a trip."
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
            href="/"
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
