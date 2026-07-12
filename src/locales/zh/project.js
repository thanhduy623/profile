// src/locales/zh/project.js

export default {
    titleSection: '精选项目',
    clickToSeeDetail: '点击此处查看详情',

    items: {
        'material-supply-system': {
            name: 'EVN物资供应系统',

            summary: '一套全面的供应链管理系统，帮助企业优化物资流转流程，实现内部采购审批自动化，并对仓库出入库历史进行实时精细化管理。',

            details: [
                '负责调研业务需求并编写详细的软件需求规格说明书（SRS）。通过 Use Case、Activity Diagram 和 Sequence Diagram 等建模工具分析并实现复杂业务流程，帮助开发团队准确理解供应链运作逻辑。',

                '设计整套高保真用户界面，优化仓储管理与采购审批模块的交互体验。构建统一的 UI 组件体系，提高员工数据录入效率并减少操作错误。',

                '设计关系型数据库 ERD 模型，优化物资目录、供应商及出入库单据的数据结构。完成数据规范化处理，建立严格的数据完整性约束，并编写高级 SQL 查询用于统计报表分析。'
            ]
        },

        'hmk-store': {
            name: 'HMK Eyewear 系统',

            summary: '基于 Spring Boot 的微服务电商系统，采用 Docker 容器化部署于 AWS 云平台，结合缓存管理、事件驱动异步消息机制以及自动弹性扩缩容能力。',

            details: [
                '系统采用微服务架构，将核心服务独立拆分以提高可维护性。后端基于 Spring Boot 开发，遵循无状态 RESTful API 原则，并结合 JWT 安全认证机制，保障数据安全和服务器集群负载均衡。',

                '集成 RabbitMQ 事件驱动消息队列，实现购物车事件处理与自动邮件通知。采用 Firebase 数据库结合 Redis 缓存机制，大幅降低高频查询压力并提升 API 响应速度。',

                '所有服务均通过 Docker 容器化部署于 AWS 云基础设施。结合 Application Load Balancer 与 Auto Scaling Group，根据 CPU 与内存使用情况自动调整节点数量，实现资源弹性扩展。'
            ]
        },

        'vaschool-chatbot': {
            name: 'VASchool 招聘聊天机器人',

            summary: '集成先进人工智能技术与完整管理模块的 Agent Chatbot 系统，用于自动化招聘流程、筛选候选人简历，并基于真实数据实现 7×24 小时自动交互服务。',

            details: [
                '采用 Coordinator-Specialist 多智能体架构，实现系统任务的清晰分工。其中包含一个负责语言识别与意图分类的协调 Agent，以及三个专门负责学校信息查询、招聘岗位查询和简历筛选的专业 Agent。',

                '构建双层 RAG 架构，通过 Supabase PostgreSQL 的 pgvector 扩展实现向量检索。系统采用 1536 维嵌入模型，并集成 Cohere API 对结果进行 Cosine 相似度重排序，使 Precision@5 准确率达到 87%。',

                '利用 n8n 自动化业务流程，包括知识库文档管理、简历评分分析以及邮件通知任务调度。结合基于角色的权限控制和 Row-Level Security 策略，全面保障候选人数据安全。'
            ]
        },

        'pc-store': {
            name: '电子商务系统',

            summary: '跨平台电商应用结合完整后台管理系统，支持电脑设备及配件销售、复杂商品规格管理，并通过 WebSocket 实现订单状态实时同步。',

            details: [
                '构建完整双端解决方案，包括面向客户的跨平台移动应用和内部运营管理后台。利用 Flutter 与 Dart 灵活的 Widget 架构设计统一界面，优化不同设备上的用户体验。',

                '集成 Firebase 生态系统，用于存储复杂商品目录和高清图片资源。开发订单状态更新、交易历史追踪以及基于 WebSocket 的实时商品评价系统。',

                '针对电脑硬件行业复杂配置特点，优化商品规格数据结构设计。采用全面黑盒测试方案，在多种模拟设备上进行性能验证，降低延迟并提高系统稳定性。'
            ]
        },

        'student-certificate-management': {
            name: '学分管理系统',

            summary: '移动应用用于数字化管理、查询和集中存储学生课程证书数据，实现实时同步，并优化大规模数据导入导出与图像压缩安全机制。',

            details: [
                '采用 MVC 与 MBD 混合架构开发系统，提高代码可维护性。集成 Firebase Cloud Firestore NoSQL 数据库，实现实时同步及离线缓存机制。',

                '实现管理员与教务人员之间的严格权限控制，开发高级搜索与多条件动态筛选功能。优化基于 CSV 文件的大规模数据导入导出流程，满足周期性报表需求。',

                '通过图像压缩算法减少存储空间占用，在同步前将头像转换为 Base64 编码字符串。结合密码加密机制和 Firestore Security Rules 强化数据访问安全。'
            ]
        },

        'online-banking': {
            name: '网上银行系统',

            summary: '移动金融应用，提供账户交易及生活服务生态系统，集成高级指纹生物识别认证和安全的 VNPay 在线支付网关。',

            details: [
                '采用 Java 与 XML Layout 开发原生 Android 应用，遵循 Material Design 规范，保证流畅响应性能。集成 BiometricPrompt API，实现登录与交易审批时的快速指纹验证。',

                '通过 Sandbox Services 模拟第三方服务接入，构建丰富的生活服务生态。系统支持手机充值、机票预订、电影票购买等业务，并结合 VNPay SDK 实现安全支付。',

                '采用 Firebase Realtime Database 作为核心数据存储，实现账户余额与交易变动的实时同步。根据业务需求设计严谨的资金流逻辑，并优化 REST API 以降低弱网环境下的数据冲突。'
            ]
        },

        'real-estate-brokerage': {
            name: '房地产经纪系统',

            summary: '房地产门户网站系统，支持房源发布、交易管理与用户连接，集成复杂条件组合搜索算法及严格权限控制机制。',

            details: [
                '系统采用分层 MVC 架构，实现界面逻辑、业务处理与数据访问层的清晰分离。构建标准化 RESTful API，用于异步任务处理、房源管理及审批流程控制。',

                '开发高级筛选算法，可同时处理交易类型、资产类别、面积区间和价格区间等多种复杂搜索条件。集成 Spring Security 实现基于角色的认证与权限管理。',

                '采用黑盒测试方法设计完整测试用例，覆盖成功场景及异常处理逻辑。通过优化 MySQL 数据表结构，有效降低高并发场景下的响应延迟。'
            ]
        },

        'internal-portal': {
            name: '党支部信息门户',

            summary: '面向工程学院第二学生党支部的 Web Portal 系统，实现业务数字化、材料电子化管理以及党建工作流程优化，同时最大程度降低平台运营成本。',

            details: [
                '采用 Vue 3 与 Tailwind CSS 开发单页应用（SPA），兼顾桌面端和移动端用户体验。创新性地利用 Google Apps Script 构建 Serverless RESTful API 作为后端服务。',

                '使用 Google Sheets 作为核心数据库，实现党员名单和活动签到的实时同步管理。将材料提交与审核流程数字化，使党支部纸质文档处理工作减少约 90%。',

                '充分利用 Google 免费云服务与 GitHub Pages，实现零运营成本部署。通过前端智能动态筛选功能，快速查询党员分类信息并生成周期性统计报表。'
            ]
        }
    }
}