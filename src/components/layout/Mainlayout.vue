<template>
    <div class="mainLayout">
    <div class="NavBar">
        <MenuBar />
    </div>
    <div class="mainContainer">
        <router-View />
    </div>
</div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import MenuBar from './MenuBar.vue';
export default defineComponent ({
    name: "MainLayout",
    components: {
        MenuBar,
    }
})
</script>
<style scoped>

</style>