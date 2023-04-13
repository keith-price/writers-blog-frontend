// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css"],
  sanity: {
    projectId: "dxx2zusy",
    dataset: "production",
  },
  buildModules: ["@nuxtjs/sanity/module"],
});
