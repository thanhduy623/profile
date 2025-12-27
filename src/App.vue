<template>
  <Transition name="fade">
    <IntroLoading v-if="isLoading" @close="finishLoading" />
  </Transition>

  <div v-if="!isLoading">
    <HeaderMain class="sticky top-0 z-999" />
    <SectionHome />

    <div class="flex flex-row flex-wrap gap-10 p-8 my-16">
      <SectionCompetence />
      <SectionExperience />
    </div>

    <SectionProject class="p-8 my-16" />

    <div class="flex flex-row flex-wrap gap-10 p-8 items-stretch my-16">
      <SectionStudy />
      <SectionSkill />
      <SectionOrganization />
    </div>

    <FooterMain />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import IntroLoading from '@/components/intro/IntroLoading.vue'
  import HeaderMain from '@/components/headers/HeaderMain.vue'
  import FooterMain from '@/components/footers/FooterMain.vue'
  import SectionHome from '@/components/sections/SectionHome.vue'
  import SectionCompetence from '@/components/sections/SectionCompetence.vue'
  import SectionExperience from '@/components/sections/SectionExperience.vue'
  import SectionProject from '@/components/sections/SectionProject.vue'
  import SectionSkill from '@/components/sections/SectionSkill.vue'
  import SectionStudy from '@/components/sections/SectionStudy.vue'
  import SectionOrganization from '@/components/sections/SectionOrganization.vue'
  import { setupAutoScroll } from './utils/autoScroll'

  const isLoading = ref(true)

  const finishLoading = () => {
    isLoading.value = false
    setupAutoScroll()
  }
</script>

<style>
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>