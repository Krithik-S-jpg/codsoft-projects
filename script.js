document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".category");
    const items = document.querySelectorAll(".menu-item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const category = this.getAttribute("data-category");

            items.forEach(item => {
                item.style.opacity = "0";
                setTimeout(() => {
                    item.style.display = item.getAttribute("data-category") === category ? "block" : "none";
                    setTimeout(() => {
                        item.style.opacity = "1";
                    }, 300);
                }, 300);
            });
        });
    });

    document.querySelector("[data-category='starters']").click();
});
