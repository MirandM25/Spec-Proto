// Toggle collapsible sections
function toggleSection(button) {
    const section = button.closest('.collapsible-section');
    const content = section.querySelector('.collapsible-content');
    const icon = button.querySelector('.toggle-icon');
    
    section.classList.toggle('open');
    
    if (section.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
    } else {
        content.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
    }
}

// Auto-open first collapsible section on load
window.addEventListener('DOMContentLoaded', function() {
    const firstCollapsible = document.querySelector('.collapsible-section');
    if (firstCollapsible) {
        const button = firstCollapsible.querySelector('.section-toggle');
        toggleSection(button);
    }
});

// Sticky apply card on scroll & Background image opacity effect
window.addEventListener('scroll', function() {
    const applyCard = document.querySelector('.apply-card-sticky');
    const sidebar = document.querySelector('.job-detail-sidebar');
    const backgroundHero = document.getElementById('backgroundHero');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Background image opacity effect as you scroll/pull up
    if (backgroundHero) {
        const maxScroll = 400;
        const scrollPercent = Math.min(scrollTop / maxScroll, 1);
        
        // Reduce opacity from 1 to 0.2 as you scroll
        const opacity = 1 - (scrollPercent * 0.8);
        backgroundHero.style.opacity = opacity;
    }
    
    // Sticky apply card
    if (applyCard && sidebar) {
        const sidebarRect = sidebar.getBoundingClientRect();
        
        if (scrollTop > 300 && sidebarRect.top <= 100) {
            applyCard.style.position = 'sticky';
            applyCard.style.top = '100px';
        } else if (scrollTop <= 300) {
            applyCard.style.position = 'relative';
            applyCard.style.top = '0';
        }
    }
});

// Compensation Modal Handling
const salaryInfoBtn = document.getElementById('salaryInfoBtn');
const compensationModal = document.getElementById('compensationModal');
const closeModalBtn = document.getElementById('closeModal');

if (salaryInfoBtn && compensationModal) {
    salaryInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        compensationModal.classList.add('active');
    });

    closeModalBtn.addEventListener('click', function() {
        compensationModal.classList.remove('active');
    });

    compensationModal.addEventListener('click', function(e) {
        if (e.target === compensationModal) {
            compensationModal.classList.remove('active');
        }
    });
}
