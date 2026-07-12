<template>
    <section
        id="skill"
        class="w-full flex flex-col gap-4 p-6 my-3"
    >
        <h2 class="text-primary uppercase">
            {{ $t('skill.titleSection') }}
        </h2>

        <div class="w-full h-[350px] md:h-[500px]">
            <RadarChart
                :chartData="radarChartData"
                :chartOptions="radarChartOptions"
            />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useLocalizedData } from '@/utils/useLocalizedData'
import RadarChart from '@/components/charts/RadarChart.vue'

const { localizedData: skillList } = useLocalizedData('skill.skillList')

const rootStyles = getComputedStyle(document.documentElement)

const colorPrimary =
    rootStyles.getPropertyValue('--color-primary').trim()

const colorSecondary =
    rootStyles.getPropertyValue('--color-secondary').trim()

const radarChartData = computed(() => {
    const list = Array.isArray(skillList.value)
        ? skillList.value
        : Object.values(skillList.value || {})

    return {
        labels: list.map(item => item.name),
        datasets: [
            {
                data: list.map(item => item.point),
                backgroundColor: `${colorSecondary}33`,
                borderColor: colorPrimary,
                pointBackgroundColor: colorPrimary,
                pointBorderColor: colorPrimary,
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: colorPrimary,
                borderWidth: 2,
                fill: true
            }
        ]
    }
})

const radarChartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,

    scales: {
        r: {
            beginAtZero: true,
            min: 0,
            max: 10,

            angleLines: {
                color: '#d1d5db'
            },

            grid: {
                color: '#d1d5db'
            },

            ticks: {
                stepSize: 2,
                backdropColor: 'transparent',
                color: '#9ca3af'
            },

            pointLabels: {
                color: '#374151',
                font: {
                    size: window.innerWidth < 768 ? 11 : 14,
                    weight: 'bold'
                }
            }
        }
    },

    plugins: {
        legend: {
            display: false
        },

        tooltip: {
            enabled: true,
            callbacks: {
                label(context) {
                    return `${context.raw}/10`
                }
            }
        }
    }
}))
</script>