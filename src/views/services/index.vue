<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Hr from "../../components/layouts/Hr.vue";
import Button from "@/components/base/Button.vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/outline";

const areas = [
  {
    name: "Web Design + Development ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit.",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "CMS Implementation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit.",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "Search Engine Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit.",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "Application Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit.",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "Service Number Five",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit.",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    name: "Service Number Six",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit.",
    items: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];
</script>

<template>
  <Header />

  <div v-for="(area, index) in areas" :key="index">
    <FullSplit>
      <template v-slot:left>
        <p class="mb-2">0{{ index + 1 }}</p>
        <h2>{{ area.name }}</h2>
        <p>
          {{ area.description }}
        </p>
        <ul class="unstyled space-y-2 mt-6">
          <li
            v-for="(item, index) in area.items"
            :key="index"
            class="flex items-start text-lg"
          >
            <ChevronDoubleRightIcon class="h-4 w-4 mr-2 mt-1 text-awm-red" />

            {{ item }}
          </li>
        </ul>
        <router-link
          :to="{ name: 'service', params: { id: 'web-design-development' } }"
        >
          <Button class="btn btn-dark btn-xl mt-8"> Learn More </Button>
        </router-link>
      </template>
    </FullSplit>
    <Hr :class="index === areas.length - 1 ? 'hidden' : ''" />
  </div>
  <div class="pb-8"></div>
</template>
