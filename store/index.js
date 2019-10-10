import { SET_TOKEN } from '@/utils/constants'

export const state = () => ({
  token: ''
})

export const getters = {}

export const mutations = {
  [SET_TOKEN](state, token) {
    state.token = token
  }
}

export const actions = {
  // 判断是否是管理员
  // async nuxtServerInit({ commit }, { req, query, $axios }) {
  //   const isServer = process && process.server
  //   if (query.code) {
  //     const result = await $axios.post('/admin/login', {
  //       code: query.code
  //     })
  //     if (result.status === 200 && result.data.data) {
  //       if (result.data.data.access_token) {
  //         commit(SET_TOKEN, result.data.data.access_token)
  //       } else {
  //         commit(SET_TOKEN, '')
  //       }
  //     }
  //   } else {
  //     commit(SET_TOKEN, '')
  //   }
  // }
}
