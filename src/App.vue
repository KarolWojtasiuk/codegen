<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <button>
    <RouterLink to="/"> HOME </RouterLink>
  </button>

  <RouterView />
</template>
