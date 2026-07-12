import { pathLogoApps } from '@/data/images.js'

function createUrl(code, extension = 'svg') {
    return pathLogoApps + code + '.' + extension
}

export const experiences = [
    {
        id: 'html',
        name: 'HTML',
        point: 90,
        level: 'expert',
        img: createUrl('html5')
    },
    {
        id: 'css',
        name: 'CSS',
        point: 90,
        level: 'expert',
        img: createUrl('css')
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        point: 90,
        level: 'expert',
        img: createUrl('javascript')
    },
    {
        id: 'vuejs',
        name: 'Vue.js',
        point: 90,
        level: 'expert',
        img: createUrl('vuedotjs')
    },
    {
        id: 'spring-boot',
        name: 'Spring Boot',
        point: 80,
        level: 'proficient',
        img: createUrl('spring')
    },
    {
        id: 'apps-script',
        name: 'Apps Script',
        point: 80,
        level: 'proficient',
        img: createUrl('googleappsscript')
    },
    {
        id: 'cpp',
        name: 'C++',
        point: 65,
        level: 'background',
        img: createUrl('cplusplus')
    },
    {
        id: 'supabase',
        name: 'Supabase',
        point: 75,
        level: 'core',
        img: createUrl('supabase')
    },
    {
        id: 'firebase',
        name: 'Firebase',
        point: 75,
        level: 'proficient',
        img: createUrl('firebase')
    },
    {
        id: 'postgresql',
        name: 'PostgreSQL',
        point: 70,
        level: 'core',
        img: createUrl('postgresql')
    },
    {
        id: 'android-studio',
        name: 'Android Studio',
        point: 65,
        level: 'background',
        img: createUrl('androidstudio')
    },
    {
        id: 'n8n',
        name: 'n8n',
        point: 70,
        level: 'learning',
        img: createUrl('n8n')
    },
    {
        id: 'aws',
        name: 'AWS',
        point: 70,
        level: 'learning',
        img: createUrl('amazonwebservices')
    },
    {
        id: 'openai',
        name: 'OpenAI',
        point: 80,
        level: 'core',
        img: createUrl('openai')
    },
    {
        id: 'tailwindcss',
        name: 'Tailwind Css',
        point: 90,
        level: 'expert',
        img: createUrl('tailwindcss')
    },
    {
        id: 'ant-design',
        name: 'Ant Design',
        point: 80,
        level: 'proficient',
        img: createUrl('antdesign')
    },
    {
        id: 'canva',
        name: 'Canva',
        point: 85,
        level: 'proficient',
        img: createUrl('canva')
    },
    {
        id: 'mos',
        name: 'MOS',
        point: 90,
        level: 'expert',
        img: createUrl('microsoftoffice')
    },   
]