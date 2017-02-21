import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as Quasar from 'quasar'

@Component({
    props: ['data', 'tableOptions']
})
export default class Table extends Vue {
    onSelectRow() { }
}