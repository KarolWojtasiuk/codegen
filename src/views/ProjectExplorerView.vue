import CodeEditorView from './CodeEditorView.vue';

<script setup lang="ts">
import { projectsStore } from '@/stores/projectsStore'
import { ref } from 'vue'
import { NH1, NH2, NCard, NSpace, NButton, NInput } from 'naive-ui'

const store = projectsStore()
const newProjectName = ref('')
</script>

<template>
  <NH1>Project Explorer</NH1>

  <NH2>Projects:</NH2>
  <NSpace>
    <NCard
      v-for="project in store.projects"
      :key="project.id"
      :title="project.name"
      hoverable
      style="min-width: 200px"
    >
      <!-- <RouterLink :to="`/editor/${project.id}`"> {{ project.id }} - {{ project.name }} </RouterLink> -->
      <b>ID</b>: {{ project.id }}
      <template #action>
        <NSpace justify="space-between">
          <NButton type="error" @click="store.deleteProject(project.id)">Delete</NButton>
          <NButton type="primary" @click="$router.push(`/editor/${project.id}`)">Open</NButton>
        </NSpace>
      </template>
    </NCard>

    <NCard title="New Project">
      <NInput placeholder="Name" v-model:value="newProjectName"></NInput>
      <template #action>
        <NButton type="primary" @click="store.createProject(newProjectName)">Create</NButton>
      </template>
    </NCard>
  </NSpace>
</template>
