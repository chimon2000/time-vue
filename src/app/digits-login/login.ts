
import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as Quasar from 'quasar'
import { LOGIN_SUCCESS, LOGIN } from './login.actions'
import 'whatwg-fetch'

Digits.init({ consumerKey: 'EuBeVN2sqlsWcbMAEiljeIs2C' });

@Component({
  mounted() {
    Digits
      .embed({
        container: '.digits-container'
      })
      .done(onLoginSuccess) /*handle the response*/
      .fail(console.error)
  },
  computed: {
    isLoggedIn() {
      return !!this.$store.state.identity.identity
    }
  }
})
export default class Index extends Vue {
  quasarVersion = Quasar.version
}

function onLoginSuccess({oauth_echo_headers}) {
  let payload = parseOAuthHeaders(oauth_echo_headers)
  let fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  return fetch(`${process.env.API_URL}/digits`, fetchOptions)
    .then(res => res.json())
    .then(console.log)
    .catch(console.error)
}


function parseOAuthHeaders(oAuthEchoHeaders) {
  var credentials = oAuthEchoHeaders['X-Verify-Credentials-Authorization'];
  var apiUrl = oAuthEchoHeaders['X-Auth-Service-Provider'];

  return {
    apiUrl: apiUrl,
    credentials: credentials
  };
}
