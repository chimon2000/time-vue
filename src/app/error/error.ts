var Quasar = require('quasar')
import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class ErrorComponent extends Vue {
    canGoBack = window.history.length > 1
    goBack() {
        window.history.go(-1)
    }
    data() {
        return {
            canGoBack: window.history.length > 1
        }
    }
}