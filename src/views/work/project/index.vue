<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Button from "@/components/base/Button.vue";

const scope = [
  "Website Design",
  "CMS Implementation",
  "SEO",
  "AODA Compliance",
];

const client =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl neque, blandit varius fermentum, faucibus sem condimentum. Ultricies risus tristique sagittis vel non libero platea. Suspendisse mauris nunc et justo.";

const awards = [
  "2017 Kentico Site of the Month",
  "2018 Global Site of the Year",
  "2018 Communicator Award’s Award of Excellence",
  "2018 W3 Silver Award",
  "2018 MarCom Gold Award",
];
</script>

<template>
  <Header to="#" />
  <Container class="pb-4">
    <div class="grid lg:grid-cols-4 gap-6 lg:gap-24">
      <div>
        <h4 class="mb-1">Scope</h4>
        <ul class="unstyled space-y-1">
          <li v-for="item in scope">{{ item }}</li>
        </ul>
      </div>
      <div class="lg:col-span-2">
        <h4 class="mb-1">Client</h4>
        <p>{{ client }}</p>
      </div>
      <div>
        <h4 class="mb-1">Awards</h4>
        <ul class="unstyled space-y-1">
          <li v-for="item in awards">{{ item }}</li>
        </ul>
      </div>
    </div>
  </Container>
  <div class="h-96 w-full bg-awm-placeholder"></div>
  <FullSplit>
    <template v-slot:left>
      <h2>Pellentesque cras semper ut hac risus viverra.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl
        neque, blandit varius fermentum, faucibus sem condimentum. Ultricies
        risus tristique sagittis vel non libero platea. Suspendisse mauris nunc
        et justo. Aliquam enim amet fames ut sit imperdiet et naque.
      </p>
    </template>
  </FullSplit>
  <FullSplit flipped>
    <template v-slot:left>
      <div class="md:py-6">
        <h2>
          Lorem ipsum dolort amet, consectetur adipise elit. Ultrices sap lorem
          lobortis amet con tristique.
        </h2>
      </div>
    </template>
  </FullSplit>

  <div class="grid md:grid-cols-2 gap-4 py-6">
    <div class="bg-awm-placeholder w-full h-96"></div>
    <div class="bg-awm-placeholder w-full h-96"></div>
  </div>

  <Container>
    <div class="mx-auto max-w-4xl">
      <h2 class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        cras pege risus viverra.
      </h2>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nisl
        neque, blandit varius fermentum, faucibus sem condimentum. Ultricies
        risus tristique sagittis vel non libero platea. Suspendisse mauris nunc
        et justo. Aliquam enim amet fames ut sit imperdiet. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Landit varius fermentum, faucibus
        sem condimentum. Ultricies risus tristique sagittis vel non libero
        platea. Suspendisse mauris nunc et justo. Aliquam enim amet fames ut sit
        imperdiet.
      </p>
    </div>
  </Container>

  <Container>
    <div class="px-6 md:px-12 py-12 md:py-16 bg-awm-red">
      <div class="text-center flex flex-col items-center">
        <img src="@/assets/icons/quote.svg" class="w-10 h-10" alt="" />
        <blockquote
          class="text-white text-center text-xl max-w-3xl font-semibold mt-6"
        >
          Air Whistle Media impressed us with anticipating our digital needs
          during the discovery phase and then delivering on time and budget. I
          value their ongoing partnership equally as much as their ability to
          deliver; focusing on a true partnership not just being an
          implementation vendor.
        </blockquote>
        <p class="text-white text-xl mt-6">
          — Stephen Cave, Digital Program Manager
        </p>
      </div>
    </div>
    <div
      class="py-12 flex items-center gap-6 flex-col md:flex-row justify-around"
    >
      <Button class="btn btn-xl btn-flipped btn-dark">Previous Project</Button>
      <Button class="btn btn-xl btn-dark">Next Project</Button>
    </div>
  </Container>
</template>