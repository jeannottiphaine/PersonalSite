document.getElementById("searchInput").addEventListener("input", function() {
    let filter = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card-project");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        card.style.display = title.includes(filter) ? "block" : "none";
    });
});

document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", function() {
        let category = this.dataset.category;
        let cards = document.querySelectorAll(".card-project");

        cards.forEach(card => {
            let cardTag = card.querySelector(".card-tag");
            if (cardTag && cardTag.dataset.category === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});