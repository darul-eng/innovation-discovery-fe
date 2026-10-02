import { Navigate, Outlet, useLocation } from 'react-router'
import type { UserRole } from '../../types'
import { useAuth } from './useAuth'

interface ProtectedRouteProps {
  /** Roles allowed to access the route. Omit to allow any logged-in user. */
  roles?: UserRole[]
}

export function ProtectedRoute({ roles }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <p className="p-6 text-sm text-slate-500">Memuat sesi…</p>
  }
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/403" replace />
  }
  return <Outlet />
}
