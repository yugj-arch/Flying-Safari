import React, { useState } from 'react';
import { motion } from 'motion/react';
import './HomePage.css';

import svgPaths from "./svg-ubiyt90akf";
import img5878731AfricaAfricanWildlife1920X10802 from "./1decccb9345a495a5ce1e038e4bd9b652ce2d136.png";
import imgAsset352X1 from "./013274749b388cc3f15a4ccba8ad5dedbd4eb252.png";
import imgImageBg from "./d7c8d47e8b8d02986cac6b4778780b324d874e4f.png";
import imgRectangle3 from "./c1d126c148388d772f1dc7ef09194453815b78a7.png";
import imgRectangle2 from "./2ce1413e973f6d5135b4640cfb7d9b8ab92a5d30.png";
import imgRectangle1 from "./7cf4d8769e4215308b28a2d136af14190cf5ceff.png";
import imgRectangle5 from "./b7d2f75edf627542b53d6be6ff0326d79e881884.png";
import imgImage1 from "./4f0fc16fdea5b29b28d6a6bd577058eb1a538d80.png";
import imgRectangle6 from "./d89824ab37559ea273f5847e1fb4d744ad21c25b.png";
import imgRectangle7 from "./d554bbc6095a28b70af624dde77b0762b3cc5b8d.png";
import imgRectangle8 from "./2bc94f05686167b71f7b2770bd2a674eaa5e519e.png";
import imgRectangle9 from "./dc8579c691e8394aeed7e2be27bf49c1d23ea1a5.png";
import imgRectangle10 from "./8037185cf815187a7b32fb7da001bf0811e9b254.png";
import imgRectangle11 from "./7ee25f73a5ef54e5f382cf48300ca6bf67da837a.png";
import imgRectangle12 from "./0b28a361b21ee1ddc7c358901514098c9b1faba9.png";
import imgRectangle13 from "./a4b3395e613d2e2c94ea9093874a84cf6f53b81b.png";
import imgMaleFemaleLionsLayingSandResting1 from "./8ce4f11daa110886684457ada13d5901bda7fa1e.png";
import imgMaleFemaleLionsLayingSandResting2 from "./b908247d62d1c8c0edf547a850e8a89694e07cf9.png";
import imgMaleFemaleLionsLayingSandResting3 from "./f9b21ba002151d8dfd1e3a28171961f9c6e03892.png";
import imgRectangle4 from "./846e78d7aed68d5b3693b47fe1acd0d30c51c725.png";
import imgRectangle14 from "./b30537ab9e0c73119bc0a7d4403969e4ba214f43.png";
import imgRectangle15 from "./6d10c4334961a4cb72d3e244fe83f4bac035f5c8.png";
import imgPanoramicViewRoadFieldAgainstSkySunsetWithZebraSafariPark1 from "./1adb1f071e1fba453357377b332bc67e33ca6b55.png";
import img4 from "./475f5c850fa87799c27fd319e88398df51f0419f.png";
import img3 from "./f0287706abe722e9ee5d2cd4d9891fdd501633e4.png";
import img6 from "./257acdaa227b6e9a0a049bc7f2ca8d197228702f.png";
import img1 from "./e604d183dc7025a034696674ec14431d507de384.png";

function Buttion({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="hero-button-group" data-name="buttion">
      <div className="hero-next-text">
        <p>Next</p>
      </div>
      <div className="hero-next-line" data-name="pseudo" />
    </div>
  );
}

function Hero({ scrollToSection }: { scrollToSection?: (id: string) => void }) {
  return (
    <div className="hero-section" data-name="hero">
      <div
        className="hero-bg-image hero-bg-safari hero-gradient-overlay"
        data-name="5878731_Africa_African_Wildlife_1920x1080 2"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hero-heading"
      >
        <h1>Embark on experiences not just destinations with our trips</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Buttion onClick={() => scrollToSection?.('about-section')} />
      </motion.div>
    </div>
  );
}

function Frame() {
  return (
    <div className="nav-logo-frame" data-name="Frame">
      <img src={imgAsset352X1} alt="Flying Safari" className="nav-logo-img" data-name="Asset 35@2x 1" />
    </div>
  );
}

function Frame1({ scrollToSection, isOpen, setIsOpen }: { scrollToSection: (id: string) => void, isOpen?: boolean, setIsOpen?: (v: boolean) => void }) {
  const links = [
    { label: 'About', id: 'about-section' },
    { label: 'Destination', id: 'destinations-section' },
    { label: 'Itineraries', id: 'itineraries-section' },
    { label: 'Gallery', id: 'gallery-section' },
    { label: 'Contact', id: 'footer-section' },
  ];

  return (
    <div className="nav-links-container" data-name="Frame">
      {links.map((link) => (
        <div key={link.id} onClick={() => scrollToSection(link.id)} className="nav-link-item" data-name="Frame">
          <p className="nav-link-text">{link.label}</p>
        </div>
      ))}
    </div>
  );
}



function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#48503b] content-stretch flex items-center justify-center px-[32px] py-[14px] rounded-[4px] cursor-pointer hover:bg-[#3a3f2e] transition-all transform active:scale-95 shadow-md"
      data-name="button"
    >
      <p className="font-['Optima:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.28px] whitespace-nowrap">About us</p>
    </div>
  );
}

function Frame7({ scrollToSection }: { scrollToSection?: (id: string) => void }) {
  return (
    <section id="about-section" className="about-safari-container">
      {/* Background Texture/Overlay if needed */}
      <div className="about-content-wrapper">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="about-text-content"
        >
          <p className="about-description">
            In Tanzania, the rhythm of the wild is untouched by time. From the roar of lions to the whispers of the savannah winds, the land invites you to wander beyond the ordinary and embrace.
          </p>
          <h2 className="about-title">Flying Safari</h2>
        </motion.div>

        <div className="about-image-stack">
          {/* Left Image - Plane */}
          <motion.div 
            initial={{ rotate: -5, x: -20 }}
            whileInView={{ rotate: -8, x: 0 }}
            className="stack-card card-left"
          >
            <img src={imgRectangle6} alt="Safari Plane" />
          </motion.div>

          {/* Center Image - Lions */}
          <motion.div 
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            className="stack-card card-center"
          >
            <img src={imgMaleFemaleLionsLayingSandResting1} alt="Lions resting" />
          </motion.div>

          {/* Right Image - Tent */}
          <motion.div 
            initial={{ rotate: 5, x: 20 }}
            whileInView={{ rotate: 8, x: 0 }}
            className="stack-card card-right"
          >
            <img src={imgRectangle13} alt="Night Camping" />
          </motion.div>
        </div>

        <div className="about-button-wrapper">
          <button 
            onClick={() => scrollToSection?.('footer-section')} 
            className="about-us-btn"
          >
            About us
          </button>
        </div>
      </div>
    </section>
  );
}

function TablerIconPlaneDeparture() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="tabler-icon-plane-departure">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="tabler-icon-plane-departure">
          <path d={svgPaths.p29007400} id="Vector" stroke="var(--stroke-0, #48503B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconClipboardText() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="tabler-icon-clipboard-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="tabler-icon-clipboard-text">
          <path d={svgPaths.p1ff01380} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconChecklist() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="tabler-icon-checklist">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="tabler-icon-checklist">
          <path d={svgPaths.p37944400} id="Vector" stroke="var(--stroke-0, #595959)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BookingTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'flights', label: 'Book Flights', icon: <TablerIconPlaneDeparture /> },
    { id: 'itineraries', label: 'Find Reservation', icon: <TablerIconClipboardText /> },
    { id: 'check-in', label: 'Check-In', icon: <TablerIconChecklist /> },
  ];

  return (
    <div className="booking-tabs" data-name="Frame">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`booking-tab-item ${activeTab === tab.id ? 'active' : ''}`}
        >
          {tab.icon}
          <div className={`booking-tab-text ${activeTab === tab.id ? 'text-primary' : 'text-grey'}`}>
            {tab.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function BookingForm({ activeTab, from, setFrom, to, setTo, departDate, setDepartDate, returnDate, setReturnDate, passengers, setPassengers, onSearch }: any) {
  if (activeTab !== 'flights') {
    return (
      <div className="bg-white p-12 text-center min-h-[200px] flex items-center justify-center">
        <p className="text-xl text-grey-text font-serif italic">This feature is coming soon...</p>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-stretch p-6 rounded-b-lg">
      <div className="booking-options-bar mb-4">
        <div className="trip-type-container">
          <div className="trip-type-button bg-[#48503b] rounded-l-md">
            <p className="trip-type-text text-white">ROUND TRIP</p>
          </div>
          <div className="trip-type-button bg-[#f3f3f3] rounded-r-md">
            <p className="trip-type-text text-[#2c2c2c]">ONE WAY</p>
          </div>
        </div>
      </div>

      <div className="booking-inputs-grid">
        <div className="booking-input-group">
          <label htmlFor="from-input" className="booking-input-label">FROM</label>
          <div className="booking-input-wrapper">
            <input id="from-input" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Origin" className="booking-input" />
          </div>
        </div>
        <div className="booking-input-group">
          <label htmlFor="to-input" className="booking-input-label">TO</label>
          <div className="booking-input-wrapper">
            <input id="to-input" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Destination" className="booking-input" />
          </div>
        </div>
        <div className="booking-input-group">
          <label htmlFor="depart-date" className="booking-input-label">DEPART</label>
          <div className="booking-input-wrapper">
            <input id="depart-date" type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} title="Departure Date" placeholder="YYYY-MM-DD" className="booking-input" />
          </div>
        </div>
        <div className="booking-input-group">
          <label htmlFor="return-date" className="booking-input-label">RETURN</label>
          <div className="booking-input-wrapper">
            <input id="return-date" type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} title="Return Date" placeholder="YYYY-MM-DD" className="booking-input" />
          </div>
        </div>
        <div className="booking-input-group">
          <label htmlFor="passengers-select" className="booking-input-label">PASSENGERS</label>
          <div className="booking-input-wrapper">
            <select id="passengers-select" value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} title="Number of Passengers" className="booking-input bg-transparent">
              <option value={1}>1 Adult</option>
              <option value={2}>2 Adults</option>
              <option value={3}>3 Adults</option>
              <option value={4}>4 Adults</option>
            </select>
          </div>
        </div>
        <div className="flex items-end">
          <button onClick={onSearch} className="booking-search-btn">
            Search flights
          </button>
        </div>
      </div>
    </div>
  );
}

function BookingWidget(props: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="booking-widget-container"
      data-name="Frame"
    >
      <BookingTabs activeTab={props.activeTab} setActiveTab={props.setActiveTab} />
      <BookingForm {...props} />
    </motion.div>
  );
}

const DESTINATIONS = [
  { name: 'SERENGETI NATIONAL PARK', img: imgRectangle5, featured: true },
  { name: 'MAASAI MARA NATIONAL RESERVE', img: imgImage1, featured: true },
  { name: 'NGORONGORO CRATER', img: imgRectangle6 },
  { name: 'LAKE MANYARA NATIONAL PARK', img: imgRectangle7 },
  { name: 'TARANGIRE NATIONAL PARK', img: imgRectangle8 },
  { name: 'KILIMANAJARO NATIONAL PARK', img: imgRectangle9 },
  { name: 'RUAHA NATIONAL PARK', img: imgRectangle10 },
  { name: 'MIKUMI NATIONAL PARK', img: imgRectangle11 },
  { name: 'KATAVI NATIONAL PARK', img: imgRectangle12 },
];

function DestinationCard({ d, onClick }: { d: typeof DESTINATIONS[0], onClick?: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="destination-card"
      data-name="Frame"
    >
      <img alt={d.name} className="destination-img" src={d.img} loading="lazy" />
      <div className="destination-overlay" />
      <p className="destination-name">{d.name}</p>
      {d.featured && (
        <div className="featured-badge">
          <p className="text-[12px] md:text-[14px] text-white tracking-[0.06em] font-normal uppercase">Featured</p>
        </div>
      )}
    </motion.div>
  );
}

function Frame23({ onCardClick }: { onCardClick?: (name: string) => void }) {
  return (
    <div className="destinations-grid" data-name="Frame">
      {DESTINATIONS.map((d, i) => (
        <DestinationCard key={i} d={d} onClick={() => onCardClick?.(d.name)} />
      ))}
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full md:w-[389px] text-center md:text-left" data-name="Frame">
      <p className="font-['Optima',sans-serif] font-medium relative shrink-0 text-[#d9a551] text-[18px] tracking-[0.02em] w-full uppercase">POPULAR DESTINATIONS</p>
      <p className="font-['Optima',sans-serif] font-normal opacity-74 relative shrink-0 text-[#2c2c2c] text-[32px] md:text-[48px] md:leading-[53px] w-full">East Africa Iconic Safari Destinations</p>
    </div>
  );
}

function Frame35({ scrollToSection }: { scrollToSection?: (id: string) => void }) {
  return (
    <div className="content-stretch flex flex-col items-center md:items-start justify-between relative shrink-0 w-full md:w-[389px] gap-8 md:gap-0">
      <Frame36 />
      <div
        onClick={() => scrollToSection?.('destinations-section')}
        className="bg-[#48503b] content-stretch flex items-center justify-center px-[32px] md:px-[24px] py-[16px] md:py-[12px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[#3a3f2e] transition-colors w-full md:w-auto"
        data-name="button"
      >
        <p className="font-['Optima:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[1.28px] whitespace-nowrap">Explore Destinations</p>
      </div>
    </div>
  );
}

function Frame22({ scrollToSection, onCardClick }: { scrollToSection?: (id: string) => void, onCardClick?: (name: string) => void }) {
  return (
    <div id="destinations-section" className="destinations-section" data-name="Frame">
      <Frame23 onCardClick={onCardClick} />
      <Frame35 scrollToSection={scrollToSection} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full md:w-[409px]" data-name="Frame">
      <p className="font-['Optima',sans-serif] font-medium relative shrink-0 text-[#d9a551] text-[18px] tracking-[0.02em] w-full uppercase">POPULAR ITINERARIES</p>
      <p className="font-['Optima',sans-serif] font-normal relative shrink-0 text-[32px] md:text-[48px] text-white w-full">Safari Itineraries Curated just for you</p>
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="h-[40px] relative shrink-0 w-[82px] cursor-pointer hover:opacity-100 opacity-60 transition-opacity" data-name="button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 40">
        <g id="button">
          <path d={svgPaths.p3d799f80} fill="var(--fill-0, white)" id="path391" opacity="0.27" />
        </g>
      </svg>
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="h-[40px] relative shrink-0 w-[82px] cursor-pointer hover:scale-105 transition-transform" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 40">
        <g id="Button">
          <path d={svgPaths.p32198e00} fill="var(--fill-0, white)" id="path391" />
        </g>
      </svg>
    </div>
  );
}

function Frame41({ onPrev, onNext }: { onPrev?: () => void, onNext?: () => void }) {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Frame">
      <Button3 onClick={onPrev} />
      <Button4 onClick={onNext} />
    </div>
  );
}

function Frame39({ onPrev, onNext }: { onPrev?: () => void, onNext?: () => void }) {
  return (
    <div className="itineraries-content" data-name="Frame">
      <Frame40 />
      <Frame41 onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[16px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="Frame">
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] whitespace-nowrap">Arusha National Park</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[14px] tracking-[0.28px] whitespace-nowrap">3 Nights</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #48503B)" id="Ellipse 1" r="2" />
        </svg>
      </div>
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[14px] tracking-[0.28px] whitespace-nowrap">4 Locations</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[20px] right-[20px] top-[264px]" data-name="Frame">
      <Frame46 />
      <p className="font-['Optima:Normal',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2c2c2c] text-[24px] text-center w-full">{`Arusha, Ngorongoro Crater & Serengeti: Migration Safari`}</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="-translate-x-1/2 absolute h-[6px] left-1/2 top-[226px] w-[56px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 6">
        <g id="Frame 9">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse 2" r="3" />
          <circle cx="13" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 3" r="3" />
          <circle cx="23" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 4" r="3" />
          <circle cx="33" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 5" r="3" />
          <circle cx="43" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 6" r="3" />
          <circle cx="53" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 7" r="3" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconCarSuv() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-car-suv">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-car-suv">
          <path d={svgPaths.p1f14f980} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconMountain() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-mountain">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-mountain">
          <path d={svgPaths.p143e2100} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconAirBalloon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-air-balloon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-air-balloon">
          <path d={svgPaths.p3d1e0980} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconTrekking() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-trekking">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-trekking">
          <path d={svgPaths.p11b56800} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconGrill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-grill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-grill">
          <path d={svgPaths.p3e581f90} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[143px] top-[388px]" data-name="Frame">
      <TablerIconCarSuv />
      <TablerIconMountain />
      <TablerIconAirBalloon />
      <TablerIconTrekking />
      <TablerIconGrill />
    </div>
  );
}

function Frame43({ onViewClick }: { onViewClick?: () => void }) {
  return (
    <div className="h-[520px] overflow-clip relative rounded-[8px] shrink-0 w-full md:w-[454px]" data-name="Frame">
      <div className="absolute bg-[#f8f5f0] h-[520px] left-0 top-0 w-full md:w-[454px]" />
      <div className="absolute h-[240px] left-0 top-0 w-full md:w-[454px]" data-name="male-female-lions-laying-sand-resting 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMaleFemaleLionsLayingSandResting1} loading="lazy" />
      </div>
      <Frame44 />
      <Frame45 />
      <div
        onClick={onViewClick}
        className="active:scale-95 cursor-pointer hover:bg-gray-100 transition-all -translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[24px] py-[12px] rounded-[4px] top-[454px]"
        data-name="button"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(89,89,89,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Optima:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[16px] text-center tracking-[1.28px] whitespace-nowrap">VIEW ITINERARY</p>
      </div>
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[14px] tracking-[0.28px] whitespace-nowrap">8 Nights</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #48503B)" id="Ellipse 1" r="2" />
        </svg>
      </div>
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[14px] tracking-[0.28px] whitespace-nowrap">4 Locations</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[20px] right-[20px] top-[264px]" data-name="Frame">
      <Frame51 />
      <p className="font-['Optima:Normal',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2c2c2c] text-[24px] text-center w-full">{`Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari`}</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[16px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="Frame">
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] whitespace-nowrap">Arusha National Park</p>
    </div>
  );
}

function Button5({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="active:scale-95 cursor-pointer hover:bg-gray-100 transition-all -translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[24px] py-[12px] rounded-[4px] top-[454px]"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(89,89,89,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Optima:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[16px] text-center tracking-[1.28px] whitespace-nowrap">VIEW ITINERARY</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="-translate-x-1/2 absolute h-[6px] left-1/2 top-[226px] w-[56px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 6">
        <g id="Frame 9">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse 2" r="3" />
          <circle cx="13" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 3" r="3" />
          <circle cx="23" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 4" r="3" />
          <circle cx="33" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 5" r="3" />
          <circle cx="43" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 6" r="3" />
          <circle cx="53" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 7" r="3" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconCarSuv1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-car-suv">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-car-suv">
          <path d={svgPaths.p1f14f980} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconMountain1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-mountain">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-mountain">
          <path d={svgPaths.p143e2100} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconAirBalloon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-air-balloon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-air-balloon">
          <path d={svgPaths.p3d1e0980} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconTrekking1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-trekking">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-trekking">
          <path d={svgPaths.p11b56800} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconGrill1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-grill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-grill">
          <path d={svgPaths.p3e581f90} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-1/2 top-[388px]" data-name="Frame">
      <TablerIconCarSuv1 />
      <TablerIconMountain1 />
      <TablerIconAirBalloon1 />
      <TablerIconTrekking1 />
      <TablerIconGrill1 />
    </div>
  );
}

function Frame49({ onViewClick }: { onViewClick?: () => void }) {
  return (
    <div className="h-[520px] overflow-clip relative rounded-[8px] shrink-0 w-full md:w-[454px]" data-name="Frame">
      <div className="absolute bg-[#f8f5f0] h-[520px] left-0 top-0 w-full md:w-[454px]" />
      <div className="absolute h-[240px] left-0 top-0 w-full md:w-[454px]" data-name="male-female-lions-laying-sand-resting 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMaleFemaleLionsLayingSandResting2} loading="lazy" />
      </div>
      <Frame50 />
      <Frame52 />
      <Button5 onClick={onViewClick} />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[14px] tracking-[0.28px] whitespace-nowrap">7 Nights</p>
      <div className="relative shrink-0 size-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #48503B)" id="Ellipse 1" r="2" />
        </svg>
      </div>
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[14px] tracking-[0.28px] whitespace-nowrap">4 Locations</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-[20px] right-[20px] top-[264px]" data-name="Frame">
      <Frame57 />
      <p className="font-['Optima:Normal',sans-serif] leading-[34px] not-italic relative shrink-0 text-[#2c2c2c] text-[24px] text-center w-full">{`Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari `}</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[16px] px-[8px] py-[4px] rounded-[4px] top-[16px]" data-name="Frame">
      <p className="font-['Optima:Normal',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black tracking-[0.28px] whitespace-nowrap">Arusha National Park</p>
    </div>
  );
}

function Button6({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className="active:scale-95 cursor-pointer hover:bg-gray-100 transition-all -translate-x-1/2 absolute content-stretch flex items-center justify-center left-1/2 px-[24px] py-[12px] rounded-[4px] top-[454px]"
      data-name="button"
    >
      <div aria-hidden="true" className="absolute border border-[rgba(89,89,89,0.4)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Optima:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#595959] text-[16px] text-center tracking-[1.28px] whitespace-nowrap">VIEW ITINERARY</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 absolute h-[6px] left-[calc(50%-12px)] top-[226px] w-[56px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 6">
        <g id="Frame 9">
          <circle cx="3" cy="3" fill="var(--fill-0, white)" id="Ellipse 2" r="3" />
          <circle cx="13" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 3" r="3" />
          <circle cx="23" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 4" r="3" />
          <circle cx="33" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 5" r="3" />
          <circle cx="43" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 6" r="3" />
          <circle cx="53" cy="3" fill="var(--fill-0, #2C2C2C)" fillOpacity="0.8" id="Ellipse 7" r="3" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconCarSuv2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-car-suv">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-car-suv">
          <path d={svgPaths.p1f14f980} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconMountain2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-mountain">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-mountain">
          <path d={svgPaths.p143e2100} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconAirBalloon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-air-balloon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-air-balloon">
          <path d={svgPaths.p3d1e0980} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconTrekking2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-trekking">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-trekking">
          <path d={svgPaths.p11b56800} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function TablerIconGrill2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tabler-icon-grill">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tabler-icon-grill">
          <path d={svgPaths.p3e581f90} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Frame60() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[12px] items-center left-[calc(50%-8px)] top-[388px]" data-name="Frame">
      <TablerIconCarSuv2 />
      <TablerIconMountain2 />
      <TablerIconAirBalloon2 />
      <TablerIconTrekking2 />
      <TablerIconGrill2 />
    </div>
  );
}

function Frame55({ onViewClick }: { onViewClick?: () => void }) {
  return (
    <div className="h-[520px] overflow-clip relative rounded-[8px] shrink-0 w-full md:w-[454px]" data-name="Frame">
      <div className="absolute bg-[#f8f5f0] h-[520px] left-0 top-0 w-full md:w-[454px]" />
      <div className="absolute h-[240px] left-0 top-0 w-full md:w-[454px]" data-name="male-female-lions-laying-sand-resting 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMaleFemaleLionsLayingSandResting3} loading="lazy" />
      </div>
      <Frame56 />
      <Frame58 />
      <Button6 onClick={onViewClick} />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame42({ onViewItinerary }: { onViewItinerary?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[28px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame43 onViewClick={() => onViewItinerary?.('Migration Safari')} />
      <Frame49 onViewClick={() => onViewItinerary?.('SkySafari')} />
      <Frame55 onViewClick={() => onViewItinerary?.('Bush to Beach Safari')} />
    </div>
  );
}

function Frame38({ onPrev, onNext, onViewItinerary }: { onPrev?: () => void, onNext?: () => void, onViewItinerary?: (name: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start w-full max-w-[1418px]" data-name="Frame">
      <Frame39 onPrev={onPrev} onNext={onNext} />
      <Frame42 onViewItinerary={onViewItinerary} />
    </div>
  );
}

const BLOG_POSTS = [
  {
    title: "Dung Architects: The Unsung Engineers of the Serengeti",
    date: { month: "AUG", day: "26" },
    img: imgRectangle4,
    tag: "ANIMALS • SAFARI"
  },
  {
    title: "The Great Migration: A Journey of Survival",
    date: { month: "SEP", day: "12" },
    img: imgRectangle14,
    tag: "ANIMALS • TANZANIA"
  },
  {
    title: "Into the Wild: A Guide to the Ngorongoro Crater",
    date: { month: "OCT", day: "05" },
    img: imgRectangle15,
    tag: "SAFARI • GUIDES"
  },
  {
    title: "Bird Watching in Tarangire: A Hidden Gem",
    date: { month: "NOV", day: "18" },
    img: imgRectangle4,
    tag: "BIRDS • TANZANIA"
  },
  {
    title: "Capturing the Perfect Sunset: Photography Tips",
    date: { month: "DEC", day: "02" },
    img: imgRectangle14,
    tag: "PHOTOGRAPHY"
  },
];

function Frame37({ onPrev, onNext, onViewItinerary }: { onPrev?: () => void, onNext?: () => void, onViewItinerary?: (name: string) => void }) {
  return (
    <div id="itineraries-section" className="relative w-full h-full" data-name="Frame">
      <div className="absolute inset-0 bg-[#FDFBF7]" />
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle13} />
      </div>

      <div className="relative z-10 w-full h-full">
        {/* Heading */}
        <div className="absolute left-[80px] top-[60px] w-[409px] h-[82px] flex flex-col gap-[12px]">
          <p className="font-['Optima',sans-serif] font-medium text-[#D9A551] text-[18px] tracking-[0.02em] uppercase">POPULAR ITINERARIES</p>
          <h2 className="font-['Optima',sans-serif] font-normal text-white text-[48px] leading-[53px]">Safari Itineraries Curated just for you</h2>
        </div>

        {/* Slider Navigation */}
        <div className="absolute left-[1156px] top-[102px] w-[204px] h-[40px] flex gap-[40px] items-center">
          <Button3 onClick={onPrev} />
          <Button4 onClick={onNext} />
        </div>

        {/* Itinerary Cards Container */}
        <div className="absolute left-[80px] top-[215px] w-[1280px] h-[520px]">
          <div className="flex flex-row gap-[28px] overflow-x-auto no-scrollbar pb-6">
            <Frame43 onViewClick={() => onViewItinerary?.('Migration Safari')} />
            <Frame49 onViewClick={() => onViewItinerary?.('SkySafari')} />
            <Frame55 onViewClick={() => onViewItinerary?.('Bush to Beach Safari')} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[normal] not-italic relative shrink-0 w-full md:w-[409px]" data-name="Frame">
      <p className="font-['Optima:Medium',sans-serif] relative shrink-0 text-[#d9a551] text-[18px] tracking-[0.36px] w-full">{`BLOGS & JOURNALS`}</p>
      <p className="font-['Optima:Normal',sans-serif] relative shrink-0 text-[32px] md:text-[48px] text-white w-full">{`Safari Stories & Travel Insights`}</p>
    </div>
  );
}

function Frame65({ onPrev, onNext }: { onPrev?: () => void, onNext?: () => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <button
        onClick={onPrev}
        className="group flex items-center justify-center size-[48px] rounded-full border border-[rgba(255,255,255,0.2)] hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-black stroke-white">
          <path d="M15 18L9 12L15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="group flex items-center justify-center size-[48px] rounded-full border border-[rgba(255,255,255,0.2)] hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:stroke-black stroke-white">
          <path d="M9 18L15 12L9 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame64 />
      <Frame65 />
    </div>
  );
}

// Legacy components Frame62, Frame63, Frame66 were removed as they were redundant to the new Frame61 implementation.

function Frame80({ onSubscribe }: { onSubscribe?: (email: string) => void }) {
  const [email, setEmail] = useState('');
  return (
    <section className="relative w-full h-full overflow-hidden" data-name="big-text-section">
      <img
        src={imgPanoramicViewRoadFieldAgainstSkySunsetWithZebraSafariPark1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
      />

      {/* Top Blur */}
      <div className="absolute top-[-110px] left-1/2 -translate-x-1/2 w-[1624px] h-[171px] bg-white blur-[30px]" />

      <div className="absolute left-[107px] top-[44px] z-[10] text-center text-[188px] font-normal text-white font-['Optima',sans-serif] tracking-[0.04em] leading-[209px] select-none uppercase whitespace-nowrap">
        FLYING SAFARI
      </div>

      <div className="absolute left-[455px] top-[303px] z-[15] text-center w-[531px] flex flex-col items-center">
        <p className="text-white font-['Optima',sans-serif] font-bold text-[20px] mb-[8px] tracking-[0.5px] leading-[34px]">Subscribe for latest update & offers</p>
        <div className="flex items-center bg-white/12 border border-white/40 backdrop-blur-[43.95px] p-[4px] pl-[24px] w-full rounded-[41px] shadow-2xl overflow-hidden h-[50px]">
          <div className="flex flex-row justify-between items-center w-full px-2">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              className="flex-1 border-none outline-none bg-transparent text-white text-[16px] font-['Optima',sans-serif] placeholder:text-white"
            />
            <button
              onClick={() => {
                onSubscribe?.(email);
                setEmail('');
              }}
              className="bg-[#48503b] hover:bg-[#3a4130] text-white px-[24px] py-[12px] rounded-[28px] border-none font-['Optima',sans-serif] cursor-pointer font-bold text-[16px] transition-all transform active:scale-95 h-[42px]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Frame79({ scrollToSection }: { scrollToSection?: (id: string) => void }) {
  const resourceLinks: { [key: string]: string } = {
    "About Us": "about-section",
    "Itineraries": "itineraries-section",
    "Destination": "destinations-section",
    "Gallery": "gallery-section",
    "Blogs": "blog-section",
    "Contact Us": "footer-section"
  };

  return (
    <section id="footer-section" className="relative w-full h-full text-white pt-[48px] pb-[40px] overflow-hidden" data-name="Frame">
      <div className="absolute inset-0 w-full h-full" data-name="image bg">
        <img alt="" className="absolute inset-0 object-cover size-full scale-y-[-1]" src={imgRectangle13} />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-0 flex flex-col items-center md:items-start h-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-[40px] md:gap-[133px]">
          <div className="flex flex-col gap-[40px] items-center md:items-start w-[229.63px]">
            <div className="w-full h-[100px] overflow-hidden">
              <img src={imgAsset352X1} alt="Flying Safari" className="w-full h-full object-contain" />
            </div>
            {/* Social Icons List */}
            <div className="flex gap-[32px] items-center">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="size-6 bg-white rounded-full cursor-pointer hover:bg-white/80 transition-colors" />
              ))}
            </div>
          </div>
          <div className="flex flex-row md:flex-row gap-[120px] items-start w-[840px]">
            <div className="flex flex-col gap-[24px] w-[132px]">
              <h3 className="text-[#D9A551] text-[18px] font-['Optima',sans-serif] font-medium tracking-[0.02em] uppercase">Destination</h3>
              <div className="flex flex-col gap-[12px] text-white text-[14px] font-['Optima',sans-serif]">
                {["Arusha", "Serengeti", "Kilimanjaro", "Ngorongoro Crater", "Lake Manyara", "Tranagire", "Mahale Mountains"].map(l => (
                  <p key={l} className="hover:text-[#D9A551] cursor-pointer transition-colors" onClick={() => scrollToSection?.('destinations-section')}>{l}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[140px]">
              <h3 className="text-[#D9A551] text-[18px] font-['Optima',sans-serif] font-medium tracking-[0.02em] uppercase">Resources</h3>
              <div className="flex flex-col gap-[12px] text-white text-[14px] font-['Optima',sans-serif]">
                {["About Us", "Itineraries", "Destination", "Gallery", "Blogs", "Contact Us"].map(l => (
                  <p key={l} className="hover:text-[#D9A551] cursor-pointer transition-colors" onClick={() => scrollToSection?.(resourceLinks[l])}>{l}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[24px] w-[232px]">
              <h3 className="text-[#D9A551] text-[18px] font-['Optima',sans-serif] font-medium tracking-[0.02em] uppercase">Contact us</h3>
              <div className="flex flex-col gap-[12px] text-white text-[14px] font-['Optima',sans-serif] items-center md:items-start">
                <p>+255 58954 58945</p>
                <div className="flex flex-col gap-[8px]">
                  <p>Info@flyingsafari.ae</p>
                  <p>contact@flyingsafari.ae</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center mt-[40px]">
          <p className="text-white text-[14px] font-['Optima',sans-serif]">@ 2025 Flying Safari Limited. All rights reserved.</p>
          <div className="flex items-center gap-1 text-white text-[16px] font-['Optima',sans-serif]">
            <span>Designed & Developed by</span>
            <span className="font-bold">DotSyndicate</span>
          </div>
          <div className="flex gap-[20px]">
            <p className="text-white text-[14px] font-['Optima',sans-serif] hover:text-[#D9A551] cursor-pointer transition-colors">Privacy Policy</p>
            <p className="text-white text-[14px] font-['Optima',sans-serif] hover:text-[#D9A551] cursor-pointer transition-colors">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogsSection({ blogIdx, scrollBlog, showToast }: { blogIdx: number, scrollBlog: (dir: number) => void, showToast: (msg: string) => void }) {
  return (
    <div id="blog-section" className="w-full h-full relative">
      {/* Heading Group */}
      <div className="absolute left-0 top-0 w-[409px] h-[82px] flex flex-col gap-[12px]">
        <p className="text-[#D9A551] text-[18px] tracking-[0.02em] font-medium uppercase font-['Optima',sans-serif]">BLOGS & JOURNALS</p>
        <h2 className="font-['Optima',sans-serif] text-[#2C2C2C] text-[48px] font-normal leading-[53px]">Safari Stories & Travel Insights</h2>
      </div>

      {/* Navigation */}
      <div className="absolute left-[1114px] top-[42px] flex gap-[16px] items-center">
        <Button3 onClick={() => scrollBlog(-1)} />
        <Button4 onClick={() => scrollBlog(1)} />
      </div>

      {/* Blog Cards Grid */}
      <div className="absolute left-0 top-[175px] w-[1282px] h-[460px] grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {BLOG_POSTS.slice(blogIdx, blogIdx + 3).map((b: any, i: number) => (
          <div key={i} onClick={() => showToast(`Reading: ${b.title}`)} className="relative w-full aspect-square md:w-full md:h-[400px] cursor-pointer overflow-hidden group shadow-2xl mx-auto rounded-[8px]">
            <img src={b.img} alt={b.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute top-[20px] left-[20px] bg-white/10 backdrop-blur-md border border-white/20 px-[14px] py-[10px] text-center min-w-[55px] z-20">
              <div className="text-white text-[11px] tracking-[0.02em] font-['Arial',sans-serif] font-bold uppercase">{b.date.month}</div>
              <div className="text-white text-[20px] font-['Optima',sans-serif] mt-[2px] font-bold">{b.date.day}</div>
            </div>
            <div className={`absolute bottom-[16px] left-[16px] right-[16px] p-[24px] transition-all duration-400 z-20 ${i === 0 ? 'bg-[#48503b]/95' : 'bg-white/95'} group-hover:bottom-[20px] rounded-[4px]`}>
              <div className={`text-[10px] tracking-[0.02em] mb-[10px] uppercase font-bold font-['Arial',sans-serif] ${i === 0 ? 'text-white/60' : 'text-[#888]'}`}>
                {b.tag}
              </div>
              <h3 className={`text-[17px] leading-[1.5] font-['Optima',sans-serif] font-normal transition-colors ${i === 0 ? 'text-white' : 'text-[#2C2C2C]'}`}>
                {b.title}
              </h3>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="h-[113px] relative shrink-0 w-[100px]" data-name="01">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 113">
        <g id="01">
          <g id="tabler-icon-plane-inflight">
            <path d={svgPaths.p8269f00} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
          <ellipse cx="50" cy="106.5" fill="var(--fill-0, #D9A551)" id="Ellipse 8" opacity="0.2" rx="50" ry="6.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col font-['Optima:Normal',sans-serif] gap-[12px] items-center not-italic relative shrink-0 text-[#48503b] text-center w-full" data-name="Frame">
      <p className="leading-[34px] relative shrink-0 text-[24px] w-full">Seamless Journeys</p>
      <p className="leading-[24px] relative shrink-0 text-[16px] tracking-[0.32px] w-full">Effortlessly combine flight bookings with inspiring safari itineraries.</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[280px]" data-name="01">
      <Component7 />
      <Frame106 />
    </div>
  );
}

function Component8() {
  return (
    <div className="h-[113px] relative shrink-0 w-[100px]" data-name="04">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 113">
        <g id="04">
          <g id="tabler-icon-user">
            <path d={svgPaths.p18997b80} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
          <ellipse cx="50" cy="106.5" fill="var(--fill-0, #D9A551)" id="Ellipse 11" opacity="0.2" rx="50" ry="6.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col font-['Optima:Normal',sans-serif] gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-name="Frame">
      <p className="leading-[34px] relative shrink-0 text-[#2c2c2c] text-[24px] w-full">Travel Experts</p>
      <p className="leading-[24px] relative shrink-0 text-[#595959] text-[16px] tracking-[0.32px] w-full">Rely on local knowledge and partners for safe, memorable safaris.</p>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[280px]" data-name="04">
      <Component8 />
      <Frame107 />
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[113px] relative shrink-0 w-[100px]" data-name="03">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 113">
        <g id="03">
          <g id="tabler-icon-tag-starred">
            <g id="Vector">
              <path d={svgPaths.p1d589a80} stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p12ca6980} stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              <path d={svgPaths.p2f989cf2} stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
            </g>
          </g>
          <ellipse cx="50" cy="106.5" fill="var(--fill-0, #D9A551)" id="Ellipse 10" opacity="0.2" rx="50" ry="6.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col font-['Optima:Normal',sans-serif] gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-name="Frame">
      <p className="leading-[34px] relative shrink-0 text-[#2c2c2c] text-[24px] w-full">Smart Fares</p>
      <p className="leading-[24px] relative shrink-0 text-[#595959] text-[16px] tracking-[0.32px] w-full">Enjoy exclusive savings and special offers on Tanzania flight bookings.</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[280px]" data-name="03">
      <Component13 />
      <Frame108 />
    </div>
  );
}

function Component15() {
  return (
    <div className="h-[113px] relative shrink-0 w-[100px]" data-name="02">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 113">
        <g id="02">
          <g id="tabler-icon-map">
            <path d={svgPaths.p28ea3380} id="Vector" stroke="var(--stroke-0, #D9A551)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
          <ellipse cx="50" cy="106.5" fill="var(--fill-0, #D9A551)" id="Ellipse 9" opacity="0.2" rx="50" ry="6.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col font-['Optima:Normal',sans-serif] gap-[12px] items-center not-italic relative shrink-0 text-center w-full" data-name="Frame">
      <p className="leading-[34px] relative shrink-0 text-[#2c2c2c] text-[24px] w-full">Curated Itineraries</p>
      <p className="leading-[24px] relative shrink-0 text-[#595959] text-[16px] tracking-[0.32px] w-full">Hand-picked safari routes showcasing Tanzania’s most iconic destinations.</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[280px]" data-name="02">
      <Component15 />
      <Frame109 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="seamless-content" data-name="Frame">
      <Component6 />
      <Component12 />
      <Component11 />
      <Component14 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-center w-full" data-name="Frame">
      <p className="font-['Optima:Medium',sans-serif] min-w-full relative shrink-0 text-[#d9a551] text-[16px] md:text-[18px] tracking-[0.36px] w-[min-content]">GALLERY</p>
      <p className="font-['Optima:Normal',sans-serif] relative shrink-0 text-[#2c2c2c] text-[32px] md:text-[48px] w-full max-w-[798px]">A selection of Images of Our Beautiful Safari Experiences</p>
    </div>
  );
}



const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e", // Giraffes
  "https://images.unsplash.com/photo-1516426122078-c23e76319801", // Flamingos
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Road landscape (Center)
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5", // Zebras
  "https://images.unsplash.com/photo-1497206365907-f5e630693df0"  // People walking
];

function GallerySection({ onPrev, onNext }: { onPrev?: () => void, onNext?: () => void }) {
  const [centerIdx, setCenterIdx] = useState(2); // Start with the 3rd image as center

  const nextImage = () => {
    setCenterIdx((prev) => (prev + 1) % GALLERY_IMAGES.length);
    onNext?.();
  };

  const prevImage = () => {
    setCenterIdx((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    onPrev?.();
  };

  return (
    <section id="gallery-section" className="gallery-outer-container">
      <div className="gallery-text-header">
        <p className="gallery-sub">GALLERY</p>
        <h2 className="gallery-main-title">A selection of Images of Our Beautiful Safari Experiences</h2>
      </div>

      <div className="gallery-slider-wrapper">
        {GALLERY_IMAGES.map((img, index) => {
          // Logic for finding position relative to center
          let position = "side";
          if (index === centerIdx) position = "center";
          
          return (
            <div 
              key={index} 
              className={`gallery-item ${position}`}
              data-offset={index - centerIdx}
            >
              <img src={img} alt="Safari" />
            </div>
          );
        })}
      </div>

      <div className="gallery-nav-arrows">
        <button onClick={prevImage} className="nav-arrow" aria-label="Previous image">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
             <path d="M60 10H2M2 10L10 2M2 10L10 18" stroke="#333" strokeWidth="1"/>
          </svg>
        </button>
        <button onClick={nextImage} className="nav-arrow" aria-label="Next image">
          <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
             <path d="M0 10H58M58 10L50 2M58 10L50 18" stroke="#333" strokeWidth="1"/>
          </svg>
        </button>
      </div>
    </section>
  );
}


export default function HomePage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [blogIdx, setBlogIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('flights');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    alert(msg);
  };

  const scrollBlog = (dir: number) => {
    const maxIdx = BLOG_POSTS.length > 3 ? BLOG_POSTS.length - 3 : 0;
    let next = blogIdx + dir;
    if (next < 0) next = maxIdx;
    if (next > maxIdx) next = 0;
    setBlogIdx(next);
  };

  const handleSearch = () => {
    alert(`Searching flights from ${from} to ${to} on ${departDate} returning ${returnDate} for ${passengers} passenger(s)`);
  };

  const handleBookFlights = () => {
    scrollToSection('destinations-section');
  };

  const handleFindReservation = () => {
    alert('Redirecting to reservation lookup...');
  };

  const handleCheckIn = () => {
    alert('Redirecting to check-in page...');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="home-page" data-name="Home Page">
      <div className="navigation-bar" data-name="NAVIGATION">
        <Frame />
        <Frame1 scrollToSection={scrollToSection} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      </div>

      <Hero scrollToSection={scrollToSection} />

      <BookingWidget
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        from={from} setFrom={setFrom}
        to={to} setTo={setTo}
        departDate={departDate} setDepartDate={setDepartDate}
        returnDate={returnDate} setReturnDate={setReturnDate}
        passengers={passengers} setPassengers={setPassengers}
        onSearch={handleSearch}
        onBookFlights={handleBookFlights}
        onFindReservation={handleFindReservation}
        onCheckIn={handleCheckIn}
      />

      <div className="destinations-section">
        <Frame22 scrollToSection={scrollToSection} onCardClick={(name) => showToast(`Destination selected: ${name}`)} />
      </div>

      <Frame7 scrollToSection={scrollToSection} />

      <div className="itineraries-section itineraries-section-bg">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <Frame37 onPrev={() => showToast('Previous Itinerary')} onNext={() => showToast('Next Itinerary')} onViewItinerary={(name) => showToast(`Viewing itinerary: ${name}`)} />
        </div>
      </div>

      <div className="seamless-journeys-section seamless-journeys-section-bg">
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-10">
          <Frame104 />
        </div>
      </div>

      <GallerySection onPrev={() => showToast('Previous Gallery Image')} onNext={() => showToast('Next Gallery Image')} />

      <div className="blogs-footer-container">
        <div className="blogs-section">
          <BlogsSection blogIdx={blogIdx} scrollBlog={scrollBlog} showToast={showToast} />
        </div>
        <div className="big-text-footer-group">
          <div className="big-text-section">
            <Frame80 onSubscribe={(email) => showToast(`Subscribed with: ${email}`)} />
          </div>
          <div className="footer-section">
            <Frame79 scrollToSection={scrollToSection} />
          </div>
        </div>
      </div>
    </div>
  );
}
