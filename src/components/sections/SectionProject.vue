<template>
    <section id="project" class="min-w-full md:min-w-md lg:min-w-lg bg-primary flex flex-col px-8 p-15"
        :style="{ background: `url(${pathBanner02}) no-repeat center / cover` }">
        <h2 class="text-white uppercase text-center">{{ $t('title.project') }}</h2>

        <div class="swiper container">
            <div class="swiper-wrapper">
                <!-- Mỗi card là một swiper-slide -->
                <div class="swiper-slide" v-for="(card, index) in cards" :key="index">
                    <a :href="card.link" target="_blank" class="card-link flex flex-col gap-1">
                        <img :src="card.img" class="card-image" />
                        <h3 class="card-title">{{ card.name }}</h3>
                        <div class="flex flex-row flex-wrap gap-1">
                            <span v-for="(technology, index) in card.technology" :key="index" class="badge">{{
                                technology }}</span>
                        </div>
                        <div class="card-description line-clamp-3 text-xs italic flex-1">
                            {{ card.description }}
                        </div>
                        <div class="flex flex-row gap-2 items-end">
                            <span class="text-sm italic flex-1"
                                :class="card.status === 'Completed' ? 'text-green-500' : 'text-red-500'">
                                {{ card.status }}
                            </span>
                            <button class="card-button material-symbols-outlined self-end">arrow_insert</button>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Pagination -->
            <div class="swiper-pagination"></div>

            <!-- Navigation buttons -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
        </div>
    </section>
</template>

<script setup type="module">
    import { onMounted, ref } from 'vue'
    import { pathBanner02 } from '@/configs/images.js'
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

    import { useLocalizedData } from '@/utils/useLocalizedData'

    const { currentLang, localizedData: cards, toggleLanguage } = useLocalizedData('project.projectList')


    onMounted(() => {
        // Thêm CSS từ CDN
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css'
        document.head.appendChild(link)

        // Khởi tạo Swiper
        new Swiper('.swiper', {
            loop: true,
            speed: 1000,
            spaceBetween: 30,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            breakpoints: {
                0: { slidesPerView: 1, },
                768: { slidesPerView: 2, },
                1440: { slidesPerView: 3, },
            },
        })
    })
</script>

<style scoped>
    #project {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: var(--color-primary);
    }

    .swiper {
        width: 100%;
        height: 100%;
        padding: 20px 0;
    }

    .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin-bottom: 20px;
        align-items: stretch;
    }

    .card-link {
        width: 350px;
        min-height: 420px;
        display: flex;
        flex-direction: column;
        color: var(--color-primary);
        background-color: #ffffff;
        padding: 16px;
        border-radius: 16px;
        text-decoration: none;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
        border: 2px solid transparent;
        transition: 0.2s ease;
        height: 100%;
    }

    .card-link:hover {
        border-color: var(--color-secondary);
        box-shadow: 0 10px 16px var(--color-secondary);
    }

    .card-image {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
        border-radius: 10px;
    }

    .badge {
        color: var(--color-primary);
        font-size: 10px;
        font-weight: 500;
        font-style: italic;
        padding: 6px 10px;
        background-color: var(--color-gray-200);
        width: fit-content;
        border-radius: 50px;
    }

    .card-title {
        color: var(--color-primary);
        font-weight: 600;
    }

    .card-button {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-top: 6px 0;
        border: 2px solid var(--color-primary);
        transition: 0.4s ease;
    }

    .card-link:hover .card-button {
        color: #ffffff;
        background: var(--color-primary);
    }
</style>