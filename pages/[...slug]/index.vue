<script setup>
import BackArrow from "~/components/Icons/BackArrow.vue";

const route = useRoute();
const slug = route.params.slug;
const query = groq`*[_type == "post" && slug.current == "${slug}"] [0]`;
// fetch the post that matches the slug url
const { data: singlePost } = await useSanityQuery(query);
</script>

<template>
  <main class="text-slate-900 mt-5 mb-20 lg:mt-20 lg:mb-20">
    <!-- button to navigate back to previous page -->
    <div
      class="title-back-container flex justify-between align-middle mt-5 mb-5 lg:mt-20"
    >
      <p class="text-2xl font-bold">{{ singlePost.title }}</p>
      <button
        class="px-4 h-8 rounded-md text-white bg-slate-100 hover:bg-slate-200 transition-all"
        @click="$router.back()"
      >
        <BackArrow class="text-2xl text-slate-900" />
      </button>
    </div>
    <img
      :src="$urlFor(singlePost.coverImage).size(1280, 720).url()"
      :alt="singlePost.title"
      height="720"
      width="1280"
      loading="lazy"
      class="mb-2 rounded shadow-md"
    />
    <SanityContent :blocks="singlePost.content" />
    <p class="text-sm font-semibold text-justify lg:text-base">
      {{ singlePost.author }}
    </p>
    <p class="text-sm text-justify italic lg:text-base">
      {{ `# ${singlePost.category}` }}
    </p>
  </main>
</template>
