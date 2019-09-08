import Home from '../page/statistics/index'
import Pro from '../page/pro/index'
export default [
  {
    path: '/home',
    name: '首页',
    component: Home,
    exact: true
  },
  {
    page: '/pro',
    name: '产品管理',
    component: Pro,
    exact: true
  }
]