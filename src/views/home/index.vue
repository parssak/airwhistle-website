<template>
  <img
    class="
      absolute
      -top-12
      right-0
      opacity-20
      transition-all
      xl:opacity-100
      h-2/3
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
    <div class="bg-awm-black h-96 mt-24 rounded aspect-video"></div>
    <div class="todo">make this aspect ratio of video</div>
  </Container>

  <Container>
    <h2>Areas of Expertise</h2>
    <p class="max-w-2xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non etiam
      adipiscing tincidunt velit, nulla ut eu metus. Volutpat feugiat volutpat.
    </p>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
      <div v-for="(area, index) in areas" :key="index">
        <img
          src="@/assets/images/expert.png"
          alt="expert on laptop"
          class="mb-4 w-full object-cover"
        />
        <p class="mb-1 text-lg">0{{ index + 1 }}</p>
        <h4 class="text-xl">{{ area.title }}</h4>
      </div>
    </div>
    <div class="todo">add colors</div>
    <div class="todo">Add hover effects</div>
  </Container>

  <Container>
    <div class="todo">add carousel</div>
  </Container>

  <Container>
    <div class="todo">you're in good company</div>
  </Container>
</template>

<script setup>
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import Header from "@/components/base/Header.vue";

const areas = [
  {
    title: "Web Design + Development",
    color: "red",
  },
  {
    title: "CMS Implementation",
    color: "green",
  },
  {
    title: "Search Engine Optimization",
    color: "yellow",
  },
  {
    title: "Application Development",
    color: "navy",
  },
];
</script>
