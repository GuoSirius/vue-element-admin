/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/bsn',
  component: Layout,
  redirect: 'noRedirect',
  name: 'BSN',
  meta: {
    title: 'BSN',
    icon: 'component'
  },
  children: [
    {
      path: 'dashboard',
      component: () => import('@/views/dashboard/Dashboard'),
      name: 'Dashboard',
      meta: { title: '首页' }
    },
    {
      path: 'suspect',
      component: () => import('@/views/suspect/Suspect'),
      name: 'Suspect',
      meta: { title: '嫌疑人管理' }
    },
    {
      path: 'case',
      component: () => import('@/views/case/Case'),
      name: 'Case',
      meta: { title: '案件管理' }
    },
    {
      path: 'material',
      component: () => import('@/views/material/Material'),
      name: 'Material',
      meta: { title: '材料管理' }
    },
    {
      path: 'trial',
      component: () => import('@/views/trial/Trial'),
      name: 'Trial',
      meta: { title: '审判管理' }
    },
    {
      path: 'file-check',
      component: () => import('@/views/file-check/FileCheck'),
      name: 'FileCheck',
      meta: { title: '文件校验' }
    },
    {
      path: 'system-management',
      component: () => import('@/views/system-management/SystemManagement'),
      name: 'SystemManagement',
      meta: { title: '系统管理' }
    },
    {
      path: 'query-chain',
      component: () => import('@/views/query-chain/QueryChain'),
      name: 'QueryChain',
      meta: { title: '链上查询' }
    },
    {
      path: 'contract',
      component: () => import('@/views/contract/Contract'),
      name: 'Contract',
      meta: { title: '合约管理' }
    }
  ]
}

export default componentsRouter
