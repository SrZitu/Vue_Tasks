<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Service1 from './components/Service1.vue'
import Service2 from './components/Service2.vue'
import Feature from './components/Feature.vue'
import Pricing from './components/Pricing.vue'
import Advantage from './components/Advantage.vue'
import Testimonial from './components/Testimonial.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const service1Status = 'Show'
const service2Status = 'Show'
const featureStatus = 'Show'
const pricingStatus = 'Show'
const advantageStatus = 'Show'
const testimonialStatus = 'Show'
const aboutStatus = 'Show'
const blogStatus = 'Show'
const contactStatus = 'Show'
</script>

<template>
  <Header />
  <Hero />
  
  <template v-if="service1Status == 'Show'">
    <Service1 />
  </template>

  <template v-if="service2Status == 'Show'">
    <Service2 />
  </template>

  <template v-if="featureStatus == 'Show'">
    <Feature />
  </template>

  <template v-if="pricingStatus == 'Show'">
    <Pricing />
  </template>

  <template v-if="advantageStatus == 'Show'">
    <Advantage />
  </template>

  <template v-if="testimonialStatus == 'Show'">
    <Testimonial />
  </template>

  <template v-if="aboutStatus == 'Show'">
    <About />
  </template>

  <template v-if="blogStatus == 'Show'">
    <Blog />
  </template>

  <template v-if="contactStatus == 'Show'">
    <Contact />
  </template>

  <Footer />
</template>

<style scoped>
</style>
