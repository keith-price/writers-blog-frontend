<script setup>
import BackArrow from "~/components/Icons/BackArrow.vue";

const { fetchByCategory } = useUtils();
const data = fetchByCategory("utility");
</script>

<template>
  <div>
    <main class="text-slate-900 mt-5 mb-20 lg:mt-20 lg:mb-20">
      <div class="title-back-container flex justify-between align-middle mb-8">
        <h1 class="text-3xl font-bold">Style Guide</h1>
        <button
          class="px-4 align-middle rounded-md text-white bg-slate-100 hover:bg-slate-200 transition-all"
          @click="$router.back()"
        >
          <BackArrow class="text-2xl text-slate-900" />
        </button>
      </div>
      <ul
        v-if="data?.length"
        class="grid grid-cols-1 gap-y-8 gap-x-4 lg:grid-cols-2 lg:gap-8"
      >
        <li v-for="post in data" v-bind:key="post._id">
          <NuxtLink :to="post.slug.current">
            <p class="text-1xl font-bold mb-2">{{ post.title }}</p>
            <img
              :src="$urlFor(post.coverImage).size(1280, 720).url()"
              :alt="post.title"
              loading="lazy"
              class="mb-2 rounded shadow-md"
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

      <p v-else>No utility to show</p>
    </main>
  </div>
</template>
