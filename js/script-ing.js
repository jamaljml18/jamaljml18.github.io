function p12BeliInggris() {
    negaraInggris.removeEventListener("click", p12BeliInggris)
    if ((posX_p1 == 735 && posY_p1 == 65) && 
        (posX_p2 != 735 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraInggris.addEventListener("click", function closen() {
            inggrisTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= inggris_only && !apakah_inggris_dibeli) {
                exitInggrisTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliInggrisTampilan_p1.style.display = "block";
                beliInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaInggrisTampilan_p1.style.display = "none";
                beliDesaInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaInggrisTampilan_p1.style.display = "none";
                beliKotaInggrisTampilan_p2.style.display = "none";
                beliInggrisTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= inggris_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_inggris_dibeli = true;
                    inggris_p1 = true
                    inggris_p2 = false
                    negaraInggris.style.border = "5px solid darkblue"
                    inggrisTampilan.style.display = "none"
                    beliInggrisTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_inggris_dibeli && inggris_p1) {
                exitInggrisTampilan.style.display = "none"
                // TOMBOL JUAL
                beliInggrisTampilan_p1.style.display = "block";
                beliInggrisTampilan_p2.style.display = "none";
                // JUAL
                if (!inggrisDesa1_p1 && !inggrisDesa2_p1 && !inggrisDesa3_p1 
                    && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    beliInggrisTampilan_p1.innerHTML = "Jual P1"
                    beliInggrisTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += inggris_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_inggris_dibeli = false;
                        inggris_p1 = false
                        inggris_p2 = false
                        negaraInggris.style.border = "1px solid white"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p1.innerHTML = "Beli P1"
                        beliInggrisTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (inggrisDesa1_p1 && !inggrisDesa2_p1 && !inggrisDesa3_p1
                    && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    beliInggrisTampilan_p1.innerHTML = "Jual Desa P1"
                    beliInggrisTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += inggris_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa1_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p1.innerHTML = "Jual P1"
                        beliInggrisTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (inggrisDesa1_p1 && inggrisDesa2_p1 && !inggrisDesa3_p1
                    && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    beliInggrisTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliInggrisTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += inggris_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        inggrisDesa1_p1 = true
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa2_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p1.innerHTML = "Jual Desa P1"
                        beliInggrisTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (inggrisDesa1_p1 && inggrisDesa2_p1 && inggrisDesa3_p1
                    && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    beliInggrisTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliInggrisTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += inggris_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        inggrisDesa1_p1 = true
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = true
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa3_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliInggrisTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (inggrisDesa1_p1 && inggrisDesa2_p1 && inggrisDesa3_p1
                    && inggrisKota1_p1 && !inggrisKota2_p1) {
                    beliInggrisTampilan_p1.innerHTML = "Jual Kota P1"
                    beliInggrisTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += inggris_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        inggrisKota1_p1 = false
                        inggrisKota1_p2 = false
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = false
                        kota1_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliInggrisTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (inggrisDesa1_p1 && inggrisDesa2_p1 && inggrisDesa3_p1
                    && inggrisKota1_p1 && inggrisKota2_p1) {
                    beliInggrisTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliInggrisTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += inggris_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        inggrisKota1_p1 = true
                        inggrisKota1_p2 = false
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = false
                        kota2_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliInggrisTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= inggris_desa && !inggrisDesa1_p1 && !inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaInggrisTampilan_p1.style.display = "block";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                    beliDesaInggrisTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= inggris_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        inggrisDesa1_p1 = true
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa1_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliDesaInggrisTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < inggris_desa && !inggrisDesa1_p1 && !inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= inggris_desa && inggrisDesa1_p1 && !inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaInggrisTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaInggrisTampilan_p1.style.display = "block";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                    beliDesaInggrisTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= inggris_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        inggrisDesa1_p1 = true
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = true
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa2_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliDesaInggrisTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < inggris_desa && inggrisDesa1_p1 && !inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= inggris_desa && inggrisDesa1_p1 && inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaInggrisTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaInggrisTampilan_p1.style.display = "block";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                    beliDesaInggrisTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= inggris_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        inggrisDesa1_p1 = true
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = true
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = true
                        inggrisDesa3_p2 = false
                        desa3_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliDesaInggrisTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < inggris_desa && inggrisDesa1_p1 && inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= inggris_kota && inggrisDesa1_p1 && inggrisDesa2_p1
                    && inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaInggrisTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaInggrisTampilan_p1.style.display = "block";
                    beliKotaInggrisTampilan_p2.style.display = "none";
                    beliKotaInggrisTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= inggris_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        inggrisKota1_p1 = true
                        inggrisKota1_p2 = false
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = false
                        kota1_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliKotaInggrisTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < inggris_desa && inggrisDesa1_p1 && inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaInggrisTampilan_p1.style.display = "none";
                    beliKotaInggrisTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= inggris_kota && inggrisDesa1_p1 && inggrisDesa2_p1
                    && inggrisDesa3_p1 && inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaInggrisTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaInggrisTampilan_p1.style.display = "block";
                    beliKotaInggrisTampilan_p2.style.display = "none";
                    beliKotaInggrisTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= inggris_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        inggrisKota1_p1 = true
                        inggrisKota1_p2 = false
                        inggrisKota2_p1 = true
                        inggrisKota2_p2 = false
                        kota2_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliKotaInggrisTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < inggris_desa && inggrisDesa1_p1 && inggrisDesa2_p1
                    && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaInggrisTampilan_p1.style.display = "none";
                    beliKotaInggrisTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_inggris_dibeli && !inggris_p1) {
                exitInggrisTampilan.style.display = "block"
                // TOMBOL BELI
                beliInggrisTampilan_p1.style.display = "none";
                beliInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaInggrisTampilan_p1.style.display = "none";
                beliDesaInggrisTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaInggrisTampilan_p1.style.display = "none";
                beliKotaInggrisTampilan_p2.style.display = "none";
                exitInggrisTampilan.addEventListener("click", function close() {
                    inggrisTampilan.style.display = "none"
                    exitInggrisTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < inggris_only && !apakah_inggris_dibeli) {
                exitInggrisTampilan.style.display = "block"
                // TOMBOL BELI
                beliInggrisTampilan_p1.style.display = "none";
                beliInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaInggrisTampilan_p1.style.display = "none";
                beliDesaInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaInggrisTampilan_p1.style.display = "none";
                beliKotaInggrisTampilan_p2.style.display = "none";
                exitInggrisTampilan.addEventListener("click", function close() {
                    inggrisTampilan.style.display = "none"
                    exitInggrisTampilan.removeEventListener("click", close)
                })
            }
            negaraInggris.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 735 && posY_p2 == 65) && 
        (posX_p1 != 735 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraInggris.addEventListener("click", function closen() {
            inggrisTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= inggris_only && !apakah_inggris_dibeli && !inggris_p2) {
                exitInggrisTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliInggrisTampilan_p1.style.display = "none";
                beliInggrisTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaInggrisTampilan_p1.style.display = "none";
                beliDesaInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaInggrisTampilan_p1.style.display = "none";
                beliKotaInggrisTampilan_p2.style.display = "none";
                beliInggrisTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= inggris_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_inggris_dibeli = true;
                    inggris_p1 = false
                    inggris_p2 = true
                    negaraInggris.style.border = "5px solid darkred"
                    inggrisTampilan.style.display = "none"
                    beliInggrisTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_inggris_dibeli && inggris_p2) {
                exitInggrisTampilan.style.display = "none"
                // TOMBOL JUAL
                beliInggrisTampilan_p1.style.display = "none";
                beliInggrisTampilan_p2.style.display = "block";
                // JUAL
                if (!inggrisDesa1_p2 && !inggrisDesa2_p2 && !inggrisDesa3_p2 
                    && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    beliInggrisTampilan_p2.innerHTML = "Jual P2"
                    beliInggrisTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += inggris_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_inggris_dibeli = false;
                        inggris_p1 = false
                        inggris_p2 = false
                        negaraInggris.style.border = "1px solid white"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p2.innerHTML = "Beli P2"
                        beliInggrisTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (inggrisDesa1_p2 && !inggrisDesa2_p2 && !inggrisDesa3_p2
                    && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    beliInggrisTampilan_p2.innerHTML = "Jual Desa P2"
                    beliInggrisTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += inggris_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = false
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa1_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p2.innerHTML = "Jual P2"
                        beliInggrisTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (inggrisDesa1_p2 && inggrisDesa2_p2 && !inggrisDesa3_p2
                    && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    beliInggrisTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliInggrisTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += inggris_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = true
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa2_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p2.innerHTML = "Jual Desa P2"
                        beliInggrisTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (inggrisDesa1_p2 && inggrisDesa2_p2 && inggrisDesa3_p2
                    && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    beliInggrisTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliInggrisTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += inggris_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = true
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = true
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa3_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliInggrisTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (inggrisDesa1_p2 && inggrisDesa2_p2 && inggrisDesa3_p2
                    && inggrisKota1_p2 && !inggrisKota2_p2) {
                    beliInggrisTampilan_p2.innerHTML = "Jual Kota P2"
                    beliInggrisTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += inggris_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        inggrisKota1_p1 = false
                        inggrisKota1_p2 = false
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = false
                        kota1_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliInggrisTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (inggrisDesa1_p2 && inggrisDesa2_p2 && inggrisDesa3_p2
                    && inggrisKota1_p2 && inggrisKota2_p2) {
                    beliInggrisTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliInggrisTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += inggris_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        inggrisKota1_p1 = false
                        inggrisKota1_p2 = true
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = false
                        kota2_inggris.style.display = "none"
                        inggrisTampilan.style.display = "none"
                        beliInggrisTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliInggrisTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= inggris_desa && !inggrisDesa1_p2 && !inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "block";
                    beliDesaInggrisTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= inggris_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = true
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = false
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa1_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliDesaInggrisTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < inggris_desa && !inggrisDesa1_p2 && !inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= inggris_desa && inggrisDesa1_p2 && !inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaInggrisTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "block";
                    beliDesaInggrisTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= inggris_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = true
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = true
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = false
                        desa2_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliDesaInggrisTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < inggris_desa && inggrisDesa1_p2 && !inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= inggris_desa && inggrisDesa1_p2 && inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaInggrisTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "block";
                    beliDesaInggrisTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= inggris_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        inggrisDesa1_p1 = false
                        inggrisDesa1_p2 = true
                        inggrisDesa2_p1 = false
                        inggrisDesa2_p2 = true
                        inggrisDesa3_p1 = false
                        inggrisDesa3_p2 = true
                        desa3_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliDesaInggrisTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < inggris_desa && inggrisDesa1_p2 && inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaInggrisTampilan_p1.style.display = "none";
                    beliDesaInggrisTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= inggris_kota && inggrisDesa1_p2 && inggrisDesa2_p2
                    && inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaInggrisTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaInggrisTampilan_p1.style.display = "none";
                    beliKotaInggrisTampilan_p2.style.display = "block";
                    beliKotaInggrisTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= inggris_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        inggrisKota1_p1 = false
                        inggrisKota1_p2 = true
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = false
                        kota1_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliKotaInggrisTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < inggris_desa && inggrisDesa1_p2 && inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaInggrisTampilan_p1.style.display = "none";
                    beliKotaInggrisTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= inggris_kota && inggrisDesa1_p2 && inggrisDesa2_p2
                    && inggrisDesa3_p2 && inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaInggrisTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaInggrisTampilan_p1.style.display = "none";
                    beliKotaInggrisTampilan_p2.style.display = "block";
                    beliKotaInggrisTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= inggris_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        inggrisKota1_p1 = false
                        inggrisKota1_p2 = true
                        inggrisKota2_p1 = false
                        inggrisKota2_p2 = true
                        kota2_inggris.style.display = "block"
                        inggrisTampilan.style.display = "none"
                        beliKotaInggrisTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < inggris_desa && inggrisDesa1_p2 && inggrisDesa2_p2
                    && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaInggrisTampilan_p1.style.display = "none";
                    beliKotaInggrisTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_inggris_dibeli && !inggris_p2) {
                exitInggrisTampilan.style.display = "block"
                // TOMBOL BELI
                beliInggrisTampilan_p1.style.display = "none";
                beliInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaInggrisTampilan_p1.style.display = "none";
                beliDesaInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaInggrisTampilan_p1.style.display = "none";
                beliKotaInggrisTampilan_p2.style.display = "none";
                exitInggrisTampilan.addEventListener("click", function close() {
                    inggrisTampilan.style.display = "none"
                    exitInggrisTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < inggris_only && !apakah_inggris_dibeli) {
                exitInggrisTampilan.style.display = "block"
                // TOMBOL BELI
                beliInggrisTampilan_p1.style.display = "none";
                beliInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaInggrisTampilan_p1.style.display = "none";
                beliDesaInggrisTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaInggrisTampilan_p1.style.display = "none";
                beliKotaInggrisTampilan_p2.style.display = "none";
                exitInggrisTampilan.addEventListener("click", function close() {
                    inggrisTampilan.style.display = "none"
                    exitInggrisTampilan.removeEventListener("click", close)
                })
            }
            negaraInggris.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 735 && posX_p2 == 735 && posY_p2 == 65 && posY_p2 == 65) ||
        (posX_p1 != 735 && posX_p2 != 735 || posY_p2 != 65 && posY_p2 != 65)) {
        negaraInggris.addEventListener("click", function closen() {
            inggrisTampilan.style.display = "block"
            exitInggrisTampilan.style.display = "block"
            // TOMBOL BELI
            beliInggrisTampilan_p1.style.display = "none";
            beliInggrisTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaInggrisTampilan_p1.style.display = "none";
            beliDesaInggrisTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaInggrisTampilan_p1.style.display = "none";
            beliKotaInggrisTampilan_p2.style.display = "none";
            exitInggrisTampilan.addEventListener("click", function close() {
                inggrisTampilan.style.display = "none"
                exitInggrisTampilan.removeEventListener("click", close)
            })
            negaraInggris.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_inggris_dibeli && !inggris_p1 && posX_p1 == 735 && posY_p1 == 65 && !inggris_p1_kenaPajak
        && !inggrisDesa1_p2 && !inggrisDesa2_p2 && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
        moneyPlayer1 -= inggris_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        inggris_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_inggris_dibeli && !inggris_p1 && posX_p1 == 735 && posY_p1 == 65 && !inggris_p1_kenaPajak
        && inggrisDesa1_p2 && !inggrisDesa2_p2 && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
        moneyPlayer1 -= inggris_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        inggris_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_inggris_dibeli && !inggris_p1 && posX_p1 == 735 && posY_p1 == 65 && !inggris_p1_kenaPajak
        && inggrisDesa1_p2 && inggrisDesa2_p2 && !inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
        moneyPlayer1 -= inggris_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        inggris_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_inggris_dibeli && !inggris_p1 && posX_p1 == 735 && posY_p1 == 65 && !inggris_p1_kenaPajak
        && inggrisDesa1_p2 && inggrisDesa2_p2 && inggrisDesa3_p2 && !inggrisKota1_p2 && !inggrisKota2_p2) {
        moneyPlayer1 -= inggris_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        inggris_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_inggris_dibeli && !inggris_p1 && posX_p1 == 735 && posY_p1 == 65 && !inggris_p1_kenaPajak
        && inggrisDesa1_p2 && inggrisDesa2_p2 && inggrisDesa3_p2 && inggrisKota1_p2 && !inggrisKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - inggris_pajak_desa*3 - inggris_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        inggris_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_inggris_dibeli && !inggris_p1 && posX_p1 == 735 && posY_p1 == 65 && !inggris_p1_kenaPajak
        && inggrisDesa1_p2 && inggrisDesa2_p2 && inggrisDesa3_p2 && inggrisKota1_p2 && inggrisKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - inggris_pajak_desa*3 - inggris_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        inggris_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_inggris_dibeli && !inggris_p2 && posX_p2 == 735 && posY_p2 == 65 && !inggris_p2_kenaPajak
        && !inggrisDesa1_p1 && !inggrisDesa2_p1 && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
        moneyPlayer2 -= inggris_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        inggris_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_inggris_dibeli && !inggris_p2 && posX_p2 == 735 && posY_p2 == 65 && !inggris_p2_kenaPajak
        && inggrisDesa1_p1 && !inggrisDesa2_p1 && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
        moneyPlayer2 -= inggris_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        inggris_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_inggris_dibeli && !inggris_p2 && posX_p2 == 735 && posY_p2 == 65 && !inggris_p2_kenaPajak
        && inggrisDesa1_p1 && inggrisDesa2_p1 && !inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
        moneyPlayer2 -= inggris_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        inggris_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_inggris_dibeli && !inggris_p2 && posX_p2 == 735 && posY_p2 == 65 && !inggris_p2_kenaPajak
        && inggrisDesa1_p1 && inggrisDesa2_p1 && inggrisDesa3_p1 && !inggrisKota1_p1 && !inggrisKota2_p1) {
        moneyPlayer2 -= inggris_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        inggris_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_inggris_dibeli && !inggris_p2 && posX_p2 == 735 && posY_p2 == 65 && !inggris_p2_kenaPajak
        && inggrisDesa1_p1 && inggrisDesa2_p1 && inggrisDesa3_p1 && inggrisKota1_p1 && !inggrisKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - inggris_pajak_desa*3 - inggris_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        inggris_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_inggris_dibeli && !inggris_p2 && posX_p2 == 735 && posY_p2 == 65 && !inggris_p2_kenaPajak
        && inggrisDesa1_p1 && inggrisDesa2_p1 && inggrisDesa3_p1 && inggrisKota1_p1 && inggrisKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - inggris_pajak_desa*3 - inggris_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        inggris_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 835 && posY_p1 > 65 || posX_p2 == 835 && posY_p2 > 65) {
        inggris_p1_kenaPajak = false
        inggris_p2_kenaPajak = false
    } 
}