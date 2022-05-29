<script setup>
const { flipped, leftClass, rightClass } = defineProps({
  flipped: Boolean,
  leftClass: String,
  rightClass: String,
});
</script>

<template>
  <div class="md:pt-6 pb-12">
    <main class="lg:relative">
      <div
        :class="`${leftClass} mx-auto max-w-7xl w-full py-12 md:pt-0 lg:py-32 lg:flex ${
          flipped && 'justify-end'
        }
      `"
      >
        <div
          class="px-4 lg:w-1/2 sm:px-12"
          :class="flipped ? 'xl:pl-24' : 'xl:pr-24'"
        >
          <slot name="left"></slot>
        </div>
      </div>
      <div
        :class="`
        ${rightClass}
        relative
        w-full
        h-72
        lg:h-96
        lg:absolute lg:inset-y-0 ${
          flipped ? 'lg:left-0' : 'lg:right-0'
        } lg:w-1/2 lg:h-full
        
      `"
      >
        <slot name="right"></slot>
      </div>
    </main>
  </div>
</template>
