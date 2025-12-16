document.addEventListener('DOMContentLoaded', () => {
    
  
    const buyButtons = document.querySelectorAll('.btn-buy');

   
    buyButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            
            e.stopPropagation(); 
            
            const btn = e.target;
            const card = btn.closest('.card');
            const gameTitle = card.querySelector('h3').innerText;

           
            const originalText = btn.innerText;
            btn.style.backgroundColor = '#fff';
            btn.style.color = '#000';
            btn.innerText = 'В корзине';

           
            console.log(`Игра "${gameTitle}" добавлена в корзину!`);

            
            setTimeout(() => {
                btn.style.backgroundColor = ''; // Сброс к стилю из CSS
                btn.style.color = '';
                btn.innerText = originalText;
            }, 2000);
        });
    });

   
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && searchInput.value.trim() !== "") {
             alert('Поиск по запросу: ' + searchInput.value);
        }
    });

});
