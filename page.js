
document.getElementById("leadForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    
    const accessToken = "SEU_ACCESS_TOKEN";  // Pegue o token OAuth2

    const response = await fetch("https://SEU_INSTANCE.salesforce.com/services/data/v58.0/sobjects/Lead/", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "LastName": nome,
            "Email": email,
            "Company": "Empresa Teste"
        })
    });

    if (response.ok) {
        alert("Lead cadastrado com sucesso!");
    } else {
        alert("Erro ao cadastrar lead!");
    }
});
