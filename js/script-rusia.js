function p12BeliRusia() {
    negaraRusia.removeEventListener("click", p12BeliRusia)
    if ((posX_p1 == 535 && posY_p1 == 65) && 
        (posX_p2 != 535 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraRusia.addEventListener("click", function closen() {
            rusiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= rusia_only && !apakah_rusia_dibeli) {
                exitRusiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliRusiaTampilan_p1.style.display = "block";
                beliRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaRusiaTampilan_p1.style.display = "none";
                beliDesaRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaRusiaTampilan_p1.style.display = "none";
                beliKotaRusiaTampilan_p2.style.display = "none";
                beliRusiaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= rusia_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_rusia_dibeli = true;
                    rusia_p1 = true
                    rusia_p2 = false
                    negaraRusia.style.border = "5px solid darkblue"
                    rusiaTampilan.style.display = "none"
                    beliRusiaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_rusia_dibeli && rusia_p1) {
                exitRusiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliRusiaTampilan_p1.style.display = "block";
                beliRusiaTampilan_p2.style.display = "none";
                // JUAL
                if (!rusiaDesa1_p1 && !rusiaDesa2_p1 && !rusiaDesa3_p1 
                    && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    beliRusiaTampilan_p1.innerHTML = "Jual P1"
                    beliRusiaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += rusia_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_rusia_dibeli = false;
                        rusia_p1 = false
                        rusia_p2 = false
                        negaraRusia.style.border = "1px solid white"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p1.innerHTML = "Beli P1"
                        beliRusiaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (rusiaDesa1_p1 && !rusiaDesa2_p1 && !rusiaDesa3_p1
                    && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    beliRusiaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliRusiaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += rusia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa1_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p1.innerHTML = "Jual P1"
                        beliRusiaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (rusiaDesa1_p1 && rusiaDesa2_p1 && !rusiaDesa3_p1
                    && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    beliRusiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliRusiaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += rusia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        rusiaDesa1_p1 = true
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa2_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliRusiaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (rusiaDesa1_p1 && rusiaDesa2_p1 && rusiaDesa3_p1
                    && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    beliRusiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliRusiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += rusia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        rusiaDesa1_p1 = true
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = true
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa3_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliRusiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (rusiaDesa1_p1 && rusiaDesa2_p1 && rusiaDesa3_p1
                    && rusiaKota1_p1 && !rusiaKota2_p1) {
                    beliRusiaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliRusiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += rusia_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        rusiaKota1_p1 = false
                        rusiaKota1_p2 = false
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = false
                        kota1_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliRusiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (rusiaDesa1_p1 && rusiaDesa2_p1 && rusiaDesa3_p1
                    && rusiaKota1_p1 && rusiaKota2_p1) {
                    beliRusiaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliRusiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += rusia_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        rusiaKota1_p1 = true
                        rusiaKota1_p2 = false
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = false
                        kota2_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliRusiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= rusia_desa && !rusiaDesa1_p1 && !rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaRusiaTampilan_p1.style.display = "block";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                    beliDesaRusiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= rusia_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        rusiaDesa1_p1 = true
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa1_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliDesaRusiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < rusia_desa && !rusiaDesa1_p1 && !rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= rusia_desa && rusiaDesa1_p1 && !rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaRusiaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaRusiaTampilan_p1.style.display = "block";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                    beliDesaRusiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= rusia_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        rusiaDesa1_p1 = true
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = true
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa2_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliDesaRusiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < rusia_desa && rusiaDesa1_p1 && !rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= rusia_desa && rusiaDesa1_p1 && rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaRusiaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaRusiaTampilan_p1.style.display = "block";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                    beliDesaRusiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= rusia_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        rusiaDesa1_p1 = true
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = true
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = true
                        rusiaDesa3_p2 = false
                        desa3_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliDesaRusiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < rusia_desa && rusiaDesa1_p1 && rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= rusia_kota && rusiaDesa1_p1 && rusiaDesa2_p1
                    && rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaRusiaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaRusiaTampilan_p1.style.display = "block";
                    beliKotaRusiaTampilan_p2.style.display = "none";
                    beliKotaRusiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= rusia_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        rusiaKota1_p1 = true
                        rusiaKota1_p2 = false
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = false
                        kota1_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliKotaRusiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < rusia_desa && rusiaDesa1_p1 && rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaRusiaTampilan_p1.style.display = "none";
                    beliKotaRusiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= rusia_kota && rusiaDesa1_p1 && rusiaDesa2_p1
                    && rusiaDesa3_p1 && rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaRusiaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaRusiaTampilan_p1.style.display = "block";
                    beliKotaRusiaTampilan_p2.style.display = "none";
                    beliKotaRusiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= rusia_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        rusiaKota1_p1 = true
                        rusiaKota1_p2 = false
                        rusiaKota2_p1 = true
                        rusiaKota2_p2 = false
                        kota2_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliKotaRusiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < rusia_desa && rusiaDesa1_p1 && rusiaDesa2_p1
                    && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaRusiaTampilan_p1.style.display = "none";
                    beliKotaRusiaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_rusia_dibeli && !rusia_p1) {
                exitRusiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliRusiaTampilan_p1.style.display = "none";
                beliRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaRusiaTampilan_p1.style.display = "none";
                beliDesaRusiaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaRusiaTampilan_p1.style.display = "none";
                beliKotaRusiaTampilan_p2.style.display = "none";
                exitRusiaTampilan.addEventListener("click", function close() {
                    rusiaTampilan.style.display = "none"
                    exitRusiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < rusia_only && !apakah_rusia_dibeli) {
                exitRusiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliRusiaTampilan_p1.style.display = "none";
                beliRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaRusiaTampilan_p1.style.display = "none";
                beliDesaRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaRusiaTampilan_p1.style.display = "none";
                beliKotaRusiaTampilan_p2.style.display = "none";
                exitRusiaTampilan.addEventListener("click", function close() {
                    rusiaTampilan.style.display = "none"
                    exitRusiaTampilan.removeEventListener("click", close)
                })
            }
            negaraRusia.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 535 && posY_p2 == 65) && 
        (posX_p1 != 535 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraRusia.addEventListener("click", function closen() {
            rusiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= rusia_only && !apakah_rusia_dibeli && !rusia_p2) {
                exitRusiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliRusiaTampilan_p1.style.display = "none";
                beliRusiaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaRusiaTampilan_p1.style.display = "none";
                beliDesaRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaRusiaTampilan_p1.style.display = "none";
                beliKotaRusiaTampilan_p2.style.display = "none";
                beliRusiaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= rusia_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_rusia_dibeli = true;
                    rusia_p1 = false
                    rusia_p2 = true
                    negaraRusia.style.border = "5px solid darkred"
                    rusiaTampilan.style.display = "none"
                    beliRusiaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_rusia_dibeli && rusia_p2) {
                exitRusiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliRusiaTampilan_p1.style.display = "none";
                beliRusiaTampilan_p2.style.display = "block";
                // JUAL
                if (!rusiaDesa1_p2 && !rusiaDesa2_p2 && !rusiaDesa3_p2 
                    && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    beliRusiaTampilan_p2.innerHTML = "Jual P2"
                    beliRusiaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += rusia_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_rusia_dibeli = false;
                        rusia_p1 = false
                        rusia_p2 = false
                        negaraRusia.style.border = "1px solid white"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p2.innerHTML = "Beli P2"
                        beliRusiaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (rusiaDesa1_p2 && !rusiaDesa2_p2 && !rusiaDesa3_p2
                    && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    beliRusiaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliRusiaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += rusia_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = false
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa1_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p2.innerHTML = "Jual P2"
                        beliRusiaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (rusiaDesa1_p2 && rusiaDesa2_p2 && !rusiaDesa3_p2
                    && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    beliRusiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliRusiaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += rusia_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = true
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa2_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliRusiaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (rusiaDesa1_p2 && rusiaDesa2_p2 && rusiaDesa3_p2
                    && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    beliRusiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliRusiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += rusia_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = true
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = true
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa3_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliRusiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (rusiaDesa1_p2 && rusiaDesa2_p2 && rusiaDesa3_p2
                    && rusiaKota1_p2 && !rusiaKota2_p2) {
                    beliRusiaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliRusiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += rusia_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        rusiaKota1_p1 = false
                        rusiaKota1_p2 = false
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = false
                        kota1_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliRusiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (rusiaDesa1_p2 && rusiaDesa2_p2 && rusiaDesa3_p2
                    && rusiaKota1_p2 && rusiaKota2_p2) {
                    beliRusiaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliRusiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += rusia_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        rusiaKota1_p1 = false
                        rusiaKota1_p2 = true
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = false
                        kota2_rusia.style.display = "none"
                        rusiaTampilan.style.display = "none"
                        beliRusiaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliRusiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= rusia_desa && !rusiaDesa1_p2 && !rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "block";
                    beliDesaRusiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= rusia_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = true
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = false
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa1_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliDesaRusiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < rusia_desa && !rusiaDesa1_p2 && !rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= rusia_desa && rusiaDesa1_p2 && !rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaRusiaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "block";
                    beliDesaRusiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= rusia_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = true
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = true
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = false
                        desa2_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliDesaRusiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < rusia_desa && rusiaDesa1_p2 && !rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= rusia_desa && rusiaDesa1_p2 && rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaRusiaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "block";
                    beliDesaRusiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= rusia_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        rusiaDesa1_p1 = false
                        rusiaDesa1_p2 = true
                        rusiaDesa2_p1 = false
                        rusiaDesa2_p2 = true
                        rusiaDesa3_p1 = false
                        rusiaDesa3_p2 = true
                        desa3_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliDesaRusiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < rusia_desa && rusiaDesa1_p2 && rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaRusiaTampilan_p1.style.display = "none";
                    beliDesaRusiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= rusia_kota && rusiaDesa1_p2 && rusiaDesa2_p2
                    && rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaRusiaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaRusiaTampilan_p1.style.display = "none";
                    beliKotaRusiaTampilan_p2.style.display = "block";
                    beliKotaRusiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= rusia_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        rusiaKota1_p1 = false
                        rusiaKota1_p2 = true
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = false
                        kota1_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliKotaRusiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < rusia_desa && rusiaDesa1_p2 && rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaRusiaTampilan_p1.style.display = "none";
                    beliKotaRusiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= rusia_kota && rusiaDesa1_p2 && rusiaDesa2_p2
                    && rusiaDesa3_p2 && rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaRusiaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaRusiaTampilan_p1.style.display = "none";
                    beliKotaRusiaTampilan_p2.style.display = "block";
                    beliKotaRusiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= rusia_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        rusiaKota1_p1 = false
                        rusiaKota1_p2 = true
                        rusiaKota2_p1 = false
                        rusiaKota2_p2 = true
                        kota2_rusia.style.display = "block"
                        rusiaTampilan.style.display = "none"
                        beliKotaRusiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < rusia_desa && rusiaDesa1_p2 && rusiaDesa2_p2
                    && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaRusiaTampilan_p1.style.display = "none";
                    beliKotaRusiaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_rusia_dibeli && !rusia_p2) {
                exitRusiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliRusiaTampilan_p1.style.display = "none";
                beliRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaRusiaTampilan_p1.style.display = "none";
                beliDesaRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaRusiaTampilan_p1.style.display = "none";
                beliKotaRusiaTampilan_p2.style.display = "none";
                exitRusiaTampilan.addEventListener("click", function close() {
                    rusiaTampilan.style.display = "none"
                    exitRusiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < rusia_only && !apakah_rusia_dibeli) {
                exitRusiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliRusiaTampilan_p1.style.display = "none";
                beliRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaRusiaTampilan_p1.style.display = "none";
                beliDesaRusiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaRusiaTampilan_p1.style.display = "none";
                beliKotaRusiaTampilan_p2.style.display = "none";
                exitRusiaTampilan.addEventListener("click", function close() {
                    rusiaTampilan.style.display = "none"
                    exitRusiaTampilan.removeEventListener("click", close)
                })
            }
            negaraRusia.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 535 && posX_p2 == 535 && posY_p2 == 65 && posY_p2 == 65) ||
        (posX_p1 != 535 && posX_p2 != 535 || posY_p2 != 65 && posY_p2 != 65)) {
        negaraRusia.addEventListener("click", function closen() {
            rusiaTampilan.style.display = "block"
            exitRusiaTampilan.style.display = "block"
            // TOMBOL BELI
            beliRusiaTampilan_p1.style.display = "none";
            beliRusiaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaRusiaTampilan_p1.style.display = "none";
            beliDesaRusiaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaRusiaTampilan_p1.style.display = "none";
            beliKotaRusiaTampilan_p2.style.display = "none";
            exitRusiaTampilan.addEventListener("click", function close() {
                rusiaTampilan.style.display = "none"
                exitRusiaTampilan.removeEventListener("click", close)
            })
            negaraRusia.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_rusia_dibeli && !rusia_p1 && posX_p1 == 535 && posY_p1 == 65 && !rusia_p1_kenaPajak
        && !rusiaDesa1_p2 && !rusiaDesa2_p2 && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
        moneyPlayer1 -= rusia_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        rusia_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_rusia_dibeli && !rusia_p1 && posX_p1 == 535 && posY_p1 == 65 && !rusia_p1_kenaPajak
        && rusiaDesa1_p2 && !rusiaDesa2_p2 && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
        moneyPlayer1 -= rusia_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        rusia_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_rusia_dibeli && !rusia_p1 && posX_p1 == 535 && posY_p1 == 65 && !rusia_p1_kenaPajak
        && rusiaDesa1_p2 && rusiaDesa2_p2 && !rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
        moneyPlayer1 -= rusia_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        rusia_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_rusia_dibeli && !rusia_p1 && posX_p1 == 535 && posY_p1 == 65 && !rusia_p1_kenaPajak
        && rusiaDesa1_p2 && rusiaDesa2_p2 && rusiaDesa3_p2 && !rusiaKota1_p2 && !rusiaKota2_p2) {
        moneyPlayer1 -= rusia_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        rusia_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_rusia_dibeli && !rusia_p1 && posX_p1 == 535 && posY_p1 == 65 && !rusia_p1_kenaPajak
        && rusiaDesa1_p2 && rusiaDesa2_p2 && rusiaDesa3_p2 && rusiaKota1_p2 && !rusiaKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - rusia_pajak_desa*3 - rusia_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        rusia_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_rusia_dibeli && !rusia_p1 && posX_p1 == 535 && posY_p1 == 65 && !rusia_p1_kenaPajak
        && rusiaDesa1_p2 && rusiaDesa2_p2 && rusiaDesa3_p2 && rusiaKota1_p2 && rusiaKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - rusia_pajak_desa*3 - rusia_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        rusia_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_rusia_dibeli && !rusia_p2 && posX_p2 == 535 && posY_p2 == 65 && !rusia_p2_kenaPajak
        && !rusiaDesa1_p1 && !rusiaDesa2_p1 && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
        moneyPlayer2 -= rusia_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        rusia_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_rusia_dibeli && !rusia_p2 && posX_p2 == 535 && posY_p2 == 65 && !rusia_p2_kenaPajak
        && rusiaDesa1_p1 && !rusiaDesa2_p1 && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
        moneyPlayer2 -= rusia_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        rusia_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_rusia_dibeli && !rusia_p2 && posX_p2 == 535 && posY_p2 == 65 && !rusia_p2_kenaPajak
        && rusiaDesa1_p1 && rusiaDesa2_p1 && !rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
        moneyPlayer2 -= rusia_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        rusia_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_rusia_dibeli && !rusia_p2 && posX_p2 == 535 && posY_p2 == 65 && !rusia_p2_kenaPajak
        && rusiaDesa1_p1 && rusiaDesa2_p1 && rusiaDesa3_p1 && !rusiaKota1_p1 && !rusiaKota2_p1) {
        moneyPlayer2 -= rusia_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        rusia_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_rusia_dibeli && !rusia_p2 && posX_p2 == 535 && posY_p2 == 65 && !rusia_p2_kenaPajak
        && rusiaDesa1_p1 && rusiaDesa2_p1 && rusiaDesa3_p1 && rusiaKota1_p1 && !rusiaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - rusia_pajak_desa*3 - rusia_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        rusia_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_rusia_dibeli && !rusia_p2 && posX_p2 == 535 && posY_p2 == 65 && !rusia_p2_kenaPajak
        && rusiaDesa1_p1 && rusiaDesa2_p1 && rusiaDesa3_p1 && rusiaKota1_p1 && rusiaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - rusia_pajak_desa*3 - rusia_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        rusia_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 835 && posY_p1 > 65 || posX_p2 == 835 && posY_p2 > 65) {
        rusia_p1_kenaPajak = false
        rusia_p2_kenaPajak = false
    } 
}