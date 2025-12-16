document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn-buy');
    const totalElement = document.querySelector('.cart-total');

    let totalSum = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            const card = button.closest('.card');
            const priceElement = card.querySelector('.price');

            // Если есть старая цена, берём только текущую
            let priceText = priceElement.querySelector('.old-price')
                ? priceElement.innerText.replace(priceElement.querySelector('.old-price').innerText, '').trim()
                : priceElement.innerText;

            // Убираем все символы кроме цифр
            const price = parseInt(priceText.replace(/\D/g, ''));

            totalSum += price;
            totalElement.innerText = totalSum.toLocaleString('ru-RU') + ' ₽';

            const originalText = button.innerText;
            button.style.backgroundColor = '#fff';
            button.style.color = '#000';
            button.innerText = 'В корзине';

            setTimeout(() => {
                button.style.backgroundColor = '';
                button.style.color = '';
                button.innerText = originalText;
            }, 2000);
        });
    });

    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== "") {
            alert('Поиск по запросу: ' + searchInput.value);
        }
    });
});
