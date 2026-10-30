/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useLanguageSync from "../hooks/useLanguageSync";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

//import cruiser1 from "../assets/cruiser1.jpg";
import cruiser2 from "../assets/cruiser2.jpg";
import image1 from "../assets/image1.jpg";
import nakuru from "../assets/nakuru.jpg";
import image16 from "../assets/image16.jpg";
import image4 from "../assets/image4.jpg";
import image2 from "../assets/image2.jpg";
import west from "../assets/west.jpg";
import amboseli from "../assets/amboseli.jpg";
import climbingkenya from "../assets/climbingkenya.jpg";
import climbinglongonot from "../assets/climbinglongonot.jpg";
import climbingkili from "../assets/climbingkili.jpg";
import meru from "../assets/meru.jpg";
import hellsgate from "../assets/hellsgate.jpg";
import gorilla from "../assets/gorilla.jpg";
import serengeti from "../assets/serengeti.jpg";
import serengeti2 from "../assets/serengeti2.jpg";
import tanzania from "../assets/tanzania.jpg";
import Wilderbeast from "../assets/Wilderbeast.jpg";
import kenya from "../assets/kenya.jpg";
import image17 from "../assets/image17.jpg";

import tiara1 from "../assets/tiara1.jpg";
import tiara2 from "../assets/tiara2.jpg";
import tiara5 from "../assets/tiara5.jpg";
import safarivan from "../assets/safarivan.jpg";


import poster1 from "../assets/poster1.jpg";
import poster2 from "../assets/poster2.jpg";
import poster3 from "../assets/poster3.jpg";
import poster4 from "../assets/poster4.jpg";
import poster5 from "../assets/poster5.jpg";
import poster6 from "../assets/poster6.jpg";

function Home() {
  useLanguageSync();
  const images = [tiara2, tiara1,tiara5,safarivan];
  const [index, setIndex] = useState(0);
const aboutImages = [tiara5];
const [aboutIndex,setAboutIndex]=useState(0);
const [smallAboutIndex,setSmallAboutIndex]=useState(1);


//const [selectedSafari, setSelectedSafari] = useState(null);
const [activeTab, setActiveTab] = useState("overview");


  // ================= REVIEWS STATE =================
  const [reviews, setReviews] = useState([]);
   const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  
const [typedText, setTypedText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const [typingIndex, setTypingIndex] = useState(0);  
const [loading, setLoading] = useState(false);
const [loadingReviews, setLoadingReviews] = useState(false);
const [success, setSuccess] = useState(false);




const [selectedSafari, setSelectedSafari] = useState(null);
const [bookingError, setBookingError] = useState("");

const [bookingForm, setBookingForm] = useState({
  name: "",
  phone: "",
  travelDate: "",
  guests: "2",
  message: "",
});

const openBooking = (safari) => {
  setSelectedSafari(safari);
  setBookingError("");
  setBookingForm({
    name: "",
    phone: "",
    travelDate: "",
    guests: "2",
    message: "",
  });
};

const closeBooking = () => {
  setSelectedSafari(null);
  setBookingError("");
};

const submitBooking = (e) => {
  e.preventDefault();

  if (
    !bookingForm.name.trim() ||
    !bookingForm.phone.trim() ||
    !bookingForm.travelDate
  ) {
    setBookingError("Please complete all required fields.");
    return;
  }

  const message = [
    "Hello The Tiara Tours & Safaris!",
    "",
    `Safari package: ${selectedSafari.name}`,
    `Destination: ${selectedSafari.destination}`,
    `Full name: ${bookingForm.name.trim()}`,
    `Phone: ${bookingForm.phone.trim()}`,
    `Travel date: ${bookingForm.travelDate}`,
    `Number of guests: ${bookingForm.guests}`,
    `Special requests: ${bookingForm.message.trim() || "None"}`,
    "",
    "Please share the current price, itinerary, availability and package inclusions.",
  ].join("\n");

  const url = `https://wa.me/254748799417?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
};



const typingTexts = [
  "Explore Kenya With Luxury Safari Vehicles",
  "Discover Kenya With Tiara Tours & Safaris",
  "Experience Africa In Comfort",
  "Your Adventure. Our Expertise."
];


const safariPackages = [
  // 1. WILDEBEEST MIGRATION
  {
    id: "wildebeest",
    titleKey: "safariPackages.wildebeest.title",
    locationKey: "safariPackages.wildebeest.location",
    durationKey: "safariPackages.wildebeest.duration",
    departureKey: "safariPackages.wildebeest.departure",
    prices: {
      citizens: "KSh. 30,860",
      nonResidents: "USD 693",
    },
    accommodationKey: "safariPackages.wildebeest.accommodation",
    activitiesKeys: [
      "safariPackages.wildebeest.activities.0",
      "safariPackages.wildebeest.activities.1",
      "safariPackages.wildebeest.activities.2",
    ],
    includedKeys: [
      "safariPackages.wildebeest.included.0",
      "safariPackages.wildebeest.included.1",
      "safariPackages.wildebeest.included.2",
      "safariPackages.wildebeest.included.3",
      "safariPackages.wildebeest.included.4",
    ],
    excludedKeys: [
      "safariPackages.wildebeest.excluded.0",
      "safariPackages.wildebeest.excluded.1",
      "safariPackages.wildebeest.excluded.2",
    ],
    image: poster1,
  },
];
  // 2. LAKE NAKURU
  

  // ================= SLIDER =================
  useEffect(()=>{

const slider=setInterval(()=>{

// HERO SLIDER
setIndex(prev=>(prev + 1) % images.length);

// ABOUT SLIDER
setAboutIndex(prev=>(prev + 1) % aboutImages.length);
setSmallAboutIndex(prev=>(prev + 1) % aboutImages.length);

},4000);



    return () => clearInterval(slider);
  }, [aboutImages.length, images.length]);



  // ================= TYPING EFFECT =================
useEffect(() => {
  const currentText = typingTexts[typingIndex];

  const speed = isDeleting ? 45 : 80;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setTypedText(currentText.substring(0, typedText.length + 1));

      if (typedText.length === currentText.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      setTypedText(currentText.substring(0, typedText.length - 1));

      if (typedText.length === 0) {
        setIsDeleting(false);
        setTypingIndex(
          (prev) => (prev + 1) % typingTexts.length
        );
      }
    }
  }, speed);

  return () => clearTimeout(timer);
}, [typedText, isDeleting, typingIndex]);
  // ================= SUBMIT REVIEW (IMPORTANT PART 2) =================
 
// instantly update UI

  
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">




<section
  id="home"
  className="relative isolate flex min-h-[400px] items-end overflow-hidden bg-[#07130D] sm:min-h-[460px] lg:min-h-[520px]"
>
  {/* BACKGROUND IMAGE SLIDER */}
  <div className="absolute inset-0 -z-20">
    {images.map((img, i) => (
      <div
        key={img}
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms] ease-in-out"
        style={{
          backgroundImage: `url("${img}")`,
          opacity: i === index ? 1 : 0,
          transform: i === index ? "scale(1.04)" : "scale(1)",
          transition:
            "opacity 1600ms ease-in-out, transform 7000ms ease-out",
        }}
      />
    ))}
  </div>

  {/* OVERLAYS */}
  <div className="absolute inset-0 -z-10 bg-black/25" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03140C]/95 via-[#071D12]/75 to-[#07130D]/15" />
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#07130D]/90 via-transparent to-black/20" />

  <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-[90px]" />

  {/* HERO CONTENT */}
  <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
    <div className="max-w-2xl text-white">

      {/* BRAND BADGE */}
      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/25 px-3.5 py-2 shadow-lg backdrop-blur-md sm:px-4">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-white sm:text-[10px] sm:tracking-[2px]">
          The Tiara Tours & Safaris
        </span>

        <span className="hidden h-3 w-px bg-white/30 sm:block" />

        <span className="hidden text-[9px] font-medium uppercase tracking-wider text-emerald-200 sm:block">
          Discover Africa
        </span>
      </div>

      {/* TYPING HEADLINE */}
      <h1
        className="min-h-[100px] max-w-2xl text-[clamp(2.1rem,5.5vw,4.5rem)] font-black leading-[1.05] tracking-[-0.04em] text-white drop-shadow-2xl sm:min-h-[125px] lg:min-h-[145px]"
        aria-label={typedText}
      >
        {typedText}
        <span
          className="ml-1 inline-block font-light text-emerald-400 animate-pulse"
          aria-hidden="true"
        >
          |
        </span>
      </h1>

      {/* GREEN ACCENT */}
      <div className="mb-4 mt-3 flex items-center gap-3">
        <span className="h-[3px] w-10 rounded-full bg-emerald-400 sm:w-12" />
        <span className="h-px w-6 bg-white/40" />
        <span className="text-[8px] font-semibold uppercase tracking-[1.5px] text-emerald-100 sm:text-[9px] sm:tracking-[2px]">
          Your journey. Your story.
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="max-w-lg text-xs leading-6 text-gray-100 drop-shadow-md sm:text-sm sm:leading-7 lg:text-base">
        {t("heroDesc")}
      </p>

      

      {/* TRUST INDICATORS */}
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        {[
          "Wildlife Safaris",
          "Tailor-Made Holidays",
          "Kenya & East Africa",
        ].map((item) => (
          <div
            key={item}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[10px] font-medium text-white backdrop-blur-sm sm:text-xs"
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500/20 text-[9px] text-emerald-300">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* SLIDE INDICATORS */}
  <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:bottom-auto lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col">
    {images.map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => setIndex(i)}
        aria-label={`Go to slide ${i + 1}`}
        aria-current={i === index ? "true" : undefined}
        className={`rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          i === index
            ? "h-2 w-7 bg-emerald-400 lg:h-9 lg:w-1.5"
            : "h-2 w-2 bg-white/60 hover:bg-white lg:h-2 lg:w-2"
        }`}
      />
    ))}
  </div>

  {/* BOTTOM BRAND LINE */}
  <div className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
</section>








      {/* ABOUT / EXPERIENCE SECTION */}
{/* ABOUT / EXPERIENCE SECTION */}
<section
  id="about"
  className="relative isolate overflow-hidden bg-[#F7F9F7] py-20 sm:py-28 lg:py-32"
>
  {/* BACKGROUND DESIGN */}
  <div className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[550px] w-[550px] rounded-full bg-emerald-200/30 blur-[120px]" />
  <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-100/60 blur-[120px]" />

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">

      {/* ================================= */}
      {/* LEFT: PREMIUM IMAGE COMPOSITION */}
      {/* ================================= */}
      <div className="relative mx-auto w-full max-w-xl lg:mx-0">

        {/* Decorative frame */}
        <div className="absolute -left-4 -top-4 h-32 w-32 rounded-tl-[36px] border-l-2 border-t-2 border-emerald-700/50 sm:-left-6 sm:-top-6" />

        <div className="absolute -bottom-5 -right-5 h-40 w-40 rounded-br-[36px] border-b-2 border-r-2 border-emerald-700/40 sm:-bottom-7 sm:-right-7" />

        {/* Main image */}
        <div className="group relative overflow-hidden rounded-[28px] bg-[#082D19] shadow-2xl sm:rounded-[38px]">
          <img
            src={aboutImages[aboutIndex]}
            alt="Experience the beauty and wildlife of Africa with Tiara Tours & Safaris"
            className="h-[430px] w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105 sm:h-[540px] lg:h-[600px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 to-transparent" />

          {/* Image caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-emerald-100">
                The African Experience
              </span>
            </div>

            <h3 className="max-w-md text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl">
              More Than a Trip.
              <span className="block text-emerald-300">
                A Journey to Remember.
              </span>
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/80 sm:text-base">
              Discover extraordinary wildlife, breathtaking landscapes and
              authentic African experiences.
            </p>
          </div>
        </div>

        {/* Floating destination badge */}
        <div className="absolute -right-2 top-8 rounded-2xl border border-white/70 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-xl sm:-right-5 sm:top-12 sm:px-7 sm:py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-xl">
              🌍
            </div>
            <div>
              <p className="text-sm font-black tracking-wide text-gray-950">
                Explore Africa
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Your adventure starts here
              </p>
            </div>
          </div>
        </div>

        {/* Secondary image */}
        <div className="absolute -bottom-8 left-5 hidden h-44 w-36 overflow-hidden rounded-2xl border-[6px] border-[#F7F9F7] shadow-2xl sm:block md:left-8 md:h-52 md:w-44">
          <img
            src={poster1}
            alt="An African safari adventure"
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>

        {/* Bottom experience note */}
        <div className="absolute bottom-5 right-4 hidden max-w-[210px] items-center gap-3 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:flex lg:-right-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-xl text-white">
            ✦
          </div>
          <div>
            <p className="text-sm font-extrabold text-gray-900">
              Discover the Extraordinary
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              Wildlife, culture and unforgettable memories.
            </p>
          </div>
        </div>
      </div>

      {/* ================================ */}
      {/* RIGHT: ABOUT CONTENT */}
      {/* ================================ */}
      <div className="relative pt-5 lg:pt-0">

        {/* Section label */}
        <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          <span className="text-[11px] font-extrabold uppercase tracking-[3px] text-emerald-900 sm:text-xs">
            About Tiara Tours & Safaris
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-[58px]">
          Your Gateway to
          <span className="mt-2 block text-emerald-800">
            Unforgettable Africa.
          </span>
        </h2>

        <div className="mt-7 flex items-center gap-3">
          <span className="h-1.5 w-16 rounded-full bg-emerald-700" />
          <span className="h-1.5 w-5 rounded-full bg-emerald-300" />
          <span className="h-1.5 w-2 rounded-full bg-emerald-100" />
        </div>

        {/* Description */}
        <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
          At <strong className="font-bold text-gray-950">Tiara Tours & Safaris</strong>,
          we believe every journey should be more than a destination. It should
          be an opportunity to explore, connect, discover and create memories
          that last a lifetime.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
          From thrilling wildlife safaris and scenic getaways to enriching
          cultural experiences and relaxing beach escapes, we help you discover
          the remarkable beauty and diversity of Kenya and East Africa.
        </p>

        {/* Feature cards */}
        <div className="mt-9 grid gap-4 sm:grid-cols-2">

          {/* Feature 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-emerald-50 transition-colors group-hover:bg-emerald-100" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-lg shadow-emerald-900/15 transition-transform duration-300 group-hover:scale-110">
                <span>🚙</span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-gray-950">
                Safari Adventures
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                Discover incredible wildlife, iconic national parks and
                breathtaking African landscapes.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5">
            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-emerald-50 transition-colors group-hover:bg-emerald-100" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-lg shadow-emerald-900/15 transition-transform duration-300 group-hover:scale-110">
                <span>🧭</span>
              </div>

              <h3 className="mt-5 text-lg font-extrabold text-gray-950">
                Memorable Getaways
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                Enjoy scenic escapes, cultural discoveries and relaxing
                coastal holidays tailored to your travel dreams.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-950/5 sm:col-span-2">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl shadow-lg shadow-emerald-900/15 transition-transform duration-300 group-hover:scale-110">
                <span>✧</span>
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-gray-950">
                  Experiences Made for You
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Whether you seek adventure, relaxation, nature or culture,
                  let us help you plan a journey that reflects your interests.
                </p>
              </div>

              <div className="hidden shrink-0 text-3xl text-emerald-700 sm:ml-auto sm:block">
                ↗
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="/safari-packages"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-900 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-emerald-950/15 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-800 hover:shadow-xl"
          >
            Explore Our Safaris
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="https://wa.me/254748799417"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-gray-300 bg-white px-7 py-4 text-sm font-extrabold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700 hover:text-emerald-800"
          >
            Plan Your Adventure
            <span className="text-lg">↗</span>
          </a>
        </div>

        {/* Closing brand line */}
        <div className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[2px] text-gray-400">
          <span className="h-px w-8 bg-emerald-300" />
          Wildlife · Nature · Culture · Discovery
        </div>
      </div>
    </div>
  </div>
</section>


{/* ============================================================
    PREMIUM SAFARI PACKAGES — MULTI-LANGUAGE
    Supports: EN / DE / ES / FR
============================================================ */}



{/* ============================================================
    PREMIUM SAFARI PACKAGES
============================================================ */}
{/* ============================================================
    PREMIUM SAFARI PACKAGES — MULTI-LANGUAGE
============================================================ */}
{/* ============================================================
    PREMIUM SAFARI PACKAGES
============================================================ */}


<section
  id="safari-packages"
  className="relative isolate overflow-hidden bg-[#f8f7f1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#dba33a]/10 blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-emerald-900/10 blur-[110px]" />

  <div className="mx-auto max-w-7xl">

    {/* SECTION HEADER */}
    <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#dba33a]/40 bg-white/80 px-5 py-2.5 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#b98220]" />
        <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#082d19] sm:text-xs">
          Discover Your Next Adventure
        </span>
      </div>

      <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[#082d19] sm:text-5xl lg:text-6xl">
        Exceptional Safari
        <span className="mt-2 block text-[#b98220]">
          Experiences Await
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
        Explore Kenya and East Africa through unforgettable wildlife
        encounters, breathtaking landscapes and carefully planned adventures.
        Find your next journey and let the experience begin.
      </p>

      <div className="mt-7 flex items-center justify-center gap-2">
        <span className="h-1 w-10 rounded-full bg-[#082d19]" />
        <span className="h-1 w-3 rounded-full bg-[#dba33a]" />
        <span className="h-1 w-1 rounded-full bg-[#082d19]/30" />
      </div>
    </div>

    {/* SAFARI PACKAGE CARDS */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {safariPackages.map((safari, index) => {
        const safariTitle = safari.title || safari.name || "Safari Adventure";
        const safariLocation = safari.location || "East Africa";
        const safariDuration = safari.duration || "Duration on request";
        const safariDeparture = safari.departure || "Contact us for departure details";
        const safariAccommodation = safari.accommodation || "";
        const activities = safari.activities || [];
        const includedItems = safari.included || [];
        const excludedItems = safari.excluded || [];

        const safariPosters = [
          poster1,
          poster2,
          poster3,
          poster4,
          poster5,
          poster6,
        ];

        const safariPoster =
          safari.image || safari.poster || safariPosters[index] || poster1;

        const openDetails = () => {
          setSelectedSafari({
            ...safari,
            displayTitle: safariTitle,
            displayLocation: safariLocation,
            displayDuration: safariDuration,
            displayDeparture: safariDeparture,
            displayAccommodation: safariAccommodation,
            displayActivities: activities,
            displayIncluded: includedItems,
            displayExcluded: excludedItems,
            displayPoster: safariPoster,
            displayDescription:
              safari.description || safari.overview || "",
          });
        };

        const bookingMessage =
          `Hello Tiara Tours & Safaris! I am interested in the ${safariTitle} package. ` +
          "Please share the full itinerary, prices, availability and booking details.";

        return (
          <article
            key={safari.id || index}
            className="group relative isolate flex min-h-[510px] flex-col overflow-hidden rounded-[28px] bg-[#082d19] shadow-[0_15px_45px_rgba(8,45,25,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(8,45,25,0.22)] sm:min-h-[540px]"
          >
            {/* FULL CARD IMAGE */}
            <img
              src={safariPoster}
              alt={safariTitle}
              loading={index < 3 ? "eager" : "lazy"}
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/5 to-[#03160c]/95" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#03160c]/65 via-transparent to-transparent" />

            {/* TOP LABELS */}
            <div className="flex items-start justify-between gap-3 p-5">
              <span className="max-w-[60%] rounded-full border border-white/30 bg-black/35 px-3.5 py-2 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:text-[10px]">
                {safariDuration}
              </span>

              <span className="rounded-full border border-[#f3c45d]/50 bg-[#082d19]/80 px-3 py-2 text-[9px] font-extrabold uppercase tracking-wider text-[#f3c45d] backdrop-blur-md sm:text-[10px]">
                Safari Collection
              </span>
            </div>

            {/* BOTTOM CARD CONTENT */}
            <div className="mt-auto p-5 sm:p-6">
              <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#f3c45d]">
                {safariLocation}
              </p>

              <h3 className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">
                {safariTitle}
              </h3>

              <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-white/80">
                <span className="text-[#f3c45d]">⌖</span>
                <span>{safariDeparture}</span>
              </p>

              {/* PRICING */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/20 bg-black/30 p-3.5 backdrop-blur-lg">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/60">
                    Kenyan Citizens
                  </p>
                  <p className="mt-2 break-words font-serif text-lg font-bold text-white sm:text-xl">
                    {safari.prices?.citizens || "On request"}
                  </p>
                  <p className="mt-1 text-[10px] text-white/55">
                    Per person
                  </p>
                </div>

                <div className="rounded-2xl border border-[#f3c45d]/40 bg-[#082d19]/80 p-3.5 backdrop-blur-lg">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-white/60">
                    Non-residents
                  </p>
                  <p className="mt-2 break-words font-serif text-lg font-bold text-[#f3c45d] sm:text-xl">
                    {safari.prices?.nonResidents || "On request"}
                  </p>
                  <p className="mt-1 text-[10px] text-white/55">
                    Per person
                  </p>
                </div>
              </div>

              {/* ACCOMMODATION */}
              {safariAccommodation && (
                <div className="mt-4 flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-lg">
                    🛖
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#f3c45d]">
                      Accommodation
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-white/80">
                      {safariAccommodation}
                    </p>
                  </div>
                </div>
              )}

              {/* ACTION BUTTONS */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={openDetails}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/10 px-3 py-3.5 text-[11px] font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-[#082d19] sm:text-xs"
                >
                  Explore Package
                  <span>↗</span>
                </button>

                <a
                  href={`https://wa.me/254748799417?text=${encodeURIComponent(
                    bookingMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#dba33a] px-3 py-3.5 text-[11px] font-extrabold text-[#082d19] transition duration-300 hover:bg-[#f3c45d] sm:text-xs"
                >
                  Book Now
                  <span>→</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>

    {/* BOTTOM BOOKING BANNER */}
    <div className="relative mt-12 overflow-hidden rounded-[28px] bg-[#082d19] px-6 py-10 shadow-xl sm:px-10 sm:py-14 lg:px-14">
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-5 -top-12 h-44 w-44 rounded-full border border-[#dba33a]/30" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#f3c45d] sm:text-xs">
            Your Next Adventure Starts Here
          </p>

          <h3 className="mt-4 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your Dream Safari.
            <span className="block text-[#f3c45d]">
              Your Kind of Adventure.
            </span>
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Have a destination in mind? Let our team help you explore your
            options, customise your itinerary and plan a memorable African
            getaway.
          </p>
        </div>

        <a
          href={`https://wa.me/254748799417?text=${encodeURIComponent(
            "Hello Tiara Tours & Safaris! I would like help planning a safari. Please share your packages, prices and available travel dates."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#dba33a] px-7 py-4 text-sm font-extrabold text-[#082d19] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#f3c45d]"
        >
          Plan My Safari
          <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  </div>

  {/* ========================================= */}
  {/* DETAILED SAFARI PACKAGE MODAL */}
  {/* ========================================= */}
  {selectedSafari && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-2 backdrop-blur-md sm:p-5 lg:p-8"
      onClick={() => setSelectedSafari(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="safari-modal-title"
        className="relative flex max-h-[96dvh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#fffdf8] shadow-2xl sm:max-h-[92dvh] sm:rounded-[28px]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* MODAL HERO */}
        <div className="relative h-[240px] shrink-0 overflow-hidden bg-[#082d19] sm:h-[320px] lg:h-[350px]">
          <img
            src={
              selectedSafari.displayPoster ||
              selectedSafari.image ||
              poster1
            }
            alt={selectedSafari.displayTitle}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#03160c]/95 via-black/25 to-black/30" />

          {/* MODAL TOP BAR */}
          <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-7 sm:right-7 sm:top-6">
            <span className="rounded-full border border-white/25 bg-black/35 px-4 py-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-md sm:text-[10px]">
              Tiara Safari Experience
            </span>

            <button
              type="button"
              aria-label="Close safari details"
              onClick={() => setSelectedSafari(null)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-2xl text-white backdrop-blur-md transition hover:rotate-90 hover:bg-[#dba33a] hover:text-[#082d19] sm:h-12 sm:w-12"
            >
              ×
            </button>
          </div>

          {/* MODAL TITLE */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#dba33a] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#082d19]">
                Featured Journey
              </span>

              <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[9px] font-bold text-white backdrop-blur-md">
                {selectedSafari.displayDuration || "Duration on request"}
              </span>
            </div>

            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#f3c45d] sm:text-xs">
              {selectedSafari.displayLocation}
            </p>

            <h2
              id="safari-modal-title"
              className="max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {selectedSafari.displayTitle}
            </h2>

            <p className="mt-3 max-w-2xl text-xs leading-6 text-white/80 sm:text-sm">
              {selectedSafari.displayDeparture}
            </p>
          </div>
        </div>

        {/* QUICK DETAILS */}
        <div className="grid shrink-0 grid-cols-3 divide-x divide-[#e8e0d3] border-b border-[#e8e0d3] bg-white">
          <div className="px-2 py-4 text-center sm:px-5 sm:py-5">
            <span className="text-xl">⌖</span>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-[#a77b2c]">
              Destination
            </p>
            <p className="mt-1 text-xs font-bold text-[#082d19] sm:text-sm">
              {selectedSafari.displayLocation || "On request"}
            </p>
          </div>

          <div className="px-2 py-4 text-center sm:px-5 sm:py-5">
            <span className="text-xl">◷</span>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-[#a77b2c]">
              Duration
            </p>
            <p className="mt-1 text-xs font-bold text-[#082d19] sm:text-sm">
              {selectedSafari.displayDuration || "On request"}
            </p>
          </div>

          <div className="px-2 py-4 text-center sm:px-5 sm:py-5">
            <span className="text-xl">◆</span>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-[#a77b2c]">
              Citizen Price
            </p>
            <p className="mt-1 break-words text-xs font-bold text-[#082d19] sm:text-sm">
              {selectedSafari.prices?.citizens || "On request"}
            </p>
          </div>
        </div>

        {/* SCROLLABLE DETAILS */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#fffdf8] px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_290px]">

            {/* DESCRIPTION AND ITINERARY */}
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#a77b2c]">
                Discover the Experience
              </p>

              <h3 className="mt-3 font-serif text-2xl font-bold text-[#082d19] sm:text-3xl">
                An adventure worth remembering.
              </h3>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-gray-600">
                {selectedSafari.displayDescription ||
                  `Discover ${selectedSafari.displayTitle} with Tiara Tours & Safaris. Contact our team for the full itinerary, travel arrangements and available experiences.`}
              </p>

              <div className="mt-6 rounded-2xl border border-[#e9e1d5] bg-white p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a77b2c]">
                  Departure & Logistics
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {selectedSafari.displayDeparture ||
                    "Contact our team to confirm departure arrangements."}
                </p>
              </div>

              {/* ACTIVITIES */}
              <div className="mt-8 border-t border-[#e9e1d5] pt-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a77b2c]">
                  Explore Your Journey
                </p>

                <h3 className="mt-2 font-serif text-2xl font-bold text-[#082d19]">
                  Activities & Experiences
                </h3>

                {selectedSafari.displayActivities?.length > 0 ? (
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selectedSafari.displayActivities.map((activity, i) => (
                      <div
                        key={`${activity}-${i}`}
                        className="flex items-start gap-3 rounded-xl border border-[#e9e1d5] bg-white p-4 transition hover:border-[#dba33a]"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#082d19] text-xs font-bold text-[#f3c45d]">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <p className="text-sm leading-6 text-gray-600">
                          {activity}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 rounded-xl border border-[#e9e1d5] bg-white p-4 text-sm leading-6 text-gray-500">
                    Contact our team for the full itinerary and available activities.
                  </p>
                )}
              </div>
            </div>

            {/* PRICE AND ACCOMMODATION */}
            <aside className="h-fit overflow-hidden rounded-2xl border border-[#e7dfd1] bg-white shadow-sm">
              <div className="bg-[#082d19] p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Citizen Package Price
                </p>

                <p className="mt-3 break-words font-serif text-2xl font-bold text-[#f3c45d]">
                  {selectedSafari.prices?.citizens || "On request"}
                </p>

                <p className="mt-2 text-xs text-white/60">
                  Per person, subject to confirmation
                </p>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                    Non-resident price
                  </p>

                  <p className="mt-2 break-words font-serif text-xl font-bold text-[#082d19]">
                    {selectedSafari.prices?.nonResidents || "On request"}
                  </p>
                </div>

                <div className="h-px bg-[#eee7dc]" />

                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-400">
                    Accommodation
                  </p>

                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-gray-600">
                    {selectedSafari.displayAccommodation ||
                      "Contact us for accommodation options and availability."}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f8f5ee] p-4">
                  <p className="text-xs leading-6 text-gray-600">
                    Confirm availability, final pricing and booking
                    arrangements with our team before making payment.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          {/* INCLUSIONS & EXCLUSIONS */}
          <div className="mt-9 border-t border-[#e9e1d5] pt-8">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a77b2c]">
              Package Information
            </p>

            <h3 className="mt-2 font-serif text-2xl font-bold text-[#082d19] sm:text-3xl">
              What's Included & Excluded
            </h3>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">

              {/* INCLUDED */}
              <div className="rounded-2xl border border-green-200 bg-[#f4faf2] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-lg font-bold text-green-800">
                    ✓
                  </span>

                  <h4 className="font-serif text-xl font-bold text-[#082d19]">
                    What's Included
                  </h4>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedSafari.displayIncluded?.length > 0 ? (
                    selectedSafari.displayIncluded.map((item, i) => (
                      <div key={`${item}-${i}`} className="flex items-start gap-3">
                        <span className="mt-0.5 font-bold text-green-700">✓</span>
                        <p className="text-sm leading-6 text-gray-700">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm leading-6 text-gray-600">
                      Contact our team to confirm what is included in this package.
                    </p>
                  )}
                </div>
              </div>

              {/* EXCLUDED */}
              <div className="rounded-2xl border border-orange-200 bg-[#fff8f1] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-lg font-bold text-orange-800">
                    ×
                  </span>

                  <h4 className="font-serif text-xl font-bold text-[#082d19]">
                    What's Excluded
                  </h4>
                </div>

                <div className="mt-5 space-y-3">
                  {selectedSafari.displayExcluded?.length > 0 ? (
                    selectedSafari.displayExcluded.map((item, i) => (
                      <div key={`${item}-${i}`} className="flex items-start gap-3">
                        <span className="mt-0.5 font-bold text-orange-700">×</span>
                        <p className="text-sm leading-6 text-gray-700">{item}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm leading-6 text-gray-600">
                      Contact our team to confirm exclusions and optional extras.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* PERSONALIZED TRIP BANNER */}
          <div className="mt-8 rounded-2xl border border-[#e7dfd1] bg-white p-5 sm:p-6">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#a77b2c]">
              Travel Your Way
            </p>

            <h3 className="mt-2 font-serif text-xl font-bold text-[#082d19]">
              Need a personalised safari?
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              Share your preferred travel dates, group size, budget and
              accommodation preferences. Our team can help you explore the
              available options.
            </p>
          </div>
        </div>

        {/* STICKY BOOKING FOOTER */}
        <div className="shrink-0 border-t border-[#e8e0d4] bg-white px-3 py-3 sm:px-6 sm:py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="hidden min-w-0 sm:block">
              <p className="truncate font-serif text-base font-bold text-[#082d19]">
                {selectedSafari.displayTitle}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Citizen price:{" "}
                <span className="font-bold text-[#a77b2c]">
                  {selectedSafari.prices?.citizens || "On request"}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:shrink-0 sm:gap-3">
              <a
                href={`https://wa.me/254748799417?text=${encodeURIComponent(
                  `Hello Tiara Tours & Safaris! I am interested in booking ${selectedSafari.displayTitle}. Please share availability, payment details and the booking process.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#082d19] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#124b2d] sm:px-6 sm:text-sm"
              >
                Book This Safari ↗
              </a>

              <a
                href={`https://wa.me/254748799417?text=${encodeURIComponent(
                  `Hello Tiara Tours & Safaris! Please send me a detailed quotation for ${selectedSafari.displayTitle}, including prices, itinerary, availability, accommodation, inclusions and exclusions.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#dba33a] px-4 py-3 text-xs font-bold text-[#082d19] transition hover:bg-[#f3c45d] sm:px-6 sm:text-sm"
              >
                Request a Quote →
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedSafari(null)}
            className="mt-2 w-full py-1 text-[10px] font-semibold text-gray-400 transition hover:text-[#082d19] sm:hidden"
          >
            Close package details
          </button>
        </div>
      </div>
    </div>
  )}
</section>


<section
  id="destinations"
  className="relative isolate overflow-hidden bg-[#F7F9F7] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
>
  {/* PREMIUM BACKGROUND */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0B5D36]/[0.06] blur-[120px]" />
    <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-100/60 blur-[100px]" />
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "radial-gradient(#101412 0.7px, transparent 0.7px)",
        backgroundSize: "18px 18px",
      }}
    />
  </div>

  <div className="mx-auto max-w-7xl">
    {/* EDITORIAL SECTION HEADER */}
    <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-12 bg-[#0B5D36]" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B5D36] sm:text-xs">
            Discover Kenya With Tiara
          </span>
        </div>

        <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-[#101412] sm:text-5xl md:text-6xl lg:text-7xl">
          The extraordinary
          <span className="block italic text-[#0B5D36]">
            is closer than you think.
          </span>
        </h2>
      </div>

      <div className="max-w-lg lg:justify-self-end lg:pb-2">
        <p className="text-sm leading-8 text-gray-600 sm:text-base">
          From the untamed African wilderness to the peaceful shores of the
          Indian Ocean, discover remarkable places and experiences worth
          travelling for with The Tiara Tours & Safaris.
        </p>

        <a
          href="/safari-packages"
          className="group mt-6 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.15em] text-[#101412] transition-colors hover:text-[#0B5D36]"
        >
          Find Your Safari
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B5D36]/30 transition-all duration-300 group-hover:bg-[#0B5D36] group-hover:text-white">
            ↗
          </span>
        </a>
      </div>
    </div>

    {/* DESTINATION SHOWCASE */}
    <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
      {[
        {
          name: "Maasai Mara",
          subtitle: "Where the wild comes alive",
          location: "Southwestern Kenya",
          category: "Signature Safari",
          number: "01",
          size: "lg:col-span-7",
          image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1500&q=90",
          tags: ["Big Five", "Game Drives", "Wildlife Migration"],
        },
        {
          name: "Amboseli",
          subtitle: "Giants beneath Kilimanjaro",
          location: "Southern Kenya",
          category: "Wildlife & Scenery",
          number: "02",
          size: "lg:col-span-5",
          image:
            "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=90",
          tags: ["Elephants", "Photography", "Scenic Views"],
        },
        {
          name: "Lake Nakuru",
          subtitle: "A different kind of wild",
          location: "Kenya's Rift Valley",
          category: "Nature Escape",
          number: "03",
          size: "lg:col-span-5",
          image:
            "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=1200&q=90",
          tags: ["Birdlife", "Nature", "Wildlife"],
        },
        {
          name: "Diani Beach",
          subtitle: "Let the ocean slow you down",
          location: "Kenya's South Coast",
          category: "Coastal Retreat",
          number: "04",
          size: "lg:col-span-7",
          image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1500&q=90",
          tags: ["White Sands", "Ocean Views", "Relaxation"],
        },
      ].map((destination) => (
        <article
          key={destination.name}
          className={`group relative isolate min-h-[420px] overflow-hidden rounded-[26px] bg-[#101412] shadow-[0_15px_50px_-25px_rgba(16,20,18,0.35)] transition-all duration-700 hover:shadow-[0_25px_70px_-25px_rgba(11,93,54,0.35)] sm:min-h-[460px] ${destination.size}`}
        >
          <img
            src={destination.image}
            alt={destination.name}
            loading="lazy"
            className="absolute inset-0 -z-30 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/40 via-black/10 to-black/85" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06140D]/45 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

          {/* TOP META */}
          <div className="flex items-start justify-between gap-4 p-5 sm:p-7">
            <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2.5 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-white sm:text-[10px]">
                {destination.category}
              </span>
            </div>

            <span className="font-serif text-3xl font-light text-white/60 transition-all duration-500 group-hover:text-white sm:text-4xl">
              {destination.number}
            </span>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {destination.location}
            </div>

            <h3 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {destination.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-white/75 sm:text-base">
              {destination.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {destination.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold text-white/90 backdrop-blur-md sm:text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-5">
              <a
                href={`/safari-packages?destination=${encodeURIComponent(destination.name)}`}
                className="inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:text-emerald-200 sm:text-xs"
              >
                Explore Destination
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-lg text-white transition-all duration-300 group-hover:border-[#0B5D36] group-hover:bg-[#0B5D36]">
                ↗
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>

    {/* PREMIUM CUSTOM TRIP CTA */}
    <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#101412] sm:mt-10">
      <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full border border-white/[0.08]" />
      <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-emerald-300/15" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-[#0B5D36]/25 blur-[80px]" />

      <div className="relative flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-emerald-300" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-200">
              Made Around You
            </p>
          </div>

          <h3 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Your dream trip deserves
            <span className="block italic text-emerald-300">
              a personal touch.
            </span>
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Tell us your travel style, dates and budget. We'll help you explore
            the right destination and plan a memorable African adventure.
          </p>
        </div>

        <a
          href={`https://wa.me/254748799417?text=${encodeURIComponent(
            "Hello The Tiara Tours & Safaris! I'd like help choosing a destination and planning a personalised safari or holiday. Please share the available options."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center justify-center gap-4 self-start rounded-full bg-[#0B5D36] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#101412] sm:px-9 sm:py-5 lg:self-center"
        >
          Plan My Journey
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>

    {/* TRUST STRIP */}
    <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#101412]/10 pt-8 sm:grid-cols-4 sm:gap-4">
      {[
        ["01", "Wildlife Adventures"],
        ["02", "Scenic Getaways"],
        ["03", "Coastal Holidays"],
        ["04", "Cultural Experiences"],
      ].map(([number, label]) => (
        <div key={number} className="flex items-center gap-3">
          <span className="font-serif text-xl italic text-[#0B5D36]/50">
            {number}
          </span>
          <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#101412]/75 sm:text-[10px]">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>


 {/* Handpicked Adventures  */}

<section
  id="safari-packages"
  className="relative isolate overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
>
  {/* BACKGROUND DETAILS */}
  <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-emerald-100/60 blur-[120px]" />
  <div className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#0B5D36]/[0.06] blur-[120px]" />

  <div className="mx-auto max-w-7xl">
    {/* SECTION INTRO */}
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#0B5D36]/15 bg-[#0B5D36]/5 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#0B5D36]" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#0B5D36]">
            Handpicked Adventures
          </span>
        </div>

        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-[#101412] sm:text-5xl lg:text-6xl">
          Featured Safari
          <span className="block italic text-[#0B5D36]">
            Packages & Experiences
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-600 sm:text-base">
          Discover unforgettable wildlife encounters, scenic escapes and
          relaxing beach holidays. Choose your adventure, then let our team
          help you make it happen.
        </p>
      </div>

      <a
        href="/safari-packages"
        className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#101412]/15 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#101412] transition-all hover:border-[#0B5D36] hover:bg-[#0B5D36] hover:text-white"
      >
        View All Packages
        <span className="text-lg transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>
    </div>

    {/* FEATURED PACKAGE CARDS */}
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {[
        {
          name: "Maasai Mara Safari",
          subtitle: "Into the heart of the wild",
          category: "Wildlife Adventure",
          duration: "Duration on request",
          destination: "Maasai Mara, Kenya",
          description:
            "Discover the magic of the African savannah with guided game drives and opportunities to spot iconic wildlife.",
          features: [
            "Guided game drives",
            "Wildlife viewing",
            "Accommodation options",
          ],
          image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85",
          badge: "Safari Favourite",
          price: "Request a quote",
          featured: true,
        },
        {
          name: "Amboseli Escape",
          subtitle: "Elephants & endless horizons",
          category: "Scenic Safari",
          duration: "Duration on request",
          destination: "Amboseli, Kenya",
          description:
            "Experience magnificent elephant herds, wide-open landscapes and views of Mount Kilimanjaro when the skies are clear.",
          features: [
            "Elephant sightings",
            "Scenic photography",
            "Game drive experience",
          ],
          image:
            "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
          badge: "Nature & Wildlife",
          price: "Request a quote",
          featured: false,
        },
        {
          name: "Diani Beach Holiday",
          subtitle: "Your coastal escape awaits",
          category: "Beach Holiday",
          duration: "Duration on request",
          destination: "Diani, Kenya",
          description:
            "Slow down on white sandy beaches, enjoy the Indian Ocean and create time for a refreshing coastal getaway.",
          features: [
            "Beach relaxation",
            "Coastal experiences",
            "Holiday options",
          ],
          image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85",
          badge: "Coastal Escape",
          price: "Request a quote",
          featured: false,
        },
      ].map((safari, index) => (
        <article
          key={safari.name}
          className="group flex flex-col overflow-hidden rounded-[26px] border border-gray-200/80 bg-white shadow-[0_12px_45px_-28px_rgba(16,20,18,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#0B5D36]/30 hover:shadow-[0_25px_65px_-30px_rgba(11,93,54,0.35)]"
        >
          {/* IMAGE */}
          <div className="relative h-[260px] overflow-hidden sm:h-[280px]">
            <img
              src={safari.image}
              alt={safari.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20" />

            <div className="absolute left-5 top-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-3.5 py-2 text-[9px] font-extrabold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                {safari.badge}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                {safari.category}
              </p>
              <h3 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
                {safari.name}
              </h3>
              <p className="mt-1 text-sm text-white/80">{safari.subtitle}</p>
            </div>
          </div>

          {/* PACKAGE DETAILS */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-100 pb-4 text-xs text-gray-600">
              <span className="inline-flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 text-[#0B5D36]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                {safari.duration}
              </span>

              <span className="inline-flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-4 w-4 text-[#0B5D36]"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {safari.destination}
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              {safari.description}
            </p>

            <ul className="mt-5 space-y-3">
              {safari.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-[#101412]/80"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5D36]/10 text-xs font-bold text-[#0B5D36]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

           
{/* PRICE & BOOKING */}
<div className="mt-auto pt-6">
  <div className="mb-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-5">
    <div>
      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-gray-500">
        Package pricing
      </p>

      <p className="mt-1 font-serif text-xl font-semibold text-[#0B5D36]">
        {safari.price}
      </p>
    </div>

    <span className="rounded-full bg-[#0B5D36]/[0.07] px-3 py-2 text-[9px] font-bold text-[#0B5D36]">
      Tailor-made options
    </span>
  </div>

  <button
    type="button"
    onClick={() => openBooking(safari)}
    className="group/button inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0B5D36] px-5 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#101412] focus:outline-none focus:ring-4 focus:ring-[#0B5D36]/20"
  >
    Book This Safari

    <span className="text-lg transition-transform duration-300 group-hover/button:translate-x-1">
      ↗
    </span>
  </button>
</div>
</div>
</article>
))}
</div>


    {/* BOOKING CONFIDENCE */}
    <div className="mt-10 grid grid-cols-1 gap-4 rounded-[24px] border border-[#0B5D36]/10 bg-[#F7F9F7] p-6 sm:grid-cols-3 sm:p-8">
      {[
        {
          icon: "✦",
          title: "Personalised Itineraries",
          text: "Options shaped around your interests and travel plans.",
        },
        {
          icon: "✓",
          title: "Clear Package Details",
          text: "Ask for current prices, inclusions and available dates.",
        },
        {
          icon: "↗",
          title: "Easy Booking Enquiries",
          text: "Speak directly with our team to plan your journey.",
        },
      ].map((item) => (
        <div key={item.title} className="flex gap-4 p-2">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0B5D36]/10 text-xl text-[#0B5D36]">
            {item.icon}
          </span>
          <div>
            <h4 className="text-sm font-extrabold text-[#101412]">
              {item.title}
            </h4>
            <p className="mt-2 text-xs leading-6 text-gray-600">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* FINAL CONVERSION CTA */}
    <div className="mt-8 flex flex-col gap-6 rounded-[26px] bg-[#101412] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-300">
          Let's Plan Something Remarkable
        </p>
        <h3 className="mt-3 font-serif text-2xl font-semibold text-white sm:text-3xl">
          Your next adventure starts with a conversation.
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
          Have a destination in mind or need recommendations? Tell us what
          you're looking for and request a personalised quotation.
        </p>
      </div>

      <a
        href={`https://wa.me/254748799417?text=${encodeURIComponent(
          "Hello The Tiara Tours & Safaris! I'd like a personalised safari or holiday quotation. Please help me explore your packages, prices and available dates."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#101412] transition-all hover:bg-emerald-200"
      >
        Request a Quote
        <span className="text-lg">↗</span>
      </a>
    </div>
  </div>


{/* SAFARI BOOKING POPUP */}
{selectedSafari && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#101412]/75 p-3 backdrop-blur-sm sm:p-6"
    onMouseDown={(e) => {
      if (e.target === e.currentTarget) closeBooking();
    }}
  >
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="relative my-auto max-h-[94vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white shadow-2xl"
    >
      {/* GREEN HEADER */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0B5D36] via-[#087344] to-[#06452A] px-6 py-8 text-white sm:px-8">
        <button
          type="button"
          onClick={closeBooking}
          aria-label="Close booking popup"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl transition hover:bg-white/20"
        >
          ×
        </button>

        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-emerald-100">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          Start Your Adventure
        </span>

        <h3
          id="booking-modal-title"
          className="mt-5 pr-8 font-serif text-3xl font-semibold sm:text-4xl"
        >
          Let's plan your safari.
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/80">
          Tell us a little about your trip and our team will help you
          plan your experience.
        </p>

        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-black/10 p-3">
          <img
            src={selectedSafari.image}
            alt={selectedSafari.name}
            className="h-16 w-20 rounded-xl object-cover"
          />
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-emerald-200">
              Your selected package
            </p>
            <p className="mt-1 font-serif text-lg font-semibold">
              {selectedSafari.name}
            </p>
            <p className="mt-1 text-xs text-white/75">
              {selectedSafari.destination}
            </p>
          </div>
        </div>
      </div>

      {/* BOOKING FORM */}
      <form onSubmit={submitBooking} className="space-y-5 p-5 sm:p-8">
        <div>
          <h4 className="text-sm font-extrabold text-[#101412]">
            Your booking details
          </h4>
          <p className="mt-1 text-xs leading-6 text-gray-500">
            Fields marked with * are required. This is a booking enquiry;
            your reservation is not confirmed until our team responds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* NAME */}
          <div className="sm:col-span-2">
            <label
              htmlFor="booking-name"
              className="mb-2 block text-xs font-bold text-[#101412]"
            >
              Full name *
            </label>
            <input
              id="booking-name"
              type="text"
              autoComplete="name"
              required
              value={bookingForm.name}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, name: e.target.value })
              }
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D36] focus:bg-white focus:ring-4 focus:ring-[#0B5D36]/10"
            />
          </div>

          {/* PHONE */}
          <div>
            <label
              htmlFor="booking-phone"
              className="mb-2 block text-xs font-bold text-[#101412]"
            >
              Phone / WhatsApp number *
            </label>
            <input
              id="booking-phone"
              type="tel"
              autoComplete="tel"
              required
              value={bookingForm.phone}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, phone: e.target.value })
              }
              placeholder="+254 7XX XXX XXX"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D36] focus:bg-white focus:ring-4 focus:ring-[#0B5D36]/10"
            />
          </div>

          {/* DATE */}
          <div>
            <label
              htmlFor="booking-date"
              className="mb-2 block text-xs font-bold text-[#101412]"
            >
              Preferred travel date *
            </label>
            <input
              id="booking-date"
              type="date"
              required
              min={new Date().toLocaleDateString("en-CA")}
              value={bookingForm.travelDate}
              onChange={(e) =>
                setBookingForm({
                  ...bookingForm,
                  travelDate: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D36] focus:bg-white focus:ring-4 focus:ring-[#0B5D36]/10"
            />
          </div>

          {/* GUESTS */}
          <div className="sm:col-span-2">
            <label
              htmlFor="booking-guests"
              className="mb-2 block text-xs font-bold text-[#101412]"
            >
              Number of guests *
            </label>
            <select
              id="booking-guests"
              required
              value={bookingForm.guests}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, guests: e.target.value })
              }
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D36] focus:bg-white focus:ring-4 focus:ring-[#0B5D36]/10"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
              <option value="7">7 guests</option>
              <option value="8">8 guests</option>
              <option value="9">9 guests</option>
              <option value="10+">10+ guests</option>
            </select>
          </div>

          {/* SPECIAL REQUESTS */}
          <div className="sm:col-span-2">
            <label
              htmlFor="booking-message"
              className="mb-2 block text-xs font-bold text-[#101412]"
            >
              Special requests{" "}
              <span className="font-normal text-gray-400">(optional)</span>
            </label>
            <textarea
              id="booking-message"
              rows={3}
              value={bookingForm.message}
              onChange={(e) =>
                setBookingForm({ ...bookingForm, message: e.target.value })
              }
              placeholder="Accommodation preferences, questions or other requests..."
              className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#0B5D36] focus:bg-white focus:ring-4 focus:ring-[#0B5D36]/10"
            />
          </div>
        </div>

        {bookingError && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {bookingError}
          </p>
        )}

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row">
          <button
            type="button"
            onClick={closeBooking}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-gray-600 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#0B5D36] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#084529] focus:outline-none focus:ring-4 focus:ring-[#0B5D36]/20"
          >
            Continue to WhatsApp
            <span className="text-lg transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>

        <p className="text-center text-[10px] leading-5 text-gray-400">
          Your details will be included in your WhatsApp enquiry to
          The Tiara Tours & Safaris.
        </p>
      </form>
    </div>
  </div>
)}

</section>




<section
  id="why-choose-us"
  className="relative isolate overflow-hidden bg-[#101412] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
>
  {/* BACKGROUND DESIGN */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#0B5D36]/30 blur-[130px]" />
    <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-emerald-900/20 blur-[120px]" />
    <div
      className="absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "radial-gradient(#ffffff 0.7px, transparent 0.7px)",
        backgroundSize: "20px 20px",
      }}
    />
  </div>

  <div className="mx-auto max-w-7xl">
    {/* SECTION HEADER */}
    <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
      <div>
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-200 sm:text-xs">
            The Tiara Difference
          </span>
        </div>

        <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-7xl">
          More than a trip.
          <span className="mt-2 block italic text-emerald-300">
            A journey to remember.
          </span>
        </h2>
      </div>

      <div className="max-w-xl lg:justify-self-end">
        <p className="text-sm leading-8 text-white/65 sm:text-base">
          Every traveller has a different idea of the perfect getaway. At
          The Tiara Tours & Safaris, we help you explore possibilities,
          discover remarkable places and plan experiences around what matters
          most to you.
        </p>

        <a
          href={`https://wa.me/254748799417?text=${encodeURIComponent(
            "Hello The Tiara Tours & Safaris! I'd like to learn more about your services and how you can help me plan my next trip."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.13em] text-emerald-200 transition-colors hover:text-white"
        >
          Talk to Our Team
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-300/40 transition-all duration-300 group-hover:bg-emerald-300 group-hover:text-[#101412]">
            ↗
          </span>
        </a>
      </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-12">
      {/* FEATURE PANEL */}
      <div className="group relative isolate flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[28px] bg-[#0B5D36] p-7 sm:p-10 lg:col-span-5 lg:min-h-[570px] lg:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-4 -top-4 -z-10 h-48 w-48 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

        <div>
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-2xl text-white">
            ✦
          </span>

          <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.25em] text-emerald-100">
            Your Journey, Your Way
          </p>

          <h3 className="mt-4 max-w-md font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Travel that feels personal.
          </h3>

          <p className="mt-5 max-w-md text-sm leading-8 text-white/80">
            From choosing a destination to planning the details, we help you
            explore options that suit your interests, travel style and budget.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-6">
          <span className="text-xs font-semibold text-white/75">
            Let's plan your next adventure
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg text-[#0B5D36] transition-transform duration-300 group-hover:rotate-45">
            ↗
          </span>
        </div>
      </div>

      {/* TRUST PILLARS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
        {[
          {
            number: "01",
            icon: "◎",
            title: "Experiences Made for You",
            description:
              "Explore safari adventures, nature escapes, cultural experiences and beach holidays suited to your travel preferences.",
            tag: "Personalised Planning",
          },
          {
            number: "02",
            icon: "◇",
            title: "Clear Communication",
            description:
              "Ask questions, discuss your plans and request details about pricing, itineraries and what each package includes.",
            tag: "Informed Decisions",
          },
          {
            number: "03",
            icon: "✳",
            title: "Discover More of Africa",
            description:
              "Explore Kenya's wildlife, landscapes, local culture and coastline with travel options that open up new experiences.",
            tag: "Meaningful Discovery",
          },
          {
            number: "04",
            icon: "↗",
            title: "Support With Your Plans",
            description:
              "Connect with our team to discuss your destination, travel dates, budget and the arrangements you may need.",
            tag: "Direct Enquiries",
          },
        ].map((item) => (
          <article
            key={item.number}
            className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-white/[0.075] sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] text-2xl text-emerald-300 transition-all duration-300 group-hover:bg-emerald-300 group-hover:text-[#101412]">
                {item.icon}
              </span>

              <span className="font-serif text-2xl italic text-white/20 transition-colors group-hover:text-emerald-300/70">
                {item.number}
              </span>
            </div>

            <h3 className="mt-7 text-lg font-bold tracking-tight text-white sm:text-xl">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              {item.description}
            </p>

            <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-emerald-200/80">
                {item.tag}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* HOW WE WORK */}
    <div className="mt-16 border-y border-white/10 py-10 sm:mt-20 sm:py-12">
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {[
          {
            step: "01",
            title: "Share Your Vision",
            description:
              "Tell us where you'd like to go and what kind of experience you want.",
          },
          {
            step: "02",
            title: "Explore Your Options",
            description:
              "Discuss suitable destinations, package details and your budget with our team.",
          },
          {
            step: "03",
            title: "Plan Your Adventure",
            description:
              "Confirm the arrangements, dates, pricing and inclusions before you book.",
          },
        ].map((step) => (
          <div key={step.step} className="flex gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-300/30 font-serif text-sm italic text-emerald-300">
              {step.step}
            </span>

            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/55">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* FINAL TRUST CTA */}
    <div className="relative mt-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-7 sm:p-10 lg:p-12">
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#0B5D36]/30 blur-[90px]" />

      <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-emerald-300">
            Your Adventure Starts Here
          </p>

          <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Have questions before you book?
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/60">
            We welcome your enquiries. Contact The Tiara Tours & Safaris to
            discuss your plans, request a quotation and understand your
            available options before making a decision.
          </p>
        </div>

        <a
          href={`https://wa.me/254748799417?text=${encodeURIComponent(
            "Hello The Tiara Tours & Safaris! I have a few questions before booking. Please help me understand your safari packages, pricing, inclusions and available dates."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#101412] transition-all duration-300 hover:bg-emerald-300"
        >
          Ask Us Anything
          <span className="text-lg transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>
  </div>
</section>


<section className="relative isolate overflow-hidden bg-[#F4F7F2] py-20 sm:py-24 lg:py-28">
  {/* Background accents */}
  <div className="pointer-events-none absolute inset-0 -z-10">
    <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-[#0B5D36]/10 blur-3xl" />
    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#B8D7C2]/40 blur-3xl" />
    <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(#0B5D36_1px,transparent_1px),linear-gradient(90deg,#0B5D36_1px,transparent_1px)] [background-size:48px_48px]" />
  </div>

  <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
    <div className="relative overflow-hidden rounded-[2rem] border border-[#0B5D36]/10 bg-gradient-to-br from-white via-[#F8FAF6] to-[#E5F0E7] shadow-xl shadow-[#173D29]/5">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rounded-full border border-[#0B5D36]/10" />
      <div className="pointer-events-none absolute -right-4 top-12 h-56 w-56 rounded-full border border-[#0B5D36]/10" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#0B5D36]/5 blur-3xl" />

      <div className="relative grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:p-16">
        {/* CTA content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0B5D36]/15 bg-[#0B5D36]/5 px-4 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0B5D36] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0B5D36]" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0B5D36] sm:text-xs">
              Your adventure begins here
            </span>
          </div>

          <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-[#101412] sm:text-5xl lg:text-6xl">
            Your dream trip.
            <span className="mt-2 block text-[#0B5D36]">
              Our expert planning.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Whether you dream of a thrilling wildlife safari, a scenic Kenyan
            getaway or a relaxing beach escape, we’ll help you turn your ideas
            into a memorable journey tailored to you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B5D36] px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-lg shadow-[#0B5D36]/15 transition duration-300 hover:bg-[#08472A]"
            >
              Request a Safari Quote
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <a
              href="https://wa.me/254748799417?text=Hello%20The%20Tiara%20Tours%20%26%20Safaris%2C%20I%27d%20like%20help%20planning%20a%20trip."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#0B5D36]/20 bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.13em] text-[#101412] transition duration-300 hover:border-[#0B5D36] hover:bg-[#0B5D36]/5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-5 w-5 text-[#0B5D36]"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
                <path d="M8.5 8.5c.5 2 2 3.5 4 4l1.3-1 2 1c-.3 1.3-1.3 2-2.5 2-3.2-.3-6-3.1-6.3-6.3 0-1.2.7-2.2 2-2.5l1 2-1.5.8Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-600">
            <span className="inline-flex items-center gap-2">
              <span className="text-[#0B5D36]">✓</span>
              Tailored travel experiences
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#0B5D36]">✓</span>
              Personalised assistance
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#0B5D36]">✓</span>
              Clear booking guidance
            </span>
          </div>
        </div>

        {/* Enquiry card */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-[#0B5D36]/10" />

          <div className="relative rounded-3xl border border-[#0B5D36]/10 bg-white/90 p-6 shadow-xl shadow-[#173D29]/5 backdrop-blur-xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0B5D36]">
                  Let’s plan together
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-[#101412] sm:text-3xl">
                  Tell us what you have in mind.
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0B5D36]/10 bg-[#0B5D36]/5 text-2xl text-[#0B5D36]">
                ✦
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600">
              Share your travel plans with our team and start exploring your
              options.
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="/safari-packages"
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8FAF7] p-4 transition duration-300 hover:border-[#0B5D36]/25 hover:bg-[#F0F6F0]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B5D36]/10 text-xl text-[#0B5D36]">
                  ◈
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-[#101412]">
                    Explore safari packages
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-gray-500">
                    Find inspiration for your next trip.
                  </span>
                </span>
                <span className="text-lg text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0B5D36]">
                  →
                </span>
              </a>

              <a
                href="/destinations"
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8FAF7] p-4 transition duration-300 hover:border-[#0B5D36]/25 hover:bg-[#F0F6F0]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B5D36]/10 text-xl text-[#0B5D36]">
                  ◎
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-[#101412]">
                    Discover destinations
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-gray-500">
                    Explore places worth discovering.
                  </span>
                </span>
                <span className="text-lg text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0B5D36]">
                  →
                </span>
              </a>

              <a
                href="mailto:thetiaratoursandtravel@gmail.com?subject=Travel%20Enquiry"
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-[#F8FAF7] p-4 transition duration-300 hover:border-[#0B5D36]/25 hover:bg-[#F0F6F0]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B5D36]/10 text-xl text-[#0B5D36]">
                  ✉
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-[#101412]">
                    Send us an enquiry
                  </span>
                  <span className="mt-1 block break-all text-xs leading-5 text-gray-500">
                    thetiaratoursandtravel@gmail.com
                  </span>
                </span>
                <span className="text-lg text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-[#0B5D36]">
                  →
                </span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B5D36]/10 text-sm text-[#0B5D36]">
                ✓
              </span>
              <p className="text-xs leading-5 text-gray-500">
                Not sure where to start? Tell us what kind of experience you’re
                looking for, and we’ll help you explore your options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* TRUST FOOTNOTE */}
    <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
      <p className="text-xs leading-6 text-gray-600">
        <span className="font-semibold text-[#101412]">
          The Tiara Tours &amp; Safaris
        </span>
        <span className="mx-2 text-gray-400">/</span>
        Thoughtfully planned journeys across Kenya and beyond.
      </p>

      <a
        href="https://wa.me/254748799417"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0B5D36] transition hover:text-[#101412]"
      >
        Speak to our team
        <span>↗</span>
      </a>
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



    </div>
  );
}

export default Home;
