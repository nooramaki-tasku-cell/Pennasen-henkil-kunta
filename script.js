const haeNappi = document.getElementById("haeNappi");
const tulosTeksti = document.getElementById("tulosTeksti");
const koiranKuva = document.getElementById("koiranKuva");
const rotuValinta = document.getElementById("rotuValinta");   // uusi

haeNappi.addEventListener("click", function () {
    const valittuRotu = rotuValinta.value;                    // uusi
    tulosTeksti.innerText = "Haetaan kuvaa...";

    fetch("https://dog.ceo/api/breed/" + valittuRotu + "/images/random")   // muutettu
        .then(function (vastaus) {
            return vastaus.json();
        })
        .then(function (data) {
            console.log("Rajapinnan vastaus:", data);
            koiranKuva.src = data.message;
            tulosTeksti.innerText = "Kuvia kahvilan henkilökunnasta";
        })
        .catch(function (virhe) {
            console.error("Virhe haussa:", virhe);
            tulosTeksti.innerText = "Kuvan hakeminen epäonnistui. Yritä uudelleen.";
        });
});