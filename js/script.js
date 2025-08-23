//BOTÃO FLUTUANTE WHATSAPP
  const whatsappButton = document.getElementById('whatsappButton');
  whatsappButton.addEventListener('click', function(e) {
    e.preventDefault();

    const mensagem = "Olá, quero falar com um especialista sobre meus direitos.";
    const numero = "5511971602821";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });

//BOTÃO ESPECIALISTA
  const especialistaButton = document.getElementById('especialistaButton');
  especialistaButton.addEventListener('click', function(e) {
    e.preventDefault();
    const mensagem = "Olá, quero falar com um especialista sobre meus direitos.";
    const numero = "5511971602821";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});

//FORM WHATSAPP
const form = document.getElementById('whatsappForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const numero = "5511971602821";

    const texto = `Olá, meu nome é ${nome}. \nMensagem: ${mensagem}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});