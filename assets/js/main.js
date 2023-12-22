// - Erstelle ein Spiel, dessen Ziel es ist, die richtige Farbe aus fünf zufällig generierten Farben zu finden!
// - Der/Die User:in bekommt die zu erratende Farbe in rgb-Farbwerten gesagt.
// - Es gibt fünf Buttons mit zufällig generierten Hintergrundfarben.
// - Nur eine davon ist die richtige!

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] =randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

function changeColor() {
  let hex = randomHexColor();
  document.getElementById('color').value = hex;
  document.getElementById('text').innerHTML = hex;
}

function clickHandler(event) {
  changeColor();
  event.preventDefault();
}

// const setColor = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16)
//     document.body.style.backgroundColor = "#" + randomColor
//     color.innerHTML = "#" + randomColor
//   }
  
// changeColor.addEventListener("click", setColor)
//   setColor()

//   function zufallsfarbe() {
//     let Zufallsfarbe = "";
//     for (let zaehler = 1; zaehler < 7; zaehler++) {
//      let Farbe = "0123456789ABCDEF";
//      let RND = Math.round(Math.random() * 15);
//      Zufallsfarbe += Farbe.substr(RND, 1);
//     }
//     document.getElementById("wert").value = "#" + Zufallsfarbe;
//     document.getElementById("farbe").style.backgroundColor = "#" + Zufallsfarbe;

// function changeColor() {
//     let divCard = document.querySelectorAll(".card")
//     divCard.forEach(boxColor => {
//         boxColor.addEventListener("click", () => {
//             boxColor.style.background = "plum"
//         })
//     })
// }