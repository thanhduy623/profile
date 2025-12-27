<template>
    <section id="organization" class="min-w-full md:min-w-md flex flex-col flex-1 gap-2">
        <h2 class="text-primary uppercase"> {{ $t('title.achievement') }} </h2>
        <!-- GRID ORGANIZATION -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a v-for="(item, index) in achievementList" :key="index"
                href="https://drive.google.com/drive/folders/1nqSHcDC2A6GDFjqZxkGSackrjQMmM-BZ" target="_blank"
                class="flex flex-col items-center p-1 rounded-lg bg-gray-100 hover:bg-sky-100">
                <img class="max-h-12 mb-2" :src="item.logo" alt="">
                <div class="flex flex-col items-center text-center">
                    <p> {{ $t('achievement.commonText.achive') }}
                        <strong class="text-primary"> {{ item.quanlity }} </strong>
                    </p>
                    <p class="text-xs"> {{ $t('achievement.commonText.content') }}
                        <span> {{ item.organization }} </span>
                    </p>
                </div>
            </a>
        </div>
    </section>
</template>

<script setup>
    import { useLocalizedData } from '@/utils/useLocalizedData'
    const { currentLang, localizedData: achievementList, toggleLanguage } = useLocalizedData('achievement.summaryList')
</script>