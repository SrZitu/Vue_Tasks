<script setup>
import { ref, onMounted,onBeforeUnmount} from 'vue';

const addItem = ref(16);
let mychart = null;
let dataset = [300, 50, 100, 120]

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Orange'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: dataset,
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(20, 80, 30)',
      'rgb(250, 150, 70)',
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'pie',
  data: data,
};


function addPie(){
  dataset.push(addItem.value);
  mychart.data.datasets[0].data = dataset;
  mychart.update();
}

onMounted(() => {
  const ctx = document.getElementById('chart')
  mychart = new Chart(ctx, config)
  
});

onBeforeUnmount(() => {
  console.log('before unmounting is called');
  mychart.destroy();
});

</script>

<template>
  <div class=" mx-auto w-[450px] h-[450px] bg-gray-400">
    <canvas id="chart">
    </canvas>
  </div>

  <div class="mt-20">
    <input type="text" v-model="addItem">
    <button @click="addPie()" class="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Add
    </button>

  </div>
</template>

<style scoped></style>