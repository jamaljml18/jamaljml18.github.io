function p12BeliIndia() {
    negaraIndia.removeEventListener("click", p12BeliIndia)
    if ((posY_p1 == 365 && posX_p1 == 335) && 
        (posY_p2 != 365 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraIndia.addEventListener("click", function closen() {
            indiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= indi_only && !apakah_indi_dibeli) {
                exitIndiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliIndiaTampilan_p1.style.display = "block";
                beliIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndiaTampilan_p1.style.display = "none";
                beliDesaIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndiaTampilan_p1.style.display = "none";
                beliKotaIndiaTampilan_p2.style.display = "none";
                beliIndiaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= indi_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_indi_dibeli = true;
                    indi_p1 = true
                    indi_p2 = false
                    negaraIndia.style.border = "5px solid darkblue"
                    indiaTampilan.style.display = "none"
                    beliIndiaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_indi_dibeli && indi_p1) {
                exitIndiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliIndiaTampilan_p1.style.display = "block";
                beliIndiaTampilan_p2.style.display = "none";
                // JUAL
                if (!indiDesa1_p1 && !indiDesa2_p1 && !indiDesa3_p1 
                    && !indiKota1_p1 && !indiKota2_p1) {
                    beliIndiaTampilan_p1.innerHTML = "Jual P1"
                    beliIndiaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += indi_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_indi_dibeli = false;
                        indi_p1 = false
                        indi_p2 = false
                        negaraIndia.style.border = "1px solid white"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p1.innerHTML = "Beli P1"
                        beliIndiaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (indiDesa1_p1 && !indiDesa2_p1 && !indiDesa3_p1
                    && !indiKota1_p1 && !indiKota2_p1) {
                    beliIndiaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliIndiaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += indi_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indiDesa1_p1 = false
                        indiDesa1_p2 = false
                        indiDesa2_p1 = false
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa1_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p1.innerHTML = "Jual P1"
                        beliIndiaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (indiDesa1_p1 && indiDesa2_p1 && !indiDesa3_p1
                    && !indiKota1_p1 && !indiKota2_p1) {
                    beliIndiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliIndiaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += indi_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indiDesa1_p1 = true
                        indiDesa1_p2 = false
                        indiDesa2_p1 = false
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa2_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliIndiaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (indiDesa1_p1 && indiDesa2_p1 && indiDesa3_p1
                    && !indiKota1_p1 && !indiKota2_p1) {
                    beliIndiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliIndiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += indi_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indiDesa1_p1 = true
                        indiDesa1_p2 = false
                        indiDesa2_p1 = true
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa3_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliIndiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (indiDesa1_p1 && indiDesa2_p1 && indiDesa3_p1
                    && indiKota1_p1 && !indiKota2_p1) {
                    beliIndiaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliIndiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += indi_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indiKota1_p1 = false
                        indiKota1_p2 = false
                        indiKota2_p1 = false
                        indiKota2_p2 = false
                        kota1_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliIndiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (indiDesa1_p1 && indiDesa2_p1 && indiDesa3_p1
                    && indiKota1_p1 && indiKota2_p1) {
                    beliIndiaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliIndiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += indi_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indiKota1_p1 = true
                        indiKota1_p2 = false
                        indiKota2_p1 = false
                        indiKota2_p2 = false
                        kota2_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliIndiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= indi_desa && !indiDesa1_p1 && !indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaIndiaTampilan_p1.style.display = "block";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                    beliDesaIndiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indi_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indiDesa1_p1 = true
                        indiDesa1_p2 = false
                        indiDesa2_p1 = false
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa1_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliDesaIndiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < indi_desa && !indiDesa1_p1 && !indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= indi_desa && indiDesa1_p1 && !indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaIndiaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaIndiaTampilan_p1.style.display = "block";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                    beliDesaIndiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indi_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indiDesa1_p1 = true
                        indiDesa1_p2 = false
                        indiDesa2_p1 = true
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa2_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliDesaIndiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < indi_desa && indiDesa1_p1 && !indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= indi_desa && indiDesa1_p1 && indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaIndiaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaIndiaTampilan_p1.style.display = "block";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                    beliDesaIndiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indi_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indiDesa1_p1 = true
                        indiDesa1_p2 = false
                        indiDesa2_p1 = true
                        indiDesa2_p2 = false
                        indiDesa3_p1 = true
                        indiDesa3_p2 = false
                        desa3_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliDesaIndiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < indi_desa && indiDesa1_p1 && indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= indi_kota && indiDesa1_p1 && indiDesa2_p1
                    && indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaIndiaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaIndiaTampilan_p1.style.display = "block";
                    beliKotaIndiaTampilan_p2.style.display = "none";
                    beliKotaIndiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indi_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indiKota1_p1 = true
                        indiKota1_p2 = false
                        indiKota2_p1 = false
                        indiKota2_p2 = false
                        kota1_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliKotaIndiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < indi_desa && indiDesa1_p1 && indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndiaTampilan_p1.style.display = "none";
                    beliKotaIndiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= indi_kota && indiDesa1_p1 && indiDesa2_p1
                    && indiDesa3_p1 && indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaIndiaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaIndiaTampilan_p1.style.display = "block";
                    beliKotaIndiaTampilan_p2.style.display = "none";
                    beliKotaIndiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indi_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indiKota1_p1 = true
                        indiKota1_p2 = false
                        indiKota2_p1 = true
                        indiKota2_p2 = false
                        kota2_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliKotaIndiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < indi_desa && indiDesa1_p1 && indiDesa2_p1
                    && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndiaTampilan_p1.style.display = "none";
                    beliKotaIndiaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_indi_dibeli && !indi_p1) {
                exitIndiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndiaTampilan_p1.style.display = "none";
                beliIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndiaTampilan_p1.style.display = "none";
                beliDesaIndiaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaIndiaTampilan_p1.style.display = "none";
                beliKotaIndiaTampilan_p2.style.display = "none";
                exitIndiaTampilan.addEventListener("click", function close() {
                    indiaTampilan.style.display = "none"
                    exitIndiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < indi_only && !apakah_indi_dibeli) {
                exitIndiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndiaTampilan_p1.style.display = "none";
                beliIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndiaTampilan_p1.style.display = "none";
                beliDesaIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndiaTampilan_p1.style.display = "none";
                beliKotaIndiaTampilan_p2.style.display = "none";
                exitIndiaTampilan.addEventListener("click", function close() {
                    indiaTampilan.style.display = "none"
                    exitIndiaTampilan.removeEventListener("click", close)
                })
            }
            negaraIndia.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 365 && posX_p2 == 335) && 
        (posY_p1 != 365 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraIndia.addEventListener("click", function closen() {
            indiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= indi_only && !apakah_indi_dibeli && !indi_p2) {
                exitIndiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliIndiaTampilan_p1.style.display = "none";
                beliIndiaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaIndiaTampilan_p1.style.display = "none";
                beliDesaIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndiaTampilan_p1.style.display = "none";
                beliKotaIndiaTampilan_p2.style.display = "none";
                beliIndiaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= indi_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_indi_dibeli = true;
                    indi_p1 = false
                    indi_p2 = true
                    negaraIndia.style.border = "5px solid darkred"
                    indiaTampilan.style.display = "none"
                    beliIndiaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_indi_dibeli && indi_p2) {
                exitIndiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliIndiaTampilan_p1.style.display = "none";
                beliIndiaTampilan_p2.style.display = "block";
                // JUAL
                if (!indiDesa1_p2 && !indiDesa2_p2 && !indiDesa3_p2 
                    && !indiKota1_p2 && !indiKota2_p2) {
                    beliIndiaTampilan_p2.innerHTML = "Jual P2"
                    beliIndiaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += indi_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_indi_dibeli = false;
                        indi_p1 = false
                        indi_p2 = false
                        negaraIndia.style.border = "1px solid white"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p2.innerHTML = "Beli P2"
                        beliIndiaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (indiDesa1_p2 && !indiDesa2_p2 && !indiDesa3_p2
                    && !indiKota1_p2 && !indiKota2_p2) {
                    beliIndiaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliIndiaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += indi_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indiDesa1_p1 = false
                        indiDesa1_p2 = false
                        indiDesa2_p1 = false
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa1_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p2.innerHTML = "Jual P2"
                        beliIndiaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (indiDesa1_p2 && indiDesa2_p2 && !indiDesa3_p2
                    && !indiKota1_p2 && !indiKota2_p2) {
                    beliIndiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliIndiaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += indi_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indiDesa1_p1 = false
                        indiDesa1_p2 = true
                        indiDesa2_p1 = false
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa2_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliIndiaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (indiDesa1_p2 && indiDesa2_p2 && indiDesa3_p2
                    && !indiKota1_p2 && !indiKota2_p2) {
                    beliIndiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliIndiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += indi_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indiDesa1_p1 = false
                        indiDesa1_p2 = true
                        indiDesa2_p1 = false
                        indiDesa2_p2 = true
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa3_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliIndiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (indiDesa1_p2 && indiDesa2_p2 && indiDesa3_p2
                    && indiKota1_p2 && !indiKota2_p2) {
                    beliIndiaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliIndiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += indi_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indiKota1_p1 = false
                        indiKota1_p2 = false
                        indiKota2_p1 = false
                        indiKota2_p2 = false
                        kota1_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliIndiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (indiDesa1_p2 && indiDesa2_p2 && indiDesa3_p2
                    && indiKota1_p2 && indiKota2_p2) {
                    beliIndiaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliIndiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += indi_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indiKota1_p1 = false
                        indiKota1_p2 = true
                        indiKota2_p1 = false
                        indiKota2_p2 = false
                        kota2_india.style.display = "none"
                        indiaTampilan.style.display = "none"
                        beliIndiaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliIndiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= indi_desa && !indiDesa1_p2 && !indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "block";
                    beliDesaIndiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indi_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indiDesa1_p1 = false
                        indiDesa1_p2 = true
                        indiDesa2_p1 = false
                        indiDesa2_p2 = false
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa1_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliDesaIndiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < indi_desa && !indiDesa1_p2 && !indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= indi_desa && indiDesa1_p2 && !indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaIndiaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "block";
                    beliDesaIndiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indi_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indiDesa1_p1 = false
                        indiDesa1_p2 = true
                        indiDesa2_p1 = false
                        indiDesa2_p2 = true
                        indiDesa3_p1 = false
                        indiDesa3_p2 = false
                        desa2_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliDesaIndiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < indi_desa && indiDesa1_p2 && !indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= indi_desa && indiDesa1_p2 && indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaIndiaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "block";
                    beliDesaIndiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indi_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indiDesa1_p1 = false
                        indiDesa1_p2 = true
                        indiDesa2_p1 = false
                        indiDesa2_p2 = true
                        indiDesa3_p1 = false
                        indiDesa3_p2 = true
                        desa3_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliDesaIndiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < indi_desa && indiDesa1_p2 && indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaIndiaTampilan_p1.style.display = "none";
                    beliDesaIndiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= indi_kota && indiDesa1_p2 && indiDesa2_p2
                    && indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaIndiaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaIndiaTampilan_p1.style.display = "none";
                    beliKotaIndiaTampilan_p2.style.display = "block";
                    beliKotaIndiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indi_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indiKota1_p1 = false
                        indiKota1_p2 = true
                        indiKota2_p1 = false
                        indiKota2_p2 = false
                        kota1_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliKotaIndiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < indi_desa && indiDesa1_p2 && indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndiaTampilan_p1.style.display = "none";
                    beliKotaIndiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= indi_kota && indiDesa1_p2 && indiDesa2_p2
                    && indiDesa3_p2 && indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaIndiaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaIndiaTampilan_p1.style.display = "none";
                    beliKotaIndiaTampilan_p2.style.display = "block";
                    beliKotaIndiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indi_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indiKota1_p1 = false
                        indiKota1_p2 = true
                        indiKota2_p1 = false
                        indiKota2_p2 = true
                        kota2_india.style.display = "block"
                        indiaTampilan.style.display = "none"
                        beliKotaIndiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < indi_desa && indiDesa1_p2 && indiDesa2_p2
                    && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndiaTampilan_p1.style.display = "none";
                    beliKotaIndiaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_indi_dibeli && !indi_p2) {
                exitIndiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndiaTampilan_p1.style.display = "none";
                beliIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndiaTampilan_p1.style.display = "none";
                beliDesaIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndiaTampilan_p1.style.display = "none";
                beliKotaIndiaTampilan_p2.style.display = "none";
                exitIndiaTampilan.addEventListener("click", function close() {
                    indiaTampilan.style.display = "none"
                    exitIndiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < indi_only && !apakah_indi_dibeli) {
                exitIndiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndiaTampilan_p1.style.display = "none";
                beliIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndiaTampilan_p1.style.display = "none";
                beliDesaIndiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndiaTampilan_p1.style.display = "none";
                beliKotaIndiaTampilan_p2.style.display = "none";
                exitIndiaTampilan.addEventListener("click", function close() {
                    indiaTampilan.style.display = "none"
                    exitIndiaTampilan.removeEventListener("click", close)
                })
            }
            negaraIndia.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 335 && posX_p2 == 335 && posY_p2 == 365 && posY_p2 == 365) ||
        (posX_p1 != 335 && posX_p2 != 335 || posY_p2 != 365 && posY_p2 != 365)) {
        negaraIndia.addEventListener("click", function closen() {
            indiaTampilan.style.display = "block"
            exitIndiaTampilan.style.display = "block"
            // TOMBOL BELI
            beliIndiaTampilan_p1.style.display = "none";
            beliIndiaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaIndiaTampilan_p1.style.display = "none";
            beliDesaIndiaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaIndiaTampilan_p1.style.display = "none";
            beliKotaIndiaTampilan_p2.style.display = "none";
            exitIndiaTampilan.addEventListener("click", function close() {
                indiaTampilan.style.display = "none"
                exitIndiaTampilan.removeEventListener("click", close)
            })
            negaraIndia.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_indi_dibeli && !indi_p1 && posX_p1 == 335 && posY_p1 == 365 && !indi_p1_kenaPajak
        && !indiDesa1_p2 && !indiDesa2_p2 && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
        moneyPlayer1 -= indi_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        indi_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_indi_dibeli && !indi_p1 && posX_p1 == 335 && posY_p1 == 365 && !indi_p1_kenaPajak
        && indiDesa1_p2 && !indiDesa2_p2 && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
        moneyPlayer1 -= indi_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indi_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_indi_dibeli && !indi_p1 && posX_p1 == 335 && posY_p1 == 365 && !indi_p1_kenaPajak
        && indiDesa1_p2 && indiDesa2_p2 && !indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
        moneyPlayer1 -= indi_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indi_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_indi_dibeli && !indi_p1 && posX_p1 == 335 && posY_p1 == 365 && !indi_p1_kenaPajak
        && indiDesa1_p2 && indiDesa2_p2 && indiDesa3_p2 && !indiKota1_p2 && !indiKota2_p2) {
        moneyPlayer1 -= indi_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indi_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_indi_dibeli && !indi_p1 && posX_p1 == 335 && posY_p1 == 365 && !indi_p1_kenaPajak
        && indiDesa1_p2 && indiDesa2_p2 && indiDesa3_p2 && indiKota1_p2 && !indiKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - indi_pajak_desa*3 - indi_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indi_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_indi_dibeli && !indi_p1 && posX_p1 == 335 && posY_p1 == 365 && !indi_p1_kenaPajak
        && indiDesa1_p2 && indiDesa2_p2 && indiDesa3_p2 && indiKota1_p2 && indiKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - indi_pajak_desa*3 - indi_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indi_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_indi_dibeli && !indi_p2 && posX_p2 == 335 && posY_p2 == 365 && !indi_p2_kenaPajak
        && !indiDesa1_p1 && !indiDesa2_p1 && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
        moneyPlayer2 -= indi_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indi_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_indi_dibeli && !indi_p2 && posX_p2 == 335 && posY_p2 == 365 && !indi_p2_kenaPajak
        && indiDesa1_p1 && !indiDesa2_p1 && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
        moneyPlayer2 -= indi_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indi_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_indi_dibeli && !indi_p2 && posX_p2 == 335 && posY_p2 == 365 && !indi_p2_kenaPajak
        && indiDesa1_p1 && indiDesa2_p1 && !indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
        moneyPlayer2 -= indi_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indi_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_indi_dibeli && !indi_p2 && posX_p2 == 335 && posY_p2 == 365 && !indi_p2_kenaPajak
        && indiDesa1_p1 && indiDesa2_p1 && indiDesa3_p1 && !indiKota1_p1 && !indiKota2_p1) {
        moneyPlayer2 -= indi_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indi_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_indi_dibeli && !indi_p2 && posX_p2 == 335 && posY_p2 == 365 && !indi_p2_kenaPajak
        && indiDesa1_p1 && indiDesa2_p1 && indiDesa3_p1 && indiKota1_p1 && !indiKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - indi_pajak_desa*3 - indi_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indi_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_indi_dibeli && !indi_p2 && posX_p2 == 335 && posY_p2 == 365 && !indi_p2_kenaPajak
        && indiDesa1_p1 && indiDesa2_p1 && indiDesa3_p1 && indiKota1_p1 && indiKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - indi_pajak_desa*3 - indi_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indi_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 > 335 && posY_p1 == 65 || posX_p2 > 335 && posY_p2 == 65) {
        indi_p1_kenaPajak = false
        indi_p2_kenaPajak = false
    } 
}