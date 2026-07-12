<template>
    <div
        class="p-4 rounded-lg bg-gray-100 hover:bg-sky-100 transition"
    >
        <!-- Mobile -->
        <div class="flex flex-col gap-1 md:hidden">
            <span class="text-sm text-gray-500 italic">
                {{ period }}
            </span>

            <p class="text-primary uppercase">
                {{ position }}
            </p>

            <p class="text-sm text-justify upppercase">
                {{ organization }}
            </p>

            <p class="text-sm text-justify">
                {{ description }}
            </p>
        </div>

        <!-- Desktop -->
        <div class="hidden md:flex md:flex-col gap-2">
            <div class="flex items-center justify-between gap-4">
                <p class="text-primary text-xl uppercase">
                    {{ position }}
                </p>

                <span class="text-sm text-gray-500 whitespace-nowrap italic">
                    {{ period }}
                </span>
            </div>

            <p class="text-sm text-justify uppercase">
                {{ organization }}
            </p>

            <p class="text-sm text-justify">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    position: {
        type: String,
        required: true
    },

    period: {
        type: String,
        required: true
    },

    organization: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    }
})
</script>