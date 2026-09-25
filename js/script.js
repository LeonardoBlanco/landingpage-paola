document.addEventListener('DOMContentLoaded', function () {
  const numero = "5511972722661";

  // BOTÃO FLUTUANTE WHATSAPP
  const whatsappButton = document.getElementById('whatsappButton');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', function(e) {
      e.preventDefault();
      const mensagem = "Olá, vim através do site e gostaria de mais informações.";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    });
  }

  // BOTÃO ESPECIALISTA (botões de ação da página)
  const botoesEspecialista = document.querySelectorAll(".especialistaButton");
  botoesEspecialista.forEach(botao => {
    botao.addEventListener('click', function(e) {
      e.preventDefault();
      const mensagem = "Olá, vim através do site e gostaria de mais informações.";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    });
  });

  // FORMULÁRIO WHATSAPP
  const form = document.getElementById('whatsappForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nomeInput = document.getElementById('nome');
      const mensagemInput = document.getElementById('mensagem');
      const nome = nomeInput ? nomeInput.value.trim() : '';
      const mensagem = mensagemInput ? mensagemInput.value.trim() : '';

      const texto = `Olá, vim através do site e gostaria de mais informações. Meu nome é ${nome}.\nMensagem: ${mensagem}`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });
  }
});