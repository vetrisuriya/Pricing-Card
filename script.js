const planBtns = document.querySelectorAll(".card-btn-parent button");
const plans = document.querySelectorAll(".card-body > div");

planBtns.forEach(planBtn => {
    planBtn.addEventListener("click", function() {
        removeClass();
        this.classList.add("active");
        let btnVal = this.getAttribute("id");
        let btnId = "#card-"+btnVal;
        document.querySelector(btnId).classList.add("active");
    })
})

function removeClass() {
    planBtns.forEach(planBtn => {
        if(planBtn.classList.contains("active")) {
            planBtn.classList.remove("active");
        }
    });
    plans.forEach(plan => {
        if(plan.classList.contains("active")) {
            plan.classList.remove("active");
        }
    });
}