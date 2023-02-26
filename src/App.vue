<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NButton, NConfigProvider, NLayout, darkTheme } from 'naive-ui'
</script>

<template>
  <NConfigProvider :theme="darkTheme">
    <NLayout style="height: 100vh; padding: 2rem">
      <NButton type="primary" @click="$router.push('/')"> HOME </NButton>

      <RouterView />
    </NLayout>
  </NConfigProvider>
</template>
