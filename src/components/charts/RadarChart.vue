<template>
    <Radar :data="props.chartData" :options="props.chartOptions" />
</template>


<script setup>
    import { Radar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js'

    // Đăng ký các thành phần cần thiết
    ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

    // Định nghĩa props để nhận dữ liệu từ component cha
    const props = defineProps({
        chartData: {
            type: Object,
            required: true
        },
        chartOptions: {
            type: Object,
            default: () => ({}) // Tùy chọn mặc định
        }
    })
</script>