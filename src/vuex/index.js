import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Micisty', //
    backBtn: 'mui-icon mui-icon-undo',
    rightText: '',
    backEvent: function (e) {
      console.log(e);
    },
    rightEvent: function (e) {
      console.log(e);
    }
  },
  mutations: {

  },
  actions: {

  }
})
