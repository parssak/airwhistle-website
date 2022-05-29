<script setup>
const { flipped, leftClass, rightClass } = defineProps({
  flipped: Boolean,
  leftClass: String,
  rightClass: String,
});
</script>

<template>
  <div class="lg:py-4 overflow-hidden">
    <main class="lg:relative">
      <div
        :class="`${leftClass} mx-auto max-w-7xl py-8 lg:py-16 lg:flex ${
          flipped && 'justify-end'
        }
      `"
      >
        <div
          class="lg:w-1/2 px-4 sm:px-6 md:px-12 xl:px-6"
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
          flipped ? 'lg:left-0 translate-x-[-0.5rem]' : 'lg:right-0 translate-x-[0.5rem]'
        } lg:w-1/2 lg:h-full
        
      `"
      >
        <slot name="right">
          <div class="w-full h-full bg-awm-placeholder"></div>
        </slot>
      </div>
    </main>
  </div>
</template>
