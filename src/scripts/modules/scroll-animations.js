export default function initScrollAnimations() {
	const elements = document.querySelectorAll('[data-aos]');

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('aos-animate');
						// Чтобы анимация срабатывала только 1 раз при появлении
						// (замените на observer.unobserve(entry.target);)
						// Но пока оставим как было в AOS (once: false)
					} else {
						entry.target.classList.remove('aos-animate');
					}
				});
			},
			{
				root: null,
				rootMargin: '0px 0px -50px 0px', // Срабатывает чуть выше нижнего края экрана
				threshold: 0,
			}
		);

		elements.forEach((el) => observer.observe(el));
	} else {
		// Fallback для очень старых браузеров (просто показываем элементы)
		elements.forEach((el) => el.classList.add('aos-animate'));
	}
}
