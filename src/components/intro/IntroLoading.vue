<template>
    <div class="intro-overlay">
        <canvas ref="snowCanvas" id="snow-canvas"></canvas>

        <div class="container">
            <div class="welcome-text">
                <span>{{ typingText }}</span><span class="cursor">|</span>
            </div>
            <h1 class="name-glitch">#ThanhDuy</h1>
            <button class="enter-btn" @click="$emit('close')">Khám phá ngay</button>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'

    const emit = defineEmits(['close'])
    const snowCanvas = ref(null)
    const typingText = ref('')
    const fullText = "WELCOME MY PROFILE"
    let animationFrameId = null

    // Logic Đánh chữ
    const typeWriter = () => {
        let charIndex = 0
        const timer = setInterval(() => {
            if (charIndex < fullText.length) {
                typingText.value += fullText.charAt(charIndex)
                charIndex++
            } else {
                clearInterval(timer)
            }
        }, 100)
    }

    // Logic Tuyết rơi
    const initSnow = () => {
        const canvas = snowCanvas.value
        const ctx = canvas.getContext('2d')
        let width, height, snowflakes = []

        const updateSize = () => {
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        class Snowflake {
            constructor() { this.reset() }
            reset() {
                this.x = Math.random() * width
                this.y = Math.random() * height
                this.size = Math.random() * 3 + 1
                this.speedY = Math.random() * 1 + 0.5
                this.speedX = Math.random() * 0.5 - 0.25
                this.color = Math.random() > 0.5 ? "#ffffff" : "#38bdf8"
                this.opacity = Math.random() * 0.8 + 0.2
            }
            update() {
                this.y += this.speedY
                this.x += this.speedX
                if (this.y > height) { this.y = -10; this.x = Math.random() * width }
            }
            draw() {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.globalAlpha = this.opacity
                ctx.fill()
            }
        }

        updateSize()
        window.addEventListener('resize', updateSize)

        for (let i = 0; i < 150; i++) snowflakes.push(new Snowflake())

        const animate = () => {
            ctx.clearRect(0, 0, width, height)
            snowflakes.forEach(flake => {
                flake.update()
                flake.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }
        animate()
    }

    onMounted(() => {
        typeWriter()
        initSnow()
    })

    onUnmounted(() => {
        cancelAnimationFrame(animationFrameId)
    })
</script>

<style scoped>
    .intro-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, #072a6d 0%, #021182 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        overflow: hidden;
        color: white;
    }

    #snow-canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .container {
        text-align: center;
        z-index: 10;
    }

    .welcome-text {
        font-size: 1.2rem;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: #38bdf8;
        margin-bottom: 15px;
        min-height: 1.5rem;
    }

    .name-glitch {
        font-size: clamp(2.5rem, 8vw, 4.5rem);
        font-weight: 800;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(56, 189, 248, 0.5);
        margin-bottom: 30px;
    }

    .enter-btn {
        padding: 12px 35px;
        background: transparent;
        color: #ffffff;
        border: 2px solid #38bdf8;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        transition: all 0.3s ease;
    }

    .enter-btn:hover {
        background: #38bdf8;
        color: #021182;
        box-shadow: 0 0 30px rgba(56, 189, 248, 0.6);
        transform: translateY(-3px);
    }

    .cursor {
        display: inline-block;
        width: 3px;
        background-color: #38bdf8;
        margin-left: 5px;
        animation: blink 0.7s infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
</style>