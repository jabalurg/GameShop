document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn-buy');
    const totalElement = document.querySelector('.cart-total');

    let totalSum = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            const card = button.closest('.card');
            const priceElement = card.querySelector('.price');

            let priceText = priceElement.querySelector('.old-price')
                ? priceElement.innerText.replace(priceElement.querySelector('.old-price').innerText, '').trim()
                : priceElement.innerText;

            const price = parseInt(priceText.replace(/\D/g, ''));

            totalSum += price;
            totalElement.innerText = totalSum.toLocaleString('ru-RU') + ' ₽';

            // Ставим кнопку в "В корзине", без сброса
            button.style.backgroundColor = '#fff';
            button.style.color = '#000';
            button.innerText = 'В корзине';
            button.disabled = true; // чтобы нельзя было нажать снова
        });
    });

    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim() !== "") {
            alert('Поиск по запросу: ' + searchInput.value);
        }
    });
});
