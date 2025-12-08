// Atualiza o ano
document.getElementById("ano").textContent = new Date().getFullYear();

// Lógica do formulário
const form = document.getElementById("contact-form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        feedback.textContent = "Por favor, preencha todos os campos.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent = "Mensagem enviada com sucesso!";
    feedback.style.color = "green";

    form.reset();
});
