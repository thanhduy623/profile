// src/locales/en/project.js

export default {
    titleSection: 'Featured Projects',

    clickToSeeDetail:
        'Click here to see details',


    items: {

        'material-supply-system': {

            name:
                'EVN Material Supply System',

            summary:
                'A comprehensive material supply chain management system that optimizes inventory circulation processes, automates internal procurement approval workflows, and provides real-time tracking of warehouse import and export histories.',

            details: [
                'Responsible for gathering business requirements and creating detailed Software Requirements Specification (SRS) documents. Analyzed and modeled complex business workflows using Use Case Diagrams, Activity Diagrams, and Sequence Diagrams to ensure accurate understanding of supply chain operations.',

                'Designed high-fidelity user interfaces for warehouse management and procurement approval modules. Developed a consistent UI component system to improve operational efficiency, simplify data entry processes, and minimize user errors.',

                'Designed optimized relational database models using ERD diagrams covering material catalogs, suppliers, and inventory transactions. Applied database normalization, enforced data integrity constraints, and developed advanced SQL queries for reporting purposes.'
            ]

        },


        'hmk-store': {

            name:
                'HMK Eyewear System',

            summary:
                'A microservices-based e-commerce platform developed with Spring Boot, containerized using Docker, and deployed on AWS cloud infrastructure with caching mechanisms, event-driven messaging, and automatic resource scaling.',

            details: [
                'Designed the system based on Microservices architecture by separating core services into independent modules for better scalability and maintainability. Developed backend services with Spring Boot following RESTful API principles and JWT-based authentication mechanisms.',

                'Integrated RabbitMQ for event-driven asynchronous communication to process shopping cart events and automated email notifications. Combined Firebase database services with Redis caching to improve API response performance.',

                'Containerized all services using Docker and deployed them on AWS cloud infrastructure. Configured Application Load Balancer and Auto Scaling Group to dynamically adjust computing resources according to system workload.'
            ]

        },


        'vaschool-chatbot': {

            name:
                'VASchool Recruitment Chatbot',

            summary:
                'An AI-powered recruitment chatbot platform integrated with an administration system that automates recruitment workflows, candidate screening processes, and provides continuous 24/7 automated responses based on real organizational data.',

            details: [
                'Implemented a Multi-Agent architecture following the Coordinator-Specialist model. Built specialized agents responsible for school information retrieval, recruitment position search, and candidate CV screening workflows.',

                'Developed a two-layer RAG architecture using vector search with Supabase PostgreSQL and pgvector extension. Applied 1536-dimensional embeddings combined with Cohere API reranking based on cosine similarity, achieving Precision@5 accuracy up to 87%.',

                'Automated operational workflows using n8n, including knowledge base document management, CV evaluation scoring, and email notification orchestration. Enhanced security through role-based access control and Row-Level Security policies.'
            ]

        },


        'digital-business-card': {
            name:
                'Digital Business Card System',

            summary:
                'An NFC-enabled digital business card platform that allows users to share contact information with a single tap, manage online profiles, enhance networking experiences, and strengthen personal branding.',

            details: [

                'Developed on a Vue.js frontend architecture combined with Cloudflare Workers and Cloudflare D1, delivering fast response times, low latency, and global deployment capabilities. Integrated NFC technology enables users to share personal profiles, contact details, and social media links without requiring a mobile application.',

                'Built a profile management system that allows users to update personal information, business details, and displayed content in real time. Designed secure authentication workflows featuring password management, administrative security codes, and access control mechanisms to protect user data.',

                'Optimized user experience across both iOS and Android devices through NDEF-compliant NFC communication. Leveraged Cloudflare D1 for centralized data storage and Workers for edge processing, improving system scalability, data access performance, and service reliability under high traffic conditions.'
            ]
        },


        'pc-store': {

            name:
                'Commerce System',

            summary:
                'A cross-platform e-commerce application combined with a comprehensive administration portal for computer hardware sales, supporting complex product configurations and real-time order synchronization through WebSocket.',

            details: [
                'Developed a complete dual-platform solution including a customer mobile shopping application and an internal administration portal. Designed a consistent user experience across multiple screen sizes using Flutter and Dart widget architecture.',

                'Integrated Firebase services to manage complex product catalogs and high-resolution images. Developed real-time order status updates, transaction history tracking, and product review features through WebSocket communication.',

                'Optimized product variant management workflows for complex computer hardware configurations. Applied comprehensive black-box testing across multiple devices to improve performance and ensure application stability.'
            ]

        },


        'real-estate-brokerage': {

            name:
                'Real Estate Brokerage System',

            summary:
                'A web portal supporting real estate listing management, brokerage operations, and transaction workflows with advanced filtering algorithms and strict role-based security mechanisms.',

            details: [
                'Designed the system using a layered MVC architecture to separate presentation, business logic, and data access layers. Developed standardized RESTful APIs for asynchronous operations and approval workflows.',

                'Implemented advanced filtering algorithms capable of processing multiple search conditions including transaction type, property category, area range, and price range. Integrated Spring Security for authentication and authorization management.',

                'Applied black-box testing methodologies to cover successful and exceptional API scenarios. Optimized MySQL database structures to reduce response latency under high workloads.'
            ]

        },


        'internal-portal': {

            name:
                'Party Branch Information Portal',

            summary:
                'A web portal designed to digitize operational processes, manage supporting documents, and optimize administrative workflows for the Engineering Student Party Branch while minimizing infrastructure costs.',

            details: [
                'Designed and developed a Single Page Application using Vue 3 combined with Tailwind CSS to provide a smooth experience across desktop and mobile devices. Built a serverless backend solution by transforming Google Apps Script into a RESTful API service.',

                'Used Google Sheets as the central database with real-time synchronization for member management and attendance tracking. Digitized document submission and verification processes to reduce manual paperwork by approximately 90%.',

                'Optimized infrastructure costs to zero by leveraging free cloud services from Google and GitHub Pages. Developed dynamic frontend filtering mechanisms for fast member information retrieval and periodic report generation.'
            ]

        },


        'online-banking': {

            name:
                'Online Banking System',

            summary:
                'A mobile banking application providing financial transaction services and lifestyle utilities integrated with biometric fingerprint authentication and secure VNPay online payment services.',

            details: [
                'Developed a native Android application using Java and XML Layout following Material Design principles. Integrated BiometricPrompt API to support secure fingerprint authentication for login and transaction approval.',

                'Built a diverse service ecosystem by simulating third-party integrations through sandbox environments. Supported mobile top-ups, flight booking, movie ticket purchasing, and secure VNPay payment workflows.',

                'Used Firebase Realtime Database as the central storage system with real-time account balance synchronization. Designed transaction workflows and optimized REST API endpoints to reduce conflicts under unstable network conditions.'
            ]

        },

    }

}