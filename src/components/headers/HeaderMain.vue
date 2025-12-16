<template>
    <div class="header flex flex-row items-center gap-2 w-full bg-primary">
        <img class="logo h-full" :src="pathLogo" alt="">
        <h1 class="flex-1 text-white">MY PROFILE</h1>

        <nav class="flex flex-row gap-4">
            <a class="text-white" href="#home">HOME</a>
            <a class="text-white" href="#skill">SKILL</a>
            <a class="text-white" href="#project">PROJECT</a>
            <a class="text-white" href="#experience">EXPERIENCE</a>
            <a class="text-white" href="#organization">ORGANIZATION</a>
            <a class="text-white" href="#contact">CONTACT</a>
        </nav>

        <LanguageSwitch />
    </div>
</template>

<script setup>
    import LanguageSwitch from '@/components/languages/LanguageSwitch.vue'
    import { pathLogo } from '@/configs/images'
</script>

<style scoped>
    .header {
        height: 65px;
        padding: 10px 30px;
    }
</style>