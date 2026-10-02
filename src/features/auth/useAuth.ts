import { useQuery } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { api } from '../../lib/api'
import type { ApiResponse, User } from '../../types'

/** Current logged-in user, or `null` when there is no valid session. */
export function useAuth() {
  const { data: user, isPending } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      try {
        const res = await api.get<ApiResponse<User>>('/auth/me')
        return res.data.data
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 401) return null
        throw error
      }
    },
    retry: false,
    staleTime: 5 * 60_000,
  })

  return { user: user ?? null, isLoading: isPending }
}
