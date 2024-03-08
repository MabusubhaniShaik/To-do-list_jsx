<template>
 <MainLayout />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import MainLayout from '@/components/layout/Mainlayout.vue'

export default defineComponent ({
  name: "App",
  components: {
    MainLayout,
  }
  
})
</script>

<style scoped>

</style>
