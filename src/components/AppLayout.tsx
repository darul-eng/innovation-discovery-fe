import { Lightbulb } from 'lucide-react'
import { NavLink, Outlet } from 'react-router'
import { useAuth } from '../features/auth/useAuth'
import type { UserRole } from '../types'

const NAV_ITEMS: { to: string; label: string; roles?: UserRole[] }[] = [
  { to: '/track', label: 'Lacak Usulan' },
  { to: '/dashboard', label: 'Usulan Saya', roles: ['USER', 'ANALYST', 'ADMIN'] },
  { to: '/admin/innovations', label: 'Kelola Usulan', roles: ['ANALYST', 'ADMIN'] },
  { to: '/executive', label: 'Dasbor Eksekutif', roles: ['ADMIN'] },
]

export function AppLayout() {
  const { user } = useAuth()
  const visibleItems = NAV_ITEMS.filter(
    (item) => !item.roles || (user && item.roles.includes(user.role)),
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
          <NavLink to="/" className="flex items-center gap-2 font-semibold">
            <Lightbulb className="size-5 text-red-700" />
            Innovation Discovery
          </NavLink>
          <nav className="flex flex-1 gap-4 text-sm">
            {visibleItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'font-medium text-red-700' : 'text-slate-600 hover:text-slate-900'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {user ? (
            <span className="text-sm text-slate-600">{user.name}</span>
          ) : (
            <NavLink to="/login" className="text-sm font-medium text-red-700">
              Masuk
            </NavLink>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}
