<template>
  <svg :width="width" :height="height" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8182 10.1818L19.0909 3H17.4545L12.1364 9.25455L7.90909 3H3L9.54545 12.1818L3 19.6364H4.63636L10.2273 13.0909L14.6364 19.6364H19.5455L12.8182 10.1818ZM11 12L10.3636 11.0909L5.18182 4.18182H7.09091L11.2727 9.81818L11.9091 10.7273L17.4545 18.6364H15.5455L11 12Z" fill="currentColor"/>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  width?: number | string;
  height?: number | string;
}>();
</script>