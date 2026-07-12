<template>
    <PopupComponent
        v-model="isOpen"
        title="Thông tin chi tiết"
    >
        <div class="flex flex-col gap-6">
            <div
                class="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-6"
            >
                <div class="md:col-span-1">
                    <img
                        :src="project.image"
                        :alt="project.name"
                        class="aspect-video w-full rounded-xl object-cover shadow-md"
                    >
                </div>

                <div
                    class="flex flex-col justify-center gap-4 md:col-span-2"
                >
                    <div>
                        <h2
                            class="text-3xl font-bold text-primary"
                        >
                            {{ project.name }}
                        </h2>
                    </div>

                    <div class="flex flex-row gap-2">
                        <p class="font-semibold text-primary">
                            Techs:
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="tech in project.technologies"
                                :key="tech"
                                class="rounded-full bg-gray-100 px-3 py-1 text-sm italic"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-row gap-2">
                        <p class="font-semibold text-primary">
                            Roles:
                        </p>

                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="role in project.roles"
                                :key="role"
                                class="rounded-full bg-gray-100 px-3 py-1 text-sm italic"
                            >
                                {{ role }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <p class="font-semibold text-primary">
                    Description
                </p>

                <p
                    v-for="(paragraph, index) in project.details"
                    :key="index"
                    class="leading-relaxed text-justify"
                >
                    {{ paragraph }}
                </p>
            </div>

            <div
                v-if="project.links?.length"
                class="flex justify-end flex-wrap gap-3 border-t border-gray-200 pt-4"
            >
                <a
                    v-for="link in project.links"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 3h7v7m0-7L10 14m11 7pV3"
                        />
                    </svg>

                    {{ link.label }}
                </a>
            </div>
        </div>
    </PopupComponent>
</template>

<script setup>
import { computed } from 'vue'
import PopupComponent from '@/components/overlays/PopupComponent.vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },

    project: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value)
})
</script>