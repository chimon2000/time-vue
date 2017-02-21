<style scoped>
    .digits-container {
        height: 200px;
    }
</style>

<style>
    .digits-container .digits-embed {
        height: 200px;
    }
</style>

<template>
    <q-layout>
        <div slot="header" class="toolbar">
            <q-toolbar-title :padding="0">
                Quasar Framework v{{quasarVersion}}
            </q-toolbar-title>
        </div>
        <div class="layout-view">
            <div class="layout-padding">
                <div class="digits-container"></div>
              <span>{{isLoggedIn}}</span>
            </div>
        </div>
    </q-layout>
</template>

<script lang="ts" src="./login.ts"></script>
