import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as Quasar from 'quasar'
import app from '../shared/feathers.service';

@Component({
    computed: {
        isLoggedIn() {
            return !!this.$store.state.identity.identity
        }
    }
})
export default class Index extends Vue {
    quasarVersion = Quasar.version
    email = ''
    password = ''

    mounted() {
        console.log('mounted')
    }

    login() {
        app
            .authenticate({
                type: 'local',
                email: this.email,
                password: this.password
            })
            .then(() => this.$router.replace('/'))
            .catch((error) => console.error('Error authenticating!', error))
    }
}