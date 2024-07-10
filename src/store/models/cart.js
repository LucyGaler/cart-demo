import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  getters: {
    totalCount (state) {
      return state.list.reduce((acc, cur) => acc + cur.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((acc, cur) => acc + cur.count * cur.price, 0)
    }
  },
  mutations: {
    updateList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      context.commit('updateList', res.data)
    },
    async changeCount (context, payload) {
      await axios.patch(`http://localhost:3000/cart/${payload.id}`, { count: payload.count })
      // context.commit('updateList', payload)
      context.dispatch('getList')
    }
  }
}
