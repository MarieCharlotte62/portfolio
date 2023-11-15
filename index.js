// // CHANGEMENT D'ICONE LORS DE L'OUVERTURE DE MA BARRE DE NAV

let checkBox = document.querySelector("label i")
let isChecked = false;

checkBox.addEventListener("click", function() {
    if (isChecked) {
    checkBox.className = "fa-solid fa-bars"
    isChecked = false;} 
    else {
    checkBox.className = "fa-solid fa-xmark"
    isChecked = true;}

})

// // TRANSITION COULEUR BARRE DE NAV

let pageAccueil = document.querySelector(".lien-accueil")
let pageAPropos = document.querySelector(".lien-a-propos")
let pageActuelle = document.querySelectorAll("a")

if (pageActuelle[0].baseURI == "http://127.0.0.1:5501/a_propos.html") {
pageAPropos.classList.add("page-lien-a-propos")
pageAPropos.classList.remove("lien-a-propos")
pageAccueil.classList.remove("lien-accueil")
pageAccueil.classList.add("page-lien-accueil")
}
