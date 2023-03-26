function p12BeliMesir() {
    negaraMesir.removeEventListener("click", p12BeliMesir)
    if ((posY_p1 == 465 && posX_p1 == 335) && 
        (posY_p2 != 465 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraMesir.addEventListener("click", function closen() {
            mesirTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= mesir_only && !apakah_mesir_dibeli) {
                exitMesirTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliMesirTampilan_p1.style.display = "block";
                beliMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMesirTampilan_p1.style.display = "none";
                beliDesaMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMesirTampilan_p1.style.display = "none";
                beliKotaMesirTampilan_p2.style.display = "none";
                beliMesirTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= mesir_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_mesir_dibeli = true;
                    mesir_p1 = true
                    mesir_p2 = false
                    negaraMesir.style.border = "5px solid darkblue"
                    mesirTampilan.style.display = "none"
                    beliMesirTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_mesir_dibeli && mesir_p1) {
                exitMesirTampilan.style.display = "none"
                // TOMBOL JUAL
                beliMesirTampilan_p1.style.display = "block";
                beliMesirTampilan_p2.style.display = "none";
                // JUAL
                if (!mesirDesa1_p1 && !mesirDesa2_p1 && !mesirDesa3_p1 
                    && !mesirKota1_p1 && !mesirKota2_p1) {
                    beliMesirTampilan_p1.innerHTML = "Jual P1"
                    beliMesirTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += mesir_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_mesir_dibeli = false;
                        mesir_p1 = false
                        mesir_p2 = false
                        negaraMesir.style.border = "1px solid white"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p1.innerHTML = "Beli P1"
                        beliMesirTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (mesirDesa1_p1 && !mesirDesa2_p1 && !mesirDesa3_p1
                    && !mesirKota1_p1 && !mesirKota2_p1) {
                    beliMesirTampilan_p1.innerHTML = "Jual Desa P1"
                    beliMesirTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += mesir_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa1_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p1.innerHTML = "Jual P1"
                        beliMesirTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (mesirDesa1_p1 && mesirDesa2_p1 && !mesirDesa3_p1
                    && !mesirKota1_p1 && !mesirKota2_p1) {
                    beliMesirTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliMesirTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += mesir_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        mesirDesa1_p1 = true
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa2_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p1.innerHTML = "Jual Desa P1"
                        beliMesirTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (mesirDesa1_p1 && mesirDesa2_p1 && mesirDesa3_p1
                    && !mesirKota1_p1 && !mesirKota2_p1) {
                    beliMesirTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliMesirTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += mesir_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        mesirDesa1_p1 = true
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = true
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa3_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliMesirTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (mesirDesa1_p1 && mesirDesa2_p1 && mesirDesa3_p1
                    && mesirKota1_p1 && !mesirKota2_p1) {
                    beliMesirTampilan_p1.innerHTML = "Jual Kota P1"
                    beliMesirTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += mesir_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        mesirKota1_p1 = false
                        mesirKota1_p2 = false
                        mesirKota2_p1 = false
                        mesirKota2_p2 = false
                        kota1_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliMesirTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (mesirDesa1_p1 && mesirDesa2_p1 && mesirDesa3_p1
                    && mesirKota1_p1 && mesirKota2_p1) {
                    beliMesirTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliMesirTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += mesir_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        mesirKota1_p1 = true
                        mesirKota1_p2 = false
                        mesirKota2_p1 = false
                        mesirKota2_p2 = false
                        kota2_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliMesirTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= mesir_desa && !mesirDesa1_p1 && !mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaMesirTampilan_p1.style.display = "block";
                    beliDesaMesirTampilan_p2.style.display = "none";
                    beliDesaMesirTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= mesir_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        mesirDesa1_p1 = true
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa1_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliDesaMesirTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < mesir_desa && !mesirDesa1_p1 && !mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= mesir_desa && mesirDesa1_p1 && !mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaMesirTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaMesirTampilan_p1.style.display = "block";
                    beliDesaMesirTampilan_p2.style.display = "none";
                    beliDesaMesirTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= mesir_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        mesirDesa1_p1 = true
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = true
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa2_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliDesaMesirTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < mesir_desa && mesirDesa1_p1 && !mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= mesir_desa && mesirDesa1_p1 && mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaMesirTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaMesirTampilan_p1.style.display = "block";
                    beliDesaMesirTampilan_p2.style.display = "none";
                    beliDesaMesirTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= mesir_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        mesirDesa1_p1 = true
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = true
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = true
                        mesirDesa3_p2 = false
                        desa3_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliDesaMesirTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < mesir_desa && mesirDesa1_p1 && mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= mesir_kota && mesirDesa1_p1 && mesirDesa2_p1
                    && mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaMesirTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaMesirTampilan_p1.style.display = "block";
                    beliKotaMesirTampilan_p2.style.display = "none";
                    beliKotaMesirTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= mesir_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        mesirKota1_p1 = true
                        mesirKota1_p2 = false
                        mesirKota2_p1 = false
                        mesirKota2_p2 = false
                        kota1_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliKotaMesirTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < mesir_desa && mesirDesa1_p1 && mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaMesirTampilan_p1.style.display = "none";
                    beliKotaMesirTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= mesir_kota && mesirDesa1_p1 && mesirDesa2_p1
                    && mesirDesa3_p1 && mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaMesirTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaMesirTampilan_p1.style.display = "block";
                    beliKotaMesirTampilan_p2.style.display = "none";
                    beliKotaMesirTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= mesir_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        mesirKota1_p1 = true
                        mesirKota1_p2 = false
                        mesirKota2_p1 = true
                        mesirKota2_p2 = false
                        kota2_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliKotaMesirTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < mesir_desa && mesirDesa1_p1 && mesirDesa2_p1
                    && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaMesirTampilan_p1.style.display = "none";
                    beliKotaMesirTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_mesir_dibeli && !mesir_p1) {
                exitMesirTampilan.style.display = "block"
                // TOMBOL BELI
                beliMesirTampilan_p1.style.display = "none";
                beliMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMesirTampilan_p1.style.display = "none";
                beliDesaMesirTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaMesirTampilan_p1.style.display = "none";
                beliKotaMesirTampilan_p2.style.display = "none";
                exitMesirTampilan.addEventListener("click", function close() {
                    mesirTampilan.style.display = "none"
                    exitMesirTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < mesir_only && !apakah_mesir_dibeli) {
                exitMesirTampilan.style.display = "block"
                // TOMBOL BELI
                beliMesirTampilan_p1.style.display = "none";
                beliMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMesirTampilan_p1.style.display = "none";
                beliDesaMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMesirTampilan_p1.style.display = "none";
                beliKotaMesirTampilan_p2.style.display = "none";
                exitMesirTampilan.addEventListener("click", function close() {
                    mesirTampilan.style.display = "none"
                    exitMesirTampilan.removeEventListener("click", close)
                })
            }
            negaraMesir.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 465 && posX_p2 == 335) && 
        (posY_p1 != 465 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraMesir.addEventListener("click", function closen() {
            mesirTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= mesir_only && !apakah_mesir_dibeli && !mesir_p2) {
                exitMesirTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliMesirTampilan_p1.style.display = "none";
                beliMesirTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaMesirTampilan_p1.style.display = "none";
                beliDesaMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMesirTampilan_p1.style.display = "none";
                beliKotaMesirTampilan_p2.style.display = "none";
                beliMesirTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= mesir_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_mesir_dibeli = true;
                    mesir_p1 = false
                    mesir_p2 = true
                    negaraMesir.style.border = "5px solid darkred"
                    mesirTampilan.style.display = "none"
                    beliMesirTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_mesir_dibeli && mesir_p2) {
                exitMesirTampilan.style.display = "none"
                // TOMBOL JUAL
                beliMesirTampilan_p1.style.display = "none";
                beliMesirTampilan_p2.style.display = "block";
                // JUAL
                if (!mesirDesa1_p2 && !mesirDesa2_p2 && !mesirDesa3_p2 
                    && !mesirKota1_p2 && !mesirKota2_p2) {
                    beliMesirTampilan_p2.innerHTML = "Jual P2"
                    beliMesirTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += mesir_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_mesir_dibeli = false;
                        mesir_p1 = false
                        mesir_p2 = false
                        negaraMesir.style.border = "1px solid white"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p2.innerHTML = "Beli P2"
                        beliMesirTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (mesirDesa1_p2 && !mesirDesa2_p2 && !mesirDesa3_p2
                    && !mesirKota1_p2 && !mesirKota2_p2) {
                    beliMesirTampilan_p2.innerHTML = "Jual Desa P2"
                    beliMesirTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += mesir_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = false
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa1_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p2.innerHTML = "Jual P2"
                        beliMesirTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (mesirDesa1_p2 && mesirDesa2_p2 && !mesirDesa3_p2
                    && !mesirKota1_p2 && !mesirKota2_p2) {
                    beliMesirTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliMesirTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += mesir_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = true
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa2_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p2.innerHTML = "Jual Desa P2"
                        beliMesirTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (mesirDesa1_p2 && mesirDesa2_p2 && mesirDesa3_p2
                    && !mesirKota1_p2 && !mesirKota2_p2) {
                    beliMesirTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliMesirTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += mesir_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = true
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = true
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa3_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliMesirTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (mesirDesa1_p2 && mesirDesa2_p2 && mesirDesa3_p2
                    && mesirKota1_p2 && !mesirKota2_p2) {
                    beliMesirTampilan_p2.innerHTML = "Jual Kota P2"
                    beliMesirTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += mesir_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        mesirKota1_p1 = false
                        mesirKota1_p2 = false
                        mesirKota2_p1 = false
                        mesirKota2_p2 = false
                        kota1_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliMesirTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (mesirDesa1_p2 && mesirDesa2_p2 && mesirDesa3_p2
                    && mesirKota1_p2 && mesirKota2_p2) {
                    beliMesirTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliMesirTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += mesir_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        mesirKota1_p1 = false
                        mesirKota1_p2 = true
                        mesirKota2_p1 = false
                        mesirKota2_p2 = false
                        kota2_mesir.style.display = "none"
                        mesirTampilan.style.display = "none"
                        beliMesirTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliMesirTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= mesir_desa && !mesirDesa1_p2 && !mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "block";
                    beliDesaMesirTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= mesir_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = true
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = false
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa1_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliDesaMesirTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < mesir_desa && !mesirDesa1_p2 && !mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= mesir_desa && mesirDesa1_p2 && !mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaMesirTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "block";
                    beliDesaMesirTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= mesir_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = true
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = true
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = false
                        desa2_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliDesaMesirTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < mesir_desa && mesirDesa1_p2 && !mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= mesir_desa && mesirDesa1_p2 && mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaMesirTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "block";
                    beliDesaMesirTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= mesir_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        mesirDesa1_p1 = false
                        mesirDesa1_p2 = true
                        mesirDesa2_p1 = false
                        mesirDesa2_p2 = true
                        mesirDesa3_p1 = false
                        mesirDesa3_p2 = true
                        desa3_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliDesaMesirTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < mesir_desa && mesirDesa1_p2 && mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaMesirTampilan_p1.style.display = "none";
                    beliDesaMesirTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= mesir_kota && mesirDesa1_p2 && mesirDesa2_p2
                    && mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaMesirTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaMesirTampilan_p1.style.display = "none";
                    beliKotaMesirTampilan_p2.style.display = "block";
                    beliKotaMesirTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= mesir_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        mesirKota1_p1 = false
                        mesirKota1_p2 = true
                        mesirKota2_p1 = false
                        mesirKota2_p2 = false
                        kota1_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliKotaMesirTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < mesir_desa && mesirDesa1_p2 && mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaMesirTampilan_p1.style.display = "none";
                    beliKotaMesirTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= mesir_kota && mesirDesa1_p2 && mesirDesa2_p2
                    && mesirDesa3_p2 && mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaMesirTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaMesirTampilan_p1.style.display = "none";
                    beliKotaMesirTampilan_p2.style.display = "block";
                    beliKotaMesirTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= mesir_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        mesirKota1_p1 = false
                        mesirKota1_p2 = true
                        mesirKota2_p1 = false
                        mesirKota2_p2 = true
                        kota2_mesir.style.display = "block"
                        mesirTampilan.style.display = "none"
                        beliKotaMesirTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < mesir_desa && mesirDesa1_p2 && mesirDesa2_p2
                    && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaMesirTampilan_p1.style.display = "none";
                    beliKotaMesirTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_mesir_dibeli && !mesir_p2) {
                exitMesirTampilan.style.display = "block"
                // TOMBOL BELI
                beliMesirTampilan_p1.style.display = "none";
                beliMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMesirTampilan_p1.style.display = "none";
                beliDesaMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMesirTampilan_p1.style.display = "none";
                beliKotaMesirTampilan_p2.style.display = "none";
                exitMesirTampilan.addEventListener("click", function close() {
                    mesirTampilan.style.display = "none"
                    exitMesirTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < mesir_only && !apakah_mesir_dibeli) {
                exitMesirTampilan.style.display = "block"
                // TOMBOL BELI
                beliMesirTampilan_p1.style.display = "none";
                beliMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMesirTampilan_p1.style.display = "none";
                beliDesaMesirTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMesirTampilan_p1.style.display = "none";
                beliKotaMesirTampilan_p2.style.display = "none";
                exitMesirTampilan.addEventListener("click", function close() {
                    mesirTampilan.style.display = "none"
                    exitMesirTampilan.removeEventListener("click", close)
                })
            }
            negaraMesir.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 335 && posX_p2 == 335 && posY_p2 == 465 && posY_p2 == 465) ||
        (posX_p1 != 335 && posX_p2 != 335 || posY_p2 != 465 && posY_p2 != 465)) {
        negaraMesir.addEventListener("click", function closen() {
            mesirTampilan.style.display = "block"
            exitMesirTampilan.style.display = "block"
            // TOMBOL BELI
            beliMesirTampilan_p1.style.display = "none";
            beliMesirTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaMesirTampilan_p1.style.display = "none";
            beliDesaMesirTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaMesirTampilan_p1.style.display = "none";
            beliKotaMesirTampilan_p2.style.display = "none";
            exitMesirTampilan.addEventListener("click", function close() {
                mesirTampilan.style.display = "none"
                exitMesirTampilan.removeEventListener("click", close)
            })
            negaraMesir.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_mesir_dibeli && !mesir_p1 && posX_p1 == 335 && posY_p1 == 465 && !mesir_p1_kenaPajak
        && !mesirDesa1_p2 && !mesirDesa2_p2 && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
        moneyPlayer1 -= mesir_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        mesir_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_mesir_dibeli && !mesir_p1 && posX_p1 == 335 && posY_p1 == 465 && !mesir_p1_kenaPajak
        && mesirDesa1_p2 && !mesirDesa2_p2 && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
        moneyPlayer1 -= mesir_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        mesir_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_mesir_dibeli && !mesir_p1 && posX_p1 == 335 && posY_p1 == 465 && !mesir_p1_kenaPajak
        && mesirDesa1_p2 && mesirDesa2_p2 && !mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
        moneyPlayer1 -= mesir_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        mesir_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_mesir_dibeli && !mesir_p1 && posX_p1 == 335 && posY_p1 == 465 && !mesir_p1_kenaPajak
        && mesirDesa1_p2 && mesirDesa2_p2 && mesirDesa3_p2 && !mesirKota1_p2 && !mesirKota2_p2) {
        moneyPlayer1 -= mesir_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        mesir_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_mesir_dibeli && !mesir_p1 && posX_p1 == 335 && posY_p1 == 465 && !mesir_p1_kenaPajak
        && mesirDesa1_p2 && mesirDesa2_p2 && mesirDesa3_p2 && mesirKota1_p2 && !mesirKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - mesir_pajak_desa*3 - mesir_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        mesir_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_mesir_dibeli && !mesir_p1 && posX_p1 == 335 && posY_p1 == 465 && !mesir_p1_kenaPajak
        && mesirDesa1_p2 && mesirDesa2_p2 && mesirDesa3_p2 && mesirKota1_p2 && mesirKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - mesir_pajak_desa*3 - mesir_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        mesir_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_mesir_dibeli && !mesir_p2 && posX_p2 == 335 && posY_p2 == 465 && !mesir_p2_kenaPajak
        && !mesirDesa1_p1 && !mesirDesa2_p1 && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
        moneyPlayer2 -= mesir_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        mesir_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_mesir_dibeli && !mesir_p2 && posX_p2 == 335 && posY_p2 == 465 && !mesir_p2_kenaPajak
        && mesirDesa1_p1 && !mesirDesa2_p1 && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
        moneyPlayer2 -= mesir_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        mesir_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_mesir_dibeli && !mesir_p2 && posX_p2 == 335 && posY_p2 == 465 && !mesir_p2_kenaPajak
        && mesirDesa1_p1 && mesirDesa2_p1 && !mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
        moneyPlayer2 -= mesir_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        mesir_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_mesir_dibeli && !mesir_p2 && posX_p2 == 335 && posY_p2 == 465 && !mesir_p2_kenaPajak
        && mesirDesa1_p1 && mesirDesa2_p1 && mesirDesa3_p1 && !mesirKota1_p1 && !mesirKota2_p1) {
        moneyPlayer2 -= mesir_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        mesir_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_mesir_dibeli && !mesir_p2 && posX_p2 == 335 && posY_p2 == 465 && !mesir_p2_kenaPajak
        && mesirDesa1_p1 && mesirDesa2_p1 && mesirDesa3_p1 && mesirKota1_p1 && !mesirKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - mesir_pajak_desa*3 - mesir_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        mesir_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_mesir_dibeli && !mesir_p2 && posX_p2 == 335 && posY_p2 == 465 && !mesir_p2_kenaPajak
        && mesirDesa1_p1 && mesirDesa2_p1 && mesirDesa3_p1 && mesirKota1_p1 && mesirKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - mesir_pajak_desa*3 - mesir_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        mesir_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 > 335 && posY_p1 == 65 || posX_p2 > 335 && posY_p2 == 65) {
        mesir_p1_kenaPajak = false
        mesir_p2_kenaPajak = false
    } 
}