<template>
    <section id="study" class="min-w-full md:min-w-md flex flex-col flex-1 gap-2">
        <!-- Title -->
        <h2 class="text-primary uppercase"> {{ $t('title.study') }} </h2>

        <!-- HỌC TẬP -->
        <div class="flex flex-row flex-wrap">
            <h5 class="italic flex-1"> {{ $t('education.subTitleAcademic') }} </h5>
            <span class="italic text-primary"> {{ $t('education.contentAcademic') }} </span>
        </div>

        <div class="grid grid-cols-6 gap-1 w-full place-items-center flex-1">
            <div v-for="(item, index) in academicList" :key="index" class="w-16 h-full max-h-sm px-1 py-5 bg-gray-100 rounded-full
           flex flex-col items-center justify-center text-center duration-300 hover:bg-sky-100 hover:-translate-y-1 ">
                <p class="text-xs">GPA</p>
                <p class="text-primary font-bold"> {{item.point}} </p>
                <p class="text-xs"> {{item.term}}/ </p>
                <p class="text-xs"> {{item.year}} </p>
            </div>
        </div>

        <!-- RÈN LUYỆN  -->
        <div class="flex flex-row flex-wrap">
            <h5 class="italic flex-1"> {{ $t('education.subTitlePractice') }} </h5>
            <span class="italic text-primary"> {{ $t('education.contentPractice') }} </span>
        </div>

        <div class="grid grid-cols-6 gap-1 w-full place-items-center flex-1">
            <div v-for="(item, index) in practiceList" :key="index" class="w-16 h-full px-1 py-5 bg-gray-100 rounded-full
           flex flex-col items-center justify-center text-center duration-300 hover:bg-sky-100 hover:-translate-y-1 ">
                <p class="text-xs">GPA</p>
                <p class="text-primary font-bold"> {{item.point}} </p>
                <p class="text-xs"> {{item.term}}/ </p>
                <p class="text-xs"> {{item.year}} </p>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { useLocalizedData } from '@/utils/useLocalizedData'

    const { currentLangAcademic, localizedData: academicList, toggleLanguageAcademic } = useLocalizedData('education.academicList')
    const { currentLangPractice, localizedData: practiceList, toggleLanguagePractice } = useLocalizedData('education.practiceList')

    const resultStudy = [
        { term: 'HK1', year: '22-23', point: 7.61 },
        { term: 'HK2', year: '22-23', point: 7.31 },
        { term: 'HK1', year: '23-24', point: 8.26 },
        { term: 'HK2', year: '23-24', point: 8.43 },
        { term: 'HK1', year: '24-25', point: 8.49 },
        { term: 'HK2', year: '24-25', point: 8.37 },
    ]

    const resultPractice = [
        { term: 'HK1', year: '22-23', point: 87 },
        { term: 'HK2', year: '22-23', point: 100 },
        { term: 'HK1', year: '23-24', point: 100 },
        { term: 'HK2', year: '23-24', point: 100 },
        { term: 'HK1', year: '24-25', point: 100 },
        { term: 'HK2', year: '24-25', point: 100 },
    ]
</script>