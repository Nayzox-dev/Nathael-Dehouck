document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre de manière classique

        const formData = new FormData(form); // Récupère les données du formulaire

        fetch(form.action, {
            method: "POST", // Envoi les données avec la méthode POST
            body: formData,
        })
        .then(response => {
            // Vider les champs du formulaire dès qu'une réponse est reçue (succès ou échec)
            form.reset(); // Réinitialise le formulaire, vide les champs
        })
        .catch(error => {
            // Vider les champs du formulaire aussi en cas d'erreur
            form.reset(); // Réinitialise le formulaire, vide les champs
        });
    });
});
