import thumnailProject01 from '@/assets/images/thumnail-project-01.png';
import thumnailProject02 from '@/assets/images/thumnail-project-02.png';
import thumnailProject03 from '@/assets/images/thumnail-project-03.png';
import thumnailProject04 from '@/assets/images/thumnail-project-04.png';
import thumnailProject05 from '@/assets/images/thumnail-project-05.png';
import thumnailProject06 from '@/assets/images/thumnail-project-06.png';
import thumnailProject07 from '@/assets/images/thumnail-project-07.png';
import thumnailProject08 from '@/assets/images/thumnail-project-08.png';
import thumnailProject09 from '@/assets/images/thumnail-project-09.png';
import thumnailProject10 from '@/assets/images/thumnail-project-10.png';

export default {
    projectList: [
        {
            name: 'Cửa hàng HMK',
            status: "Processing",
            img: thumnailProject01,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Spring", "Vue3", "Eruka", "RabbitMQ"],
            link: "",
            description: "Dự án xây dựng hệ thống thương mại điện tử cho HMK Eyewear, nhằm mở rộng khả năng kinh doanh và quản lý bán hàng trực tuyến của doanh nghiệp."
        },
        {
            name: 'Chatbot agent VASchool',
            status: "Completed",
            img: thumnailProject02,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Vue3", "Supabase", "n8n"],
            link: "https://fe-job-center.vercel.app/",
            description: "Hệ thống quản trị và chatbot tự động hỗ trợ tuyển dụng cho Việt Anh School, giúp tự động hóa các quy trình hỏi đáp và quản lý ứng viên."
        },
        {
            name: 'Ngân hàng trực tuyến',
            status: "Completed",
            img: thumnailProject03,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Java", "Firebase", "XML Layout", "API-RESTful", "VNPay"],
            link: "https://github.com/thanhduy623/mobile-final",
            description: "Ứng dụng phục vụ giao dịch ngân hàng trực tuyến, giúp khách hàng thực hiện các thao tác tài chính nhanh chóng và an toàn."
        },
        {
            name: 'Quản lý tín chỉ',
            status: "Completed",
            img: thumnailProject07,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Android", "XML", "Firebase"],
            link: "https://github.com/thanhduy623/Mobile-midterm",
            description: "Công cụ hỗ quản lý tín chỉ cho phòng Đại học và theo dõi tín chỉ tích dành cho sinh viên đang học tập tại TDTU."
        },
        {
            name: 'Spring Commerce',
            status: "Completed",
            img: thumnailProject08,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["Spring", "Thymeleaf", "Firebase"],
            link: "https://github.com/thanhduy623/Java-midterm",
            description: "SpringCommerce là một ứng dụng mua sắm trực tuyến đơn giản được xây dựng với Spring Boot, Firebase và Spring Security. Mục tiêu là tạo ra một MVP với các chức năng cơ bản như tìm kiếm sản phẩm, quản lý giỏ hàng và đặt hàng."
        },
        {
            name: 'Cửa hàng di động',
            status: "Completed",
            img: thumnailProject09,
            tag: ["FE", "BE", "DB", "BA"],
            technology: ["PHP", "HTML", "CSS", "JS"],
            link: "https://github.com/thanhduy623/MobileStore",
            description: "Dự án này là một ứng dụng web Point of Sale (POS) được phát triển cho cửa hàng bán lẻ điện thoại và phụ kiện. Hệ thống được thiết kế chỉ phục vụ cho mục đích sử dụng nội bộ, dành cho quản trị viên cửa hàng và nhân viên bán hàng, không dành cho khách hàng."
        },
        {
            name: 'Cửa hàng máy tính',
            status: "Completed",
            img: thumnailProject10,
            tag: ["FE", "DB", "BA"],
            technology: ["Futter", "Firebase"],
            link: "https://github.com/thanhduy623/pc-store",
            description: "Dự án là một ứng dụng được phát triển với mục tiêu hỗ trợ quản lý và vận hành hoạt động kinh doanh cửa hàng máy tính. Bên cạnh đó hỗ trợ khách hàng mua sắm sản phẩm trên đa nền tảng."
        },
        // BASIC
        {
            img: thumnailProject04,
            name: 'Trang thông tin cá nhân',
            status: "Completed",
            tag: ["FE", "DB"],
            technology: ["Vue3", "Vite", "TaiwinCSS"],
            link: "https://thanhduy623.github.io/profile/",
            description: "Trang thông tin cá nhân cơ bản, trình bày tổng quan về năng lực, kinh nghiệm và các phương thức liên lạc của chủ sở hữu."
        },
        {
            name: 'Cổng thông tin nội bộ',
            status: "Completed",
            img: thumnailProject05,
            tag: ["FE", "BE"],
            technology: ["Vue3", "GAS", "G.Sheet"],
            link: "https://thanhduy623.github.io/cbsvkt2-portal/",
            description: "Hệ thống quản lý công tác Đảng và sinh hoạt nội bộ cho Chi bộ Sinh viên khối Kỹ thuật 2, hỗ trợ tổ chức và theo dõi các hoạt động thường kỳ."
        },
        {
            name: 'Mùa hè xanh 2025 - TDTU',
            status: "Completed",
            img: thumnailProject06,
            tag: ["FE", "BE"],
            technology: ["HTML", "GAS", "G.Sheet"],
            link: "https://thanhduy623.github.io/MHX25/",
            description: "Công cụ hỗ trợ truyền thông, điểm danh, liên lạc và kết nối giữa Ban Chỉ huy và các chiến sĩ tình nguyện của chiến dịch Mùa hè xanh khoa CNTT."
        },
    ]
}
