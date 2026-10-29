function toggleAccordion(element) {
    const isOpen = element.classList.contains('accordion-open');
    const parent = element.closest('.space-y-3');
    if (parent) {
        parent.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('accordion-open');
        });
    }
    if (!isOpen) {
        element.classList.add('accordion-open');
    }
}


const authorsList = [
    "by Luizabeth Contreras",
    "Marlon Cassiani",
    "Jean Carlos",
    "Manuel Cano"
];


window.addEventListener('load', () => {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const authorName = document.getElementById('author-name');
    const dots = document.querySelectorAll('#author-progress-dots span');

   
    setTimeout(() => {
        if (step1) step1.classList.add('active');
    }, 300);

    
    setTimeout(() => {
        if (step1) step1.classList.remove('active');
        setTimeout(() => {
            if (step2) step2.classList.add('active');
            runAuthorsSequence(0);
        }, 1000);
    }, 4000);

    
    function runAuthorsSequence(index) {
        if (index >= authorsList.length) {
            if (step2) step2.classList.remove('active');
            setTimeout(() => {
                if (step3) step3.classList.add('active');
                setTimeout(endIntro, 6000);
            }, 1000);
            return;
        }

        if (authorName) {
            authorName.style.opacity = '0';
            authorName.style.transform = 'translateY(15px)';
        }

        setTimeout(() => {
            if (authorName) authorName.textContent = authorsList[index];
            dots.forEach((dot, dIdx) => {
                if (dIdx === index) {
                    dot.className = 'w-6 h-3 rounded-full bg-emerald-600 transition-all duration-300';
                } else {
                    dot.className = 'w-3 h-3 rounded-full bg-slate-300 transition-all duration-300';
                }
            });

            if (authorName) {
                authorName.style.opacity = '1';
                authorName.style.transform = 'translateY(0)';
            }
        }, 400);

        setTimeout(() => {
            runAuthorsSequence(index + 1);
        }, 2200);
    }
});


function endIntro() {
    const overlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');

    if (overlay) overlay.style.opacity = '0';
    setTimeout(() => {
        if (overlay) overlay.style.display = 'none';
        if (mainContent) mainContent.style.opacity = '1';
    }, 1000);
}