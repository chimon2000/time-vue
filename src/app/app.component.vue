<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import Component from 'vue-class-component'
import app from './shared/feathers.service'
import TableComponent from './shared/components/table/table.vue'
import TimesFormComponent from './times/times-form/index'

Vue.component('app-table', TableComponent)
Vue.component('times-form', TimesFormComponent)

/*
 * Root component
 */
 @Component({})
export default class App extends Vue {}
</script>

<style></style>