<template>
    <div class="addTask">
        <div class="addtaskBtn">
            <a-button class="editable-add-btn" type="primary" style="margin-bottom: 8px" @click="showModel()">Add Task</a-button>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { fields } from '@/services/formFields'; // Import from the TypeScript declaration file
import { Button } from 'ant-design-vue';

export default defineComponent ({
    name: "AddTask",
    components: {
        'a-button': Button,
    },
    setup() {
        console.log("::::::::::::::::::::::::im from the setUp()", fields);

        onMounted(() => {
            console.log("::::::::::::::::::::::::im from the onMounted", fields);
        });
    }, 
    methods: {
        showModel(){
            console.log(":::::::::BTN click to show model")
            console.log(":::::::::BTN click to show model", fields)
        }
    }
})
</script>

<style scoped>
.editable-add-btn{
    margin: 8px;
}
.addtaskBtn{
    display: flex;
    justify-content: end;
}
</style>
