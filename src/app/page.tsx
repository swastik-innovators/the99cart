"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Sparkles, ShieldCheck, Download, Users, 
  Search, Store, Globe, Award, Compass, Play, 
  ChevronDown, Activity, ChevronRight, Mail, 
  Monitor, BarChart3, User, Loader2, Star, Check, CheckCircle2,
  TrendingUp, Laptop, ShoppingBag, Sparkle, Layers, Eye, Smartphone, Lock, Code,
  Zap, Clock, X, Target, DollarSign, Rocket, Camera, Send, Briefcase, Terminal
} from "lucide-react";
import SplashCursor from "./components/SplashCursor";
import Aurora from "./components/Aurora";


export default function ComingSoonLanding() {
  // Theme state: default to premium dark mode as per luxury commerce guidelines
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Subdomain Claim Tool state
  const [claimedSubdomain, setClaimedSubdomain] = useState("");
  const [isSubdomainTaken, setIsSubdomainTaken] = useState(false);
  const [activeFormTab, setActiveFormTab] = useState<"waitlist" | "seller">("waitlist");

  // Early access form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    sellerType: "Individual Seller",
    productsCategory: "",
    phoneNumber: "",
    founderBenefits: true,
    notifyLaunch: true,
    businessType: "SaaS & Source Code",
    role: "Seller",
    subdomain: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [rank, setRank] = useState(5104);

  const [errorMessage, setErrorMessage] = useState("");

  // FAQ interactive state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Video preview modal state
  const [showVideo, setShowVideo] = useState(false);

  // Sync state with HTML document element classes and persist in local storage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode, mounted]);

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "");
    setClaimedSubdomain(value);
    setFormData(prev => ({ ...prev, subdomain: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const isValid = activeFormTab === "waitlist" ? !!formData.email : (!!formData.name && !!formData.email);
    if (!isValid) {
      setErrorMessage(activeFormTab === "waitlist" ? "Email is required." : "Name and Email are required.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: activeFormTab,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccess(true);
        setRank(prev => prev + 1);
      } else {
        setErrorMessage(data.message || "Failed to complete your request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error: Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Prevent flash during hydration
  if (!mounted) {
    return <div className="min-h-screen bg-[#0B0B14] w-full" />;
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-transparent text-slate-700 dark:text-slate-100 relative font-sans overflow-x-hidden transition-colors duration-300">
      
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />

      {/* 🔮 Background Geometric Grid & Vibrant Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6D47FF08_1px,transparent_1px),linear-gradient(to_bottom,#6D47FF08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none -z-10"></div>
      
      {/* Vibrant Ambient Orbs (Pop Colors in Dark Mode) */}
      <div className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 dark:bg-primary/20 blur-[130px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 dark:bg-secondary/20 blur-[130px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-primary/8 dark:bg-primary/15 blur-[150px] pointer-events-none -z-10"></div>

      {/* ── SECTION 1: STICKY BLUR NAVBAR ────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
        {/* 🌫️ State-of-the-art Progressive Gradual Blur Background Layer */}
        <div className="absolute inset-0 -z-10 h-[150%] pointer-events-none select-none overflow-hidden">
          {/* Layer 1: Base color gradient with subtle roll-off */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/50 to-transparent dark:from-[#0B0B14]/95 dark:via-[#0B0B14]/50 dark:to-transparent" />
          
          {/* Layer 2: Strong blur (16px) near the top */}
          <div 
            className="absolute inset-0" 
            style={{
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
              maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)'
            }} 
          />
          
          {/* Layer 3: Medium blur (8px) rolling off halfway */}
          <div 
            className="absolute inset-0" 
            style={{
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 85%)',
              maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 85%)'
            }} 
          />
          
          {/* Layer 4: Fine blur (4px) spanning the longest transition */}
          <div 
            className="absolute inset-0" 
            style={{
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0) 100%)'
            }} 
          />

          {/* Premium subtle divider edge at the bottom of the blur bounding box */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slate-100/10 dark:bg-primary/5" />
        </div>

        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          
          {/* Logo block */}
          <div className="flex items-center gap-2.5">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/the99cart-logo-black.svg" 
                alt="the99cart Logo" 
                className="h-8 w-auto dark:hidden select-none" 
              />
              <img 
                src="/the99cart-logo-white.svg" 
                alt="the99cart Logo" 
                className="h-8 w-auto hidden dark:block select-none" 
              />
            </a>
            <span className="px-2.5 py-0.5 rounded-full bg-primary/10 dark:bg-primary/20 text-slate-800 dark:text-white/80 text-[10px] font-medium tracking-wide w-fit">
              Coming soon
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-200">
            <button onClick={() => scrollToSection("features")} className="hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer">Ecosystem</button>
            <button onClick={() => scrollToSection("bento")} className="hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer">Features</button>
            <button onClick={() => scrollToSection("showroom")} className="hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer">Showroom</button>
            <button onClick={() => scrollToSection("faq")} className="hover:text-primary dark:hover:text-secondary transition-colors cursor-pointer">FAQ</button>
          </nav>

          {/* Action cluster */}
          <div className="flex items-center gap-3.5">
            {/* Theme switcher (currently hidden)
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-[#101828]/80 hover:bg-slate-100 dark:hover:bg-[#101828] text-slate-800 dark:text-slate-100 transition-all cursor-pointer flex items-center justify-center shadow-sm"
              aria-label="Toggle Theme"
            >
              {darkMode ? (
                <Sparkle className="w-4 h-4 text-secondary" />
              ) : (
                <Sparkle className="w-4 h-4 text-primary" />
              )}
            </button>
            */}

            <button 
              onClick={() => {
                setActiveFormTab("waitlist");
                scrollToSection("early-access");
              }}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-[0_4px_15px_rgba(109,71,255,0.25)] text-white text-sm font-medium transition-all transform active:scale-95 cursor-pointer"
            >
              Join Waitlist
            </button>

            <button 
              onClick={() => {
                setActiveFormTab("seller");
                scrollToSection("early-access");
              }}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 text-slate-700 dark:text-slate-200 text-sm font-medium transition-all cursor-pointer"
            >
              Become a seller
            </button>
          </div>

        </div>
      </header>

      <main className="flex-grow w-full">

      {/* ── SECTION 2: HERO SECTION ───────────────────────────────────────────── */}
      <section className="w-full min-h-screen flex flex-col justify-center items-center pt-28 pb-20 bg-white dark:bg-[#0B0B14] relative overflow-hidden text-center border-b border-slate-100 dark:border-primary/10">
        {/* 🌌 Animated Aurora theme light behind hero */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60 mix-blend-screen">
          <Aurora
            colorStops={["#6D47FF","#B35BFF","#DD00FF"]}
            amplitude={1}
            blend={0.5}
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/25 text-slate-800 dark:text-white/80 font-semibold text-xs tracking-normal shadow-sm mx-auto mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-primary dark:bg-secondary animate-ping"></span>
            <Clock className="w-3.5 h-3.5 text-primary dark:text-secondary animate-pulse" />
            <span>Coming soon • Launching Summer 2026</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] font-display font-bold text-slate-800 dark:text-white tracking-tight leading-[1.05] max-w-6xl mx-auto mb-8">
            The smart way to sell & buy <br />
            <span className="bg-gradient-to-r from-primary via-[#B35BFF] to-secondary bg-clip-text text-transparent">digital products & templates</span>
          </h1>

          {/* Simple Benefit-Driven Subtitle */}
          <p className="text-lg sm:text-xl md:text-[1.35rem] text-slate-600 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            <span className="text-primary dark:text-secondary font-semibold">We are coming soon!</span> The99Cart connects software developers, Figma designers, and writers directly with shoppers. Reserve your custom subdomain now and prepare to keep 85% of your sales.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10 max-w-xl mx-auto mb-16">
            <button 
              onClick={() => {
                setActiveFormTab("waitlist");
                scrollToSection("early-access");
              }}
              className="w-full sm:w-auto px-10 py-4.5 rounded-xl bg-gradient-to-r from-primary via-[#B35BFF] to-secondary text-white text-base font-bold transition-all transform active:scale-95 shadow-[0_4px_25px_rgba(109,71,255,0.35)] hover:shadow-[0_4px_30px_rgba(109,71,255,0.5)] cursor-pointer"
            >
              Join Waitlist
            </button>
            <button 
              onClick={() => {
                setActiveFormTab("seller");
                scrollToSection("early-access");
              }}
              className="w-full sm:w-auto px-10 py-4.5 rounded-xl border border-primary/25 bg-gradient-to-r from-primary/10 via-[#B35BFF]/10 to-secondary/10 hover:from-primary/20 hover:via-[#B35BFF]/15 hover:to-secondary/20 text-slate-700 dark:text-slate-100 text-base font-bold transition-all cursor-pointer shadow-sm hover:shadow-[0_4px_25px_rgba(109,71,255,0.15)]"
            >
              Become a seller
            </button>
          </div>

          {/* Trust Indicators / Supported Formats */}
          <div className="mt-16 relative z-10 opacity-80 max-w-4xl mx-auto">
            <p className="text-[11px] font-bold text-slate-400 dark:text-slate-400 uppercase tracking-widest mb-5">
              Empowering developers, designers, and creators worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 text-sm font-semibold text-slate-500 dark:text-slate-300">
              <span className="flex items-center gap-2 hover:text-primary transition-colors cursor-default"><Code className="w-5 h-5 text-primary shrink-0" /> SaaS Boilerplates</span>
              <span className="flex items-center gap-2 hover:text-[#0ACF83] transition-colors cursor-default"><Sparkles className="w-5 h-5 text-[#0ACF83] shrink-0" /> Figma UI Kits</span>
              <span className="flex items-center gap-2 hover:text-[#FF4F00] transition-colors cursor-default"><Layers className="w-5 h-5 text-[#FF4F00] shrink-0" /> Web Templates</span>
              <span className="flex items-center gap-2 hover:text-secondary transition-colors cursor-default"><Award className="w-5 h-5 text-secondary shrink-0" /> Premium Assets</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: CORE VALUE ECOSYSTEM (GRID CARDS) ────────────────────── */}
      <section id="features" className="w-full py-24 bg-[#FAFAFB] dark:bg-[#0E0E18] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            Ecosystem core
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            How The99Cart works for everyone
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            One powerful, unified platform that rewards digital builders, creators, and shoppers fairly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "For Shoppers",
              icon: ShoppingBag,
              desc: "Get instant access to ready-to-use digital templates, Figma design kits, and software files. Every template is fully verified for security and high quality.",
              tag: "Instant delivery",
              highlightColor: "from-primary to-[#8262FF]"
            },
            {
              title: "For Sellers & Developers",
              icon: Store,
              desc: "Launch your custom subdomain shop in seconds. Upload your files, set your own pricing, and keep 85% of your money with our flat 15% platform cut.",
              tag: "Keep 85% revenue",
              highlightColor: "from-[#8262FF] to-secondary"
            },
            {
              title: "For Creators & Curators",
              icon: Users,
              desc: "Browse our showroom, select premium developer tools or templates, and share them with your audience. Earn up to 25% automated commission on every checkout.",
              tag: "Automated commissions",
              highlightColor: "from-secondary to-primary"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-[#101828]/45 border border-slate-100 dark:border-primary/20 rounded-3xl p-8 space-y-6 relative overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-[0_4px_30px_rgba(109,71,255,0.12)] transition-all duration-300 group"
            >
              {/* Highlight Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary"></div>

              <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-[#101828] border border-slate-200/50 dark:border-primary/20 flex items-center justify-center text-primary dark:text-secondary shadow-sm">
                <item.icon className="w-6 h-6" />
              </div>

              <span className="inline-block text-xs font-semibold text-slate-800 dark:text-white/80 px-3 py-1 bg-slate-50 dark:bg-[#101828]/80 border border-slate-100 dark:border-primary/10 rounded-full">
                {item.tag}
              </span>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* ── SECTION 5: HIGH-CONTRAST BENTO GRID ────────────────────────────────── */}
      <section id="bento" className="w-full py-24 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            Bento features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            Designed for premium digital selling
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            We’ve built everything you need to sell source code, Figma templates, graphics, and e-books safely.
          </p>
        </div>

        {/* 🍱 Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6">
          
          {/* Card 1: Subdomain Setup (Double Grid Column - Span 4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#101828]/55 border border-slate-100 dark:border-primary/25 rounded-3xl p-7 sm:p-10 flex flex-col justify-between space-y-8 relative overflow-hidden shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_30px_rgba(109,71,255,0.08)] transition-all">
            <div className="space-y-3 text-left">
              <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
                Custom branding
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
                Launch your subdomain shop in 60 seconds
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed font-medium max-w-xl">
                Every merchant gets a personalized subdomain link (e.g. yourname.the99cart.com) coupled with an easy-to-use workspace to handle custom products, licenses, and releases.
              </p>
            </div>
            
            {/* Interactive Domain Mockup inside the Bento Card */}
            <div className="bg-slate-50 dark:bg-[#0B0B14] rounded-2xl border border-slate-100 dark:border-primary/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-bold">99</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white">Subdomain registry</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-300 font-semibold font-mono">
                    {claimedSubdomain ? `https://${claimedSubdomain}.the99cart.com` : "https://yourname.the99cart.com"}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                ✓ SSL Active & Pre-configured
              </span>
            </div>
          </div>

          {/* Card 2: Keep 85% Revenue (Single Column - Span 2) */}
          <div className="md:col-span-2 bg-white dark:bg-[#101828]/55 border border-slate-100 dark:border-primary/25 rounded-3xl p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_30px_rgba(109,71,255,0.08)] transition-all">
            <div className="space-y-3 text-left">
              <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-[#DD00FF]/10 border border-[#DD00FF]/20 px-3 py-1 rounded-full w-fit">
                Keep more money
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
                Keep 85% revenue
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
                No complex tiers. No high payout processing fees. Keep 85% of every single checkout transaction.
              </p>
            </div>

            {/* Comparison graph */}
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span>The99Cart Ratio</span>
                  <span className="text-primary dark:text-secondary font-bold">85.00%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#0B0B14] h-2.5 rounded-full overflow-hidden border border-slate-200/50 dark:border-primary/10">
                  <div className="w-[85%] bg-primary h-full rounded-full"></div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span>Other Marketplace</span>
                  <span>50.00%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-[#0B0B14] h-2.5 rounded-full overflow-hidden border border-slate-200/50 dark:border-primary/10">
                  <div className="w-[50%] bg-slate-400 h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Secure Delivery (Single Column - Span 2) */}
          <div className="md:col-span-2 bg-white dark:bg-[#101828]/55 border border-slate-100 dark:border-primary/25 rounded-3xl p-7 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_30px_rgba(109,71,255,0.08)] transition-all">
            <div className="space-y-3 text-left">
              <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-primary/10 border border-primary/20 px-3 py-1 rounded-full w-fit">
                Bulletproof hosting
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
                Instant delivery
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
                Our system instantly processes checkout verification and serves direct, secure download keys directly to shoppers' emails.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-[#0B0B14] border border-slate-100 dark:border-primary/10 rounded-xl flex items-center justify-between text-[11px] font-bold">
              <span className="text-slate-600 dark:text-slate-200 font-mono">SecureZIP_Core.zip</span>
              <span className="text-emerald-500 flex items-center gap-1"><Download className="w-3.5 h-3.5" /> 100% Verified</span>
            </div>
          </div>

          {/* Card 4: Global Checkout (Double Grid Column - Span 4) */}
          <div className="md:col-span-4 bg-white dark:bg-[#101828]/55 border border-slate-100 dark:border-primary/25 rounded-3xl p-7 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md dark:hover:shadow-[0_4px_30px_rgba(109,71,255,0.08)] transition-all">
            <div className="space-y-3 text-left">
              <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full w-fit">
                Financial escrow
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
                Instant global payouts & escrow checkout
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-200 leading-relaxed font-medium max-w-xl">
                Connected directly through certified Stripe gateway protocols. Automated payout transfers are cleared and safely delivered straight into your bank account within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-[#0B0B14] border border-slate-100 dark:border-primary/10 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white">Automatic payouts</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-300 font-semibold">24-hour bank transfer cycles</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-[#0B0B14] border border-slate-100 dark:border-primary/10 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary dark:text-secondary">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white">Bank-grade escrow</h4>
                  <p className="text-[10px] text-slate-400 dark:text-slate-300 font-semibold">100% Encrypted Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ── SECTION 4: WHAT IS THE99CART? ────────────────────────────────────── */}
      <section id="what-is-it" className="w-full py-24 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Visual Element */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
            
            <div className="bg-gradient-to-br from-slate-100 to-white dark:from-[#101828]/60 dark:to-[#0B0B14] border border-slate-200 dark:border-primary/25 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 opacity-5 blur-[20px] rounded-full"></div>
              
              {/* Glassmorphic transaction/shop status preview */}
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white dark:bg-[#101828] border border-slate-100 dark:border-primary/10 p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary dark:text-secondary flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">Next.js Template Sold</h4>
                      <p className="text-[10px] text-slate-400 dark:text-slate-400">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-primary dark:text-secondary leading-tight">+$49.00</span>
                    <p className="text-[9px] text-emerald-500 font-bold">85% Split</p>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white dark:bg-[#101828] border border-slate-100 dark:border-primary/10 p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">Subdomain Live</h4>
                      <p className="text-[10px] text-slate-400 dark:text-slate-400">Active Node</p>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full font-bold">
                    yourname.the99cart.com
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white dark:bg-[#101828] border border-slate-100 dark:border-primary/10 p-4 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight">Creator Commission</h4>
                      <p className="text-[10px] text-slate-400 dark:text-slate-400">Affiliate sale</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-indigo-500">15% Payout</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Modern High-Impact Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit block shadow-sm">
              Introducing The99Cart
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight leading-tight">
              One platform for shopping, selling & growing
            </h2>
            
            <p className="text-base text-slate-600 dark:text-slate-200 leading-relaxed font-medium">
              The99Cart brings sellers, creators and buyers together in one ecosystem designed for faster growth. No listing overheads, just premium distribution.
            </p>

            {/* Small dynamic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { title: "Sell products", desc: "List code or design kits instantly.", icon: ShoppingBag },
                { title: "Grow business", desc: "Keep 85% of successful downloads.", icon: TrendingUp },
                { title: "Reach customers", desc: "Leverage creator-driven traffic.", icon: Users }
              ].map((c, i) => (
                <div key={i} className="bg-slate-50 dark:bg-[#101828]/35 border border-slate-100 dark:border-primary/10 rounded-2xl p-4 space-y-2 hover:border-primary/30 transition-colors flex flex-col justify-start text-left">
                  <c.icon className="w-5 h-5 text-primary dark:text-secondary mb-1" />
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{c.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-300 font-medium leading-normal">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => scrollToSection("early-access")}
                className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-primary/10 hover:shadow-primary/20 active:scale-95"
              >
                Explore more <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ── SECTION 5: WHY SELLERS LOVE THE99CART ───────────────────────────── */}
      <section id="why-sellers-love" className="w-full py-24 bg-[#FAFAFB] dark:bg-[#0E0E18] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            High Payout & Fast Launch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            Why sellers love The99Cart
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            Everything you need to launch a high-speed digital store and capture premium shoppers.
          </p>
        </div>

        {/* Large Horizontal Cards / Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Launch your store in minutes",
              desc: "Claim your premium subdomain storefront, customize visual tokens, and list your digital products without writing any shop code.",
              icon: Zap,
              col: "md:col-span-6"
            },
            {
              title: "Track sales in real-time",
              desc: "Get elegant real-time visitor logs, item conversion ratios, active shopping sessions, and revenue payout forecasts in one beautiful feed.",
              icon: BarChart3,
              col: "md:col-span-6"
            },
            {
              title: "Reach more buyers",
              desc: "Every digital template is indexed and featured in our public showroom, making SEO and developer customer discovery incredibly fast.",
              icon: Target,
              col: "md:col-span-4"
            },
            {
              title: "Sell with creators",
              desc: "Recruit affiliate curators to market your digital creations and scale sales through dynamic revenue sharing models built right in.",
              icon: DollarSign,
              col: "md:col-span-4"
            },
            {
              title: "Grow faster",
              desc: "Keep 85% of every transaction. Direct payout to Stripe, quick operational approvals, and zero listing fee surprises.",
              icon: Rocket,
              col: "md:col-span-4"
            }
          ].map((card, i) => (
            <div 
              key={i} 
              className={`${card.col} bg-white dark:bg-[#101828]/45 border border-slate-100 dark:border-primary/20 hover:border-primary/50 dark:hover:border-secondary/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md group text-left`}
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#101828] border border-slate-200/50 dark:border-primary/20 flex items-center justify-center text-primary dark:text-secondary group-hover:scale-110 transition-transform mb-3">
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-800 dark:text-white leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-300 font-medium leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection("early-access")}
            className="px-8 py-3.5 rounded-xl bg-primary text-white hover:bg-primary/90 text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-primary/10 hover:shadow-primary/20 active:scale-95"
          >
            Become a seller <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </section>

      {/* ── SECTION 6: WHY THE99CART IS DIFFERENT ─────────────────────────── */}
      <section id="why-different" className="w-full py-24 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            Comparison Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            Why The99Cart is different
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            We designed a unified marketplace that gets rid of generic marketplace overhead.
          </p>
        </div>

        {/* Modern Comparison Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Left Column: Other Platforms */}
          <div className="bg-slate-50 dark:bg-[#101828]/20 border border-slate-200/60 dark:border-primary/15 rounded-3xl p-6 sm:p-8 space-y-6">
            <h4 className="text-base font-display font-bold text-slate-500 dark:text-slate-400 flex items-center gap-2">
              Other Platforms
            </h4>
            <div className="space-y-4">
              {[
                "Complex store setups requiring heavy front-end configuration",
                "Isolated marketplace models with little to no promoter outreach",
                "High platform cuts and confusing developer listing taxes",
                "Obscured metrics and complex analytics dashboards"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white dark:bg-[#101828]/40 p-4 rounded-2xl border border-slate-100 dark:border-primary/5">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-1" />
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-300 leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The99Cart */}
          <div className="bg-primary/5 border border-primary/20 dark:border-secondary/20 rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[20px] rounded-full"></div>
            
            <h4 className="text-base font-display font-bold text-primary dark:text-secondary flex items-center gap-2">
              The99Cart
            </h4>
            <div className="space-y-4 relative z-10">
              {[
                "Instant subdomain setup and live pre-validated checkout widgets",
                "Creator-powered promotion split networks built into store logs",
                "Clear 85% payout shares with direct Stripe automation integration",
                "Beautiful analytics showing real-time visitor counts and conversions"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white dark:bg-[#101828] p-4 rounded-2xl border border-primary/20 dark:border-secondary/20 shadow-sm">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-100 leading-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* ── SECTION 6: EARLY BIRD OFFER ────────────────────────────────────── */}
      <section id="early-bird" className="w-full py-24 bg-[#FAFAFB] dark:bg-[#0E0E18] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        
        {/* Subtle dim glows strictly limited to low opacity */}
        <div className="absolute top-[10%] left-[10%] w-[350px] h-[350px] rounded-full bg-primary/8 blur-[105px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-secondary/8 blur-[105px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 
          <div className="text-center space-y-4 mb-12 relative z-10 max-w-xl mx-auto">
            <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
              Limited Founding Perks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight leading-tight">
              Join waitlist & unlock founder benefits
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-200 font-medium">
              Take advantage of our high-conversion platform launch features before they open to the public.
            </p>
          </div>
 
          {/* Offer Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10 mb-12">
            {[
              { 
                title: "Early seller badge", 
                desc: "Secure verified founding status visible on your public subdomain storefront catalog.", 
                icon: Award, 
                color: "text-amber-500 bg-amber-500/10",
                span: "md:col-span-3"
              },
              { 
                title: "Premium features access", 
                desc: "Unlock advanced developer release modules and custom design tokens with zero charges forever.", 
                icon: Sparkles, 
                color: "text-primary dark:text-secondary bg-primary/10",
                span: "md:col-span-3"
              },
              { 
                title: "Priority onboarding", 
                desc: "Get fast-track queue review for digital product approval and Stripe account setup clearing.", 
                icon: Compass, 
                color: "text-emerald-500 bg-emerald-500/10",
                span: "md:col-span-2"
              },
              { 
                title: "Reduced future fees", 
                desc: "Enjoy a flat 0% operational fee model on all checkout orders during the first 90 days post-launch.", 
                icon: CheckCircle2, 
                color: "text-indigo-500 bg-indigo-500/10",
                span: "md:col-span-2"
              },
              { 
                title: "Exclusive benefits", 
                desc: "Earn prime placements on the main catalog homepage featured slots reserved strictly for founding sellers.", 
                icon: Layers, 
                color: "text-rose-500 bg-rose-500/10",
                span: "md:col-span-2"
              }
            ].map((perk, i) => (
              <div 
                key={i} 
                className={`${perk.span} bg-white/75 dark:bg-[#101828]/70 backdrop-blur-lg border border-slate-200/50 dark:border-primary/15 p-6 sm:p-8 rounded-3xl space-y-5 hover:border-primary/40 dark:hover:border-secondary/40 hover:translate-y-[-2px] transition-all duration-300 shadow-sm flex flex-col justify-between group`}
              >
                <div className="space-y-3.5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${perk.color} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    <perk.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base sm:text-[17px] font-bold text-slate-800 dark:text-white leading-tight">{perk.title}</h4>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-500 dark:text-slate-300 font-medium leading-relaxed pt-1">{perk.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 relative z-10">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-200 flex items-center justify-center gap-1.5 italic">
              <Sparkles className="w-3.5 h-3.5 text-primary dark:text-secondary animate-pulse" /> Limited waitlist spots available
            </span>
            <button 
              onClick={() => {
                setActiveFormTab("waitlist");
                scrollToSection("early-access");
              }}
              className="px-8 py-3.5 rounded-xl bg-primary text-white hover:bg-primary/90 text-sm font-semibold transition-all inline-flex items-center gap-2 cursor-pointer shadow-md shadow-primary/25 hover:shadow-primary/35 active:scale-95"
            >
              Join the Waitlist <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>
      </section>

      {/* ── SECTION 7: HOW IT WORKS ────────────────────────────────────────── */}
      <section id="how-it-works" className="w-full py-24 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            Simplified Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            How it works
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            Four simple steps to go from asset files to automated recurring payouts.
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-slate-200 dark:to-primary/10 transform md:-translate-x-1/2 -z-10"></div>
          
          <div className="space-y-12">
            {[
              { step: "01", title: "Create account", desc: "Perform a quick email checkout, verify security, and claim founder launcher permissions.", align: "left" },
              { step: "02", title: "Setup store", desc: "Unlock a custom storefront subdomain path (e.g. brand.the99cart.com) and link Stripe.", align: "right" },
              { step: "03", title: "Add products", desc: "Upload code files, midjourney prompts, SaaS boilerplates, or digital kits with flat pricing.", align: "left" },
              { step: "04", title: "Start selling", desc: "Direct traffic from our public catalog and collaborator channels. Earn 85% payouts instantly.", align: "right" }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center relative ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Circle */}
                <div className="absolute left-6 md:left-1/2 w-4.5 h-4.5 rounded-full bg-primary border-4 border-white dark:border-[#0B0B14] transform -translate-x-2 md:-translate-x-1/2 z-10 shadow-sm"></div>
                
                {/* Space holder block */}
                <div className="w-full md:w-1/2"></div>
                
                {/* Content Box */}
                <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                  <div className="bg-white dark:bg-[#101828]/45 border border-slate-100 dark:border-primary/15 rounded-3xl p-6 shadow-sm hover:border-primary/45 transition-colors">
                    <span className="text-xs font-bold text-slate-800 dark:text-white/80 block mb-1">Step {item.step}</span>
                    <h4 className="text-base font-display font-bold text-slate-800 dark:text-white leading-tight mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-300 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* ── SECTION 8: SELLER DASHBOARD PREVIEW ──────────────────────────────── */}
      <section id="dashboard-preview" className="w-full py-24 bg-[#FAFAFB] dark:bg-[#0E0E18] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            Storefront Control
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            Seller dashboard preview
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            Manage everything from one place. Track page hits, items listed, and automatic earnings.
          </p>
        </div>

        {/* Large Dashboard Mockup Container */}
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-primary/5 rounded-full blur-[90px] -z-10"></div>
          
          <div className="bg-gradient-to-br from-slate-100 to-white dark:from-[#101828]/45 dark:to-[#0B0B14] border border-slate-200 dark:border-primary/20 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            {/* Mockup browser bar */}
            <div className="flex items-center gap-1.5 pb-4 border-b border-slate-200 dark:border-primary/10 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block"></span>
              <span className="text-[10px] text-slate-400 font-mono ml-4 select-none">dashboard.the99cart.com/analytics</span>
            </div>

            {/* Desktop Mockup Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#F8FAFC] dark:bg-[#07070D] rounded-2xl overflow-hidden border border-slate-200 dark:border-primary/10 min-h-[550px]">
              
              {/* Left Sidebar Menu (Dark Color always) */}
              <div className="lg:col-span-3 bg-[#0B0B14] text-slate-300 p-5 flex flex-col justify-between border-r border-slate-800 text-left">
                <div className="space-y-6">
                  {/* Brand & Subdomain prefix */}
                  <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/60">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
                      99
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-none">The99Cart</h4>
                      <span className="text-[9px] text-slate-500 font-mono">v1.0.0-beta</span>
                    </div>
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-1.5">
                    {[
                      { name: "Analytics", icon: BarChart3, active: true },
                      { name: "My Storefront", icon: Store, active: false },
                      { name: "Products", icon: ShoppingBag, active: false },
                      { name: "Curator Share", icon: Users, active: false },
                      { name: "Order Escrow", icon: Lock, active: false },
                    ].map((item, idx) => (
                      <button 
                        key={idx}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${item.active ? 'bg-primary/25 text-secondary border border-primary/25 shadow-sm' : 'text-slate-400 hover:bg-white/5 hover:text-white border border-transparent'}`}
                      >
                        <item.icon className={`w-4 h-4 ${item.active ? 'text-secondary' : 'text-slate-500'}`} />
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Sidebar Footer */}
                <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-slate-400">FOUNDER MODE</span>
                    <span className="text-secondary shrink-0 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Active</span>
                  </div>
                  <p className="text-[9px] text-slate-500 leading-normal font-medium">0% fee unlocked for 90 days.</p>
                </div>
              </div>

              {/* Right Side Main Body (Stats & Graphs) */}
              <div className="lg:col-span-9 p-6 space-y-6 bg-slate-50 dark:bg-[#07070D]">
                
                {/* Header of Dashboard */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-200/50 dark:border-primary/10 pb-4">
                  <div className="text-left">
                    <h3 className="text-base font-bold text-slate-800 dark:text-white leading-none">Welcome back, Founder</h3>
                    <p className="text-[11px] text-slate-400 font-semibold mt-1 font-mono">Shop link: {claimedSubdomain ? `${claimedSubdomain}.the99cart.com` : "yourstore.the99cart.com"}</p>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-[#101828]/60 p-1 border border-slate-200 dark:border-primary/10 rounded-xl">
                    <span className="px-3 py-1 bg-white dark:bg-[#0B0B14] shadow-sm text-[10px] font-bold text-primary dark:text-secondary rounded-lg cursor-pointer">Live Metrics</span>
                    <span className="px-3 py-1 text-[10px] font-bold text-slate-500 dark:text-slate-400 rounded-lg cursor-pointer">Payouts</span>
                  </div>
                </div>

                {/* Floating Analytics Cards (Stats Row) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Total Revenue", val: "$12,490.00", change: "+14.8%", desc: "Direct Stripe payout queued" },
                    { label: "Subdomain Visitors", val: "48,205", change: "+22.5%", desc: "Page views yesterday" },
                    { label: "Conversion Rate", val: "12.8%", change: "+2.1%", desc: "Escrow checkout completions" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-[#101828]/60 border border-slate-200/60 dark:border-primary/15 p-4 rounded-2xl shadow-sm text-left relative overflow-hidden group hover:border-primary/30 transition-all duration-300">
                      <span className="text-[10px] text-slate-400 dark:text-slate-400 block font-semibold uppercase tracking-wider">{stat.label}</span>
                      <div className="flex justify-between items-baseline mt-1.5">
                        <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1 leading-none">{stat.val}</h4>
                        <span className="text-[10px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">{stat.change}</span>
                      </div>
                      <span className="text-[9px] text-slate-400 dark:text-slate-400 font-semibold block mt-2 border-t border-slate-100 dark:border-primary/10 pt-1.5">{stat.desc}</span>
                    </div>
                  ))}
                </div>

                {/* Core Visual Grid: Chart & Product node side-by-side */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Earnings Curve Graph (Spans 7 columns) */}
                  <div className="lg:col-span-7 bg-white dark:bg-[#101828]/60 border border-slate-200/60 dark:border-primary/15 p-5 rounded-2xl shadow-sm flex flex-col justify-between text-left">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 dark:text-white">Earnings Curve</h4>
                        <p className="text-[9px] text-slate-400 font-semibold">Weekly gross sales revenue volume</p>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold bg-slate-100 dark:bg-[#0B0B14] border border-slate-200 dark:border-primary/10 px-2.5 py-1 rounded-lg">Last 9 Weeks</span>
                    </div>

                    {/* Animated Bar Chart using Framer Motion */}
                    <div className="h-44 flex items-end gap-3 pt-6 relative border-b border-slate-200/50 dark:border-primary/10">
                      
                      {/* Grid Lines */}
                      <div className="absolute left-0 right-0 top-1/4 border-t border-dashed border-slate-100 dark:border-primary/5 -z-10"></div>
                      <div className="absolute left-0 right-0 top-2/4 border-t border-dashed border-slate-100 dark:border-primary/5 -z-10"></div>
                      <div className="absolute left-0 right-0 top-3/4 border-t border-dashed border-slate-100 dark:border-primary/5 -z-10"></div>

                      {[35, 45, 30, 60, 50, 75, 90, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-lg relative group h-full flex items-end">
                          
                          {/* Animated Bar */}
                          <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                            className="w-full bg-gradient-to-t from-primary/80 to-primary rounded-t-lg relative group-hover:from-secondary group-hover:to-secondary transition-all"
                          >
                            {/* Hover tooltip */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-25 pointer-events-none">
                              +${h * 15}
                            </div>
                          </motion.div>
                          
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-slate-400 dark:text-slate-400 font-mono font-bold mt-2.5 px-0.5">
                      <span>W1</span>
                      <span>W2</span>
                      <span>W3</span>
                      <span>W4</span>
                      <span>W5</span>
                      <span>W6</span>
                      <span>W7</span>
                      <span>W8</span>
                      <span>W9 (Current)</span>
                    </div>
                  </div>

                  {/* Storefront Nodes (Spans 5 columns) */}
                  <div className="lg:col-span-5 bg-white dark:bg-[#101828]/60 border border-slate-200/60 dark:border-primary/15 p-5 rounded-2xl shadow-sm text-left flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-white">Storefront Live Nodes</h4>
                        <span className="text-[9px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">3 active</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "SaaS Template V1", sales: "148 sales", status: "Active", rev: "$7,252.00" },
                          { name: "UI Asset Kit Bundle", sales: "92 sales", status: "Active", rev: "$3,680.00" },
                          { name: "Personal Figma folio", sales: "34 sales", status: "Draft", rev: "$1,558.00" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between text-xs font-semibold py-1.5 border-b border-slate-100 dark:border-primary/5 last:border-0">
                            <div>
                              <span className="text-slate-800 dark:text-white block font-bold leading-tight">{item.name}</span>
                              <span className="text-[9px] text-slate-400 block font-medium mt-0.5">{item.sales} • {item.rev}</span>
                            </div>
                            <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold border ${item.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-slate-100 text-slate-400 border-slate-200 dark:bg-primary/10 dark:border-primary/15'}`}>
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-[#0B0B14] p-3 rounded-xl border border-slate-200/50 dark:border-primary/10 text-center flex items-center justify-center gap-2 mt-4">
                      <span className="text-[10px] font-bold text-slate-500 dark:text-slate-300 flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-secondary animate-pulse" /> Quick upload active on subdomain.
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>

      {/* ── SECTION 9: TRUST + FUTURE NUMBERS ───────────────────────────────── */}
      <section id="trust-metrics" className="w-full pt-24 pb-12 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { metric: "5000+", label: "Early users waiting" },
              { metric: "10K+", label: "Expected sellers" },
              { metric: "100K+", label: "Future products" },
              { metric: "Millions+", label: "Future transactions" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-slate-50 dark:bg-[#101828]/45 border border-slate-200/60 dark:border-primary/15 rounded-3xl p-6 text-center space-y-2 shadow-sm"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                  {item.metric}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-300 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="claim-subdomain" className="w-full py-20 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-slate-800 dark:text-white/80 tracking-widest bg-primary/10 border border-primary/20 dark:border-secondary/25 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm uppercase">
              Step 1 • Store Link Customization
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
              Claim your custom store subdomain
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
              Every creator needs a home. Type your brand, developer, or creator handle below to secure your store link (e.g. <code>yourname.the99cart.com</code>) at zero setup cost.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-[#101828]/35 border border-slate-200/60 dark:border-primary/25 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl space-y-6 text-center">
            {/* Ambient Glows inside the Card to Pop Colors */}
            <div className="absolute top-[-25%] left-[-20%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[60px] pointer-events-none"></div>
            <div className="absolute bottom-[-25%] right-[-20%] w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[60px] pointer-events-none"></div>

            <div className="max-w-md mx-auto bg-slate-50 dark:bg-[#101828]/60 p-2 border border-slate-200 dark:border-primary/25 rounded-2xl flex flex-col sm:flex-row items-center gap-2.5 shadow-sm relative z-10">
              <div className="flex items-center w-full px-3.5 py-2.5 bg-white dark:bg-[#0B0B14] rounded-xl border border-slate-100 dark:border-primary/10">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 select-none">the99cart.com/</span>
                <input 
                  type="text" 
                  placeholder="yourname"
                  value={claimedSubdomain}
                  onChange={handleSubdomainChange}
                  className="w-full bg-transparent focus:outline-none text-sm font-semibold text-slate-800 dark:text-white placeholder-slate-400 focus:placeholder-transparent ml-0.5 font-sans"
                />
              </div>
              <button 
                onClick={() => {
                  const targetElement = document.getElementById("live-dashboard");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto h-11 px-6 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:shadow-[0_4px_20px_rgba(109,71,255,0.3)] transition-all cursor-pointer whitespace-nowrap"
              >
                Next: Live Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: STEP 2 - LIVE DASHBOARD PREVIEW ───────────────────────── */}
      <section id="live-dashboard" className="w-full py-24 bg-[#FAFAFB] dark:bg-[#0E0E18] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-slate-800 dark:text-white/80 tracking-widest bg-primary/10 border border-primary/20 dark:border-secondary/25 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm uppercase">
              Step 2 • Real-time Store Mockup
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
              Your future seller control panel
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
              Watch your storefront come alive. The shop link below updates automatically with your chosen subdomain to show how your dashboard will render at launch.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto bg-slate-50 dark:bg-[#101828]/20 border border-slate-200/60 dark:border-primary/15 rounded-3xl p-4 sm:p-6 shadow-xl dark:shadow-2xl dark:shadow-black/40 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
            
            {/* Internal Dashboard Mockup */}
            <div className="bg-white dark:bg-[#0B0B14] rounded-2xl border border-slate-100 dark:border-primary/10 p-5 text-left grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Visual Column 1: Store Setup */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-primary/10 pb-3">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-400">Active shop link</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <div className="bg-slate-50 dark:bg-[#101828]/60 p-4 rounded-xl border border-slate-100 dark:border-primary/10">
                  <span className="text-xs font-medium text-primary dark:text-secondary block mb-1">Subdomain shop URL</span>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                    {claimedSubdomain ? `${claimedSubdomain}.the99cart.com` : "yourname.the99cart.com"}
                  </h4>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-200">
                    <span className="flex items-center gap-1"><Rocket className="w-3.5 h-3.5 text-primary dark:text-secondary" /> Status: Free setup</span>
                    <span className="text-emerald-500">Available</span>
                  </div>
                </div>
              </div>

              {/* Visual Column 2: Net Revenue */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-primary/10 pb-3">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-400">Earnings split</span>
                  <span className="text-[11px] font-semibold text-emerald-500">+124% Growth</span>
                </div>
                <div className="bg-slate-50 dark:bg-[#101828]/60 p-4 rounded-xl border border-slate-100 dark:border-primary/10">
                  <span className="text-xs font-medium text-secondary block mb-1">Your earnings ratio</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <h3 className="text-2xl font-display font-bold text-slate-800 dark:text-white">85.00%</h3>
                    <span className="text-xs text-slate-400 dark:text-slate-300 font-medium">15% platform fee</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-[#101828] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="w-[85%] bg-primary h-full rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Visual Column 3: Recent Checkout */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-primary/10 pb-3">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-400">Latest delivery</span>
                  <span className="text-xs font-medium text-primary dark:text-secondary">Instant</span>
                </div>
                <div className="bg-slate-50 dark:bg-[#101828]/60 p-4 rounded-xl border border-slate-100 dark:border-primary/10">
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-400 block mb-1">Delivered asset</span>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">Next.js Core SaaS Boilerplate</h4>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-semibold">
                    <span className="text-primary dark:text-secondary font-bold">$49.00</span>
                    <span className="text-emerald-500 flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Secure key generated</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center pt-4">
            <button 
              onClick={() => {
                setActiveFormTab("waitlist");
                const targetElement = document.getElementById("early-access");
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-xl hover:shadow-[0_4px_20px_rgba(109,71,255,0.3)] transition-all cursor-pointer"
            >
              Next: Waitlist Registration
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: STEP 3 - REGISTRATION FORM ────────────────────────────── */}
      <section id="early-access" className="w-full py-24 bg-white dark:bg-[#0B0B14] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-[10px] font-bold text-slate-800 dark:text-white/80 tracking-widest bg-primary/10 border border-primary/20 dark:border-secondary/25 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm uppercase">
              Step 3 • Priority Launch Registration
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
              Join the waitlist or apply as a seller
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed font-medium">
              Join the launch queue. Choose to subscribe to the general waitlist with just your email, or apply as an official seller to pre-approve your custom subdomain storefront.
            </p>
          </div>

          <div id="reserve-form" className="max-w-4xl mx-auto bg-slate-50 dark:bg-[#101828]/35 border border-slate-200/60 dark:border-primary/25 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glows inside the Card to Pop Colors */}
          <div className="absolute top-[-20%] left-[-20%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[60px] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[350px] h-[350px] rounded-full bg-secondary/10 blur-[60px] pointer-events-none"></div>

          <div className="text-center space-y-4 mb-8 relative z-10">
            <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-primary/10 border border-primary/20 dark:border-secondary/25 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
              Limited launch queue spots remaining
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
              {activeFormTab === "waitlist" ? "Join the Waitlist" : "Become a Seller"}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-200 font-medium max-w-md mx-auto leading-relaxed">
              {activeFormTab === "waitlist" 
                ? "Enter your email to receive launch notifications and exclusive subscriber updates."
                : "Submit your details to secure 0% platform commission fees and verify your custom shop handle."}
            </p>

            {/* Glowing progress bar indicator */}
            <div className="space-y-2 max-w-sm mx-auto pt-2">
              <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-300 font-bold">
                <span>4,200/5,000 SPOTS RESERVED</span>
                <span className="text-primary dark:text-secondary">84% FULL</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-primary/10 border border-slate-200/50 dark:border-primary/10 overflow-hidden relative">
                <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '84%' }}></div>
              </div>
            </div>
          </div>

          {success ? (
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 bg-primary/5 border border-primary/20 dark:border-secondary/20 rounded-2xl text-center space-y-4 relative z-10 max-w-md mx-auto shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary dark:text-secondary flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
                {activeFormTab === "waitlist" ? "Joined Waitlist!" : "Application Received!"}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed font-semibold">
                {activeFormTab === "waitlist" 
                  ? `Congratulations, you have joined the general waitlist at queue position #${rank}.`
                  : `Congratulations ${formData.name}, you are queued at position #${rank} in our seller waitlist. We will notify you at ${formData.email} as soon as subdomain setup opens.`
                }
              </p>
              {activeFormTab === "seller" && claimedSubdomain && (
                <div className="bg-slate-50 dark:bg-[#0B0B14] px-4 py-3 rounded-xl border border-slate-200 dark:border-primary/20 font-mono text-xs text-primary dark:text-secondary font-bold select-all tracking-wider">
                  URL: {claimedSubdomain}.the99cart.com
                </div>
              )}
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-8 relative z-10 w-full max-w-none">
              
              {/* Elegant tab selector inside form card */}
              <div className="flex p-1 bg-white/5 dark:bg-[#101828]/50 border border-slate-200/50 dark:border-primary/15 rounded-2xl max-w-xs sm:max-w-sm mx-auto mb-8 relative z-10">
                <button
                  type="button"
                  onClick={() => {
                    setActiveFormTab("waitlist");
                    setErrorMessage("");
                  }}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeFormTab === "waitlist"
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/15"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  Join Waitlist
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveFormTab("seller");
                    setErrorMessage("");
                  }}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    activeFormTab === "seller"
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/15"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  Become a Seller
                </button>
              </div>

              {activeFormTab === "waitlist" ? (
                /* General Waitlist Form - Email only & Centered layout */
                <div className="max-w-md mx-auto space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block text-left">Email address</label>
                    <div className="relative flex items-center bg-slate-50 dark:bg-[#0B0B14] border border-slate-200/80 dark:border-primary/25 rounded-xl overflow-hidden px-4 py-3 focus-within:border-primary transition-all">
                      <Mail className="w-4.5 h-4.5 text-slate-400 dark:text-slate-300 shrink-0 mr-3" />
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-transparent focus:outline-none text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl text-xs font-bold text-center tracking-wide animate-pulse">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-4 pt-2">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full sm:w-64 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md shadow-primary/20 hover:shadow-[0_4px_25px_rgba(221,0,255,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer mx-auto"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-300 pt-1">
                      <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Your information stays private & secure</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Seller Registration Form - Full Details & Centered footer button */
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
                    
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">Full name</label>
                      <div className="relative flex items-center bg-slate-50 dark:bg-[#0B0B14] border border-slate-200/80 dark:border-primary/25 rounded-xl overflow-hidden px-4 py-3 focus-within:border-primary transition-all">
                        <User className="w-4.5 h-4.5 text-slate-400 dark:text-slate-300 shrink-0 mr-3" />
                        <input 
                          type="text" 
                          placeholder="Enter your name" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required={activeFormTab === "seller"}
                          className="w-full bg-transparent focus:outline-none text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">Email address</label>
                      <div className="relative flex items-center bg-slate-50 dark:bg-[#0B0B14] border border-slate-200/80 dark:border-primary/25 rounded-xl overflow-hidden px-4 py-3 focus-within:border-primary transition-all">
                        <Mail className="w-4.5 h-4.5 text-slate-400 dark:text-slate-300 shrink-0 mr-3" />
                        <input 
                          type="email" 
                          placeholder="Enter your professional email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full bg-transparent focus:outline-none text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">Phone Number</label>
                      <div className="relative flex items-center bg-slate-50 dark:bg-[#0B0B14] border border-slate-200/80 dark:border-primary/25 rounded-xl overflow-hidden px-4 py-3 focus-within:border-primary transition-all">
                        <Laptop className="w-4.5 h-4.5 text-slate-400 dark:text-slate-300 shrink-0 mr-3" />
                        <input 
                          type="tel" 
                          placeholder="Enter phone with country code" 
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          required={activeFormTab === "seller"}
                          className="w-full bg-transparent focus:outline-none text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">Business Name</label>
                      <div className="relative flex items-center bg-slate-50 dark:bg-[#0B0B14] border border-slate-200/80 dark:border-primary/25 rounded-xl overflow-hidden px-4 py-3 focus-within:border-primary transition-all">
                        <Store className="w-4.5 h-4.5 text-slate-400 dark:text-slate-300 shrink-0 mr-3" />
                        <input 
                          type="text" 
                          placeholder="Enter your brand or store name" 
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          required={activeFormTab === "seller"}
                          className="w-full bg-transparent focus:outline-none text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 flex flex-col justify-between">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">Seller Type</label>
                      <select 
                        value={formData.sellerType}
                        onChange={(e) => setFormData({ ...formData, sellerType: e.target.value })}
                        className="w-full px-3.5 py-3 bg-white dark:bg-[#101828] border border-slate-200/80 dark:border-primary/25 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-primary cursor-pointer h-[46px]"
                      >
                        <option className="bg-white dark:bg-[#101828] text-slate-800 dark:text-slate-200">Individual Seller</option>
                        <option className="bg-white dark:bg-[#101828] text-slate-800 dark:text-slate-200">Brand</option>
                        <option className="bg-white dark:bg-[#101828] text-slate-800 dark:text-slate-200">Creator</option>
                        <option className="bg-white dark:bg-[#101828] text-slate-800 dark:text-slate-200">Business</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">Products Category</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Next.js SaaS, Figma" 
                        value={formData.productsCategory}
                        onChange={(e) => setFormData({ ...formData, productsCategory: e.target.value })}
                        required={activeFormTab === "seller"}
                        className="w-full px-3.5 py-3 bg-white dark:bg-[#101828] border border-slate-200/80 dark:border-primary/25 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-primary placeholder-slate-400 h-[46px]"
                      />
                    </div>

                    {claimedSubdomain && (
                      <div className="space-y-2 sm:col-span-2 lg:col-span-3">
                        <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block text-left">Subdomain prefill</label>
                        <div className="relative flex items-center bg-[#6D47FF]/5 border border-primary/25 rounded-xl px-4 py-3">
                          <Store className="w-4.5 h-4.5 text-primary dark:text-secondary shrink-0 mr-3" />
                          <span className="text-xs font-bold text-primary dark:text-secondary">{claimedSubdomain}.the99cart.com</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Centered Checkboxes, Lock Indicator & Centered submit button */}
                  <div className="pt-6 border-t border-slate-100 dark:border-primary/15 space-y-6">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-left">
                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input 
                            type="checkbox"
                            checked={formData.founderBenefits}
                            onChange={(e) => setFormData({ ...formData, founderBenefits: e.target.checked })}
                            className="w-4.5 h-4.5 rounded text-primary focus:ring-primary border-slate-300 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-200">I want founder benefits (0% fee, exclusive badge)</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer select-none">
                          <input 
                            type="checkbox"
                            checked={formData.notifyLaunch}
                            onChange={(e) => setFormData({ ...formData, notifyLaunch: e.target.checked })}
                            className="w-4.5 h-4.5 rounded text-primary focus:ring-primary border-slate-300 cursor-pointer"
                          />
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-200">Notify me before platform launch</span>
                        </label>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-300">
                        <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>Your information stays private & secure</span>
                      </div>
                    </div>

                    {errorMessage && (
                      <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl text-xs font-bold text-center tracking-wide animate-pulse max-w-md mx-auto">
                        {errorMessage}
                      </div>
                    )}

                    <div className="pt-2">
                      <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full sm:w-64 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md shadow-primary/20 hover:shadow-[0_4px_25px_rgba(221,0,255,0.3)] transition-all transform active:scale-95 flex items-center justify-center gap-2 cursor-pointer mx-auto"
                      >
                        {loading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          "Become a Seller"
                        )}
                      </button>
                    </div>

                  </div>

                </div>
              )}

            </form>
          )}

        </div>
      </div>
    </section>

      {/* ── SECTION 11: FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="w-full py-24 bg-[#FAFAFB] dark:bg-[#0E0E18] border-t border-slate-100 dark:border-primary/10 relative scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-semibold text-slate-800 dark:text-white/80 tracking-wide bg-slate-50 dark:bg-[#101828]/80 border border-slate-200/50 dark:border-primary/20 px-4 py-1.5 rounded-full w-fit mx-auto block shadow-sm">
            Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-800 dark:text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-200 max-w-xl mx-auto font-medium">
            Quick answers about seller onboarding, pricing, and platform features.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "What is The99Cart?",
              a: "The99Cart is a modern digital marketplace connecting independent creators, developers, and shoppers. We make it easy to buy and sell premium digital products like templates, source code, and design files under your own custom shop link."
            },
            {
              q: "How do I become seller?",
              a: "Simply complete the early access waitlist form above. Pre-approved shops will receive direct onboarding dashboard access links before launch."
            },
            {
              q: "Is registration free?",
              a: "Yes! Setting up your storefront subdomain and listing products is completely free. We keep a simple flat 15% platform split on successful orders (0% split for early founders for 90 days)."
            },
            {
              q: "When will launch happen?",
              a: "The official public launch of The99Cart ecosystem is scheduled for Summer 2026. Waitlist members will get early control dashboard onboarding access weeks in advance."
            },
            {
              q: "Can creators sell products?",
              a: "Yes. You can upload Midjourney prompts, Figma templates, SaaS codebases, ebooks, graphics, or any digital asset. File delivery is automated and securely processed instantly."
            },
            {
              q: "Will early users get benefits?",
              a: "Yes! Early signups secure the 'Early Seller' verified badge, zero operational commission for the first 90 days, priority queue review, and custom storefront subdomains."
            }
          ].map((faq, i) => {
            const active = activeFaq === i;
            return (
              <div 
                key={i} 
                className={`px-6 py-4 rounded-2xl border transition-all duration-300 ${active ? 'bg-slate-50/[0.35] dark:bg-[#101828]/50 border-slate-200/50 dark:border-primary/25 shadow-sm' : 'bg-transparent border-slate-100 dark:border-primary/10 hover:bg-slate-50/[0.15] dark:hover:bg-[#101828]/20'}`}
              >
                <button 
                  onClick={() => setActiveFaq(active ? null : i)}
                  className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none py-1"
                >
                  <span className="text-base font-display font-bold text-slate-800 dark:text-white tracking-tight leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-50 dark:bg-[#101828] border border-slate-100 dark:border-primary/10 text-slate-400 dark:text-slate-200 transition-all ${active ? 'bg-primary text-white dark:bg-secondary dark:text-white rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {active && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="pl-1 pr-6 pb-2 pt-3 text-sm text-slate-600 dark:text-slate-200 leading-relaxed font-semibold">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      </main>

      {/* ── SECTION 11: FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-[#07070D] border-t border-primary/20 px-6 sm:px-10 lg:px-16 py-24 relative overflow-hidden transition-all duration-300">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[250px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 relative z-10">
          
          {/* Logo Brand Info - Span 4 */}
          <div className="space-y-6 lg:col-span-4 text-left">
            <div className="flex items-center gap-2.5">
              <img 
                src="/the99cart-logo-white.svg" 
                alt="the99cart Logo" 
                className="h-9 w-auto select-none" 
              />
            </div>
            <p className="text-base text-slate-300 font-medium leading-relaxed max-w-sm">
              Connecting digital builders, template designers, and curators into a high-speed unified marketplace. Automating secure file hosting and payments globally.
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-200 text-[15px] font-bold">
                <Mail className="w-5 h-5 text-primary dark:text-secondary shrink-0" />
                <a href="mailto:hello@the99cart.com" className="hover:text-secondary transition-colors">hello@the99cart.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-200 text-[15px] font-bold">
                <Globe className="w-5 h-5 text-primary dark:text-secondary shrink-0" />
                <span>support.the99cart.com</span>
              </div>
            </div>
          </div>

          {/* Directory Column 1: Platform - Span 2 */}
          <div className="space-y-6 lg:col-span-2 text-left">
            <h4 className="text-base font-display font-bold text-white tracking-wide uppercase">Platform</h4>
            <ul className="space-y-4 text-[15px] text-slate-300 font-semibold">
              <li><button onClick={() => scrollToSection("features")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Ecosystem core</button></li>
              <li><button onClick={() => scrollToSection("dashboard-preview")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Seller Dashboard</button></li>
              <li><button onClick={() => scrollToSection("how-it-works")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Simplified Process</button></li>
              <li><button onClick={() => scrollToSection("why-sellers-love")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Seller Benefits</button></li>
            </ul>
          </div>

          {/* Directory Column 2: Resources - Span 2 */}
          <div className="space-y-6 lg:col-span-2 text-left">
            <h4 className="text-base font-display font-bold text-white tracking-wide uppercase">Resources</h4>
            <ul className="space-y-4 text-[15px] text-slate-300 font-semibold">
              <li><button onClick={() => scrollToSection("faq")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Help & FAQs</button></li>
              <li><button onClick={() => scrollToSection("early-access")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Pricing Plans</button></li>
              <li><button onClick={() => scrollToSection("early-access")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Contact Support</button></li>
              <li><button onClick={() => scrollToSection("why-different")} className="hover:text-secondary transition-colors cursor-pointer text-left w-full">Comparison Guide</button></li>
            </ul>
          </div>

          {/* Directory Column 3: Policies - Span 2 */}
          <div className="space-y-6 lg:col-span-2 text-left">
            <h4 className="text-base font-display font-bold text-white tracking-wide uppercase">Policies</h4>
            <ul className="space-y-4 text-[15px] text-slate-300 font-semibold">
              <li><a href="#" className="hover:text-secondary transition-colors block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block">Seller Agreement</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors block">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Column - Span 2 */}
          <div className="space-y-6 lg:col-span-2 text-left">
            <h4 className="text-base font-display font-bold text-white tracking-wide uppercase">Newsletter</h4>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Get notified of beta testing slots and subdomain pre-launch setup plans.
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 bg-[#101828]/80 border border-primary/25 rounded-xl text-sm w-full focus:outline-none focus:border-secondary text-white font-semibold placeholder-slate-500"
              />
              <button 
                onClick={() => scrollToSection("early-access")}
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl text-sm font-semibold hover:shadow-[0_4px_15px_rgba(109,71,255,0.25)] transition-all cursor-pointer text-center"
              >
                Join Waitlist
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Social links */}
        <div className="max-w-[1440px] mx-auto pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-[15px] text-slate-400 font-medium relative z-10">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[15px] text-slate-300 font-semibold block">© {new Date().getFullYear()} The99Cart. All development rights reserved.</span>
            <span className="block text-xs text-slate-500">Premium decentralized storefronts & digital product delivery network.</span>
          </div>
          
          {/* Social Icons row with inline Lucide-style brand SVGs */}
          <div className="flex gap-3">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/the99cart" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/the99cart" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/the99cart/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* X (formerly Twitter) */}
            <a href="https://twitter.com/the99cart" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
            {/* Threads */}
            <a href="https://threads.net/the99cart" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all" aria-label="Threads">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 10a3 3 0 1 1 6 0v1.5a1.5 1.5 0 0 0 3 0V10a6 6 0 1 0-11 3.541m11 2.308A9 9 0 1 1 3 10a9 9 0 0 1 15 6.643" />
              </svg>
            </a>
          </div>
        </div>

        {/* Massive Brand Name fading out at the very bottom */}
        <div className="w-full overflow-hidden mt-16 select-none pointer-events-none relative z-0">
          <h2 
            className="text-[12vw] sm:text-[14vw] font-extrabold font-display text-center tracking-[0.05em] leading-none uppercase select-none"
            style={{
              color: "rgba(255, 255, 255, 0.16)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.05) 75%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.05) 75%, transparent 100%)"
            }}
          >
            the99cart
          </h2>
        </div>
      </footer>

    </div>
  );
}
