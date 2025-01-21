export function initFAQ() {
    const faqData = [
        {
            question: 'Jak mogę zamówić kwiaty w Kwiaciarni Miłość?',
            answer: 'Możesz zamówić kwiaty telefonicznie pod numerem 733 060 191, online poprzez naszą stronę, lub odwiedzając nas osobiście w naszej kwiaciarni przy ul. Puławskiej 38.'
        },
        {
            question: 'Czy oferujecie dostawę kwiatów w Warszawie?',
            answer: 'Tak, oferujemy dostawę 24/7 na terenie Warszawy. Dla zamówień powyżej określonej kwoty dostawa jest bezpłatna.'
        },
        {
            question: 'Jakie rodzaje kwiatów oferujecie?',
            answer: 'Oferujemy szeroki wybór świeżych kwiatów, w tym róże, piwonie, tulipany i wiele innych. Tworzymy także autorskie kompozycje i bukiety na zamówienie.'
        }
    ];

    const faqContainer = document.querySelector('.faq-grid');
    
    // Create FAQ elements
    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
                ${item.question}
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer" id="faq-answer-${index}">
                <p>${item.answer}</p>
            </div>
        `;
        faqContainer?.appendChild(faqItem);
    });

    // Add click handlers
    document.querySelectorAll('.faq-question').forEach((button, index) => {
        button.addEventListener('click', () => {
            const item = button.parentElement;
            const answer = button.nextElementSibling;
            const isOpen = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            button.setAttribute('aria-expanded', !isOpen);

            // Animate answer height
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
}