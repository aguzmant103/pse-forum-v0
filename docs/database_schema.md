# Database Schema for Forum Application

## Overview
This document defines the PostgreSQL schema for a forum application built with Next.js. It supports gated communities, posts with privacy features, 1-level nested comments, and reactions (emojis, upvotes, downvotes) as counts.

## Tables

### Users
- **Purpose:** Stores user data with EdDSA keypairs for authentication/privacy.
- **Fields:**
  - `id`: SERIAL PRIMARY KEY
  - `username`: VARCHAR(50), NOT NULL, UNIQUE
  - `public_key`: TEXT, NOT NULL, Description: Public EdDSA key
  - `private_key`: TEXT, Description: Private EdDSA key (optional, consider secure storage)
  - `created_at`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP
- **Indexes:** UNIQUE on `username`

### Communities
- **Purpose:** Groups posts into gated or open communities.
- **Fields:**
  - `id`: SERIAL PRIMARY KEY
  - `name`: VARCHAR(100), NOT NULL, UNIQUE
  - `description`: TEXT
  - `is_gated`: BOOLEAN, DEFAULT TRUE, Description: True if community is restricted
  - `created_at`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP

### Posts
- **Purpose:** Stores forum posts with metadata and privacy settings.
- **Fields:**
  - `id`: SERIAL PRIMARY KEY
  - `author_id`: INT, FOREIGN KEY REFERENCES users(id)
  - `community_id`: INT, FOREIGN KEY REFERENCES communities(id)
  - `title`: VARCHAR(255), NOT NULL
  - `content`: TEXT, NOT NULL
  - `credentials`: TEXT, Description: Optional author credentials (e.g., "PhD")
  - `status`: VARCHAR(20), DEFAULT 'draft', Description: e.g., 'draft', 'published'
  - `visibility`: VARCHAR(20), DEFAULT 'public', Description: e.g., 'public', 'private', 'community'
  - `date_posted`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP
  - `image_urls`: TEXT[], Description: Array of image URLs
  - `created_at`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP
- **Indexes:** `community_id`

### Comments
- **Purpose:** Stores comments with 1-level nesting under posts.
- **Fields:**
  - `id`: SERIAL PRIMARY KEY
  - `post_id`: INT, FOREIGN KEY REFERENCES posts(id)
  - `author_id`: INT, FOREIGN KEY REFERENCES users(id)
  - `content`: TEXT, NOT NULL
  - `date_posted`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP
  - `parent_comment_id`: INT, FOREIGN KEY REFERENCES comments(id), Description: Null for top-level, non-null for replies
- **Constraints:** CHECK to enforce 1-level nesting (replies only to top-level comments)
- **Indexes:** `post_id`

### Reactions
- **Purpose:** Tracks reaction counts (emojis, upvotes, downvotes) for posts and comments.
- **Fields:**
  - `id`: SERIAL PRIMARY KEY
  - `target_id`: INT, NOT NULL, Description: ID of post or comment
  - `target_type`: VARCHAR(20), NOT NULL, CHECK IN ('post', 'comment')
  - `reaction_type`: VARCHAR(20), NOT NULL, Description: e.g., 'upvote', 'downvote', '👍'
  - `count`: INT, DEFAULT 0, Description: Aggregated count of reactions
  - `created_at`: TIMESTAMP, DEFAULT CURRENT_TIMESTAMP
- **Constraints:** UNIQUE(target_id, target_type, reaction_type)
- **Indexes:** `(target_id, target_type)`

## Setup Instructions
1. Install PostgreSQL and create a database: `forum_db`.
2. Run the above SQL to create tables and indexes.
3. Use an ORM like Prisma or a library like `pg` in Next.js for queries.

## Next Steps
- Define REST API endpoints (see `backend/api_endpoints.md`).
- Implement privacy checks based on `visibility` and `is_gated`.
- Add frontend screens for posts, comments, and reactions.