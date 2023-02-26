<script setup lang="ts">
import { projectsStore } from '@/stores/projectsStore'
import { NH1 } from 'naive-ui'

const props = defineProps<{ id: string }>()
const store = projectsStore()
const project = store.projects.find((p) => p.id == props.id)
if (!project) {
  throw new Error(`Project with id '${props.id}' does not exist!`)
}
</script>

<template>
  <NH1>CodeEditor</NH1>
</template>
