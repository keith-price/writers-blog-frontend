<script setup>
const route = useRoute();
const slug = route.params.slug;
const query = groq`*[_type == "post" && slug.current == "${slug}"] [0]`;
// fetch the post that matches the slug url
const { data: singlePost } = await useSanityQuery(query);
</script>

<template>
  <!-- button to navigate back to previous page -->
  <button @click="$router.back()">BACK</button>
  <p class="text-2xl font-bold mb-2">{{ singlePost.title }}</p>
  <img
    :src="$urlFor(singlePost.coverImage).size(1280, 720).url()"
    :alt="singlePost.title"
    height="720"
    width="1280"
    loading="lazy"
    class="mb-2"
  />
  <SanityContent :blocks="singlePost.content" />
  <p class="text-sm font-semibold text-justify lg:text-base">
    {{ singlePost.author }}
  </p>
  <p class="text-sm text-justify italic lg:text-base">
    {{ `# ${singlePost.category}` }}
  </p>
</template>

