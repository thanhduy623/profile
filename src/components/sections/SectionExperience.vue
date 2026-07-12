<template>
    <section
        id="experience"
        class="w-full flex flex-col gap-4 p-6 my-3"
    >
        <h2 class="text-primary uppercase font-bold">
            {{ t('experience.titleSection') }}
        </h2>

        <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
            <ExperienceCard
                v-for="item in experienceList"
                :key="item.id"
                :name="item.name"
                :description="item.description"
                :point="item.point"
                :img="item.img"
            />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { experiences } from '@/data/experiences'
import ExperienceCard from '@/components/cards/ExperienceCard.vue'

const { t } = useI18n()

const experienceList = computed(() =>
    experiences.map(item => ({
        ...item,
        description: t(`experience.level.${item.level}`)
    }))
)
</script>