import thumnailProject01 from '@/assets/images/thumnail-project-01.png';
import thumnailProject02 from '@/assets/images/thumnail-project-02.png';
import thumnailProject03 from '@/assets/images/thumnail-project-03.png';
import thumnailProject04 from '@/assets/images/thumnail-project-04.png';
import thumnailProject05 from '@/assets/images/thumnail-project-05.png';
import thumnailProject06 from '@/assets/images/thumnail-project-06.png';
import thumnailProject07 from '@/assets/images/thumnail-project-07.png';


export default {
    projectList: [
        {
            name: 'HMK Store',
            status: "Processing",
            img: thumnailProject01,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Spring", "Vue3", "Eruka", "RabbitMQ"],
            link: "",
            description: "A project to develop an e-commerce system for HMK Eyewear, aimed at expanding business capabilities and managing online sales efficiently."
        },
        {
            name: 'VASchool Chatbot Agent',
            status: "Completed",
            img: thumnailProject02,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Vue3", "Supabase", "n8n"],
            link: "https://fe-job-center.vercel.app/",
            description: "An administration system and automated chatbot to support recruitment for Viet Anh School, helping automate Q&A processes and candidate management."
        },
        {
            name: 'Online Banking Application',
            status: "Completed",
            img: thumnailProject03,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Java", "Firebase", "XML Layout", "API-RESTful"],
            link: "https://github.com/thanhduy623/mobile-final",
            description: "An application for online banking transactions, enabling customers to perform financial operations quickly and securely."
        },
        {
            name: 'Credit Management',
            status: "Completed",
            img: thumnailProject07,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Android", "XML", "Firebase"],
            link: "https://github.com/thanhduy623/Mobile-midterm",
            description: "A tool to manage academic credits for the University Office and track accumulated credits for students studying at TDTU."
        },
        {
            img: thumnailProject04,
            name: 'Personal Information Page',
            status: "Completed",
            tag: ["FE", "DB"],
            technology: ["Vue3", "Vite", "TaiwinCSS"],
            link: "https://thanhduy623.github.io/profile/",
            description: "A basic personal information page that presents an overview of the owner’s skills, experience, and contact methods."
        },
        {
            name: 'Internal Information Portal',
            status: "Completed",
            img: thumnailProject05,
            tag: ["FE", "BE"],
            technology: ["Vue3", "GAS", "G.Sheet"],
            link: "https://thanhduy623.github.io/cbsvkt2-portal/",
            description: "A system for managing party activities and internal operations of the Student Union in Technical Block 2, supporting the organization and tracking of regular activities."
        },
        {
            name: 'Summer Volunteer - TDTU',
            status: "Completed",
            img: thumnailProject06,
            tag: ["FE", "BE"],
            technology: ["HTML", "GAS", "G.Sheet"],
            link: "https://thanhduy623.github.io/MHX25/",
            description: "A tool to support communication, attendance tracking, and coordination between the campaign leadership team and volunteers of the IT Faculty Summer Volunteer Campaign."
        },
    ]
}
