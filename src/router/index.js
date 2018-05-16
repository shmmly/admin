import Vue from 'vue'
import Router from 'vue-router'

const HealthHeader = () => import('@/components/Health_header')
const Index = () => import('@/pages/index')

const Resource = () => import('@/components/userManage/Health_resourceInfo')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index,
      children: [
        {
          path: 'resource',
          name: 'Resource',
          components: {
            rightBody: Resource
          },
        }
      ]
    },
    //命名视图，这个组件会在name为rightbody的视图处渲染
    // {
    //   path: '/resource',
    //   name: 'Resource',
    //   components: {
    //     rightBody: Resource
    //   },
    // }
  ]
})
