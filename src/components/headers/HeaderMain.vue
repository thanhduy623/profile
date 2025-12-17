<template>
    <div class="header relative flex items-center gap-2 w-full bg-primary px-6 h-16">
        <!-- Logo -->
        <img class="logo h-14" :src="pathLogo" alt="Logo">

        <!-- Title -->
        <h1 class="flex-1 text-white font-semibold text-md">MY PROFILE</h1>

        <!-- Nav Desktop -->
        <nav class="hidden lg:flex flex-row gap-4">
            <template v-for="item in menuItems" :key="item.href">
                <a class="text-white hover:text-gray-300" :href="item.href">{{ item.label }}</a>
            </template>
        </nav>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-2">
            <LanguageSwitch />
            <img :src="pathBurgerMenu" class="logo h-6 invert cursor-pointer lg:hidden" @click="toggleMenu">
        </div>

        <!-- Mobile Menu with transition -->
        <transition name="menu-slide">
            <div v-show="isMenuOpen"
                class="lg:hidden md:text-center min-h-dvh absolute top-full left-0 w-full bg-primary flex flex-col gap-2 p-4 z-50">
                <template v-for="item in menuItems" :key="item.href">
                    <a class="text-white hover:text-gray-300" :href="item.href" @click="closeMenu">{{ item.label }}</a>
                </template>
            </div>
        </transition>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import LanguageSwitch from '@/components/languages/LanguageSwitch.vue'
    import { pathLogo, pathBurgerMenu } from '@/configs/images'

    const isMenuOpen = ref(false)

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value
    }

    function closeMenu() {
        isMenuOpen.value = false
    }

    const menuItems = [
        { label: 'HOME', href: '#home' },
        { label: "COMPETENCE", href: "#competence" },
        { label: 'EXPERIENCE', href: '#experience' },
        { label: 'PROJECT', href: '#project' },
        { label: 'SKILL', href: '#skill' },
        { label: 'ORGANIZATION', href: '#organization' },
        { label: 'CONTACT', href: '#contact' },
    ]
</script>

<style scoped>
    /* Transition for mobile menu */
    .menu-slide-enter-active,
    .menu-slide-leave-active {
        transition: all 0.3s ease;
    }

    .menu-slide-enter-from,
    .menu-slide-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }

    .menu-slide-enter-to,
    .menu-slide-leave-from {
        opacity: 1;
        transform: translateY(0);
    }
</style>