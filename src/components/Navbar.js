
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import safarilinklogo from "../assets/safarilinklogo.png";

const WHATSAPP_NUMBER = "254748799417";

const destinations = [
  { name: "Amboseli National Park", path: "/amboseli" },
  { name: "Lake Nakuru", path: "/lakenakuru" },
  { name: "Nairobi National Park", path: "/nairobipark" },
  { name: "Tsavo East National Park", path: "/tsavoeast" },
  { name: "Tsavo West National Park", path: "/tsavowest" },
  { name: "Mount Kenya", path: "/mountkenya" },
  //{ name: "Hell's Gate", path: "/hellsgate" },
  //{ name: "Aberdare National Park", path: "/aberdare" },
 // { name: "Meru National Park", path: "/meru" },
];

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

function Navbar() {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language?.split("-")[0] || "en"
  );

  useEffect(() => {
    const updateScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(
        scrollableHeight > 0
          ? (window.scrollY / scrollableHeight) * 100
          : 0
      );

      setScrolled(window.scrollY > 30);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setDestOpen(false);
        setLangOpen(false);
      }
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleLanguageChange = (language) => {
      setCurrentLanguage(language?.split("-")[0] || "en");
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setCurrentLanguage(code);
    setLangOpen(false);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setDestOpen(false);
    setLangOpen(false);
  };

  const navClass = ({ isActive }) =>
    `tiara-nav-link ${isActive ? "tiara-nav-link-active" : ""}`;

  const bookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Tiara Tours & Safaris, I would like to enquire about your safari packages."
  )}`;

  return (
    <>
      {/* Scroll progress */}
      <div
        className="tiara-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      {/* Main navigation */}
      <header
        className={`tiara-header ${
          scrolled ? "tiara-header-scrolled" : ""
        }`}
      >
        <nav className="tiara-navbar" aria-label="Main navigation">
          {/* Brand */}
          <Link
            to="/"
            className="tiara-brand"
            onClick={closeMobileMenu}
            aria-label="Tiara Tours & Safaris home"
          >
            <span className="tiara-logo-frame">
              <img
                src={safarilinklogo}
                alt="Tiara Tours & Safaris logo"
                className="tiara-logo"
              />
            </span>

            <span className="tiara-brand-copy">
              <span className="tiara-brand-name">
                TiaraTours & Safaris<span>.</span>
              </span>
              <span className="tiara-brand-tagline">
                SAFARI ADVENTURES
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="tiara-desktop-nav">
            <NavLink to="/" end className={navClass}>
              {t("home")}
            </NavLink>


            <NavLink to="/About" className={navClass}>
              {t("About")}
            </NavLink>

            {/* Destinations dropdown */}
            <div className="tiara-destination-group">
              <button
                type="button"
                className="tiara-nav-link tiara-dropdown-trigger"
                aria-expanded={destOpen}
                onClick={() => setDestOpen((open) => !open)}
              >
                {t("destinations")}
                <span className="tiara-chevron">⌄</span>
              </button>

              <div
                className={`tiara-destination-menu ${
                  destOpen ? "tiara-menu-open" : ""
                }`}
              >
                <div className="tiara-dropdown-heading">
                  <span className="tiara-eyebrow">DISCOVER AFRICA</span>
                  <h3>Explore destinations</h3>
                  <p>Find your next unforgettable adventure.</p>
                </div>

                <div className="tiara-destination-list">
                  {destinations.map((destination) => (
                    <Link
                      key={destination.path}
                      to={destination.path}
                      className="tiara-destination-item"
                      onClick={() => setDestOpen(false)}
                    >
                      <span className="tiara-destination-dot" />
                      {destination.name}
                      <span className="tiara-item-arrow">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink to="/packages" className={navClass}>
              Packages
            </NavLink>

            <NavLink to="/Services" className={navClass}>
              {t("Services")}
            </NavLink>

            

            <NavLink to="/contact" className={navClass}>
              {t("contact")}
            </NavLink>
          </div>
{/*
          {/* Desktop actions */}
          <div className="tiara-desktop-actions">
            <div className="tiara-language-wrap">
          {/*    <button
                type="button"
                className="tiara-language-button"
                onClick={() => setLangOpen((open) => !open)}
                aria-expanded={langOpen}
                aria-label="Choose language"
              >
                <span>◎</span>
                {currentLanguage.toUpperCase()}
                <span className="tiara-chevron">⌄</span>
              </button>
           */}
              {langOpen && (
                <div className="tiara-language-menu">
                  {languages.map((language) => (
                    <button
                      type="button"
                      key={language.code}
                      onClick={() => changeLanguage(language.code)}
                      className={
                        currentLanguage === language.code
                          ? "tiara-language-option selected"
                          : "tiara-language-option"
                      }
                    >
                      <span>{language.flag}</span>
                      {language.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
   
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="tiara-book-button"
            >
              <span>Book a safari</span>
              <span className="tiara-book-arrow">↗</span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="tiara-mobile-controls">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="tiara-mobile-book"
              aria-label="Book a safari on WhatsApp"
            >
              Book
            </a>

            <button
              type="button"
              className={`tiara-menu-toggle ${
                menuOpen ? "is-open" : ""
              }`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        className={`tiara-mobile-backdrop ${
          menuOpen ? "backdrop-visible" : ""
        }`}
        onClick={closeMobileMenu}
        tabIndex={menuOpen ? 0 : -1}
      />

      {/* Mobile navigation drawer */}
      <aside
        className={`tiara-mobile-drawer ${
          menuOpen ? "drawer-visible" : ""
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="tiara-drawer-top">
          <Link to="/" className="tiara-brand" onClick={closeMobileMenu}>
            <span className="tiara-logo-frame">
              <img
                src={safarilinklogo}
                alt=""
                className="tiara-logo"
              />
            </span>

            <span className="tiara-brand-copy">
              <span className="tiara-brand-name">
                TiaraTours&Safaris<span>.</span>
              </span>
              <span className="tiara-brand-tagline">
                SAFARI ADVENTURES
              </span>
            </span>
          </Link>

          <button
            type="button"
            className="tiara-close-button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="tiara-drawer-content">
          <p className="tiara-eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>

          <NavLink
            to="/"
            end
            className="tiara-mobile-link"
            onClick={closeMobileMenu}
          >
            <span className="tiara-mobile-number">01</span>
            {t("home")}
            <span className="tiara-item-arrow">↗</span>
          </NavLink>

          <button
            type="button"
            className="tiara-mobile-link"
            onClick={() => setDestOpen((open) => !open)}
            aria-expanded={destOpen}
          >
            <span className="tiara-mobile-number">02</span>
            {t("destinations")}
            <span className="tiara-mobile-chevron">
              {destOpen ? "−" : "+"}
            </span>
          </button>

          {destOpen && (
            <div className="tiara-mobile-destinations">
              {destinations.map((destination) => (
                <Link
                  key={destination.path}
                  to={destination.path}
                  onClick={closeMobileMenu}
                >
                  {destination.name}
                  <span>↗</span>
                </Link>
              ))}
            </div>
          )}
         
         <NavLink
            to="/About"
            className="tiara-mobile-link"
            onClick={closeMobileMenu}
          >
            <span className="tiara-mobile-number">05</span>
            {t("About")}
            <span className="tiara-item-arrow">↗</span>
          </NavLink>

          <NavLink
            to="/packages"
            className="tiara-mobile-link"
            onClick={closeMobileMenu}
          >
            <span className="tiara-mobile-number">03</span>
            Packages
            <span className="tiara-item-arrow">↗</span>
          </NavLink>

          <NavLink
            to="/Services"
            className="tiara-mobile-link"
            onClick={closeMobileMenu}
          >
            <span className="tiara-mobile-number">04</span>
            {t("Services")}
            <span className="tiara-item-arrow">↗</span>
          </NavLink>

          

          <NavLink
            to="/contact"
            className="tiara-mobile-link"
            onClick={closeMobileMenu}
          >
            <span className="tiara-mobile-number">06</span>
            {t("contact")}
            <span className="tiara-item-arrow">↗</span>
          </NavLink>
        {/*
          <div className="tiara-mobile-language">
            <label htmlFor="tiara-language-select">Language</label>
            <select
              id="tiara-language-select"
              value={currentLanguage}
              onChange={(event) => changeLanguage(event.target.value)}
            >
              {languages.map((language) => (
                <option key={language.code} value={language.code}>
                  {language.flag} {language.name}
                </option>
              ))}
            </select>
          </div>    */}

          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="tiara-drawer-book"
          >
            Plan your safari <span>↗</span>
          </a>

          <div className="tiara-drawer-footer">
            <span>KENYA · EAST AFRICA</span>
            <span>ADVENTURE AWAITS.</span>
          </div>
        </div>
      </aside>

      {/* Navbar styling */}
      <style>{`
        :root {
          --tiara-green: #176b43;
          --tiara-green-bright: #2ca66b;
          --tiara-green-dark: #071b12;
          --tiara-black: #080b09;
          --tiara-white: #ffffff;
          --tiara-muted: #a4b0a8;
        }

        .tiara-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          z-index: 1001;
          background: linear-gradient(
            90deg,
            var(--tiara-green),
            #6bd39a
          );
          transition: width 0.12s linear;
          pointer-events: none;
        }

        .tiara-header {
          position: fixed;
          top: 3px;
          left: 0;
          width: 100%;
          z-index: 500;
          color: var(--tiara-white);
          background: rgba(8, 11, 9, 0.92);
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          transition:
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .tiara-header-scrolled {
          background: rgba(5, 13, 9, 0.98);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.22);
        }

        .tiara-navbar {
          width: min(1440px, 100%);
          min-height: 94px;
          margin: 0 auto;
          padding: 0 4.5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          transition: min-height 0.3s ease;
        }

        .tiara-header-scrolled .tiara-navbar {
          min-height: 78px;
        }

        .tiara-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
          color: white;
          text-decoration: none;
        }

        .tiara-logo-frame {
          width: 49px;
          height: 49px;
          display: grid;
          place-items: center;
          padding: 3px;
          border: 1px solid rgba(78, 190, 125, 0.8);
          border-radius: 50%;
          background: #10271b;
          overflow: hidden;
        }

        .tiara-logo {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .tiara-brand-copy {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .tiara-brand-name {
          font-size: 23px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .tiara-brand-name > span {
          color: #57c989;
        }

        .tiara-brand-tagline {
          color: #b5c5ba;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .tiara-desktop-nav {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .tiara-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 12px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: #e5eae6;
          font: inherit;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition:
            color 0.2s ease,
            background 0.2s ease;
        }

        .tiara-nav-link:hover,
        .tiara-nav-link-active {
          color: #73d79c;
          background: rgba(44, 166, 107, 0.09);
        }

        .tiara-nav-link-active::after {
          content: "";
          position: absolute;
          left: 12px;
          right: 12px;
          bottom: 3px;
          height: 2px;
          border-radius: 3px;
          background: var(--tiara-green-bright);
        }

        .tiara-chevron {
          color: #7ed6a0;
          font-size: 15px;
          line-height: 1;
        }

        .tiara-destination-group,
        .tiara-language-wrap {
          position: relative;
        }

        .tiara-destination-menu {
          position: absolute;
          top: calc(100% + 15px);
          left: 0;
          width: 350px;
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          background: #0b1510;
          box-shadow: 0 25px 65px rgba(0, 0, 0, 0.42);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s ease;
        }

        .tiara-destination-group:hover .tiara-destination-menu,
        .tiara-destination-group:focus-within .tiara-destination-menu,
        .tiara-destination-menu.tiara-menu-open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .tiara-dropdown-heading {
          padding-bottom: 16px;
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tiara-eyebrow {
          color: #65c88e;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .tiara-dropdown-heading h3 {
          margin: 8px 0 5px;
          color: white;
          font-size: 19px;
          font-weight: 700;
        }

        .tiara-dropdown-heading p {
          margin: 0;
          color: #9eada3;
          font-size: 12px;
          line-height: 1.6;
        }

        .tiara-destination-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3px 12px;
        }

        .tiara-destination-item {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
          padding: 10px 0;
          color: #d6ded8;
          font-size: 11px;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .tiara-destination-item:hover {
          color: #70d89a;
        }

        .tiara-destination-dot {
          width: 5px;
          height: 5px;
          flex: 0 0 5px;
          border-radius: 50%;
          background: #48ad75;
        }

        .tiara-item-arrow {
          margin-left: auto;
          color: #64ce90;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .tiara-destination-item:hover .tiara-item-arrow,
        .tiara-mobile-link:hover .tiara-item-arrow {
          opacity: 1;
        }

        .tiara-desktop-actions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }

        .tiara-language-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 10px 7px;
          border: 0;
          background: transparent;
          color: #e0e7e2;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .tiara-language-button > span:first-child {
          color: #70d89a;
          font-size: 17px;
        }

        .tiara-language-menu {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 155px;
          padding: 6px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: #0c1710;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        .tiara-language-option {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          padding: 11px;
          border: 0;
          border-radius: 7px;
          background: transparent;
          color: #dce4de;
          font-size: 12px;
          text-align: left;
          cursor: pointer;
        }

        .tiara-language-option:hover,
        .tiara-language-option.selected {
          background: rgba(44, 166, 107, 0.15);
          color: #7ce0a4;
        }

        .tiara-book-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-height: 45px;
          padding: 0 17px;
          border: 1px solid #2ca66b;
          border-radius: 8px;
          background: #237c4c;
          color: white;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        .tiara-book-button:hover {
          background: #2d995f;
          transform: translateY(-1px);
        }

        .tiara-book-arrow {
          font-size: 16px;
        }

        .tiara-mobile-controls {
          display: none;
          align-items: center;
          gap: 15px;
        }

        .tiara-mobile-book {
          padding: 10px 14px;
          border-radius: 7px;
          background: #237c4c;
          color: white;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        .tiara-menu-toggle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          width: 42px;
          height: 42px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 8px;
          background: #101a13;
          cursor: pointer;
        }

        .tiara-menu-toggle span {
          display: block;
          width: 100%;
          height: 2px;
          border-radius: 3px;
          background: white;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .tiara-menu-toggle.is-open span:first-child {
          transform: translateY(4px) rotate(45deg);
        }

        .tiara-menu-toggle.is-open span:last-child {
          transform: translateY(-4px) rotate(-45deg);
        }

        .tiara-mobile-backdrop {
          position: fixed;
          inset: 0;
          z-index: 600;
          width: 100%;
          height: 100%;
          border: 0;
          background: rgba(0, 0, 0, 0.65);
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.3s ease,
            visibility 0.3s ease;
        }

        .tiara-mobile-backdrop.backdrop-visible {
          opacity: 1;
          visibility: visible;
        }

        .tiara-mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 700;
          display: flex;
          flex-direction: column;
          width: min(430px, 100%);
          height: 100dvh;
          overflow-y: auto;
          background: #08120c;
          color: white;
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          transform: translateX(102%);
          visibility: hidden;
          transition:
            transform 0.35s ease,
            visibility 0.35s ease;
        }

        .tiara-mobile-drawer.drawer-visible {
          transform: translateX(0);
          visibility: visible;
        }

        .tiara-drawer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tiara-close-button {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 8px;
          background: #122018;
          color: white;
          font-size: 27px;
          line-height: 1;
          cursor: pointer;
        }

        .tiara-drawer-content {
          padding: 28px 22px 20px;
        }

        .tiara-drawer-content > .tiara-eyebrow {
          margin: 0 0 20px;
          line-height: 1.7;
        }

        .tiara-mobile-link {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          min-height: 61px;
          padding: 12px 0;
          border: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          background: transparent;
          color: #f2f5f2;
          font: inherit;
          font-size: 17px;
          font-weight: 600;
          text-align: left;
          text-decoration: none;
          cursor: pointer;
        }

        .tiara-mobile-link.active {
          color: #76d79d;
        }

        .tiara-mobile-number {
          color: #62c88b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .tiara-mobile-chevron {
          margin-left: auto;
          color: #70d89a;
          font-size: 22px;
          font-weight: 400;
        }

        .tiara-mobile-destinations {
          padding: 9px 0 12px 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .tiara-mobile-destinations a {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 0;
          color: #b8c7bd;
          font-size: 13px;
          text-decoration: none;
        }

        .tiara-mobile-destinations a:hover {
          color: #76d79d;
        }

        .tiara-mobile-language {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 25px;
          padding: 14px 0;
          color: #b7c5bc;
          font-size: 13px;
        }

        .tiara-mobile-language select {
          max-width: 170px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 7px;
          background: #132219;
          color: white;
          font: inherit;
        }

        .tiara-drawer-book {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 13px;
          padding: 17px 18px;
          border-radius: 8px;
          background: #237c4c;
          color: white;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .tiara-drawer-book span {
          font-size: 19px;
        }

        .tiara-drawer-footer {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 28px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #809087;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        @media (max-width: 1250px) {
          .tiara-navbar {
            padding: 0 3%;
            gap: 12px;
          }

          .tiara-brand {
            gap: 9px;
          }

          .tiara-logo-frame {
            width: 43px;
            height: 43px;
          }

          .tiara-brand-name {
            font-size: 20px;
          }

          .tiara-brand-tagline {
            font-size: 8px;
            letter-spacing: 1.5px;
          }

          .tiara-nav-link {
            padding: 0 8px;
            font-size: 12px;
          }

          .tiara-desktop-actions {
            gap: 7px;
          }

          .tiara-book-button {
            gap: 8px;
            padding: 0 12px;
          }
        }

        @media (max-width: 1020px) {
          .tiara-navbar,
          .tiara-header-scrolled .tiara-navbar {
            min-height: 76px;
            padding: 0 22px;
          }

          .tiara-desktop-nav,
          .tiara-desktop-actions {
            display: none;
          }

          .tiara-mobile-controls {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .tiara-navbar,
          .tiara-header-scrolled .tiara-navbar {
            min-height: 70px;
            padding: 0 15px;
          }

          .tiara-logo-frame {
            width: 40px;
            height: 40px;
          }

          .tiara-brand-name {
            font-size: 19px;
          }

          .tiara-brand-tagline {
            font-size: 7px;
            letter-spacing: 1.3px;
          }

          .tiara-mobile-controls {
            gap: 9px;
          }

          .tiara-mobile-book {
            padding: 10px 11px;
          }

          .tiara-menu-toggle {
            width: 39px;
            height: 39px;
          }

          .tiara-drawer-content {
            padding: 24px 18px 20px;
          }

          .tiara-drawer-top {
            padding: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tiara-header,
          .tiara-navbar,
          .tiara-mobile-drawer,
          .tiara-mobile-backdrop,
          .tiara-menu-toggle span {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
