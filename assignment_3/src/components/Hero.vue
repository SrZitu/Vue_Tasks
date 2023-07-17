<script setup>

import mainPhoto from '../assets/images/hero.svg'
import {themeColor} from '../data/items'

const heroHeading = 'Promote Your Products by Colorlib'
const heroText = 'Another cool free html css template by Colorlib Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast'
const buttonSeeFeature = 'See Features'
const buttonPricing = 'Pricing'
</script>

<template>
    <div class="untree_co-hero" id="home-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="dots"></div>
                    <div class="row align-items-center">
                        <div class="col-lg-7 ml-auto order-lg-2" data-aos="fade-right" data-aos-delay="400">
                            <img :src="mainPhoto" alt="Image" class="img-fluid">
                        </div>
                        <div class="col-lg-5">
                            <h1 class="heading" data-aos="fade-up" data-aos-delay="0">{{ heroHeading }}</h1>
                            <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                                <p>{{ heroText }}</p>
                            </div>
                            <p data-aos="fade-up" data-aos-delay="200">
                                <a href="#features-section" class="btn btn-primary smoothscroll" :style="[{background: themeColor}, {borderColor: themeColor}]">{{ buttonSeeFeature }}</a>
                                <a href="#pricing-section" class="btn btn-outline-primary smoothscroll" :style="[{color: themeColor}, {borderColor: themeColor}]">{{ buttonPricing }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>