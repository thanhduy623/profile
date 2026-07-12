<template>
    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="modelValue"
                class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                @click="close"
            >
                <!-- Overlay -->
                <div
                    class="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <!-- Popup -->
                <div
                    class="relative z-10 flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
                    @click.stop
                >
                    <!-- Header -->
                    <div
                        class="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-2 md:px-6"
                    >
                        <h2
                            class="flex-1 truncate text-lg font-bold uppercase text-primary md:text-xl"
                        >
                            {{ title }}
                        </h2>

                        <button
                            type="button"
                            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl font-bold text-gray-500 transition hover:bg-gray-100 hover:text-red-500"
                            aria-label="Close"
                            @click="close"
                        >
                            ✕
                        </button>
                    </div>

                    <!-- Body -->
                    <div
                        class="overflow-y-auto p-4 md:p-6"
                    >
                        <slot />
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },

    title: {
        type: String,
        default: ''
    }
})

const emit = defineEmits([
    'update:modelValue',
    'close'
])

const close = () => {
    emit('update:modelValue', false)
    emit('close')
}
</script>