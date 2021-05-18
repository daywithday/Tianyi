import { login, logout, getInfo } from '@/api/user'
import { Authenticate, setAccesstToken, setBaseUrl } from '@/utils/api'
import { getToken, setToken, removeToken, getServer, setServer, removeServer, getPort, setPort, removePort } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  server: getServer(),
  port: getPort(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_SERVER: (state, server) => {
    state.server = server
  },
  SET_PORT: (state, port) => {
    state.port = port
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { server, port, accessToken } = userInfo
    setAccesstToken(accessToken)
    setBaseUrl('http://' + server + ':' + port)
    return new Promise((resolve, reject) => {
      Authenticate().then(response => {
        commit('SET_TOKEN', accessToken)
        commit('SET_SERVER', server)
        commit('SET_PORT', port)
        setToken(accessToken)
        setServer(server)
        setPort(port)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      let data = { "roles": ["admin"], "introduction": "I am a super administrator", "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", "name": "Super Admin" }

      if (!data) {
        reject('Verification failed, please Login again.')
      }

      const { roles, name, avatar, introduction } = data

      // roles must be a non-empty array
      if (!roles || roles.length <= 0) {
        reject('getInfo: roles must be a non-null array!')
      }

      commit('SET_ROLES', roles)
      commit('SET_NAME', name)
      commit('SET_AVATAR', avatar)
      commit('SET_INTRODUCTION', introduction)
      resolve(data)
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_SERVER', '')
      commit('SET_PORT', '')
      commit('SET_ROLES', [])
      removeToken()
      removeServer()
      removePort()
      resetRouter()
      // reset visited views and cached views
      // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
      dispatch('tagsView/delAllViews', null, { root: true })
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_SERVER', '')
      commit('SET_PORT', '')
      commit('SET_ROLES', [])
      removeToken()
      removeServer()
      removePort()
      resolve()
    })
  },

  // dynamically modify permissions
  async changeRoles({ commit, dispatch }, role) {
    const token = role + '-token'

    commit('SET_TOKEN', token)
    setToken(token)

    const { roles } = await dispatch('getInfo')

    resetRouter()

    // generate accessible routes map based on roles
    const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })
    // dynamically add accessible routes
    router.addRoutes(accessRoutes)

    // reset visited views and cached views
    dispatch('tagsView/delAllViews', null, { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
