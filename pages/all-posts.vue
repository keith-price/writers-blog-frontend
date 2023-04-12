<script setup>
const { fetchAllPosts } = useUtils();
const data = fetchAllPosts();
console.log(data);
</script>

<template>
  <div>
    <header>Writers' Blog All Posts</header>
    <main>
      <h2>All Posts</h2>
      <ul v-if="data?.length">
        <li v-for="post in data" v-bind:key="data._id">
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

      <p v-else>No posts to show</p>
      <h2>Fetched Data</h2>
      <div v-if="data">
        <pre v-if="data"
          >{{ JSON.stringify(data, null, 2) }}
        </pre>
      </div>
      <div v-else>
        <h2>No data was fetched!</h2>
        <p>Data will show up if Sanity is configured correctly</p>
      </div>
    </main>
  </div>
</template>

<style lang="css" scoped></style>
