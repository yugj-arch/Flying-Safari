import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "About", id: "about-section" },
  { label: "Destination", id: "destinations-section" },
  { label: "Itineraries", id: "itineraries-section" },
  { label: "Gallery", id: "gallery-section" },
  { label: "Contact", id: "footer-section" }
];

const DESTINATIONS = [
  { name: "SERENGETI\nNATIONAL PARK", featured: true, img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80" },
  { name: "MAASAI MARA\nNATIONAL RESERVE", featured: true, img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80" },
  { name: "NGORONGORO\nCRATER", img: "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=400&q=80" },
  { name: "LAKE MANYARA\nNATIONAL PARK", img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=400&q=80" },
  { name: "TARANGIRE\nNATIONAL PARK", img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&q=80" },
  { name: "KILIMANJARO\nNATIONAL PARK", img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&q=80" },
  { name: "RUAHA\nNATIONAL PARK", img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&q=80" },
  { name: "MIKUMI\nNATIONAL PARK", img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80" },
  { name: "KATAVI\nNATIONAL PARK", img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80" },
];

const ITINERARIES = [
  {
    title: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari",
    meta: "3 Nights • 4 Locations",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80",
      "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=500&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=80"
    ],
    tag: "Arusha National Park"
  },
  {
    title: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari",
    meta: "8 Nights • 4 Locations",
    images: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=80",
      "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=500&q=80"
    ],
    tag: "Arusha National Park"
  },
  {
    title: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari",
    meta: "7 Nights • 4 Locations",
    images: [
      "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=500&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80"
    ],
    tag: "Arusha National Park"
  },
  {
    title: "Northern Circuit Explorer: Tarangire & Serengeti",
    meta: "5 Nights • 3 Locations",
    images: [
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=80",
      "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=500&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80"
    ],
    tag: "Tarangire National Park"
  },
  {
    title: "Southern Tanzania Wilderness: Ruaha & Mikumi",
    meta: "6 Nights • 2 Locations",
    images: [
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=500&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80"
    ],
    tag: "Ruaha National Park"
  },
  {
    title: "Ultimate East Africa: Kenya & Tanzania Combine",
    meta: "12 Nights • 6 Locations",
    images: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&q=80",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=500&q=80",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=500&q=80",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80"
    ],
    tag: "Masai Mara Reserve"
  },
];

const FEATURES = [
  {
    title: "Seamless Journeys",
    desc: "Effortlessly combine flight bookings with inspiring safari itineraries.",
    iconPaths: ["M12.5 87.5H87.5M62.5 46.1873H83.3333C85.5435 46.1873 87.6631 47.0653 89.2259 48.6281C90.7887 50.1909 91.6667 52.3105 91.6667 54.5207C91.6667 56.7308 90.7887 58.8504 89.2259 60.4132C87.6631 61.976 85.5435 62.854 83.3333 62.854H20.8333L8.33333 37.854H20.8333L29.1667 46.1873H41.6667L33.3333 17.0207H45.8333L62.5 46.1873Z"],
    isDark: true
  },
  {
    title: "Travel Experts",
    desc: "Rely on local knowledge and partners for safe, memorable safaris.",
    iconPaths: ["M25 87.5V79.1667C25 74.7464 26.7559 70.5072 29.8816 67.3816C33.0072 64.2559 37.2464 62.5 41.6667 62.5H58.3333C62.7536 62.5 66.9928 64.2559 70.1184 67.3816C73.244 70.5072 75 74.7464 75 79.1667V87.5M33.3333 29.1667C33.3333 33.5869 35.0893 37.8262 38.2149 40.9518C41.3405 44.0774 45.5797 45.8333 50 45.8333C54.4203 45.8333 58.6595 44.0774 61.7851 40.9518C64.9107 37.8262 66.6667 33.5869 66.6667 29.1667C66.6667 24.7464 64.9107 20.5072 61.7851 17.3816C58.6595 14.2559 54.4203 12.5 50 12.5C45.5797 12.5 41.3405 14.2559 38.2149 17.3816C35.0893 20.5072 33.3333 24.7464 33.3333 29.1667Z"],
    isDark: false
  },
  {
    title: "Smart Fares",
    desc: "Enjoy exclusive savings and special offers on Tanzania flight bookings.",
    iconPaths: [
      "M27.0833 31.25C27.0833 32.3551 27.5223 33.4149 28.3037 34.1963C29.0851 34.9777 30.1449 35.4167 31.25 35.4167C32.3551 35.4167 33.4149 34.9777 34.1963 34.1963C34.9777 33.4149 35.4167 32.3551 35.4167 31.25C35.4167 30.1449 34.9777 29.0851 34.1963 28.3037C33.4149 27.5223 32.3551 27.0833 31.25 27.0833C30.1449 27.0833 29.0851 27.5223 28.3037 28.3037C27.5223 29.0851 27.0833 30.1449 27.0833 31.25Z",
      "M12.5 25V46.55C12.5005 48.76 13.3788 50.8792 14.9417 52.4417L47.0667 84.5667C48.9498 86.4495 51.5037 87.5073 54.1667 87.5073C56.8296 87.5073 59.3835 86.4495 61.2667 84.5667L84.5667 61.2667C86.4495 59.3835 87.5073 56.8296 87.5073 54.1667C87.5073 51.5037 86.4495 48.9498 84.5667 47.0667L52.4417 14.9417C50.8792 13.3788 48.76 12.5005 46.55 12.5H25C21.6848 12.5 18.5054 13.817 16.1612 16.1612C13.817 18.5054 12.5 21.6848 12.5 25Z",
      "M52.0833 57.6956L45.8333 62.4998L48.05 54.7623L41.6667 49.9998H49.5917L52.0833 42.4998L54.575 49.9998H62.5L56.1167 54.7623L58.3333 62.4998L52.0833 57.6956Z"
    ],
    isDark: false
  },
  {
    title: "Curated Itineraries",
    desc: "Hand-picked safari routes showcasing Tanzania’s most iconic destinations.",
    iconPaths: ["M62.5 29.1667L37.5 16.6667L12.5 29.1667V83.3333L37.5 70.8333M37.5 16.6667V70.8333M37.5 70.8333L62.5 83.3333L87.5 70.8333V16.6667L62.5 29.1667M62.5 29.1667V83.3333"],
    isDark: false
  }
];

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=900&q=80",
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=900&q=80",
  "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=900&q=80",
  "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=900&q=80",
  "https://images.unsplash.com/photo-1549366021-9f761d450615?w=900&q=80",
  "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80",
];

const BLOG_POSTS = [
  {
    title: "Dung Architects: The Unsung Engineers of the Serengeti",
    date: { month: "AUG", day: "26" },
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=80",
    tag: "ANIMALS • SAFARI"
  },
  {
    title: "The Great Migration: A Journey of Survival",
    date: { month: "SEP", day: "12" },
    img: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80",
    tag: "ANIMALS • TANZANIA"
  },
  {
    title: "Into the Wild: A Guide to the Ngorongoro Crater",
    date: { month: "OCT", day: "05" },
    img: "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=600&q=80",
    tag: "SAFARI • GUIDES"
  },
  {
    title: "Bird Watching in Tarangire: A Hidden Gem",
    date: { month: "NOV", day: "18" },
    img: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80",
    tag: "BIRDS • TANZANIA"
  },
  {
    title: "Capturing the Perfect Sunset: Photography Tips",
    date: { month: "DEC", day: "02" },
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80",
    tag: "PHOTOGRAPHY"
  },
];

const HERO_BGS = [
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=90",
  "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=90",
  "https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&q=90",
  "https://images.unsplash.com/photo-1554990349-170b9e4bdf3b?w=1600&q=90",
];

export default function FlyingSafari() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroBgIdx, setHeroBgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIdx((prev) => (prev + 1) % HERO_BGS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [galleryIdx, setGalleryIdx] = useState(2);
  const [itinIdx, setItinIdx] = useState(0);
  const [blogIdx, setBlogIdx] = useState(0);
  const [toast, setToast] = useState(null);
  const [hoveredItin, setHoveredItin] = useState(null);
  const [itinImgIdx, setItinImgIdx] = useState(0);

  useEffect(() => {
    let interval;
    if (hoveredItin !== null) {
      interval = setInterval(() => {
        setItinImgIdx((prev) => (prev + 1) % 4);
      }, 1000);
    } else {
      setItinImgIdx(0);
    }
    return () => clearInterval(interval);
  }, [hoveredItin]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Booking Widget State
  const [activeTab, setActiveTab] = useState("Book Flights");
  const [tripType, setTripType] = useState("Round Trip");
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo, setFlightTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);
  const [couponCode, setCouponCode] = useState("");
  const [email, setEmail] = useState("");

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSwap = () => {
    const temp = flightFrom;
    setFlightFrom(flightTo);
    setFlightTo(temp);
  };

  const handleSearchFlight = () => {
    if (activeTab === "Book Flights") {
      if (!flightFrom || !flightTo) {
        showToast("Please fill in origin and destination");
        return;
      }
      showToast(`Searching ${tripType} flights from ${flightFrom} to ${flightTo}...`);
      setTimeout(() => {
        setFlightFrom("");
        setFlightTo("");
        setDepartDate("");
        setReturnDate("");
      }, 1500);
    } else {
      showToast(`Feature '${activeTab}' is coming soon.`);
    }
  };

  const handleSubscribe = () => {
    if (!email) {
      showToast("Please enter an email address.");
      return;
    }
    showToast("Thanks for subscribing!");
    setEmail("");
  };

  // Sections smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollItin = (dir) => {
    // Carousel infinite scroll logic for 3 visible cards
    const maxIdx = ITINERARIES.length > 3 ? ITINERARIES.length - 3 : 0;
    let next = itinIdx + dir;
    if (next < 0) next = maxIdx;
    if (next > maxIdx) next = 0;
    setItinIdx(next);
  };

  const scrollGallery = (dir) => {
    setGalleryIdx((prev) => (prev + dir + GALLERY_IMGS.length) % GALLERY_IMGS.length);
  };

  const scrollBlog = (dir) => {
    const maxIdx = BLOG_POSTS.length > 3 ? BLOG_POSTS.length - 3 : 0;
    let next = blogIdx + dir;
    if (next < 0) next = maxIdx;
    if (next > maxIdx) next = 0;
    setBlogIdx(next);
  };

  const styles = {
    root: { fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0, padding: 0, overflowX: "hidden", backgroundColor: "#fff" },
    // NAV
    nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, padding: "20px 60px", display: "flex", alignItems: "center", justifyContent: "space-between", background: "transparent", transition: "all 0.3s ease", height: 90 },
    logo: { display: "flex", flexDirection: "column", cursor: "pointer", zIndex: 1001, position: "relative", minWidth: 150 },
    logoPlaneWrap: { position: "absolute", top: -15, left: -10, width: 80, height: 40 },
    logoFlying: { fontSize: 16, color: "#fff", textTransform: "uppercase", letterSpacing: 8, fontWeight: 400, fontFamily: "'Georgia', serif", marginLeft: 15, marginBottom: -5 },
    logoSafari: { fontSize: 42, color: "#fff", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Georgia', serif", letterSpacing: 2, lineHeight: 1 },
    navLinks: { display: "flex", gap: 30, backgroundColor: "rgba(0,0,0,0.4)", borderRadius: 40, padding: "12px 40px", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" },
    navLink: { color: "#fff", textDecoration: "none", fontSize: 14, cursor: "pointer", fontFamily: "Arial, sans-serif", fontWeight: 700, transition: "all 0.3s ease", padding: "4px 10px" },
    // HERO
    hero: { position: "relative", height: "100vh", minHeight: 850, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", paddingTop: 160 },
    heroBg: { position: "absolute", inset: 0, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.85)", transition: "opacity 1.5s ease-in-out" },
    heroOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 40%), linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 100%)" },
    heroContent: { position: "relative", zIndex: 2, padding: "0 100px", maxWidth: 1400 },
    heroH1: { fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 400, color: "#fff", lineHeight: 1.2, fontFamily: "Arial, sans-serif", textAlign: "left", textShadow: "0 4px 15px rgba(0,0,0,0.4)" },
    cursive: { fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: "1.1em", color: "#fff" },
    // BOOKING WIDGET
    bookingWidget: { position: "absolute", bottom: 0, left: "5%", right: "5%", zIndex: 50, maxWidth: 1200, margin: "0 auto" },
    tabsRow: { display: "flex", backgroundColor: "#EFEFEF", borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" },
    tab: { padding: "16px 28px", fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, transition: "all 0.2s", fontWeight: 700, fontFamily: "Georgia, serif" },
    tabActive: { backgroundColor: "#fff", color: "#4A5D3F" },
    tabInactive: { backgroundColor: "#EFEFEF", color: "#666" },
    tabsContainerInactive: { display: "flex", flex: 1 },
    bookingContent: { backgroundColor: "#fff", padding: "24px", borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
    tripTypes: { display: "flex", gap: 10, marginBottom: 20 },
    tripTypeBtn: { padding: "10px 24px", borderRadius: 4, fontSize: 14, fontFamily: "Arial, sans-serif", cursor: "pointer", border: "none", fontWeight: 600 },
    tripTypeActive: { backgroundColor: "#4A5D3F", color: "#fff" },
    inputsRow: { display: "flex", gap: 10, marginBottom: 24, alignItems: "center" },
    inputGroup: { flex: 1, backgroundColor: "#F2F2F2", borderRadius: 4, padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 52 },
    input: { border: "none", background: "transparent", width: "100%", fontSize: 13, color: "#999", outline: "none", fontFamily: "Arial, sans-serif", fontWeight: 700 },
    iconBtn: { width: 34, height: 34, borderRadius: "50%", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "pointer", flexShrink: 0, margin: "0 -5px", zIndex: 2 },
    bottomRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20 },
    couponText: { color: "#666", fontSize: 15, fontFamily: "Georgia, serif", display: "flex", alignItems: "center", gap: 12 },
    searchFlightBtn: { backgroundColor: "#4D5645", color: "#fff", border: "none", borderRadius: 4, padding: "14px 44px", fontSize: 18, fontWeight: 500, cursor: "pointer", fontFamily: "Georgia, serif" },
    // DESTINATIONS
    destSection: { padding: "120px 60px", backgroundColor: "#FDFBF7", display: "flex", justifyContent: "center", alignItems: "center" },
    destLayout: { display: "flex", flexDirection: "row", gap: 80, maxWidth: 1280, width: "100%", alignItems: "center" },
    destGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, flex: 1.8 },
    destCard: { position: "relative", borderRadius: 12, overflow: "hidden", cursor: "pointer", height: 210, boxShadow: "0 10px 30px rgba(0,0,0,0.12)", transition: "transform 0.3s ease" },
    destImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    destLabel: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.35)", color: "#fff", fontSize: 20, fontFamily: "'Optima', sans-serif", textAlign: "center", padding: 20, lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '1.5px' },
    destRight: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" },
    sectionLabel: { fontSize: 13, letterSpacing: 4, color: "#D9A551", textTransform: "uppercase", fontFamily: "'Optima', sans-serif", marginBottom: 12 },
    sectionH2: { fontSize: "48px", color: "#333", lineHeight: 1.1, margin: "0 0 40px", fontFamily: "'Optima', sans-serif", fontWeight: 400 },
    exploreBtn: { backgroundColor: "#4D5645", color: "#fff", border: "none", borderRadius: 4, padding: "14px 32px", fontSize: 14, cursor: "pointer", fontFamily: "'Optima', sans-serif", transition: "all 0.3s", fontWeight: 600, alignSelf: "flex-start" },
    // FLYING SAFARI PROMO
    promoSection: { backgroundColor: "#FAF6EF", padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden" },
    promoRight: { position: "relative", height: 450, display: "flex", alignItems: "center", justifyContent: "center", maxWidth: 900, margin: "0 auto" },
    // ITINERARIES
    itinSection: { padding: "80px 60px", background: "linear-gradient(to right, #2b1602, #3e2102)" },
    itinHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 },
    itinCards: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 },
    itinCard: { borderRadius: 4, overflow: "hidden", cursor: "pointer", transition: "transform 0.3s", backgroundColor: "#F7F5F0" },
    itinImg: { width: "100%", height: 240, objectFit: "cover", display: "block" },
    itinInfo: { padding: "24px 20px 30px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" },
    itinTitle: { fontSize: 18, color: "#333", fontFamily: "Georgia, serif", lineHeight: 1.4, margin: "16px 0", minHeight: 60 },
    itinMeta: { fontSize: 11, color: "#888", fontFamily: "Arial, sans-serif", letterSpacing: 1 },
    itinIcons: { display: "flex", gap: 16, justifyContent: "center", marginBottom: 30, fontSize: 16, color: "#D2AB66" },
    itinBtns: { display: "flex", gap: 10 },
    arrowBtn: { border: "none", background: "transparent", cursor: "pointer", fontSize: 40, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 100, minHeight: 44, minWidth: 44 },
    viewItinBtn: { backgroundColor: "transparent", color: "#666", border: "1px solid #ccc", borderRadius: 2, padding: "12px 24px", fontSize: 11, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer", fontFamily: "Arial, sans-serif", transition: "all 0.3s", fontWeight: 600 },
    // FEATURES ROW
    featuresSection: { backgroundColor: "#FDFBF7", padding: "80px 0", width: "100%", position: "relative" },
    seamlessContent: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", gap: 54, maxWidth: 1280, margin: "0 auto", flexWrap: "nowrap", padding: "0 16px", overflowX: "auto" },
    featureItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: 280, textAlign: "center" },
    featureIconWrap: { position: "relative", width: 100, height: 113 },
    featureTextWrap: { display: "flex", flexDirection: "column", alignItems: "center" },
    featureTitle: { fontSize: 24, fontWeight: 400, fontFamily: "'Optima', serif", marginBottom: 12, lineHeight: "normal", textAlign: "center" },
    featureDesc: { fontSize: 16, color: "#595959", fontFamily: "inherit", lineHeight: "24px", margin: 0, textAlign: "center", letterSpacing: "0.02em" },
    // GALLERY
    gallerySection: { padding: "60px 0", backgroundColor: "#fff", overflow: "hidden" },
    galleryWrap: { position: "relative", display: "flex", alignItems: "center", justifyContent: "center", height: 440, width: "100%", margin: "0 auto" },
    galleryNav: { display: "flex", gap: 10, marginTop: 16, justifyContent: "center", padding: "16px 0" },
    // BLOG
    blogSection: { padding: "60px 40px" },
    blogGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 30 },
    blogCard: { cursor: "pointer", overflow: "hidden", position: "relative", height: 480 },
    blogImg: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    blogInfo: { position: "absolute", bottom: 15, left: 15, right: 15, padding: "24px 20px" },
    blogTag: { fontSize: 9, letterSpacing: 2, textTransform: "uppercase", fontFamily: "Arial, sans-serif", marginBottom: 12 },
    blogTitle: { fontSize: 16, fontFamily: "Georgia, serif", lineHeight: 1.5, margin: 0 },
    // BIG TEXT SECTION
    bigTextSection: { position: "relative", height: 500, display: "flex", flexDirection: "column", justifyContent: "center", paddingBottom: 0, backgroundColor: "#fff", overflow: "hidden" },
    bigTextBg: { position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "bottom center", filter: "brightness(1.1)" },
    topFade: { position: "absolute", top: 0, left: 0, right: 0, height: 250, background: "linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0) 100%)", zIndex: 4 },
    bottomFade: { position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top, rgba(43,22,2,0.8) 0%, transparent 100%)", zIndex: 4 },
    bigText: { position: "absolute", top: 0, left: 0, right: 0, transform: "translateY(-25%)", zIndex: 3, textAlign: "center", fontSize: "10.2vw", fontWeight: 400, color: "#fff", fontFamily: "'Optima', sans-serif", letterSpacing: "0.15em", lineHeight: 1, userSelect: "none", textTransform: "uppercase", whiteSpace: "nowrap" },
    // FOOTER
    footer: { backgroundColor: "#2B1602", backgroundImage: "url('./footer-bg.png')", backgroundSize: "cover", backgroundPosition: "center", color: "#fff", padding: "80px 80px 40px", fontFamily: "'Optima', sans-serif" },
    footerTop: { display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr", gap: 60, marginBottom: 80 },
    footerLogo: { display: "flex", flexDirection: "column", marginBottom: 30, cursor: "pointer", position: "relative" },
    footerLogoFlying: { fontSize: 16, letterSpacing: 10, color: "#fff", textTransform: "uppercase", fontFamily: "'Optima', sans-serif", display: "flex", alignItems: "center", gap: 8 },
    footerLogoSafari: { fontSize: 56, fontWeight: 400, color: "#fff", fontFamily: "'Optima', sans-serif", letterSpacing: 2, lineHeight: 1, marginTop: 4 },
    footerSocial: { display: "flex", gap: 16, marginTop: 30 },
    socialBtn: { width: 30, height: 30, borderRadius: 6, border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" },
    footerColTitle: { fontSize: 20, color: "#D9A551", fontFamily: "'Optima', sans-serif", marginBottom: 24, fontWeight: 400 },
    footerLink: { display: "block", color: "#fff", textDecoration: "none", fontSize: 14, fontFamily: "'Optima', sans-serif", marginBottom: 16, cursor: "pointer", letterSpacing: 0.5 },
    footerContactItem: { fontSize: 14, color: "#fff", fontFamily: "'Optima', sans-serif", marginBottom: 16, lineHeight: 1.5, letterSpacing: 0.5 },
    footerBottom: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 },
    footerCopy: { fontSize: 13, color: "#fff", fontFamily: "'Optima', sans-serif" },
    footerBottomCenter: { fontSize: 13, color: "#fff", fontFamily: "'Optima', sans-serif", textAlign: "center", flex: 1 },
    footerBottomLinks: { display: "flex", gap: 30 },
    footerBottomLink: { fontSize: 13, color: "#fff", fontFamily: "'Optima', sans-serif", textDecoration: "none", cursor: "pointer" },
    // Mobile styles
    hamburger: { display: "none", flexDirection: "column", gap: 5, cursor: "pointer", padding: 8 },
    hamburgerLine: { width: 24, height: 2, backgroundColor: scrolled ? "#333" : "#fff", borderRadius: 2, transition: "background-color 0.3s ease" },
    mobileMenu: { position: "fixed", top: 70, left: 0, right: 0, zIndex: 999, backgroundColor: "#1A0A02", padding: "20px 30px", display: "flex", flexDirection: "column", gap: 4, boxShadow: "0 8px 20px rgba(0,0,0,0.4)" },
    mobileLink: { color: "#fff", textDecoration: "none", fontSize: 15, padding: "10px 0", borderBottom: "1px solid rgba(200,169,110,0.15)", fontFamily: "Arial, sans-serif" },
  };

  // Inject global + responsive CSS
  const cssString = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Playfair+Display:wght@400;700&family=Dancing+Script:wght@400;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow-x: hidden; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @media (hover: hover) {
      .nav-link:hover { opacity: 0.7 !important; }
      .dest-card img:hover { transform: scale(1.05); }
      .itin-card:hover { transform: translateY(-4px); }
      .itin-card:hover img { transform: scale(1.03); }
      .feature-card:hover img { transform: scale(1.08); filter: brightness(0.5); }
      .feature-card:hover .feature-card-desc { max-height: 100px; opacity: 1; margin-top: 10px; }
      .feature-card:hover .feature-card-overlay { background: rgba(0,0,0,0.6) !important; padding-top: 80px !important; }
      .view-btn:hover { background-color: #546A4D !important; color: #fff !important; }
      .explore-btn:hover { background-color: #1b2610 !important; }
      .blog-card:hover .blog-card-info { background: #4D5645; }
      .blog-card:hover .blog-card-title { color: #fff; }
      .blog-card:hover .blog-card-tag { color: #ddd; }
      .blog-card:hover img { transform: scale(1.05); }
      .promo-btn:hover { background: #3a6b1e !important; }
      .subscribe-btn:hover { background-color: #353d2d !important; }
    }
    .blog-card-info { background: #FAF7F2; transition: all 0.3s; }
    .blog-card-title { color: #333; transition: color 0.3s; }
    .blog-card-tag { color: #888; transition: color 0.3s; }
    .blog-img { transition: transform 0.4s; }
    .subscribe-input::placeholder { color: #fff; opacity: 1; font-family: 'Georgia', serif; font-weight: 600; letter-spacing: 0.5px; }
    .subscribe-input { caret-color: #fff; }
    
    /* Touch Feedback */
    .nav-link:active, .tab:active, .search-btn:active, .explore-btn:active, .view-btn:active, .promo-btn:active, .social-btn:active {
      transform: scale(0.96);
      opacity: 0.8;
    }
    .dest-card:active, .itin-card:active, .blog-card:active {
      transform: scale(0.98);
    }
    * { -webkit-tap-highlight-color: transparent; }

    /* Hide scrollbar for tabs */
    .tabs-row::-webkit-scrollbar { display: none; }
    .tabs-row { -ms-overflow-style: none; scrollbar-width: none; }
    
    @media (max-width: 768px) {
      .tab-label { display: none !important; }
      .tab { justify-content: center !important; padding: 12px !important; flex: 1 !important; }
    }
    
    .safari-gallery {
      text-align: center;
      margin: 40px auto;
      max-width: 1200px;
      padding: 0 15px;
    }

    .safari-gallery h2 {
      font-size: 1.6rem;
      margin-bottom: 20px;
      color: #333;
    }

    .gallery-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 1200px;
      height: 460px;
      gap: 0;
      overflow: hidden;
      padding: 0 20px;
      position: relative;
      margin: 0 auto;
    }

    .gallery-wrap img {
      position: relative;
      object-fit: cover;
      flex-shrink: 0;
      margin: 0 -3%;
      box-shadow: 0 14px 42px rgba(0,0,0,0.25);
      transition: all 0.4s ease-in-out;
      border-radius: 18px;
    }

    @media (hover: hover) {
      .gallery-wrap img:hover {
        transform: translateY(-6px);
      }
    }

    @media (max-width: 768px) {
      .gallery-wrap {
        gap: 8px !important;
      }

      .gallery-wrap img {
        margin: 0 !important;
      }
    }

    @media (max-width: 900px) {
      .nav-links { display: none !important; }
      .hamburger { display: flex !important; }
      .nav { padding: 10px 20px !important; height: 80px !important; }
      
      .hero { min-height: 100vh !important; padding-top: 80px; padding-bottom: 40px; display: flex; flex-direction: column; justify-content: flex-start; }
      .heroContent { padding: 0 20px !important; margin-top: 100px !important; text-align: left !important; }
      .hero-h1 { font-size: 28px !important; line-height: 1.5 !important; text-align: center !important; }
      
      .nav-links { display: none !important; }
      
      .booking-widget { position: relative !important; left: 0 !important; right: 0 !important; margin: 40px 16px !important; bottom: auto !important; border-radius: 12px !important; overflow: hidden !important; box-shadow: 0 10px 40px rgba(0,0,0,0.3) !important; z-index: 100 !important; }
      .tabs-row { display: flex !important; background-color: #EFEFEF !important; }
      .tab { flex: 0 0 auto !important; padding: 14px 20px !important; font-size: 13px !important; min-height: 48px !important; display: flex !important; align-items: center !important; }
      .booking-content { padding: 24px 20px !important; border-radius: 0 0 12px 12px !important; }
      .inputs-row { flex-direction: column !important; gap: 12px !important; margin-bottom: 20px !important; }
      .input-group { padding: 14px !important; width: 100% !important; box-sizing: border-box; flex: none !important; min-height: 52px !important; }
      .iconBtn { margin: -10px auto !important; transform: rotate(90deg) !important; width: 36px !important; height: 36px !important; }
      .bottomRow { flex-direction: column !important; gap: 20px !important; align-items: stretch !important; }
      .coupon-text { width: 100% !important; justify-content: center !important; }
      .search-btn { width: 100% !important; padding: 16px !important; min-height: 52px !important; font-size: 16px !important; }
      
      .dest-section { padding: 40px 20px 60px !important; }
      .dest-layout { flex-direction: column !important; gap: 24px !important; }
      .dest-layout > div:first-child { order: 2 !important; }
      .dest-right { order: 1 !important; padding-left: 0 !important; text-align: left !important; }
      .dest-right button { align-self: flex-start !important; margin-bottom: 10px !important; }
      .dest-grid { grid-template-columns: 1fr 1fr !important; }
      .dest-card { height: 190px !important; border-radius: 10px !important; }
      .dest-card .dest-label { font-size: 12px !important; font-weight: 700 !important; }
      
      .promo-section { padding: 60px 24px !important; display: flex !important; flex-direction: column !important; align-items: center !important; overflow: hidden !important; }
      .promo-right { height: 320px !important; max-width: 100% !important; margin-top: 30px !important; display: flex !important; justify-content: center !important; align-items: center !important; gap: 10px !important; position: relative !important; margin-bottom: 20px !important; }
      .promo-img-wrap { position: static !important; width: 30% !important; transform: none !important; margin: 0 !important; top: auto !important; left: auto !important; }
      .promo-img-wrap:nth-child(1) { transform: rotate(-10deg) !important; }
      .promo-img-wrap:nth-child(3) { transform: rotate(10deg) !important; }
      .promo-img { height: 220px !important; border-radius: 8px !important; }
      .promo-img-wrap:nth-child(2) .promo-img { height: 280px !important; transform: translateY(-10px) !important; }
      
      .itin-section { padding: 60px 24px !important; }
      .itin-header { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
      .itin-header-arrows { display: none !important; }
      .itin-cards { grid-template-columns: 1fr !important; gap: 0 !important; }
      .itin-cards > div:not(:first-child) { display: none !important; }
      .itin-mobile-nav { display: flex !important; }
      .itin-mobile-nav button {
        min-width: 44px !important;
        min-height: 44px !important;
        padding: 8px !important;
      }
      
      .feature-icon-g { transition: transform 0.3s ease; transform-origin: center; }
      .feat-item:hover .feature-icon-g { transform: scale(1.1); }
      
      @media (max-width: 1024px) {
        .seamless-content { gap: 40px !important; }
      }
      @media (max-width: 768px) {
        .features-section { padding: 60px 24px !important; }
        .seamless-content { flex-direction: column !important; align-items: center !important; gap: 50px !important; overflow-x: hidden !important; text-align: center !important; }
      }
      
      .gallery-section { padding: 60px 0 !important; }
      .gallery-section > div:first-child { padding: 0 24px !important; }
      .safari-gallery {
        padding: 0 24px !important;
      }

      .safari-gallery h2 {
        font-size: 1.4rem;
      }

      .gallery-slider-wrapper { height: 320px !important; }
      .gallery-slider-wrapper > div { width: 220px !important; height: 280px !important; }
      .gallery-slider-wrapper > div[style*="opacity: 1"] { width: 280px !important; height: 320px !important; z-index: 5 !important; }
      
      .gallery-wrap img:nth-child(1),
      .gallery-wrap img:nth-child(5) {
        opacity: 0.65 !important;
      }
      
      .gallery-nav button {
        min-width: 44px !important;
        min-height: 44px !important;
        padding: 8px !important;
      }
      
      .blog-section { padding: 40px 24px 60px !important; }
      .blog-header-arrows { display: none !important; }
      .blog-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
      .blog-grid > div:not(:first-child) { display: none !important; }
      .blog-card { height: 520px !important; border-radius: 16px !important; overflow: hidden !important; }
      .blog-card-info { border-radius: 0 0 16px 16px !important; padding: 20px 20px 24px !important; }
      .blog-mobile-nav { display: flex !important; justify-content: space-between !important; align-items: center !important; margin-top: 20px !important; }
      .blog-mobile-nav button {
        min-width: 44px !important;
        min-height: 44px !important;
        padding: 8px !important;
      }
      .blog-date-badge { background: #4A5D3F !important; border: none !important; border-radius: 12px !important; padding: 10px 14px !important; }
      .blog-date-badge .blog-date-month { font-size: 13px !important; font-weight: 700 !important; }
      .blog-date-badge .blog-date-day { font-size: 18px !important; font-weight: 700 !important; }
      
      .big-text-section { padding-bottom: 60px !important; height: auto !important; min-height: 350px !important; overflow: visible !important; }
      .big-text { font-size: clamp(38px, 12vw, 85px) !important; position: absolute !important; top: 0 !important; transform: translateY(35%) !important; left: 0 !important; right: 0 !important; margin: 0 !important; white-space: nowrap !important; line-height: 1 !important; text-align: center !important; z-index: 20 !important; letter-spacing: 0.1em !important; }
      
      .subscribe-box { flex-direction: column !important; width: 100% !important; padding: 16px !important; border-radius: 16px !important; gap: 12px !important; background: rgba(255,255,255,0.15) !important; max-width: 100% !important; margin-top: 40px !important; }
      .subscribe-input { width: 100% !important; text-align: center !important; margin-bottom: 0 !important; padding: 8px 0 !important; }
      .subscribe-btn { width: 100% !important; padding: 14px !important; border-radius: 8px !important; }
      
      .footer { padding: 50px 24px 30px !important; }
      .footer-top { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
      .footer-top > div:first-child { grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; text-align: center; }
      .footer-top > div:last-child { grid-column: 1 / -1; }
      .footer-bottom { flex-direction: column !important; text-align: center !important; gap: 16px !important; }
      .footer-link { padding: 8px 0 !important; min-height: 44px !important; display: flex !important; align-items: center !important; }
      .social-btn { width: 40px !important; height: 40px !important; min-width: 44px !important; min-height: 44px !important; }
    }
    
    @media (max-width: 600px) {
      .dest-grid { grid-template-columns: 1fr 1fr !important; }
      .itin-cards { grid-template-columns: 1fr !important; }
      .feat-item { width: 100% !important; }
      .blog-grid { grid-template-columns: 1fr !important; }
      .gallery-slider-wrapper { height: 260px !important; }
      .gallery-slider-wrapper > div { width: 160px !important; height: 200px !important; }
      .gallery-slider-wrapper > div[style*="opacity: 1"] { width: 220px !important; height: 260px !important; }
      .promo-right { height: 260px !important; gap: 5px !important; }
      .promo-img { height: 180px !important; }
      .promo-img-wrap:nth-child(2) .promo-img { height: 220px !important; }
      .tab { padding: 12px 12px !important; font-size: 11px !important; }
      .input-group { padding: 10px !important; }
      .search-btn { padding: 14px !important; min-height: 44px !important; }
    }
  `;

  const SeamlessJourneys = () => (
    <section style={styles.featuresSection} className="features-section">
      <div style={styles.seamlessContent} className="seamless-content">
        {FEATURES.map((f, i) => (
          <div key={i} style={styles.featureItem} className="feat-item">
            <div style={styles.featureIconWrap}>
              <svg width="100" height="113" viewBox="0 0 100 113" fill="none" className="feature-svg">
                <g className="feature-icon-g">
                  {f.iconPaths.map((path, idx) => (
                    <path key={idx} d={path} stroke="#D9A551" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  ))}
                </g>
                <ellipse cx="50" cy="106.5" rx="50" ry="6.5" fill="#D9A551" fillOpacity="0.2" />
              </svg>
            </div>
            <div style={styles.featureTextWrap}>
              <h3 style={{ ...styles.featureTitle, color: f.isDark ? '#48503b' : '#2c2c2c' }}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div style={styles.root}>
      <style>{cssString}</style>

      {/* NAV */}
      <nav style={styles.nav} className="nav">
        <div style={styles.logo}>
          <div style={styles.logoPlaneWrap}>
            <svg width="80" height="40" viewBox="0 0 100 50" fill="none">
              <path d="M10 10l5 3-2 5h4l3-8 4 2-5 12" fill="#fff" transform="rotate(-20 15 15)" />
              <path d="M25 15C45 5 80 15 95 35" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            </svg>
          </div>
          <span style={styles.logoFlying}>Flying</span>
          <span style={styles.logoSafari}>Safari</span>
        </div>
        <div style={styles.navLinks} className="nav-links">
          {NAV_LINKS.map(l => (
            <span key={l.label} style={styles.navLink} className="nav-link" onClick={() => scrollToSection(l.id)}>{l.label}</span>
          ))}
        </div>
        <div style={styles.hamburger} className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <div style={styles.hamburgerLine} />
          <div style={styles.hamburgerLine} />
          <div style={styles.hamburgerLine} />
        </div>
      </nav>

      {mobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {NAV_LINKS.map(l => <span key={l.label} style={styles.mobileLink} onClick={() => scrollToSection(l.id)}>{l.label}</span>)}
        </div>
      )}

      {/* HERO */}
      <section id="about-section" style={styles.hero}>
        {HERO_BGS.map((bg, i) => (
          <div key={i} style={{ ...styles.heroBg, backgroundImage: `url('${bg}')`, opacity: i === heroBgIdx ? 1 : 0 }} />
        ))}
        <div style={styles.heroOverlay} />

        <div style={styles.heroContent} className="heroContent">
          <h1 style={styles.heroH1} className="hero-h1">
            Embark on <span style={styles.cursive}>experiences</span> not just<br />
            destinations with <span style={styles.cursive}>our trips</span>
          </h1>
        </div>

        {/* BOOKING WIDGET */}
        <div style={styles.bookingWidget} className="booking-widget">
          <div style={styles.tabsRow} className="tabs-row">
            <div
              onClick={() => setActiveTab("Book Flights")}
              className="tab"
              style={{ ...styles.tab, ...(activeTab === "Book Flights" ? styles.tabActive : styles.tabInactive) }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 22.5 7.5 21 9l-3.5 3.5 8.2 1.8M3 19.2h18M4.5 15.5l2-2h9l2 2" /></svg>
              <span className="tab-label">Book Flights</span>
            </div>
            <div style={styles.tabsContainerInactive}>
              {["Find Reservation", "Check-In"].map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="tab"
                  style={{ ...styles.tab, ...(activeTab === tab ? styles.tabActive : styles.tabInactive) }}
                >
                  <span style={{ fontSize: 20 }}>
                    {tab === "Find Reservation" ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" /></svg>
                    ) : (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 5l-2 2-2-2M12 7v8M5 18h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zM9 18v2M15 18v2" /></svg>
                    )}
                  </span>
                  <span className="tab-label">{tab}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.bookingContent}>
            {activeTab === "Book Flights" && (
              <>
                <div style={styles.tripTypes} className="trip-types">
                  {["Round Trip", "One way"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTripType(type)}
                      style={{ ...styles.tripTypeBtn, ...(tripType === type ? styles.tripTypeActive : styles.tripTypeInactive) }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <div style={styles.inputsRow} className="inputs-row">
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="FROM" value={flightFrom} onChange={e => setFlightFrom(e.target.value)} />
                  </div>
                  <div style={styles.iconBtn} className="iconBtn" onClick={handleSwap}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M21 12a9 9 0 11-9-9c2.5 0 4.7.9 6.4 2.4L21 8M21 3v5h-5" /></svg>
                  </div>
                  <div style={{ ...styles.inputGroup, paddingLeft: 30 }} className="input-group">
                    <input style={styles.input} placeholder="TO" value={flightTo} onChange={e => setFlightTo(e.target.value)} />
                  </div>
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="DEPART DATE" type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} value={departDate} onChange={e => setDepartDate(e.target.value)} />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  </div>
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="RETURN DATE" type="text" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} value={returnDate} onChange={e => setReturnDate(e.target.value)} disabled={tripType === "One way"} />
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5" style={{ opacity: tripType === "One way" ? 0.3 : 1 }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  </div>
                  <div style={{ ...styles.inputGroup, cursor: "pointer" }} className="input-group" onClick={() => setPassengerCount(prev => prev < 9 ? prev + 1 : 1)}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: 10, fontWeight: "bold", color: "#333", marginBottom: 2 }}>PASSENGER</span>
                      <span style={{ fontSize: 12, color: "#888" }}>{passengerCount} Passenger{passengerCount > 1 ? 's' : ''}</span>
                    </div>
                    <span style={{ color: "#aaa", fontSize: 12 }}>▼</span>
                  </div>
                </div>
                <div style={styles.bottomRow} className="bottomRow">
                  <div style={styles.couponText} className="coupon-text">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5"><path d="M15 5l-2 2-2-2M12 7v8M5 18h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2zM9 18v2M15 18v2" /></svg>
                    <span>Have a coupon code? Enter it here</span>
                  </div>
                  <button style={styles.searchFlightBtn} className="search-btn" onClick={handleSearchFlight}>
                    Search flights
                  </button>
                </div>
              </>
            )}

            {activeTab === "Find Reservation" && (
              <>
                <div style={styles.inputsRow} className="inputs-row">
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="LAST NAME" />
                  </div>
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="RESERVATION CODE (PNR)" />
                  </div>
                </div>
                <div style={styles.bottomRow} className="bottomRow">
                  <div style={styles.couponText} className="coupon-text">Enter your details to manage your booking</div>
                  <button style={styles.searchFlightBtn} className="search-btn" onClick={() => showToast("Finding reservation...")}>
                    Find Reservation
                  </button>
                </div>
              </>
            )}

            {activeTab === "Check-In" && (
              <>
                <div style={styles.inputsRow} className="inputs-row">
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="LAST NAME" />
                  </div>
                  <div style={styles.inputGroup} className="input-group">
                    <input style={styles.input} placeholder="TICKET NUMBER OR PNR" />
                  </div>
                </div>
                <div style={styles.bottomRow} className="bottomRow">
                  <div style={styles.couponText} className="coupon-text">Online check-in opens 48 hours before departure</div>
                  <button style={styles.searchFlightBtn} className="search-btn" onClick={() => showToast("Starting Check-In...")}>
                    Check-In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations-section" style={styles.destSection} className="dest-section">
        <div style={styles.destLayout} className="dest-layout">
          <div style={styles.destGrid} className="dest-grid">
            {DESTINATIONS.map((d, i) => (
              <div key={i} style={styles.destCard} className="dest-card" onClick={() => showToast(`Exploring ${d.name.replace('\n', ' ')}`)}>
                {d.featured && <div style={{ position: "absolute", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.5)", color: "#eee", fontSize: 10, padding: "6px 14px", borderBottomRightRadius: 12, zIndex: 2 }}>Featured</div>}
                <img src={d.img} alt={d.name} style={styles.destImg} />
                <div style={styles.destLabel}>
                  {d.name.split('\n').map((line, idx) => <div key={idx}>{line}</div>)}
                </div>
              </div>
            ))}
          </div>
          <div style={styles.destRight} className="dest-right">
            <p style={styles.sectionLabel}>POPULAR DESTINATION</p>
            <h2 style={styles.sectionH2}>East Africa Iconic<br />Safari Destinations</h2>
            <button style={styles.exploreBtn} className="explore-btn" onClick={() => scrollToSection("itineraries-section")}>Explore Destinations</button>
          </div>
        </div>
      </section>


      {/* FLYING SAFARI PROMO */}
      <section style={{ ...styles.promoSection, backgroundImage: "url('./image-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }} className="promo-section">
        <p style={{ color: "#c5a367", fontSize: 20, lineHeight: 1.6, fontFamily: "Georgia, serif", margin: "0 auto 10px", maxWidth: 700 }}>
          In Tanzania, the rhythm of the wild is untouched by time. From the roar of lions to the whispers of the savannah winds, the land invites you to wander beyond the ordinary and embrace.
        </p>
        <h2 style={{ fontFamily: "'Dancing Script', cursive", fontSize: 64, color: "#3a4130", marginBottom: 30, fontWeight: 700 }}>Flying Safari</h2>
        <div style={styles.promoRight} className="promo-right">
          {[
            { top: 40, left: "18%", rotate: -8, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80", w: "320px", h: 400, z: 1 },
            { top: 0, left: "50%", rotate: 0, img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80", w: "350px", h: 440, z: 3, isCenter: true },
            { top: 40, left: "82%", rotate: 8, img: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=400&q=80", w: "320px", h: 400, z: 2 },
          ].map((p, i) => (
            <div key={i} className="promo-img-wrap" style={{ position: "absolute", backgroundColor: "#fff", top: p.top, left: p.left, transform: `translateX(-50%) rotate(${p.rotate}deg)`, width: p.w, zIndex: p.z, borderRadius: 4, overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.2)" }}>
              <img src={p.img} alt="" className="promo-img" style={{ width: "100%", height: p.h, objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, position: "relative", zIndex: 10 }}>
          <button style={{ ...styles.exploreBtn, backgroundColor: "#4D5645", borderRadius: 2, padding: "12px 36px" }} onClick={() => scrollToSection("about-section")}>About us</button>
        </div>
      </section>

      {/* ITINERARIES */}
      <section id="itineraries-section" style={styles.itinSection} className="itin-section">
        <div style={styles.itinHeader}>
          <div>
            <p style={{ ...styles.sectionLabel, color: "#997A42" }}>POPULAR ITINERARIES</p>
            <h2 style={{ fontSize: "clamp(32px,4vw,48px)", color: "#fff", lineHeight: 1.2, margin: "12px 0 0", fontFamily: "Georgia, serif", fontWeight: 400 }}>Safari Itineraries<br />Curated just for you</h2>
          </div>
          <div className="itin-header-arrows">
            <div style={styles.itinBtns}>
              <button style={styles.arrowBtn} onClick={() => scrollItin(-1)}>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M60 12H2M2 12L12 2M2 12L12 22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button style={styles.arrowBtn} onClick={() => scrollItin(1)}>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div style={styles.itinCards} className="itin-cards">
          {ITINERARIES.slice(itinIdx, itinIdx + 3).map((it, i) => (
            <div
              key={i}
              style={styles.itinCard}
              className="itin-card"
              onMouseEnter={() => { if (window.matchMedia("(hover: hover)").matches) setHoveredItin(i); }}
              onMouseLeave={() => setHoveredItin(null)}
              onClick={() => showToast(`Booking inquiry for: ${it.title}`)}
            >
              <div style={{ position: "relative" }}>
                <img src={hoveredItin === i ? it.images[itinImgIdx] : it.images[0]} alt={it.title} style={{ ...styles.itinImg, transition: "all 0.3s ease" }} />
                <div style={{ position: "absolute", top: 12, left: 12, backgroundColor: "#fff", color: "#333", fontSize: 11, padding: "6px 10px", borderRadius: 2, fontFamily: "Georgia, serif" }}>{it.tag}</div>
                <div style={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 4 }}>
                  {[0, 1, 2, 3].map(dot => (
                    <div key={dot} style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: (hoveredItin === i ? itinImgIdx === dot : dot === 0) ? "#fff" : "rgba(255,255,255,0.4)", transition: "background-color 0.3s ease" }} />
                  ))}
                </div>
              </div>
              <div style={styles.itinInfo}>
                <div style={styles.itinMeta}>{it.meta}</div>
                <div style={styles.itinTitle}>{it.title}</div>
                <div style={styles.itinIcons}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="8" rx="2" ry="2" /><path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8l-4-16-4 16Z" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C7 2 5 6 5 10c0 4 3 6 4 9h6c1-3 4-5 4-9 0-4-2-8-7-8Z" /><path d="M10 22h4" /><path d="M10 19h4" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M10 22l1-6l4-2l-1-7" /><path d="M16 12l-2-2" /><path d="M8 12l2-2" /></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><path d="M6 2v2" /><path d="M10 2v2" /><path d="M14 2v2" /></svg>
                </div>
                <button style={styles.viewItinBtn} className="view-btn">VIEW ITINERARY</button>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile-only arrow nav below the card */}
        <div className="itin-mobile-nav" style={{ display: "none", justifyContent: "space-between", alignItems: "center", marginTop: 32, padding: "0 8px" }}>
          <button style={{ ...styles.arrowBtn, opacity: 0.6 }} onClick={() => scrollItin(-1)}>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 12H2M2 12L12 2M2 12L12 22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "Arial, sans-serif" }}>{itinIdx + 1} / {ITINERARIES.length}</span>
          <button style={styles.arrowBtn} onClick={() => scrollItin(1)}>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      <SeamlessJourneys />

      {/* GALLERY */}
      <section id="gallery-section" style={{ ...styles.gallerySection, position: 'relative', overflow: 'hidden', padding: '150px 0', backgroundColor: '#fff' }} className="gallery-section safari-gallery">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ ...styles.sectionLabel, color: "#D9A551", letterSpacing: 4, fontSize: 14 }}>GALLERY</p>
          <h2 style={{ ...styles.sectionH2, margin: "8px auto 0", fontSize: 36, color: '#2C2C2C', maxWidth: 600 }}>A selection of Images of Our Beautiful Safari Experiences</h2>
        </div>

        <div style={{ position: 'relative', height: 550, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="gallery-slider-wrapper">
          {GALLERY_IMGS.map((img, index) => {
            let position = "side";
            if (index === galleryIdx) position = "center";

            // Calculate scale and opacity based on position
            const isCenter = index === galleryIdx;

            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  left: '50%',
                  width: isCenter ? 420 : 350,
                  height: isCenter ? 520 : 450,
                  transition: 'all 0.5s ease-in-out',
                  zIndex: isCenter ? 10 : 1,
                  opacity: isCenter ? 1 : 0.6,
                  transform: `translateX(calc(-50% + ${(index - galleryIdx) * 105}%))`,
                  filter: isCenter ? 'none' : 'grayscale(20%)',
                  boxShadow: isCenter ? '0 20px 40px rgba(0,0,0,0.15)' : 'none',
                  borderRadius: 0,
                  overflow: 'hidden'
                }}
              >
                <img src={img} alt="Safari" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 40 }}>
          <button onClick={() => scrollGallery(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5, transition: 'opacity 0.3s' }} className="nav-arrow" aria-label="Previous image">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M60 10H2M2 10L10 2M2 10L10 18" stroke="#333" strokeWidth="1" />
            </svg>
          </button>
          <button onClick={() => scrollGallery(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', opacity: 0.5, transition: 'opacity 0.3s' }} className="nav-arrow" aria-label="Next image">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M0 10H58M58 10L50 2M58 10L50 18" stroke="#333" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </section>


      {/* BLOG */}
      <section id="blog-section" style={styles.blogSection} className="blog-section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 30 }}>
          <div>
            <p style={{ ...styles.sectionLabel, color: "#C8A96E" }}>BLOGS & JOURNALS</p>
            <h2 style={{ ...styles.sectionH2, margin: "8px 0 0" }}>Safari Stories &<br />Travel Insights</h2>
          </div>
          <div style={styles.galleryNav} className="blog-header-arrows">
            <button style={{ ...styles.arrowBtn }} onClick={() => scrollBlog(-1)}>
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 12H2M2 12L12 2M2 12L12 22" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button style={{ ...styles.arrowBtn }} onClick={() => scrollBlog(1)}>
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div style={styles.blogGrid} className="blog-grid">
          {BLOG_POSTS.slice(blogIdx, blogIdx + 3).map((b, i) => (
            <div key={i} onClick={() => showToast(`Reading: ${b.title}`)} style={styles.blogCard} className="blog-card">
              <img src={b.img} alt={b.title} style={styles.blogImg} className="blog-img" />
              <div className="blog-date-badge" style={{ position: "absolute", top: 16, left: 16, border: "1px solid rgba(255,255,255,0.6)", padding: "6px 10px", borderRadius: 4, textAlign: "center", backdropFilter: "blur(2px)" }}>
                <div className="blog-date-month" style={{ fontSize: 11, color: "#fff", letterSpacing: 1, fontFamily: "Arial, sans-serif" }}>{b.date.month}</div>
                <div className="blog-date-day" style={{ fontSize: 14, color: "#fff", fontFamily: "Georgia, serif", marginTop: 2 }}>{b.date.day}</div>
              </div>
              <div style={styles.blogInfo} className="blog-card-info">
                <div style={styles.blogTag} className="blog-card-tag">{b.tag}</div>
                <h3 style={styles.blogTitle} className="blog-card-title">{b.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile-only arrow nav below blog card */}
        <div className="blog-mobile-nav" style={{ display: "none", justifyContent: "space-between", alignItems: "center", marginTop: 32, padding: "0 8px" }}>
          <button style={{ ...styles.arrowBtn, color: "#aaa" }} onClick={() => scrollBlog(-1)}>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 12H2M2 12L12 2M2 12L12 22" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span style={{ color: "#888", fontSize: 13, fontFamily: "Arial, sans-serif" }}>{blogIdx + 1} / {BLOG_POSTS.length}</span>
          <button style={styles.arrowBtn} onClick={() => scrollBlog(1)}>
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>


      {/* BIG TEXT SECTION */}
      <section style={styles.bigTextSection} className="big-text-section">
        <div style={styles.bigTextBg} />
        <div style={styles.topFade} />
        <div style={styles.bigText} className="big-text">FLYING SAFARI</div>

        <div style={{ position: "relative", zIndex: 5, textAlign: "center", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", marginTop: 140 }}>
          <p style={{ color: "#fff", fontFamily: "'Optima', sans-serif", fontSize: 16, marginBottom: 16, letterSpacing: 1 }}>Subscribe for latest update & offers</p>
          <div style={{ display: "flex", alignItems: "center", background: "rgba(255, 255, 255, 0.2)", border: "1px solid rgba(255, 255, 255, 0.4)", backdropFilter: "blur(8px)", borderRadius: 50, padding: "4px", width: "90%", maxWidth: 500, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
            <input type="text" placeholder="Your Email Address" style={{ color: "#fff", flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 14, fontFamily: "Georgia, serif", fontWeight: "bold", paddingLeft: 24 }} className="subscribe-input" />
            <button style={{ backgroundColor: "#4D5645", color: "#fff", padding: "12px 36px", borderRadius: 50, border: "none", fontFamily: "Georgia, serif", cursor: "pointer", fontWeight: 600, fontSize: 14 }} className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer-section" style={styles.footer} className="footer">
        <div style={styles.footerTop} className="footer-top">
          <div>
            <div style={styles.footerLogo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div style={styles.footerLogoFlying}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.6 7.5 4.6-3.8 3.8-3.4-.9c-.4-.1-.8.2-1 .6L1 19.5l5.5 1 1 5.5.5-1c.4-.2.7-.6.6-1l-.9-3.4 3.8-3.8 4.6 7.5 3.6-1.2c.5-.2.8-.6.7-1.1Z"/></svg>
                FLYING
              </div>
              <span style={styles.footerLogoSafari}>SAFARI</span>
            </div>
            <div style={styles.footerSocial}>
              {[
                { name: "Instagram", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
                { name: "Facebook", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
                { name: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { name: "X", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"></path></svg> }
              ].map((s, i) => (
                <div key={i} style={styles.socialBtn} onClick={() => showToast(`Opening ${s.name} profile`)}>
                  {s.icon}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={styles.footerColTitle}>Destination</div>
            {["Arusha", "Serengeti", "Kilimanjaro", "Ngorongoro Crater", "Lake Manyara", "Tarangire", "Mahale Mountains"].map(l => (
              <span key={l} style={styles.footerLink} onClick={() => scrollToSection("destinations-section")}>{l}</span>
            ))}
          </div>
          <div>
            <div style={styles.footerColTitle}>Resources</div>
            {["About Us", "Itineraries", "Destination", "Gallery", "Blogs", "Contact Us"].map((l, i) => {
              const ids = ["about-section", "itineraries-section", "destinations-section", "gallery-section", "blog-section", "footer-section"];
              return <span key={l} style={styles.footerLink} onClick={() => scrollToSection(ids[i])}>{l}</span>
            })}
          </div>
          <div>
            <div style={styles.footerColTitle}>Contact us</div>
            <p style={styles.footerContactItem}>+255 58954 58945</p>
            <p style={styles.footerContactItem}>info@flyingsafari.ae</p>
            <p style={styles.footerContactItem}>contact@flyingsafari.ae</p>
          </div>
        </div>
        <div style={styles.footerBottom} className="footer-bottom">
          <span style={styles.footerCopy}>@ 2025 Flying Safari Limited. All rights reserved.</span>
          <div style={styles.footerBottomCenter}>
            Designed & Developed by <span style={{ color: "#D9A551" }}>DotSyndicate</span>
          </div>
          <div style={styles.footerBottomLinks}>
            <span style={styles.footerBottomLink}>Privacy Policy</span>
            <span style={styles.footerBottomLink}>Terms & Conditions</span>
          </div>
        </div>
      </footer>

      {toast && (
        <div style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          backgroundColor: '#4D5645',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 9999,
          fontFamily: 'Arial, sans-serif',
          fontSize: 14,
          animation: 'fadeIn 0.3s ease-out'
        }}>
          {toast}
        </div>
      )}
    </div>
  );
}
