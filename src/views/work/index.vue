<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";

const getImageUrl = (name) => {
  return new URL(`../../assets/images/${name}`, import.meta.url).href;
};

const work = [
  {
    name: "World Vision Canada",
    description: "Web Design",
    class: "bg-awm-red",
    textClass: "text-white",
    image: getImageUrl("worldvision-kid.png"),
    routeName: "project",
    id: "world-vision-canada",
  },
  {
    name: "World Vision Canada",
    description: "Web Design",
    class: "bg-awm-green",
    textClass: "text-white",
    image: getImageUrl("worldvision-kid.png"),
    routeName: "project",
    id: "world-vision-canada",
  },
  {
    name: "World Vision Canada",
    description: "Web Design",
    class: "bg-awm-yellow",
    image: getImageUrl("worldvision-kid.png"),
    routeName: "project",
    id: "world-vision-canada",
  },
  {
    name: "World Vision Canada",
    description: "Web Design",
    class: "bg-awm-navy",
    textClass: "text-white",
    image: getImageUrl("worldvision-kid.png"),
    routeName: "project",
    id: "world-vision-canada",
  },
];
</script>

<template>
  <Header />

  <Container>
    <div class="grid lg:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-12">
      <router-link
        v-for="(job, index) in work"
        :key="index"
        class="w-full h-full group relative block"
        :to="{ name: job.routeName, params: { id: job.id } }"
      >
        <img :src="job.image" alt="" class="w-full h-full object-cover" />
        <div
          class="
            opacity-0
            transition
            group-hover:opacity-100
            bg-opacity-80
            absolute
            inset-0
            p-8
            md:p-12
            flex flex-col
            justify-end
          "
          :class="job.class"
        >
          <h2 :class="job.textClass">{{ job.name }}</h2>
          <p :class="job.textClass">{{ job.description }}</p>
        </div>
      </router-link>
    </div>
  </Container>
</template>
