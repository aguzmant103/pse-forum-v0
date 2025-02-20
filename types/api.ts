export interface ApiResponse<T = unknown> {
  data?: T
  error?: {
    code: string
    message: string
  }
  pagination?: {
    page: number
    limit: number
    total: number
    hasMore: boolean
  }
}

export class ApiError extends Error {
  constructor(
    public code: string,
    public message: string,
    public statusCode: number = 400
  ) {
    super(message)
  }
} 