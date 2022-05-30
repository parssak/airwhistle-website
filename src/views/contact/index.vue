<script setup>
import Header from "@/components/base/Header.vue";
import Container from "@/components/layouts/Container.vue";
import FullSplit from "@/components/layouts/FullSplit.vue";
import Hr from "../../components/layouts/Hr.vue";
import Button from "@/components/base/Button.vue";
import Button1 from "@/components/base/Button.vue";
</script>

<template>
  <Header />

  <Container>
    <div class="space-y-4">
      <h2>
        Give us a call at
        <a href="tel:905-639-9499" class="with-underline text-awm-red"
          >+905-639-9499</a
        >
      </h2>
      <h2>
        Give us a call at
        <a href="mailto:info@airwhistle.com" class="with-underline text-awm-red"
          >info@airwhistle.com</a
        >
      </h2>
      <h2>
        Stop by
        <address class="text-awm-red inline not-italic">
          10-5195 Harvester Road, Burlington, ON L7L 6E9
        </address>
      </h2>
    </div>
  </Container>

  <FullSplit leftClass="bg-awm-red" class="bg-awm-red lg:py-0">
    <template v-slot:left>
      <h2 class="text-white text-center">What Can We Do For You?</h2>
      <p class="text-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
        euismod justo volutpat orci volutpat consequat nunc duied ofid.
      </p>
      <form class="grid gap-x-4 gap-y-8 mt-8">
        <div>
          <label class="form-label">First Name*<input type="text" /></label>
        </div>
        <div>
          <label class="form-label">Last Name*<input type="text" /></label>
        </div>
        <div>
          <label class="form-label">Phone Number*<input type="tel" /></label>
        </div>
        <div>
          <label class="form-label">Email*<input type="email" /></label>
        </div>
        <div class="md:col-span-2">
          <label class="form-label">Subject*<input type="text" /></label>
        </div>
        <div class="md:col-span-2">
          <label class="form-label"
            >Message*<textarea rows="4"></textarea>
          </label>
        </div>
        <div class="md:col-span-2 grid place-items-center">
          <Button class="btn btn-xl btn-light btn-hover-navy">Send Message</Button>
        </div>
      </form>
    </template>
    <template v-slot:right>
      <img
        src="@/assets/images/map.png"
        class="w-full h-full object-cover"
        alt=""
      />
    </template>
  </FullSplit>
</template>
