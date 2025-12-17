const items = document.querySelectorAll(".item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
 
// Open Lightbox

items.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = "flex";
    lightboxImg.src = items[currentIndex].src;
}

// Close Lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Next Button
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    openLightbox();
});

// Category Filters
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-filter");

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        document.querySelectorAll(".item").forEach(item => {
            const itemCategory = item.getAttribute("data-category");

            if (category === "all" || itemCategory === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
