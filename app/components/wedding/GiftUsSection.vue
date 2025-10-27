<template>
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto max-w-5xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="wedding-heading mb-2">Gift Us</h2>
        <p class="wedding-subtitle">Your presence is the greatest gift, but if you wish to bless us...</p>
      </div>
      
      <!-- Gift Card -->
      <div class="bg-[#F5E6D3] rounded-xl p-8 space-y-6">
        <h3 class="text-[20.8px] font-bold text-[#3a3a3a] text-center">Monetary Gifts 💝</h3>
        
        <div class="grid md:grid-cols-3 gap-8 bg-white p-8 rounded-lg">
          <!-- Bank Name -->
          <div class="space-y-2">
            <p class="text-[16px] font-medium text-[#D4A574]">Bank Name:</p>
            <div class="flex items-center gap-2">
              <img src="/wedding/fidelity-bank.png" alt="Fidelity Bank" class="w-5 h-5" />
              <p class="text-[22px] font-bold tracking-[0.22px] text-[#1c211c]">Fidelity Bank</p>
            </div>
          </div>
          
          <!-- Account Name -->
          <div class="space-y-2">
            <p class="text-[16px] font-medium text-[#D4A574]">Account Name:</p>
            <p class="text-[22px] font-bold tracking-[0.22px] text-[#1c211c]">Oluwapamilerin Fadeni</p>
          </div>
          
          <!-- Account Number -->
          <div class="space-y-2">
            <p class="text-[16px] font-medium text-[#D4A574]">Account Number:</p>
            <div class="flex items-center gap-2">
              <p class="text-[22px] font-bold tracking-[0.22px] text-[#1c211c]">5050296404</p>
              <button 
                @click="copyAccountNumber"
                class="p-1 hover:bg-gray-200 rounded transition-colors"
                aria-label="Copy account number"
              >
                <CopyIcon width="16" height="18" color="#575a57" />
              </button>
            </div>
          </div>
        </div>
        
        <p class="text-[16px] italic text-[#B8956A] text-center" style="font-family: Georgia, serif;">
          Thank you for your love and generosity
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CopyIcon from '~/components/wedding/icons/CopyIcon.vue';

const copyAccountNumber = () => {
  navigator.clipboard.writeText('5050296404');
  alert('Account number copied to clipboard!');
};
</script>