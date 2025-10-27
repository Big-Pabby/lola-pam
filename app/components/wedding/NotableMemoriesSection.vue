<template>
  <section id="memories" class="relative py-20 px-6 overflow-hidden">
    <!-- Background with blur effect -->
    <div class="absolute inset-0">
      <img
        src="/wedding/memories.png"
        alt="Nathan Walker on Unsplash"
        class="w-full h-full object-cover"
      />
    </div>
    <!-- <div class="absolute inset-0 bg-[rgba(0,5,0,0.3)] backdrop-blur-[100px]" /> -->

    <div class="relative container mx-auto max-w-5xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-[44.6px] font-bold tracking-[2px] text-white mb-2">
          Notable Memories
        </h2>
        <p
          class="text-[19.2px] italic text-[#ebebeb]"
          style="font-family: Georgia, serif"
        >
          Two years of love and laughter
        </p>
      </div>

      <!-- Photo Collage -->
      <div class="grid grid-cols-12 gap-4 mb-12">
        <!-- Row 1 -->
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-1.png"
            alt="Memory 1"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-2.png"
            alt="Memory 2"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-3.jpg"
            alt="Memory 3"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-9.png"
            alt="Memory 9"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>

        <!-- Row 2 -->
        <div class="col-span-12 md:col-span-4">
          <img
            src="/wedding/memory-4.png"
            alt="Memory 4"
            class="w-full h-[189px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <img
            src="/wedding/memory-5.png"
            alt="Memory 5"
            class="w-full h-[189px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-4">
          <img
            src="/wedding/memory-10.png"
            alt="Memory 10"
            class="w-full h-[189px] object-cover rounded-lg"
          />
        </div>

        <!-- Row 3 -->
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-6.png"
            alt="Memory 6"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-7.png"
            alt="Memory 7"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-11.png"
            alt="Memory 11"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
        <div class="col-span-12 md:col-span-3">
          <img
            src="/wedding/memory-8.png"
            alt="Memory 8"
            class="w-full h-[438px] object-cover rounded-lg"
          />
        </div>
      </div>

      <!-- Memories Label -->
      <div class="flex items-center md:flex-row flex-col-reverse justify-start gap-8 mb-8">
        <div class="text-left space-y-2">
          <div class="flex items-center gap-2">
            <div class="h-0.5 w-48 bg-white" />
            <h3 class="text-[44.6px] font-bold text-white">Memories</h3>
          </div>

          <p class="text-[24px] font-medium text-white">
            February 14, 2023 - November 14, 2025
          </p>
        </div>
        <img
          src="/wedding/heart-icon.png"
          alt="Heart"
          class="w-[147px] h-[134px]"
        />
      </div>

      <!-- Additional Memory -->
    </div>
  </section>
</template>
