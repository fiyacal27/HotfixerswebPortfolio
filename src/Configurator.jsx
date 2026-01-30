import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import HotfixersLogo from './assets/HotfixersLogo.png';
import { 
  Check, Plus, Server, Shield, Search, 
  Layout, ArrowRight, Zap, Palette, X, ReceiptText, 
  ShieldCheck, Smartphone, CheckCircle2
} from 'lucide-react';

const packages = [
  { id: "brand-starter", title: "Brand Starter", description: "Professional digital portfolio & contact system.", basePrice: 8000 },
  { id: "product-showcase", title: "Product Showcase", description: "Dynamic catalog with marketplace integration.", basePrice: 18000 },
  { id: "full-ecommerce", title: "Full E-Commerce", description: "End-to-end sales, inventory, and payments.", basePrice: 40000 }
];

const frontendAddons = [
  { id: 'logo', title: "Logo & Brand Identity", price: 4500, description: "Professional logo, palette, and brand guidelines.", icon: Palette },
  { id: 'content', title: "Pro Copywriting", price: 5000, description: "High-converting copy for up to 5 core pages.", icon: Layout },
  { id: 'anim', title: "UI Animation Pack", price: 2500, description: "Premium micro-interactions and scroll effects.", icon: Zap }
];

const backendAddons = [
  { id: 'seo', title: "Enhanced SEO Setup", price: 3500, description: "Advanced keyword indexing and meta-optimization.", icon: Search },
  { id: 'deploy', title: "Deployment & Domain", price: 2000, description: "Server setup, SSL security, and DNS mapping.", icon: Server },
  { id: 'security', title: "Security Hardening", price: 3000, description: "WAF setup, spam protection, and rate limiting.", icon: Shield }
];

const masterAddons = [...frontendAddons, ...backendAddons];

export default function PackageBuilder() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPkgId, setSelectedPkgId] = useState(location.state?.selectedPkgId || "brand-starter");
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const activePackage = packages.find(p => p.id === selectedPkgId);
  const activeAddonsList = masterAddons.filter(a => selectedAddons.includes(a.id));
  const addonsTotal = activeAddonsList.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = activePackage.basePrice + addonsTotal;

  const formatPrice = (num) => "₱" + num.toLocaleString();

  const AddonCard = ({ item }) => {
    const isAdded = selectedAddons.includes(item.id);
    return (
      <div
        onClick={() => toggleAddon(item.id)}
        className={`group flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all mb-3 ${
          isAdded 
          ? 'bg-emerald-500/10 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
          : 'bg-[#12121a] border-white/5 hover:border-white/20'
        }`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-lg transition-colors ${isAdded ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-500'}`}>
            <item.icon size={24} />
          </div>
          <div>
            <h4 className={`text-lg font-bold ${isAdded ? 'text-white' : 'text-slate-300'}`}>{item.title}</h4>
            <p className="text-sm text-slate-500 mt-0.5">{item.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span className={`font-mono text-base font-bold ${isAdded ? 'text-emerald-400' : 'text-slate-400'}`}>+{formatPrice(item.price)}</span>
          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            isAdded ? 'bg-emerald-500 border-emerald-500' : 'border-slate-700'
          }`}>
            {isAdded ? <Check size={14} className="text-black stroke-[3px]" /> : <Plus size={14} className="text-slate-600" />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-200 font-sans pb-24 selection:bg-indigo-500/30">
      
      {/* HEADER (Unchanged as requested) */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-lg">
                            <img 
                                src={HotfixersLogo} 
                                alt="Hotfixers Logo" 
                                className="w-6 h-6 object-contain" 
                            />
                        </div>
            <span className="font-bold text-lg tracking-tight">
              Hotfixers <span className="text-slate-500 font-normal px-2">/</span> <span className="text-indigo-400">Build Package</span>
            </span>
          </div>
          <button 
            onClick={() => navigate('/')} 
            className="hidden md:block px-6 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all active:scale-95"
          >
            Back to Home
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN - Improved Structure & Alignment */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* SECTION 1 */}
          <section>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-indigo-500 text-white text-xs font-black px-2 py-0.5 rounded">STEP 01</span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Select Foundation</h2>
              </div>
              <p className="text-slate-400 text-lg">Choose the core architecture of your digital product.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPkgId(pkg.id)}
                  className={`relative cursor-pointer p-5 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between h-full ${
                    selectedPkgId === pkg.id 
                    ? 'bg-indigo-500/10 border-indigo-500 shadow-[0_0_25px_rgba(99,102,241,0.15)] ring-1 ring-indigo-400/50' 
                    : 'bg-[#12121a] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${selectedPkgId === pkg.id ? 'text-white' : 'text-slate-300'}`}>{pkg.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{pkg.description}</p>
                  </div>
                  <div className={`text-xl font-mono font-black ${selectedPkgId === pkg.id ? 'text-indigo-400' : 'text-slate-400'}`}>
                    {formatPrice(pkg.basePrice)}
                  </div>
                  {selectedPkgId === pkg.id && (
                    <div className="absolute top-4 right-4 bg-indigo-500 rounded-full p-1">
                      <Check size={12} className="text-white stroke-[4px]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 2 */}
          <section>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-indigo-500 text-white text-xs font-black px-2 py-0.5 rounded">STEP 02</span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Visual & Identity</h2>
              </div>
              <p className="text-slate-400 text-lg">Enhance the aesthetic and brand impact.</p>
            </div>
            <div className="space-y-4">
              {frontendAddons.map(addon => <AddonCard key={addon.id} item={addon} />)}
            </div>
          </section>

          {/* SECTION 3 */}
          <section>
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-indigo-500 text-white text-xs font-black px-2 py-0.5 rounded">STEP 03</span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight">Performance & Security</h2>
              </div>
              <p className="text-slate-400 text-lg">Technical upgrades for scale and safety.</p>
            </div>
            <div className="space-y-4">
              {backendAddons.map(addon => <AddonCard key={addon.id} item={addon} />)}
            </div>
          </section>
        </div>

        {/* RIGHT SUMMARY (Improved Emphasis) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 bg-[#0d0d12] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-[50px] rounded-full -mr-16 -mt-16"></div>
            
            <h3 className="text-white text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-wider">
              <ReceiptText size={24} className="text-indigo-400" /> 
              Summary
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-center text-lg">
                <span className="text-slate-400 font-medium">Foundation</span>
                <span className="text-white font-bold">{activePackage.title}</span>
              </div>
              
              <div className="pt-6 border-t border-white/5 space-y-4">
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.25em]">Add-ons ({selectedAddons.length})</p>
                {activeAddonsList.length === 0 ? (
                  <p className="text-sm text-slate-600 italic">No extras selected</p>
                ) : (
                  activeAddonsList.map(a => (
                    <div key={a.id} className="flex justify-between text-[15px] animate-in slide-in-from-left-2 fade-in duration-300">
                      <span className="text-slate-400 font-medium">{a.title}</span>
                      <span className="text-slate-200 font-mono">+{formatPrice(a.price)}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-slate-500 text-sm font-black uppercase tracking-widest pb-1">Total Investment</span>
                <span className="text-4xl font-black text-white tracking-tighter leading-none">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <button 
              onClick={() => setIsReceiptOpen(true)}
              className="group w-full py-5 bg-emerald-500/10 hover:bg-emerald-500/20 border-2 border-emerald-500/30 hover:border-emerald-500 text-emerald-400 font-black text-lg uppercase tracking-widest rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(16,185,129,0.1)] active:scale-[0.97]"
            >
              Review & Confirm
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL (Logic and structure kept as requested) --- */}
      {isReceiptOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" onClick={() => !isSubmitted && setIsReceiptOpen(false)}></div>
          
          <div className="relative bg-[#0d0d12] border border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            {!isSubmitted ? (
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-emerald-500 font-black uppercase tracking-[0.2em] text-xs mb-1">Service Quotation</h3>
                    <p className="text-slate-600 text-[10px] font-mono tracking-tighter uppercase">ID: HF-{Math.floor(Math.random() * 90000) + 10000}</p>
                  </div>
                  <button onClick={() => setIsReceiptOpen(false)} className="text-slate-500 hover:text-white transition-colors bg-white/5 p-1 rounded-lg"><X size={20}/></button>
                </div>

                <div className="space-y-5">
                  <div className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-white text-xl font-black">{activePackage.title}</span>
                    <span className="text-slate-300 font-mono text-xl">{formatPrice(activePackage.basePrice)}</span>
                  </div>

                  <div className="space-y-3">
                    {activeAddonsList.map(addon => (
                      <div key={addon.id} className="flex justify-between text-sm">
                        <span className="text-slate-400 flex items-center gap-2"><Check size={14} className="text-emerald-500" /> {addon.title}</span>
                        <span className="text-slate-500 font-mono">{formatPrice(addon.price)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Method</p>
                      <p className="text-sm text-slate-200 flex items-center gap-2 font-bold"><Smartphone size={14} className="text-indigo-400" /> GCash</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-2">Terms</p>
                      <p className="text-sm text-slate-200 font-bold italic">50% DP</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 py-3 bg-emerald-500/5 rounded-lg border border-emerald-500/10">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span className="text-[10px] text-emerald-500/80 font-black uppercase tracking-widest">SSL Encrypted Selection</span>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex justify-between items-center mb-8 px-1">
                    <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Total</span>
                    <span className="text-4xl font-black text-white tracking-tighter leading-none">{formatPrice(grandTotal)}</span>
                  </div>
                  
                  <button 
                    onClick={() => setIsSubmitted(true)}
                    className="w-full py-5 bg-emerald-500/10 hover:bg-emerald-500/20 border-2 border-emerald-500/30 hover:border-emerald-500 text-emerald-400 font-black uppercase tracking-[0.2em] text-sm rounded-2xl transition-all duration-300 active:scale-[0.95]"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center space-y-8 animate-in zoom-in fade-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">Order Sent</h2>
                  <p className="text-slate-500 text-base leading-relaxed px-4">
                    Our developers have received your package. We will reach out to you shortly to finalize the details and get started on your project.
                  </p>
                </div>
                <button 
                  onClick={() => { setIsReceiptOpen(false); setIsSubmitted(false); }} 
                  className="w-full py-4 bg-white/5 hover:bg-white/10 border-2 border-white/10 hover:border-white/30 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}