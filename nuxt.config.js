// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "dxx2zusy",
    dataset: "production",
  },
  css: ["@/assets/css/styles.css"],
  buildModules: ["@nuxtjs/sanity/module"],
});
