<template>
    <section id="home" class="min-w-full md:min-w-md lg:min-w-lg relative overflow-hidden p-[50px] px-[10%]"
        :style="{ background: `url(${pathBanner01}) no-repeat center / cover` }">
        <div class="flex flex-row flex-wrap gap-4 items-center justify-center wrap">
            <!-- AVATAR -->
            <img class="avatar max-w-3xs rounded-full" :src="avatar" alt="Avatar">

            <!-- FULLNAME, MAJOR, QUOTE -->
            <div id="interview-container" class="flex flex-col gap-2 w-lg">
                <h1 class="text-white"> {{ $t('profile.fullName') }} </h1>
                <h3 class="text-white"> {{ $t('profile.major') }} </h3>
                <span class="text-white"> {{ $t('profile.quote') }} </span>
            </div>
        </div>
    </section>
</template>


<script setup>
    import avatar from '@/assets/images/avatar.jpg';
    import { pathBanner01 } from '@/configs/images.js'
</script>

<style scoped>
    #about {
        padding: 50px 10%;
        position: relative;
        background-image: url(pathBanner01);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
    }
</style>