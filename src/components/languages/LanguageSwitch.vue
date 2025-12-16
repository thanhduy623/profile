<template>
    <div class="language-switch">
        <button class="circle-btn" @click="toggleLanguage">
            <img :src="`${currentLang.flag}`" class="w-full h-full" />
        </button>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { languages } from '@/locales/langs'

    const { tm, locale } = useI18n()

    // index của ngôn ngữ hiện tại
    const currentIndex = ref(languages.findIndex(l => l.code === locale.value))

    // computed cho ngôn ngữ hiện tại
    const currentLang = computed(() => languages[currentIndex.value])

    // computed cho danh sách kinh nghiệm (tự đổi khi locale đổi)
    const experienceList = computed(() => tm('experience.experienceList'))

    // hàm đổi ngôn ngữ
    function toggleLanguage() {
        currentIndex.value = (currentIndex.value + 1) % languages.length
        locale.value = languages[currentIndex.value].code
        console.log(experienceList.value);

    }
</script>


<style scoped>
    .language-switch {
        display: flex;
        align-items: center;
        width: 40px !important;
        height: 40px !important;
    }

    /* .circle-btn {
        width: 40px !important;
        height: 40px !important;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
        transition: background-color 0.2s;
    }

    .circle-btn:hover {
        background-color: #e0e0e0;
    }

    .circle-btn img {
        border-radius: 50%;
    } */
</style>