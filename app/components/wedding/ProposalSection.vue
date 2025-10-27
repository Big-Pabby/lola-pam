<template>
  <section id="proposal" class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-4xl">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Carousel -->
        <div class="order-2 md:order-1 relative group">
          <div class="relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg">
            <!-- Images -->
            <div
              v-for="(image, index) in proposalImages"
              :key="image"
              :class="[
                'absolute inset-0 transition-all duration-500 ease-in-out',
                index === currentIndex
                  ? 'translate-x-0 opacity-100 z-10'
                  : index < currentIndex
                  ? '-translate-x-full opacity-0 z-0'
                  : 'translate-x-full opacity-0 z-0',
              ]"
            >
              <img
                :src="image"
                :alt="`Proposal moment ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Navigation Arrows -->
            <button
              @click="handlePrev"
              class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20"
              aria-label="Previous image"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click="handleNext"
              class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-20"
              aria-label="Next image"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- Indicators -->
          <div class="flex justify-center gap-2 mt-4">
            <button
              v-for="(_, index) in proposalImages"
              :key="index"
              @click="goToSlide(index)"
              :class="[
                'transition-all rounded-full',
                currentIndex === index
                  ? 'bg-[#065A05] w-8 h-3'
                  : 'bg-gray-300 w-3 h-3 hover:bg-gray-400',
              ]"
              :aria-label="`Go to slide ${index + 1}`"
            />
          </div>
        </div>

        <!-- Content -->
        <div class="order-1 md:order-2 space-y-6">
          <div>
            <h2 class="wedding-heading mb-2">The Proposal</h2>
            <p class="wedding-subtitle">The moment we said "Forever"</p>
          </div>

          <p class="text-[17.6px] leading-[31.68px] text-[#3B3F3B]">
            Under a sky painted with stars, with hearts full of love and dreams of tomorrow,
            the question was asked and answered with joyful tears and an enthusiastic "Yes!"
          </p>

          <p class="text-[17.6px] leading-[31.68px] text-[#3B3F3B]">
            It was a moment we'll cherish forever—the beginning of our next chapter, surrounded
            by love and the promise of a beautiful future together.
          </p>

          <button
            class="px-6 py-2 bg-[#065A05] text-white text-[15.2px] font-medium tracking-wider rounded-lg hover:bg-[#054504] transition-colors"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const proposalImages = [
  "/wedding/proposal-heart.jpg",
  "/wedding/prop-1.png",
  "/wedding/prop-2.png",
  "/wedding/prop-3.png",
];

const currentIndex = ref(0);
const isTransitioning = ref(false);

let intervalId: NodeJS.Timeout | null = null;

const handleNext = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value = (currentIndex.value + 1) % proposalImages.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const handlePrev = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  currentIndex.value =
    (currentIndex.value - 1 + proposalImages.length) % proposalImages.length;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const goToSlide = (index: number) => {
  if (isTransitioning.value || index === currentIndex.value) return;
  isTransitioning.value = true;
  currentIndex.value = index;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

onMounted(() => {
  intervalId = setInterval(() => {
    handleNext();
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
/* Additional styles if needed */
</style>