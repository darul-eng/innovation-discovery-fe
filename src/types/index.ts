export type UserRole = 'USER' | 'ANALYST' | 'ADMIN'

export type InnovationStatus =
  | 'SUBMITTED'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'IN_DEVELOPMENT'
  | 'COMPLETED'
  | 'REJECTED'

export type InnovationCategory =
  | 'Layanan Akademik'
  | 'Tata Kelola/SDM'
  | 'Keuangan'
  | 'AI/Infrastruktur'

export interface User {
  id: string
  nip: string
  name: string
  email: string
  unitKerja: string
  role: UserRole
}

/** Standard envelope returned by every backend endpoint. */
export interface ApiResponse<T> {
  statusCode: number
  message?: string
  data: T
}
