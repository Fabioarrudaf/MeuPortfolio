document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
});


document.querySelector('.ui-switch input').addEventListener('click', (e)=>{
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('light');    
});