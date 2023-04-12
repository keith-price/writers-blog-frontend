<script setup>
const { fetchLatestPost, fetchFeaturedPosts } = useUtils();
const latestData = fetchLatestPost();
const featureData = fetchFeaturedPosts();
</script>

<template>
  <div>
    <header>Writers' Blog Home</header>
    <v-btn>Hello Baltimore</v-btn>
    <main>
      <h2>Latest Post</h2>
      <ul v-if="latestData">
        <li v-bind:key="latestData._id">
          <h3>{{ latestData.title }}</h3>
          <p>{{ latestData.excerpt }}</p>
          <p>{{ latestData.author }}</p>
          <p>{{ latestData.category }}</p>
          <SanityContent :blocks="latestData.content" />
          <img
            :src="$urlFor(latestData.coverImage).size(426).url()"
            :alt="latestData.title"
            height="426"
            width="426"
            loading="lazy"
          />
        </li>
      </ul>

      <p v-else>No Latest posts to show</p>
      <h2>Latest Data</h2>
      <div v-if="latestData">
        <pre v-if="latestData"
          >{{ JSON.stringify(latestData, null, 2) }}
        </pre>
      </div>
      <div v-else>
        <h2>No latest data was fetched!</h2>
        <p>Latest will show up if Sanity is configured correctly</p>
      </div>

      <h2>Featured Posts</h2>
      <ul v-if="featureData?.length">
        <li v-for="post in featureData" v-bind:key="featureData._id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <p>{{ post.author }}</p>
          <p>{{ post.category }}</p>
          <SanityContent :blocks="post.content" />
          <img
            :src="$urlFor(post.coverImage).size(426).url()"
            :alt="post.title"
            height="426"
            width="426"
            loading="lazy"
          />
        </li>
      </ul>

      <p v-else>No featured posts to show</p>
      <h2>Featured Data</h2>
      <div v-if="featureData">
        <pre v-if="featureData"
          >{{ JSON.stringify(featureData, null, 2) }}
        </pre>
      </div>
      <div v-else>
        <h2>No featured data was fetched!</h2>
        <p>Featured data will show up if Sanity is configured correctly</p>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
