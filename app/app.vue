<template>
  <div class="wedding-page">
    <!-- Nav - immediate animation -->
    <div>
      <WeddingNav />
    </div>

    <!-- Hero - immediate animation -->
    <div class="animate-section" data-delay="100">
      <WeddingHero />
    </div>

    <!-- Scroll-triggered sections -->
    <div class="animate-section" data-delay="0">
      <OurStorySection />
    </div>

    <div class="animate-section" data-delay="100">
      <ProposalSection />
    </div>

    <div class="animate-section" data-delay="0">
      <NotableMemoriesSection />
    </div>

    <div class="animate-section" data-delay="100">
      <GuestsOfHonorSection />
    </div>

    <div class="animate-section" data-delay="0">
      <SocialMediaFeedSection />
    </div>

    <div class="animate-section" data-delay="100">
      <GiftUsSection />
    </div>

    <div class="animate-section" data-delay="0">
      <InvitationSection />
    </div>

    <div class="animate-section" data-delay="100">
      <WeddingFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import WeddingNav from "~/components/wedding/WeddingNav.vue";
import WeddingHero from "~/components/wedding/WeddingHero.vue";
import OurStorySection from "~/components/wedding/OurStorySection.vue";
import ProposalSection from "~/components/wedding/ProposalSection.vue";
import NotableMemoriesSection from "~/components/wedding/NotableMemoriesSection.vue";
import GuestsOfHonorSection from "~/components/wedding/GuestsOfHonorSection.vue";
import SocialMediaFeedSection from "~/components/wedding/SocialMediaFeedSection.vue";
import GiftUsSection from "~/components/wedding/GiftUsSection.vue";
import InvitationSection from "~/components/wedding/InvitationSection.vue";
import WeddingFooter from "~/components/wedding/WeddingFooter.vue";

useHead({
  title: "We're Getting Married! - Chris & Christianah",
  meta: [
    // HTML Meta Tags
    {
      name: "description",
      content:
        "Join us as we celebrate our love - Wedding of Christianah & Isreal",
    },

    // Facebook Meta Tags
    {
      property: "og:url",
      content: "https://www.lola-pamilerin.live/",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:title",
      content: "We're Getting Married! - Chris & Christianah",
    },
    {
      property: "og:description",
      content:
        "Join us as we celebrate our love - Wedding of Christianah & Isreal",
    },
    {
      property: "og:image",
      content: "https://lola-pamilerin.live/cover.png",
    },

    // Twitter Meta Tags
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:domain",
      content: "lola-pamilerin.live",
    },
    {
      property: "twitter:url",
      content: "https://www.lola-pamilerin.live/",
    },
    {
      name: "twitter:title",
      content: "We're Getting Married! - Chris & Christianah",
    },
    {
      name: "twitter:description",
      content:
        "Join us as we celebrate our love - Wedding of Christianah & Isreal",
    },
    {
      name: "twitter:image",
      content: "https://lola-pamilerin.live/cover.png",
    },
  ],
});

let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Create intersection observer for scroll animations
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-delay") || "0";
          setTimeout(() => {
            entry.target.classList.add("animated");
          }, parseInt(delay));
          // Optional: stop observing after animation
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before element enters viewport
    }
  );

  // Observe all animate-section elements
  const sections = document.querySelectorAll(".animate-section");
  sections.forEach((section) => {
    observer?.observe(section);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
.wedding-page {
  scroll-behavior: smooth;
}

/* Initial state - hidden */
.animate-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animated state - visible */
.animate-section.animated {
  opacity: 1;
  transform: translateY(0);
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
