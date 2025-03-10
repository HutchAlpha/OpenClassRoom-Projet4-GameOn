//! Déclaration des DOMS
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
// Stocke le contenu initial du formulaire pour pouvoir le restaurer
const originalModalBody = modalBody.innerHTML;
//! FIN Déclaration des DOMS

//!Burgur
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//!Fin Burgur

//! Ouverture formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}
//!FIN Ouverture formulaire

//!Fermer formulaire (icône de fermeture)
const close = document.querySelector(".close");
close.addEventListener("click", closed);

function closed() {
  modalbg.style.display = "none";
  restoreForm();
}
//!Fin Fermer formulaire

//!traitement formulaire
const BoutonForm = document.querySelector("form");
BoutonForm.addEventListener("submit", traitementFormulaire);
  
function traitementFormulaire(event) {
  event.preventDefault();
  console.log("Le bouton du formulaire a été cliqué !");

  clearErrors();
  let Valid = true;

  //? Récupération des données du formulaire
  const prenom = document.getElementById("firstName");
  const nom = document.getElementById("lastName");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantite = document.getElementById("quantityMatch");
  const location = document.querySelector("input[name='location']:checked");
  const conditions = document.getElementById("checkbox1").checked;
  const informer = document.getElementById("checkbox2").checked;
  
  //? Vérification des données
  if (prenom.value.length < 2) {
    showError(prenom, "Veuillez renseigner au moins 2 caractères pour votre prénom");
    Valid = false;
  }

  if (nom.value.length < 2) {
    showError(nom, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    Valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError(email, "Veuillez renseigner un email valide");
    Valid = false;
  }

  if (birthdate.value.length === 0) {
    showError(birthdate, "Veuillez renseigner votre date de naissance");
    Valid = false;
  }

  if (quantite.value.length === 0) {
    showError(quantite, "Veuillez renseigner une quantité de matchs");
    Valid = false;
  }

  if (!location) {
    // Assure-toi d'avoir ajouté l'attribut id="locationContainer" sur le div englobant les boutons radio de localisation dans ton HTML
    showError(document.getElementById("locationContainer"), "Veuillez renseigner une location");
    Valid = false;
  }

  if (!conditions) {
    showError(document.getElementById("checkbox1"), "Veuillez accepter les conditions d'utilisation");
    Valid = false;
  }

  if (Valid) {
    showConfirmationMessage();

    const questionTournoi = document.querySelector(".text-label");
    if (questionTournoi) {
      questionTournoi.style.display = "none";
    }
    console.log(`Prénom : ${prenom.value}, Nom : ${nom.value}, Email : ${email.value}, Date de naissance : ${birthdate.value}, Quantité : ${quantite.value}, Localisation : ${location ? location.value : ""}, conditions : ${conditions}, informer : ${informer}`);
  }


}
//! FIN traitement formulaire
//! Affichage Erreur
function showError(element, message) {
  const parent = element.closest(".formData");
  if (parent) {
    parent.setAttribute("data-error", message);
    parent.setAttribute("data-error-visible", "true");
  }
}

function clearErrors() {
  document.querySelectorAll(".formData").forEach((field) => {
    field.removeAttribute("data-error");
    field.removeAttribute("data-error-visible");
  });
}
//! fin Affichage Erreur

//!Affichage Confirmation
function showConfirmationMessage() {
  // Réorganise le contenu pour afficher le message de confirmation
  let content = document.querySelector(".content");
  content.style.height = "100%";

  modalBody.innerHTML = "";
  modalBody.style.height = "100%";
  modalBody.style.display = "flex";
  modalBody.style.flexDirection = "column"; 
  modalBody.style.justifyContent = "space-around";

  let ajoutForm = document.createElement("p");
  ajoutForm.textContent = "Merci pour votre inscription";
  ajoutForm.style.textAlign = "center";
  ajoutForm.style.fontSize = "36px";

  let boutonRetour = document.createElement("button");
  boutonRetour.textContent = "Fermer";
  boutonRetour.classList.add("btn-submit", "button");
  boutonRetour.addEventListener("click", () => {
    modalbg.style.display = "none";
    restoreForm();
  });

  modalBody.appendChild(ajoutForm);
  modalBody.appendChild(boutonRetour);
}
//!Fin Affichage Confirmation

//! Fonction pour restaurer le formulaire initial
function restoreForm() {
  // Réinitialise le contenu de la modal à l'état initial
  modalBody.innerHTML = originalModalBody;let content = document.querySelector(".content");
  content.style.height = "820px";
  // Réattache le gestionnaire de soumission au formulaire réinitialisé
  const newForm = document.querySelector("form");
  newForm.addEventListener("submit", traitementFormulaire);
}
//! FIN Fonction pour restaurer le formulaire initial