
function updateUI() {
    const articles = document.querySelectorAll("article");
    let total = 0;

    let i = 0;
    while (i < articles.length) {
        const valueEl = articles[i].querySelector(".value");
        total += Number(valueEl.textContent);
        i++;
    }

    document.getElementById("total").textContent = total;
}

    // Event listener
document.addEventListener("click", (event) => {

    // Btn Ajouter click
    if (event.target.matches(".btn")) {

        const article = event.target.closest("article");
        const valueEl = article.querySelector(".value");

        valueEl.textContent = Number(valueEl.textContent) + 1;

        updateUI();
    }

    // Btn reset
    if (event.target.id === "reset") {
        const values = document.querySelectorAll(".value");

        let i = 0;
        while (i < values.length) {
            values[i].textContent = 0;
            i++;
        }

        updateUI();
    }
});
