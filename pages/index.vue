<script setup>
// fetch the latest post
// const queryLatest = groq`*[_type == "post"] | order(date desc) [0]`;
// const { data: latestData } = await useSanityQuery(queryLatest);

// fetch the 4 most recent (excluding the latest the latest)
// const queryFeatured = groq`*[ _type == "post"] | order(date desc) [1...5]`;
// const { data: featureData } = await useSanityQuery(queryFeatured);
const { fetchLatestPost, fetchFeaturedPosts } = useUtils();
const latestData = fetchLatestPost();
const featureData = fetchFeaturedPosts();
</script>

<template>
  <div>
    <main class="text-slate-900 mb-12">
      <ul v-if="latestData" class="my-8">
        <li v-bind:key="latestData._id">
          <h1 class="text-3xl font-bold mb-4">Latest Post</h1>
          <!-- <p class="text-1xl font-bold">{{ latestData.title }}</p> -->
          <!-- SanityContent brings in the content body -->
          <!-- <SanityContent :blocks="latestData.content" /> -->
          <NuxtLink :to="latestData.slug.current">
            <img
              :src="$urlFor(latestData.coverImage).size(1280, 720).url()"
              :alt="latestData.title"
              height="720"
              width="1280"
              loading="lazy"
              class="mb-2"
            />
            <p class="text-sm mb-4 text-justify lg:text-base">
              {{ latestData.excerpt }}
            </p>
          </NuxtLink>
          <p class="text-sm font-semibold lg:text-base">
            {{ latestData.author }}
          </p>
          <p class="text-sm italic lg:text-base">
            {{ `# ${latestData.category}` }}
          </p>
        </li>
      </ul>

      <p v-else>No Latest posts to show</p>

      <section>
        <h2 class="text-2xl font-bold mb-4">Featured Posts</h2>
        <div>
          <ul
            v-if="featureData?.length"
            class="grid grid-cols-1 gap-y-8 gap-x-4 lg:grid-cols-2 lg:gap-8"
          >
            <li v-for="post in featureData" v-bind:key="featureData._id">
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
                {{ `# ${latestData.category}` }}
              </p>
            </li>
          </ul>

           <p v-else>No featured posts to show</p> 
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
