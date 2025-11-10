<template>
  <div class="mt-24 sm:mt-[100px]">
    <section class="relative h-[85vh] sm:h-screen w-full overflow-hidden pb-8">
      <!-- Background Images with Slide Transition -->
      <div class="absolute inset-0">
        <transition-group name="slide">
          <div
            v-for="(image, index) in heroImages"
            :key="image"
            v-show="index === currentImageIndex"
            class="absolute inset-0 w-full h-full"
          >
            <img
              :src="image"
              alt="Wedding celebration"
              class="absolute inset-0 w-full h-full object-cover object-center"
            />
            <!-- Green gradient overlay -->
            <div
              class="absolute inset-0 "
            />
          </div>
        </transition-group>
      </div>

      <!-- Fixed Content -->
      <div
        class="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
      >
        <div class="text-center space-y-8 px-6 max-w-4xl mx-auto">
          <div
            class="bg-[#00000066] py-8 sm:py-10 px-8 sm:px-32 rounded-2xl shadow-2xl"
          >
            <h1
              class="wedding-hero-title text-4xl sm:text-6xl font-bold leading-tight sm:leading-tight mb-4 animate-fade-in text-white"
            >
              We're Getting<br />Married!
            </h1>
            <p
              class="wedding-hero-subtitle text-lg sm:text-xl animate-fade-in-delay text-white/90"
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
              class="px-6 py-3 bg-[#065A05] text-white text-[15.2px] font-medium tracking-wider rounded-lg hover:bg-[#054504] transition-colors pointer-events-auto"
            >
              Download Pictures
            </a>
            <button
              @click="directionsModal.showModal()"
              class="px-6 cursor-pointer py-3 bg-white text-[#065A05] text-[15.2px] font-medium tracking-wider rounded-lg hover:bg-gray-100 transition-colors pointer-events-auto"
            >
              Get Directions
            </button>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <div
          class="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-3 pointer-events-auto"
        >
          <button
            v-for="(_, index) in heroImages"
            :key="index"
            @click="currentImageIndex = index"
            :class="[
              'w-2.5 h-2.5 rounded-full transform transition-all duration-300 hover:scale-150',
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
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
}

.slide-leave-active {
  transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}

.slide-enter-from {
  transform: scale(1.1);
  opacity: 0;
}

.slide-leave-to {
  transform: scale(0.9);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: scale(1);
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in-delay {
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
}
</style>
