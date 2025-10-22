//BOTÃO FLUTUANTE WHATSAPP
  const whatsappButton = document.getElementById('whatsappButton');
  whatsappButton.addEventListener('click', function(e) {
    e.preventDefault();

    const mensagem = "Olá, vim através do site e gostaria de mais informações.";
    const numero = "5511972722661";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });

// BOTÃO ESPECIALISTA
const botoes = document.querySelectorAll(".especialistaButton");

botoes.forEach(botao => {
  botao.addEventListener('click', function(e) {
    e.preventDefault();
    const mensagem = "Olá, vim através do site e gostaria de mais informações.";
    const numero = "5511972722661";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  });
});

//FORM WHATSAPP
const form = document.getElementById('whatsappForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const numero = "5511972722661";

    const texto = `Olá, vim através do site e gostaria de mais informações, meu nome é ${nome}. \nMensagem: ${mensagem}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
});