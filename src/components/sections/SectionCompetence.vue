<template>
    <section id="competence" class="min-w-lg flex flex-col flex-2 gap-2">
        <!-- COMPETENCE -->
        <h2 class="text-primary uppercase"> {{ $t('title.competence') }} </h2>
        <p> {{ $t('profile.introduction1') }} </p>
        <p> {{ $t('profile.introduction2') }} </p>
        <p> {{ $t('profile.introduction3') }} </p>
        <p> {{ $t('profile.introduction4') }} </p>
    </section>
</template>


<script setup>
    import { useLocalizedData } from '@/utils/useLocalizedData'

    const { currentLang, localizedData, toggleLanguage } = useLocalizedData('experience.experienceList')
</script>