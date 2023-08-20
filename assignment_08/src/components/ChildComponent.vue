<script setup>
import { defineProps,defineEmits } from 'vue';
const props = defineProps({
  message: String
});

defineEmits(['messageEmitted']);

const MessageToParent="Hello from the ChildComponent";


</script>

<template>
  <div class="bg-white border border-gray-300 p-4 rounded-lg shadow-md mt-5">
    <p class="text-lg font-semibold">Child Component</p>
    <h2 class="text-gray-600">{{ message }}</h2>
    <button @click="$emit('messageEmitted',MessageToParent)" class="bg-green-500 hover:bg-blue-600 text-white px-2 py-2 mt-3">Emit Message</button>
  </div>
</template>


