<template>
  <section id="social-feed" class="py-20 px-6 bg-[#F5E6D3]">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="wedding-heading mb-2">Social Media Feed</h2>
        <p class="wedding-subtitle">Follow our journey on social media</p>
      </div>

      <!-- Subheading -->
      <h3 class="text-[24px] font-bold text-[#D4A574] text-center mb-8">
        Our Posts
      </h3>

      <!-- Posts Grid -->
      <div class="grid md:grid-cols-2 items-start gap-6">
        <!-- Instagram Post 1 -->
        <iframe
          src="https://platform.twitter.com/embed/Tweet.html?id=1797947107753783414"
          class="w-full h-[550px] max-w-[550px]"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>

        <!-- Twitter/X Post 1 -->
        <iframe
          :src="`https://platform.twitter.com/embed/Tweet.html?id=1891206388199678035`"
          class="w-full h-[550px] max-w-[550px]"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>

        <!-- Twitter/X Post 2 -->
        <iframe
          :src="`https://platform.twitter.com/embed/Tweet.html?id=1925226301981437973`"
          class="w-full h-[550px] max-w-[550px]"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>

        <!-- Instagram Post 2 -->
        <iframe
          :src="`https://platform.twitter.com/embed/Tweet.html?id=1792661861143368048`"
         class="w-full h-[550px] max-w-[550px]"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional script needed for iframe embeds
</script>

<style scoped>
/* Ensure iframes are responsive */
iframe {
  max-width: 100%;
}
</style>
