<template>
    <div class="min-w-md h-48 relative rounded-lg overflow-hidden">
        <!-- Lớp 1: nền -->
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${item.img})` }"></div>

        <!-- Lớp 2: phủ mờ -->
        <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>

        <!-- Lớp 3: nội dung -->
        <div class="relative z-10 p-4 text-white flex flex-col h-full">
            <!-- Khoảng trống trên -->
            <div class="flex-1"></div>

            <!-- Phần thông tin sát đáy -->
            <div class="flex flex-row">
                <div class="flex flex-col flex-1">
                    <h3 class="text-lg font-bold truncate"> {{ item.name }} </h3>
                    <p class="flex flex-row gap-1 text-xs mt-1 italic">
                        <span v-for="(tech, index) in item.technology" :key="index" class="bg-black/30 rounded p-1">
                            {{ tech }}
                        </span>
                    </p>
                </div>

                <!-- Button căn giữa  -->
                <div class="flex justify-center mt-2">
                    <button class="p-2 rounded text-3xl" @click="showDetail(item)">↩</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
    defineProps({
        item: {
            type: Object,
            required: true
        }
    })


    function showDetail(project) {
        alert(project.name)
    }
</script>