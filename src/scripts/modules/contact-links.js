/**
 * Модуль обработки кнопок записи на тренировку
 * Поддерживает WhatsApp и Telegram с предзаполненным сообщением
 */

const CONFIG = {
	// Номер телефона в формате без + и пробелов: 79109768999
	phone: '79109768999',

	// Username Telegram без @
	telegramUsername: 'sonyaalekseeva',

	// Выбор по умолчанию: 'whatsapp' или 'telegram'
	defaultChannel: 'whatsapp',

	// Предзаполненное сообщение
	message: 'Здравствуйте, хотим записаться на бесплатную тренировку',
};

// Функция для кодирования текста в URL
function encodeMessage(text) {
	return encodeURIComponent(text);
}

// Функция для генерирования ссылки WhatsApp
function getWhatsAppLink(phone, message) {
	// WhatsApp API: https://wa.me/PHONE?text=MESSAGE
	return `https://wa.me/${phone}?text=${encodeMessage(message)}`;
}

// Функция для генерирования ссылки Telegram
function getTelegramLink(username, message) {
	// Telegram Web: https://t.me/USERNAME?text=MESSAGE
	return `https://t.me/${username}?text=${encodeMessage(message)}`;
}
// Основная функция инициализации
function contactLinks() {
	const ctaButtons = document.querySelectorAll('[data-contact-type]');

	if (!ctaButtons.length) {
		console.warn('CTA кнопки не найдены');
		return;
	}

	ctaButtons.forEach((button) => {
		button.addEventListener('click', function (e) {
			e.preventDefault();

			const contactType = this.getAttribute('data-contact-type');
			let link = '';

			switch (contactType) {
				case 'whatsapp':
					link = getWhatsAppLink(CONFIG.phone, CONFIG.message);
					break;
				case 'telegram':
					link = getTelegramLink(CONFIG.telegramUsername, CONFIG.message);
					break;
				default:
					// Выбор по умолчанию
					if (CONFIG.defaultChannel === 'telegram') {
						link = getTelegramLink(CONFIG.telegramUsername, CONFIG.message);
					} else {
						link = getWhatsAppLink(CONFIG.phone, CONFIG.message);
					}
			}

			if (link) {
				// Открыть ссылку в новой вкладке
				window.open(link, '_blank');
			}
		});
	});
}

export default contactLinks;
