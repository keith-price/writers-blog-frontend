<script setup>
const { fetchAllPosts } = useUtils();
const posts = fetchAllPosts();
</script>

<template>
  <div>
    <main>
      <h2>All Posts</h2>
      <button @click="$router.back">Back</button>
      <ul
        v-if="posts?.length"
        class="grid grid-cols-1 gap-y-8 gap-x-4 lg:grid-cols-2 lg:gap-8"
      >
        <li v-for="post in posts" v-bind:key="post._id">
          <NuxtLink :to="post.slug.current">
            <p class="text-1xl font-bold mb-2">{{ post.title }}</p>
            <img
              :src="$urlFor(post.coverImage).size(1280, 720).url()"
              :alt="post.title"
              loading="lazy"
              class="mb-2"
            />
            <p class="text-sm text-justify mb-2 lg:text-base">
              {{ post.excerpt }}
            </p>
          </NuxtLink>
          <p class="text-sm font-semibold text-justify lg:text-base">
            {{ post.author }}
          </p>
          <p class="text-sm text-justify italic lg:text-base">
            {{ `# ${post.category}` }}
          </p>
        </li>
      </ul>

      <p v-else>No Posts to show</p>
    </main>
  </div>
</template>
