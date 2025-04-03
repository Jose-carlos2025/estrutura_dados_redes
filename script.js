// Exemplo de interatividade complexa
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close');

    // Função para mostrar o modal
    function showModal(text) {
        modalText.textContent = text;
        modal.style.display = 'block';
    }

    // Adiciona evento de clique em cada card
    cards.forEach(card => {
        card.addEventListener('click', function() {
            showModal(card.querySelector('h2').textContent + ': ' + card.querySelector('p').textContent);
        });
    });

    // Fecha o modal ao clicar no "X"
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Animação ao rolar a página
    window.addEventListener('scroll', function() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Ajuste para o efeito
            if (cardPosition < screenPosition) {
                card.classList.add('visible');
            }
        });
    });
});