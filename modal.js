//! Déclaration des DOMS
const modalbg = document.querySelector(".bground");
const modalBody = document.querySelector(".modal-body");
// Stocke le contenu initial 
const originalModalBody = modalBody.innerHTML;


//!Burgur
  var menuToggle = document.getElementById("menuToggle");

  menuToggle.addEventListener("click", editNav);

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//! Ouverture formulaire
const modalBtn = document.querySelectorAll(".modal-btn");
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function launchModal() {
  modalbg.style.display = "block";
}


//!Fermer formulaire
const close = document.querySelector(".close");
close.addEventListener("click", closed);

function closed() {
  modalbg.style.display = "none";
}


//!traitement formulaire
const BoutonForm = document.querySelector("form");
BoutonForm.addEventListener("submit", traitementFormulaire);
  
function traitementFormulaire(event) {
  event.preventDefault();
  console.log("Le bouton du formulaire a été cliqué !");

  clearErrors();
  let valid = true;

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
    valid = false;
  }

  if (nom.value.length < 2) {
    showError(nom, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showError(email, "Veuillez renseigner un email valide");
    valid = false;
  }

  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (birthdate.value.length === 0) {
    showError(birthdate, "Veuillez renseigner votre date de naissance");
    valid = false;
  } else if (!dateRegex.test(birthdate.value)) {
    showError(birthdate, "Format invalide. Utilisez JJ/MM/AAAA");
    valid = false;
  }

  if ( quantite.value.trim() === "" ||quantite.value < 0 || quantite.value > 99) {
    showError(quantite, "Veuillez entrer un nombre entre 0 et 99 pour la quantité de tournois");
    valid = false;
  }

  if (!location) {
    showError(document.getElementById("locationContainer"), "Veuillez renseigner une location");
    valid = false;
  }

  if (!conditions) {
    showError(document.getElementById("checkbox1"), "Veuillez accepter les conditions d'utilisation");
    valid = false;
  }

  if (valid) {
    showConfirmationMessage();

    const questionTournoi = document.querySelector(".text-label");
    if (questionTournoi) {
      questionTournoi.style.display = "none";
    }
    console.log(`Prénom : ${prenom.value}, Nom : ${nom.value}, Email : ${email.value}, Date de naissance : ${birthdate.value}, Quantité : ${quantite.value}, Localisation : ${location ? location.value : ""}, conditions : ${conditions}, informer : ${informer}`);
  }
}

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


//!Affichage Confirmation
function showConfirmationMessage() {

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


//! Fonction pour restaurer le formulaire initial
function restoreForm() {
  // Réinitialise le contenu de la modal
  modalBody.innerHTML = originalModalBody;
  let content = document.querySelector(".content");
  content.style.height = "820px";

  const newForm = document.querySelector("form");
  newForm.addEventListener("submit", traitementFormulaire);
}
