import { createApp } from 'vue'
import App from './App.vue'

// Định dạng
import './style.css'

// Ngôn ngữ
import { createI18n } from 'vue-i18n'
import vi from '@/locales/vi'
import en from '@/locales/en'
import zh from '@/locales/zh'

const app = createApp(App);

const i18n = createI18n({ 
    legacy: false, 
    locale: 'vi', 
    fallbackLocale: 'en', 
    messages: { vi, en, zh } 
})

app.use(i18n)
app.mount('#app')
