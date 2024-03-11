<template>
    <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys" class="menu-bar">
        <a-menu-item key="home" @click="$router.push('/')">Home</a-menu-item>
        <a-menu-item key="add-task" @click="$router.push('/add-task')">Add Task</a-menu-item>
    </a-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Menu, MenuItem } from 'ant-design-vue';

export default defineComponent({
    name: 'MenuBar',
    components: {
        'a-menu': Menu,
        'a-menu-item': MenuItem,
    },
    data() {
        return {
            selectedKeys: [] as string[],
        };
    },
});
</script>

<style scoped>
.menu-bar {
    display: flex;
    justify-content: flex-end;
}
</style>
