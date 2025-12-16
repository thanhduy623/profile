import { pathLogoApps } from '@/configs/images.js'

function createUrl(code, extention = 'svg') {
    return pathLogoApps + code + "." + extention;
}

export default {
    experienceList: [
        { name: "HTML & CSS", point: 90, description: "Expert", img: createUrl("html5") },
        { name: "Java script", point: 90, description: "Expert", img: createUrl("javascript") },
        { name: "Vue.JS", point: 90, description: "Expert", img: createUrl("vuedotjs") },
        { name: "Spring boot", point: 80, description: "Proficient", img: createUrl("spring") },
        { name: "App script", point: 80, description: "Proficient", img: createUrl("googleappsscript") },
        { name: "C++", point: 60, description: "Basic", img: createUrl("c") },
        { name: "Supabase", point: 75, description: "Core", img: createUrl("supabase") },
        { name: "Firebase", point: 70, description: "Proficient", img: createUrl("firebase") },
        { name: "Postgre", point: 65, description: "Basic", img: createUrl("postgresql") },
        { name: "Android studio", point: 65, description: "Beginner", img: createUrl("androidstudio") },
        { name: "n8n", point: 65, description: "Learning", img: createUrl("n8n") },
    ]
}
