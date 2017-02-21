<style scoped>
    .times-form {
        max-width: 80%;
    }
</style>

<template>
    <q-layout>
        <div slot="header" class="toolbar">
            <q-toolbar-title :padding="0">
                Times
            </q-toolbar-title>
        </div>

        <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
        <div class="layout-view">
            <div class="layout-padding">
                <times-form v-on:createTime="onCreateTime" class="times-form"></times-form>
            </div>

            <div class="layout-padding">
                <app-table v-if="!isEmpty" v-bind:table-options="tableOptions" v-bind:data="times"></app-table>
                <div v-else>No Time Entries Yet</div>
            </div>

        </div>
    </q-layout>
</template>

<script lang="ts" src="./home.ts"></script>