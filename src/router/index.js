import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* Layout */
import Layout from '@/layout'
/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'profile', icon: 'user', noCache: false }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/chat',
    component: Layout,
    children: [
      {
        path: 'chat',
        component: () => import('@/views/chat-history/index'),
        name: 'Chat',
        meta: { title: 'chats', icon: 'message', noCache: true }
      }
    ]
  },
  {
    path: '/config',
    component: Layout,
    children: [
      {
        path: 'config',
        component: () => import('@/views/config/index'),
        name: 'Config',
        meta: { title: 'config', icon: 'lock', noCache: true }
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    children: [
      {
        path: 'management',
        component: () => import('@/views/management/index'),
        name: 'Management',
        meta: { title: 'management', icon: 'component', noCache: true }
      }
    ]
  },
  {
    path: '/notice',
    component: Layout,
    children: [
      {
        path: 'notice',
        component: () => import('@/views/notice/index'),
        name: 'Notice',
        meta: { title: 'notice', icon: 'tree', noCache: true }
      }
    ]
  },
  {
    path: '/player',
    component: Layout,
    children: [
      {
        path: 'player',
        component: () => import('@/views/player/index'),
        name: 'Player',
        meta: { title: 'player', icon: 'peoples', noCache: true }
      }
    ]
  },
  {
    path: '/publicCity',
    component: Layout,
    children: [
      {
        path: 'publicCity',
        component: () => import('@/views/publicCity/index'),
        name: 'PublicCity',
        meta: { title: 'publicCity', icon: 'tab', noCache: true }
      }
    ]
  },
  {
    path: '/privateHome',
    component: Layout,
    children: [
      {
        path: 'privateHome',
        component: () => import('@/views/privateHome/index'),
        name: 'PrivateHome',
        meta: { title: 'privateHome', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/pointsSystem',
    component: Layout,
    children: [
      {
        path: 'pointsSystem',
        component: () => import('@/views/pointsSystem/index'),
        name: 'PointsSystem',
        meta: { title: 'pointsSystem', icon: 'star', noCache: true }
      }
    ]
  },
  {
    path: '/shop',
    component: Layout,
    children: [
      {
        path: 'shop',
        component: () => import('@/views/shop/index'),
        name: 'Shop',
        meta: { title: 'shop', icon: 'shopping', noCache: true }
      }
    ]
  },
  {
    path: '/telnet',
    component: Layout,
    children: [
      {
        path: 'telnet',
        component: () => import('@/views/telnet/index'),
        name: 'Telnet',
        meta: { title: 'telnet', icon: 'example', noCache: true }
      }
    ]
  },
  {
    path: '/onlineMap',
    component: Layout,
    children: [
      {
        path: 'onlineMap',
        component: () => import('@/views/onlineMap/index'),
        name: 'OnlineMap',
        meta: { title: 'onlineMap', icon: 'international', noCache: true }
      }
    ]
  },
  {
    path: '/log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/log/log'),
        name: 'Log',
        meta: { title: 'log', icon: 'bug', noCache: true }
      }
    ]
  },
  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'theme', icon: 'theme' }
  //     }
  //   ]
  // },

  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/i18n-demo/index'),
        name: 'I18n',
        meta: { title: 'i18n', icon: 'size' }
      }
    ]
  },
  {
    path: '/externalLink',
    component: Layout,
    children: [
      {
        path: 'externalLink',
        component: () => import('@/views/external-link/index'),
        name: 'Log',
        meta: { title: 'externalLink', icon: 'link', noCache: true }
      }
    ]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: ('/swagger-ui/index.html'),
  //       meta: { title: 'externalLink', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
