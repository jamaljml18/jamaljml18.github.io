function p12BeliCanada() {
    negaraCanada.removeEventListener("click", p12BeliCanada)
    if ((posY_p1 == 165 && posX_p1 == 835) && 
        (posY_p2 != 165 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraCanada.addEventListener("click", function closen() {
            canadaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= canada_only && !apakah_canada_dibeli) {
                exitCanadaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliCanadaTampilan_p1.style.display = "block";
                beliCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaCanadaTampilan_p1.style.display = "none";
                beliDesaCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaCanadaTampilan_p1.style.display = "none";
                beliKotaCanadaTampilan_p2.style.display = "none";
                beliCanadaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= canada_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_canada_dibeli = true;
                    canada_p1 = true
                    canada_p2 = false
                    negaraCanada.style.border = "5px solid darkblue"
                    canadaTampilan.style.display = "none"
                    beliCanadaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_canada_dibeli && canada_p1) {
                exitCanadaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliCanadaTampilan_p1.style.display = "block";
                beliCanadaTampilan_p2.style.display = "none";
                // JUAL
                if (!canadaDesa1_p1 && !canadaDesa2_p1 && !canadaDesa3_p1 
                    && !canadaKota1_p1 && !canadaKota2_p1) {
                    beliCanadaTampilan_p1.innerHTML = "Jual P1"
                    beliCanadaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += canada_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_canada_dibeli = false;
                        canada_p1 = false
                        canada_p2 = false
                        negaraCanada.style.border = "1px solid white"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p1.innerHTML = "Beli P1"
                        beliCanadaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (canadaDesa1_p1 && !canadaDesa2_p1 && !canadaDesa3_p1
                    && !canadaKota1_p1 && !canadaKota2_p1) {
                    beliCanadaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliCanadaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += canada_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa1_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p1.innerHTML = "Jual P1"
                        beliCanadaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (canadaDesa1_p1 && canadaDesa2_p1 && !canadaDesa3_p1
                    && !canadaKota1_p1 && !canadaKota2_p1) {
                    beliCanadaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliCanadaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += canada_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        canadaDesa1_p1 = true
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa2_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliCanadaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (canadaDesa1_p1 && canadaDesa2_p1 && canadaDesa3_p1
                    && !canadaKota1_p1 && !canadaKota2_p1) {
                    beliCanadaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliCanadaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += canada_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        canadaDesa1_p1 = true
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = true
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa3_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliCanadaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (canadaDesa1_p1 && canadaDesa2_p1 && canadaDesa3_p1
                    && canadaKota1_p1 && !canadaKota2_p1) {
                    beliCanadaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliCanadaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += canada_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        canadaKota1_p1 = false
                        canadaKota1_p2 = false
                        canadaKota2_p1 = false
                        canadaKota2_p2 = false
                        kota1_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliCanadaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (canadaDesa1_p1 && canadaDesa2_p1 && canadaDesa3_p1
                    && canadaKota1_p1 && canadaKota2_p1) {
                    beliCanadaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliCanadaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += canada_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        canadaKota1_p1 = true
                        canadaKota1_p2 = false
                        canadaKota2_p1 = false
                        canadaKota2_p2 = false
                        kota2_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliCanadaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= canada_desa && !canadaDesa1_p1 && !canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaCanadaTampilan_p1.style.display = "block";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                    beliDesaCanadaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= canada_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        canadaDesa1_p1 = true
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa1_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliDesaCanadaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < canada_desa && !canadaDesa1_p1 && !canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= canada_desa && canadaDesa1_p1 && !canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaCanadaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaCanadaTampilan_p1.style.display = "block";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                    beliDesaCanadaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= canada_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        canadaDesa1_p1 = true
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = true
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa2_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliDesaCanadaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < canada_desa && canadaDesa1_p1 && !canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= canada_desa && canadaDesa1_p1 && canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaCanadaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaCanadaTampilan_p1.style.display = "block";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                    beliDesaCanadaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= canada_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        canadaDesa1_p1 = true
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = true
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = true
                        canadaDesa3_p2 = false
                        desa3_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliDesaCanadaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < canada_desa && canadaDesa1_p1 && canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= canada_kota && canadaDesa1_p1 && canadaDesa2_p1
                    && canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaCanadaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaCanadaTampilan_p1.style.display = "block";
                    beliKotaCanadaTampilan_p2.style.display = "none";
                    beliKotaCanadaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= canada_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        canadaKota1_p1 = true
                        canadaKota1_p2 = false
                        canadaKota2_p1 = false
                        canadaKota2_p2 = false
                        kota1_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliKotaCanadaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < canada_desa && canadaDesa1_p1 && canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaCanadaTampilan_p1.style.display = "none";
                    beliKotaCanadaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= canada_kota && canadaDesa1_p1 && canadaDesa2_p1
                    && canadaDesa3_p1 && canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaCanadaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaCanadaTampilan_p1.style.display = "block";
                    beliKotaCanadaTampilan_p2.style.display = "none";
                    beliKotaCanadaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= canada_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        canadaKota1_p1 = true
                        canadaKota1_p2 = false
                        canadaKota2_p1 = true
                        canadaKota2_p2 = false
                        kota2_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliKotaCanadaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < canada_desa && canadaDesa1_p1 && canadaDesa2_p1
                    && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaCanadaTampilan_p1.style.display = "none";
                    beliKotaCanadaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_canada_dibeli && !canada_p1) {
                exitCanadaTampilan.style.display = "block"
                // TOMBOL BELI
                beliCanadaTampilan_p1.style.display = "none";
                beliCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaCanadaTampilan_p1.style.display = "none";
                beliDesaCanadaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaCanadaTampilan_p1.style.display = "none";
                beliKotaCanadaTampilan_p2.style.display = "none";
                exitCanadaTampilan.addEventListener("click", function close() {
                    canadaTampilan.style.display = "none"
                    exitCanadaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < canada_only && !apakah_canada_dibeli) {
                exitCanadaTampilan.style.display = "block"
                // TOMBOL BELI
                beliCanadaTampilan_p1.style.display = "none";
                beliCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaCanadaTampilan_p1.style.display = "none";
                beliDesaCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaCanadaTampilan_p1.style.display = "none";
                beliKotaCanadaTampilan_p2.style.display = "none";
                exitCanadaTampilan.addEventListener("click", function close() {
                    canadaTampilan.style.display = "none"
                    exitCanadaTampilan.removeEventListener("click", close)
                })
            }
            negaraCanada.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 165 && posX_p2 == 835) && 
        (posY_p1 != 165 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraCanada.addEventListener("click", function closen() {
            canadaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= canada_only && !apakah_canada_dibeli && !canada_p2) {
                exitCanadaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliCanadaTampilan_p1.style.display = "none";
                beliCanadaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaCanadaTampilan_p1.style.display = "none";
                beliDesaCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaCanadaTampilan_p1.style.display = "none";
                beliKotaCanadaTampilan_p2.style.display = "none";
                beliCanadaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= canada_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_canada_dibeli = true;
                    canada_p1 = false
                    canada_p2 = true
                    negaraCanada.style.border = "5px solid darkred"
                    canadaTampilan.style.display = "none"
                    beliCanadaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_canada_dibeli && canada_p2) {
                exitCanadaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliCanadaTampilan_p1.style.display = "none";
                beliCanadaTampilan_p2.style.display = "block";
                // JUAL
                if (!canadaDesa1_p2 && !canadaDesa2_p2 && !canadaDesa3_p2 
                    && !canadaKota1_p2 && !canadaKota2_p2) {
                    beliCanadaTampilan_p2.innerHTML = "Jual P2"
                    beliCanadaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += canada_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_canada_dibeli = false;
                        canada_p1 = false
                        canada_p2 = false
                        negaraCanada.style.border = "1px solid white"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p2.innerHTML = "Beli P2"
                        beliCanadaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (canadaDesa1_p2 && !canadaDesa2_p2 && !canadaDesa3_p2
                    && !canadaKota1_p2 && !canadaKota2_p2) {
                    beliCanadaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliCanadaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += canada_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = false
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa1_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p2.innerHTML = "Jual P2"
                        beliCanadaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (canadaDesa1_p2 && canadaDesa2_p2 && !canadaDesa3_p2
                    && !canadaKota1_p2 && !canadaKota2_p2) {
                    beliCanadaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliCanadaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += canada_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = true
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa2_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliCanadaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (canadaDesa1_p2 && canadaDesa2_p2 && canadaDesa3_p2
                    && !canadaKota1_p2 && !canadaKota2_p2) {
                    beliCanadaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliCanadaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += canada_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = true
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = true
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa3_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliCanadaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (canadaDesa1_p2 && canadaDesa2_p2 && canadaDesa3_p2
                    && canadaKota1_p2 && !canadaKota2_p2) {
                    beliCanadaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliCanadaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += canada_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        canadaKota1_p1 = false
                        canadaKota1_p2 = false
                        canadaKota2_p1 = false
                        canadaKota2_p2 = false
                        kota1_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliCanadaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (canadaDesa1_p2 && canadaDesa2_p2 && canadaDesa3_p2
                    && canadaKota1_p2 && canadaKota2_p2) {
                    beliCanadaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliCanadaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += canada_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        canadaKota1_p1 = false
                        canadaKota1_p2 = true
                        canadaKota2_p1 = false
                        canadaKota2_p2 = false
                        kota2_canada.style.display = "none"
                        canadaTampilan.style.display = "none"
                        beliCanadaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliCanadaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= canada_desa && !canadaDesa1_p2 && !canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "block";
                    beliDesaCanadaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= canada_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = true
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = false
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa1_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliDesaCanadaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < canada_desa && !canadaDesa1_p2 && !canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= canada_desa && canadaDesa1_p2 && !canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaCanadaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "block";
                    beliDesaCanadaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= canada_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = true
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = true
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = false
                        desa2_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliDesaCanadaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < canada_desa && canadaDesa1_p2 && !canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= canada_desa && canadaDesa1_p2 && canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaCanadaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "block";
                    beliDesaCanadaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= canada_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        canadaDesa1_p1 = false
                        canadaDesa1_p2 = true
                        canadaDesa2_p1 = false
                        canadaDesa2_p2 = true
                        canadaDesa3_p1 = false
                        canadaDesa3_p2 = true
                        desa3_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliDesaCanadaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < canada_desa && canadaDesa1_p2 && canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaCanadaTampilan_p1.style.display = "none";
                    beliDesaCanadaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= canada_kota && canadaDesa1_p2 && canadaDesa2_p2
                    && canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaCanadaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaCanadaTampilan_p1.style.display = "none";
                    beliKotaCanadaTampilan_p2.style.display = "block";
                    beliKotaCanadaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= canada_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        canadaKota1_p1 = false
                        canadaKota1_p2 = true
                        canadaKota2_p1 = false
                        canadaKota2_p2 = false
                        kota1_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliKotaCanadaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < canada_desa && canadaDesa1_p2 && canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaCanadaTampilan_p1.style.display = "none";
                    beliKotaCanadaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= canada_kota && canadaDesa1_p2 && canadaDesa2_p2
                    && canadaDesa3_p2 && canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaCanadaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaCanadaTampilan_p1.style.display = "none";
                    beliKotaCanadaTampilan_p2.style.display = "block";
                    beliKotaCanadaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= canada_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        canadaKota1_p1 = false
                        canadaKota1_p2 = true
                        canadaKota2_p1 = false
                        canadaKota2_p2 = true
                        kota2_canada.style.display = "block"
                        canadaTampilan.style.display = "none"
                        beliKotaCanadaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < canada_desa && canadaDesa1_p2 && canadaDesa2_p2
                    && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaCanadaTampilan_p1.style.display = "none";
                    beliKotaCanadaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_canada_dibeli && !canada_p2) {
                exitCanadaTampilan.style.display = "block"
                // TOMBOL BELI
                beliCanadaTampilan_p1.style.display = "none";
                beliCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaCanadaTampilan_p1.style.display = "none";
                beliDesaCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaCanadaTampilan_p1.style.display = "none";
                beliKotaCanadaTampilan_p2.style.display = "none";
                exitCanadaTampilan.addEventListener("click", function close() {
                    canadaTampilan.style.display = "none"
                    exitCanadaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < canada_only && !apakah_canada_dibeli) {
                exitCanadaTampilan.style.display = "block"
                // TOMBOL BELI
                beliCanadaTampilan_p1.style.display = "none";
                beliCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaCanadaTampilan_p1.style.display = "none";
                beliDesaCanadaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaCanadaTampilan_p1.style.display = "none";
                beliKotaCanadaTampilan_p2.style.display = "none";
                exitCanadaTampilan.addEventListener("click", function close() {
                    canadaTampilan.style.display = "none"
                    exitCanadaTampilan.removeEventListener("click", close)
                })
            }
            negaraCanada.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 835 && posX_p2 == 835 && posY_p1 == 165 && posY_p2 == 165) ||
        (posX_p1 != 835 && posX_p2 != 835 || posY_p1 != 165 && posY_p2 != 165)) {
        negaraCanada.addEventListener("click", function closen() {
            canadaTampilan.style.display = "block"
            exitCanadaTampilan.style.display = "block"
            // TOMBOL BELI
            beliCanadaTampilan_p1.style.display = "none";
            beliCanadaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaCanadaTampilan_p1.style.display = "none";
            beliDesaCanadaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaCanadaTampilan_p1.style.display = "none";
            beliKotaCanadaTampilan_p2.style.display = "none";
            exitCanadaTampilan.addEventListener("click", function close() {
                canadaTampilan.style.display = "none"
                exitCanadaTampilan.removeEventListener("click", close)
            })
            negaraCanada.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_canada_dibeli && !canada_p1 && posX_p1 == 335 && posY_p1 == 165 && !canada_p1_kenaPajak
        && !canadaDesa1_p2 && !canadaDesa2_p2 && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
        moneyPlayer1 -= canada_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        canada_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_canada_dibeli && !canada_p1 && posX_p1 == 835 && posY_p1 == 165 && !canada_p1_kenaPajak
        && canadaDesa1_p2 && !canadaDesa2_p2 && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
        moneyPlayer1 -= canada_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        canada_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_canada_dibeli && !canada_p1 && posX_p1 == 835 && posY_p1 == 165 && !canada_p1_kenaPajak
        && canadaDesa1_p2 && canadaDesa2_p2 && !canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
        moneyPlayer1 -= canada_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        canada_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_canada_dibeli && !canada_p1 && posX_p1 == 835 && posY_p1 == 165 && !canada_p1_kenaPajak
        && canadaDesa1_p2 && canadaDesa2_p2 && canadaDesa3_p2 && !canadaKota1_p2 && !canadaKota2_p2) {
        moneyPlayer1 -= canada_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        canada_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_canada_dibeli && !canada_p1 && posX_p1 == 835 && posY_p1 == 165 && !canada_p1_kenaPajak
        && canadaDesa1_p2 && canadaDesa2_p2 && canadaDesa3_p2 && canadaKota1_p2 && !canadaKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - canada_pajak_desa*3 - canada_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        canada_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_canada_dibeli && !canada_p1 && posX_p1 == 835 && posY_p1 == 165 && !canada_p1_kenaPajak
        && canadaDesa1_p2 && canadaDesa2_p2 && canadaDesa3_p2 && canadaKota1_p2 && canadaKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - canada_pajak_desa*3 - canada_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        canada_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_canada_dibeli && !canada_p2 && posX_p2 == 835 && posY_p2 == 165 && !canada_p2_kenaPajak
        && !canadaDesa1_p1 && !canadaDesa2_p1 && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
        moneyPlayer2 -= canada_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        canada_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_canada_dibeli && !canada_p2 && posX_p2 == 835 && posY_p2 == 165 && !canada_p2_kenaPajak
        && canadaDesa1_p1 && !canadaDesa2_p1 && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
        moneyPlayer2 -= canada_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        canada_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_canada_dibeli && !canada_p2 && posX_p2 == 835 && posY_p2 == 165 && !canada_p2_kenaPajak
        && canadaDesa1_p1 && canadaDesa2_p1 && !canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
        moneyPlayer2 -= canada_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        canada_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_canada_dibeli && !canada_p2 && posX_p2 == 835 && posY_p2 == 165 && !canada_p2_kenaPajak
        && canadaDesa1_p1 && canadaDesa2_p1 && canadaDesa3_p1 && !canadaKota1_p1 && !canadaKota2_p1) {
        moneyPlayer2 -= canada_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        canada_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_canada_dibeli && !canada_p2 && posX_p2 == 835 && posY_p2 == 165 && !canada_p2_kenaPajak
        && canadaDesa1_p1 && canadaDesa2_p1 && canadaDesa3_p1 && canadaKota1_p1 && !canadaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - canada_pajak_desa*3 - canada_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        canada_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_canada_dibeli && !canada_p2 && posX_p2 == 835 && posY_p2 == 165 && !canada_p2_kenaPajak
        && canadaDesa1_p1 && canadaDesa2_p1 && canadaDesa3_p1 && canadaKota1_p1 && canadaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - canada_pajak_desa*3 - canada_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        canada_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 < 835 && posY_p1 == 565 || posX_p2 < 835 && posY_p2 == 565) {
        canada_p1_kenaPajak = false
        canada_p2_kenaPajak = false
    } 
}