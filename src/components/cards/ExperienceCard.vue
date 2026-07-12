<template>
    <div
        class="flex items-center gap-4 p-2 rounded-lg bg-gray-100 hover:bg-sky-100 transition"
    >
        <img
            :src="img"
            :alt="name"
            class="w-8 h-8 object-contain shrink-0"
        >

        <div class="flex-1 flex flex-col gap-1 min-w-0">
            <div>
                <p class="font-semibold">
                    {{ name }}
                </p>

                <span class="text-sm text-gray-500 italic">
                    {{ description }}
                </span>
            </div>

            <div
                class="w-full h-1 bg-gray-200 rounded-full overflow-hidden"
            >
                <div
                    class="h-full bg-primary transition-all duration-500"
                    :style="{ width: `${point}%` }"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    description: String,
    point: Number,
    img: String
})
</script>