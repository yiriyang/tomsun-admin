<template>
  <a-layout style="min-height: 100vh">
    <Sidebar />
    <a-layout>
      <NavigationBar />
      <a-layout-content>
        <Breadcrumb />
        <div>
          <RouterView />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Sidebar from './sidebar/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import NavigationBar from './header/NavigationBar.vue'
</script>
