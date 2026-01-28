import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Code, Send, Mail, MessageSquare } from 'lucide-react';

export default function Home() {
    const navigate = useNavigate();
    const contactRef = useRef(null);
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Future-proof digital experiences.";

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            setDisplayedText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(typingInterval);
        }, 80);
        return () => clearInterval(typingInterval);
    }, []);

    const scrollToContact = () => {
        // block: 'center' ensures the element is vertically centered in the viewport
        contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

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
            
            {/* DYNAMIC BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/30 blur-[80px] animate-pulse"></div>
                <div className="absolute top-[10%] -right-[5%] w-[45%] h-[45%] rounded-full bg-emerald-500/20 blur-[80px] animate-bounce" style={{ animationDuration: '6s' }}></div>
                <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px] animate-pulse"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            </div>

            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-indigo-500/10 border border-indigo-400/20 rounded-lg">
                            <img 
                                src="src/assets/HotfixersLogo.png" 
                                alt="Hotfixers Logo" 
                                className="w-6 h-6 object-contain" 
                            />
                        </div>
                        <span className="font-bold text-lg tracking-tight">
                      Hotfixers      
                     </span>
                    </div>
                    <button 
                        onClick={scrollToContact}
                        className="px-6 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all active:scale-95"
                    >
                        Contact Us
                    </button>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                <main className="py-24 md:py-32 text-center">
                    
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-indigo-500/10 border border-indigo-500/40 text-xs font-bold text-indigo-300 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                        </span>
                        Accepting new clients
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-slate-600 min-h-[1.2em]">
                        {displayedText}
                        <span className="text-indigo-400 animate-pulse">|</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
                        We architect <span className="text-indigo-400 font-semibold italic">minimalistic, high-performance</span> web solutions.
                    </p>

                    {/* PACKAGES GRID - Added mb-64 for significant spacing before Contact */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-64">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-[2rem] border backdrop-blur-3xl transition-all duration-500 group h-full flex flex-col hover:-translate-y-3 hover:shadow-2xl ${
                                    pkg.highlight 
                                    ? 'border-indigo-500/30' 
                                    : pkg.topChoice 
                                    ? 'border-emerald-500/30' 
                                    : 'border-white/10'
                                } bg-white/[0.03]`}
                            >
                                {pkg.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[11px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        Recommended
                                    </div>
                                )}
                                {pkg.topChoice && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[11px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        Best Value
                                    </div>
                                )}

                                <div className="space-y-6 flex flex-col flex-1">
                                    <div className="text-center pt-6"> 
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{pkg.title}</h3>
                                        <p className="text-sm text-slate-400 mt-2 leading-relaxed min-h-[40px] italic">{pkg.description}</p>
                                    </div>

                                    <div className="py-4 border-b border-white/5 text-center">
                                        <span className="text-[34px] font-medium text-white tracking-tight">{pkg.price}</span>
                                    </div>

                                    <ul className="space-y-4 pt-2">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-300 italic">
                                                <div className={`p-1 rounded-lg mt-0.5 ${pkg.highlight ? 'bg-indigo-500/20' : pkg.topChoice ? 'bg-emerald-500/20' : 'bg-white/10'}`}>
                                                    <Check className={`w-3 h-3 shrink-0 stroke-[3px] ${pkg.highlight ? 'text-indigo-400' : pkg.topChoice ? 'text-emerald-400' : 'text-slate-400'}`} />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-8 flex flex-col gap-4">
                                        <button 
                                            onClick={() => navigate('/configure', { state: { selectedPkgId: pkg.id } })} 
                                            className={`w-full py-4 rounded-2xl text-[15px] font-black transition-all flex items-center justify-center gap-2 active:scale-95 border-2 ${
                                                pkg.id === 'full-ecommerce' 
                                                ? 'border-blue-500 text-blue-400 hover:bg-blue-700 hover:border-blue-700 hover:text-white hover:shadow-[0_0_20px_rgba(29,78,216,0.3)]' 
                                                : pkg.highlight
                                                ? 'border-indigo-500 text-indigo-400 hover:bg-indigo-700 hover:border-indigo-700 hover:text-white hover:shadow-[0_0_20px_rgba(67,56,202,0.3)]'
                                                : pkg.topChoice
                                                ? 'border-emerald-500 text-emerald-400 hover:bg-emerald-700 hover:border-emerald-700 hover:text-white hover:shadow-[0_0_20px_rgba(4,120,87,0.3)]'
                                                : 'border-white/20 text-white hover:bg-slate-800 hover:border-slate-800'
                                            }`}
                                        >
                                            Build Package <ArrowRight size={18} />
                                        </button>
                                        <button onClick={() => navigate(`/details/${pkg.id}`)} className="w-full py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/20 active:scale-95">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CONTACT US SECTION - Added scroll-mt-24 to offset the sticky header */}
                    <section ref={contactRef} className="py-20 mb-40 scroll-mt-24">
                        <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/10 rounded-[3rem] overflow-hidden backdrop-blur-3xl shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-10 md:p-16 text-left space-y-8 bg-gradient-to-br from-indigo-500/10 to-transparent border-r border-white/5">
                                    <div className="space-y-4">
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">Let’s build something great.</h2>
                                        <p className="text-slate-400 text-lg font-light leading-relaxed">
                                            Have a specific vision? Send us a message and we'll help you architect the perfect solution.
                                        </p>
                                    </div>

                                    <div className="space-y-6 pt-4">
                                        <div className="flex items-center gap-4 group cursor-pointer">
                                            <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
                                                <Mail size={20} className="text-indigo-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Us</p>
                                                <p className="text-white font-medium">hello@hotfixersph.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group cursor-pointer">
                                            <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-emerald-500/20 transition-colors">
                                                <MessageSquare size={20} className="text-emerald-400" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Facebook</p>
                                                <p className="text-white font-medium">Hotfixers PH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-10 md:p-16">
                                    <form className="space-y-5 text-left">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                                <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                                <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                                            <textarea rows="5" placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-indigo-500/50 transition-all text-white resize-none"></textarea>
                                        </div>
                                        <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 active:scale-[0.98] mt-4">
                                            Send Message <Send size={18} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* FOOTER */}
            <footer className="relative z-10 border-t border-white/5 py-12 bg-black/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 opacity-50">
                        <Code size={18} />
                        <span className="font-bold tracking-tight">Hotfixers</span>
                    </div>
                    <p className="text-slate-500 text-sm">© 2026 Hotfixers Digital. All rights reserved.</p>
                    <div className="flex gap-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}