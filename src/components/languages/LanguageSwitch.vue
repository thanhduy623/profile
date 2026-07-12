<template>
    <div
        ref="dropdownRef"
        class="relative"
    >
        <button
            type="button"
            :title="currentLanguage?.label"
            class="flex items-center justify-center cursor-pointer bg-transparent border-0 p-0"
            @click.stop="isOpen = !isOpen"
        >
            <img
                v-if="currentLanguage"
                :src="currentLanguage.flag"
                :alt="currentLanguage.label"
                class="h-6 w-9 object-cover rounded-sm"
            />
        </button>

        <Transition
            enter-active-class="transition duration-150"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-100"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <div
                v-if="isOpen"
                class="absolute right-0 mt-2 min-w-40 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/10 z-50"
            >
                <button
                    v-for="lang in languages"
                    :key="lang.code"
                    type="button"
                    class="flex w-full items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 transition-colors"
                    @click="changeLanguage(lang.code)"
                >
                    <img
                        :src="lang.flag"
                        :alt="lang.label"
                        class="h-6 w-9 object-cover rounded-sm"
                    />

                    <span class="flex-1 text-sm text-gray-700">
                        {{ lang.label }}
                    </span>

                    <span
                        v-if="locale === lang.code"
                        class="text-xs font-semibold text-primary"
                    >
                        ✓
                    </span>
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '@/locales/langs'

const { locale } = useI18n()

const isOpen = ref(false)
const dropdownRef = ref(null)

const currentLanguage = computed(() =>
    languages.find(lang => lang.code === locale.value)
)

const changeLanguage = (langCode) => {
    locale.value = langCode

    localStorage.setItem('language', langCode)

    isOpen.value = false
}

const handleClickOutside = (event) => {
    if (
        dropdownRef.value &&
        !dropdownRef.value.contains(event.target)
    ) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>