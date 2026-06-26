const gallery = document.getElementById('gallery');

function addAnimal() {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="https://placedog.net/300/200?id=${Math.floor(Math.random() * 200)}" alt="Animal">
        <button onclick="toggleCurtir(this)">Curtir</button>
    `;
    gallery.appendChild(card);
}

function toggleCurtir(btn) {
    // Alterna a classe 'liked' e muda o texto
    btn.classList.toggle('liked');
    
    if (btn.classList.contains('liked')) {
        btn.innerText = '❤️ Curtido';
    } else {
        btn.innerText = 'Curtir';
    }
}

// Carrega fotos iniciais
for(let i=0; i<4; i++) addAnimal();

// Rolagem infinita
window.onscroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        addAnimal();
    }
};