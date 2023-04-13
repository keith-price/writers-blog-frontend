// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/sanity", "@nuxtjs/tailwindcss"],
  sanity: {
    projectId: "dxx2zusy",
    dataset: "production",
  },
  buildModules: ["@nuxtjs/sanity/module"],
});
