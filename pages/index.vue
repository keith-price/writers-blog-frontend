<script setup>
const query = groq`*[_type == 'post']`;
const { data } = useSanityQuery(query);
</script>

<template>
  <div>
    <header>Writers' Blog</header>
    <main>
      <h2>Posts</h2>
      <ul v-if="data?.length">
        <li v-for="post in data" v-bind:key="data._id">
          <h3>{{ post.title }}</h3>
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
