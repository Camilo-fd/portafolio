document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    // Selecciona todos los elementos que quieres observar
    const elements = document.querySelectorAll('.hidden');
    elements.forEach(element => observer.observe(element));
});
