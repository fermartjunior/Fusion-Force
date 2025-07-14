document.getElementById('contato').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const numeroWhatsApp = '18634441790'; 
  const texto = `Olá, meu nome é ${nome}.\n${mensagem}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});

document.getElementById('enviarInst').addEventListener('click', function (e) {
  e.preventDefault(); // Evita o envio do formulário

  const linkInstagram = 'https://www.instagram.com/fusion_force_racing_team';

  window.open(linkInstagram, '_blank'); // Abre em nova aba
});

document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
});


