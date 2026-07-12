<template>
  <HeaderMain class="sticky top-0 z-999" />
  <SectionIntroduction />

  <div class="flex flex-row flex-wrap gap-10">
    <SectionCompetence class="w-full md:flex-2"/>
    <SectionExperience class="w-full md:flex-3"/>
  </div>

  <SectionProject/>

  <div class="flex flex-row flex-wrap gap-10">
    <SectionProcess class="w-full md:flex-2"/>
    <SectionWork class="w-full md:flex-3"/>
  </div>

  <DividingLine />

  <div class="flex flex-row flex-wrap gap-10
              bg-gradient-to-t from-primary/50 to-transparent">
    <SectionSkill class="w-full md:flex-2"/>
    <SectionAchievement class="w-full md:flex-3"/>
  </div>

  <FooterMain />
</template>

<script setup>
  import { ref } from 'vue'
  import HeaderMain from '@/components/headers/HeaderMain.vue'
  import FooterMain from '@/components/footers/FooterMain.vue'
  import DividingLine from './components/charts/DividingLine.vue'

  import SectionIntroduction from '@/components/sections/SectionIntroduction.vue'
  import SectionCompetence from '@/components/sections/SectionCompetence.vue'
  import SectionExperience from '@/components/sections/SectionExperience.vue'
  import SectionProject from '@/components/sections/SectionProject.vue'
  import SectionSkill from '@/components/sections/SectionSkill.vue'
  import SectionAchievement from '@/components/sections/SectionAchievement.vue'
  import SectionProcess from '@/components/sections/SectionProcess.vue'
  import SectionWork from '@/components/sections/SectionWork.vue'
  import { setupAutoScroll } from './utils/autoScroll'
</script>