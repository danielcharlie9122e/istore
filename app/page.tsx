'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowUpRight, 
  ShoppingBag, 
  Menu, 
  X, 
  ShieldCheck, 
  Truck, 
  Sparkles 
} from 'lucide-react'

// Dynamic Categories/Filters
const categories = ['Pro Series', 'Base Model', 'Mini & SE', 'Accessories']

const featuredProducts = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    subtitle: 'Titanium. So Strong. So Light.',
    price: 'Rp 24.999.000',
    originalPrice: 'Rp 25.999.000',
    badge: 'Best Seller',
    tag: 'A17 Pro Chip',
    color: 'Natural Titanium',
    bgCard: 'bg-white',
    image: '📱',
  },
  {
    id: '2',
    name: 'iPhone 15',
    subtitle: 'Dynamic Island. 48MP Camera.',
    price: 'Rp 14.999.000',
    originalPrice: 'Rp 16.499.000',
    badge: '10% OFF',
    tag: 'USB-C',
    color: 'Blue Titanium',
    bgCard: 'bg-orange-50/40',
    image: '📱',
  },
  {
    id: '3',
    name: 'iPhone 14',
    subtitle: 'As powerful as always.',
    price: 'Rp 11.999.000',
    badge: 'Popular Choice',
    tag: 'All-Day Battery',
    color: 'Midnight Black',
    bgCard: 'bg-white',
    image: '📱',
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Pro Series')

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* 1. NAVBAR SECTION */}
      <header className="sticky top-0 z-50 bg-[#f8fafc]/85 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-black tracking-widest text-slate-900 flex items-center gap-1">
            <span>iSTORE</span>
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/" className="text-slate-900 font-semibold hover:text-orange-600 transition">Beranda</Link>
            <Link href="#katalog" className="hover:text-slate-900 transition">Katalog</Link>
            <Link href="#fitur" className="hover:text-slate-900 transition">Keunggulan</Link>
            <Link href="#promo" className="hover:text-slate-900 transition">Promo</Link>
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs tracking-wide hover:bg-orange-500 transition-all flex items-center gap-2 group shadow-md shadow-slate-900/10"
            >
              Order Now
              <span className="w-5 h-5 rounded-full bg-white text-slate-950 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center transition">
                <ArrowUpRight size={12} />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-slate-700 hover:text-slate-950"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#f8fafc] border-b border-slate-200 px-6 py-6 space-y-4">
            <Link href="/" className="block text-slate-900 font-medium" onClick={() => setMobileMenuOpen(false)}>Beranda</Link>
            <Link href="#katalog" className="block text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Katalog</Link>
            <Link href="#fitur" className="block text-slate-600 hover:text-slate-900" onClick={() => setMobileMenuOpen(false)}>Keunggulan</Link>
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Link 
                href="/login" 
                className="w-full text-center py-3 bg-orange-500 text-white rounded-full font-semibold text-sm shadow-md shadow-orange-500/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Masuk / Daftar
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-white via-[#f1f5f9] to-[#e2e8f0] border border-slate-200/90 p-6 sm:p-10 lg:p-14 overflow-hidden min-h-[480px] sm:min-h-[520px] flex flex-col justify-between shadow-xl shadow-slate-200/50">
          
          {/* Background Big Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
            <span className="text-[120px] sm:text-[220px] lg:text-[300px] font-black tracking-widest text-slate-900">iPHONE</span>
          </div>

          {/* Top Info Tag & Heading */}
          <div className="relative z-10 max-w-xl space-y-4">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-serif text-slate-900 font-bold leading-tight">
              Designed For Every Moment & Power User.
            </p>
            <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed">
              Nikmati performa chip A17 Pro terdepan, bodi Titanium ringan, dan sistem kamera tercanggih yang pernah dibuat oleh Apple.
            </p>
            
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition transform hover:scale-105 shadow-xl shadow-orange-500/25"
              >
                Beli Sekarang
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>
          </div>

          {/* Floating Hero Product Asset Mockup */}
          <div className="absolute right-4 bottom-4 sm:right-12 sm:bottom-8 lg:right-24 lg:bottom-10 z-10 pointer-events-none transform rotate-[-6deg] hover:rotate-0 transition duration-500">
            <div className="w-48 h-72 sm:w-64 sm:h-96 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-[40px] border-4 border-slate-700/60 p-4 shadow-2xl flex flex-col justify-between items-center text-center text-white relative">
              <div className="w-16 h-3 bg-slate-950 rounded-full mb-4"></div>
              <div className="text-7xl sm:text-9xl my-auto">📱</div>
              <div className="w-full bg-slate-950/80 backdrop-blur-md rounded-2xl p-3 text-left border border-slate-800">
                <span className="text-[10px] text-orange-400 uppercase tracking-wider font-bold">Flagship 2026</span>
                <p className="text-xs font-bold text-white">iPhone 15 Pro Max</p>
                <p className="text-[11px] text-slate-300">Rp 24.999.000</p>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="relative z-10 pt-8 flex flex-wrap items-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white font-bold shadow-md'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-slate-950 border border-slate-300/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Floating Badges */}
          <div className="hidden lg:flex absolute bottom-8 right-8 z-20 items-center gap-3 bg-white border border-slate-200/90 p-3 rounded-2xl shadow-xl backdrop-blur-md">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">100%</div>
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">Ori</div>
            </div>
            <div className="text-left pr-2">
              <p className="text-xs font-bold text-slate-900">Garansi Resmi</p>
              <p className="text-[10px] text-slate-500">iBox / GDN Indonesia</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BRAND / TRUSTED PARTNERS BANNER */}
      <section className="py-6 border-y border-slate-200/80 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-slate-500 text-xs sm:text-sm font-bold tracking-wider uppercase">
          <span>✦ Official Reseller</span>
          <span>✦ Garansi 1 Tahun</span>
          <span>✦ Bebas Bunga 0%</span>
          <span>✦ Pengiriman Instan</span>
        </div>
      </section>

      {/* 4. FEATURED / KATALOG SECTION */}
      <section id="katalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Pilihan Terpopuler</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 mt-1">Most Popular Choices</h2>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xs">
            Dapatkan lini iPhone terbaru dengan garansi iBox resmi dan kemudahan cicilan.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-[28px] border border-slate-200/90 p-6 flex flex-col justify-between hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-xl group ${product.bgCard}`}
            >
              <div>
                {/* Badge & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {product.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{product.tag}</span>
                </div>

                {/* Product Image Area */}
                <div className="w-full h-52 bg-slate-100 rounded-2xl flex items-center justify-center text-8xl mb-6 border border-slate-200/60 group-hover:scale-105 transition duration-300">
                  {product.image}
                </div>

                {/* Title & Info */}
                <span className="text-xs text-slate-400 font-medium">{product.color}</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">{product.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>
              </div>

              {/* Price & Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-lg font-extrabold text-slate-900">{product.price}</p>
                  {product.originalPrice && (
                    <p className="text-xs text-slate-400 line-through">{product.originalPrice}</p>
                  )}
                </div>

                <Link
                  href="/login"
                  className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-orange-500/20"
                >
                  <ShoppingBag size={14} /> Beli
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ABOUT / FEATURED BANNER SECTION */}
      <section id="fitur" className="py-16 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Teknologi Terdepan</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight">
              Crafted For Modern Experience & Performance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Di iSTORE, kami percaya bahwa membeli gadget impian harus mudah, aman, dan memuaskan. Setiap unit iPhone yang kami jual terjamin 100% original dengan garansi purna jual resmi.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <ShieldCheck className="text-orange-500 mb-2" size={24} />
                <h4 className="text-sm font-bold text-slate-900">Garansi Resmi</h4>
                <p className="text-xs text-slate-500 mt-1">Jaminan penggantian unit baru jika cacat pabrik.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <Truck className="text-orange-500 mb-2" size={24} />
                <h4 className="text-sm font-bold text-slate-900">Pengiriman Aman</h4>
                <p className="text-xs text-slate-500 mt-1">Dilengkapi asuransi penuh ke seluruh Indonesia.</p>
              </div>
            </div>
          </div>

          {/* Right Bento Box */}
          <div className="relative bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between space-y-8 shadow-lg shadow-slate-200/50">
            <div className="flex items-center justify-between">
              <span className="text-4xl font-serif font-black text-orange-500">6 in 1</span>
              <span className="text-xs bg-slate-100 text-slate-700 font-semibold px-3 py-1 rounded-full border border-slate-200">Pro Guarantee</span>
            </div>
            
            <p className="text-xl font-medium text-slate-800 leading-snug">
              Dapatkan bundling charger original 20W, tempered glass premium, dan case pelindung dalam setiap pembelian seri iPhone Pro.
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <Sparkles className="text-amber-500" size={20} />
              <p className="text-xs text-slate-500">Penawaran terbatas hingga akhir bulan ini.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. BIG FOOTER SECTION */}
      <footer className="bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0] border-t border-slate-200/80 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Col 1: Brand Info */}
            <div className="space-y-4">
              <span className="text-2xl font-black tracking-widest text-slate-900">iSTORE</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                Penyedia iPhone resmi dan berkualitas tinggi dengan layanan terbaik untuk memenuhi kebutuhan digital kamu.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Navigasi</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><Link href="/" className="hover:text-slate-950">Beranda</Link></li>
                <li><Link href="#katalog" className="hover:text-slate-950">Katalog iPhone</Link></li>
                <li><Link href="#fitur" className="hover:text-slate-950">Layanan Garansi</Link></li>
              </ul>
            </div>

            {/* Col 3: Support */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Bantuan</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><a href="#" className="hover:text-slate-950">Customer Care</a></li>
                <li><a href="#" className="hover:text-slate-950">Kebijakan Pengembalian</a></li>
                <li><a href="#" className="hover:text-slate-950">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            {/* Col 4: Newsletter Box */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Newsletter</h4>
              <p className="text-xs text-slate-500">Dapatkan promo eksklusif dan update stok iPhone terbaru.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email kamu"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-orange-500 shadow-sm"
                />
                <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold transition shadow-md shadow-orange-500/20">
                  Kirim
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Huge Typography */}
          <div className="pt-8 border-t border-slate-300/60 text-center">
            <h1 className="text-6xl sm:text-9xl md:text-[140px] font-serif font-black tracking-widest text-slate-300/80 select-none">
              iSTORE
            </h1>
            <p className="text-[11px] text-slate-500 mt-2">
              © {new Date().getFullYear()} iSTORE Indonesia. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}