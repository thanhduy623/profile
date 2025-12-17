<template>
    <section id="experience" class="flex flex-col bg-primary px-8 p-15 min-w-md">
        <h2 class="text-white uppercase text-center">{{ $t('title.project') }}</h2>

        <div class="swiper container">
            <div class="swiper-wrapper">
                <!-- Mỗi card là một swiper-slide -->
                <div class="swiper-slide" v-for="(card, index) in cards" :key="index">
                    <a href="#" class="card-link flex flex-col">
                        <img :src="card.img" class="card-image" />
                        <h3 class="card-title">{{ card.name }}</h3>
                        <div class="flex flex-row gap-1">
                            <span v-for="(technology, index) in card.technology" :key="index" class="badge">{{
                                technology }}</span>
                        </div>
                        <div class="card-description line-clamp-3 text-xs italic flex-1">
                            {{ card.description }}
                        </div>
                        <button class="card-button material-symbols-outlined self-end">arrow_insert</button>
                    </a>
                </div>
            </div>

            <!-- Pagination -->
            <div class="swiper-pagination"></div>

            <!-- Navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </section>
</template>

<script setup type="module">
    import { onMounted, ref } from 'vue'
    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

    import { useLocalizedData } from '@/utils/useLocalizedData'

    const { currentLang, localizedData: cards, toggleLanguage } = useLocalizedData('project.projectList')

    console.log(cards.value);


    onMounted(() => {
        // Thêm CSS từ CDN
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css'
        document.head.appendChild(link)

        // Khởi tạo Swiper
        new Swiper('.swiper', {
            loop: true,
            spaceBetween: 30,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                0: {
                    slidesPerView: 1, // màn hình từ 0px trở lên
                },
                1100: {
                    slidesPerView: 2, // từ 768px trở lên (tablet)
                },
                1440: {
                    slidesPerView: 3, // từ 1440px trở lên (desktop lớn)
                },
            },
        })
    })
</script>

<style scoped>
    #experience {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* background-color: var(--color-primary); */
        background-image: url('@/assets/images/banner-02.jpg');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
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
        min-height: 350px;
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