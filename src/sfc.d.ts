declare module "quasar"
declare const __THEME
declare const Digits

declare module "*.vue" {
  import * as Vue from 'vue';
  export default typeof Vue
}
