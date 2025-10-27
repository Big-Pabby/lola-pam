<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-[#FBF5EA] backdrop-blur-sm shadow-sm">
    <div class="container mx-auto px-6 py-4 flex md:flex-col items-center justify-between">
      <NuxtLink to="/wedding" class="flex items-center">
        <img src="/wedding/couple-logo.svg" alt="Chris & 25 Logo" class="h-16 w-auto" />
      </NuxtLink>
      
      <div class="hidden md:flex items-center gap-12">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="`#${item.id}`"
          class="nav-link text-[15.2px] font-medium tracking-wider text-[#3B3F3B] hover:text-(--wedding-primary) transition-colors"
        >
          {{ item.label }}
        </a>
      </div>
      
      <button 
        @click="toggleMenu"
        class="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-t">
      <div class="container mx-auto px-6 py-4 flex flex-col gap-4">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="`#${item.id}`"
          @click="toggleMenu"
          class="text-[15.2px] font-medium tracking-wider text-(--wedding-text) hover:text-(--wedding-primary) transition-colors"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navItems = [
  { id: 'our-story', label: 'Our Story' },
  { id: 'proposal', label: 'Proposal' },
  { id: 'memories', label: 'Notable Memories' },
  { id: 'social-feed', label: 'SM Feed' },
  { id: 'invitation', label: 'Get IV' }
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-wedding-primary);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>