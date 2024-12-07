const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const item = question.closest('.faq__item');
        item.classList.toggle('active');
    });
});
