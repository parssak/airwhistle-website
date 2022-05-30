<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Button from "@/components/base/Button.vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/outline";

const steps = [
  {
    title: "Discovery",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Discovery",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Discovery",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
  {
    title: "Analysis",
    description: "Collecting business requirements and identifying your needs.",
  },
];
</script>

<template>
  <Header />

  <Container class="pb-4">
    <div class="grid md:grid-cols-2 gap-4 lg:gap-24">
      <div>
        <h2 class="mb-0">Lorem ipsum dolor sit amet, consectetur</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl
          neque, blandit varius fermentum, faucibus sem condimentum. Ultricies
          risus tristique sagittis vel non libero platea tristique sagittis vel
          non libero platea.
        </p>
      </div>
    </div>
  </Container>

  <div class="bg-awm-placeholder w-full h-96"></div>

  <Container>
    <div class="grid gap-6 lg:gap-24 lg:grid-cols-2">
      <div>
        <h2>Our Web Development Methodology</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          euismod justo volutpat orci volutpat consequat nunc. Condimentum
          euismod eleifend eu nibh in quis lectus dictum vitae. Cras vitae
          suspendisse fringilla integer ultricies in at. Ornare vitae amet
          tincidunt lectus nulla sed risus risus. Mattis massa, cras sed netus
          convallis egestas volutpat, iaculis faucibus.
        </p>
      </div>
      <div class="gap-12 grid md:grid-cols-2">
        <div v-for="(step, index) in steps" :key="index">
          <h2 class="font-futura font-semibold text-6xl mb-0 text-awm-red">
            {{ (index + 1).toString().padStart(2, "0") }}
          </h2>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </Container>

  <FullSplit
    :spacing="false"
    flipped
    class="lg:py-0 bg-awm-red"
    leftClass="bg-awm-red"
  >
    <template v-slot:left>
      <h2 class="text-white">Lorem ipsum dolor sit amet, consectetur</h2>
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
        euismod justo volutpat orci volutpat consequat nunc. Condimentum euismod
        eleifend eu nibh in quis lectus dictum vitae. Cras vitae suspendisse
        fringilla integer ultricies in at. Ornare vitae amet tincidunt lectus
        nulla sed risus risus. Mattis massa, cras sed netus convallis egestas
        volutpat, iaculis faucibus. Magna ac metus enim gravida viverra quis
        posuere tellus turpis.
      </p>
    </template>
  </FullSplit>
  <FullSplit
    :spacing="false"
    class="lg:py-0 bg-awm-navy"
    leftClass="bg-awm-navy"
  >
    <template v-slot:left>
      <h2 class="text-white">Lorem ipsum dolor sit amet, consectetur</h2>
      <p class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
        euismod justo volutpat orci volutpat consequat nunc. Condimentum euismod
        eleifend eu nibh in quis lectus dictum vitae. Cras vitae suspendisse
        fringilla integer ultricies in at. Ornare vitae amet tincidunt lectus
        nulla sed risus risus. Mattis massa, cras sed netus convallis egestas
        volutpat, iaculis faucibus. Magna ac metus enim gravida viverra quis
        posuere tellus turpis.
      </p>
    </template>
  </FullSplit>
</template>
