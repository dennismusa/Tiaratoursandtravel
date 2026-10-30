import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/254748799417?text=Hello%20The%20Tiara%20Tours%20%26%20Safaris,%20I%20would%20like%20to%20enquire%20about%20booking%20a%20safari."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Tiara Tours and Safaris on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 group"
    >
      {/* Outer Glow Animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 duration-1000" />

      <span className="absolute -inset-2 rounded-full bg-green-500/20 blur-xl group-hover:bg-green-400/40 transition duration-500" />

      {/* Tooltip */}
      <div
        className="
          absolute right-20 top-1/2 -translate-y-1/2
          bg-[#101412] text-white text-sm
          px-5 py-3 rounded-xl
          opacity-0 translate-x-5
          group-hover:opacity-100 group-hover:translate-x-0
          group-focus-visible:opacity-100
          group-focus-visible:translate-x-0
          transition-all duration-500
          whitespace-nowrap shadow-xl
          pointer-events-none
        "
      >
        Chat with Tiara Tours 💬
      </div>

      {/* Main Button */}
      <div
        className="
          relative w-16 h-16 sm:w-[72px] sm:h-[72px]
          rounded-full
          bg-gradient-to-br from-green-400 via-green-600 to-green-800
          flex items-center justify-center
          text-white
          shadow-[0_20px_50px_rgba(34,197,94,0.45)]
          border border-white/20
          backdrop-blur-xl
          group-hover:scale-110
          transition-all duration-500
        "
      >
        {/* Rotating Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin" />

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9 sm:w-10 sm:h-10 relative z-10 drop-shadow-lg"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.76 11.76 0 0012.05 0C5.53 0 .24 5.29.24 11.8c0 2.08.54 4.1 1.56 5.88L0 24l6.48-1.7a11.78 11.78 0 005.57 1.42h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.23-6.11-3.34-8.44ZM12.06 21.7c-1.74 0-3.45-.47-4.94-1.36l-.35-.21-3.84 1 1.02-3.74-.23-.38a9.72 9.72 0 01-1.49-5.2c0-5.38 4.38-9.76 9.77-9.76 2.61 0 5.06 1.02 6.9 2.86a9.7 9.7 0 012.86 6.9c0 5.38-4.38 9.79-9.7 9.79Zm5.35-7.3c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.59.13-.13.29-.33.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.49-.64-.5h-.54c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44s1.03 2.83 1.17 3.03c.15.19 2.03 3.1 4.92 4.34.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.7-.69 1.94-1.35.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33Z" />
        </svg>
      </div>
    </a>
  );
}