import { NextResponse } from 'next/server'
import { ApiError, ApiResponse } from '@/types/api'

export async function handleApiRoute<T>(
  handler: () => Promise<T>,
  options?: {
    pagination?: {
      page: number
      limit: number
      total: number
    }
  }
): Promise<NextResponse> {
  try {
    const data = await handler()
    const response: ApiResponse<T> = {
      data,
      ...(options?.pagination && {
        pagination: {
          ...options.pagination,
          hasMore: options.pagination.page * options.pagination.limit < options.pagination.total
        }
      })
    }
    return NextResponse.json(response)
  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: { code: error.code, message: error.message } },
        { status: error.statusCode }
      )
    }
    return NextResponse.json(
      { error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' } },
      { status: 500 }
    )
  }
} 