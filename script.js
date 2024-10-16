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

    // Remove the click event listener for the CTA button
});
