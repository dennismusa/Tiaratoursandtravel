import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Mountain,
  Compass,
  Camera,
  Trees,
  Footprints,
  Snowflake,
 
} from "lucide-react";

import image1 from "../assets/image1.jpg";
import image12 from "../assets/image12.jpg";
import image3 from "../assets/image3.jpg";
import mountkenya from "../assets/mountkenya.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative h-[400px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-[#101412]">
      <img
        src={mountkenya}
        alt="Mount Kenya mountain landscape"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101412]/90 via-[#101412]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-10 flex items-end pb-12 sm:pb-16">
        <div className="max-w-3xl text-white">
          <div className="flex items-center gap-2 text-[#a7d6b9] text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-5">
            <MapPin size={16} />
            <span>Discover Kenya's Mountain Wilderness</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            Mount Kenya
            <span className="block text-[#8ac49f]">
              Mountain Adventures
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/80 leading-7">
            Snow-capped peaks, breathtaking alpine scenery and unforgettable
            hiking experiences in the heart of Kenya.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-7 bg-[#0B5D36] hover:bg-[#08472a] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg"
          >
            Plan Your Adventure
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUICK FACTS ---------------- */
function QuickFacts() {
  const facts = [
    {
      icon: Mountain,
      title: "Highest Peak",
      value: "5,199 Metres",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Central Kenya",
    },
    {
      icon: Snowflake,
      title: "Landscape",
      value: "Alpine & Glacial",
    },
    {
      icon: Compass,
      title: "Experience",
      value: "Hiking & Climbing",
    },
  ];

  return (
    <section className="relative z-20 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {facts.map((fact, index) => {
          const Icon = fact.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-7 py-5 sm:py-7 border-b lg:border-b-0 border-r border-gray-100"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B5D36]/10 text-[#0B5D36] flex items-center justify-center shrink-0">
                <Icon size={21} />
              </div>

              <div>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-bold">
                  {fact.title}
                </p>
                <p className="text-sm sm:text-base font-bold text-[#101412] mt-1">
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
  const facts = [
    {
      title: "Elevation",
      value: "5,199m",
      color: "bg-[#0B5D36]/10 text-[#0B5D36]",
    },
    {
      title: "Location",
      value: "Central Kenya",
      color: "bg-gray-100 text-[#101412]",
    },
    {
      title: "Mountain Type",
      value: "Volcanic",
      color: "bg-[#0B5D36]/10 text-[#0B5D36]",
    },
    {
      title: "Recognition",
      value: "UNESCO Site",
      color: "bg-gray-100 text-[#101412]",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <img
            src={mountkenya}
            alt="Mount Kenya alpine landscape"
            className="w-full h-[300px] sm:h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
          />

          <div className="absolute -bottom-5 right-4 sm:right-8 bg-[#0B5D36] text-white p-5 sm:p-6 rounded-xl shadow-xl max-w-[220px]">
            <p className="text-2xl sm:text-3xl font-black">
              5,199m
            </p>
            <p className="text-sm text-white/75 mt-1">
              Africa's second-highest mountain
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <div className="flex items-center gap-2 text-[#0B5D36] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            <span className="w-8 h-[2px] bg-[#0B5D36]" />
            Discover Mount Kenya
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101412] leading-tight">
            The Beauty of
            <span className="text-[#0B5D36]"> Africa's Highlands</span>
          </h2>

          <p className="text-gray-600 leading-8 mt-6 text-base">
            Mount Kenya is Africa's second-highest mountain and a UNESCO
            World Heritage Site. It features glaciers, alpine forests,
            bamboo zones and unique wildlife ecosystems.
          </p>

          <p className="text-gray-600 leading-8 mt-4 text-base">
            This spectacular mountain is a remarkable destination for
            hiking, climbing, nature photography and eco-tourism.
            Its dramatic scenery offers an extraordinary experience
            for outdoor enthusiasts and nature lovers.
          </p>

          <div className="grid grid-cols-2 gap-3 mt-7">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl border border-gray-100 bg-[#f8faf8]"
              >
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  {fact.title}
                </p>
                <p className="font-bold text-[#101412] mt-2 text-sm sm:text-base">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-8 text-[#0B5D36] font-bold border-b-2 border-[#0B5D36] pb-2 hover:gap-5 transition-all"
          >
            Enquire About This Destination
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ALPINE EXPERIENCE ---------------- */
function Description() {
  const experiences = [
    {
      icon: Footprints,
      title: "Mountain Hiking",
      description:
        "Explore scenic mountain trails surrounded by spectacular highland scenery.",
    },
    {
      icon: Snowflake,
      title: "Glacial Landscapes",
      description:
        "Discover the mountain's remarkable alpine environment and dramatic peaks.",
    },
    {
      icon: Trees,
      title: "Forest Exploration",
      description:
        "Experience beautiful forest zones, bamboo vegetation and unique ecosystems.",
    },
    {
      icon: Camera,
      title: "Nature Photography",
      description:
        "Capture unforgettable views, fascinating landscapes and mountain wildlife.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-[#f5f8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-[#0B5D36] uppercase tracking-[0.2em] text-xs font-bold mb-4">
              <span className="w-8 h-[2px] bg-[#0B5D36]" />
              The Mountain Experience
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#101412] leading-tight">
              Adventure Above
              <span className="block text-[#0B5D36]">
                The Ordinary
              </span>
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              Mount Kenya offers some of East Africa's most scenic
              mountain experiences. From forest trails to dramatic
              alpine terrain, every journey reveals a different side
              of this extraordinary natural landmark.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Whether you are interested in hiking, photography or
              exploring Kenya's natural heritage, Mount Kenya provides
              an unforgettable escape into the highlands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0B5D36]/10 text-[#0B5D36] flex items-center justify-center">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-bold text-[#101412] mt-5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-7 mt-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */
function Gallery() {
  const images = [
    {
      src: image1,
      title: "Mountain Landscapes",
      description: "Discover the beauty of Kenya's highlands.",
    },
    {
      src: image12,
      title: "Alpine Wilderness",
      description: "Explore the mountain's remarkable natural scenery.",
    },
    {
      src: image3,
      title: "Scenic Adventures",
      description: "Experience the outdoors in a spectacular setting.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[#0B5D36] uppercase tracking-[0.2em] text-xs font-bold mb-3">
            Explore the Scenery
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#101412]">
            Mount Kenya Gallery
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            A glimpse into the breathtaking landscapes and natural beauty
            of this remarkable destination.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[260px] sm:h-[320px] shadow-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/90 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 mt-2">
                  {item.description}
                </p>
              </div>
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
    <section className="relative overflow-hidden bg-[#101412] py-16 sm:py-20 px-5 sm:px-8">
      <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#0B5D36]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#0B5D36]/15 blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <p className="text-[#8ac49f] uppercase tracking-[0.22em] text-xs font-bold mb-4">
          Your Next Adventure Starts Here
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
          Discover the Magic of
          <span className="block text-[#8ac49f] mt-2">
            Mount Kenya
          </span>
        </h2>

        <p className="mt-5 text-white/65 max-w-2xl mx-auto leading-7">
          Let The Tiara Tours & Safaris help you plan a memorable
          mountain adventure filled with spectacular scenery and
          incredible outdoor experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#0B5D36] hover:bg-[#08472a] text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            Plan Your Trip
            <ArrowRight size={18} />
          </Link>

          <a
            href="https://wa.me/254748799417"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-white/25 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-[#101412] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-black leading-tight">
            The Tiara
            <span className="block text-[#8ac49f]">
              Tours & Safaris
            </span>
          </h2>

          <p className="text-gray-400 text-sm leading-7 mt-5 max-w-xs">
            Discover Kenya through unforgettable wildlife safaris,
            scenic getaways and authentic travel experiences.
          </p>

          <p className="text-gray-500 text-xs mt-5">
            Website designed & developed by Dennis Musa
          </p>

          <a
            href="https://dennismusa.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#8ac49f] hover:text-white text-sm font-semibold mt-3 transition-colors"
          >
            Developer Portfolio
            <ArrowRight size={14} />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm">
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
                  className="hover:text-[#8ac49f] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            Our Experiences
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li>Wildlife Safaris</li>
            <li>Mountain Adventures</li>
            <li>Scenic Getaways</li>
            <li>Cultural Experiences</li>
            <li>Beach Holidays</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">
            Get In Touch
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={17} className="text-[#8ac49f] shrink-0" />
              Nairobi, Kenya
            </li>

            <li className="flex items-center gap-3">
              <span className="text-[#8ac49f]">☎</span>
              +254 748 799417
            </li>

            <li className="break-all">
              <span className="text-[#8ac49f] mr-2">✉</span>
              thetiaratoursandtravel@gmail.com
            </li>

            <li>
              <span className="text-[#8ac49f] mr-2">TikTok</span>
              @thetiaratoursandtravel
            </li>
          </ul>

          <a
            href="https://wa.me/254748799417"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-6 bg-[#0B5D36] hover:bg-[#08472a] text-white px-5 py-3 rounded-lg text-sm font-bold transition-colors"
          >
            WhatsApp Booking
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-5 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} The Tiara Tours & Safaris. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ---------------- MAIN PAGE ---------------- */
export default function MountKenya() {
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