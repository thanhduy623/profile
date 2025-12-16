<template>
    <section id="organization" class="min-w-sm flex flex-col flex-2 gap-2">
        <h2 class="text-primary uppercase"> {{ $t('title.organization') }} </h2>

        <div class="organization-list flex flex-col gap-2">
            <div v-for="(org, index) in organizations" :key="index"
                class="bg-gray-100 border-l-2 border-primary p-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-sky-100">
                <p class="text-xs italic">{{ org.time }}</p>
                <h5 class="text-primary uppercase"> {{ org.name }} </h5>
                <p class="text-xs text-gray-600">{{ org.description }}</p>
            </div>
        </div>

    </section>
</template>

<script setup>
    const organizations = [
        {
            name: "Sinh viên khoa Công nghệ thông",
            time: "2022 - Hiện nay",
            description: "Lộ trình học tập và đào tạo theo chuyên ngành Kỹ thuật phần mềm đạt chuẩn kiểm định AUN-QA. Ban Tổ chức/Cộng tác các cuộc thi khởi nghiệp, học thuật chuyên ngành Công nghệ thông tin. Tích cực tham gia các hoạt động chuyên môn, các buổi hội thảo, chương trình seminar khoa học và công nghệ"
        },
        {
            name: "Chi ủy viên Chi bộ",
            time: "2025 - Hiện nay",
            description: "Công tác tại Chi bộ sinh viên khối Kỹ thuật 2 - Đảng bộ Trường Đại học Tôn Đức Thắng. Được xếp loại: Hoàn thành xuất sắc nhiệm vụ năm 2024, 2025."
        },
        {
            name: "UV. Ủy ban kiểm Tra Đoàn Trường",
            time: "2024 - Hiện nay",
            description: "Công tác tại Đoàn Trường Đại học Tôn Đức Thắng và kiêm nhiệm chức vụ Phó Bí thư Đoàn khoa Công nghệ thông tin."
        },
        {
            name: "Học sinh giỏi Tin học",
            time: "2019 - 2020",
            description: "Đạt giải học sinh giỏi tin học môn Tin học tại Trường THPT Vĩnh Thuận năm học 2019 - 2020."
        },
    ];
</script>

<style scoped>
    /* Có thể thêm các style tùy chỉnh nếu cần, ví dụ: */
    .organization-item {
        transition: transform 0.3s ease;
    }

    .organization-item:hover {
        transform: translateX(5px);
        background-color: #f7f9fc;
    }
</style>