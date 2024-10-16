document.addEventListener('DOMContentLoaded', () => {
    const sparkles = document.querySelector('.sparkles');
    const heroSection = document.querySelector('.hero');

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        sparkles.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }

    setInterval(createSparkle, 50);

    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
});
