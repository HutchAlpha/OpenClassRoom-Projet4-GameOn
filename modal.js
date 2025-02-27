//! Déclaration des DOMS
const modalbg = document.querySelector(".bground");
const formData = document.querySelectorAll(".formData");
//! FIN Déclaration des DOMS

//! Ouverture formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
//!FIN Ouverture formulaire

//!Fermer formulaire
const close = document.querySelector(".close");
close.addEventListener("click", closed);

function closed() {
  modalbg.style.display = "none";
}
//!Fin Fermer formulaire

//!traitement formulaire
const BoutonForm = document.querySelector(".btn-submit");
BoutonForm.addEventListener("click", traitementFormulaire);
  
function traitementFormulaire(event){
  event.preventDefault();
  console.log("Le bouton du formulaire a été cliqué !");
  // Récupération des données du formulaire
  const prenom = document.getElementById("firstName").value;
  const nom = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;
  const quantite = document.getElementById("quantityMatch").value;
  const location = document.querySelector("input[name='location']:checked")?.value || "";
  const conditions = document.getElementById("checkbox1").checked;
  const informer = document.getElementById("checkbox2").checked;


  console.log(`Prénom : ${prenom}, Nom : ${nom}, Email : ${email}, Date de naissance : ${birthdate}, Quantité : ${quantite}, Localisation : ${location}, conditions ${conditions}, informer ${informer}`);
  // Vérification des données

  const form = document.querySelector("form"); 

  for (let i = form.length - 1; i >= 0; i--) {
    
    if (form[i].value === "") {
      alert(`Veuillez renseigner tous les champs du formulaire !`);
      return;
    }

    if (prenom.length < 2) {
      alert("Veuillez renseigner au moins 2 caractéres pour votre prénom");
      return;
    }

    if (nom.length < 2) {
      alert("Veuillez renseigner au moins 2 caractéres pour votre nom");
      return;
    }

    if (!email.includes("@") ||!email.includes(".")) {
      alert("Veuillez renseigner un email valide");
      return;
    }

    if (location.length === 0) {
      alert("Veuillez renseigner une location");
      return;
    }

    if (!conditions) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }
}
}
//!Fin traitement formulaire