// - Erstelle ein Spiel, dessen Ziel es ist, die richtige Farbe aus fünf zufällig generierten Farben zu finden!
// - Der/Die User:in bekommt die zu erratende Farbe in rgb-Farbwerten gesagt.
// - Es gibt fünf Buttons mit zufällig generierten Hintergrundfarben.
// - Nur eine davon ist die richtige!

function changeColor() {
    let divCard = document.querySelectorAll(".card")
    divCard.forEach(boxColor => {
        boxColor.addEventListener("click", () => {
            boxColor.style.background = "plum"
        })
    })
}