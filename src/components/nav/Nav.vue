<template>
  <Popover
    class="sticky left-0 top-0 w-full z-20 transition-all"
    :class="top ? '' : 'bg-white'"
  >
    <!-- Announcement -->
    <div
      v-if="showAnnouncement"
      class="
        bg-accent-light
        py-3
        flex
        items-center
        lg:justify-center
        relative
        pl-4
        pr-12
      "
    >
      <div class="lg:flex items-center justify-center">
        <p class="text-base text-black">Announcement Text Placeholder</p>
        <button class="lg:ml-6 uppercase font-medium flex items-center">
          Learn More <ArrowRightIcon class="w-4 h-4 ml-2" />
        </button>
      </div>
      <button class="grid items-center absolute right-4" @click="toggleAlert">
        <XIcon class="w-6 h-6" />
      </button>
    </div>

    <!-- Nav -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          md:justify-start md:space-x-5
        "
      >
        <!-- Nav Logo -->
        <div class="flex justify-start items-center lg:w-0 flex-1">
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">Air Whistle Media</span>
            <div class="flex items-center">
              <img
                class="h-7 w-auto flex items-center"
                src="@/assets/logo.svg"
                alt="Air Whistle Media"
              />
            </div>
          </router-link>
        </div>

        <div class="-mr-2 -my-2">
          <PopoverButton
            class="
              rounded-full
              p-1
              inline-flex
              items-center
              justify-center
              text-white
              transition
              bg-awm-red
              hover:bg-awm-red-75
            "
          >
            <span class="sr-only">Open menu</span>
            <img
              src="@/assets/icons/menu.svg"
              class="h-8 md:h-10 w-8 md:w-10 text-white"
              aria-hidden="true"
            />
          </PopoverButton>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-100 ease-out"
      enter-from-class="opacity-0 scale-y-100"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-y-100"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          z-10
          transition
          transform
          bg-awm-navy
          shadow-lg
          overflow-hidden
          pt-1
        "
      >
        <img
          class="
            absolute
            -top-12
            right-0
            opacity-20
            transition-all
            lg:opacity-100
            object-cover
            h-[48rem]
          "
          src="@/assets/icons/graphic-white.svg"
          alt=""
          aria-hidden="true"
        />

        <Container class="!py-0 md:-my-6 md:px-0">
          <div class="">
            <div class="py-4">
              <div class="flex items-center justify-between">
                <router-link :to="{ name: 'home' }">
                  <img
                    class="h-7 w-auto flex items-center"
                    src="@/assets/icons/logo-white.svg"
                    alt="Air Whistle Media"
                  />
                </router-link>
                <PopoverButton
                  class="
                    rounded-md
                    p-1
                    inline-flex
                    items-center
                    justify-center
                    transition
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon
                    class="
                      h-7
                      md:h-10
                      w-7
                      md:w-10
                      text-awm-white
                      lg:text-awm-red
                    "
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
              <div class="mt-6">
                <nav class="grid">
                  <PopoverButton class="space-y-2">
                    <router-link
                      v-for="item in navigation"
                      :key="item.label"
                      :to="{ name: item.name }"
                      class="nav-item-mobile"
                    >
                      <span class="flex items-center text-3xl md:text-4xl lg:text-5xl">
                        <div id="dash" aria-hidden="true" class="transition-all duration-300 h-1.5 lg:h-2 w-6 lg:w-9 bg-awm-white" />
                        <span id="label" class="transform transition-all duration-300">{{
                          item.label
                        }}</span>
                      </span>
                    </router-link>
                  </PopoverButton>
                </nav>
              </div>
            </div>
          </div>
        </Container>
      </PopoverPanel>
    </transition>
  </Popover>
  <!-- <div class="mb-20 pb-1" /> -->
</template>

<script>
import NavItem from "@/components/nav/NavItem.vue";
import { navigation } from "@/data";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon, ArrowRightIcon } from "@heroicons/vue/outline";
import Container from "../layouts/Container.vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    MenuIcon,
    XIcon,
    NavItem,
    ArrowRightIcon,
    Container,
  },
  setup() {
    return { navigation };
  },
  data() {
    // Set showAnnouncement to true if you want to preview the alert
    return { showAnnouncement: false, top: true };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // if (
      //   this.$route.name !== "aftermarket/oasis" &&
      //   this.$route.name !== "home"
      // ) {
      //   this.top = false;
      // } else {
      //   }
      this.top = window.scrollY < 50;
    });
  },
  watch: {
    // listen for route change
    $route() {
      this.top = window.scrollY < 100;
    },
  },
  methods: {
    toggleAlert() {
      this.showAnnouncement = !this.showAnnouncement;
    },
  },
};
</script>
