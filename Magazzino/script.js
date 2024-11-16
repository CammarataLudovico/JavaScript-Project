const nome_prodotto = document.getElementById('name');
const quantita = document.getElementById('quantity');
const add_btn = document.getElementById('add_button');
const Quantita_totale_ref = document.getElementById('Quantita_totale');

let quantita_totale = 0;
add_btn.addEventListener('click', () => {
    quantita_totale = quantita_totale + quantita.value;
    console.log(quantita_totale);
    Quantita_totale_ref.textContent = quantita_totale;
});