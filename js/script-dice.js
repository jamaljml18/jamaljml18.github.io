// DICES FUNCTION
dice1.addEventListener("click", function(){
    if (dadu1_atau_dadu2 == 0) {
        dadu1_atau_dadu2 = 1;
        dice1.style.animation = "dice .2s infinite"
        dice2.style.animation = "dice .2s infinite"
        setTimeout(function() {
            dice1.innerHTML = randomDiceNumbers()
            dice1.style.animation = "none"
            dice2.innerHTML = randomDiceNumbers()
            dice2.style.animation = "none"
            // KONDISI DI PENJARA
            if (posX_p1 == 335 && posY_p1 == 565 && dice1.innerHTML != dice2.innerHTML
                && !bebasPenjara_P1) {
                plusd12.innerHTML = "0"
                bebasPenjara_P1 = false
            } else {
                plusd12.innerHTML = parseInt(dice1.innerHTML) + parseInt(dice2.innerHTML)
            } 
            // AKHIR KONDISI DI PENJARA
            diceIndex = parseInt(plusd12.innerHTML)
            moveP1PX()
            kesempatan()
            dice1.style.cursor = "default"
            dice2.style.cursor = "pointer"
        }, 200)
    }
})
dice2.addEventListener("click", function(){
    if (dadu1_atau_dadu2 == 1) {
        dadu1_atau_dadu2 = 0;
        dice1.style.animation = "dice .2s infinite"
        dice2.style.animation = "dice .2s infinite"
        setTimeout(function() {
            dice1.innerHTML = randomDiceNumbers()
            dice1.style.animation = "none"
            dice2.innerHTML = randomDiceNumbers()
            dice2.style.animation = "none"
            // KONDISI DI PENJARA
            if (posX_p2 == 335 && posY_p2 == 565 && dice1.innerHTML != dice2.innerHTML 
                && !bebasPenjara_P2) {
                plusd12.innerHTML = "0"
                bebasPenjara_P2 = false
            } else {
                plusd12.innerHTML = parseInt(dice1.innerHTML) + parseInt(dice2.innerHTML)
            }
            // AKHIR KONDISI DI PENJARA
            diceIndex = parseInt(plusd12.innerHTML)
            moveP2PX()
            kesempatan()
            dice1.style.cursor = "pointer"
            dice2.style.cursor = "default"
        }, 200)
    }
})