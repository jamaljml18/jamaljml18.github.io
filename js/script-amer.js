function p12BeliAmerika() {
    negaraAmerika.removeEventListener("click", p12BeliAmerika)
    if ((posY_p1 == 465 && posX_p1 == 835) && 
        (posY_p2 != 465 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraAmerika.addEventListener("click", function closen() {
            amerikaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= amerika_only && !apakah_amerika_dibeli) {
                exitAmerikaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliAmerikaTampilan_p1.style.display = "block";
                beliAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAmerikaTampilan_p1.style.display = "none";
                beliDesaAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAmerikaTampilan_p1.style.display = "none";
                beliKotaAmerikaTampilan_p2.style.display = "none";
                beliAmerikaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= amerika_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_amerika_dibeli = true;
                    amerika_p1 = true
                    amerika_p2 = false
                    negaraAmerika.style.border = "5px solid darkblue"
                    amerikaTampilan.style.display = "none"
                    beliAmerikaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_amerika_dibeli && amerika_p1) {
                exitAmerikaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliAmerikaTampilan_p1.style.display = "block";
                beliAmerikaTampilan_p2.style.display = "none";
                // JUAL
                if (!amerikaDesa1_p1 && !amerikaDesa2_p1 && !amerikaDesa3_p1 
                    && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    beliAmerikaTampilan_p1.innerHTML = "Jual P1"
                    beliAmerikaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += amerika_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_amerika_dibeli = false;
                        amerika_p1 = false
                        amerika_p2 = false
                        negaraAmerika.style.border = "1px solid white"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p1.innerHTML = "Beli P1"
                        beliAmerikaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (amerikaDesa1_p1 && !amerikaDesa2_p1 && !amerikaDesa3_p1
                    && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    beliAmerikaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliAmerikaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += amerika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa1_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p1.innerHTML = "Jual P1"
                        beliAmerikaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (amerikaDesa1_p1 && amerikaDesa2_p1 && !amerikaDesa3_p1
                    && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    beliAmerikaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliAmerikaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += amerika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        amerikaDesa1_p1 = true
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa2_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliAmerikaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (amerikaDesa1_p1 && amerikaDesa2_p1 && amerikaDesa3_p1
                    && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    beliAmerikaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliAmerikaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += amerika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        amerikaDesa1_p1 = true
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = true
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa3_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliAmerikaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (amerikaDesa1_p1 && amerikaDesa2_p1 && amerikaDesa3_p1
                    && amerikaKota1_p1 && !amerikaKota2_p1) {
                    beliAmerikaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliAmerikaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += amerika_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        amerikaKota1_p1 = false
                        amerikaKota1_p2 = false
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = false
                        kota1_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliAmerikaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (amerikaDesa1_p1 && amerikaDesa2_p1 && amerikaDesa3_p1
                    && amerikaKota1_p1 && amerikaKota2_p1) {
                    beliAmerikaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliAmerikaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += amerika_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        amerikaKota1_p1 = true
                        amerikaKota1_p2 = false
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = false
                        kota2_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliAmerikaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= amerika_desa && !amerikaDesa1_p1 && !amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaAmerikaTampilan_p1.style.display = "block";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                    beliDesaAmerikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= amerika_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        amerikaDesa1_p1 = true
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa1_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliDesaAmerikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < amerika_desa && !amerikaDesa1_p1 && !amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= amerika_desa && amerikaDesa1_p1 && !amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaAmerikaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaAmerikaTampilan_p1.style.display = "block";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                    beliDesaAmerikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= amerika_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        amerikaDesa1_p1 = true
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = true
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa2_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliDesaAmerikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < amerika_desa && amerikaDesa1_p1 && !amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= amerika_desa && amerikaDesa1_p1 && amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaAmerikaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaAmerikaTampilan_p1.style.display = "block";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                    beliDesaAmerikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= amerika_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        amerikaDesa1_p1 = true
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = true
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = true
                        amerikaDesa3_p2 = false
                        desa3_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliDesaAmerikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < amerika_desa && amerikaDesa1_p1 && amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= amerika_kota && amerikaDesa1_p1 && amerikaDesa2_p1
                    && amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaAmerikaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaAmerikaTampilan_p1.style.display = "block";
                    beliKotaAmerikaTampilan_p2.style.display = "none";
                    beliKotaAmerikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= amerika_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        amerikaKota1_p1 = true
                        amerikaKota1_p2 = false
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = false
                        kota1_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliKotaAmerikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < amerika_desa && amerikaDesa1_p1 && amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaAmerikaTampilan_p1.style.display = "none";
                    beliKotaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= amerika_kota && amerikaDesa1_p1 && amerikaDesa2_p1
                    && amerikaDesa3_p1 && amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaAmerikaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaAmerikaTampilan_p1.style.display = "block";
                    beliKotaAmerikaTampilan_p2.style.display = "none";
                    beliKotaAmerikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= amerika_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        amerikaKota1_p1 = true
                        amerikaKota1_p2 = false
                        amerikaKota2_p1 = true
                        amerikaKota2_p2 = false
                        kota2_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliKotaAmerikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < amerika_desa && amerikaDesa1_p1 && amerikaDesa2_p1
                    && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaAmerikaTampilan_p1.style.display = "none";
                    beliKotaAmerikaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_amerika_dibeli && !amerika_p1) {
                exitAmerikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAmerikaTampilan_p1.style.display = "none";
                beliAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAmerikaTampilan_p1.style.display = "none";
                beliDesaAmerikaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaAmerikaTampilan_p1.style.display = "none";
                beliKotaAmerikaTampilan_p2.style.display = "none";
                exitAmerikaTampilan.addEventListener("click", function close() {
                    amerikaTampilan.style.display = "none"
                    exitAmerikaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < amerika_only && !apakah_amerika_dibeli) {
                exitAmerikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAmerikaTampilan_p1.style.display = "none";
                beliAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAmerikaTampilan_p1.style.display = "none";
                beliDesaAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAmerikaTampilan_p1.style.display = "none";
                beliKotaAmerikaTampilan_p2.style.display = "none";
                exitAmerikaTampilan.addEventListener("click", function close() {
                    amerikaTampilan.style.display = "none"
                    exitAmerikaTampilan.removeEventListener("click", close)
                })
            }
            negaraAmerika.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 465 && posX_p2 == 835) && 
        (posY_p1 != 465 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraAmerika.addEventListener("click", function closen() {
            amerikaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= amerika_only && !apakah_amerika_dibeli && !amerika_p2) {
                exitAmerikaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliAmerikaTampilan_p1.style.display = "none";
                beliAmerikaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaAmerikaTampilan_p1.style.display = "none";
                beliDesaAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAmerikaTampilan_p1.style.display = "none";
                beliKotaAmerikaTampilan_p2.style.display = "none";
                beliAmerikaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= amerika_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_amerika_dibeli = true;
                    amerika_p1 = false
                    amerika_p2 = true
                    negaraAmerika.style.border = "5px solid darkred"
                    amerikaTampilan.style.display = "none"
                    beliAmerikaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_amerika_dibeli && amerika_p2) {
                exitAmerikaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliAmerikaTampilan_p1.style.display = "none";
                beliAmerikaTampilan_p2.style.display = "block";
                // JUAL
                if (!amerikaDesa1_p2 && !amerikaDesa2_p2 && !amerikaDesa3_p2 
                    && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    beliAmerikaTampilan_p2.innerHTML = "Jual P2"
                    beliAmerikaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += amerika_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_amerika_dibeli = false;
                        amerika_p1 = false
                        amerika_p2 = false
                        negaraAmerika.style.border = "1px solid white"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p2.innerHTML = "Beli P2"
                        beliAmerikaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (amerikaDesa1_p2 && !amerikaDesa2_p2 && !amerikaDesa3_p2
                    && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    beliAmerikaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliAmerikaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += amerika_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = false
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa1_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p2.innerHTML = "Jual P2"
                        beliAmerikaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (amerikaDesa1_p2 && amerikaDesa2_p2 && !amerikaDesa3_p2
                    && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    beliAmerikaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliAmerikaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += amerika_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = true
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa2_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliAmerikaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (amerikaDesa1_p2 && amerikaDesa2_p2 && amerikaDesa3_p2
                    && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    beliAmerikaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliAmerikaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += amerika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = true
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = true
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa3_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliAmerikaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (amerikaDesa1_p2 && amerikaDesa2_p2 && amerikaDesa3_p2
                    && amerikaKota1_p2 && !amerikaKota2_p2) {
                    beliAmerikaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliAmerikaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += amerika_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        amerikaKota1_p1 = false
                        amerikaKota1_p2 = false
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = false
                        kota1_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliAmerikaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (amerikaDesa1_p2 && amerikaDesa2_p2 && amerikaDesa3_p2
                    && amerikaKota1_p2 && amerikaKota2_p2) {
                    beliAmerikaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliAmerikaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += amerika_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        amerikaKota1_p1 = false
                        amerikaKota1_p2 = true
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = false
                        kota2_amerika.style.display = "none"
                        amerikaTampilan.style.display = "none"
                        beliAmerikaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliAmerikaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= amerika_desa && !amerikaDesa1_p2 && !amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "block";
                    beliDesaAmerikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= amerika_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = true
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = false
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa1_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliDesaAmerikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < amerika_desa && !amerikaDesa1_p2 && !amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= amerika_desa && amerikaDesa1_p2 && !amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaAmerikaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "block";
                    beliDesaAmerikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= amerika_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = true
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = true
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = false
                        desa2_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliDesaAmerikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < amerika_desa && amerikaDesa1_p2 && !amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= amerika_desa && amerikaDesa1_p2 && amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaAmerikaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "block";
                    beliDesaAmerikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= amerika_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        amerikaDesa1_p1 = false
                        amerikaDesa1_p2 = true
                        amerikaDesa2_p1 = false
                        amerikaDesa2_p2 = true
                        amerikaDesa3_p1 = false
                        amerikaDesa3_p2 = true
                        desa3_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliDesaAmerikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < amerika_desa && amerikaDesa1_p2 && amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaAmerikaTampilan_p1.style.display = "none";
                    beliDesaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= amerika_kota && amerikaDesa1_p2 && amerikaDesa2_p2
                    && amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaAmerikaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaAmerikaTampilan_p1.style.display = "none";
                    beliKotaAmerikaTampilan_p2.style.display = "block";
                    beliKotaAmerikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= amerika_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        amerikaKota1_p1 = false
                        amerikaKota1_p2 = true
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = false
                        kota1_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliKotaAmerikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < amerika_desa && amerikaDesa1_p2 && amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaAmerikaTampilan_p1.style.display = "none";
                    beliKotaAmerikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= amerika_kota && amerikaDesa1_p2 && amerikaDesa2_p2
                    && amerikaDesa3_p2 && amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaAmerikaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaAmerikaTampilan_p1.style.display = "none";
                    beliKotaAmerikaTampilan_p2.style.display = "block";
                    beliKotaAmerikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= amerika_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        amerikaKota1_p1 = false
                        amerikaKota1_p2 = true
                        amerikaKota2_p1 = false
                        amerikaKota2_p2 = true
                        kota2_amerika.style.display = "block"
                        amerikaTampilan.style.display = "none"
                        beliKotaAmerikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < amerika_desa && amerikaDesa1_p2 && amerikaDesa2_p2
                    && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaAmerikaTampilan_p1.style.display = "none";
                    beliKotaAmerikaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_amerika_dibeli && !amerika_p2) {
                exitAmerikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAmerikaTampilan_p1.style.display = "none";
                beliAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAmerikaTampilan_p1.style.display = "none";
                beliDesaAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAmerikaTampilan_p1.style.display = "none";
                beliKotaAmerikaTampilan_p2.style.display = "none";
                exitAmerikaTampilan.addEventListener("click", function close() {
                    amerikaTampilan.style.display = "none"
                    exitAmerikaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < amerika_only && !apakah_amerika_dibeli) {
                exitAmerikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAmerikaTampilan_p1.style.display = "none";
                beliAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAmerikaTampilan_p1.style.display = "none";
                beliDesaAmerikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAmerikaTampilan_p1.style.display = "none";
                beliKotaAmerikaTampilan_p2.style.display = "none";
                exitAmerikaTampilan.addEventListener("click", function close() {
                    amerikaTampilan.style.display = "none"
                    exitAmerikaTampilan.removeEventListener("click", close)
                })
            }
            negaraAmerika.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 835 && posX_p2 == 835 && posY_p1 == 465 && posY_p2 == 465) ||
        (posX_p1 != 835 && posX_p2 != 835 || posY_p1 != 465 && posY_p2 != 465)) {
        negaraAmerika.addEventListener("click", function closen() {
            amerikaTampilan.style.display = "block"
            exitAmerikaTampilan.style.display = "block"
            // TOMBOL BELI
            beliAmerikaTampilan_p1.style.display = "none";
            beliAmerikaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaAmerikaTampilan_p1.style.display = "none";
            beliDesaAmerikaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaAmerikaTampilan_p1.style.display = "none";
            beliKotaAmerikaTampilan_p2.style.display = "none";
            exitAmerikaTampilan.addEventListener("click", function close() {
                amerikaTampilan.style.display = "none"
                exitAmerikaTampilan.removeEventListener("click", close)
            })
            negaraAmerika.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_amerika_dibeli && !amerika_p1 && posX_p1 == 335 && posY_p1 == 465 && !amerika_p1_kenaPajak
        && !amerikaDesa1_p2 && !amerikaDesa2_p2 && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
        moneyPlayer1 -= amerika_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        amerika_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_amerika_dibeli && !amerika_p1 && posX_p1 == 835 && posY_p1 == 465 && !amerika_p1_kenaPajak
        && amerikaDesa1_p2 && !amerikaDesa2_p2 && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
        moneyPlayer1 -= amerika_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        amerika_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_amerika_dibeli && !amerika_p1 && posX_p1 == 835 && posY_p1 == 465 && !amerika_p1_kenaPajak
        && amerikaDesa1_p2 && amerikaDesa2_p2 && !amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
        moneyPlayer1 -= amerika_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        amerika_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_amerika_dibeli && !amerika_p1 && posX_p1 == 835 && posY_p1 == 465 && !amerika_p1_kenaPajak
        && amerikaDesa1_p2 && amerikaDesa2_p2 && amerikaDesa3_p2 && !amerikaKota1_p2 && !amerikaKota2_p2) {
        moneyPlayer1 -= amerika_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        amerika_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_amerika_dibeli && !amerika_p1 && posX_p1 == 835 && posY_p1 == 465 && !amerika_p1_kenaPajak
        && amerikaDesa1_p2 && amerikaDesa2_p2 && amerikaDesa3_p2 && amerikaKota1_p2 && !amerikaKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - amerika_pajak_desa*3 - amerika_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        amerika_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_amerika_dibeli && !amerika_p1 && posX_p1 == 835 && posY_p1 == 465 && !amerika_p1_kenaPajak
        && amerikaDesa1_p2 && amerikaDesa2_p2 && amerikaDesa3_p2 && amerikaKota1_p2 && amerikaKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - amerika_pajak_desa*3 - amerika_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        amerika_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_amerika_dibeli && !amerika_p2 && posX_p2 == 835 && posY_p2 == 465 && !amerika_p2_kenaPajak
        && !amerikaDesa1_p1 && !amerikaDesa2_p1 && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
        moneyPlayer2 -= amerika_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        amerika_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_amerika_dibeli && !amerika_p2 && posX_p2 == 835 && posY_p2 == 465 && !amerika_p2_kenaPajak
        && amerikaDesa1_p1 && !amerikaDesa2_p1 && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
        moneyPlayer2 -= amerika_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        amerika_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_amerika_dibeli && !amerika_p2 && posX_p2 == 835 && posY_p2 == 465 && !amerika_p2_kenaPajak
        && amerikaDesa1_p1 && amerikaDesa2_p1 && !amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
        moneyPlayer2 -= amerika_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        amerika_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_amerika_dibeli && !amerika_p2 && posX_p2 == 835 && posY_p2 == 465 && !amerika_p2_kenaPajak
        && amerikaDesa1_p1 && amerikaDesa2_p1 && amerikaDesa3_p1 && !amerikaKota1_p1 && !amerikaKota2_p1) {
        moneyPlayer2 -= amerika_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        amerika_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_amerika_dibeli && !amerika_p2 && posX_p2 == 835 && posY_p2 == 465 && !amerika_p2_kenaPajak
        && amerikaDesa1_p1 && amerikaDesa2_p1 && amerikaDesa3_p1 && amerikaKota1_p1 && !amerikaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - amerika_pajak_desa*3 - amerika_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        amerika_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_amerika_dibeli && !amerika_p2 && posX_p2 == 835 && posY_p2 == 465 && !amerika_p2_kenaPajak
        && amerikaDesa1_p1 && amerikaDesa2_p1 && amerikaDesa3_p1 && amerikaKota1_p1 && amerikaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - amerika_pajak_desa*3 - amerika_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        amerika_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 < 835 && posY_p1 == 565 || posX_p2 < 835 && posY_p2 == 565) {
        amerika_p1_kenaPajak = false
        amerika_p2_kenaPajak = false
    } 
}