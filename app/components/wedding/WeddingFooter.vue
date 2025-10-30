<template>
  <footer class="relative py-16 px-6 bg-(--wedding-dark) overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/wedding/footer-bg.png"
        alt="Footer background"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="relative container mx-auto max-w-3xl">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <img
          src="/wedding/couple-logo.svg"
          alt="Chris & 25 Logo"
          class="w-[291px] h-[182px]"
        />
      </div>

      <!-- Quote -->
      <p
        class="text-[19.2px] italic leading-[34.56px] text-white text-center mb-12"
        style="
          font-family: 'SF Pro', -apple-system, system-ui, BlinkMacSystemFont,
            sans-serif;
        "
      >
        Love is patient, love is kind. It always protects, always trusts, always
        hopes, always perseveres. Love never fails. Thank you for being part of
        our journey. Your love and support mean the world to us.
      </p>

      <!-- Credits -->
    </div>
  </footer>
  <div
    class="realtive flex bg-white p-4 w-full items-center justify-center gap-3 flex-wrap"
  >
    <CopyrightIcon width="24" height="24" />
    <span
      class="text-[18px] font-semibold tracking-[-0.54px] text-[#575a57]"
      style="font-family: 'Open Sans', sans-serif"
    >
      2025
    </span>
    <span class="w-1 h-1 rounded-full bg-[#bfc1bf]" />
    <span
      class="text-[18px] font-semibold tracking-[-0.54px] text-[#575a57]"
      style="font-family: 'Open Sans', sans-serif"
    >
      Built by <a href="https://github.com/Big-Pabby" class="hover:underline" target="_blank"> Pabby</a>
    </span>
    <span class="w-1 h-1 rounded-full bg-[#bfc1bf]" />
    <span
      class="text-[18px] font-semibold tracking-[-0.54px] text-[#575a57]"
      style="font-family: 'Open Sans', sans-serif"
    >
      Designed with ❤️ by Pamilerin
    </span>
  </div>
</template>

<script setup lang="ts">
import CopyrightIcon from "~/components/wedding/icons/CopyrightIcon.vue";
</script>
