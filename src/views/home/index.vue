<template>
  <img
    class="
      absolute
      -top-12
      right-0
      opacity-20
      transition-all
      lg:opacity-100
      h-[48rem]
      object-cover
    "
    src="@/assets/icons/graphic-red.svg"
    alt=""
    aria-hidden="true"
  />

  <Container>
    <h1 class="leading-tight">
      <span> Lorem ipsum dolor sit. </span> <br />
      <span class="text-awm-red max-w-2xl block"
        >Consect adipiscing onsect dipisct elit.</span
      >
    </h1>
    <div class="bg-awm-black mt-12 rounded aspect-w-16 aspect-h-9"></div>
  </Container>

  <Container>
    <h2>Areas of Expertise</h2>
    <div
      class="
        flex flex-col
        lg:flex-row
        justify-between
        lg:items-center
        w-full
        gap-8
      "
    >
      <p class="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam
        adipiscing tincidunt velit, nulla ut eu metus. Volutpat feugiat
        volutpat.
      </p>
      <router-link :to="{ name: 'services' }" class="lg:grid place-items-end">
        <Button class="btn btn-xl btn-red"> All Services </Button>
      </router-link>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <router-link
        :to="{ name: 'service', params: { id: 'web-design-development' } }"
        v-for="(area, index) in areas"
        :key="index"
        class="group"
      >
        <div class="w-full relative">
          <img
            src="@/assets/images/expert.png"
            alt="expert on laptop"
            class="mb-6 w-full object-cover"
          />
          <div
            class="
              absolute
              inset-x-0
              bottom-0
              h-3
              group-hover:opacity-100
              opacity-0
              transition
            "
            :class="area.barClass"
          ></div>
        </div>
        <p class="mb-1 text-lg">0{{ index + 1 }}</p>
        <h4 class="text-xl flex items-center relative">
          <div
            :class="area.barClass"
            class="
              h-1
              mb-0.5
              w-5
              absolute
              opacity-0
              transition-all
              group-hover:opacity-100
            "
          ></div>
          <span class="transform transition group-hover:translate-x-7">
            {{ area.title }}
          </span>
        </h4>
      </router-link>
    </div>
  </Container>

  <Carousel />

  <div class="relative">
    <div class="absolute inset-0">
      <img
        src="@/assets/icons/logo-outline.svg"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <Container>
      <div class="py-12">
        <div class="px-6 md:px-12 py-12 md:py-16 bg-awm-red">
          <div class="text-center flex flex-col items-center">
            <h2 class="text-white text-center">You're In Good Company</h2>
          </div>
          <div
            class="
              grid
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              gap-x-4 gap-y-6
              mt-6
            "
          >
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="
                border border-white
                px-12
                py-12
                md:py-12
                grid
                place-items-center
              "
            >
              <img src="@/assets/icons/mirage.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import Header from "@/components/base/Header.vue";
import Button from "@/components/base/Button.vue";
import Carousel from "@/components/layouts/Carousel.vue";

const areas = [
  {
    title: "Web Design + Development",
    color: "red",
    barClass: "bg-awm-red",
  },
  {
    title: "CMS Implementation",
    color: "green",
    barClass: "bg-awm-green",
  },
  {
    title: "Search Engine Optimization",
    color: "yellow",
    barClass: "bg-awm-yellow",
  },
  {
    title: "Application Development",
    color: "navy",
    barClass: "bg-awm-navy",
  },
];

const partners = Array(12).fill(0);
</script>
