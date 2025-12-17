// src/utils/autoScroll.js
export function setupAutoScroll() {
    // Scroll mượt khi click vào các <a href="#id">
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (!targetElement) return;

            const offset = 63; // khoảng cách từ top

            window.scrollTo({
                top: targetElement.offsetTop - offset, // scroll đến đầu div cách top 24px
                behavior: 'smooth',
            });
        });
    });
}
