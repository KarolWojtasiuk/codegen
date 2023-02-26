<script setup lang="ts">
import { projectsStore } from '@/stores/projectsStore'

const props = defineProps<{ id: string }>()
const store = projectsStore()
const project = store.projects.find((p) => p.id == props.id)
if (!project) {
  throw new Error(`Project with id '${props.id}' does not exist!`)
}
</script>

<template>
  <h1>CodeEditor</h1>
  <h2><b>ID: </b> {{ props.id }}</h2>
  <h2><b>NAME: </b> {{ project?.name }}</h2>
</template>
