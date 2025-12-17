<template>
    <section id="experience" class="min-w-full md:min-w-md lg:min-w-lg flex flex-col flex-3 gap-2">
        <h2 class="text-primary uppercase"> {{ $t('title.experience') }} </h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            <!-- CARD EXP -->
            <div class="w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                <div v-for="item in localizedData" :key="item.name"
                    class="flex flex-row gap-3 p-4 bg-gray-100 text-white rounded-xl shadow-xl border border-gray-300 transition-all duration-300 hover:scale-[1.02] hover:shadow-sky-500/40 cursor-pointer ">

                    <img class="max-w-8 min-w-8 h-8" :src=" item.img " :alt=" item.name ">

                    <div class="w-full flex flex-col gap-1">
                        <span class="uppercase text-sm font-semibold text-sky-400"> {{ item.name }} </span>

                        <div class="w-full bg-gray-700 rounded-full h-1">
                            <div class="bg-sky-500 h-1 rounded-full" :style="{ width: item.point + '%' }"></div>
                        </div>

                        <span class="text-xs text-gray-400 italic"> {{ item.description }} </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { useLocalizedData } from '@/utils/useLocalizedData'

    const { currentLang, localizedData, toggleLanguage } = useLocalizedData('experience.experienceList')
</script>