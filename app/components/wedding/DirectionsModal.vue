<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-9999 h-screen overflow-y-hidden"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
    >
      <div
        class="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        @click="close"
      ></div>
      <div
        class="relative bg-white rounded-2xl text-left overflow-y-auto shadow-2xl transform transition-all sm:my-8 sm:max-w-2xl w-full scale-95 sm:scale-100 max-h-[90vh]"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3  sm:mt-0 text-left w-full">
              <div
                class="flex items-center justify-between mb-8 border-b border-gray-100 pb-4"
              >
                <h3 class="text-3xl font-bold text-gray-900" id="modal-title">
                  <span class="block text-sm text-[#065A05] mb-1"
                    >Wedding Venues</span
                  >
                  Event Locations
                </h3>
                <button
                  @click="close"
                  class="rounded-full p-2 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#065A05] focus:ring-offset-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="mt-4 grid sm:grid-cols-2 gap-4 px-1">
                <!-- Engagement Venue -->
                <div
                  class="p-6 bg-gray-50/50 rounded-2xl hover:bg-gray-50 transition-all duration-300 group border border-gray-100"
                >
                  <h4
                    class="text-lg font-bold text-[#065A05] mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Engagement Venue
                  </h4>
                
                  <button
                  
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-[#065A05]/10 text-[#065A05] hover:bg-[#065A05] hover:text-white transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                </button>
                </div>
                <!-- Church Venue -->
                <div
                  class="p-6 bg-gray-50/50 rounded-2xl hover:bg-gray-50 transition-all duration-300 group border border-gray-100"
                >
                  <h4
                    class="text-lg font-bold text-[#065A05] mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Church Venue
                  </h4>
                 
                  <button
                    
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-[#065A05]/10 text-[#065A05] hover:bg-[#065A05] hover:text-white transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                </button>
                </div>
                <!-- Reception Venue -->
                <div
                  class="p-6 bg-gray-50/50 rounded-2xl hover:bg-gray-50 transition-all duration-300 group border border-gray-100"
                >
                  <h4
                    class="text-lg font-bold text-[#065A05] mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      />
                    </svg>
                    Reception Venue
                  </h4>
                 
                  <button
                   
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-[#065A05]/10 text-[#065A05] hover:bg-[#065A05] hover:text-white transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                </button>
                </div>
                <!-- Hotel -->
                <div
                  class="p-6 bg-gray-50/50 rounded-2xl hover:bg-gray-50 transition-all duration-300 group border border-gray-100"
                >
                  <h4
                    class="text-lg font-bold text-[#065A05] mb-2 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 3h6m-6 4h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    Hotel
                  </h4>
                 
                  <button
                   
                    class="inline-flex items-center px-4 py-2 rounded-lg bg-[#065A05]/10 text-[#065A05] hover:bg-[#065A05] hover:text-white transition-colors"
                  >
                    <span>Get Directions</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-4 sm:px-8"
        >
          <!-- <button
            type="button"
            class="w-full inline-flex justify-center items-center rounded-xl px-6 py-4 bg-[#065A05] text-white text-base font-medium hover:bg-[#054504] transition-all duration-300 hover:shadow-lg hover:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#065A05] focus:ring-offset-2"
            @click="close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{ (e: "close"): void }>();
const close = () => {
  emit("close");
};
</script>

<style scoped>
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #065a05 transparent;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #065a05;
  border-radius: 20px;
}

/* Fade in and blur animation for modal backdrop */
.backdrop-blur-sm {
  animation: fadeInBlur 0.3s ease-out;
}

/* Scale up animation for modal content */
.transform {
  animation: modalEnter 0.4s cubic-bezier(0.21, 1.02, 0.73, 1);
}

@keyframes fadeInBlur {
  from {
    opacity: 0;
    backdrop-filter: blur(0);
  }
  to {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}

@keyframes modalEnter {
  from {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

/* Hover effects for venue cards */
.group {
  transition: all 0.3s cubic-bezier(0.21, 1.02, 0.73, 1);
}

.group:hover {
  transform: translateY(-2px);
}

.group:hover h4 {
  transform: scale(1.02);
}

.group:hover svg {
  transform: scale(1.15) rotate(5deg);
}

/* Smooth transitions */
h4,
svg,
a {
  transition: all 0.3s cubic-bezier(0.21, 1.02, 0.73, 1);
}

/* Link hover effect */
a {
  position: relative;
  overflow: hidden;
}

a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #065a05;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
  z-index: -1;
}

a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
