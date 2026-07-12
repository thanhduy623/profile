<template>
    <div
        class="hidden md:flex items-center justify-between w-full px-8 lg:px-12 py-4 bg-primary text-white"
    >
        <div class="flex items-center gap-4">
            <img
                :src="logo"
                alt="Logo"
                class="h-12 w-auto"
            />

            <span
                class="font-bold text-3xl tracking-wide text-white"
            >
                {{ t('header.profile') }}
            </span>
        </div>

        <div class="flex items-center gap-8">
            <nav class="flex items-center gap-6">
                <a
                    v-for="item in menus"
                    :key="item.key"
                    :href="item.href"
                    class="font-medium text-lg text-white transition-opacity hover:opacity-80"
                >
                    {{ t(`header.${item.key}`) }}
                </a>
            </nav>

            <LanguageSwitch />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { logo } from '@/data/images'
import LanguageSwitch from '@/components/languages/LanguageSwitch.vue'

const { t } = useI18n()

const menus = [
    { key: 'introduction', href: '#introduction' },
    { key: 'project', href: '#project' },
    { key: 'process', href: '#process' },
    { key: 'work', href: '#work' },
    { key: 'achievement', href: '#achievement' },
    { key: 'contact', href: '#contact' }
]
</script>