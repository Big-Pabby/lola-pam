<template>
  <svg :width="width" :height="height" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" rx="8" fill="url(#instagram_gradient_a)"/>
    <path d="M18 12.5C14.9625 12.5 12.5 14.9625 12.5 18C12.5 21.0375 14.9625 23.5 18 23.5C21.0375 23.5 23.5 21.0375 23.5 18C23.5 14.9625 21.0375 12.5 18 12.5ZM18 21.5C16.075 21.5 14.5 19.925 14.5 18C14.5 16.075 16.075 14.5 18 14.5C19.925 14.5 21.5 16.075 21.5 18C21.5 19.925 19.925 21.5 18 21.5Z" fill="white"/>
    <path d="M23.75 13.25C24.4404 13.25 25 12.6904 25 12C25 11.3096 24.4404 10.75 23.75 10.75C23.0596 10.75 22.5 11.3096 22.5 12C22.5 12.6904 23.0596 13.25 23.75 13.25Z" fill="white"/>
    <path d="M26.5 9.5C25.5 8.5 24 8 22 8H14C10 8 8 10 8 14V22C8 24 8.5 25.5 9.5 26.5C10.5 27.5 12 28 14 28H22C24 28 25.5 27.5 26.5 26.5C27.5 25.5 28 24 28 22V14C28 12 27.5 10.5 26.5 9.5ZM26 22C26 23.5 25.5 24.5 25 25C24.5 25.5 23.5 26 22 26H14C12.5 26 11.5 25.5 11 25C10.5 24.5 10 23.5 10 22V14C10 12.5 10.5 11.5 11 11C11.5 10.5 12.5 10 14 10H22C23.5 10 24.5 10.5 25 11C25.5 11.5 26 12.5 26 14V22Z" fill="white"/>
    <defs>
      <linearGradient id="instagram_gradient_a" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FD5"/>
        <stop offset="0.5" stop-color="#FF543E"/>
        <stop offset="1" stop-color="#C837AB"/>
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  width?: number | string;
  height?: number | string;
}>();
</script>