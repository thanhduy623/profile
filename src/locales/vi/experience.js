import { pathLogoApps } from '@/configs/images.js'

function createUrl(code, extention = 'svg') {
    return pathLogoApps + code + "." + extention;
}

export default {
    experienceList: [
        { name: "HTML & CSS", point: 90, description: "Thành thạo", img: createUrl("html5") },
        { name: "Java script", point: 90, description: "Thành thạo", img: createUrl("javascript") },
        { name: "Vue.JS", point: 90, description: "Thành thạo", img: createUrl("vuedotjs") },
        { name: "Spring boot", point: 80, description: "Khá tốt", img: createUrl("spring") },
        { name: "App script", point: 80, description: "Khá tốt", img: createUrl("googleappsscript") },
        { name: "C++", point: 60, description: "Sơ b", img: createUrl("c") },
        { name: "Supabase", point: 75, description: "Cốt lõi", img: createUrl("supabase") },
        { name: "Firebase", point: 70, description: "Khá tốt", img: createUrl("firebase") },
        { name: "Postgre", point: 65, description: "Sơ bộ", img: createUrl("postgresql") },
        { name: "Android studio", point: 65, description: "Tiếp cận", img: createUrl("androidstudio") },
        { name: "n8n", point: 65, description: "Nghiên cứu", img: createUrl("n8n") },
    ]
}
