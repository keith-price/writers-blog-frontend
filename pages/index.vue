<script setup>
const { fetchLatestPost, fetchFeaturedPosts } = useUtils();
const latestData = fetchLatestPost();
const featureData = fetchFeaturedPosts();
</script>

<template>
  <div>
    <main>
      <ul v-if="latestData">
        <li v-bind:key="latestData._id">
          <h2 class="text-3xl font-bold">Latest Post</h2>
          <h3>{{ latestData.title }}</h3>
          <!-- <SanityContent :blocks="latestData.content" /> -->
          <img
            :src="$urlFor(latestData.coverImage).size(1280, 720).url()"
            :alt="latestData.title"
            height="720"
            width="1280"
            loading="lazy"
          />
          <p>{{ latestData.excerpt }}</p>
          <p>{{ latestData.author }}</p>
          <p>{{ latestData.category }}</p>
        </li>
      </ul>
      <p v-else>No Latest posts to show</p>

      <!-- <h2>Featured Posts</h2>
      <ul v-if="featureData?.length">
        <li v-for="post in featureData" v-bind:key="featureData._id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <p>{{ post.author }}</p>
          <p>{{ post.category }}</p>
          <SanityContent :blocks="post.content" />
          <img
            :src="$urlFor(post.coverImage).size(1280, 720).url()"
            :alt="post.title"
            height="720"
            width="1280"
            loading="lazy"
          />
        </li>
      </ul>

      <p v-else>No featured posts to show</p> -->
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
