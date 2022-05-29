<script setup>
import Button from "./Button.vue";
const { title, description } = defineProps({
  title: String,
  description: String,
  to: String,
});
</script>


<template>
  <section class="px-4 sm:px-6">
    <div class="max-w-full lg:max-w-7xl lg:mx-auto">
      <div class="relative md:p-6 w-full">
        <div class="pt-12 md:pt-24 pb-8 border-b-2 border-awm-red">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <h1 class="capitalize">
              {{ title ?? $route.meta.title }}
            </h1>
            <Button
              class="btn btn-xl btn-dark mt-8 lg:mt-0"
              v-if="to"
              :href="to"
              as="a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the Website
            </Button>
          </div>
          <p v-if="description" class="mt-6 text-xl text-indigo-100 max-w-3xl">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

