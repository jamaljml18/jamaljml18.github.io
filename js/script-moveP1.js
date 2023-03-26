// FUNCTION AGAR PLAYER 1 BERJALAN
function moveP1PX() {
    if (posX_p1 <= 835 && posX_p1 >= 335 && posY_p1 == 565) { 
        posX_p1 = posX_p1 - diceIndex*100
        posX_p1_perubahan = posX_p1 + "px"
        player1.style.top = "565px"
        player1.style.left = posX_p1_perubahan        
        console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
        if (posX_p1 <= 335) {
            offset = 565 - Math.abs(335 - posX_p1)
            posY_p1 = offset
            posY_p1_perubahan = posY_p1 + "px"
            player1.style.top = posY_p1_perubahan
            player1.style.left = "335px"
            posX_p1 = 335
            console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
            if (posY_p1 <= 65) {
                offset = 335 + Math.abs(65 - posY_p1)
                posX_p1 = offset
                posX_p1_perubahan = posX_p1 + "px"
                player1.style.top = "65px"
                player1.style.left = posX_p1_perubahan
                posY_p1 = 65
                console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                if (posX_p1 >= 835) {
                    offset = 65 + Math.abs(835 - posX_p1)
                    posY_p1 = offset
                    posY_p1_perubahan = posY_p1 + "px"
                    player1.style.top = posY_p1_perubahan
                    player1.style.left = "835px"
                    posX_p1 = 835
                    console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                }
            }
        }
    }
    else if (posX_p1 == 335 && posY_p1 <= 565 && posY_p1 >= 65) {
        posY_p1 = posY_p1 - diceIndex*100
        posY_p1_perubahan = posY_p1 + "px"
        player1.style.top = posY_p1_perubahan
        player1.style.left = "335px"
        console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
        if (posY_p1 <= 65) {
            offset = 335 + Math.abs(65 - posY_p1)
            posX_p1 = offset
            posX_p1_perubahan = posX_p1 + "px"
            player1.style.top = "65px"
            player1.style.left = posX_p1_perubahan
            posY_p1 = 65
            console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
            if (posX_p1 >= 835) {
                offset = 65 + Math.abs(835 - posX_p1)
                posY_p1 = offset
                posY_p1_perubahan = posY_p1 + "px"
                player1.style.top = posY_p1_perubahan
                player1.style.left = "835px"
                posX_p1 = 835
                console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                if (posY_p1 >= 565) {
                    offset = 835 - Math.abs(565 - posY_p1)
                    posX_p1 = offset
                    posX_p1_perubahan = posX_p1 + "px"
                    player1.style.top = "565px"
                    player1.style.left = posX_p1_perubahan
                    posY_p1 = 565
                    // KONDISI MELEWATI START
                    moneyPlayer1 += 20
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                    // AKHIR KONDISI MELEWATI START
                    console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                }
            }
        }
    }
    else if (posX_p1 <= 835 && posX_p1 > 335 && posY_p1 == 65) {
        posX_p1 = posX_p1 + diceIndex*100
        posX_p1_perubahan = posX_p1 + "px"
        player1.style.top = "65px"
        player1.style.left = posX_p1_perubahan
        console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
        if (posX_p1 > 835) {
            offset = 65 + Math.abs(835 - posX_p1)
            posY_p1 = offset
            posY_p1_perubahan = posY_p1 + "px"
            player1.style.top = posY_p1_perubahan
            player1.style.left = "835px"
            posX_p1 = 835
            console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
            if (posY_p1 > 565) {
                offset = 835 - Math.abs(565 - posY_p1)
                posX_p1 = offset
                posX_p1_perubahan = posX_p1 + "px"
                player1.style.top = "565px"
                player1.style.left = posX_p1_perubahan
                posY_p1 = 565
                // KONDISI MELEWATI START
                moneyPlayer1 += 20
                moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                // AKHIR KONDISI MELEWATI START
                console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                if (posX_p1 < 335) {
                    offset = 565 - Math.abs(335 - posX_p1)
                    posY_p1 = offset
                    posY_p1_perubahan = posY_p1 + "px"
                    player1.style.top = posY_p1_perubahan
                    player1.style.left = "335px"
                    posX_p1 = 335
                    console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                }
            }
        }
    }
    else if (posX_p1 == 835 && posY_p1 <= 565 && posY_p1 >= 100) {
        posY_p1 = posY_p1 + diceIndex*100
        posY_p1_perubahan = posY_p1 + "px"
        player1.style.top = posY_p1_perubahan
        player1.style.left = "835px"
        console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
        if (posY_p1 > 565) {
            offset = 835 - Math.abs(565 - posY_p1)
            posX_p1 = offset
            posX_p1_perubahan = posX_p1 + "px"
            player1.style.top = "565px"
            player1.style.left = posX_p1_perubahan
            posY_p1 = 565
            // KONDISI MELEWATI START
            moneyPlayer1 += 20
            moneyPlayer1Tampilan.innerHTML = moneyPlayer1
            // AKHIR KONDISI MELEWATI START
            console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
            if (posX_p1 < 335) {
                offset = 565 - Math.abs(335 - posX_p1)
                posY_p1 = offset
                posY_p1_perubahan = posY_p1 + "px"
                player1.style.top = posY_p1_perubahan
                player1.style.left = "335px"
                posX_p1 = 335
                console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                if (posY_p1 < 100) {
                    offset = 335 + Math.abs(65 - posY_p1)
                    posX_p1 = offset
                    posX_p1_perubahan = posX_p1 + "px"
                    player1.style.top = "100px"
                    player1.style.left = posX_p1_perubahan
                    posY_p1 = 65
                    console.log("posX_p1 " + posX_p1 + " posY_p1 " + posY_p1)
                }
            }
        }
    }
    p12BeliIndonesia()
    p12BeliMalaysia()
    p12BeliThailand()
    p12BeliSingapura()
    p12BeliAfrika()
    p12BeliMesir()
    p12BeliIndia()
    p12BeliJerman()
    p12BeliRusia()
    p12BeliItalia()
    p12BeliInggris()
    p12BeliChile()
    p12BeliBrazil()
    p12BeliCanada()
    p12BeliAmerika()    
    if (posX_p1 == 335 && posY_p1 == 65 && !moveToIndex_P1) {
        inputNegara.style.display = "block"   
        inputNegaraButton_p1.style.display = "block"
        moveToIndex_P1 == true
        if (posX_p1 > 835 && posY_p1 < 565) {
            moveToIndex_P1 == false
            console.log(moveToIndex_P1)
        }
    }
}