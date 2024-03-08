<template>
    <div class="addTask">
        <h1>Im from the Add task page</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { fields } from '@/services/formFields'; // Import from the TypeScript declaration file

export default defineComponent ({
    name: "AddTask",
    components: {
    },
    setup() {
        console.log("::::::::::::::::::::::::im from the setUp()", fields);

        onMounted(() => {
            console.log("::::::::::::::::::::::::im from the onMounted", fields);
        });
    }
})
</script>

<style scoped>
/* Add your scoped styles here */
</style>
