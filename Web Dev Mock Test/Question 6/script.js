const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

openModalBtn.addEventListener("click", function () {
    modalOverlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling
});

closeModalBtn.addEventListener("click", function () {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
});

modalOverlay.addEventListener("click", function (event) {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    }
});
