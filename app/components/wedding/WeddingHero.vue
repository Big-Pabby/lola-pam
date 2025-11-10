<template>
  <div class="mt-24 sm:mt-[100px]">
    <section class="relative h-[85vh] sm:h-screen w-full overflow-hidden pb-8">
      <!-- Background Images with Slide Transition -->
      <div class="absolute inset-0">
        <transition-group name="slide">
          <img
            v-for="(image, index) in heroImages"
            :key="image"
            v-show="index === currentImageIndex"
            :src="image"
            alt="Wedding celebration"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
        </transition-group>
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40" />

      <!-- Content -->
      <div class="relative h-full flex flex-col items-center justify-center">
        <div class="text-center space-y-6 px-6 max-w-4xl mx-auto">
          <div class="bg-[#00000066] py-4 sm:py-6 px-6 sm:px-32 rounded-xl">
            <h1
              class="wedding-hero-title text-3xl sm:text-6xl leading-8 sm:leading-16 mb-2 animate-fade-in"
            >
              We're Getting<br />Married!
            </h1>
            <p
              class="wedding-hero-subtitle text-base sm:text-lg animate-fade-in-delay"
            >
              Join us as we celebrate our love
            </p>
          </div>
          <div
            class="flex flex-col sm:flex-row gap-4 md:items-center items-stretch justify-center"
          >
            <a
              href="https://clients.leyeojeniyi.com/lolaandpamilerinprewedding/"
              target="_blank"
              class="px-6 py-3 bg-[#065A05] text-white text-[15.2px] font-medium tracking-wider rounded-lg hover:bg-[#054504] transition-colors"
            >
              Download Pictures
            </a>
            <button
              @click="directionsModal.showModal()"
              class="px-6 cursor-pointer py-3 bg-white text-[#065A05] text-[15.2px] font-medium tracking-wider rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div
          class="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-3"
        >
          <button
            v-for="(_, index) in heroImages"
            :key="index"
            @click="currentImageIndex = index"
            :class="[
              'w-2.5 h-2.5 rounded-full transform transition-all duration-300',
              currentImageIndex === index
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60 scale-100',
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          />
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
const directionsModal = useDirectionsModal();

let intervalId: ReturnType<typeof setInterval> | null = null;

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
