<template>
    <section id="skill" class="min-w-sm flex flex-col flex-1 gap-4">
        <h2 class="text-primary uppercase"> {{ $t('title.skill') }} </h2>

        <div class="w-full h-full">
            <RadarChart :chartData="radarChartData" :chartOptions="radarChartOptions" />
        </div>
    </section>
</template>

<script setup>
    import { ref, computed, toRefs } from 'vue';
    import { useLocalizedData } from '@/utils/useLocalizedData'
    import RadarChart from '@/components/charts/RadarChart.vue';

    const { currentLang, localizedData: skillList, toggleLanguage } = useLocalizedData('skill.skillList')


    console.log(skillList.value);


    const rootStyles = getComputedStyle(document.documentElement)
    const colorPrimary = rootStyles.getPropertyValue('--color-primary').trim()
    const colorSecondary = rootStyles.getPropertyValue('--color-secondary').trim()

    // 1. Chuẩn bị dữ liệu cho biểu đồ radar
    const radarChartData = computed(() => {
        const list = Array.isArray(skillList.value)
            ? skillList.value
            : Object.values(skillList.value || {})

        const labels = list.map(item => item.name)
        const dataPoints = list.map(item => item.point)

        return {
            labels,
            datasets: [
                {
                    data: dataPoints,
                    backgroundColor: 'rgba(37, 150, 190, 0.2)',
                    borderColor: colorPrimary,
                    pointBackgroundColor: colorPrimary,
                    pointBorderColor: colorPrimary,
                    pointHoverBackgroundColor: '#ffffff',
                    pointHoverBorderColor: colorPrimary,
                    borderWidth: 2,
                    fill: true,
                }
            ]
        }
    })

    // 2. Cấu hình tùy chọn cho biểu đồ radar
    const radarChartOptions = ref({
        responsive: true,
        maintainAspectRatio: false, // Quan trọng để kiểm soát kích thước bằng CSS
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 3, // Giá trị nhỏ nhất
                suggestedMax: 10, // Giá trị lớn nhất (Max point5)
                ticks: {
                    stepSize: 1, // Khoảng cách giữa các bước
                    backdropColor: 'transparent',
                    color: 'transparent', // Màu chữ các giá trị trục
                },
                pointLabels: { // Cấu hình nhãn (tên kỹ năng)
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    color: 'rgb(31 41 55)',
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    });
</script>