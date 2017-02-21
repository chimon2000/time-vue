var moveForce = 30
var rotateForce = 40

import * as Quasar from 'quasar'
import * as Vue from 'vue'
import Component from 'vue-class-component'
import { service } from '../shared/feathers.service';

let userService = service('users')
let timesService = service('times')

@Component({
    props: {
        propMessage: String
    }
})
export default class Index extends Vue {
    tableOptions = {
        headers: [
            { key: 'date', name: 'Date', type: 'Date' },
            { key: 'what', name: 'What?' },
            { key: 'hours', name: 'Hours', type: 'Numeric' }
        ],
        selectionMode: 'single'
    }

    times: any[] = []

    onCreateTime(time) {
        timesService.create(time)
        // this.times.push(time)
    }

    mounted() {
        timesService.find({
            query: {
                $sort: { createdAt: -1 },
                $limit: 25
            }
        }).then(page => {
            this.times = this.times.concat(page.data)
        })

        timesService.on('created', time => {
            this.times.push(time)
        })
    }

    get isEmpty() {
        return this.times.length === 0
    }
}