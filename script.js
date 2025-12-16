document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn-buy');
    const cartTotal = document.querySelector('.cart-total');

    let total = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = button.closest('.card');
            const priceEl = card.querySelector('.price');
            let price = parseInt(priceEl.innerText.replace(/\s|₽/g, '')); // Получаем число

            total += price; // Добавляем к общей сумме
            cartTotal.innerText = total.toLocaleString('ru-RU') + ' ₽';

            // Меняем текст кнопки на "В корзине"
            button.innerText = 'В корзине';
            button.disabled = true; // Блокируем кнопку, чтобы повторно не добавлять
        });
    });

    // Простой поиск
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && searchInput.value.trim() !== "") {
            alert('Поиск по запросу: ' + searchInput.value);
        }
    });

});

