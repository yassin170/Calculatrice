let color = ["red", "blue", "yellow", "green", "purple", "pink", "orange", "brown"];
let allBtn = document.querySelectorAll("button");
let input = document.querySelector("#result");
let ecran = "";
let falsie = false;

allBtn.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.background = color[Math.floor(Math.random()*color.length)]; // parcours le tableau de couleurs pour donner une couleur au bouton ou la souris passe
        element.style.transition = "0s";
    });
    element.addEventListener("mouseout", () => {
        element.style.background = "";
        element.style.transition = "2s";
    });
});

allBtn.forEach(element => {
    element.addEventListener("click", () => {
        input.innerText = element.innerText;
        switch (element.innerText) {
            case "C":
                ecran = "";
            break;
            case "=":
                try {
                    input.value = eval(ecran);
                } catch (error) {
                    input.value = "Error";
                };
                ecran = input.value;
            break;
            default:
                ecran += element.innerText;
        };
        input.value = ecran;
    });
}); 