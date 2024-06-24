document.addEventListener('DOMContentLoaded', function() {
    const botaoCadastroUsuario = document.getElementById('botaoCadastroUsuario');
    const formularioCadastroUsuario = document.getElementById('formularioCadastroUsuario');
    const formularioCadastroEmpresa = document.getElementById('formularioCadastroEmpresa');

    botaoCadastroUsuario.addEventListener('click', function() {
        formularioCadastroUsuario.style.display = 'none';
        formularioCadastroEmpresa.style.display = 'block';
    });

    formularioCadastroEmpresa.style.display = 'none';
});
