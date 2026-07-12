<template>
    <section
        id="project"
        class="w-full flex flex-col gap-4 p-6 my-3 bg-primary"
    >

        <h2 class="text-white font-bold uppercase text-center">
            --- {{ $t('project.titleSection') }} ---
        </h2>


        <div
            class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >

            <ProjectCard
                v-for="project in projectList"
                :key="project.id"
                :project="project"
            />

        </div>

    </section>
</template>


<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { projects } from '@/data/projects'
import ProjectCard from '@/components/cards/ProjectCard.vue'


const { t, tm } = useI18n()


const projectList = computed(() =>
    projects.map(project => ({
        ...project,

        name: t(
            `project.items.${project.id}.name`
        ),

        summary: t(
            `project.items.${project.id}.summary`
        ),

        details: tm(
            `project.items.${project.id}.details`
        )
    }))
)
</script>