<template>
    <article
        class="flex cursor-pointer flex-col items-center rounded-xl bg-gray-100 p-3 text-center transition hover:bg-sky-100 hover:shadow-lg"
        @click="$emit('click')"
    >
        <!-- Logo -->
        <img
            :src="logo"
            :alt="organization"
            class="h-16 w-16 object-contain mb-6"
        >

        <!-- Thành tích -->
        <p class="text-xl font-bold uppercase text-primary font-bold">
            {{ achive }} {{ String(quantity).padStart(2, '0') }}
        </p>

        <!-- Nội dung -->
        <p class="mt-1 text-sm text-gray-600">
            {{ content }}
        </p>

        <!-- Tổ chức -->
        <p class="mt-1 font-semibold text-gray-800">
            {{ organization }}
        </p>
    </article>
</template>

<script setup>
defineProps({
    logo: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    achive: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    organization: {
        type: String,
        required: true
    }
})

defineEmits([
    'click'
])
</script>