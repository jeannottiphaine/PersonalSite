document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".card-project");
    const tags = document.querySelectorAll(".tag");
    const resetButton = document.getElementById("resetFilter");

    function filterProjects() {
        let searchValue = searchInput.value.toLowerCase();
        let activeTag = document.querySelector(".tag.active");
        let categoryFilter = activeTag ? activeTag.getAttribute("data-category") : null;

        cards.forEach(card => {
            let title = card.querySelector("h3").textContent.toLowerCase();
            let cardTags = Array.from(card.querySelectorAll(".card-tag")).map(tag => tag.getAttribute("data-category"));

            let matchSearch = title.includes(searchValue);
            let matchCategory = categoryFilter ? cardTags.includes(categoryFilter) : true;

            card.style.display = matchSearch && matchCategory ? "block" : "none";
        });
    }

    // Search bar functionality
    searchInput.addEventListener("input", filterProjects);

    // Tag filter functionality
    tags.forEach(tag => {
        tag.addEventListener("click", function () {
            tags.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            filterProjects();
        });
    });

    // Reset button functionality
    resetButton.addEventListener("click", function () {
        searchInput.value = "";
        tags.forEach(tag => tag.classList.remove("active"));
        filterProjects();
    });

    // Sorting functionality
    function sortProjects() {
        const container = document.querySelector(".cards-container-projects");
        const cardsArray = Array.from(container.getElementsByClassName("card-project"));

        cardsArray.sort((a, b) => {
            const titleA = a.querySelector("h3").textContent.toLowerCase();
            const titleB = b.querySelector("h3").textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });

        cardsArray.forEach(card => container.appendChild(card));
    }

    document.querySelector(".controls button")?.addEventListener("click", sortProjects);
});