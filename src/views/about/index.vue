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
    <template v-slot:right>
      <div class="w-full h-full bg-awm-placeholder"></div>
    </template>
  </FullSplit>

  <div class="bg-awm-red">
    <Container>
      <h2>Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        nisl auctor, rhoncus nisl ut, aliquam erat.
      </p>
    </Container>
  </div>
</template>

<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import Split from "@/components/layouts/Split.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
</script>