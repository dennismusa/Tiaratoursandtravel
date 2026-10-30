import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Compass,
  Camera,
  Trees,
  PawPrint,
  Binoculars,
  Bird,
  Mountain,
  Waves,
  CheckCircle2,
} from "lucide-react";

import west from "../assets/west.jpg";
import east from "../assets/east.jpg";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative h-[400px] sm:h-[460px] lg:h-[520px] overflow-hidden bg-[#101412]">
      <img
        src={east}
        alt="Tsavo East National Park wilderness"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101412]/90 via-[#101412]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101412]/65 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl h-full mx-auto px-5 sm:px-8 lg:px-10 flex items-end pb-12 sm:pb-16">
        <div className="max-w-3xl text-white">
          <div className="flex items-center gap-2 text-[#a7d6b9] text-xs sm:text-sm font-bold uppercase tracking-[0.22em] mb-5">
            <MapPin size={16} />
            <span>Explore Kenya's Wilderness</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            Tsavo East
            <span className="block text-[#8ac49f]">
              National Park
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/80 leading-7">
            Discover endless savannahs, legendary red elephants and the
            untamed beauty of one of Kenya's remarkable wildlife destinations.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-7 bg-[#0B5D36] hover:bg-[#08472a] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg"
          >
            Plan Your Safari
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
      icon: Trees,
      title: "Landscape",
      value: "Open Savannah",
    },
    {
      icon: PawPrint,
      title: "Wildlife",
      value: "Big Game",
    },
    {
      icon: Compass,
      title: "Experience",
      value: "Game Drives",
    },
    {
      icon: Camera,
      title: "Highlights",
      value: "Red Elephants",
    },
  ];

  return (
    <section className="relative z-20 px-5 sm:px-8 lg:px-10 -mt-1">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        {facts.map((fact, index) => {
          const Icon = fact.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-7 py-5 sm:py-7 border-b lg:border-b-0 border-r border-gray-100 last:border-r-0"
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
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <img
            src={west}
            alt="Tsavo wilderness landscape"
            className="w-full h-[300px] sm:h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
          />

          <div className="absolute -bottom-5 right-4 sm:right-8 bg-[#0B5D36] text-white p-5 sm:p-6 rounded-xl shadow-xl max-w-[220px]">
            <p className="text-2xl sm:text-3xl font-black">Wild</p>
            <p className="text-sm text-white/75 mt-1">
              Untamed. Unforgettable. African.
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <div className="flex items-center gap-2 text-[#0B5D36] uppercase tracking-[0.2em] text-xs font-bold mb-4">
            <span className="w-8 h-[2px] bg-[#0B5D36]" />
            Discover Tsavo
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101412] leading-tight">
            Vast Wilderness of
            <span className="text-[#0B5D36]"> Tsavo East</span>
          </h2>

          <p className="text-gray-600 leading-8 mt-6 text-base">
            Tsavo East National Park is one of Kenya's largest protected
            wilderness areas, celebrated for its expansive savannah plains,
            dramatic landscapes and iconic red-dust elephants.
          </p>

          <p className="text-gray-600 leading-8 mt-4 text-base">
            The park offers an authentic African safari experience, with
            wide horizons, diverse wildlife and spectacular scenery. Its
            natural beauty makes it an unforgettable destination for
            travellers seeking adventure and tranquillity.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-7">
            {[
              "Iconic red elephants",
              "Scenic wildlife drives",
              "Beautiful river landscapes",
              "Exceptional birdlife",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  className="text-[#0B5D36] shrink-0"
                />
                <span className="text-sm font-semibold text-gray-700">
                  {item}
                </span>
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

/* ---------------- FEATURES ---------------- */
function Features() {
  const items = [
    {
      icon: PawPrint,
      title: "Red Elephants of Tsavo",
      description:
        "See the famous elephants whose reddish appearance comes from the park's distinctive red soil.",
    },
    {
      icon: Waves,
      title: "Galana River",
      description:
        "Explore the river ecosystem and its importance to wildlife in this expansive wilderness.",
    },
    {
      icon: Mountain,
      title: "Mudanda Rock",
      description:
        "Enjoy a remarkable natural viewpoint overlooking the surrounding landscape.",
    },
    {
      icon: Trees,
      title: "Endless Savannah",
      description:
        "Experience sweeping plains, open horizons and the raw beauty of the African bush.",
    },
    {
      icon: Bird,
      title: "Rich Birdlife",
      description:
        "Discover a variety of bird species across the park's diverse habitats.",
    },
    {
      icon: Binoculars,
      title: "Wildlife Safaris",
      description:
        "Enjoy game drives in search of elephants, lions, giraffes, zebras and other wildlife.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 bg-[#f5f8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[#0B5D36] uppercase tracking-[0.2em] text-xs font-bold mb-3">
            What Makes It Special
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#101412]">
            Experience the Highlights
          </h2>

          <p className="text-gray-500 mt-4 leading-7">
            From iconic wildlife to breathtaking natural landmarks,
            discover what makes Tsavo East a memorable safari destination.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white p-6 sm:p-7 rounded-2xl border border-gray-100 hover:border-[#0B5D36]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B5D36]/10 text-[#0B5D36] flex items-center justify-center group-hover:bg-[#0B5D36] group-hover:text-white transition-colors">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold text-[#101412] mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7 mt-3">
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

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#101412] py-16 sm:py-20 px-5 sm:px-8">
      <div className="absolute -top-24 -right-20 w-80 h-80 rounded-full bg-[#0B5D36]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-[#0B5D36]/15 blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center text-white">
        <p className="text-[#8ac49f] uppercase tracking-[0.22em] text-xs font-bold mb-4">
          Your African Adventure Awaits
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
          Explore the Untamed Beauty of
          <span className="block text-[#8ac49f] mt-2">
            Tsavo East
          </span>
        </h2>

        <p className="mt-5 text-white/65 max-w-2xl mx-auto leading-7">
          Let The Tiara Tours & Safaris help you experience Kenya's
          remarkable wilderness through an unforgettable safari adventure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-[#0B5D36] hover:bg-[#08472a] text-white px-8 py-4 rounded-full font-bold transition-all"
          >
            Plan Your Safari
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
            <li>Scenic Getaways</li>
            <li>Cultural Experiences</li>
            <li>Beach Holidays</li>
            <li>Private Safari Trips</li>
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

/* ---------------- PAGE ---------------- */
export default function TsavoEast() {
  return (
    <main className="bg-white">
      <Hero />
      <QuickFacts />
      <Overview />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}