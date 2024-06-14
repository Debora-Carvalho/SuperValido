document.addEventListener('DOMContentLoaded', function() {
    var logoutLink = document.getElementById('logout-link');

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        var userConfirmed = confirm('Sair da conta?');
        if (userConfirmed) {
            window.location.href = 'index.html'; // Redireciona para index.html se o usuário confirmar
        }
    });
});