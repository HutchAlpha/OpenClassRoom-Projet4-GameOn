//! Déclaration des DOMS
const modalbg = document.querySelector(".bground");
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

//!Fermer formulaire
const close = document.querySelector(".close");
close.addEventListener("click", closed);

function closed() {
  modalbg.style.display = "none";
}
//!Fin Fermer formulaire

//!traitement formulaire
const BoutonForm = document.querySelector("form");
BoutonForm.addEventListener("submit", traitementFormulaire);
  
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
      alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
      return;
    }

    if (!email.includes("@") ||!email.includes(".")) {
      alert("Veuillez renseigner un email valide");
      return;
    }

    if (quantite.length === 0) {
      alert("Veuillez renseigner une quantité de matchs");
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

    //!Suppresion des données de formulaire
    const questionTournoi = document.querySelector(".text-label");
    if (questionTournoi) {
      questionTournoi.style.display = "none";
    }
    //!FIN Suppresion des données de formulaire

    //!Ajout message confirmation + bouton

      //?Organisation du block comme sur le FIGMA
      let content = document.querySelector(".content");
      content.style.height = "100%";

      const modalBody = document.querySelector(".modal-body");
      modalBody.innerHTML = "";
      modalBody.style.height = "100%";

      let ajoutForm = document.createElement("p");
      ajoutForm.textContent = "Merci pour votre inscription";
      ajoutForm.style.textAlign = "center";
      ajoutForm.style.fontSize = "36px";
      //?FINOrganisation du block comme sur le FIGMA

    let boutonRetour = document.createElement("button");
    boutonRetour.textContent = "Retour";
    boutonRetour.classList.add("btn-submit", "button");

    boutonRetour.addEventListener("click", () => {
      document.querySelector(".bground").style.display = "none";
    });

    modalBody.appendChild(ajoutForm);
    modalBody.appendChild(boutonRetour);
    //!FIN Ajout message confirmation + bouton
  }
}
//!Fin traitement formulaire