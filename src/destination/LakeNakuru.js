
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  PawPrint,
  Camera,
  Waves,
  Mountain,
  Bird,
  Trees,
  Compass,
  CheckCircle2,
} from "lucide-react";

import image12 from "../assets/image12.jpg";
import nakuru from "../assets/nakuru.jpg";

const WHATSAPP_LINK = "https://wa.me/254748799417";

/* ---------------- HERO ---------------- */

function Hero() {
  const images = [nakuru];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[400px] sm:min-h-[460px] lg:min-h-[520px] overflow-hidden bg-[#101412]">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-all duration-[2200ms]"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === index ? 1 : 0,
              transform: i === index ? "scale(1)" : "scale(1.06)",
            }}
          />
        ))}
      </div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07140d]/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[400px] sm:min-h-[460px] lg:min-h-[520px] px-6 md:px-12 lg:px-16 flex items-end pb-12 sm:pb-16">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 mb-5">
            <MapPin size={14} className="text-[#8bd5a9]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Rift Valley, Kenya
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Lake Nakuru
            <span className="block text-[#8bd5a9]">National Park</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/80 max-w-xl leading-7">
            Discover a beautiful wildlife sanctuary famous for its flamingos,
            endangered rhinos, scenic lake views and rich biodiversity.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#0B5D36] hover:bg-[#087844] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition duration-300"
            >
              Plan Your Safari
              <ArrowUpRight size={17} />
            </Link>

            <a
              href="#park-overview"
              className="inline-flex items-center gap-2 border border-white/40 hover:bg-white hover:text-[#101412] text-white px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition duration-300"
            >
              Explore the Park
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUICK FACTS ---------------- */

function QuickFacts() {
  const facts = [
    { icon: MapPin, label: "Location", value: "Nakuru, Kenya" },
    { icon: Bird, label: "Famous For", value: "Flamingos" },
    { icon: PawPrint, label: "Wildlife", value: "Rhino Sanctuary" },
    { icon: Waves, label: "Landscape", value: "Lake & Woodlands" },
  ];

  return (
    <section className="relative z-20 px-6 -mt-7">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {facts.map((fact, index) => {
          const Icon = fact.icon;

          return (
            <div
              key={fact.label}
              className={`flex items-center gap-3 sm:gap-4 p-5 sm:p-6 ${
                index !== 3 ? "lg:border-r border-gray-100" : ""
              } ${index < 2 ? "border-b lg:border-b-0 border-gray-100" : ""}`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center shrink-0">
                <Icon size={20} className="text-[#0B5D36]" />
              </div>

              <div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  {fact.label}
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#101412] mt-1">
                  {fact.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- OVERVIEW ---------------- */

function Overview() {
  return (
    <section
      id="park-overview"
      className="py-20 sm:py-24 px-6 md:px-12 bg-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-5 -left-5 w-28 h-28 rounded-3xl bg-[#dceee2]" />

          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src={image12}
              alt="Lake Nakuru National Park scenery"
              loading="lazy"
              className="w-full h-[350px] sm:h-[460px] object-cover hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-black/55 backdrop-blur-md rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B5D36] flex items-center justify-center">
                  <Camera size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold">Nature at Its Finest</p>
                  <p className="text-xs text-white/70 mt-1">
                    Wildlife, water and beautiful landscapes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-4 w-24 h-24 rounded-full border-[10px] border-[#0B5D36]/10 -z-10" />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-9 h-[2px] bg-[#0B5D36]" />
            <span className="text-[#0B5D36] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              About the Destination
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101412] leading-tight">
            Discover the Beauty of
            <span className="text-[#0B5D36]"> Lake Nakuru</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-sm sm:text-base">
            Lake Nakuru National Park is internationally recognised for its
            flamingo populations and important rhino sanctuary. The park
            offers beautiful lake views, waterfalls, woodlands and a rich
            variety of wildlife.
          </p>

          <p className="mt-4 text-gray-600 leading-8 text-sm sm:text-base">
            Its diverse habitats provide opportunities to encounter
            endangered rhinos, giraffes, lions and numerous bird species.
            Whether you are interested in wildlife photography or scenic
            game drives, Lake Nakuru offers a memorable safari experience.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Discover the famous Lake Nakuru flamingos",
              "Visit an important rhino sanctuary",
              "Enjoy scenic landscapes and wildlife viewing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={19}
                  className="text-[#0B5D36] shrink-0 mt-0.5"
                />
                <p className="text-sm text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-9 text-[#0B5D36] font-bold text-sm group"
          >
            Enquire About This Safari
            <ArrowRight
              size={17}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ATTRACTIONS ---------------- */

function Attractions() {
  const attractions = [
    {
      title: "Baboon Cliff",
      description:
        "Enjoy elevated views overlooking Lake Nakuru and its surrounding landscapes.",
      icon: Mountain,
    },
    {
      title: "Makalia Falls",
      description:
        "Discover a scenic waterfall surrounded by the natural beauty of the park.",
      icon: Waves,
    },
    {
      title: "Lake Nakuru",
      description:
        "Experience the spectacular lake environment and its diverse birdlife.",
      icon: Bird,
    },
    {
      title: "Rhino Sanctuary",
      description:
        "Explore an important conservation area protecting endangered rhinos.",
      icon: PawPrint,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#f5f8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[#0B5D36] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
            Places to Explore
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#101412]">
            Top Attractions
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-7">
            Explore some of the remarkable natural attractions that make
            Lake Nakuru a special destination.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {attractions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#0B5D36]/30 hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center group-hover:bg-[#0B5D36] transition">
                    <Icon
                      size={22}
                      className="text-[#0B5D36] group-hover:text-white transition"
                    />
                  </div>

                  <span className="text-3xl font-bold text-gray-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#101412]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WILDLIFE ---------------- */

function Wildlife() {
  const animals = [
    { name: "Flamingos", icon: Bird },
    { name: "Rhinos", icon: PawPrint },
    { name: "Giraffes", icon: Trees },
    { name: "Lions", icon: PawPrint },
  ];

  return (
    <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#101412] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[#8bd5a9] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
            Discover the Wildlife
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            Wildlife Highlights
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/60 leading-7">
            Look out for some of Kenya's most fascinating wildlife as you
            explore the park's different habitats.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {animals.map((animal) => {
            const Icon = animal.icon;

            return (
              <div
                key={animal.name}
                className="group bg-white/[0.06] border border-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 text-center hover:bg-[#0B5D36] hover:border-[#0B5D36] transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
                  <Icon
                    size={27}
                    className="text-[#8bd5a9] group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-base sm:text-xl font-bold mt-5">
                  {animal.name}
                </h3>

                <p className="text-xs text-white/50 mt-2">
                  Wildlife encounter
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */

function Experience() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#0B5D36] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
            Make Your Journey Count
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#101412] leading-tight">
            Experience More Than Just a Safari
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-500 leading-8">
            Lake Nakuru offers a wonderful combination of wildlife viewing,
            scenic landscapes and bird watching. Explore the park at your
            own pace and discover the natural beauty of the Rift Valley.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#f5f8f5]">
              <Camera className="text-[#0B5D36]" size={23} />
              <h3 className="font-bold text-[#101412] mt-4 text-sm">
                Photography
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-6">
                Capture beautiful scenery and wildlife.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f5f8f5]">
              <Compass className="text-[#0B5D36]" size={23} />
              <h3 className="font-bold text-[#101412] mt-4 text-sm">
                Game Drives
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-6">
                Explore the park's diverse habitats.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#101412] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border-[30px] border-white/5" />

          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-[#0B5D36] flex items-center justify-center">
              <Trees size={23} />
            </div>

            <h3 className="mt-7 text-2xl sm:text-3xl font-bold">
              Your Lake Nakuru Adventure Awaits
            </h3>

            <p className="mt-4 text-sm text-white/65 leading-7">
              Let The Tiara Tours & Safaris help you plan a memorable journey
              through one of Kenya's most beautiful wildlife destinations.
            </p>

            <Link
              to="/safari-packages"
              className="inline-flex items-center gap-3 mt-8 bg-white text-[#0B5D36] px-6 py-3.5 rounded-full text-sm font-bold hover:bg-[#eaf4ed] transition"
            >
              View Safari Packages
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 px-6 bg-[#0B5D36]">
      <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full border-[45px] border-white/5" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full border-[55px] border-white/5" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <span className="text-white/70 text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
          Your Adventure Starts Here
        </span>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Experience the Magic of Lake Nakuru
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-white/75 leading-7">
          Discover flamingos, rhinos and beautiful landscapes with
          The Tiara Tours & Safaris.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#0B5D36] px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#eaf4ed] transition"
          >
            Plan Your Safari
            <ArrowRight size={17} />
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition"
          >
            WhatsApp Us
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#101412] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* BRAND */}

          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                The Tiara
                <span className="block text-[#65b985]">
                  Tours & Safaris
                </span>
              </h2>
            </Link>

            <p className="mt-5 text-sm text-gray-400 leading-7 max-w-xs">
              Discover Kenya through unforgettable wildlife safaris, scenic
              getaways and authentic travel experiences.
            </p>

            <p className="mt-5 text-xs text-gray-500">
              Website designed & developed by
              <span className="text-white font-semibold"> Dennis Musa</span>
            </p>

            <a
              href="https://dennismusa.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-[#65b985] hover:text-white text-xs font-bold transition"
            >
              Developer Portfolio <ArrowUpRight size={14} />
            </a>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              {[
                ["Home", "/"],
                ["Destinations", "/destinations"],
                ["Safari Packages", "/safari-packages"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="hover:text-[#65b985] transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Our Experiences
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>Wildlife Safaris</li>
              <li>Game Drives</li>
              <li>Scenic Getaways</li>
              <li>Cultural Experiences</li>
              <li>Beach Holidays</li>
            </ul>
          </div>

          {/* CONTACT */}

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-[#65b985] shrink-0" />
                Nairobi, Kenya
              </li>

              <li>
                <a
                  href="tel:+254748799417"
                  className="hover:text-[#65b985] transition"
                >
                  +254 748 799417
                </a>
              </li>

              <li>
                <a
                  href="mailto:thetiaratoursandtravel@gmail.com"
                  className="hover:text-[#65b985] transition break-all"
                >
                  thetiaratoursandtravel@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="https://www.tiktok.com/@thetiaratoursandtravel"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#65b985] transition"
                >
                  TikTok: @thetiaratoursandtravel
                </a>
              </li>
            </ul>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-6 bg-[#0B5D36] hover:bg-[#087844] text-white px-5 py-3 rounded-lg text-xs font-bold transition"
            >
              WhatsApp Booking
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} The Tiara Tours & Safaris. All Rights
            Reserved.
          </p>

          <p className="text-xs text-gray-500">
            Explore Kenya. Experience More.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- MAIN PAGE ---------------- */

export default function LakeNakuru() {
  return (
    <main className="bg-white">
      <Hero />
      <QuickFacts />
      <Overview />
      <Attractions />
      <Wildlife />
      <Experience />
      <CTA />
      <Footer />
    </main>
  );
}
