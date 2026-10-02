import { Link } from 'react-router'

function ErrorPage({ code, message }: { code: string; message: string }) {
  return (
    <section className="py-16 text-center">
      <p className="text-5xl font-bold text-slate-300">{code}</p>
      <p className="mt-3 text-slate-600">{message}</p>
      <Link to="/" className="mt-6 inline-block text-sm font-medium text-red-700">
        Kembali ke beranda
      </Link>
    </section>
  )
}

export function ForbiddenPage() {
  return <ErrorPage code="403" message="Anda tidak memiliki akses ke halaman ini." />
}

export function NotFoundPage() {
  return <ErrorPage code="404" message="Halaman tidak ditemukan." />
}
