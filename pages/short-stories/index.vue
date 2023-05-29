<script setup>
const { fetchByCategory } = useUtils();
const data = fetchByCategory("short story");
</script>

<template>
  <div>
    <header>Writers' Group Short Stories</header>
    <main>
      <h2>Short Stories</h2>
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
            class="mb-2 rounded shadow-md"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<style lang="css" scoped></style>
