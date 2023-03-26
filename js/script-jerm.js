function p12BeliJerman() {
    negaraJerman.removeEventListener("click", p12BeliJerman)
    if ((posX_p1 == 435 && posY_p1 == 65) && 
        (posX_p2 != 435 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraJerman.addEventListener("click", function closen() {
            jermanTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= jerman_only && !apakah_jerman_dibeli) {
                exitJermanTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliJermanTampilan_p1.style.display = "block";
                beliJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaJermanTampilan_p1.style.display = "none";
                beliDesaJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaJermanTampilan_p1.style.display = "none";
                beliKotaJermanTampilan_p2.style.display = "none";
                beliJermanTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= jerman_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_jerman_dibeli = true;
                    jerman_p1 = true
                    jerman_p2 = false
                    negaraJerman.style.border = "5px solid darkblue"
                    jermanTampilan.style.display = "none"
                    beliJermanTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_jerman_dibeli && jerman_p1) {
                exitJermanTampilan.style.display = "none"
                // TOMBOL JUAL
                beliJermanTampilan_p1.style.display = "block";
                beliJermanTampilan_p2.style.display = "none";
                // JUAL
                if (!jermanDesa1_p1 && !jermanDesa2_p1 && !jermanDesa3_p1 
                    && !jermanKota1_p1 && !jermanKota2_p1) {
                    beliJermanTampilan_p1.innerHTML = "Jual P1"
                    beliJermanTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += jerman_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_jerman_dibeli = false;
                        jerman_p1 = false
                        jerman_p2 = false
                        negaraJerman.style.border = "1px solid white"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p1.innerHTML = "Beli P1"
                        beliJermanTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (jermanDesa1_p1 && !jermanDesa2_p1 && !jermanDesa3_p1
                    && !jermanKota1_p1 && !jermanKota2_p1) {
                    beliJermanTampilan_p1.innerHTML = "Jual Desa P1"
                    beliJermanTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += jerman_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa1_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p1.innerHTML = "Jual P1"
                        beliJermanTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (jermanDesa1_p1 && jermanDesa2_p1 && !jermanDesa3_p1
                    && !jermanKota1_p1 && !jermanKota2_p1) {
                    beliJermanTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliJermanTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += jerman_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        jermanDesa1_p1 = true
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa2_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p1.innerHTML = "Jual Desa P1"
                        beliJermanTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (jermanDesa1_p1 && jermanDesa2_p1 && jermanDesa3_p1
                    && !jermanKota1_p1 && !jermanKota2_p1) {
                    beliJermanTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliJermanTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += jerman_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        jermanDesa1_p1 = true
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = true
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa3_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliJermanTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (jermanDesa1_p1 && jermanDesa2_p1 && jermanDesa3_p1
                    && jermanKota1_p1 && !jermanKota2_p1) {
                    beliJermanTampilan_p1.innerHTML = "Jual Kota P1"
                    beliJermanTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += jerman_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        jermanKota1_p1 = false
                        jermanKota1_p2 = false
                        jermanKota2_p1 = false
                        jermanKota2_p2 = false
                        kota1_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliJermanTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (jermanDesa1_p1 && jermanDesa2_p1 && jermanDesa3_p1
                    && jermanKota1_p1 && jermanKota2_p1) {
                    beliJermanTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliJermanTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += jerman_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        jermanKota1_p1 = true
                        jermanKota1_p2 = false
                        jermanKota2_p1 = false
                        jermanKota2_p2 = false
                        kota2_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliJermanTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= jerman_desa && !jermanDesa1_p1 && !jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaJermanTampilan_p1.style.display = "block";
                    beliDesaJermanTampilan_p2.style.display = "none";
                    beliDesaJermanTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= jerman_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        jermanDesa1_p1 = true
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa1_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliDesaJermanTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < jerman_desa && !jermanDesa1_p1 && !jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= jerman_desa && jermanDesa1_p1 && !jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaJermanTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaJermanTampilan_p1.style.display = "block";
                    beliDesaJermanTampilan_p2.style.display = "none";
                    beliDesaJermanTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= jerman_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        jermanDesa1_p1 = true
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = true
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa2_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliDesaJermanTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < jerman_desa && jermanDesa1_p1 && !jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= jerman_desa && jermanDesa1_p1 && jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaJermanTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaJermanTampilan_p1.style.display = "block";
                    beliDesaJermanTampilan_p2.style.display = "none";
                    beliDesaJermanTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= jerman_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        jermanDesa1_p1 = true
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = true
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = true
                        jermanDesa3_p2 = false
                        desa3_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliDesaJermanTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < jerman_desa && jermanDesa1_p1 && jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= jerman_kota && jermanDesa1_p1 && jermanDesa2_p1
                    && jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaJermanTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaJermanTampilan_p1.style.display = "block";
                    beliKotaJermanTampilan_p2.style.display = "none";
                    beliKotaJermanTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= jerman_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        jermanKota1_p1 = true
                        jermanKota1_p2 = false
                        jermanKota2_p1 = false
                        jermanKota2_p2 = false
                        kota1_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliKotaJermanTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < jerman_desa && jermanDesa1_p1 && jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaJermanTampilan_p1.style.display = "none";
                    beliKotaJermanTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= jerman_kota && jermanDesa1_p1 && jermanDesa2_p1
                    && jermanDesa3_p1 && jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaJermanTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaJermanTampilan_p1.style.display = "block";
                    beliKotaJermanTampilan_p2.style.display = "none";
                    beliKotaJermanTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= jerman_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        jermanKota1_p1 = true
                        jermanKota1_p2 = false
                        jermanKota2_p1 = true
                        jermanKota2_p2 = false
                        kota2_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliKotaJermanTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < jerman_desa && jermanDesa1_p1 && jermanDesa2_p1
                    && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaJermanTampilan_p1.style.display = "none";
                    beliKotaJermanTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_jerman_dibeli && !jerman_p1) {
                exitJermanTampilan.style.display = "block"
                // TOMBOL BELI
                beliJermanTampilan_p1.style.display = "none";
                beliJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaJermanTampilan_p1.style.display = "none";
                beliDesaJermanTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaJermanTampilan_p1.style.display = "none";
                beliKotaJermanTampilan_p2.style.display = "none";
                exitJermanTampilan.addEventListener("click", function close() {
                    jermanTampilan.style.display = "none"
                    exitJermanTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < jerman_only && !apakah_jerman_dibeli) {
                exitJermanTampilan.style.display = "block"
                // TOMBOL BELI
                beliJermanTampilan_p1.style.display = "none";
                beliJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaJermanTampilan_p1.style.display = "none";
                beliDesaJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaJermanTampilan_p1.style.display = "none";
                beliKotaJermanTampilan_p2.style.display = "none";
                exitJermanTampilan.addEventListener("click", function close() {
                    jermanTampilan.style.display = "none"
                    exitJermanTampilan.removeEventListener("click", close)
                })
            }
            negaraJerman.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 435 && posY_p2 == 65) && 
        (posX_p1 != 435 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraJerman.addEventListener("click", function closen() {
            jermanTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= jerman_only && !apakah_jerman_dibeli && !jerman_p2) {
                exitJermanTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliJermanTampilan_p1.style.display = "none";
                beliJermanTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaJermanTampilan_p1.style.display = "none";
                beliDesaJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaJermanTampilan_p1.style.display = "none";
                beliKotaJermanTampilan_p2.style.display = "none";
                beliJermanTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= jerman_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_jerman_dibeli = true;
                    jerman_p1 = false
                    jerman_p2 = true
                    negaraJerman.style.border = "5px solid darkred"
                    jermanTampilan.style.display = "none"
                    beliJermanTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_jerman_dibeli && jerman_p2) {
                exitJermanTampilan.style.display = "none"
                // TOMBOL JUAL
                beliJermanTampilan_p1.style.display = "none";
                beliJermanTampilan_p2.style.display = "block";
                // JUAL
                if (!jermanDesa1_p2 && !jermanDesa2_p2 && !jermanDesa3_p2 
                    && !jermanKota1_p2 && !jermanKota2_p2) {
                    beliJermanTampilan_p2.innerHTML = "Jual P2"
                    beliJermanTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += jerman_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_jerman_dibeli = false;
                        jerman_p1 = false
                        jerman_p2 = false
                        negaraJerman.style.border = "1px solid white"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p2.innerHTML = "Beli P2"
                        beliJermanTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (jermanDesa1_p2 && !jermanDesa2_p2 && !jermanDesa3_p2
                    && !jermanKota1_p2 && !jermanKota2_p2) {
                    beliJermanTampilan_p2.innerHTML = "Jual Desa P2"
                    beliJermanTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += jerman_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = false
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa1_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p2.innerHTML = "Jual P2"
                        beliJermanTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (jermanDesa1_p2 && jermanDesa2_p2 && !jermanDesa3_p2
                    && !jermanKota1_p2 && !jermanKota2_p2) {
                    beliJermanTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliJermanTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += jerman_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = true
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa2_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p2.innerHTML = "Jual Desa P2"
                        beliJermanTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (jermanDesa1_p2 && jermanDesa2_p2 && jermanDesa3_p2
                    && !jermanKota1_p2 && !jermanKota2_p2) {
                    beliJermanTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliJermanTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += jerman_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = true
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = true
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa3_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliJermanTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (jermanDesa1_p2 && jermanDesa2_p2 && jermanDesa3_p2
                    && jermanKota1_p2 && !jermanKota2_p2) {
                    beliJermanTampilan_p2.innerHTML = "Jual Kota P2"
                    beliJermanTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += jerman_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        jermanKota1_p1 = false
                        jermanKota1_p2 = false
                        jermanKota2_p1 = false
                        jermanKota2_p2 = false
                        kota1_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliJermanTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (jermanDesa1_p2 && jermanDesa2_p2 && jermanDesa3_p2
                    && jermanKota1_p2 && jermanKota2_p2) {
                    beliJermanTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliJermanTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += jerman_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        jermanKota1_p1 = false
                        jermanKota1_p2 = true
                        jermanKota2_p1 = false
                        jermanKota2_p2 = false
                        kota2_jerman.style.display = "none"
                        jermanTampilan.style.display = "none"
                        beliJermanTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliJermanTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= jerman_desa && !jermanDesa1_p2 && !jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "block";
                    beliDesaJermanTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= jerman_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = true
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = false
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa1_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliDesaJermanTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < jerman_desa && !jermanDesa1_p2 && !jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= jerman_desa && jermanDesa1_p2 && !jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaJermanTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "block";
                    beliDesaJermanTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= jerman_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = true
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = true
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = false
                        desa2_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliDesaJermanTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < jerman_desa && jermanDesa1_p2 && !jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= jerman_desa && jermanDesa1_p2 && jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaJermanTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "block";
                    beliDesaJermanTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= jerman_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        jermanDesa1_p1 = false
                        jermanDesa1_p2 = true
                        jermanDesa2_p1 = false
                        jermanDesa2_p2 = true
                        jermanDesa3_p1 = false
                        jermanDesa3_p2 = true
                        desa3_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliDesaJermanTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < jerman_desa && jermanDesa1_p2 && jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaJermanTampilan_p1.style.display = "none";
                    beliDesaJermanTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= jerman_kota && jermanDesa1_p2 && jermanDesa2_p2
                    && jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaJermanTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaJermanTampilan_p1.style.display = "none";
                    beliKotaJermanTampilan_p2.style.display = "block";
                    beliKotaJermanTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= jerman_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        jermanKota1_p1 = false
                        jermanKota1_p2 = true
                        jermanKota2_p1 = false
                        jermanKota2_p2 = false
                        kota1_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliKotaJermanTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < jerman_desa && jermanDesa1_p2 && jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaJermanTampilan_p1.style.display = "none";
                    beliKotaJermanTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= jerman_kota && jermanDesa1_p2 && jermanDesa2_p2
                    && jermanDesa3_p2 && jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaJermanTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaJermanTampilan_p1.style.display = "none";
                    beliKotaJermanTampilan_p2.style.display = "block";
                    beliKotaJermanTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= jerman_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        jermanKota1_p1 = false
                        jermanKota1_p2 = true
                        jermanKota2_p1 = false
                        jermanKota2_p2 = true
                        kota2_jerman.style.display = "block"
                        jermanTampilan.style.display = "none"
                        beliKotaJermanTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < jerman_desa && jermanDesa1_p2 && jermanDesa2_p2
                    && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaJermanTampilan_p1.style.display = "none";
                    beliKotaJermanTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_jerman_dibeli && !jerman_p2) {
                exitJermanTampilan.style.display = "block"
                // TOMBOL BELI
                beliJermanTampilan_p1.style.display = "none";
                beliJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaJermanTampilan_p1.style.display = "none";
                beliDesaJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaJermanTampilan_p1.style.display = "none";
                beliKotaJermanTampilan_p2.style.display = "none";
                exitJermanTampilan.addEventListener("click", function close() {
                    jermanTampilan.style.display = "none"
                    exitJermanTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < jerman_only && !apakah_jerman_dibeli) {
                exitJermanTampilan.style.display = "block"
                // TOMBOL BELI
                beliJermanTampilan_p1.style.display = "none";
                beliJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaJermanTampilan_p1.style.display = "none";
                beliDesaJermanTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaJermanTampilan_p1.style.display = "none";
                beliKotaJermanTampilan_p2.style.display = "none";
                exitJermanTampilan.addEventListener("click", function close() {
                    jermanTampilan.style.display = "none"
                    exitJermanTampilan.removeEventListener("click", close)
                })
            }
            negaraJerman.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 435 && posX_p2 == 435 && posY_p2 == 65 && posY_p2 == 65) ||
        (posX_p1 != 435 && posX_p2 != 435 || posY_p2 != 65 && posY_p2 != 65)) {
        negaraJerman.addEventListener("click", function closen() {
            jermanTampilan.style.display = "block"
            exitJermanTampilan.style.display = "block"
            // TOMBOL BELI
            beliJermanTampilan_p1.style.display = "none";
            beliJermanTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaJermanTampilan_p1.style.display = "none";
            beliDesaJermanTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaJermanTampilan_p1.style.display = "none";
            beliKotaJermanTampilan_p2.style.display = "none";
            exitJermanTampilan.addEventListener("click", function close() {
                jermanTampilan.style.display = "none"
                exitJermanTampilan.removeEventListener("click", close)
            })
            negaraJerman.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_jerman_dibeli && !jerman_p1 && posX_p1 == 435 && posY_p1 == 65 && !jerman_p1_kenaPajak
        && !jermanDesa1_p2 && !jermanDesa2_p2 && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
        moneyPlayer1 -= jerman_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        jerman_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_jerman_dibeli && !jerman_p1 && posX_p1 == 435 && posY_p1 == 65 && !jerman_p1_kenaPajak
        && jermanDesa1_p2 && !jermanDesa2_p2 && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
        moneyPlayer1 -= jerman_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        jerman_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_jerman_dibeli && !jerman_p1 && posX_p1 == 435 && posY_p1 == 65 && !jerman_p1_kenaPajak
        && jermanDesa1_p2 && jermanDesa2_p2 && !jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
        moneyPlayer1 -= jerman_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        jerman_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_jerman_dibeli && !jerman_p1 && posX_p1 == 435 && posY_p1 == 65 && !jerman_p1_kenaPajak
        && jermanDesa1_p2 && jermanDesa2_p2 && jermanDesa3_p2 && !jermanKota1_p2 && !jermanKota2_p2) {
        moneyPlayer1 -= jerman_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        jerman_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_jerman_dibeli && !jerman_p1 && posX_p1 == 435 && posY_p1 == 65 && !jerman_p1_kenaPajak
        && jermanDesa1_p2 && jermanDesa2_p2 && jermanDesa3_p2 && jermanKota1_p2 && !jermanKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - jerman_pajak_desa*3 - jerman_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        jerman_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_jerman_dibeli && !jerman_p1 && posX_p1 == 435 && posY_p1 == 65 && !jerman_p1_kenaPajak
        && jermanDesa1_p2 && jermanDesa2_p2 && jermanDesa3_p2 && jermanKota1_p2 && jermanKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - jerman_pajak_desa*3 - jerman_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        jerman_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_jerman_dibeli && !jerman_p2 && posX_p2 == 435 && posY_p2 == 65 && !jerman_p2_kenaPajak
        && !jermanDesa1_p1 && !jermanDesa2_p1 && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
        moneyPlayer2 -= jerman_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        jerman_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_jerman_dibeli && !jerman_p2 && posX_p2 == 435 && posY_p2 == 65 && !jerman_p2_kenaPajak
        && jermanDesa1_p1 && !jermanDesa2_p1 && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
        moneyPlayer2 -= jerman_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        jerman_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_jerman_dibeli && !jerman_p2 && posX_p2 == 435 && posY_p2 == 65 && !jerman_p2_kenaPajak
        && jermanDesa1_p1 && jermanDesa2_p1 && !jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
        moneyPlayer2 -= jerman_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        jerman_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_jerman_dibeli && !jerman_p2 && posX_p2 == 435 && posY_p2 == 65 && !jerman_p2_kenaPajak
        && jermanDesa1_p1 && jermanDesa2_p1 && jermanDesa3_p1 && !jermanKota1_p1 && !jermanKota2_p1) {
        moneyPlayer2 -= jerman_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        jerman_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_jerman_dibeli && !jerman_p2 && posX_p2 == 435 && posY_p2 == 65 && !jerman_p2_kenaPajak
        && jermanDesa1_p1 && jermanDesa2_p1 && jermanDesa3_p1 && jermanKota1_p1 && !jermanKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - jerman_pajak_desa*3 - jerman_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        jerman_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_jerman_dibeli && !jerman_p2 && posX_p2 == 435 && posY_p2 == 65 && !jerman_p2_kenaPajak
        && jermanDesa1_p1 && jermanDesa2_p1 && jermanDesa3_p1 && jermanKota1_p1 && jermanKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - jerman_pajak_desa*3 - jerman_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        jerman_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 835 && posY_p1 > 65 || posX_p2 == 835 && posY_p2 > 65) {
        jerman_p1_kenaPajak = false
        jerman_p2_kenaPajak = false
    } 
}