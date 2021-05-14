import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '*',
    name: '',
    redirect: '/',
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/setConfig',
    name: 'setConfig',
    component: () => import('@/views/setConfig'),
    meta: {
      title: '基础配置',
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash' // 如果你是 history模式 需要配置vue.config.js publicPath
})

router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  let globalData = localStorage.getItem("globalData") || "";
  if (globalData) {
    Vue.prototype.$globalData = globalData;
  }
  if (to.name !== 'setConfig' && !Vue.prototype.$globalData.assestToken) next({ name: 'setConfig' })
  else next()
  document.title = to.meta.title || '天依'
})

export default router
