function p12BeliAfrika() {
    negaraAfrika.removeEventListener("click", p12BeliAfrika)
    if ((posY_p1 == 165 && posX_p1 == 335) && 
        (posY_p2 != 165 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraAfrika.addEventListener("click", function closen() {
            afrikaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= afrika_only && !apakah_afrika_dibeli) {
                exitAfrikaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliAfrikaTampilan_p1.style.display = "block";
                beliAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAfrikaTampilan_p1.style.display = "none";
                beliDesaAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAfrikaTampilan_p1.style.display = "none";
                beliKotaAfrikaTampilan_p2.style.display = "none";
                beliAfrikaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= afrika_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_afrika_dibeli = true;
                    afrika_p1 = true
                    afrika_p2 = false
                    negaraAfrika.style.border = "5px solid darkblue"
                    afrikaTampilan.style.display = "none"
                    beliAfrikaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_afrika_dibeli && afrika_p1) {
                exitAfrikaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliAfrikaTampilan_p1.style.display = "block";
                beliAfrikaTampilan_p2.style.display = "none";
                // JUAL
                if (!afrikaDesa1_p1 && !afrikaDesa2_p1 && !afrikaDesa3_p1 
                    && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    beliAfrikaTampilan_p1.innerHTML = "Jual P1"
                    beliAfrikaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += afrika_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_afrika_dibeli = false;
                        afrika_p1 = false
                        afrika_p2 = false
                        negaraAfrika.style.border = "1px solid white"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p1.innerHTML = "Beli P1"
                        beliAfrikaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (afrikaDesa1_p1 && !afrikaDesa2_p1 && !afrikaDesa3_p1
                    && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    beliAfrikaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliAfrikaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += afrika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa1_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p1.innerHTML = "Jual P1"
                        beliAfrikaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (afrikaDesa1_p1 && afrikaDesa2_p1 && !afrikaDesa3_p1
                    && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    beliAfrikaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliAfrikaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += afrika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        afrikaDesa1_p1 = true
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa2_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliAfrikaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (afrikaDesa1_p1 && afrikaDesa2_p1 && afrikaDesa3_p1
                    && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    beliAfrikaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliAfrikaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += afrika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        afrikaDesa1_p1 = true
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = true
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa3_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliAfrikaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (afrikaDesa1_p1 && afrikaDesa2_p1 && afrikaDesa3_p1
                    && afrikaKota1_p1 && !afrikaKota2_p1) {
                    beliAfrikaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliAfrikaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += afrika_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        afrikaKota1_p1 = false
                        afrikaKota1_p2 = false
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = false
                        kota1_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliAfrikaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (afrikaDesa1_p1 && afrikaDesa2_p1 && afrikaDesa3_p1
                    && afrikaKota1_p1 && afrikaKota2_p1) {
                    beliAfrikaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliAfrikaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += afrika_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        afrikaKota1_p1 = true
                        afrikaKota1_p2 = false
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = false
                        kota2_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliAfrikaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= afrika_desa && !afrikaDesa1_p1 && !afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaAfrikaTampilan_p1.style.display = "block";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                    beliDesaAfrikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= afrika_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        afrikaDesa1_p1 = true
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa1_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliDesaAfrikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < afrika_desa && !afrikaDesa1_p1 && !afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= afrika_desa && afrikaDesa1_p1 && !afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaAfrikaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaAfrikaTampilan_p1.style.display = "block";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                    beliDesaAfrikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= afrika_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        afrikaDesa1_p1 = true
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = true
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa2_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliDesaAfrikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < afrika_desa && afrikaDesa1_p1 && !afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= afrika_desa && afrikaDesa1_p1 && afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaAfrikaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaAfrikaTampilan_p1.style.display = "block";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                    beliDesaAfrikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= afrika_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        afrikaDesa1_p1 = true
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = true
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = true
                        afrikaDesa3_p2 = false
                        desa3_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliDesaAfrikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < afrika_desa && afrikaDesa1_p1 && afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= afrika_kota && afrikaDesa1_p1 && afrikaDesa2_p1
                    && afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaAfrikaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaAfrikaTampilan_p1.style.display = "block";
                    beliKotaAfrikaTampilan_p2.style.display = "none";
                    beliKotaAfrikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= afrika_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        afrikaKota1_p1 = true
                        afrikaKota1_p2 = false
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = false
                        kota1_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliKotaAfrikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < afrika_desa && afrikaDesa1_p1 && afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaAfrikaTampilan_p1.style.display = "none";
                    beliKotaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= afrika_kota && afrikaDesa1_p1 && afrikaDesa2_p1
                    && afrikaDesa3_p1 && afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaAfrikaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaAfrikaTampilan_p1.style.display = "block";
                    beliKotaAfrikaTampilan_p2.style.display = "none";
                    beliKotaAfrikaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= afrika_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        afrikaKota1_p1 = true
                        afrikaKota1_p2 = false
                        afrikaKota2_p1 = true
                        afrikaKota2_p2 = false
                        kota2_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliKotaAfrikaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < afrika_desa && afrikaDesa1_p1 && afrikaDesa2_p1
                    && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaAfrikaTampilan_p1.style.display = "none";
                    beliKotaAfrikaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_afrika_dibeli && !afrika_p1) {
                exitAfrikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAfrikaTampilan_p1.style.display = "none";
                beliAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAfrikaTampilan_p1.style.display = "none";
                beliDesaAfrikaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaAfrikaTampilan_p1.style.display = "none";
                beliKotaAfrikaTampilan_p2.style.display = "none";
                exitAfrikaTampilan.addEventListener("click", function close() {
                    afrikaTampilan.style.display = "none"
                    exitAfrikaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < afrika_only && !apakah_afrika_dibeli) {
                exitAfrikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAfrikaTampilan_p1.style.display = "none";
                beliAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAfrikaTampilan_p1.style.display = "none";
                beliDesaAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAfrikaTampilan_p1.style.display = "none";
                beliKotaAfrikaTampilan_p2.style.display = "none";
                exitAfrikaTampilan.addEventListener("click", function close() {
                    afrikaTampilan.style.display = "none"
                    exitAfrikaTampilan.removeEventListener("click", close)
                })
            }
            negaraAfrika.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 165 && posX_p2 == 335) && 
        (posY_p1 != 165 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraAfrika.addEventListener("click", function closen() {
            afrikaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= afrika_only && !apakah_afrika_dibeli && !afrika_p2) {
                exitAfrikaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliAfrikaTampilan_p1.style.display = "none";
                beliAfrikaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaAfrikaTampilan_p1.style.display = "none";
                beliDesaAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAfrikaTampilan_p1.style.display = "none";
                beliKotaAfrikaTampilan_p2.style.display = "none";
                beliAfrikaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= afrika_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_afrika_dibeli = true;
                    afrika_p1 = false
                    afrika_p2 = true
                    negaraAfrika.style.border = "5px solid darkred"
                    afrikaTampilan.style.display = "none"
                    beliAfrikaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_afrika_dibeli && afrika_p2) {
                exitAfrikaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliAfrikaTampilan_p1.style.display = "none";
                beliAfrikaTampilan_p2.style.display = "block";
                // JUAL
                if (!afrikaDesa1_p2 && !afrikaDesa2_p2 && !afrikaDesa3_p2 
                    && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    beliAfrikaTampilan_p2.innerHTML = "Jual P2"
                    beliAfrikaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += afrika_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_afrika_dibeli = false;
                        afrika_p1 = false
                        afrika_p2 = false
                        negaraAfrika.style.border = "1px solid white"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p2.innerHTML = "Beli P2"
                        beliAfrikaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (afrikaDesa1_p2 && !afrikaDesa2_p2 && !afrikaDesa3_p2
                    && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    beliAfrikaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliAfrikaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += afrika_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = false
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa1_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p2.innerHTML = "Jual P2"
                        beliAfrikaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (afrikaDesa1_p2 && afrikaDesa2_p2 && !afrikaDesa3_p2
                    && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    beliAfrikaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliAfrikaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += afrika_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = true
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa2_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliAfrikaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (afrikaDesa1_p2 && afrikaDesa2_p2 && afrikaDesa3_p2
                    && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    beliAfrikaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliAfrikaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += afrika_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = true
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = true
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa3_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliAfrikaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (afrikaDesa1_p2 && afrikaDesa2_p2 && afrikaDesa3_p2
                    && afrikaKota1_p2 && !afrikaKota2_p2) {
                    beliAfrikaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliAfrikaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += afrika_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        afrikaKota1_p1 = false
                        afrikaKota1_p2 = false
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = false
                        kota1_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliAfrikaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (afrikaDesa1_p2 && afrikaDesa2_p2 && afrikaDesa3_p2
                    && afrikaKota1_p2 && afrikaKota2_p2) {
                    beliAfrikaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliAfrikaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += afrika_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        afrikaKota1_p1 = false
                        afrikaKota1_p2 = true
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = false
                        kota2_afrika.style.display = "none"
                        afrikaTampilan.style.display = "none"
                        beliAfrikaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliAfrikaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= afrika_desa && !afrikaDesa1_p2 && !afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "block";
                    beliDesaAfrikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= afrika_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = true
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = false
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa1_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliDesaAfrikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < afrika_desa && !afrikaDesa1_p2 && !afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= afrika_desa && afrikaDesa1_p2 && !afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaAfrikaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "block";
                    beliDesaAfrikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= afrika_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = true
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = true
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = false
                        desa2_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliDesaAfrikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < afrika_desa && afrikaDesa1_p2 && !afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= afrika_desa && afrikaDesa1_p2 && afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaAfrikaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "block";
                    beliDesaAfrikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= afrika_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        afrikaDesa1_p1 = false
                        afrikaDesa1_p2 = true
                        afrikaDesa2_p1 = false
                        afrikaDesa2_p2 = true
                        afrikaDesa3_p1 = false
                        afrikaDesa3_p2 = true
                        desa3_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliDesaAfrikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < afrika_desa && afrikaDesa1_p2 && afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaAfrikaTampilan_p1.style.display = "none";
                    beliDesaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= afrika_kota && afrikaDesa1_p2 && afrikaDesa2_p2
                    && afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaAfrikaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaAfrikaTampilan_p1.style.display = "none";
                    beliKotaAfrikaTampilan_p2.style.display = "block";
                    beliKotaAfrikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= afrika_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        afrikaKota1_p1 = false
                        afrikaKota1_p2 = true
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = false
                        kota1_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliKotaAfrikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < afrika_desa && afrikaDesa1_p2 && afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaAfrikaTampilan_p1.style.display = "none";
                    beliKotaAfrikaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= afrika_kota && afrikaDesa1_p2 && afrikaDesa2_p2
                    && afrikaDesa3_p2 && afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaAfrikaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaAfrikaTampilan_p1.style.display = "none";
                    beliKotaAfrikaTampilan_p2.style.display = "block";
                    beliKotaAfrikaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= afrika_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        afrikaKota1_p1 = false
                        afrikaKota1_p2 = true
                        afrikaKota2_p1 = false
                        afrikaKota2_p2 = true
                        kota2_afrika.style.display = "block"
                        afrikaTampilan.style.display = "none"
                        beliKotaAfrikaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < afrika_desa && afrikaDesa1_p2 && afrikaDesa2_p2
                    && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaAfrikaTampilan_p1.style.display = "none";
                    beliKotaAfrikaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_afrika_dibeli && !afrika_p2) {
                exitAfrikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAfrikaTampilan_p1.style.display = "none";
                beliAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAfrikaTampilan_p1.style.display = "none";
                beliDesaAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAfrikaTampilan_p1.style.display = "none";
                beliKotaAfrikaTampilan_p2.style.display = "none";
                exitAfrikaTampilan.addEventListener("click", function close() {
                    afrikaTampilan.style.display = "none"
                    exitAfrikaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < afrika_only && !apakah_afrika_dibeli) {
                exitAfrikaTampilan.style.display = "block"
                // TOMBOL BELI
                beliAfrikaTampilan_p1.style.display = "none";
                beliAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaAfrikaTampilan_p1.style.display = "none";
                beliDesaAfrikaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaAfrikaTampilan_p1.style.display = "none";
                beliKotaAfrikaTampilan_p2.style.display = "none";
                exitAfrikaTampilan.addEventListener("click", function close() {
                    afrikaTampilan.style.display = "none"
                    exitAfrikaTampilan.removeEventListener("click", close)
                })
            }
            negaraAfrika.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 335 && posX_p2 == 335 && posY_p2 == 165 && posY_p2 == 165) ||
        (posX_p1 != 335 && posX_p2 != 335 || posY_p2 != 165 && posY_p2 != 165)) {
        negaraAfrika.addEventListener("click", function closen() {
            afrikaTampilan.style.display = "block"
            exitAfrikaTampilan.style.display = "block"
            // TOMBOL BELI
            beliAfrikaTampilan_p1.style.display = "none";
            beliAfrikaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaAfrikaTampilan_p1.style.display = "none";
            beliDesaAfrikaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaAfrikaTampilan_p1.style.display = "none";
            beliKotaAfrikaTampilan_p2.style.display = "none";
            exitAfrikaTampilan.addEventListener("click", function close() {
                afrikaTampilan.style.display = "none"
                exitAfrikaTampilan.removeEventListener("click", close)
            })
            negaraAfrika.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_afrika_dibeli && !afrika_p1 && posX_p1 == 335 && posY_p1 == 165 && !afrika_p1_kenaPajak
        && !afrikaDesa1_p2 && !afrikaDesa2_p2 && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
        moneyPlayer1 -= afrika_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        afrika_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_afrika_dibeli && !afrika_p1 && posX_p1 == 335 && posY_p1 == 165 && !afrika_p1_kenaPajak
        && afrikaDesa1_p2 && !afrikaDesa2_p2 && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
        moneyPlayer1 -= afrika_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        afrika_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_afrika_dibeli && !afrika_p1 && posX_p1 == 335 && posY_p1 == 165 && !afrika_p1_kenaPajak
        && afrikaDesa1_p2 && afrikaDesa2_p2 && !afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
        moneyPlayer1 -= afrika_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        afrika_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_afrika_dibeli && !afrika_p1 && posX_p1 == 335 && posY_p1 == 165 && !afrika_p1_kenaPajak
        && afrikaDesa1_p2 && afrikaDesa2_p2 && afrikaDesa3_p2 && !afrikaKota1_p2 && !afrikaKota2_p2) {
        moneyPlayer1 -= afrika_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        afrika_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_afrika_dibeli && !afrika_p1 && posX_p1 == 335 && posY_p1 == 165 && !afrika_p1_kenaPajak
        && afrikaDesa1_p2 && afrikaDesa2_p2 && afrikaDesa3_p2 && afrikaKota1_p2 && !afrikaKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - afrika_pajak_desa*3 - afrika_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        afrika_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_afrika_dibeli && !afrika_p1 && posX_p1 == 335 && posY_p1 == 165 && !afrika_p1_kenaPajak
        && afrikaDesa1_p2 && afrikaDesa2_p2 && afrikaDesa3_p2 && afrikaKota1_p2 && afrikaKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - afrika_pajak_desa*3 - afrika_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        afrika_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_afrika_dibeli && !afrika_p2 && posX_p2 == 335 && posY_p2 == 165 && !afrika_p2_kenaPajak
        && !afrikaDesa1_p1 && !afrikaDesa2_p1 && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
        moneyPlayer2 -= afrika_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        afrika_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_afrika_dibeli && !afrika_p2 && posX_p2 == 335 && posY_p2 == 165 && !afrika_p2_kenaPajak
        && afrikaDesa1_p1 && !afrikaDesa2_p1 && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
        moneyPlayer2 -= afrika_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        afrika_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_afrika_dibeli && !afrika_p2 && posX_p2 == 335 && posY_p2 == 165 && !afrika_p2_kenaPajak
        && afrikaDesa1_p1 && afrikaDesa2_p1 && !afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
        moneyPlayer2 -= afrika_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        afrika_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_afrika_dibeli && !afrika_p2 && posX_p2 == 335 && posY_p2 == 165 && !afrika_p2_kenaPajak
        && afrikaDesa1_p1 && afrikaDesa2_p1 && afrikaDesa3_p1 && !afrikaKota1_p1 && !afrikaKota2_p1) {
        moneyPlayer2 -= afrika_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        afrika_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_afrika_dibeli && !afrika_p2 && posX_p2 == 335 && posY_p2 == 165 && !afrika_p2_kenaPajak
        && afrikaDesa1_p1 && afrikaDesa2_p1 && afrikaDesa3_p1 && afrikaKota1_p1 && !afrikaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - afrika_pajak_desa*3 - afrika_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        afrika_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_afrika_dibeli && !afrika_p2 && posX_p2 == 335 && posY_p2 == 165 && !afrika_p2_kenaPajak
        && afrikaDesa1_p1 && afrikaDesa2_p1 && afrikaDesa3_p1 && afrikaKota1_p1 && afrikaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - afrika_pajak_desa*3 - afrika_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        afrika_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 > 335 && posY_p1 == 65 || posX_p2 > 335 && posY_p2 == 65) {
        afrika_p1_kenaPajak = false
        afrika_p2_kenaPajak = false
    } 
}