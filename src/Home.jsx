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
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-slate-100 font-sans selection:text-white">
            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Left Side: Logo + Text Grouped Together */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg backdrop-blur-md">
                            <Code size={20} className="text-indigo-400" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r font-bold text-xl from-white to-slate-400">
                            Hotfixers
                        </span>
                    </div>
                    {/* Right Side: Button */}
                    <button className="hidden md:block px-5 py-2 text-sm font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors backdrop-blur-sm">
                        Contact Us
                    </button>
                </div>
            </header>
            {/* --- CONTENT CONTAINER --- */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <main className="py-20 md:py-32 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-xs font-medium text-indigo-200 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        Accepting new clients
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-indigo-200/50 drop-shadow-sm">
                        Future-proof <br /> digital experiences.
                    </h1>

                    <p className="text-lg text-indigo-400 max-w-2xl mx-auto mb-16 leading-relaxed">
                        We architect minimalistic, high-performance web solutions designed to scale with your business.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-2xl border backdrop-blur-md transition-all duration-500 group h-full flex flex-col ${pkg.highlight ? 'bg-indigo-950/30 border-indigo-500/30 hover:bg-indigo-900/40 hover:-translate-y-2 shadow-2xl shadow-indigo-900/20' : pkg.topChoice ? 'bg-emerald-950/30 border-emerald-500/30 hover:bg-emerald-900/40 hover:-translate-y-2 shadow-2xl shadow-emerald-900/20' : 'bg-slate-900/20 border-white/5 hover:bg-slate-800/30 hover:border-white/10 hover:-translate-y-1'}`}>
                                {/* Highlight Badge (Purple) */}
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        Recommended
                                    </div>
                                )}

                                {/* Top Choice Badge (Green) */}
                                {pkg.topChoice && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        Best Value
                                    </div>
                                )}

                                <div className="space-y-4 flex flex-col flex-1">
                                    <div>
                                        <h3 className="text-lg font-medium text-slate-100">{pkg.title}</h3>
                                        <p className="text-sm text-slate-400 mt-1">{pkg.description}</p>
                                    </div>

                                    <div className="py-4 border-b border-white/5">
                                        <span className="text-3xl font-bold text-white tracking-tight">{pkg.price}</span>
                                    </div>

                                    <ul className="space-y-3 pt-2">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                                                {/* Checkmark Color Logic */}
                                                <Check className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlight ? 'text-indigo-400' : pkg.topChoice ? 'text-emerald-400' : 'text-slate-500'}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button Wrapper: mt-auto pushes this div to the bottom */}
                                    <div className="mt-auto pt-6 flex flex-col gap-4">
                                        <button onClick={() => navigate('/configure')} className={`w-full py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${pkg.highlight ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-900/40' : pkg.topChoice ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-900/40' : 'bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-white/10'}`}>
                                            Configure <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                        </button>

                                        <button onClick={() => navigate(`/details/${pkg.id}`)} className={`w-full py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/5 hover:border-white/10'}`}>
                                            More Details <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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