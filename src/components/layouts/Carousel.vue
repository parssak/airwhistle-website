<script setup>
import { ref, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/outline";
import Button from "../base/Button.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const { red } = defineProps({
  red: Boolean,
});

const getImageURL = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
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
    image: getImageURL("russel.png"),
  },
  {
    name: "Russell Peters",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam adipiscing tincidunt velit, nulla ut eu.",
    image: getImageURL("russel.png"),
  },
];

const swiperState = ref(null);

const onSwiper = (_swiper) => {
  swiperState.value = _swiper;
};

const next = () => {
  swiperState.value.slideNext();
};

const prev = () => {
  swiperState.value.slidePrev();
};

const activeIndex = ref(0);

const onSlideChange = (e) => {
  activeIndex.value = e.realIndex;
};

// on change

const modules = [Pagination, Navigation];
</script>

<style>
.swiper-wrapper {
  width: 12rem;
}
</style>

<template>
  <div class="lg:pt-24 lg:pb-32 relative">
    <img
      v-for="(item, index) in items"
      :key="index"
      :src="item.image"
      class="w-full h-full object-cover absolute inset-0 transition-all"
      :class="
        index === activeIndex
          ? 'opacity-100 duration-100'
          : 'opacity-0  duration-300'
      "
    />

    <div
      class="absolute inset-0"
      :class="red ? 'bg-awm-red bg-opacity-75' : 'bg-awm-navy bg-opacity-90'"
    ></div>
    <section class="py-8 pl-4 sm:pl-6 relative">
      <div class="max-w-full lg:max-w-7xl lg:mx-auto">
        <div class="md:pl-6 w-full grid h-full lg:grid-cols-3 gap-8">
          <div class="lg:py-32 sm:pr-6 lg:pr-12">
            <h2 class="text-white">Selected Projects</h2>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam
              adipiscing tincidunt velit, nulla ut eu metus. Volutpat feugiat
              volutpat.
            </p>
            <router-link :to="{ name: 'work' }">
              <Button
                class="btn btn-xl btn-light mt-6"
                :class="red ? 'btn-hover-navy' : ''"
                >View all Work</Button
              >
            </router-link>
          </div>
          <div
            class="
              lg:w-3/5 lg:col-span-2
              relative
              lg:absolute lg:inset-y-0 lg:right-0
            "
          >
            <swiper
              :slidesPerView="1.3"
              :spaceBetween="30"
              :loop="true"
              :modules="modules"
              class="min-h-[32rem] lg:h-full w-full"
              @slide-change="onSlideChange"
              @init="onSwiper"
            >
              <swiper-slide
                v-for="(item, index) in items"
                :key="index"
                class="flex flex-col"
              >
                <img
                  :src="item.image"
                  alt=""
                  class="h-96 w-full lg:h-full object-cover"
                />
                <h4 class="text-white mt-6 text-xl mb-2">
                  {{ item.name }}
                </h4>
                <p class="text-white leading-tight">{{ item.description }}</p>
              </swiper-slide>
            </swiper>

            <!-- Buttons -->
            <div class="mt-4 lg:mt-8 flex space-x-3 items-center">
              <button
                class="
                  w-12
                  h-12
                  grid
                  place-items-center
                  border-awm-white border-2
                  rounded-full
                  transition
                  duration-200
                  z-10
                "
                :class="
                  red
                    ? 'hover:bg-awm-navy hover:border-awm-navy'
                    : 'hover:bg-awm-red hover:border-awm-red'
                "
                @click="prev"
              >
                <ArrowLeftIcon class="w-6 h-6 text-awm-white" />
              </button>
              <button
                class="
                  w-12
                  h-12
                  grid
                  place-items-center
                  border-awm-white border-2
                  rounded-full
                  transition
                  duration-200
                  z-10
                "
                :class="
                  red
                    ? 'hover:bg-awm-navy hover:border-awm-navy'
                    : 'hover:bg-awm-red hover:border-awm-red'
                "
                @click="next"
              >
                <ArrowRightIcon class="w-6 h-6 text-awm-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>