<template>
    <PopupComponent
        v-model="modelValue"
        :title="title"
    >
        <div
            class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
            <div
                v-for="file in files"
                :key="file"
                class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
                <a
                    :href="file"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block"
                >
                    <iframe
                        :src="`${file}#toolbar=0&navpanes=0&scrollbar=0`"
                        class="aspect-[4/3] w-full"
                    />

                    <div
                        class="border-t border-gray-100 p-2 text-center text-sm text-primary"
                    >
                        Click để mở PDF
                    </div>
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

    title: {
        type: String,
        default: ''
    },

    type: {
        type: String,
        required: true
    }
})

const emit = defineEmits([
    'update:modelValue'
])

const allFiles = import.meta.glob(
    '@/assets/images/achivements/*/*.pdf',
    {
        eager: true,
        query: '?url',
        import: 'default'
    }
)

const files = computed(() =>
    Object.entries(allFiles)
        .filter(([path]) =>
            path.includes(`/achivements/${props.type}/`)
        )
        .map(([, url]) => url)
)

const modelValue = computed({
    get() {
        return props.modelValue
    },

    set(value) {
        emit('update:modelValue', value)
    }
})
</script>