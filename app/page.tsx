import Link from 'next/link'
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, Smartphone, CheckCircle } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

interface Product {
  id: string
  name: string
  price: number
  color: string
  image?: string
}

const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number)
}

export default async function Home() {
  const supabase = await createClient()

  // Ambil data produk dari Supabase
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* 1. Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-white hover:opacity-90 transition">
            <span className="p-2 bg-indigo-600 rounded-xl text-white">📱</span>
            <span>iStore</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="#katalog" className="text-sm font-medium text-slate-400 hover:text-white transition">
              Katalog
            </Link>
            <Link
              href="/login"
              className="px-5 py-2.5 text-sm font-semibold bg-indigo-600 text-white rounded-full hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 transition active:scale-95"
            >
              Masuk
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative px-6 py-28 text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-widest">
          <CheckCircle size={14} /> Garansi Resmi Indonesia (iBox / GDN)
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
          Temukan iPhone Impianmu dengan <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Penawaran Terbaik</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unit 100% original, garansi terjamin, dan pengiriman kilat terasuransi ke seluruh wilayah Indonesia.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#katalog"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/25 flex items-center gap-3 hover:translate-y-[-2px]"
          >
            Jelajahi Produk <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* 3. Catalog Section */}
      <section id="katalog" className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-white">Katalog Utama</h2>
            <p className="text-sm text-slate-400 mt-1">Pilih iPhone favoritmu dengan jaminan harga terbaik.</p>
          </div>
        </div>

        {(!products || products.length === 0) ? (
          <div className="text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/40">
            <Smartphone size={48} className="mx-auto text-slate-600 mb-4" />
            <p className="text-slate-400 font-medium">Belum ada produk di database Supabase.</p>
            <p className="text-xs text-slate-600 mt-1">Tambahkan data melalui SQL Editor di Supabase Dashboard.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item: Product) => (
              <div
                key={item.id}
                className="group relative bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
              >
                <div>
                  <div className="h-48 bg-gradient-to-b from-slate-950/80 to-slate-900/80 rounded-2xl flex items-center justify-center text-7xl mb-6 border border-slate-800/50 group-hover:scale-105 transition duration-300">
                    {item.image || '📱'}
                  </div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{item.color}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{item.name}</h3>
                  <p className="text-slate-400 text-lg font-semibold mt-2">{formatRupiah(item.price)}</p>
                </div>

                <button className="mt-8 w-full py-3.5 bg-slate-800 hover:bg-indigo-600 text-white rounded-2xl font-semibold transition duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-600/30">
                  <ShoppingBag size={18} /> Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Value Proposition */}
      <section className="px-6 py-16 border-t border-slate-800/80 bg-slate-900/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <div className="p-3 bg-indigo-950 border border-indigo-800 rounded-xl text-indigo-400">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Garansi 100% Original</h4>
              <p className="text-sm text-slate-400 mt-1">Jaminan uang kembali penuh jika barang terbukti tidak ori atau bermasalah.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <div className="p-3 bg-indigo-950 border border-indigo-800 rounded-xl text-indigo-400">
              <Truck size={28} />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">Pengiriman Aman & Cepat</h4>
              <p className="text-sm text-slate-400 mt-1">Dilengkapi asuransi pengiriman full coverage ke seluruh pelosok Indonesia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-slate-800/80 text-center py-8 text-xs text-slate-500">
        © {new Date().getFullYear()} iStore. All rights reserved.
      </footer>
    </div>
  )
}