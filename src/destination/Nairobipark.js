import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Clock,
  Camera,
  PawPrint,
  
  Trees,
  Bird,
  CheckCircle2,
} from "lucide-react";

import image1 from "../assets/image1.jpg";
import image12 from "../assets/image12.jpg";
import image3 from "../assets/image3.jpg";
import nairobi from "../assets/nairobi.jpg";

const WHATSAPP_LINK = "https://wa.me/254748799417";

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] overflow-hidden bg-[#101412]">
      <img
        src={nairobi}
        alt="Wildlife and landscapes of Nairobi National Park"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#07140d]/85 via-[#07140d]/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] px-6 md:px-12 lg:px-16 flex items-end pb-12 sm:pb-16">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 mb-5">
            <MapPin size={14} className="text-[#72c795]" />
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Nairobi, Kenya
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Nairobi National
            <span className="block text-[#8bd5a9]">Park</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-white/80 max-w-xl leading-7">
            Discover an extraordinary wildlife sanctuary where the African
            wilderness meets the skyline of a modern capital city.
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

      <div className="absolute bottom-7 right-7 hidden lg:flex items-center gap-3 text-white/70">
        <span className="text-[10px] uppercase tracking-[0.2em]">
          Discover Kenya
        </span>
        <div className="w-12 h-px bg-white/50" />
      </div>
    </section>
  );
}

/* ---------------- QUICK FACTS ---------------- */

function QuickFacts() {
  const facts = [
    { icon: Clock, label: "Established", value: "1946" },
    { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
    { icon: PawPrint, label: "Wildlife", value: "Rich Diversity" },
    { icon: Trees, label: "Experience", value: "Urban Safari" },
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
              src={nairobi}
              alt="Nairobi National Park landscape"
              className="w-full h-[350px] sm:h-[460px] object-cover hover:scale-105 transition duration-700"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-black/55 backdrop-blur-md rounded-2xl p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0B5D36] flex items-center justify-center">
                  <Camera size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold">A Unique Safari Setting</p>
                  <p className="text-xs text-white/70 mt-1">
                    Wildlife against a city skyline
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
            The Wild Side of
            <span className="text-[#0B5D36]"> Nairobi</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-8 text-sm sm:text-base">
            Nairobi National Park is one of Kenya's most remarkable wildlife
            destinations. Located just outside the capital's busy city centre,
            it offers an exceptional opportunity to experience African
            wildlife without travelling far from the city.
          </p>

          <p className="mt-4 text-gray-600 leading-8 text-sm sm:text-base">
            The park's open grasslands, scattered acacia trees and scenic
            landscapes provide a habitat for lions, rhinos, giraffes, zebras
            and numerous bird species. It is an ideal destination for game
            drives, photography and memorable short safaris.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Experience wildlife close to Nairobi city",
              "Discover diverse African wildlife",
              "Enjoy scenic game drives and photography",
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

/* ---------------- EXPERIENCE ---------------- */

function Description() {
  const experiences = [
    {
      number: "01",
      title: "Game Drives",
      description:
        "Explore the park's open grasslands in search of lions, rhinos, giraffes and other wildlife.",
      icon: PawPrint,
    },
    {
      number: "02",
      title: "Wildlife Photography",
      description:
        "Capture unforgettable wildlife moments with the Nairobi skyline providing a unique backdrop.",
      icon: Camera,
    },
    {
      number: "03",
      title: "Bird Watching",
      description:
        "Discover a variety of bird species across the park's different habitats and landscapes.",
      icon: Bird,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#f5f8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-[#0B5D36] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
            Discover the Experience
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#101412]">
            Your Urban Safari Adventure
          </h2>

          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-7">
            Experience the beauty of the African wilderness through memorable
            activities in one of Kenya's most accessible national parks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="bg-white p-7 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#0B5D36]/30 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#eaf4ed] flex items-center justify-center">
                    <Icon size={22} className="text-[#0B5D36]" />
                  </div>

                  <span className="text-3xl font-bold text-gray-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#101412]">
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

/* ---------------- GALLERY ---------------- */

function Gallery() {
  const images = [image1, image12, image3];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <span className="text-[#0B5D36] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              Visual Journey
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#101412]">
              Explore Nairobi National Park
            </h2>

            <p className="mt-3 text-sm text-gray-500 max-w-xl">
              A glimpse into the landscapes and wildlife that make this
              destination special.
            </p>
          </div>

          <Link
            to="/contact"
            className="text-sm font-bold text-[#0B5D36] inline-flex items-center gap-2"
          >
            Plan a Visit <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[240px] sm:h-[300px] bg-gray-100"
            >
              <img
                src={img}
                alt={`Nairobi National Park scenery ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70 group-hover:opacity-100 transition" />

              <span className="absolute bottom-5 left-5 text-white text-xs font-bold uppercase tracking-wider">
                Nairobi National Park
              </span>
            </div>
          ))}
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
          Ready to Explore Nairobi National Park?
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-white/75 leading-7">
          Let The Tiara Tours & Safaris help you plan an unforgettable wildlife
          experience just outside Kenya's capital city.
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

export default function NairobiPark() {
  return (
    <main className="bg-white">
      <Hero />
      <QuickFacts />
      <Overview />
      <Description />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}