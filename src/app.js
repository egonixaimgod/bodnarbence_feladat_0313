const betet_elem = document.querySelector("#betet");
const nevleges_kamat_elem = document.querySelector("#nevleges_kamat");
const evenkenti_tokesitesek_szama_elem = document.querySelector("#evenkenti_tokesitesek_szama");
const szamol_button = document.querySelector("#szamol");
const tenyleges_eves_kamat_elem = document.querySelector("#tenyleges_eves_kamat");

szamol_button.addEventListener('click', () => {
    let eredmeny = Number(betet_elem.value) + Number(nevleges_kamat_elem.value);
    tenyleges_eves_kamat_elem.value = eredmeny;


});