<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Hr from "../../components/layouts/Hr.vue";

const members = [
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
  {
    name: "David MacDonald",
    title: "Position Title",
    linkedin: "#",
  },
];
</script>

<template>
  <Header />

  <FullSplit flipped>
    <template v-slot:left>
      <h2>Lorem ipsum dolor sit amet, consectetur</h2>
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

  <Hr />

  <Container>
    <h2 class="mx-auto max-w-lg text-center">
      A statement about the quality and traits of the team.
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 mt-12">
      <div v-for="(member, index) in members" :key="index">
        <div class="bg-awm-placeholder h-64 w-full mb-4" />
        <h4 class="">{{ member.name }}</h4>
        <p>{{ member.title }}</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img
            src="@/assets/icons/linkedin-red.svg"
            alt=""
            class="w-5 h-5 mt-2"
          />
        </a>
      </div>
    </div>
  </Container>

  <Container>
    <div class="px-12 py-24 bg-awm-red">
      <div class="bg-red-awn text-center flex flex-col items-center">
        <h2 class="text-white text-center">Join Us</h2>
        <p class="text-white max-w-xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          euismod justo volutpat orci volutpat consequat nunc.
        </p>
        <router-link :to="{ name: 'contact' }" class="btn btn-xl mt-8">
          get in touch</router-link
        >
      </div>
    </div>
  </Container>
</template>
