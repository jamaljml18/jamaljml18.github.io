function p12BeliItalia() {
    negaraItalia.removeEventListener("click", p12BeliItalia)
    if ((posX_p1 == 635 && posY_p1 == 65) && 
        (posX_p2 != 635 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraItalia.addEventListener("click", function closen() {
            italiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= italia_only && !apakah_italia_dibeli) {
                exitItaliaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliItaliaTampilan_p1.style.display = "block";
                beliItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaItaliaTampilan_p1.style.display = "none";
                beliDesaItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaItaliaTampilan_p1.style.display = "none";
                beliKotaItaliaTampilan_p2.style.display = "none";
                beliItaliaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= italia_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_italia_dibeli = true;
                    italia_p1 = true
                    italia_p2 = false
                    negaraItalia.style.border = "5px solid darkblue"
                    italiaTampilan.style.display = "none"
                    beliItaliaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_italia_dibeli && italia_p1) {
                exitItaliaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliItaliaTampilan_p1.style.display = "block";
                beliItaliaTampilan_p2.style.display = "none";
                // JUAL
                if (!italiaDesa1_p1 && !italiaDesa2_p1 && !italiaDesa3_p1 
                    && !italiaKota1_p1 && !italiaKota2_p1) {
                    beliItaliaTampilan_p1.innerHTML = "Jual P1"
                    beliItaliaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += italia_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_italia_dibeli = false;
                        italia_p1 = false
                        italia_p2 = false
                        negaraItalia.style.border = "1px solid white"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p1.innerHTML = "Beli P1"
                        beliItaliaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (italiaDesa1_p1 && !italiaDesa2_p1 && !italiaDesa3_p1
                    && !italiaKota1_p1 && !italiaKota2_p1) {
                    beliItaliaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliItaliaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += italia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa1_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p1.innerHTML = "Jual P1"
                        beliItaliaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (italiaDesa1_p1 && italiaDesa2_p1 && !italiaDesa3_p1
                    && !italiaKota1_p1 && !italiaKota2_p1) {
                    beliItaliaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliItaliaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += italia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        italiaDesa1_p1 = true
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa2_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliItaliaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (italiaDesa1_p1 && italiaDesa2_p1 && italiaDesa3_p1
                    && !italiaKota1_p1 && !italiaKota2_p1) {
                    beliItaliaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliItaliaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += italia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        italiaDesa1_p1 = true
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = true
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa3_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliItaliaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (italiaDesa1_p1 && italiaDesa2_p1 && italiaDesa3_p1
                    && italiaKota1_p1 && !italiaKota2_p1) {
                    beliItaliaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliItaliaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += italia_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        italiaKota1_p1 = false
                        italiaKota1_p2 = false
                        italiaKota2_p1 = false
                        italiaKota2_p2 = false
                        kota1_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliItaliaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (italiaDesa1_p1 && italiaDesa2_p1 && italiaDesa3_p1
                    && italiaKota1_p1 && italiaKota2_p1) {
                    beliItaliaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliItaliaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += italia_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        italiaKota1_p1 = true
                        italiaKota1_p2 = false
                        italiaKota2_p1 = false
                        italiaKota2_p2 = false
                        kota2_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliItaliaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= italia_desa && !italiaDesa1_p1 && !italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaItaliaTampilan_p1.style.display = "block";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                    beliDesaItaliaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= italia_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        italiaDesa1_p1 = true
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa1_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliDesaItaliaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < italia_desa && !italiaDesa1_p1 && !italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= italia_desa && italiaDesa1_p1 && !italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaItaliaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaItaliaTampilan_p1.style.display = "block";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                    beliDesaItaliaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= italia_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        italiaDesa1_p1 = true
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = true
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa2_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliDesaItaliaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < italia_desa && italiaDesa1_p1 && !italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= italia_desa && italiaDesa1_p1 && italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaItaliaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaItaliaTampilan_p1.style.display = "block";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                    beliDesaItaliaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= italia_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        italiaDesa1_p1 = true
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = true
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = true
                        italiaDesa3_p2 = false
                        desa3_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliDesaItaliaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < italia_desa && italiaDesa1_p1 && italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= italia_kota && italiaDesa1_p1 && italiaDesa2_p1
                    && italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaItaliaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaItaliaTampilan_p1.style.display = "block";
                    beliKotaItaliaTampilan_p2.style.display = "none";
                    beliKotaItaliaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= italia_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        italiaKota1_p1 = true
                        italiaKota1_p2 = false
                        italiaKota2_p1 = false
                        italiaKota2_p2 = false
                        kota1_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliKotaItaliaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < italia_desa && italiaDesa1_p1 && italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaItaliaTampilan_p1.style.display = "none";
                    beliKotaItaliaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= italia_kota && italiaDesa1_p1 && italiaDesa2_p1
                    && italiaDesa3_p1 && italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaItaliaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaItaliaTampilan_p1.style.display = "block";
                    beliKotaItaliaTampilan_p2.style.display = "none";
                    beliKotaItaliaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= italia_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        italiaKota1_p1 = true
                        italiaKota1_p2 = false
                        italiaKota2_p1 = true
                        italiaKota2_p2 = false
                        kota2_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliKotaItaliaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < italia_desa && italiaDesa1_p1 && italiaDesa2_p1
                    && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaItaliaTampilan_p1.style.display = "none";
                    beliKotaItaliaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_italia_dibeli && !italia_p1) {
                exitItaliaTampilan.style.display = "block"
                // TOMBOL BELI
                beliItaliaTampilan_p1.style.display = "none";
                beliItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaItaliaTampilan_p1.style.display = "none";
                beliDesaItaliaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaItaliaTampilan_p1.style.display = "none";
                beliKotaItaliaTampilan_p2.style.display = "none";
                exitItaliaTampilan.addEventListener("click", function close() {
                    italiaTampilan.style.display = "none"
                    exitItaliaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < italia_only && !apakah_italia_dibeli) {
                exitItaliaTampilan.style.display = "block"
                // TOMBOL BELI
                beliItaliaTampilan_p1.style.display = "none";
                beliItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaItaliaTampilan_p1.style.display = "none";
                beliDesaItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaItaliaTampilan_p1.style.display = "none";
                beliKotaItaliaTampilan_p2.style.display = "none";
                exitItaliaTampilan.addEventListener("click", function close() {
                    italiaTampilan.style.display = "none"
                    exitItaliaTampilan.removeEventListener("click", close)
                })
            }
            negaraItalia.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 635 && posY_p2 == 65) && 
        (posX_p1 != 635 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraItalia.addEventListener("click", function closen() {
            italiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= italia_only && !apakah_italia_dibeli && !italia_p2) {
                exitItaliaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliItaliaTampilan_p1.style.display = "none";
                beliItaliaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaItaliaTampilan_p1.style.display = "none";
                beliDesaItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaItaliaTampilan_p1.style.display = "none";
                beliKotaItaliaTampilan_p2.style.display = "none";
                beliItaliaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= italia_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_italia_dibeli = true;
                    italia_p1 = false
                    italia_p2 = true
                    negaraItalia.style.border = "5px solid darkred"
                    italiaTampilan.style.display = "none"
                    beliItaliaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_italia_dibeli && italia_p2) {
                exitItaliaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliItaliaTampilan_p1.style.display = "none";
                beliItaliaTampilan_p2.style.display = "block";
                // JUAL
                if (!italiaDesa1_p2 && !italiaDesa2_p2 && !italiaDesa3_p2 
                    && !italiaKota1_p2 && !italiaKota2_p2) {
                    beliItaliaTampilan_p2.innerHTML = "Jual P2"
                    beliItaliaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += italia_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_italia_dibeli = false;
                        italia_p1 = false
                        italia_p2 = false
                        negaraItalia.style.border = "1px solid white"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p2.innerHTML = "Beli P2"
                        beliItaliaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (italiaDesa1_p2 && !italiaDesa2_p2 && !italiaDesa3_p2
                    && !italiaKota1_p2 && !italiaKota2_p2) {
                    beliItaliaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliItaliaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += italia_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = false
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa1_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p2.innerHTML = "Jual P2"
                        beliItaliaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (italiaDesa1_p2 && italiaDesa2_p2 && !italiaDesa3_p2
                    && !italiaKota1_p2 && !italiaKota2_p2) {
                    beliItaliaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliItaliaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += italia_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = true
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa2_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliItaliaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (italiaDesa1_p2 && italiaDesa2_p2 && italiaDesa3_p2
                    && !italiaKota1_p2 && !italiaKota2_p2) {
                    beliItaliaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliItaliaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += italia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = true
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = true
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa3_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliItaliaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (italiaDesa1_p2 && italiaDesa2_p2 && italiaDesa3_p2
                    && italiaKota1_p2 && !italiaKota2_p2) {
                    beliItaliaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliItaliaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += italia_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        italiaKota1_p1 = false
                        italiaKota1_p2 = false
                        italiaKota2_p1 = false
                        italiaKota2_p2 = false
                        kota1_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliItaliaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (italiaDesa1_p2 && italiaDesa2_p2 && italiaDesa3_p2
                    && italiaKota1_p2 && italiaKota2_p2) {
                    beliItaliaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliItaliaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += italia_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        italiaKota1_p1 = false
                        italiaKota1_p2 = true
                        italiaKota2_p1 = false
                        italiaKota2_p2 = false
                        kota2_italia.style.display = "none"
                        italiaTampilan.style.display = "none"
                        beliItaliaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliItaliaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= italia_desa && !italiaDesa1_p2 && !italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "block";
                    beliDesaItaliaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= italia_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = true
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = false
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa1_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliDesaItaliaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < italia_desa && !italiaDesa1_p2 && !italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= italia_desa && italiaDesa1_p2 && !italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaItaliaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "block";
                    beliDesaItaliaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= italia_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = true
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = true
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = false
                        desa2_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliDesaItaliaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < italia_desa && italiaDesa1_p2 && !italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= italia_desa && italiaDesa1_p2 && italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaItaliaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "block";
                    beliDesaItaliaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= italia_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        italiaDesa1_p1 = false
                        italiaDesa1_p2 = true
                        italiaDesa2_p1 = false
                        italiaDesa2_p2 = true
                        italiaDesa3_p1 = false
                        italiaDesa3_p2 = true
                        desa3_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliDesaItaliaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < italia_desa && italiaDesa1_p2 && italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaItaliaTampilan_p1.style.display = "none";
                    beliDesaItaliaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= italia_kota && italiaDesa1_p2 && italiaDesa2_p2
                    && italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaItaliaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaItaliaTampilan_p1.style.display = "none";
                    beliKotaItaliaTampilan_p2.style.display = "block";
                    beliKotaItaliaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= italia_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        italiaKota1_p1 = false
                        italiaKota1_p2 = true
                        italiaKota2_p1 = false
                        italiaKota2_p2 = false
                        kota1_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliKotaItaliaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < italia_desa && italiaDesa1_p2 && italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaItaliaTampilan_p1.style.display = "none";
                    beliKotaItaliaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= italia_kota && italiaDesa1_p2 && italiaDesa2_p2
                    && italiaDesa3_p2 && italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaItaliaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaItaliaTampilan_p1.style.display = "none";
                    beliKotaItaliaTampilan_p2.style.display = "block";
                    beliKotaItaliaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= italia_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        italiaKota1_p1 = false
                        italiaKota1_p2 = true
                        italiaKota2_p1 = false
                        italiaKota2_p2 = true
                        kota2_italia.style.display = "block"
                        italiaTampilan.style.display = "none"
                        beliKotaItaliaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < italia_desa && italiaDesa1_p2 && italiaDesa2_p2
                    && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaItaliaTampilan_p1.style.display = "none";
                    beliKotaItaliaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_italia_dibeli && !italia_p2) {
                exitItaliaTampilan.style.display = "block"
                // TOMBOL BELI
                beliItaliaTampilan_p1.style.display = "none";
                beliItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaItaliaTampilan_p1.style.display = "none";
                beliDesaItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaItaliaTampilan_p1.style.display = "none";
                beliKotaItaliaTampilan_p2.style.display = "none";
                exitItaliaTampilan.addEventListener("click", function close() {
                    italiaTampilan.style.display = "none"
                    exitItaliaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < italia_only && !apakah_italia_dibeli) {
                exitItaliaTampilan.style.display = "block"
                // TOMBOL BELI
                beliItaliaTampilan_p1.style.display = "none";
                beliItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaItaliaTampilan_p1.style.display = "none";
                beliDesaItaliaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaItaliaTampilan_p1.style.display = "none";
                beliKotaItaliaTampilan_p2.style.display = "none";
                exitItaliaTampilan.addEventListener("click", function close() {
                    italiaTampilan.style.display = "none"
                    exitItaliaTampilan.removeEventListener("click", close)
                })
            }
            negaraItalia.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 635 && posX_p2 == 635 && posY_p2 == 65 && posY_p2 == 65) ||
        (posX_p1 != 635 && posX_p2 != 635 || posY_p2 != 65 && posY_p2 != 65)) {
        negaraItalia.addEventListener("click", function closen() {
            italiaTampilan.style.display = "block"
            exitItaliaTampilan.style.display = "block"
            // TOMBOL BELI
            beliItaliaTampilan_p1.style.display = "none";
            beliItaliaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaItaliaTampilan_p1.style.display = "none";
            beliDesaItaliaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaItaliaTampilan_p1.style.display = "none";
            beliKotaItaliaTampilan_p2.style.display = "none";
            exitItaliaTampilan.addEventListener("click", function close() {
                italiaTampilan.style.display = "none"
                exitItaliaTampilan.removeEventListener("click", close)
            })
            negaraItalia.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_italia_dibeli && !italia_p1 && posX_p1 == 635 && posY_p1 == 65 && !italia_p1_kenaPajak
        && !italiaDesa1_p2 && !italiaDesa2_p2 && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
        moneyPlayer1 -= italia_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        italia_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_italia_dibeli && !italia_p1 && posX_p1 == 635 && posY_p1 == 65 && !italia_p1_kenaPajak
        && italiaDesa1_p2 && !italiaDesa2_p2 && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
        moneyPlayer1 -= italia_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        italia_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_italia_dibeli && !italia_p1 && posX_p1 == 635 && posY_p1 == 65 && !italia_p1_kenaPajak
        && italiaDesa1_p2 && italiaDesa2_p2 && !italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
        moneyPlayer1 -= italia_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        italia_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_italia_dibeli && !italia_p1 && posX_p1 == 635 && posY_p1 == 65 && !italia_p1_kenaPajak
        && italiaDesa1_p2 && italiaDesa2_p2 && italiaDesa3_p2 && !italiaKota1_p2 && !italiaKota2_p2) {
        moneyPlayer1 -= italia_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        italia_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_italia_dibeli && !italia_p1 && posX_p1 == 635 && posY_p1 == 65 && !italia_p1_kenaPajak
        && italiaDesa1_p2 && italiaDesa2_p2 && italiaDesa3_p2 && italiaKota1_p2 && !italiaKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - italia_pajak_desa*3 - italia_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        italia_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_italia_dibeli && !italia_p1 && posX_p1 == 635 && posY_p1 == 65 && !italia_p1_kenaPajak
        && italiaDesa1_p2 && italiaDesa2_p2 && italiaDesa3_p2 && italiaKota1_p2 && italiaKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - italia_pajak_desa*3 - italia_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        italia_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_italia_dibeli && !italia_p2 && posX_p2 == 635 && posY_p2 == 65 && !italia_p2_kenaPajak
        && !italiaDesa1_p1 && !italiaDesa2_p1 && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
        moneyPlayer2 -= italia_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        italia_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_italia_dibeli && !italia_p2 && posX_p2 == 635 && posY_p2 == 65 && !italia_p2_kenaPajak
        && italiaDesa1_p1 && !italiaDesa2_p1 && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
        moneyPlayer2 -= italia_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        italia_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_italia_dibeli && !italia_p2 && posX_p2 == 635 && posY_p2 == 65 && !italia_p2_kenaPajak
        && italiaDesa1_p1 && italiaDesa2_p1 && !italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
        moneyPlayer2 -= italia_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        italia_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_italia_dibeli && !italia_p2 && posX_p2 == 635 && posY_p2 == 65 && !italia_p2_kenaPajak
        && italiaDesa1_p1 && italiaDesa2_p1 && italiaDesa3_p1 && !italiaKota1_p1 && !italiaKota2_p1) {
        moneyPlayer2 -= italia_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        italia_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_italia_dibeli && !italia_p2 && posX_p2 == 635 && posY_p2 == 65 && !italia_p2_kenaPajak
        && italiaDesa1_p1 && italiaDesa2_p1 && italiaDesa3_p1 && italiaKota1_p1 && !italiaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - italia_pajak_desa*3 - italia_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        italia_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_italia_dibeli && !italia_p2 && posX_p2 == 635 && posY_p2 == 65 && !italia_p2_kenaPajak
        && italiaDesa1_p1 && italiaDesa2_p1 && italiaDesa3_p1 && italiaKota1_p1 && italiaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - italia_pajak_desa*3 - italia_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        italia_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 835 && posY_p1 > 65 || posX_p2 == 835 && posY_p2 > 65) {
        italia_p1_kenaPajak = false
        italia_p2_kenaPajak = false
    } 
}