import { createApp } from 'vue'
import App from './App.vue'

// Định dạng
import './style.css'

// Ngôn ngữ
import { createI18n } from 'vue-i18n'
import vi from '@/locales/vi'
import en from '@/locales/en'

const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'en',
    messages: {
        vi,
        en
    }
})

createApp(App).use(i18n).mount('#app')
