document.addEventListener('DOMContentLoaded', () => {
    
    // Получаем все кнопки "Купить"
    const buyButtons = document.querySelectorAll('.btn-buy');

    // Добавляем обработчик событий для каждой кнопки
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Предотвращаем всплытие события, чтобы не срабатывал клик по карточке
            e.stopPropagation(); 
            
            const btn = e.target;
            const card = btn.closest('.card');
            const gameTitle = card.querySelector('h3').innerText;

            // Анимация и смена текста кнопки
            const originalText = btn.innerText;
            btn.style.backgroundColor = '#fff';
            btn.style.color = '#000';
            btn.innerText = 'В корзине';

            // В реальности тут была бы логика добавления в корзину
            console.log(`Игра "${gameTitle}" добавлена в корзину!`);

            // Возврат кнопки в исходное состояние через 2 секунды (для демо)
            setTimeout(() => {
                btn.style.backgroundColor = ''; // Сброс к стилю из CSS
                btn.style.color = '';
                btn.innerText = originalText;
            }, 2000);
        });
    });

    // Дополнительно: Обработка поиска при нажатии Enter
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && searchInput.value.trim() !== "") {
             alert('Поиск по запросу: ' + searchInput.value);
        }
    });
});