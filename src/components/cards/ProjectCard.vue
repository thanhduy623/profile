<template>
    <article
        class="flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-gray-100 transition hover:bg-sky-100 hover:shadow-lg"
        @click="isOpen = true"
    >
        <div class="aspect-video w-full overflow-hidden">
            <img
                :src="project.image"
                :alt="project.name"
                class="h-full w-full object-cover"
            >
        </div>

        <div class="flex flex-1 flex-col gap-2 p-4">
            <h3
                class="min-h-[1rem] text-lg font-bold text-primary overflow-hidden text-ellipsis whitespace-nowrap"
                :title="project.name"
            >
                {{ project.name }}
            </h3>

            <div
                class="flex flex-nowrap gap-2 overflow-hidden"
                :title="project.technologies.join(', ')"
            >
                <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="shrink-0 rounded-full px-2 py-1 bg-primary text-white text-xs italic"
                >
                    {{ tech }}
                </span>
            </div>

            <p class="text-sm text-justify">
                {{ project.summary }}
            </p>

            <p class="mt-auto pt-4 text-xs text-secondary italic text-center">
                {{ $t('project.clickToSeeDetail') }}
            </p>
        </div>
    </article>

    <PopupProjectComponent
        v-model="isOpen"
        :project="project"
    />
</template>

<script setup>
import { ref } from 'vue'
import PopupProjectComponent from '@/components/overlays/PopupProjectComponent.vue'

defineProps({
    project: {
        type: Object,
        required: true
    }
})

const isOpen = ref(false)
</script>