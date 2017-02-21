<style scoped>
    .login {
        max-width: 50%;
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
            <div class="layout-padding login">

                <div class="floating-label">
                    <input v-model="email" name="email" class="full-width" v-validate="'required|email'" :class="{'has-error': errors.has('email')}">
                    <label>Email</label>
                </div>
                <div class="floating-label">
                    <input v-model="password" name="password" class="full-width" type="password" v-validate="'required'" :class="{'has-error': errors.has('password')}">
                    <label>Password</label>
                </div>
                <button class="primary" :disabled="errors.any() || fields.clean()" @click="login()">
                    Login
                </button>
            </div>
        </div>
    </q-layout>
</template>

<script lang="ts" src="./login.ts"></script>
