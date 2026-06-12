import cls from '../../components/mobile-nav/mobile-nav.module.scss';

const preventScroll = (e) => {
	e.preventDefault();
};

const preventScrollKeys = (e) => {
	const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'];
	if (keys.includes(e.code)) {
		e.preventDefault();
	}
};

const mobileNav = () => {
	const navBtn = document.getElementById('mobile-nav-btn');
	const nav = document.getElementById('mobile-nav');
	const navIcon = navBtn?.querySelector('.nav-icon');
	const navLinks = document.querySelectorAll('[data-nav-link]');

	if (!navBtn || !nav) return;

	const toggleScrollLock = (isLocked) => {
		if (isLocked) {
			window.addEventListener('wheel', preventScroll, { passive: false });
			window.addEventListener('touchmove', preventScroll, { passive: false });
			window.addEventListener('keydown', preventScrollKeys, { passive: false });
		} else {
			window.removeEventListener('wheel', preventScroll);
			window.removeEventListener('touchmove', preventScroll);
			window.removeEventListener('keydown', preventScrollKeys);
		}
	};

	// Toggle menu
	navBtn.addEventListener('click', () => {
		const isOpen = nav.classList.toggle(cls.isOpen);
		navIcon?.classList.toggle('nav-icon--active');
		toggleScrollLock(isOpen);

		// Ариа атрибут для доступности
		navBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
	});

	// Close menu on link click
	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove(cls.isOpen);
			navIcon?.classList.remove('nav-icon--active');
			toggleScrollLock(false);
			navBtn.setAttribute('aria-expanded', 'false');
		});
	});

	// Close menu on resize to desktop
	window.addEventListener('resize', () => {
		if (window.innerWidth >= 1200) {
			nav.classList.remove(cls.isOpen);
			navIcon?.classList.remove('nav-icon--active');
			toggleScrollLock(false);
			navBtn.setAttribute('aria-expanded', 'false');
		}
	});
};

export default mobileNav;
