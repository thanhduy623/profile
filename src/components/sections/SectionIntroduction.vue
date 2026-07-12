<template>
    <section
        id="home"
        class="w-full flex flex-col gap-4 p-6 mb-3"
        :style="{ background: `url(${pathBanner01}) no-repeat center / cover` }"
    >
        <div
            class="mx-auto flex flex-col items-center gap-8 text-center md:flex-row md:justify-center md:gap-12 md:text-left"
        >
            <!-- Avatar -->
            <img
                :src="pathAvatar"
                alt="Avatar"
                class="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shrink-0 border-4 border-white/20"
            >

            <!-- Information -->
            <div
                class="flex max-w-3xl flex-col gap-3 items-center md:items-start"
            >
                <h1
                    class="text-3xl md:text-5xl font-bold text-white"
                >
                    {{ $t('introduction.fullName') }}
                </h1>

                <h3
                    class="text-xl md:text-2xl font-semibold text-white/90"
                >
                    {{ $t('introduction.major') }}
                </h3>

                <p
                    class="text-base md:text-lg text-white leading-relaxed text-justify"
                >
                    {{ $t('introduction.quote') }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { pathAvatar, pathBanner01 } from '@/data/images.js'
</script>