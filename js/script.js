//função para fechar/abrir a janela do menu - perfil usuário

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM totalmente carregado e analisado');

    document.querySelector('.botao-perfil-icone').addEventListener('click', function() {
        console.log('Botão de perfil clicado');
        document.querySelector('.menu-perfil').classList.toggle('mostrar');
    });
});

