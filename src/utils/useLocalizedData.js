// utils/useLocalizedData.js
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '@/locales/langs'

export function useLocalizedData(path) {
    const { tm, locale } = useI18n()

    // index của ngôn ngữ hiện tại
    const currentIndex = ref(languages.findIndex(l => l.code === locale.value))

    // computed cho ngôn ngữ hiện tại
    const currentLang = computed(() => languages[currentIndex.value])

    // computed cho dữ liệu được truyền vào (có thể là object, array, string…)
    const localizedData = computed(() => {
        // đảm bảo tm trả về giá trị theo path đã cho
        return tm(path)
    })

    // watch locale để cập nhật index nếu ngôn ngữ bị thay đổi từ FE
    watch(locale, (newLocale) => {
        const idx = languages.findIndex(l => l.code === newLocale)
        if (idx !== -1) currentIndex.value = idx
    })

    // hàm đổi ngôn ngữ tuần tự, có thể dùng ở nhiều chỗ
    function toggleLanguage() {
        currentIndex.value = (currentIndex.value + 1) % languages.length
        locale.value = languages[currentIndex.value].code
    }

    return {
        currentLang,
        localizedData,
        toggleLanguage
    }
}
