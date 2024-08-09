<template>
  <Layout style="min-height: 100vh">
    <Sidebar />
    <Layout>
      <NavigationBar />
      <LayoutContent>
        <Breadcrumb />
        <div>
          <RouterView />
        </div>
      </LayoutContent>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { Layout, LayoutContent } from 'ant-design-vue'
import Sidebar from './sidebar/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import NavigationBar from './header/NavigationBar.vue'
</script>
