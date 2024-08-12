<template>
  <ALayoutHeader>
    <a-dropdown class="float-right" :trigger="['click']">
      <a class="ant-dropdown-link" @click.prevent>
        用户名
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <!-- <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item> -->
          <a-menu-item>
            <a href="javascript:;">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </ALayoutHeader>
</template>

<script setup lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'
</script>
