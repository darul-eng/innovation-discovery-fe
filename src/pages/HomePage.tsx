import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'
import { api } from '../lib/api'

export function HomePage() {
  const health = useQuery({
    queryKey: ['health'],
    queryFn: async () => (await api.get<{ status: string }>('/health')).data,
  })

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Portal Innovation Discovery</h1>
      <p className="max-w-2xl text-slate-600">
        Ajukan, lacak, dan dokumentasikan usulan transformasi digital unit kerja Universitas
        Hasanuddin.
      </p>
      <div className="flex gap-3">
        <Link to="/innovations/new" className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800">
          Ajukan Usulan
        </Link>
        <Link to="/track" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-white">
          Lacak Usulan
        </Link>
      </div>
      <p className="text-xs text-slate-400">
        Status API:{' '}
        {health.isPending ? 'memeriksa…' : health.isSuccess ? 'terhubung' : 'tidak terhubung'}
      </p>
    </section>
  )
}
