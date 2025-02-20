# REST API Endpoints for Forum Application

## Overview
This document outlines REST API endpoints for the forum backend, integrating with the PostgreSQL schema.

## Endpoints

### Users
- **GET /api/users/:id**
  - **Description:** Fetch user details (username, public_key).
  - **Response:** `{ id, username, public_key, created_at }`

### Communities
- **GET /api/communities**
  - **Description:** List all communities.
  - **Response:** `[{ id, name, description, is_gated, created_at }]`
- **GET /api/communities/:id**
  - **Description:** Fetch a single community.
  - **Response:** `{ id, name, description, is_gated, created_at }`

### Posts
- **GET /api/posts**
  - **Query Params:** `community_id`, `visibility`
  - **Description:** List posts filtered by community or visibility.
  - **Response:** `[{ id, title, content, author_id, community_id, ... }]`
- **POST /api/posts**
  - **Body:** `{ title, content, community_id, credentials?, visibility?, image_urls? }`
  - **Description:** Create a new post (status defaults to 'draft').
  - **Response:** `{ id, ... }`

### Comments
- **GET /api/posts/:postId/comments**
  - **Description:** Fetch comments for a post.
  - **Response:** `[{ id, content, author_id, parent_comment_id, ... }]`
- **POST /api/posts/:postId/comments**
  - **Body:** `{ content, parent_comment_id? }`
  - **Description:** Add a comment (enforce 1-level nesting).

### Reactions
- **POST /api/reactions**
  - **Body:** `{ target_id, target_type, reaction_type }`
  - **Description:** Increment reaction count (e.g., upvote, emoji).
  - **Response:** `{ success: true }`

## Next Steps
- Add authentication middleware using EdDSA keys.
- Implement rate limiting for reactions.