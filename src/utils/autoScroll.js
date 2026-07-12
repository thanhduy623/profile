// src/utils/autoScroll.js
export function setupAutoScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const targetId = this.getAttribute('href').substring(1)
            const targetElement = document.getElementById(targetId)

            if (!targetElement) return

            const headerHeight = 200

            const top =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight

            window.scrollTo({
                top,
                behavior: 'smooth'
            })
        })
    })
}
