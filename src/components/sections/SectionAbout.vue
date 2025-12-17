<template>
    <section id="home" class="min-w-md">
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
</script>

<style scoped>
    #home {
        padding: 50px 10%;
        position: relative;
        background-image: url("@/assets/images/banner-01.gif");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
    }
</style>