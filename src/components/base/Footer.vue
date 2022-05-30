<template>
  <footer class="bg-awm-navy" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <Container class="!py-0">
      <div
        class="pt-12 pb-24 flex flex-col items-center border-b border-awm-white"
        v-if="!isContactPage"
      >
        <h1 class="text-awm-white text-center md:text-5xl">
          Ready To Work With Us? <br class="hidden md:block" />
          We’d Love To Be Your Partner.
        </h1>
        <router-link :to="{ name: 'contact' }">
          <Button class="btn btn-light btn-xl mt-12">Get in Touch</Button>
        </router-link>
      </div>
      <div
        class="flex justify-between gap-6 flex-col lg:flex-row lg:items-center"
        :class="isContactPage ? 'py-4' : 'py-8'"
      >
        <div class="flex flex-col gap-6 md:flex-row">
          <address class="not-italic text-awm-white font-semibold">
            10-5195 Harvester Road <br />
            Burlington, ON L7L 6E9
          </address>
          <div>
            <a
              class="
                block
                with-underline
                font-semibold
                hover:text-awm-red-75
                text-awm-white
              "
              href="tel:+905-639-9499"
              >+905-639-9499</a
            >
            <a
              class="
                block
                with-underline
                font-semibold
                hover:text-awm-red-75
                text-awm-white
              "
              href="mailto:info@airwhistle.com"
              >info@airwhistle.com</a
            >
          </div>
        </div>
        <div class="text-awm-white">
          <a class="underline" href="#">Privacy</a>
          |
          <a class="underline" href="#">Terms & Conditions</a>
        </div>
        <div class="flex items-center">
          <p class="font-semibold text-base text-awm-white">Air Whistle Media &copy; 2022</p>
          <img src="@/assets/icons/mini-logo.svg" class="w-8 h-8 ml-2 mb-1" alt="">
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
import { navigation } from "@/data";
import Container from "../layouts/Container.vue";
import Button from "./Button.vue";

export default {
  setup() {
    return { navigation };
  },
  computed: {
    isContactPage() {
      return this.$route.name === "contact";
    },
  },
  components: { Container, Button },
};
</script>
