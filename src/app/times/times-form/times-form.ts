import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as Quasar from 'quasar'
import app from '../../shared/feathers.service';
import { Time } from '../shared/time';

@Component({})
export default class Index extends Vue {
    quasarVersion = Quasar.version
    time: Time = new Time()

    mounted() {

    }

    create() {
        let errors = (this as any).errors

        this.$emit('createTime', this.time)
        this.time = new Time()

        this.$nextTick(() => errors.clear())
    }
}