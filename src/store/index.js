import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {//要设置的全局访问的state对象
  cartList: []
  //要设置的初始属性值
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
