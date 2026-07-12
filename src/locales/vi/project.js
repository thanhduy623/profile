// src/locales/vi/project.js

export default {
    titleSection: 'Dự án nổi bật',

    clickToSeeDetail:
        'Bấm vào đây để xem chi tiết',


    items: {

        'material-supply-system': {

            name:
                'Hệ thống cung ứng vật tư EVN',

            summary:
                'Hệ thống quản trị chuỗi cung ứng vật tư toàn diện hỗ trợ tối ưu hóa quy trình luân chuyển hàng hóa, tự động hóa luồng phê duyệt yêu cầu mua sắm nội bộ và kiểm soát chi tiết lịch sử xuất nhập kho theo thời gian thực cho doanh nghiệp.',

            details: [
                'Chịu trách nhiệm khảo sát nhu cầu nghiệp vụ để xây dựng tài liệu đặc tả yêu cầu phần mềm SRS chi tiết. Phân tích và hiện thực hóa các luồng quy trình phức tạp thông qua hệ thống sơ đồ Use Case, Activity Diagram và Sequence Diagram, giúp đội ngũ phát triển nắm bắt chính xác logic vận hành cung ứng.',

                'Thiết kế toàn bộ giao diện người dùng độ phân giải cao, tối ưu hóa trải nghiệm tương tác cho các phân hệ quản lý kho và duyệt phiếu mua sắm. Xây dựng hệ thống các thành phần UI đồng nhất giúp nhân viên thao tác nhập số liệu nhanh chóng, giảm sai sót.',

                'Thiết kế mô hình dữ liệu quan hệ ERD tối ưu hóa cấu trúc các bảng danh mục vật tư, nhà cung cấp và hóa đơn xuất nhập. Thực hiện chuẩn hóa dữ liệu chống trùng lặp, thiết lập các ràng buộc toàn vẹn dữ liệu chặt chẽ và viết các câu lệnh truy vấn SQL nâng cao phục vụ báo cáo.'
            ]

        },


        'hmk-store': {

            name:
                'Hệ thống HMK Eyewear',

            summary:
                'Hệ thống thương mại điện tử kiến trúc microservices phát triển trên nền tảng Spring Boot, đóng gói bằng Docker và triển khai trên hạ tầng đám mây AWS với giải pháp quản lý bộ nhớ đệm, truyền tin bất đồng bộ hướng sự kiện cùng khả năng tự động mở rộng tài nguyên linh hoạt.',

            details: [

                'Hệ thống thiết kế theo kiến trúc Microservices phân tách độc lập các dịch vụ cốt lõi giúp tối ưu hóa khả năng bảo trì. Tầng xử lý Backend phát triển bằng Spring Boot áp dụng nguyên lý RESTful API stateless kết hợp bộ lọc bảo mật mã hóa JWT nhằm đảm bảo an toàn thông tin cao và phân phối tải tối ưu giữa các cụm máy chủ xử lý.',

                'Tích hợp giải pháp truyền tin bất đồng bộ hướng sự kiện qua Message Queue RabbitMQ cho tác vụ xử lý sự kiện giỏ hàng và gửi email thông báo tự động. Hệ thống sử dụng cơ sở dữ liệu Firebase kết hợp bộ nhớ đệm Redis giúp giảm tải tối đa các truy vấn nặng, từ đó tăng tốc độ phản hồi API.',

                'Toàn bộ các dịch vụ được đóng gói container hóa bằng Docker và triển khai trên hạ tầng AWS đám mây. Cấu hình tự động cân bằng tải Application Load Balancer kết hợp Auto Scaling Group giúp hệ thống tự điều chỉnh số lượng node linh hoạt dựa theo mức độ tiêu thụ tài nguyên CPU và RAM.'
            ]

        },


        'vaschool-chatbot': {

            name:
                'Chatbot tuyển dụng VASchool',

            summary:
                'Hệ thống Chatbot Agent tích hợp trí tuệ nhân tạo tiên tiến và phân hệ quản trị toàn diện, hỗ trợ tự động hóa quy trình tuyển dụng nhân sự, sàng lọc hồ sơ ứng viên và tương tác phản hồi thông tin tự động liên tục 24/7 dựa trên cơ sở dữ liệu thực tế.',

            details: [

                'Ứng dụng kiến trúc Multi-Agent theo mô hình Coordinator-Specialist phân tách rõ ràng nhiệm vụ điều phối hệ thống. Trong đó gồm một Agent chịu trách nhiệm nhận diện ngôn ngữ, phân loại intent người dùng và ba Agent chuyên sâu phụ trách truy xuất dữ liệu thông tin trường học, vị trí tuyển dụng kèm bộ lọc sàng lọc hồ sơ CV.',

                'Xây dựng cơ chế RAG hai tầng tối ưu thực hiện Vector Search qua cơ sở dữ liệu Supabase PostgreSQL mở rộng pgvector. Hệ thống sử dụng mô hình nhúng 1536 chiều kết hợp tích hợp Cohere API để Rerank kết quả dựa trên độ tương đồng Cosine, giúp đạt chỉ số Precision@5 chính xác lên đến mức 87%.',

                'Tự động hóa luồng nghiệp vụ qua n8n gồm ba nhóm workflow quản trị tài liệu cơ sở tri thức, phân tích chấm điểm CV và điều phối tác vụ gửi email thông báo. Hệ thống bảo mật nghiêm ngặt nhờ cơ chế phân quyền dựa trên vai trò kết hợp chính sách Row-Level Security bảo vệ thông tin ứng viên.'
            ]

        },


        'pc-store': {

            name:
                'Hệ thống kinh doanh thương mại',

            summary:
                'Ứng dụng thương mại điện tử đa nền tảng kết hợp hệ thống trang quản trị toàn diện hỗ trợ kinh doanh thiết bị, linh kiện máy tính, xử lý luồng biến thể sản phẩm cấu hình sâu và đồng bộ trạng thái đơn hàng thời gian thực qua WebSocket.',

            details: [

                'Xây dựng trọn vẹn giải pháp phân hệ kép gồm ứng dụng di động đa nền tảng cho khách hàng mua sắm trực tuyến và trang quản trị vận hành nội bộ. Thiết kế giao diện người dùng đồng nhất, tối ưu hóa trải nghiệm trên nhiều kích thước màn hình bằng cấu trúc widget linh hoạt của Flutter và Dart.',

                'Tích hợp hệ sinh thái Firebase giúp lưu trữ phi cấu trúc danh mục sản phẩm phức tạp cùng hình ảnh độ phân giải cao. Phát triển tính năng cập nhật trạng thái đơn hàng, theo dõi lịch sử giao dịch và hệ thống đánh giá sản phẩm theo thời gian thực nhờ giải pháp kết nối mạng WebSocket.',

                'Xử lý tối ưu luồng phân tách dữ liệu biến thể sản phẩm sâu theo cấu hình kỹ thuật đặc thù ngành phần cứng máy tính. Áp dụng phương pháp kiểm thử hộp đen toàn diện trên nhiều thiết bị mô phỏng giúp tối ưu hóa hiệu suất ứng dụng, giảm thiểu độ trễ và đảm bảo tính ổn định.'
            ]

        },


        'student-certificate-management': {

            name:
                'Hệ thống quản lý tín chỉ',

            summary:
                'Ứng dụng di động hỗ trợ số hóa quy trình quản lý, tra cứu và lưu trữ tập trung dữ liệu chứng chỉ môn học của sinh viên theo thời gian thực, tối ưu hiệu suất luồng nhập xuất dữ liệu lớn và thuật toán nén hình ảnh bảo mật.',

            details: [

                'Xây dựng ứng dụng dựa trên mô hình kiến trúc kết hợp giữa MVC và MBD giúp tối ưu hóa mã nguồn, dễ dàng bảo trì hệ thống. Tích hợp cơ sở dữ liệu NoSQL Firebase Cloud Firestore để lưu trữ, đồng bộ thời gian thực và hỗ trợ cơ chế bộ nhớ đệm khi mất kết nối mạng.',

                'Phân quyền người dùng chặt chẽ giữa Quản trị viên và Nhân viên học vụ, phát triển tính năng tìm kiếm nâng cao cùng bộ lọc động đa tiêu chí. Xử lý tối ưu hiệu suất luồng nhập xuất dữ liệu quy mô lớn qua tệp cấu trúc CSV phục vụ công tác báo cáo định kỳ.',

                'Tối ưu dung lượng lưu trữ bằng cách xây dựng thuật toán giảm kích thước hình ảnh, chuyển đổi ảnh đại diện sang chuỗi dữ liệu mã hóa Base64 trước khi đồng bộ. Tăng cường bảo mật thông qua cơ chế mã hóa mật khẩu và thiết lập Firestore Security Rules để kiểm soát quyền truy cập.'
            ]

        },


        'online-banking': {

            name:
                'Hệ thống ngân hàng trực tuyến',

            summary:
                'Ứng dụng di động cung cấp giải pháp giao dịch tài chính tài khoản và hệ sinh thái dịch vụ đời sống toàn diện tích hợp xác thực bảo mật sinh trắc học vân tay cao cấp cùng cổng thanh toán điện tử VNPay trực tuyến an toàn.',

            details: [

                'Phát triển ứng dụng Android native bằng ngôn ngữ Java kết hợp XML Layout chuẩn giao diện Material Design giúp tối ưu hóa hiệu năng phản hồi mượt mà. Tích hợp bảo mật sinh trắc học qua BiometricPrompt API, cho phép xác thực dấu vân tay nhanh chóng khi đăng nhập và phê duyệt giao dịch tài chính.',

                'Xây dựng hệ sinh thái dịch vụ đa dạng bằng cách giả lập kết nối bên thứ ba qua môi trường thử nghiệm Sandbox Services. Hệ thống xử lý mượt mà nghiệp vụ nạp tiền điện thoại, đặt vé máy bay và mua vé xem phim, kết hợp cổng VNPay SDK hỗ trợ quy trình thanh toán an toàn.',

                'Sử dụng Firebase Realtime Database làm trung tâm lưu trữ, thiết lập cơ chế đồng bộ số dư tài khoản và cập nhật biến động theo thời gian thực. Phân tích yêu cầu nghiệp vụ thiết kế luồng tiền chặt chẽ, tối ưu các endpoint REST API nhằm giảm thiểu tỷ lệ xung đột khi mạng yếu.'
            ]

        },


        'real-estate-brokerage': {

            name:
                'Hệ thống môi giới bất động sản',

            summary:
                'Hệ thống web portal hỗ trợ kết nối, đăng tin và quản lý giao dịch môi giới bất động sản toàn diện, tích hợp thuật toán bộ lọc nâng cao xử lý tổ hợp nhiều điều kiện tìm kiếm phức tạp cùng cơ chế phân quyền bảo mật nghiêm ngặt.',

            details: [

                'Hệ thống được thiết kế hoàn chỉnh theo kiến trúc MVC phân lớp giúp tách biệt rõ ràng giữa logic giao diện, xử lý nghiệp vụ và tầng giao tiếp dữ liệu. Xây dựng các RESTful API chuẩn hóa phục vụ các tác vụ bất đồng bộ, quản lý danh mục tin đăng và xử lý luồng phê duyệt trạng thái.',

                'Phát triển thuật toán bộ lọc nâng cao xử lý mượt mà tổ hợp nhiều điều kiện tìm kiếm phức tạp cùng lúc bao gồm loại hình giao dịch, phân loại tài sản, khoảng diện tích và khoảng giá. Tích hợp framework Spring Security thiết lập cơ chế xác thực, phân quyền người dùng nghiêm ngặt dựa theo vai trò.',

                'Áp dụng phương pháp kiểm thử hộp đen xây dựng bộ testcase chi tiết bao quát toàn bộ các kịch bản thành công và xử lý ngoại lệ lỗi hệ thống cho từng API end-point. Sử dụng hệ quản trị MySQL tối ưu hóa cấu trúc bảng để giảm thiểu tối đa độ trễ phản hồi khi tải lớn.'
            ]

        },


        'internal-portal': {

            name:
                'Cổng thông tin Chi bộ',

            summary:
                'Hệ thống Web Portal quản lý nghiệp vụ, số hóa minh chứng và tối ưu quy trình vận hành công tác Đảng dành riêng cho Chi bộ Sinh viên khối Kỹ thuật 2 nhằm tiết kiệm tối đa chi phí vận hành nền tảng.',

            details: [

                'Thiết kế và phát triển giao diện Single Page Application bằng Vue 3 kết hợp Tailwind CSS, tối ưu hóa trải nghiệm người dùng mượt mà trên cả máy tính lẫn thiết bị di động. Xây dựng giải pháp Serverless độc đáo bằng cách biến Google Apps Script thành hệ thống RESTful API xử lý dữ liệu Backend.',

                'Sử dụng Google Sheets làm cơ sở dữ liệu trung tâm, thiết lập cơ chế đồng bộ thời gian thực giúp quản lý danh sách đảng viên và điểm danh sinh hoạt khoa học. Số hóa quy trình nộp, kiểm tra minh chứng giúp giảm 90% thủ tục giấy tờ thủ công cho ban chấp hành.',

                'Tối ưu hóa chi phí vận hành hệ thống về mức 0 đồng nhờ tận dụng hệ sinh thái đám mây miễn phí của Google và GitHub Pages. Thiết lập các bộ lọc động thông minh trên Frontend hỗ trợ truy xuất nhanh thông tin phân loại đảng viên và tổng hợp số liệu báo cáo định kỳ.'
            ]

        }

    }

}