<template>
  <!-- <HeaderMain /> -->
  <SectionAbout />
  <div class="flex flex-row flex-wrap gap-10 p-8">
    <SectionCompetence />
    <SectionExperience />
  </div>

  <SectionProject class="p-8" />

  <div class="flex flex-row flex-wrap gap-10 p-8 items-stretch">
    <SectionScore />
    <SectionSkill />
    <SectionOrganization />
  </div>

  <FooterMain />
</template>


<script setup>
  import HeaderMain from '@/components/headers/HeaderMain.vue'
  import FooterMain from '@/components/footers/FooterMain.vue'
  import SectionAbout from '@/components/sections/SectionAbout.vue'
  import SectionCompetence from '@/components/sections/SectionCompetence.vue'
  import SectionExperience from '@/components/sections/SectionExperience.vue'
  import SectionProject from '@/components/sections/SectionProject.vue'
  import SectionSkill from '@/components/sections/SectionSkill.vue'
  import SectionScore from '@/components/sections/SectionScore.vue'
  import SectionOrganization from '@/components/sections/SectionOrganization.vue'
</script>