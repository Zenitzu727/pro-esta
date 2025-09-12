noBtn.addEventListener('mouseover', () => {
    moveNoButton();
});

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Evita el comportamiento de zoom
    moveNoButton();
});

function moveNoButton() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const newTop = Math.random() * (viewportHeight - btnHeight);
    const newLeft = Math.random() * (viewportWidth - btnWidth);
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${newTop}px`;
    noBtn.style.left = `${newLeft}px`;
}