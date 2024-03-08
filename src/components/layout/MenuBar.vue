<template>
    <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys" class="menu-bar">
      <a-menu-item key="home" @click="$router.push('/')">Home</a-menu-item>
      <a-menu-item key="add-task" @click="$router.push('/add-task')">Add Task</a-menu-item>
    </a-menu>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Menu } from 'ant-design-vue';
  
  export default defineComponent({
    name: 'MenuBar',
    components: {
      'a-menu': Menu,
      'a-menu-item': Menu.Item,
    },
    setup() {
      const selectedKeys = ref<string[]>([]);
  
      return { selectedKeys };
    },
  });
  </script>
  
  <style scoped>
  .menu-bar {
    display: flex;
    justify-content: end;
  }
  </style>
  