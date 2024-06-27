        function validarLogin(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            var email = document.getElementById('email').value;
            var senha = document.getElementById('senha').value;

            if (email === 'anahi@gmail.com' && senha === '1234'||email === 'debora@gmail.com' && senha === '1234'||email === 'natalia@gmail.com' && senha === '1234') {
                window.location.href = 'indexPerfil.html'; // Redireciona para a página indexperfil
            } else {
                alert('E-mail ou senha incorretos.'); // Exibe uma mensagem de erro
            }
        }
        document.addEventListener('DOMContentLoaded', function() {
            var form = document.querySelector('form');
            form.addEventListener('submit', validarLogin);
        });