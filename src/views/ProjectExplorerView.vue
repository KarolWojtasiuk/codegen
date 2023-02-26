import CodeEditorView from './CodeEditorView.vue';

<script setup lang="ts">
import { projectsStore } from '@/stores/projectsStore'
import { ref } from 'vue'

const store = projectsStore()
const newProjectName = ref('')
</script>

<template>
  <h1>Project Explorer</h1>

  <h2>Projects:</h2>
  <ul>
    <li v-for="project in store.projects" :key="project.id">
      <RouterLink :to="`/editor/${project.id}`"> {{ project.id }} - {{ project.name }} </RouterLink>
    </li>
  </ul>

  <input type="text" placeholder="Name" v-model="newProjectName" />
  <button @click="() => store.createProject(newProjectName)">Create</button>
</template>
