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

  console.log(`Prénom : ${prenom}, Nom : ${nom}, Email : ${email}, Date de naissance : ${birthdate}, Quantité : ${quantite}, Localisation : ${location}`);

  // Vérification des données
}
//!Fin traitement formulaire