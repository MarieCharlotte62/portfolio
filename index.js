// navigation vers ma page à-propos
let navBar = document.querySelector(".navigation");
let navPos = navBar.getBoundingClientRect();
let pageUne = document.querySelector(".page-accueil")
let pageDeux = document.querySelector("#page_a_propos");
let lienpageUne = document.querySelector(".lien-accueil")
let lienpageUneA = document.querySelector(".lien-accueil a")
let lienpageDeuxA = document.querySelector(".lien-a-propos a")
let hashpageUn = lienpageUneA.getAttribute("href")
let hashpageDeux = lienpageDeuxA.getAttribute("href")

window.onscroll = () => {
    if (pageDeux.getBoundingClientRect().top <= navPos.bottom & pageDeux.getBoundingClientRect().bottom >= navPos.bottom) {
        lienpageUne.classList.remove("lien-accueil");
        lienpageUneA.classList.add("lien-accueil-hover");
        lienpageDeuxA.classList.add("lien-a-propos-no-hover");
        lienpageDeuxA.classList.add("lien-a-propos-a-active");
        let hashpage = window.location.hash;
        if (hashpage = hashpageDeux) {
            window.history.pushState(null, null, hashpageDeux);
        }
    } 
    else if (pageUne.getBoundingClientRect().bottom >= navPos.bottom) {
        lienpageUne.classList.add("lien-accueil");
        lienpageUneA.classList.remove("lien-accueil-hover");
        lienpageDeuxA.classList.remove("lien-a-propos-no-hover");
        lienpageDeuxA.classList.remove("lien-a-propos-a-active");
        let hashpage = window.location.hash;
        if (hashpage = hashpageUn) {
            window.history.pushState(null, null, hashpageUn);
        }
    }
};