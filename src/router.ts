import { createRouter, createWebHistory } from 'vue-router'
import ProjectExplorerView from './views/ProjectExplorerView.vue'
import CodeEditorView from './views/CodeEditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'project-explorer',
      component: ProjectExplorerView
    },
    {
      path: '/editor/:id',
      name: 'code-editor',
      component: CodeEditorView,
      props: true
    }
  ]
})

export default router
