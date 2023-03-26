// FUNCTION AGAR PLAYER 2 BERJALAN
function moveP2PX() {
    if (posX_p2 <= 835 && posX_p2 >= 335 && posY_p2 == 565) { 
        posX_p2 = posX_p2 - diceIndex*100
        posX_p2_perubahan = posX_p2 + "px"
        player2.style.top = "565px"
        player2.style.left = posX_p2_perubahan        
        console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
        if (posX_p2 <= 335) {
            offset = 565 - Math.abs(335 - posX_p2)
            posY_p2 = offset
            posY_p2_perubahan = posY_p2 + "px"
            player2.style.top = posY_p2_perubahan
            player2.style.left = "335px"
            posX_p2 = 335
            console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
            if (posY_p2 <= 65) {
                offset = 335 + Math.abs(65 - posY_p2)
                posX_p2 = offset
                posX_p2_perubahan = posX_p2 + "px"
                player2.style.top = "65px"
                player2.style.left = posX_p2_perubahan
                posY_p2 = 65
                console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                if (posX_p2 >= 835) {
                    offset = 65 + Math.abs(835 - posX_p2)
                    posY_p2 = offset
                    posY_p2_perubahan = posY_p2 + "px"
                    player2.style.top = posY_p2_perubahan
                    player2.style.left = "835px"
                    posX_p2 = 835
                    console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                }
            }
        }
    }
    else if (posX_p2 == 335 && posY_p2 <= 565 && posY_p2 >= 65) {
        posY_p2 = posY_p2 - diceIndex*100
        posY_p2_perubahan = posY_p2 + "px"
        player2.style.top = posY_p2_perubahan
        player2.style.left = "335px"
        console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
        if (posY_p2 <= 65) {
            offset = 335 + Math.abs(65 - posY_p2)
            posX_p2 = offset
            posX_p2_perubahan = posX_p2 + "px"
            player2.style.top = "65px"
            player2.style.left = posX_p2_perubahan
            posY_p2 = 65
            console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
            if (posX_p2 >= 835) {
                offset = 65 + Math.abs(835 - posX_p2)
                posY_p2 = offset
                posY_p2_perubahan = posY_p2 + "px"
                player2.style.top = posY_p2_perubahan
                player2.style.left = "835px"
                posX_p2 = 835
                console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                if (posY_p2 >= 565) {
                    offset = 835 - Math.abs(565 - posY_p2)
                    posX_p2 = offset
                    posX_p2_perubahan = posX_p2 + "px"
                    player2.style.top = "565px"
                    player2.style.left = posX_p2_perubahan
                    posY_p2 = 565
                    // KONDISI MELEWATI START
                    moneyPlayer2 += 20
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                    // AKHIR KONDISI MELEWATI START
                    console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                }
            }
        }
    }
    else if (posX_p2 <= 835 && posX_p2 > 335 && posY_p2 == 65) {
        posX_p2 = posX_p2 + diceIndex*100
        posX_p2_perubahan = posX_p2 + "px"
        player2.style.top = "65px"
        player2.style.left = posX_p2_perubahan
        console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
        if (posX_p2 > 835) {
            offset = 65 + Math.abs(835 - posX_p2)
            posY_p2 = offset
            posY_p2_perubahan = posY_p2 + "px"
            player2.style.top = posY_p2_perubahan
            player2.style.left = "835px"
            posX_p2 = 835
            console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
            if (posY_p2 > 565) {
                offset = 835 - Math.abs(565 - posY_p2)
                posX_p2 = offset
                posX_p2_perubahan = posX_p2 + "px"
                player2.style.top = "565px"
                player2.style.left = posX_p2_perubahan
                posY_p2 = 565
                // KONDISI MELEWATI START
                moneyPlayer2 += 20
                moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                // AKHIR KONDISI MELEWATI START
                console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                if (posX_p2 < 335) {
                    offset = 565 - Math.abs(335 - posX_p2)
                    posY_p2 = offset
                    posY_p2_perubahan = posY_p2 + "px"
                    player2.style.top = posY_p2_perubahan
                    player2.style.left = "335px"
                    posX_p2 = 335
                    console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                }
            }
        }
    }
    else if (posX_p2 == 835 && posY_p2 <= 565 && posY_p2 >= 100) {
        posY_p2 = posY_p2 + diceIndex*100
        posY_p2_perubahan = posY_p2 + "px"
        player2.style.top = posY_p2_perubahan
        player2.style.left = "835px"
        console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
        if (posY_p2 > 565) {
            offset = 835 - Math.abs(565 - posY_p2)
            posX_p2 = offset
            posX_p2_perubahan = posX_p2 + "px"
            player2.style.top = "565px"
            player2.style.left = posX_p2_perubahan
            posY_p2 = 565
            // KONDISI MELEWATI START
            moneyPlayer2 += 20
            moneyPlayer2Tampilan.innerHTML = moneyPlayer2
            // AKHIR KONDISI MELEWATI START
            console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
            if (posX_p2 < 335) {
                offset = 565 - Math.abs(335 - posX_p2)
                posY_p2 = offset
                posY_p2_perubahan = posY_p2 + "px"
                player2.style.top = posY_p2_perubahan
                player2.style.left = "335px"
                posX_p2 = 335
                console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
                if (posY_p2 < 100) {
                    offset = 335 + Math.abs(65 - posY_p2)
                    posX_p2 = offset
                    posX_p2_perubahan = posX_p2 + "px"
                    player2.style.top = "100px"
                    player2.style.left = posX_p2_perubahan
                    posY_p2 = 65
                    console.log("posX_p2 " + posX_p2 + " posY_p2 " + posY_p2)
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
    if (posX_p2 == 335 && posY_p2 == 65 && !moveToIndex_P2) {
        inputNegara.style.display = "block"   
        inputNegaraButton_p2.style.display = "block"
        moveToIndex_P2 == true
        if (posX_p2 > 835 && posY_p2 < 565) {
            moveToIndex_P2 == false
            console.log(moveToIndex_P2)
        }
    }
}