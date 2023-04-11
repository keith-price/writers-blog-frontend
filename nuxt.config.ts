// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "2wb4m7an",
    dataset: "production",
  },
  css: ["@/assets/css/styles.css"],
});
