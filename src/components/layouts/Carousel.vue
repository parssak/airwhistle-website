<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import Button from "../base/Button.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const getImageURL = (name) => {
  return `@/assets/images/${name}`;
};

const items = [
  {
    name: "World Vision Canada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam adipiscing tincidunt velit, nulla ut eu.",
    image: getImageURL("worldvision-kid.png"),
  },
  {
    name: "Russell Peters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam adipiscing tincidunt velit, nulla ut eu.",
    image: getImageURL(),
  },
];

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

const modules = [Pagination, Navigation];
</script>

<template>
  <section class="py-8 pl-4 sm:pl-6 bg-awm-navy relative">
    <div class="max-w-full lg:max-w-7xl lg:mx-auto">
      <div class="md:pl-6 w-full grid lg:grid-cols-3 gap-8">
        <div class="lg:py-24 sm:pr-6 lg:pr-12">
          <h2 class="text-white">Selected Projects</h2>
          <p class="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam
            adipiscing tincidunt velit, nulla ut eu metus. Volutpat feugiat
            volutpat.
          </p>
          <router-link :to="{ name: 'work' }">
            <Button class="btn btn-xl btn-light mt-6">View all Work</Button>
          </router-link>
        </div>
        <div
          class="
            bg-awm-green
            lg:col-span-2
            lg:absolute
            inset-y-0
            lg:w-3/5
            right-0
            min-h-[24rem]
          "
        ></div>
        <!-- <swiper
          :slides-per-view="1"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="
            w-full
            absolute
            right-0
            grid grid-flow-col
            md:col-span-2
            min-h-[24rem]
          "
          :loop="true"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
        >
          <swiper-slide
            v-for="(item, index) in items"
            :key="index"
            class="bg-awm-yellow"
          >
          </swiper-slide>
        </swiper> -->
      </div>
    </div>
  </section>
</template>