import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hoge: 0
  },
  getters: {
    hoge (state) { // プロパティスタイル
      return state.hoge
    },
    fuga: (state) => (piyo: number) => { // メソッドスタイル
      return state.hoge + piyo
    }
  },
  mutations: {
    increment (state) {
      state.hoge++
    },
    add (state, payload) {
      state.hoge += payload.fuga
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    add (context, payload) {
      context.commit('add', payload)
    },
    increment2 ({ commit }) { // シンプルなコード
      commit('increment')
    },
    incrementAsync (context) { // 非同期の操作
      setTimeout(() => {
        context.commit('increment')
        console.log('committed: ' + context.state.hoge)
      }, 1000)
    }
  }
})
