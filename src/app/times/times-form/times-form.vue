<style scoped>
    .form > div:first-child {
        margin-bottom: 10px;
    }

    .field:not(:last-child) {
        margin-bottom: 10px;
    }

    .error {
        font-size:10px;
        color: #db2828;
    }
</style>

<template>
    <div class="form">
        <q-datetime label="Date" v-model="time.date" type="date">
        </q-datetime>
        <div class="stacked-label field">
            <input v-model="time.hours" name="hours" class="full-width" v-validate="'required|numeric'" :class="{'has-error': errors.has('hours')}">
            <span class="error" v-if="errors.has('hours')">{{errors.first('hours')}}</span>
            <label>Hours</label>
        </div>
        <div class="floating-label field">
            <input v-model="time.what" name="what" class="full-width" v-validate="'required'" :class="{'has-error': errors.has('what')}">
            <span class="error" v-if="errors.has('what')">{{errors.first('what')}}</span>
            <label>What? *</label>
        </div>
        <button class="primary" :disabled="errors.any() || fields.clean()" @click="create()">
            Create
        </button>
    </div>

</template>

<script lang="ts" src="./times-form.ts"></script>