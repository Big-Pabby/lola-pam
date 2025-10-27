<template>
  <svg :width="width" :height="height" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0H2C0.9 0 0 0.9 0 2V13H2V2H11V0ZM13.5 4H5C3.9 4 3 4.9 3 6V16C3 17.1 3.9 18 5 18H13.5C14.6 18 15.5 17.1 15.5 16V6C15.5 4.9 14.6 4 13.5 4ZM5 16H13.5V6H5V16Z" :fill="color"/>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  width?: number | string;
  height?: number | string;
  color?: string;
}>();
</script>