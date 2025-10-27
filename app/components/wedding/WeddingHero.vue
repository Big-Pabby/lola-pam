<template>
  <div class="mt-[100px]">
    <section class="relative h-screen w-full overflow-hidden pb-8">
      <!-- Background Images with Slide Transition -->
      <div class="absolute inset-0">
        <transition-group name="slide">
          <img
            v-for="(image, index) in heroImages"
            :key="image"
            v-show="index === currentImageIndex"
            :src="image"
            alt="Wedding celebration"
            class="absolute inset-0 w-full h-full object-cover"
          />
        </transition-group>
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40" />

      <!-- Content -->
      <div class="relative h-full flex flex-col items-center justify-end">
        <div class="text-center px-6 max-w-4xl mx-auto">
          <div class="bg-[#00000066] py-6 px-32 rounded-xl">
            <h1 class="wedding-hero-title leading-16 mb-2 animate-fade-in">
              We're Getting<br />Married!
            </h1>
            <p class="wedding-hero-subtitle animate-fade-in-delay">
              Join us as we celebrate our love
            </p>
          </div>

          <!-- Carousel Indicators -->
          <div class="flex justify-center gap-2 mt-8">
            <button
              v-for="(_, index) in heroImages"
              :key="index"
              @click="currentImageIndex = index"
              :class="[
                'w-3 h-3 rounded-full transition-all',
                currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50',
              ]"
              :aria-label="`Go to slide ${index + 1}`"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const heroImages = [
  "/wedding/images01.png",
  "/wedding/images02.png",
  "/wedding/images03.png",
  "/wedding/images04.png",
];

const currentImageIndex = ref(0);

let intervalId: NodeJS.Timeout | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % heroImages.length;
  }, 10000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
/* Slide transition for images */
.slide-enter-active {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  z-index: 2;
}

.slide-leave-active {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  z-index: 1;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}
</style>