import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Code } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();

    const packages = [
        {
            id: "brand-starter",
            title: "Brand Starter",
            description: "For small businesses, cafes, or service providers looking to establish a professional digital presence.",
            price: "₱8,000 – ₱15,000",
            features: ["Single or Multi-page Layout", "Responsive Design", "Brand Gallery", "Business Info Section", "Contact Form", "Social Media Links"],
            highlight: false,
            topChoice: true
        },
        {
            id: "product-showcase",
            title: "Product Showcase",
            description: "For retailers and resellers who sell on e-commerce websites but want a branded website to organize their catalog.",
            price: "₱18,000 – ₱30,000",
            features: ["Everything in 'Brand Starter'", "Product Catalog", "Smart Redirect to e-commerce listing", "Promotional Banners"],
            highlight: true,
            topChoice: false
        },
        {
            id: "full-ecommerce",
            title: "Full E-Commerce Suite",
            description: "For established brands ready to own their sales channel, manage inventory directly, and avoid marketplace fees.",
            price: "₱40,000 – ₱75,000+",
            features: ["Everything in 'Product Showcase'", "Integrated Shopping Cart", "Payment Gateway Setup", "Inventory Management", "Customer Accounts", "Admin Dashboard", "Security & SSL"],
            highlight: false,
            topChoice: false
        }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#020205] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
            
            {/* --- ENHANCED DYNAMIC BACKGROUND --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Faster, more vibrant blobs */}
                <div 
                    className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/30 blur-[80px] animate-pulse" 
                    style={{ animationDuration: '4s' }}
                ></div>
                <div 
                    className="absolute top-[10%] -right-[5%] w-[45%] h-[45%] rounded-full bg-emerald-500/20 blur-[80px] animate-bounce" 
                    style={{ animationDuration: '6s' }}
                ></div>
                <div 
                    className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px] animate-pulse" 
                    style={{ animationDuration: '5s' }}
                ></div>
                
                {/* Added a subtle grid overlay for technical feel */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-500/20 border border-indigo-400/30 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                            <Code size={20} className="text-indigo-400" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold text-xl from-white via-white to-indigo-300">
                            Hotfixers
                        </span>
                    </div>
                    <button className="hidden md:block px-6 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Contact Us
                    </button>
                </div>
            </header>

            {/* --- CONTENT CONTAINER --- */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <main className="py-24 md:py-32 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-indigo-500/10 border border-indigo-500/40 text-xs font-bold text-indigo-300 backdrop-blur-md shadow-lg shadow-indigo-500/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                        </span>
                        Accepting new clients
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-slate-600">
                        Future-proof <br /> digital experiences.
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
                        We architect <span className="text-indigo-400 font-semibold italic">minimalistic, high-performance</span> web solutions designed to scale with your business.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-[2rem] border backdrop-blur-3xl transition-all duration-500 group h-full flex flex-col ${
                                    pkg.highlight 
                                    ? 'bg-indigo-900/10 border-indigo-500/50 hover:border-indigo-400 hover:-translate-y-3 shadow-[0_30px_60px_rgba(79,70,229,0.2)]' 
                                    : pkg.topChoice 
                                    ? 'bg-emerald-900/10 border-emerald-500/50 hover:border-emerald-400 hover:-translate-y-3 shadow-[0_30px_60px_rgba(16,185,129,0.2)]' 
                                    : 'bg-white/[0.04] border-white/10 hover:bg-white/[0.08] hover:-translate-y-2'
                                }`}>
                                
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[11px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                                        Recommended
                                    </div>
                                )}

                                {pkg.topChoice && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[11px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                                        Best Value
                                    </div>
                                )}

                                <div className="space-y-6 flex flex-col flex-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{pkg.title}</h3>
                                        <p className="text-sm text-slate-400 mt-2 leading-relaxed min-h-[40px]">{pkg.description}</p>
                                    </div>

                                    <div className="py-4 border-b border-white/5">
                                        <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">{pkg.price}</span>
                                    </div>

                                    <ul className="space-y-4 pt-2">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-300">
                                                <div className={`p-1 rounded-lg mt-0.5 ${pkg.highlight ? 'bg-indigo-500/20' : pkg.topChoice ? 'bg-emerald-500/20' : 'bg-white/10'}`}>
                                                    <Check className={`w-3 h-3 shrink-0 stroke-[3px] ${pkg.highlight ? 'text-indigo-400' : pkg.topChoice ? 'text-emerald-400' : 'text-slate-400'}`} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-8 flex flex-col gap-4">
                                        <button onClick={() => navigate('/configure')} className={`w-full py-4 rounded-2xl text-[15px] font-black transition-all flex items-center justify-center gap-2 active:scale-95 ${
                                            pkg.highlight 
                                            ? 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-lg shadow-indigo-500/30' 
                                            : pkg.topChoice 
                                            ? 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30' 
                                            : 'bg-white text-black hover:bg-slate-200 shadow-lg shadow-white/5'
                                        }`}>
                                            Build Package <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                        </button>

                                        <button onClick={() => navigate(`/details/${pkg.id}`)} className="w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/20 active:scale-95">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}