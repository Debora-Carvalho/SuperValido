        function validarLogin(event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            var email = document.getElementById('email').value;
            var senha = document.getElementById('senha').value;

            if (email === 'test@gmail.com' && senha === '123456789') {
                window.location.href = 'indexperfil.html'; // Redireciona para a página indexperfil
            } else {
                alert('E-mail ou senha incorretos.'); // Exibe uma mensagem de erro
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            var form = document.querySelector('form');
            form.addEventListener('submit', validarLogin);
        });