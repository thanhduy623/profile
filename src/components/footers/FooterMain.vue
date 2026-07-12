<template>
    <div id="footer" class="flex flex-row flex-wrap justify-center items-center gap-10 w-full bg-primary p-6">
        <img class="max-w-30 flex-1 mr-10" :src="logo" alt="">

        <!-- THÔNG TIN LIÊN HỆ -->
        <div id="contact" class="min-w-xs flex flex-col flex-1 items-start self-start">
            <h5 class="text-white font-bold uppercase">
                {{ $t('footer.contact') }}
            </h5>

            <span class="text-white text-sm">
                <strong>{{ $t('footer.phone') }}</strong>: {{ phone }}
            </span>

            <span class="text-white text-sm">
                <strong>{{ $t('footer.email') }}</strong>: {{ email }}
            </span>

            <span class="text-white text-sm">
                <strong>{{ $t('footer.address') }}</strong>: {{ address }}
            </span>
        </div>

        <!-- MẠNG XÃ HỘI -->
        <div class="min-w-xs flex flex-col flex-1 items-start self-start">
            <h5 class="text-white font-bold uppercase">
                {{ $t('footer.social') }}
            </h5>

            <a
                :href="pathZalo"
                target="_blank"
                class="text-white text-sm hover:underline"
            >
                <strong>Zalo:</strong> 0834828525
            </a>

            <a
                :href="pathFacebook"
                target="_blank"
                class="text-white text-sm hover:underline"
            >
                <strong>Facebook:</strong> fb.com/PeeZee.6203
            </a>

            <a
                :href="pathGmail"
                class="text-white text-sm hover:underline"
            >
                <strong>Gmail:</strong>  nguyenduy.6203@gmail.com
            </a>
        </div>

        <!-- LỜI CẢM ƠN -->
        <div class="min-w-xs flex flex-col flex-1 items-start self-start text-sm text-white">
            <h5 class="text-white font-bold uppercase">
                {{ $t('footer.thanks') }}
            </h5>

            <span class="italic">
                {{ $t('footer.letter') }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { logo } from '@/data/images'

const phone = '(+84) 834 828 525'
const email = 'nguyenduy.6203@gmail.com'
const address = '19 Nguyen Huu Tho, Tan Hung, HCMC'

const pathZalo = 'https://zalo.me/0834828525'
const pathFacebook = 'https://fb.com/PeeZee.6203'
const pathGmail = `mailto:${email}`
</script>