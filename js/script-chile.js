function p12BeliChile() {
    negaraChile.removeEventListener("click", p12BeliChile)
    if ((posY_p1 == 165 && posX_p1 == 835) && 
        (posY_p2 != 165 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraChile.addEventListener("click", function closen() {
            chileTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= chile_only && !apakah_chile_dibeli) {
                exitChileTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliChileTampilan_p1.style.display = "block";
                beliChileTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaChileTampilan_p1.style.display = "none";
                beliDesaChileTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaChileTampilan_p1.style.display = "none";
                beliKotaChileTampilan_p2.style.display = "none";
                beliChileTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= chile_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_chile_dibeli = true;
                    chile_p1 = true
                    chile_p2 = false
                    negaraChile.style.border = "5px solid darkblue"
                    chileTampilan.style.display = "none"
                    beliChileTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_chile_dibeli && chile_p1) {
                exitChileTampilan.style.display = "none"
                // TOMBOL JUAL
                beliChileTampilan_p1.style.display = "block";
                beliChileTampilan_p2.style.display = "none";
                // JUAL
                if (!chileDesa1_p1 && !chileDesa2_p1 && !chileDesa3_p1 
                    && !chileKota1_p1 && !chileKota2_p1) {
                    beliChileTampilan_p1.innerHTML = "Jual P1"
                    beliChileTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += chile_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_chile_dibeli = false;
                        chile_p1 = false
                        chile_p2 = false
                        negaraChile.style.border = "1px solid white"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p1.innerHTML = "Beli P1"
                        beliChileTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (chileDesa1_p1 && !chileDesa2_p1 && !chileDesa3_p1
                    && !chileKota1_p1 && !chileKota2_p1) {
                    beliChileTampilan_p1.innerHTML = "Jual Desa P1"
                    beliChileTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += chile_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        chileDesa1_p1 = false
                        chileDesa1_p2 = false
                        chileDesa2_p1 = false
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa1_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p1.innerHTML = "Jual P1"
                        beliChileTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (chileDesa1_p1 && chileDesa2_p1 && !chileDesa3_p1
                    && !chileKota1_p1 && !chileKota2_p1) {
                    beliChileTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliChileTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += chile_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        chileDesa1_p1 = true
                        chileDesa1_p2 = false
                        chileDesa2_p1 = false
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa2_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p1.innerHTML = "Jual Desa P1"
                        beliChileTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (chileDesa1_p1 && chileDesa2_p1 && chileDesa3_p1
                    && !chileKota1_p1 && !chileKota2_p1) {
                    beliChileTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliChileTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += chile_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        chileDesa1_p1 = true
                        chileDesa1_p2 = false
                        chileDesa2_p1 = true
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa3_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliChileTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (chileDesa1_p1 && chileDesa2_p1 && chileDesa3_p1
                    && chileKota1_p1 && !chileKota2_p1) {
                    beliChileTampilan_p1.innerHTML = "Jual Kota P1"
                    beliChileTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += chile_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        chileKota1_p1 = false
                        chileKota1_p2 = false
                        chileKota2_p1 = false
                        chileKota2_p2 = false
                        kota1_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliChileTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (chileDesa1_p1 && chileDesa2_p1 && chileDesa3_p1
                    && chileKota1_p1 && chileKota2_p1) {
                    beliChileTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliChileTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += chile_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        chileKota1_p1 = true
                        chileKota1_p2 = false
                        chileKota2_p1 = false
                        chileKota2_p2 = false
                        kota2_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliChileTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= chile_desa && !chileDesa1_p1 && !chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaChileTampilan_p1.style.display = "block";
                    beliDesaChileTampilan_p2.style.display = "none";
                    beliDesaChileTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= chile_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        chileDesa1_p1 = true
                        chileDesa1_p2 = false
                        chileDesa2_p1 = false
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa1_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliDesaChileTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < chile_desa && !chileDesa1_p1 && !chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= chile_desa && chileDesa1_p1 && !chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaChileTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaChileTampilan_p1.style.display = "block";
                    beliDesaChileTampilan_p2.style.display = "none";
                    beliDesaChileTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= chile_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        chileDesa1_p1 = true
                        chileDesa1_p2 = false
                        chileDesa2_p1 = true
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa2_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliDesaChileTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < chile_desa && chileDesa1_p1 && !chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= chile_desa && chileDesa1_p1 && chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaChileTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaChileTampilan_p1.style.display = "block";
                    beliDesaChileTampilan_p2.style.display = "none";
                    beliDesaChileTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= chile_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        chileDesa1_p1 = true
                        chileDesa1_p2 = false
                        chileDesa2_p1 = true
                        chileDesa2_p2 = false
                        chileDesa3_p1 = true
                        chileDesa3_p2 = false
                        desa3_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliDesaChileTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < chile_desa && chileDesa1_p1 && chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= chile_kota && chileDesa1_p1 && chileDesa2_p1
                    && chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaChileTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaChileTampilan_p1.style.display = "block";
                    beliKotaChileTampilan_p2.style.display = "none";
                    beliKotaChileTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= chile_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        chileKota1_p1 = true
                        chileKota1_p2 = false
                        chileKota2_p1 = false
                        chileKota2_p2 = false
                        kota1_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliKotaChileTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < chile_desa && chileDesa1_p1 && chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaChileTampilan_p1.style.display = "none";
                    beliKotaChileTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= chile_kota && chileDesa1_p1 && chileDesa2_p1
                    && chileDesa3_p1 && chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaChileTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaChileTampilan_p1.style.display = "block";
                    beliKotaChileTampilan_p2.style.display = "none";
                    beliKotaChileTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= chile_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        chileKota1_p1 = true
                        chileKota1_p2 = false
                        chileKota2_p1 = true
                        chileKota2_p2 = false
                        kota2_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliKotaChileTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < chile_desa && chileDesa1_p1 && chileDesa2_p1
                    && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaChileTampilan_p1.style.display = "none";
                    beliKotaChileTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_chile_dibeli && !chile_p1) {
                exitChileTampilan.style.display = "block"
                // TOMBOL BELI
                beliChileTampilan_p1.style.display = "none";
                beliChileTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaChileTampilan_p1.style.display = "none";
                beliDesaChileTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaChileTampilan_p1.style.display = "none";
                beliKotaChileTampilan_p2.style.display = "none";
                exitChileTampilan.addEventListener("click", function close() {
                    chileTampilan.style.display = "none"
                    exitChileTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < chile_only && !apakah_chile_dibeli) {
                exitChileTampilan.style.display = "block"
                // TOMBOL BELI
                beliChileTampilan_p1.style.display = "none";
                beliChileTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaChileTampilan_p1.style.display = "none";
                beliDesaChileTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaChileTampilan_p1.style.display = "none";
                beliKotaChileTampilan_p2.style.display = "none";
                exitChileTampilan.addEventListener("click", function close() {
                    chileTampilan.style.display = "none"
                    exitChileTampilan.removeEventListener("click", close)
                })
            }
            negaraChile.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 165 && posX_p2 == 835) && 
        (posY_p1 != 165 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraChile.addEventListener("click", function closen() {
            chileTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= chile_only && !apakah_chile_dibeli && !chile_p2) {
                exitChileTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliChileTampilan_p1.style.display = "none";
                beliChileTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaChileTampilan_p1.style.display = "none";
                beliDesaChileTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaChileTampilan_p1.style.display = "none";
                beliKotaChileTampilan_p2.style.display = "none";
                beliChileTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= chile_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_chile_dibeli = true;
                    chile_p1 = false
                    chile_p2 = true
                    negaraChile.style.border = "5px solid darkred"
                    chileTampilan.style.display = "none"
                    beliChileTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_chile_dibeli && chile_p2) {
                exitChileTampilan.style.display = "none"
                // TOMBOL JUAL
                beliChileTampilan_p1.style.display = "none";
                beliChileTampilan_p2.style.display = "block";
                // JUAL
                if (!chileDesa1_p2 && !chileDesa2_p2 && !chileDesa3_p2 
                    && !chileKota1_p2 && !chileKota2_p2) {
                    beliChileTampilan_p2.innerHTML = "Jual P2"
                    beliChileTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += chile_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_chile_dibeli = false;
                        chile_p1 = false
                        chile_p2 = false
                        negaraChile.style.border = "1px solid white"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p2.innerHTML = "Beli P2"
                        beliChileTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (chileDesa1_p2 && !chileDesa2_p2 && !chileDesa3_p2
                    && !chileKota1_p2 && !chileKota2_p2) {
                    beliChileTampilan_p2.innerHTML = "Jual Desa P2"
                    beliChileTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += chile_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        chileDesa1_p1 = false
                        chileDesa1_p2 = false
                        chileDesa2_p1 = false
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa1_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p2.innerHTML = "Jual P2"
                        beliChileTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (chileDesa1_p2 && chileDesa2_p2 && !chileDesa3_p2
                    && !chileKota1_p2 && !chileKota2_p2) {
                    beliChileTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliChileTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += chile_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        chileDesa1_p1 = false
                        chileDesa1_p2 = true
                        chileDesa2_p1 = false
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa2_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p2.innerHTML = "Jual Desa P2"
                        beliChileTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (chileDesa1_p2 && chileDesa2_p2 && chileDesa3_p2
                    && !chileKota1_p2 && !chileKota2_p2) {
                    beliChileTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliChileTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += chile_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        chileDesa1_p1 = false
                        chileDesa1_p2 = true
                        chileDesa2_p1 = false
                        chileDesa2_p2 = true
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa3_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliChileTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (chileDesa1_p2 && chileDesa2_p2 && chileDesa3_p2
                    && chileKota1_p2 && !chileKota2_p2) {
                    beliChileTampilan_p2.innerHTML = "Jual Kota P2"
                    beliChileTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += chile_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        chileKota1_p1 = false
                        chileKota1_p2 = false
                        chileKota2_p1 = false
                        chileKota2_p2 = false
                        kota1_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliChileTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (chileDesa1_p2 && chileDesa2_p2 && chileDesa3_p2
                    && chileKota1_p2 && chileKota2_p2) {
                    beliChileTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliChileTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += chile_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        chileKota1_p1 = false
                        chileKota1_p2 = true
                        chileKota2_p1 = false
                        chileKota2_p2 = false
                        kota2_chile.style.display = "none"
                        chileTampilan.style.display = "none"
                        beliChileTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliChileTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= chile_desa && !chileDesa1_p2 && !chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "block";
                    beliDesaChileTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= chile_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        chileDesa1_p1 = false
                        chileDesa1_p2 = true
                        chileDesa2_p1 = false
                        chileDesa2_p2 = false
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa1_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliDesaChileTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < chile_desa && !chileDesa1_p2 && !chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= chile_desa && chileDesa1_p2 && !chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaChileTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "block";
                    beliDesaChileTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= chile_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        chileDesa1_p1 = false
                        chileDesa1_p2 = true
                        chileDesa2_p1 = false
                        chileDesa2_p2 = true
                        chileDesa3_p1 = false
                        chileDesa3_p2 = false
                        desa2_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliDesaChileTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < chile_desa && chileDesa1_p2 && !chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= chile_desa && chileDesa1_p2 && chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaChileTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "block";
                    beliDesaChileTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= chile_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        chileDesa1_p1 = false
                        chileDesa1_p2 = true
                        chileDesa2_p1 = false
                        chileDesa2_p2 = true
                        chileDesa3_p1 = false
                        chileDesa3_p2 = true
                        desa3_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliDesaChileTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < chile_desa && chileDesa1_p2 && chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaChileTampilan_p1.style.display = "none";
                    beliDesaChileTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= chile_kota && chileDesa1_p2 && chileDesa2_p2
                    && chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaChileTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaChileTampilan_p1.style.display = "none";
                    beliKotaChileTampilan_p2.style.display = "block";
                    beliKotaChileTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= chile_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        chileKota1_p1 = false
                        chileKota1_p2 = true
                        chileKota2_p1 = false
                        chileKota2_p2 = false
                        kota1_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliKotaChileTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < chile_desa && chileDesa1_p2 && chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaChileTampilan_p1.style.display = "none";
                    beliKotaChileTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= chile_kota && chileDesa1_p2 && chileDesa2_p2
                    && chileDesa3_p2 && chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaChileTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaChileTampilan_p1.style.display = "none";
                    beliKotaChileTampilan_p2.style.display = "block";
                    beliKotaChileTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= chile_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        chileKota1_p1 = false
                        chileKota1_p2 = true
                        chileKota2_p1 = false
                        chileKota2_p2 = true
                        kota2_chile.style.display = "block"
                        chileTampilan.style.display = "none"
                        beliKotaChileTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < chile_desa && chileDesa1_p2 && chileDesa2_p2
                    && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaChileTampilan_p1.style.display = "none";
                    beliKotaChileTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_chile_dibeli && !chile_p2) {
                exitChileTampilan.style.display = "block"
                // TOMBOL BELI
                beliChileTampilan_p1.style.display = "none";
                beliChileTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaChileTampilan_p1.style.display = "none";
                beliDesaChileTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaChileTampilan_p1.style.display = "none";
                beliKotaChileTampilan_p2.style.display = "none";
                exitChileTampilan.addEventListener("click", function close() {
                    chileTampilan.style.display = "none"
                    exitChileTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < chile_only && !apakah_chile_dibeli) {
                exitChileTampilan.style.display = "block"
                // TOMBOL BELI
                beliChileTampilan_p1.style.display = "none";
                beliChileTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaChileTampilan_p1.style.display = "none";
                beliDesaChileTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaChileTampilan_p1.style.display = "none";
                beliKotaChileTampilan_p2.style.display = "none";
                exitChileTampilan.addEventListener("click", function close() {
                    chileTampilan.style.display = "none"
                    exitChileTampilan.removeEventListener("click", close)
                })
            }
            negaraChile.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 835 && posX_p2 == 835 && posY_p1 == 165 && posY_p2 == 165) ||
        (posX_p1 != 835 && posX_p2 != 835 || posY_p1 != 165 && posY_p2 != 165)) {
        negaraChile.addEventListener("click", function closen() {
            chileTampilan.style.display = "block"
            exitChileTampilan.style.display = "block"
            // TOMBOL BELI
            beliChileTampilan_p1.style.display = "none";
            beliChileTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaChileTampilan_p1.style.display = "none";
            beliDesaChileTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaChileTampilan_p1.style.display = "none";
            beliKotaChileTampilan_p2.style.display = "none";
            exitChileTampilan.addEventListener("click", function close() {
                chileTampilan.style.display = "none"
                exitChileTampilan.removeEventListener("click", close)
            })
            negaraChile.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_chile_dibeli && !chile_p1 && posX_p1 == 335 && posY_p1 == 165 && !chile_p1_kenaPajak
        && !chileDesa1_p2 && !chileDesa2_p2 && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
        moneyPlayer1 -= chile_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        chile_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_chile_dibeli && !chile_p1 && posX_p1 == 835 && posY_p1 == 165 && !chile_p1_kenaPajak
        && chileDesa1_p2 && !chileDesa2_p2 && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
        moneyPlayer1 -= chile_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        chile_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_chile_dibeli && !chile_p1 && posX_p1 == 835 && posY_p1 == 165 && !chile_p1_kenaPajak
        && chileDesa1_p2 && chileDesa2_p2 && !chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
        moneyPlayer1 -= chile_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        chile_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_chile_dibeli && !chile_p1 && posX_p1 == 835 && posY_p1 == 165 && !chile_p1_kenaPajak
        && chileDesa1_p2 && chileDesa2_p2 && chileDesa3_p2 && !chileKota1_p2 && !chileKota2_p2) {
        moneyPlayer1 -= chile_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        chile_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_chile_dibeli && !chile_p1 && posX_p1 == 835 && posY_p1 == 165 && !chile_p1_kenaPajak
        && chileDesa1_p2 && chileDesa2_p2 && chileDesa3_p2 && chileKota1_p2 && !chileKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - chile_pajak_desa*3 - chile_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        chile_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_chile_dibeli && !chile_p1 && posX_p1 == 835 && posY_p1 == 165 && !chile_p1_kenaPajak
        && chileDesa1_p2 && chileDesa2_p2 && chileDesa3_p2 && chileKota1_p2 && chileKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - chile_pajak_desa*3 - chile_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        chile_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_chile_dibeli && !chile_p2 && posX_p2 == 835 && posY_p2 == 165 && !chile_p2_kenaPajak
        && !chileDesa1_p1 && !chileDesa2_p1 && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
        moneyPlayer2 -= chile_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        chile_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_chile_dibeli && !chile_p2 && posX_p2 == 835 && posY_p2 == 165 && !chile_p2_kenaPajak
        && chileDesa1_p1 && !chileDesa2_p1 && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
        moneyPlayer2 -= chile_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        chile_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_chile_dibeli && !chile_p2 && posX_p2 == 835 && posY_p2 == 165 && !chile_p2_kenaPajak
        && chileDesa1_p1 && chileDesa2_p1 && !chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
        moneyPlayer2 -= chile_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        chile_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_chile_dibeli && !chile_p2 && posX_p2 == 835 && posY_p2 == 165 && !chile_p2_kenaPajak
        && chileDesa1_p1 && chileDesa2_p1 && chileDesa3_p1 && !chileKota1_p1 && !chileKota2_p1) {
        moneyPlayer2 -= chile_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        chile_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_chile_dibeli && !chile_p2 && posX_p2 == 835 && posY_p2 == 165 && !chile_p2_kenaPajak
        && chileDesa1_p1 && chileDesa2_p1 && chileDesa3_p1 && chileKota1_p1 && !chileKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - chile_pajak_desa*3 - chile_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        chile_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_chile_dibeli && !chile_p2 && posX_p2 == 835 && posY_p2 == 165 && !chile_p2_kenaPajak
        && chileDesa1_p1 && chileDesa2_p1 && chileDesa3_p1 && chileKota1_p1 && chileKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - chile_pajak_desa*3 - chile_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        chile_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 < 835 && posY_p1 == 565 || posX_p2 < 835 && posY_p2 == 565) {
        chile_p1_kenaPajak = false
        chile_p2_kenaPajak = false
    } 
}