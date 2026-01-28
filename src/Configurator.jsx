import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code } from 'lucide-react';
import { Check, Plus, Server, Shield, Search, Layout, ArrowRight, Zap, Palette } from 'lucide-react';

// --- DATA: PACKAGES ---
const packages = [
  {
    id: 1,
    title: "Brand Starter",
    description: "Digital portfolio with gallery & contact form.",
    basePrice: 8000,
    features: ["Responsive Design", "Contact Form", "Basic SEO"],
  },
  {
    id: 2,
    title: "Product Showcase",
    description: "Catalog with redirect links to Shopee/Lazada.",
    basePrice: 18000,
    features: ["Everything in Starter", "Product Catalog", "Marketplace Redirects"],
  },
  {
    id: 3,
    title: "Full E-Commerce",
    description: "Direct sales, inventory, and payment gateways.",
    basePrice: 40000,
    features: ["Everything in Showcase", "Shopping Cart", "Payment Gateways", "Admin Dashboard"],
  }
];

// --- DATA: FRONTEND MODULES ---
const frontendAddons = [
  {
    id: 'logo',
    title: "Logo & Brand Identity",
    price: 4500,
    description: "Creation of a professional logo, color palette, and basic brand guidelines.",
    icon: Palette
  },
  {
    id: 'content',
    title: "Pro Copywriting (5 Pages)",
    price: 5000,
    description: "Professional writing for your Home, About, and Service pages to convert visitors.",
    icon: Layout
  },
  {
    id: 'anim',
    title: "UI Animation Pack",
    price: 2500,
    description: "Smooth scroll effects, hover states, and micro-interactions for a premium feel.",
    icon: Zap
  }
];

// --- DATA: BACKEND MODULES ---
const backendAddons = [
  {
    id: 'seo',
    title: "Enhanced SEO Setup",
    price: 3500,
    description: "Advanced keyword research, meta tags, and sitemap indexing.",
    icon: Search
  },
  {
    id: 'deploy',
    title: "Deployment & Domain Setup",
    price: 2000,
    description: "Server setup, DNS configuration, and SSL installation.",
    icon: Server
  },
  {
    id: 'security',
    title: "Security Hardening",
    price: 3000,
    description: "Advanced firewall setup, spam protection, and login rate limiting.",
    icon: Shield
  }
];

// Combine them for easier math calculation later
const masterAddons = [...frontendAddons, ...backendAddons];

export default function Configurator() {
  const navigate = useNavigate();

  const [selectedPkgId, setSelectedPkgId] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculations
  const activePackage = packages.find(p => p.id === selectedPkgId);
  // We look through masterAddons to find the price of selected items
  const activeAddonsList = masterAddons.filter(a => selectedAddons.includes(a.id));
  const addonsTotal = activeAddonsList.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = activePackage.basePrice + addonsTotal;

  const formatPrice = (num) => "₱" + num.toLocaleString();

  // Helper Component for Rendering Add-ons to avoid code duplication
  const AddonCard = ({ item }) => {
    const isAdded = selectedAddons.includes(item.id);
    return (
      <div
        onClick={() => toggleAddon(item.id)}
        className={`
          group flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all mb-4
          ${isAdded
            ? 'bg-emerald-900/10 border-emerald-500/50'
            : 'bg-white/5 border-white/10 hover:border-white/20'
          }
        `}
      >
        <div className="flex items-start gap-4">
          <div className={`
            p-3 rounded-lg transition-colors
            ${isAdded ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400 group-hover:text-white'}
          `}>
            <item.icon size={20} />
          </div>
          <div>
            <h4 className={`font-medium ${isAdded ? 'text-white' : 'text-slate-300'}`}>
              {item.title}
            </h4>
            <p className="text-sm text-slate-500 mt-0.5 max-w-md hidden sm:block">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-slate-300 font-mono text-sm">+{formatPrice(item.price)}</span>
          <div className={`
            w-6 h-6 rounded-full border flex items-center justify-center transition-all
            ${isAdded
              ? 'bg-emerald-500 border-emerald-500'
              : 'border-slate-600 group-hover:border-slate-400'
            }
          `}>
            {isAdded ? <Check size={14} className="text-black" /> : <Plus size={14} className="text-slate-400" />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div variant="grid" className="min-h-screen bg-[#0a0a0f] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] opacity-40"></div>
      </div>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg backdrop-blur-md">
              <Code size={20} className="text-indigo-400" />
            </div>
            <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold text-xl from-white to-slate-400">
              Hotfixers <span className="text-indigo-400 font-normal text-sm">/ Configure</span>
            </span>
          </div>
          <button onClick={() => navigate('/')} className="hidden md:block px-5 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors backdrop-blur-sm">
            Back to Home
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* --- LEFT COLUMN: SELECTIONS --- */}
        <div className="lg:col-span-8 space-y-12">

          {/* STEP 1: FOUNDATION */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-2">1. Foundation</h2>
            <p className="text-slate-400 mb-6">Select the base architecture for your project.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {packages.map((pkg) => {
                const isSelected = selectedPkgId === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`
                      cursor-pointer relative p-5 rounded-xl border transition-all duration-200
                      ${isSelected
                        ? 'bg-indigo-900/20 border-indigo-500 ring-1 ring-indigo-500'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }
                    `}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`font-semibold ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {pkg.title}
                      </h3>
                      {isSelected && <div className="bg-indigo-500 rounded-full p-1"><Check size={12} className="text-white" /></div>}
                    </div>
                    <p className="text-sm text-slate-400 mb-4 h-10 leading-snug">{pkg.description}</p>
                    <div className="text-indigo-300 font-mono text-lg">
                      {formatPrice(pkg.basePrice)}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* STEP 2: FRONTEND MODULES */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-2">2. Frontend Modules Upgrade</h2>
            <p className="text-slate-400 mb-6">Enhance the visual experience and brand identity.</p>
            <div>
              {frontendAddons.map((addon) => (
                <AddonCard key={addon.id} item={addon} />
              ))}
            </div>
          </section>

          {/* STEP 3: BACKEND MODULES */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-2">3. Backend Modules Upgrade</h2>
            <p className="text-slate-400 mb-6">Strengthen performance, security, and search ranking.</p>
            <div>
              {backendAddons.map((addon) => (
                <AddonCard key={addon.id} item={addon} />
              ))}
            </div>
          </section>

        </div>

        {/* --- RIGHT COLUMN: STICKY SUMMARY --- */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-6">Configuration Summary</h3>

            {/* Selected Package */}
            <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/5">
              <div>
                <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-1">Base</p>
                <p className="text-slate-200 font-medium">{activePackage.title}</p>
              </div>
              <span className="text-slate-200">{formatPrice(activePackage.basePrice)}</span>
            </div>

            {/* Selected Add-ons */}
            <div className="mb-6 space-y-3">
              <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-1">Add-ons</p>
              {activeAddonsList.length === 0 && (
                <p className="text-sm text-slate-500 italic">No add-ons selected</p>
              )}
              {activeAddonsList.map((addon) => (
                <div key={addon.id} className="flex justify-between text-sm">
                  <span className="text-slate-400">{addon.title}</span>
                  <span className="text-slate-300">+{formatPrice(addon.price)}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="pt-4 border-t border-white/10 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-slate-400">Total Estimate</span>
                <span className="text-3xl font-bold text-white tracking-tight">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
              Review Order <ArrowRight size={18} />
            </button>
            <p className="text-xs text-slate-500 text-center mt-4">
              This is an estimate. Final quote may vary based on specific requirements.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}