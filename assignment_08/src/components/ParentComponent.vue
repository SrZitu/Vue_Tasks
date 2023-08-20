<script setup>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

const msg = "This is message from parent component";
const emmitmsgShow = ref('');

const handleChilMessage = (emittedMsg) => {
  emmitmsgShow.value = emittedMsg;
 
}
</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-xl flex m-10 bg-gray-200 ">
    <figure><img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="Album" /></figure>
    <div class="card-body ml-10 mt-5">
      <h2 class="card-title text-green-600 text-3xl">This Is Parent Component</h2>

      <ChildComponent :message="msg" @messageEmitted="handleChilMessage" />

      <div class="bg-white border border-gray-300 p-4 rounded-lg shadow-md my-5">
        <h2 class="text-2xl text-blue-800">Message In Parent Component From Child Component</h2>
        <p class="mt-5 text-purple-500 capitalize">Displaying emmited msg:{{ emmitmsgShow }}</p>
      </div>

    </div>
  </div>
</template>

<style scoped></style>