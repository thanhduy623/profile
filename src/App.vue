<template>
  <HeaderMain class="sticky top-0 z-999" />
  <SectionHome />
  <div class="flex flex-row flex-wrap gap-10 p-8 my-16">
    <SectionCompetence />
    <SectionExperience />
  </div>

  <SectionProject class="p-8 my-16" />

  <div class="flex flex-row flex-wrap gap-10 p-8 items-stretch my-16">
    <SectionScore />
    <SectionSkill />
    <SectionOrganization />
  </div>

  <FooterMain />
</template>


<script setup>
  import HeaderMain from '@/components/headers/HeaderMain.vue'
  import FooterMain from '@/components/footers/FooterMain.vue'
  import SectionHome from '@/components/sections/SectionHome.vue'
  import SectionCompetence from '@/components/sections/SectionCompetence.vue'
  import SectionExperience from '@/components/sections/SectionExperience.vue'
  import SectionProject from '@/components/sections/SectionProject.vue'
  import SectionSkill from '@/components/sections/SectionSkill.vue'
  import SectionScore from '@/components/sections/SectionScore.vue'
  import SectionOrganization from '@/components/sections/SectionOrganization.vue'

  import { onMounted } from 'vue'
  import { setupAutoScroll } from './utils/autoScroll'

  onMounted(() => { setupAutoScroll() })
</script>