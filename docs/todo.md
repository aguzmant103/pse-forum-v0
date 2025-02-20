# Project TODO List

## Authentication & Authorization
- [ ] Implement EdDSA key-based authentication middleware
- [ ] Add user session management
- [ ] Add authorization checks for protected routes
- [ ] Update API endpoints to use authenticated user ID instead of temp IDs

## Database & Schema
- [ ] Create reactions table in Prisma schema
- [ ] Add indexes for common queries
- [ ] Add proper constraints for comment nesting (max 1 level)
- [ ] Consider soft delete for posts/comments

## API Endpoints
- [ ] Implement rate limiting for reactions
- [ ] Add validation for image URLs in posts
- [ ] Add filtering for posts by date range
- [ ] Add sorting options for post listings
- [ ] Add bulk operations for reactions

## Performance & Security
- [ ] Add request validation using Zod or similar
- [ ] Implement proper error logging
- [ ] Add API request throttling
- [ ] Add response caching where appropriate
- [ ] Add security headers

## Testing
- [ ] Set up testing environment
- [ ] Write unit tests for API endpoints
- [ ] Write integration tests for database operations
- [ ] Add API endpoint documentation tests

## Documentation
- [ ] Add API documentation using Swagger/OpenAPI
- [ ] Document authentication flow
- [ ] Add database schema diagrams
- [ ] Document rate limiting rules

## Monitoring & Logging
- [ ] Set up error tracking
- [ ] Add request logging
- [ ] Add performance monitoring
- [ ] Set up alerts for API errors

## Future Considerations
- [ ] Consider implementing WebSocket for real-time features
- [ ] Plan for data archival strategy
- [ ] Consider implementing search functionality
- [ ] Plan for scaling strategies 