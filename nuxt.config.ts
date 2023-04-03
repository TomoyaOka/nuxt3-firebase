// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "firebase - googleLogin",
      meta: [
        { name: "viewport", content: "width=device-width,initial-scale=1.0,user-scalable=no" },
        { hid: "og:type", property: "og:type", content: "article" },
        
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/setting.scss";',
        },
      },
    },
  },
 // global css
 css: ["~/assets/css/_reset.scss", "~/assets/css/_mixin.scss", "~/assets/css/_function.scss", "~/assets/css/_common-class.scss"],
})
