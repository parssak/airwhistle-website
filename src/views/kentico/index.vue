<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import { ChevronDoubleRightIcon } from "@heroicons/vue/outline";

const items = Array(12).fill("Lorem ipsum dolor sit amet, consectetur ");
</script>

<template>
  <Header />

  <FullSplit flipped>
    <template v-slot:left>
      <h2>We Are A Certified Kentico Gold Partner</h2>
      <p>
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

  <FullSplit>
    <template v-slot:left>
      <h2>Kentico CMS Website Integration</h2>
      <p>
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

  <Container>
    <div class="todo">carousel red</div>
  </Container>

  <Container>
    <div class="mx-auto max-w-4xl">
      <h2 class="md:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        cras pege risus viverra.
      </h2>
      <p class="md:text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl
        neque, blandit varius fermentum, faucibus sem condimentum. Ultricies
        risus tristique sagittis vel non libero platea. Suspendisse mauris nunc
        et justo. Aliquam enim amet fames ut sit imperdiet.
      </p>
    </div>
    <ul
      class="unstyled gap-x-12 gap-y-2 grid lg:grid-cols-3 md:grid-cols-2 mt-6"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-start text-lg"
      >
        <ChevronDoubleRightIcon class="h-4 w-4 mr-2 mt-1 text-awm-red" />

        {{ item }}
      </li>
    </ul>
  </Container>
</template>
