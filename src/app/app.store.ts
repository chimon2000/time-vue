import * as Vue from 'vue'
import * as Vuex from 'vuex'
import {Store} from 'vuex';

Vue.use(Vuex)

const LOGIN = "LOGIN"
const LOGIN_SUCCESS  = "LOGIN"
const LOGOUT  = "LOGIN"

type Identity = string

type IdentityState = {
  pending: boolean
  identity?: Identity
}

type State = {
  identity: IdentityState
}

const defaultState: State = {
  identity: {
    pending: false,
    identity: undefined
  }
}

export default new Store({
  state: defaultState,
  mutations: {
    [LOGOUT] (state) {
      state.identity.pending = false
      state.identity.identity = ""
    },
    [LOGIN] (state) {
      state.identity.pending = true
    },
    [LOGIN_SUCCESS] (state, token: string) {
      state.identity.identity = token
    }
  },
  getters: {}
})
