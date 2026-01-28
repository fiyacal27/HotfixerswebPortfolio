import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Layout, 
  ShoppingCart, 
  BarChart3, 
  Layers, 
  Search, 
  Users, 
  Smartphone 
} from 'lucide-react';

/* --- 1. Product Configuration Data --- */
const productData = {
  "brand-starter": {
    title: "Brand Starter",
    price: "₱8,000 – ₱15,000",
    description: "The perfect launchpad for small businesses, cafes, and service providers. We build a professional digital presence that establishes trust and converts visitors into leads.",
    badge: "Best Value",
    theme: "emerald", // Used for shadow/glow colors
    targetAudience: "Freelancers, Local Cafes, Consultants, Small Clinics",
    heroGradient: "from-emerald-500/20 via-emerald-900/10 to-transparent",
    accentColor: "text-emerald-400",
    buttonGradient: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500",
    features: [
      { title: "Responsive Architecture", desc: "Flawless rendering on mobile, tablet, and desktop devices.", icon: <Smartphone /> },
      { title: "Brand Identity Gallery", desc: "High-resolution image showcasing with lightbox integration.", icon: <Layout /> },
      { title: "Lead Generation", desc: "Custom contact forms connected directly to your email.", icon: <Zap /> },
      { title: "Local SEO Basics", desc: "Google Maps integration and basic meta-tagging for local discovery.", icon: <Globe /> }
    ],
    specs: ["1-3 Page Layout", "React + Tailwind Stack", "SSL Certificate Included", "Social Media Integration"]
  },
  "product-showcase": {
    title: "Product Showcase",
    price: "₱18,000 – ₱30,000",
    description: "Designed for retailers who want a branded catalog experience without the overhead of full e-commerce management. Organize your products and drive traffic.",
    badge: "Recommended",
    theme: "indigo",
    targetAudience: "Instagram Sellers, Boutiques, Wholesalers, Dropshippers",
    heroGradient: "from-indigo-500/20 via-purple-900/10 to-transparent",
    accentColor: "text-indigo-400",
    buttonGradient: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500",
    features: [
      { title: "Dynamic Product Catalog", desc: "Filterable and searchable product listings with categories.", icon: <Layout /> },
      { title: "Smart Redirects", desc: "Buttons linking directly to Shopee/Lazada/Instagram DM for checkout.", icon: <Zap /> },
      { title: "Promotional Banners", desc: "Announce sales and new arrivals with dedicated ad slots.", icon: <Layers /> },
      { title: "Analytics Integration", desc: "Track which products are getting the most views.", icon: <BarChart3 /> }
    ],
    specs: ["Up to 50 Products", "Advanced Filtering", "WhatsApp/Messenger Integration", "Admin Content Management"]
  },
  "full-ecommerce": {
    title: "Full E-Commerce Suite",
    price: "₱40,000 – ₱75,000+",
    description: "Complete autonomy over your sales channel. Manage inventory, process payments, and own your customer data without paying marketplace commission fees.",
    badge: "Enterprise Grade",
    theme: "blue",
    targetAudience: "Established Brands, D2C Startups, High-Volume Sellers",
    heroGradient: "from-blue-500/20 via-slate-900/10 to-transparent",
    accentColor: "text-blue-400",
    buttonGradient: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500",
    features: [
      { title: "Integrated Shopping Cart", desc: "Seamless checkout flow with guest and user account options.", icon: <ShoppingCart /> },
      { title: "Payment Gateways", desc: "Accept GCash, Maya, Cards, and COD securely.", icon: <ShieldCheck /> },
      { title: "Inventory Management", desc: "Real-time stock tracking and low-stock alerts.", icon: <Layers /> },
      { title: "Admin Dashboard", desc: "Full control panel to manage orders, customers, and content.", icon: <BarChart3 /> }
    ],
    specs: ["Unlimited Products", "Customer Accounts", "Automated Emails", "Advanced SEO Suite"]
  }
};

/* --- 2. Main Component --- */
const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams(); 
  
  // Logic: Get the product data based on the URL parameter, default to 'brand-starter' if not found
  const product = productData[productId] || productData["brand-starter"];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg backdrop-blur-md">
              <Code size={20} className="text-indigo-400" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold text-xl from-white to-slate-400">
              Hotfixers <span className={`font-normal text-sm ${product.accentColor}`}>/ {product.title}</span>
            </span>
          </div>
          <button onClick={() => navigate('/')} className="hidden md:block px-5 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors backdrop-blur-sm cursor-pointer">
            Back to Home
          </button>
        </div>
      </header>

      <main className="relative">
        
        {/* --- HERO SECTION --- */}
        <section className={`relative pt-20 pb-32 px-6 overflow-hidden`}>
          {/* Ambient Background Glow */}
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b ${product.heroGradient} blur-[120px] -z-10`} />

          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium uppercase tracking-wider text-slate-300">
              {product.badge} Package
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              {product.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {product.description}
            </p>

            <div className="py-6">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight block">
                {product.price}
              </span>
              <span className="text-slate-500 text-sm mt-2 block">One-time payment • No monthly subscription</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/configure')}
                className={`px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-xl shadow-${product.theme}-900/20 transition-all hover:-translate-y-1 flex items-center gap-2 ${product.buttonGradient}`}
              >
                Configure Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* --- WHO IS THIS FOR? --- */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6 text-center">
             <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Perfect Architecture For</h3>
             <p className="text-xl md:text-2xl text-slate-200 font-light">
               {product.targetAudience}
             </p>
          </div>
        </section>

        {/* --- DEEP DIVE FEATURES --- */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Technical Breakdown</h2>
              <p className="text-slate-400">Everything included in your deployment.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                  <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${product.accentColor} group-hover:scale-110 transition-transform`}>
                    {/* Cloning icon to ensure correct sizing */}
                    {React.cloneElement(feature.icon, { size: 24 })}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SPECS LIST & CALL TO ACTION --- */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             {/* Decorative glow inside card */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.heroGradient.replace('to-transparent', 'to-slate-900')}`} />
            
            <h2 className="text-2xl font-bold text-white mb-8">Detailed Specifications</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-left max-w-2xl mx-auto mb-12">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-3">
                   <CheckCircle2 size={18} className={product.accentColor} />
                   <span className="text-slate-300">{spec}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#0a0a0f] rounded-2xl border border-white/5 inline-block w-full max-w-md">
              <p className="text-slate-400 text-sm mb-4">Ready to start your project?</p>
              <button 
                onClick={() => navigate('/configure')}
                className={`w-full py-3 rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 ${product.buttonGradient}`}
              >
                Proceed to Configuration <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-white/5">
        <p>© 2026 Hotfixers. Building the future.</p>
      </footer>
    </div>
  );
};

export default ProductDetailsPage;