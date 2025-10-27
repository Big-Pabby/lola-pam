<template>
  <section class="py-20 px-6 bg-(--wedding-accent)">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="wedding-heading mb-2">Guests of Honor</h2>
        <p class="wedding-subtitle">Our beloved family and wedding party</p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Best Man -->
        <div
          class="bg-[#F5E6D3] rounded-[10px] shadow-[0px_2px_8px_rgba(129,95,26,0.05)] overflow-hidden"
        >
          <img
            src="/wedding/best-man.svg"
            alt="Pelumi Apanisile - Best Man"
            class="w-full h-[443px] object-cover"
          />
          <div class="p-6 text-center space-y-2">
            <h3 class="text-[20.8px] font-bold text-[#3B3F3B]">
              Pelumi Apanisile
            </h3>
            <p class="text-[16px] italic font-light text-[#B8956A]">Best Man</p>
            <p class="text-[14.4px] text-[#3B3F3B]">Brother in Arms</p>
          </div>
        </div>

        <!-- Maid of Honor -->
        <div
          class="bg-[#F5E6D3] rounded-[10px] shadow-[0px_2px_8px_rgba(129,95,26,0.05)] overflow-hidden"
        >
          <img
            src="/wedding/maid-of-honor.svg"
            alt="Jumoke Obatoye - Maid of Honor"
            class="w-full h-[443px] object-cover"
          />
          <div class="p-6 text-center space-y-2">
            <h3 class="text-[20.8px] font-bold text-[#3B3F3B]">
              Jumoke Obatoye
            </h3>
            <p class="text-[16px] italic font-light text-[#B8956A]">
              Maid of Honor
            </p>
            <p class="text-[14.4px] text-[#3B3F3B]">
              Best Friend & Confidante
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
