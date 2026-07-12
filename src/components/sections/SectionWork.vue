<template>
    <section
        id="work"
        class="w-full flex flex-col gap-4 p-6 my-3"
    >
        <h2 class="text-primary font-bold uppercase">
            {{ $t('work.titleSection') }}
        </h2>

        <div class="flex flex-col gap-2">
            <WorkCard
                v-for="(item, index) in workList"
                :key="index"
                :position="item.position"
                :period="item.period"
                :organization="item.organization"
                :description="item.description"
            />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import WorkCard from '@/components/cards/WorkCard.vue'

const { tm } = useI18n()

const workList = computed(() =>
    tm('work.list')
)
</script>