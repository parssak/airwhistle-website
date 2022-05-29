<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";

const partners = Array(12).fill(0);
</script>

<template>
  <Header />

  <FullSplit flipped>
    <template v-slot:left>
      <h2>We are an award winning, digital-first, marketing agency.</h2>
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

  <div class="bg-awm-red">
    <Container>
      <div class="text-center flex flex-col items-center">
        <h2 class="text-white">Our Partners</h2>
        <p class="text-white max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          euismod justo volutpat orci volutpat consequat nunc.
        </p>
      </div>
      <div
        class="
          mt-8
          grid
          md:grid-cols-2
          lg:grid-cols-4
          xl:grid-cols-6
          gap-x-4 gap-y-6
        "
      >
        <div
          v-for="(partner, index) in partners"
          :key="index"
          class="
            border border-white
            px-12
            py-12
            md:py-6
            grid
            place-items-center
          "
        >
          <img src="@/assets/icons/mirage.svg" alt="" />
        </div>
      </div>
    </Container>
  </div>

  <FullSplit>
    <template v-slot:left>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
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
</template>
