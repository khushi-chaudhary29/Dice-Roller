const press = () => {
    var randomX = Math.floor(Math.random()*6) + 1
    var image = document.querrySelector("#imageId")
    var headingEle = document.getElementById("declaration")
    switch (randomX) {
        case 1: image.setAttribute("src", "diceImages/1.png")
            headingEle.innerHTML = "A small number! try again"
            break
        case 2: image.setAttribute("src", "diceImages/2.png")
            headingEle.innerHTML = "Please one more time"
            break
        case 3: image.setAttribute("src", "diceImages/3.png")
            headingEle.innerHTML = "That's very average"
            break
        case 4: image.setAttribute("src", "diceImages/4.png")
            headingEle.innerHTML = "This is something good"
            break
        case 5: image.setAttribute("src", "diceImages/dice5.png")
            headingEle.innerHTML = "Too close!!"
            break
        case 6: image.setAttribute("src", "diceImages/dice6.png")
            headingEle.innerHTML = "Wow yrr moj krdi!!!"
            break
        default: headingEle.innerHTML = "Something wrong happened"
    }
}