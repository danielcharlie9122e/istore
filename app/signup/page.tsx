'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { UserPlus, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function SignUpPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const router = useRouter()
  const supabase = createClient()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg(null)

    // Mengirim pendaftaran akun ke Supabase Auth beserta metadata nama
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      setErrorMsg(error.message)
      setLoading(false)
    } else {
      setLoading(false)
      // Jika email sudah pernah terdaftar
      if (data?.user?.identities?.length === 0) {
        setErrorMsg('Email ini sudah terdaftar. Silakan gunakan email lain atau login.')
      } else {
        setSuccess(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 shadow-xl">
        
        {/* Navigasi Kembali */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition"
        >
          <ArrowLeft size={14} /> Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="text-2xl font-bold text-white inline-block tracking-tight">
            iStore
          </Link>
          <h1 className="text-xl font-bold text-slate-200">Buat Akun Baru</h1>
          <p className="text-sm text-slate-400">Daftar untuk mulai berbelanja iPhone impianmu</p>
        </div>

        {/* Tampilan Sukses */}
        {success ? (
          <div className="p-6 bg-emerald-950/40 border border-emerald-800 rounded-2xl text-center space-y-3">
            <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
            <h3 className="text-base font-semibold text-emerald-200">Pendaftaran Berhasil!</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Akun kamu telah terdaftar. Silakan cek inbox email <span className="font-medium text-white">{email}</span> untuk verifikasi atau langsung login jika konfirmasi email dinonaktifkan.
            </p>
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-medium transition"
              >
                Lanjut ke Halaman Login
              </Link>
            </div>
          </div>
        ) : (
          /* Form Pendaftaran */
          <form onSubmit={handleSignUp} className="space-y-4">
            {errorMsg && (
              <div className="p-3 bg-red-950/50 border border-red-800 text-red-300 text-xs rounded-xl">
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Nama Lengkap</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Masukkan nama lengkap"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500 transition text-white placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500 transition text-white placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Password</label>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm focus:outline-none focus:border-indigo-500 transition text-white placeholder:text-slate-600"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-medium transition disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                'Memproses...'
              ) : (
                <>
                  <UserPlus size={16} /> Daftar Sekarang
                </>
              )}
            </button>
          </form>
        )}

        {/* Link ke Login */}
        {!success && (
          <p className="text-center text-xs text-slate-400 pt-2">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-indigo-400 hover:underline font-medium">
              Masuk di sini
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}