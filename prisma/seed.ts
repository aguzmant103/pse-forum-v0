import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create test user
  const user = await prisma.user.create({
    data: {
      username: "testuser",
      publicKey: "test-public-key-123",
    },
  })

  // Create PSE community
  const community = await prisma.community.create({
    data: {
      name: "PSE",
      description: "Privacy & Scaling Explorations",
      isGated: false,
    },
  })

  // Create some test posts
  await prisma.post.create({
    data: {
      title: "First Test Post",
      content: "This is our first test post content",
      authorId: user.id,
      communityId: community.id,
    },
  })

  console.log({ user, community })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 