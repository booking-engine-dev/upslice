import Link from 'next/link'
import { ArrowRight, BarChart3, Globe, Megaphone, Cpu, Sparkles, ShieldCheck, CheckCircle2, PhoneCall, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-gray-100 flex flex-col relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              UPSLICE
            </span>
            <span className="text-xs uppercase px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium tracking-wider">
              Agency
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="#results" className="hover:text-blue-400 transition-colors">Results</Link>
            <Link href="/admin" className="text-xs text-gray-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-lg">Admin Login</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link 
              href="#contact" 
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:opacity-95 transition-opacity" />
              <span className="relative block px-5 py-2.5 rounded-[11px] bg-[#090a0f] text-white group-hover:bg-opacity-0 transition-all duration-300 flex items-center gap-2">
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 max-w-7xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs md:text-sm font-medium mb-8 shadow-lg shadow-blue-500/5 animate-pulse">
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen SEO, GEO, Paid Media & Growth Marketing</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight mb-8">
          Drive Digital Growth with <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Elite Precision</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Upslice transforms ambitious brands across Bangladesh and global markets into undisputed category leaders through data-driven omnichannel strategies, advanced AI search optimization (GEO/AEO), and high-ROI acquisition campaigns.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center gap-3 group"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-gray-200 font-semibold text-base hover:border-blue-500/50 transition-all flex items-center justify-center gap-2"
          >
            Explore Service Catalog
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5 text-gray-400 text-sm">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span>Full-Funnel Strategy</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-400" />
            <span>Generative AI (GEO/AEO)</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <span>Data-Driven Attribution</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-400" />
            <span>Dedicated Growth Team</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Comprehensive Growth Solutions</h3>
          <p className="text-gray-400 text-lg">Engineered for businesses looking to scale aggressively across local and international markets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">SEO, GEO & AEO</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Traditional technical SEO paired with cutting-edge Generative Engine Optimization to ensure your brand dominates AI search results, ChatGPT answers, and Google SERPs.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex items-center gap-2">✓ Technical Audits & Core Vitals</li>
              <li className="flex items-center gap-2">✓ AI Search & Answer Optimization</li>
              <li className="flex items-center gap-2">✓ Schema Markup & Entity Authority</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Megaphone className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Paid Media & AI Bidding</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Maximize ROAS with high-converting multi-channel paid acquisition across Google Ads, Meta, TikTok, and Programmatic networks backed by smart bidding algorithms.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex items-center gap-2">✓ Google Performance Max & Search</li>
              <li className="flex items-center gap-2">✓ Paid Social (Meta, TikTok, LinkedIn)</li>
              <li className="flex items-center gap-2">✓ Creative Testing & Scaling</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Analytics & Data Foundation</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Implement bulletproof server-side tracking, GA4, Conversion APIs, and custom BI dashboards to eliminate data loss and make precision marketing decisions.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex items-center gap-2">✓ GA4 & Server-Side Tagging</li>
              <li className="flex items-center gap-2">✓ Conversions API Setup</li>
              <li className="flex items-center gap-2">✓ Multi-Touch Attribution</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact / Consultation Booking Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto relative z-10 w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-blue-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">Get Started Today</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Book Your Free Growth Consultation</h3>
            <p className="text-gray-400">Fill out the project inquiry below or request a strategy call. Our experts will analyze your market position and reach out within 24 hours.</p>
          </div>

          {/* Contact Form Placeholder Form (Will connect to Supabase in Phase 6) */}
          <form onSubmit={(e) => { e.preventDefault(); alert("Contact form functionality is being wired to Supabase in upcoming steps!"); }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@company.com" 
                  className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company / Brand Name</label>
                <input 
                  type="text" 
                  placeholder="Upslice Inc." 
                  className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors">
                  <option>SEO, GEO & AEO Strategy</option>
                  <option>Paid Media & AI Bidding</option>
                  <option>Analytics & Tagging Foundation</option>
                  <option>Full Omnichannel Growth Package</option>
                  <option>Fractional CMO & Consulting</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Details & Goals *</label>
              <textarea 
                rows={4}
                required
                placeholder="Tell us about your business, current marketing challenges, and growth targets..."
                className="w-full px-4 py-3 rounded-xl bg-[#090a0f] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
            >
              <span>Submit Project Inquiry & Book Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 py-12 px-6 bg-[#06070a] text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white tracking-tight">UPSLICE</span>
            <span className="text-xs text-gray-500">— Drive Digital Growth</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-white transition-colors">Admin Portal</Link>
          </div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Upslice Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
