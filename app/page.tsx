import Link from 'next/link'
import { ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'

interface Product {
  id: string
  name: string
  price: number
  color: string
  image: string
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

  // Ambil data dari tabel products di Supabase
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <div className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span>iStore</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#featured" className="text-sm text-slate-400 hover:text-white transition">
            Katalog
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium bg-slate-100 text-slate-900 rounded-full hover:bg-slate-200 transition"
          >
            Masuk
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-24 text-center max-w-4xl mx-auto space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 border border-indigo-800 px-3 py-1 rounded-full">
          Garansi Resmi Indonesia
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Temukan iPhone Impianmu dengan Penawaran Terbaik.
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Unit 100% original, garansi terjamin, dan pengiriman cepat ke seluruh Indonesia.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#featured"
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 transition flex items-center gap-2"
          >
            Lihat Produk <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-white">Produk Unggulan</h2>
        
        {(!products || products.length === 0) ? (
          <div className="text-center py-12 text-slate-500">
            Belum ada produk yang tersedia di database Supabase.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((item: Product) => (
              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition"
              >
                <div className="text-6xl text-center py-10 bg-slate-950/50 rounded-xl mb-4">
                  {item.image || '📱'}
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-indigo-400 font-medium">{item.color}</p>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-slate-400 text-sm">{formatRupiah(item.price)}</p>
                </div>
                <button className="mt-6 w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-medium transition flex items-center justify-center gap-2">
                  <ShoppingBag size={16} /> Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Value Proposition */}
      <section className="px-8 py-12 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <ShieldCheck size={32} className="text-indigo-400" />
            <div>
              <h4 className="font-semibold text-white">Garansi 100% Original</h4>
              <p className="text-sm text-slate-400">Jaminan uang kembali jika barang terbukti tidak ori.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Truck size={32} className="text-indigo-400" />
            <div>
              <h4 className="font-semibold text-white">Pengiriman Aman & Cepat</h4>
              <p className="text-sm text-slate-400">Dilengkapi asuransi pengiriman ke seluruh daerah.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}