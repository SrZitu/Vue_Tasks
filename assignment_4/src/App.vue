<script setup>
import {ref, reactive} from 'vue'

const activeIndex = ref(0)

const images = [
  {
    thumb: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: 'First Slide',
    caption: 'Awesome Slide 1'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    title: 'Second Slide',
    caption: 'Awesome Slide 2'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Third Slide',
    caption: 'Awesome Slide 3'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    title: 'Fourth Slide',
    caption: 'Awesome Slide 4'
  },
  {
    thumb: 'https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    title: 'Fifth Slide',
    caption: 'Awesome Slide 5'
  }
]

const imageFilter = '-webkit-filter: grayscale(100%);filter: grayscale(100%);'
</script>

<template>
  <div class="py-4 px-6">
    <h4 class="text-2xl font-semibold mb-4">Vue Image Carousel</h4>
    <ol class="flex justify-center space-x-2">
      <img
        @click="activeIndex = index"
        v-for="(image, index) in images"
        :key="index"
        :src="image.thumb"
        :style="{ height: '50px', cursor: 'pointer', filter: activeIndex != index ? 'grayscale(100%)' : 'none' }"
        alt=""
      />
    </ol>
    <div class="relative">
      <ol class="flex justify-center mt-4">
        <li
          @click="activeIndex = index"
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'active': index === activeIndex }"
        ></li>
      </ol>

      <transition-group name="carousel" tag="div" class="carousel-inner mt-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'carousel-item': true, 'active': index === activeIndex }"
        >
          <img
            :src="image.thumb"
            class="w-full h-80 object-cover"
            alt="..."
          />
          <div class="carousel-caption">
            <h5 class="text-xl font-semibold">{{ image.title }}</h5>
            <p class="text-gray-500">{{ image.caption }}</p>
          </div>
        </div>
      </transition-group>

      <a
        @click.prevent="activeIndex = (activeIndex === 0) ? images.length - 1 : activeIndex - 1"
        class="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 rounded-full  bg-gray-500"
        href="#"
        role="button"
      >
   
        <svg
          class="carousel-control-prev-icon h-5 w-5 text-green-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M6.293 10l3.646-3.646a.5.5 0 01.708.708l-4 4a.5.5 0 010 .708l4 4a.5.5 0 01-.708.708l-3.646-3.646a.5.5 0 010-.708z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </a>
      <a
        @click.prevent="activeIndex = (activeIndex === images.length - 1) ? 0 : activeIndex + 1"
        class="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2  px-4 py-2 rounded-full  bg-gray-500"
        href="#"
        role="button"
      >
  
        <svg
          class="carousel-control-next-icon h-5 w-5 text-green-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M13.646 10l-3.646 3.646a.5.5 0 11-.708-.708l4-4a.5.5 0 010-.708l-4-4a.5.5 0 01.708-.708L13.646 9a.5.5 0 010 .708z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>



<style>
.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.carousel-inner {
  position: relative;
}

.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.5s;
}

.carousel-enter,
.carousel-leave-to {
  opacity: 0;
}
</style>
