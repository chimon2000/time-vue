import Vue = require("vue")
declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    firebase?: any;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    firebase?: any;
  }
}
