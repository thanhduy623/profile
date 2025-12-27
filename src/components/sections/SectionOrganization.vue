<template>
    <section id="organization" class="min-w-full md:min-w-md flex flex-col flex-1 gap-2">
        <h2 class="text-primary uppercase"> {{ $t('title.organization') }} </h2>

        <div class="organization-list flex flex-col gap-2">
            <div v-for="(org, index) in organizationList" :key="index"
                class="block flex flex-col bg-gray-100 border-l-2 border-primary p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-sky-100">
                <p class="text-xs italic">{{ org.time }}</p>
                <h5 class="text-primary uppercase">{{ org.name }}</h5>
                <p class="text-xs text-gray-600">{{ org.description }}</p>
            </div>
        </div>

        <SectionAchievement />
    </section>
</template>

<script setup>
    import { useLocalizedData } from '@/utils/useLocalizedData'
    import SectionAchievement from '@/components/sections/SectionAchievement.vue'

    const { currentLang, localizedData: organizationList, toggleLanguage } = useLocalizedData('organization.organizationList')
</script>