document.addEventListener('DOMContentLoaded', () => {

    const buyButtons = document.querySelectorAll('.btn-buy');
    const totalElement = document.querySelector('.cart-total');

    let totalSum = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            const card = button.closest('.card');
            const priceText = card.querySelector('.price').innerText;

            // Получаем число из цены (учёт скидок)
            const price = parseInt(
                priceText.replace(/\D/g, '')
            );

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

