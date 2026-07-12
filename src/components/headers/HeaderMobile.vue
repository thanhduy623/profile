<template>
    <div
        class="md:hidden bg-primary text-white"
    >
        <div class="relative flex items-center justify-between px-4 py-3">
            <div class="flex items-center">
                <img
                    :src="logo"
                    alt="Logo"
                    class="h-10 w-auto"
                />
            </div>

            <div
                class="absolute left-1/2 -translate-x-1/2 font-bold text-xl text-white whitespace-nowrap"
            >
                {{ t('header.profile') }}
            </div>

            <div class="flex items-center gap-3">
                <LanguageSwitch />

                <button
                    type="button"
                    class="flex flex-col justify-center items-center gap-1 w-8 h-8"
                    @click="isOpen = !isOpen"
                >
                    <span class="w-5 h-0.5 bg-white transition" />
                    <span class="w-5 h-0.5 bg-white transition" />
                    <span class="w-5 h-0.5 bg-white transition" />
                </button>
            </div>
        </div>

        <Transition
            enter-active-class="transition duration-200"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div
                v-if="isOpen"
                class="fixed inset-x-0 top-16 bottom-0 z-50 border-t border-white/20 bg-primary"
            >
                <nav class="flex flex-col">
                    <a
                        v-for="item in menus"
                        :key="item.key"
                        :href="item.href"
                        class="px-4 py-3 text-sm font-medium text-white border-b border-white/10"
                        @click="isOpen = false"
                    >
                        {{ t(`header.${item.key}`) }}
                    </a>
                </nav>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { logo } from '@/data/images'
import LanguageSwitch from '@/components/languages/LanguageSwitch.vue'

const { t } = useI18n()

const isOpen = ref(false)

const menus = [
    { key: 'introduction', href: '#introduction' },
    { key: 'project', href: '#project' },
    { key: 'process', href: '#process' },
    { key: 'work', href: '#work' },
    { key: 'achievement', href: '#achievement' },
    { key: 'contact', href: '#contact' }
]
</script>