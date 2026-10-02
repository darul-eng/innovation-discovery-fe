import { createBrowserRouter } from 'react-router'
import { AppLayout } from './components/AppLayout'
import { ProtectedRoute } from './features/auth/ProtectedRoute'
import { AdminInnovationsPage } from './pages/AdminInnovationsPage'
import { DashboardPage } from './pages/DashboardPage'
import { ForbiddenPage, NotFoundPage } from './pages/ErrorPages'
import { ExecutivePage } from './pages/ExecutivePage'
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { NewInnovationPage } from './pages/NewInnovationPage'
import { TrackPage } from './pages/TrackPage'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      // Public
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'track/:trackingId?', element: <TrackPage /> },

      // Any logged-in user
      {
        element: <ProtectedRoute />,
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'innovations/new', element: <NewInnovationPage /> },
        ],
      },

      // Analyst & Admin
      {
        element: <ProtectedRoute roles={['ANALYST', 'ADMIN']} />,
        children: [{ path: 'admin/innovations', element: <AdminInnovationsPage /> }],
      },

      // Admin / Executive
      {
        element: <ProtectedRoute roles={['ADMIN']} />,
        children: [{ path: 'executive', element: <ExecutivePage /> }],
      },

      { path: '403', element: <ForbiddenPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
