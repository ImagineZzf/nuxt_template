import Vue from 'vue'

import { SET_TOKEN } from '@/utils/constants'

const ERRORS = {}

const AUTH_ERRORS = {}

const vm = new Vue({})

export default ({ store, $axios }) => {
  $axios.onRequest((config) => {
    const token = store.state.token
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
    return config
  })

  $axios.onResponse((response) => {
    if (!response.data) return response
    return response.data.data ? response.data.data : response.data
  })

  $axios.onError((error) => {
    if (process.browser && error.response && error.response.data) {
      const code = error.response.data.code
      if (AUTH_ERRORS[code]) {
        vm.$message &&
          vm.$message({
            message: AUTH_ERRORS[code],
            type: 'error'
          })
        store.commit(SET_TOKEN, '')
        return
      } else if (ERRORS[code]) {
        return (
          vm.$message &&
          vm.$message({
            message: ERRORS[code],
            type: 'error'
          })
        )
      } else if (error.response.data.message) {
        vm.$message &&
          vm.$message({
            message: error.response.data.message,
            type: 'error'
          })
      }

      throw error
    }
  })
}
