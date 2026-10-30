
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDown,
  MapPin,
  Clock,
  Camera,
  Compass,
  Mountain,
  
  Bird,
  Car,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  TreePine,
  PawPrint,
} from "lucide-react";

import image19 from "../assets/image19.jpg";
import image17 from "../assets/image17.jpg";
import amboseli from "../assets/amboseli.jpg";

function Amboseli() {
  const images = [amboseli, image17, image19];

  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const attractions = [
    {
      number: "01",
      icon: <Mountain size={25} />,
      title: "Observation Hill",
      description:
        "Enjoy panoramic views of Amboseli's vast plains, wetlands and surrounding landscapes.",
    },
    {
      number: "02",
      icon: <TreePine size={25} />,
      title: "Sinet Delta",
      description:
        "Explore scenic wetland habitats that attract wildlife and a variety of bird species.",
    },
    {
      number: "03",
      icon: <PawPrint size={25} />,
      title: "Amboseli Swamps",
      description:
        "Discover important water sources where elephants, hippos and other wildlife gather.",
    },
    {
      number: "04",
      icon: <Compass size={25} />,
      title: "Maasai Culture",
      description:
        "Learn about local traditions, community life and the cultural heritage of the region.",
    },
  ];

  const wildlife = [
    { emoji: "🐘", name: "African Elephants", detail: "Iconic elephant herds" },
    { emoji: "🦁", name: "Lions", detail: "Predators of the plains" },
    { emoji: "🦒", name: "Giraffes", detail: "Graceful savannah giants" },
    { emoji: "🦓", name: "Zebras", detail: "Beautiful plains grazers" },
  ];

  const activities = [
    {
      icon: <Car size={25} />,
      title: "Game Drives",
      description:
        "Explore the park on guided game drives and discover its remarkable wildlife.",
    },
    {
      icon: <Camera size={25} />,
      title: "Wildlife Photography",
      description:
        "Capture elephants, dramatic landscapes and memorable safari moments.",
    },
    {
      icon: <Bird size={25} />,
      title: "Bird Watching",
      description:
        "Look out for the many bird species found around Amboseli's wetlands.",
    },
  ];

  const faqs = [
    {
      question: "What is the best time to visit Amboseli?",
      answer:
        "Amboseli can be visited throughout the year. The drier months are often preferred for wildlife viewing because animals are easier to spot around water sources. Wet seasons can also offer beautiful scenery and excellent birdwatching.",
    },
    {
      question: "How long does it take to travel from Nairobi?",
      answer:
        "The journey from Nairobi generally takes several hours by road, depending on your departure point, route and road conditions. We can help you plan suitable transport and departure arrangements.",
    },
    {
      question: "Can I book a private safari?",
      answer:
        "Yes. You can contact The Tiara Tours & Safaris to discuss a private Amboseli safari, including your preferred travel dates, group size, transport and accommodation requirements.",
    },
    {
      question: "What animals can I see in Amboseli?",
      answer:
        "Amboseli is especially famous for its elephants. Visitors may also encounter lions, giraffes, zebras, buffaloes, hyenas and many bird species. Wildlife sightings are never guaranteed.",
    },
    {
      question: "What should I carry for an Amboseli safari?",
      answer:
        "Consider comfortable clothing, a hat, sunscreen, sunglasses, comfortable shoes, a camera, binoculars and drinking water. We can also advise you on what to pack for your chosen safari.",
    },
  ];

  return (
    <div className="overflow-hidden bg-[#F8FAF8] text-[#101412]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#07130D] sm:min-h-[500px] lg:min-h-[570px]">

        {images.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 -z-30 bg-cover bg-center transition-opacity duration-[1800ms] ease-in-out"
            style={{
              backgroundImage: `url("${img}")`,
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1.04)" : "scale(1)",
              transition:
                "opacity 1800ms ease-in-out, transform 7000ms ease-out",
            }}
          />
        ))}

        <div className="absolute inset-0 -z-20 bg-black/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#04140B]/90 via-[#071D12]/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130D]/90 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-28 sm:px-10 sm:pb-16 lg:px-12">

          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-xs">
              <MapPin size={14} className="text-emerald-400" />
              Destination Spotlight · Kenya
            </div>

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300">
              The land of giants
            </p>

            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Amboseli
              <span className="mt-1 block font-serif font-normal italic text-emerald-400">
                National Park.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Discover magnificent elephant herds, breathtaking landscapes
              and unforgettable views of Mount Kilimanjaro in one of
              Kenya's most remarkable safari destinations.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#0B5D36] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Plan Your Amboseli Safari
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                Discover Amboseli
                <ArrowDown size={16} />
              </a>

            </div>

          </div>

          {/* SLIDE INDICATORS */}
          <div className="mt-9 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={index === i ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === i
                    ? "w-10 bg-emerald-400"
                    : "w-5 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
            <span className="ml-2 text-[10px] font-semibold tracking-widest text-white/60">
              0{index + 1} / 0{images.length}
            </span>
          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK DESTINATION FACTS
      ===================================================== */}
      <section className="relative z-20 mx-auto -mt-1 max-w-6xl px-5 sm:px-8">

        <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-black/5 md:grid-cols-4">

          {[
            { icon: <MapPin size={19} />, label: "Location", value: "Kajiado County" },
            { icon: <Mountain size={19} />, label: "Landscape", value: "Savannah & Wetlands" },
            { icon: <PawPrint size={19} />, label: "Famous For", value: "Elephant Herds" },
            { icon: <Clock size={19} />, label: "Experience", value: "Wildlife Safaris" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`flex items-start gap-3 p-5 sm:p-6 ${
                i !== 3 ? "md:border-r md:border-gray-100" : ""
              } ${i < 2 ? "border-b border-gray-100 md:border-b-0" : ""}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0B5D36]">
                {item.icon}
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                  {item.label}
                </p>
                <p className="mt-1 text-xs font-bold text-[#101412] sm:text-sm">
                  {item.value}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}
      <section id="overview" className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">

          <div className="relative">

            <img
              src={image17}
              alt="Amboseli safari landscape"
              className="h-[300px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px] lg:h-[460px]"
            />

            <div className="absolute -bottom-5 right-4 rounded-xl border border-white/20 bg-[#0B5D36] p-5 text-white shadow-xl sm:right-8">
              <p className="text-2xl font-black">Africa</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-white/75">
                In its wildest beauty
              </p>
            </div>

          </div>

          <div className="pt-3 lg:pt-0">

            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B5D36]">
              <span className="h-px w-8 bg-[#0B5D36]" />
              Explore the destination
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#101412] sm:text-4xl lg:text-5xl">
              Discover the magic of
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                Amboseli.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              Amboseli National Park is one of Kenya's most iconic safari
              destinations, celebrated for its impressive elephant herds
              and spectacular views of Mount Kilimanjaro.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Its open savannahs, seasonal lake, wetlands and rich wildlife
              habitats create a remarkable setting for game drives,
              photography and nature experiences.
            </p>

            <div className="mt-7 space-y-3">

              {[
                "Spectacular Mount Kilimanjaro views",
                "Famous African elephant populations",
                "Scenic wetlands and open plains",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={17} className="shrink-0 text-[#0B5D36]" />
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#0B5D36] transition hover:gap-5"
            >
              Plan a visit with us
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          ATTRACTIONS
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B5D36]">
              Places to discover
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Explore the highlights
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Discover the landscapes, natural habitats and cultural
              experiences that make the Amboseli region special.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {attractions.map((item) => (
              <div
                key={item.number}
                className="group rounded-2xl border border-gray-100 bg-[#F8FAF8] p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0B5D36] transition group-hover:bg-[#0B5D36] group-hover:text-white">
                    {item.icon}
                  </div>

                  <span className="text-xs font-bold tracking-widest text-gray-300">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 text-lg font-bold text-[#101412]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WILDLIFE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#07130D] py-16 text-white sm:py-20 lg:py-24">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                Meet the wild
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Wildlife highlights
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                Experience the incredible wildlife that makes Amboseli
                one of Kenya's most memorable safari destinations.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 transition hover:gap-4"
            >
              Plan a wildlife safari
              <ArrowUpRight size={17} />
            </Link>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">

            {wildlife.map((animal) => (
              <div
                key={animal.name}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10 sm:p-7"
              >

                <div className="text-4xl sm:text-5xl">
                  {animal.emoji}
                </div>

                <h3 className="mt-4 text-sm font-bold sm:text-base">
                  {animal.name}
                </h3>

                <p className="mt-2 text-[10px] text-white/50 sm:text-xs">
                  {animal.detail}
                </p>

              </div>
            ))}

          </div>

          <p className="mt-6 text-center text-[10px] text-white/40">
            Wildlife sightings depend on natural conditions and cannot be guaranteed.
          </p>

        </div>
      </section>


      {/* =====================================================
          ACTIVITIES
      ===================================================== */}
      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B5D36]">
              Make every moment count
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Experiences in Amboseli
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Make your journey memorable with experiences that bring
              you closer to nature.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {activities.map((activity, i) => (
              <div
                key={activity.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B5D36] text-white transition group-hover:bg-emerald-600">
                  {activity.icon}
                </div>

                <p className="mt-7 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  Experience 0{i + 1}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {activity.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {activity.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0B5D36]">
              Need more information?
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Frequently asked
              <span className="block font-serif font-normal italic text-[#0B5D36]">
                questions.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Find helpful information to prepare for your Amboseli
              adventure. Our team is also available to assist with
              your travel plans.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B5D36] px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
            >
              Ask us a question
              <ArrowUpRight size={16} />
            </Link>

          </div>

          <div className="space-y-3">

            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border transition ${
                  openFaq === i
                    ? "border-emerald-200 bg-emerald-50/50"
                    : "border-gray-100 bg-white"
                }`}
              >

                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >

                  <span className="text-sm font-bold text-[#101412]">
                    {faq.question}
                  </span>

                  {openFaq === i ? (
                    <ChevronUp size={18} className="shrink-0 text-[#0B5D36]" />
                  ) : (
                    <ChevronDown size={18} className="shrink-0 text-gray-400" />
                  )}

                </button>

                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="border-t border-emerald-100 pt-4 text-sm leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#0B5D36] py-16 text-center text-white sm:py-20">

        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-3xl px-6">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <Sparkles size={21} className="text-emerald-200" />
          </div>

          <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-100">
            Your African adventure awaits
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
            Ready to experience
            <span className="block font-serif font-normal italic">
              Amboseli?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75">
            Let The Tiara Tours & Safaris help you plan an unforgettable
            journey through one of Kenya's most beautiful wildlife destinations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#0B5D36] transition hover:bg-emerald-50"
            >
              Plan Your Safari
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="https://wa.me/254748799417?text=Hello%20The%20Tiara%20Tours%20%26%20Safaris%2C%20I%20would%20like%20to%20visit%20Amboseli."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="bg-[#101412] pb-7 pt-14 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:px-12">

          {/* BRAND */}
          <div>

            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-black tracking-tight">
                THE TIARA
                <span className="block text-sm font-semibold tracking-[0.25em] text-emerald-400">
                  TOURS & SAFARIS
                </span>
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Discover Africa through unforgettable wildlife safaris,
              scenic escapes and meaningful travel experiences.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
              <MapPin size={14} className="text-emerald-400" />
              Nairobi, Kenya
            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="transition hover:text-emerald-400">Home</Link></li>
              <li><Link to="/destinations" className="transition hover:text-emerald-400">Destinations</Link></li>
              <li><Link to="/safari-packages" className="transition hover:text-emerald-400">Safari Packages</Link></li>
              <li><Link to="/about" className="transition hover:text-emerald-400">About Us</Link></li>
              <li><Link to="/contact" className="transition hover:text-emerald-400">Contact</Link></li>
            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Experiences
            </h3>

            <ul className="mt-6 space-y-3 text-sm text-gray-400">
              <li>Wildlife Safaris</li>
              <li>Private Safari Tours</li>
              <li>Beach Holidays</li>
              <li>Cultural Experiences</li>
              <li>Custom Travel Planning</li>
            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-widest text-white">
              Get in Touch
            </h3>

            <ul className="mt-6 space-y-4 text-sm text-gray-400">

              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="shrink-0 text-emerald-400" />
                <a href="https://wa.me/254748799417" className="transition hover:text-white">
                  +254 748 799417
                </a>
              </li>

              <li className="flex items-center gap-3">
                <ArrowRight size={16} className="shrink-0 text-emerald-400" />
                <a href="mailto:thetiaratoursandtravel@gmail.com" className="break-all transition hover:text-white">
                  thetiaratoursandtravel@gmail.com
                </a>
              </li>

            </ul>

            <a
              href="https://wa.me/254748799417"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0B5D36] px-5 py-3 text-xs font-bold text-white transition hover:bg-emerald-600"
            >
              <MessageCircle size={15} />
              WhatsApp Booking
            </a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 sm:px-10 lg:px-12">

          <div className="flex flex-col justify-between gap-3 text-xs text-gray-500 sm:flex-row sm:items-center">

            <p>
              © {new Date().getFullYear()} The Tiara Tours & Safaris. All Rights Reserved.
            </p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://dennismusa.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-400 transition hover:text-white"
              >
                Dennis Musa
              </a>
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Amboseli;
