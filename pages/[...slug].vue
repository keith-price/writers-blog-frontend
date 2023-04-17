<script setup>
const { fetchSinglePost } = useUtils();
const route = useRoute();
const slug = route.params.slug[0];
const singlePost = fetchSinglePost(slug);
</script>

<template>
  <p>{{ singlePost[0].title }}</p>
  <p>{{ singlePost[0].excerpt }}</p>
</template>
