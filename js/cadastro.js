document.addEventListener("DOMContentLoaded", function() {
    const buttonCustomer = document.getElementById("button-customer");
    const buttonCompany = document.getElementById("button-company");
    const formularioCadastroUsuario = document.getElementById("formularioCadastroUsuario");
    const formularioCadastroEmpresa = document.getElementById("formularioCadastroEmpresa");

    // Função para mostrar o formulário do consumidor e esconder o da empresa
    function showCustomerForm() {
        formularioCadastroUsuario.style.display = "block";
        formularioCadastroEmpresa.style.display = "none";
        buttonCustomer.style.backgroundColor = "#7edb61";
        buttonCompany.style.backgroundColor = "#37A416";
    }

    // Função para mostrar o formulário da empresa e esconder o do consumidor
    function showCompanyForm() {
        formularioCadastroUsuario.style.display = "none";
        formularioCadastroEmpresa.style.display = "block";
        buttonCustomer.style.backgroundColor = "#37A416";
        buttonCompany.style.backgroundColor = "#7edb61";
    }

    // Adiciona os event listeners aos botões
    buttonCustomer.addEventListener("click", showCustomerForm);
    buttonCompany.addEventListener("click", showCompanyForm);

    // Mostra o formulário do consumidor por padrão ao carregar a página
    showCustomerForm();
});
