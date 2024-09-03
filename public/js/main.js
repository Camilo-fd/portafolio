document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hidden').forEach(el => {
        el.classList.remove('hidden');
    });
});