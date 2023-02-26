import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Project {
  id: string
  name: string
}

export const projectsStore = defineStore(
  'projects',
  () => {
    const projects = ref<Project[]>([])

    function getProject(id: string): Project | undefined {
      return projects.value.find((p) => p.id == id)
    }

    function createProject(name: string) {
      projects.value.push({
        id: createUniqueIdFromName(name),
        name: name
      })
    }

    function createUniqueIdFromName(name: string): string {
      const safeName = name.replace(' ', '-')
      if (!getProject(safeName)) {
        return safeName
      }

      let suffixNumber = 1

      while (getProject(`${safeName}-${suffixNumber}`)) {
        suffixNumber++
      }

      return `${safeName}-${suffixNumber}`
    }

    return { projects, createProject }
  },
  {
    persist: true
  }
)
