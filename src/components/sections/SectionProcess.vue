<template>
    <section
        id="organization"
        class="w-full flex flex-col gap-4 p-6 my-3"
    >
        <h2 class="text-primary font-bold uppercase">
            {{ $t('process.titleSection') }}
        </h2>

        <div class="flex flex-col gap-2">
            <ProcessCard
                v-for="(item, index) in processList"
                :key="index"
                :position="item.position"
                :period="item.period"
                :organization="item.organization"
            />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ProcessCard from '@/components/cards/ProcessCard.vue'

const { tm } = useI18n()

const processList = computed(() => tm('process.list'))
</script>