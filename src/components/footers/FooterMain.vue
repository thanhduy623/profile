<template>
    <div class="footer flex flex-row flex-wrap justify-center items-center gap-10 w-full bg-primary p-4">
        <img class="max-w-30" :src="pathLogo" alt="">

        <!-- THÔNG TIN LIÊN LẠC -->
        <div class="flex flex-col flex-1 items-start self-start">
            <h5 class="text-white"> {{ $t('title.contact') }}</h5>

            <span class="text-white text-sm">
                <strong>{{ $t('common.phone') }}</strong>: {{ $t('profile.phone') }}
            </span>

            <span class="text-white text-sm">
                <strong>{{ $t('common.email') }}</strong>: {{ $t('profile.email') }}
            </span>

            <span class="text-white text-sm">
                <strong>{{ $t('common.address') }}</strong>: {{ $t('profile.address') }}
            </span>

            <div class="flex flex-row gap-2 mt-2">
                <a :href="pathZalo" class="w-5 h-5 text-white">
                    <img width="50" height="50" src="https://file.hstatic.net/200000949440/file/zalo5.png" />
                </a>
                <a :href="pathFacebook" class="w-5 h-5 invert">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg" />
                </a>
                <a :href="pathGmail" class="w-5 h-5 invert">
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/gmail.svg" />
                </a>
            </div>
        </div>

        <!-- LỜI CẢM ƠN -->
        <div class="flex flex-col flex-1 items-start self-start text-sm text-white italic">
            <h5 class="text-white"> {{ $t('title.thanks') }} </h5>
            <span> {{ $t('profile.letter') }} </span>
        </div>
    </div>
</template>

<script setup>
    import { pathLogo } from '@/configs/images'

    const pathZalo = "https://zalo.me/0834828525";
    const pathFacebook = "http://fb.com/PeeZee.6203";
    const pathGmail = "mailto:nguyenduy.6203@gmail.com";
</script>