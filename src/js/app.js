const btnAll = document.querySelector(".button-group");
const btn = document.querySelectorAll(".btnn");
if (btnAll) {
    btnAll.addEventListener("click", function(e) {
        btn.forEach(btn => {
            btn.classList.remove("active-btn");
        });
        e.target.classList.add("active-btn")
    })
}


