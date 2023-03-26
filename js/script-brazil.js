function p12BeliBrazil() {
    negaraBrazil.removeEventListener("click", p12BeliBrazil)
    if ((posY_p1 == 265 && posX_p1 == 835) && 
        (posY_p2 != 265 && (posX_p2 == 335 || posX_p2 == 435 || posX_p2 == 535 || 
        posX_p2 == 635 || posX_p2 == 735 || posX_p2 == 835))) {
        negaraBrazil.addEventListener("click", function closen() {
            brazilTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= brazil_only && !apakah_brazil_dibeli) {
                exitBrazilTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliBrazilTampilan_p1.style.display = "block";
                beliBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaBrazilTampilan_p1.style.display = "none";
                beliDesaBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaBrazilTampilan_p1.style.display = "none";
                beliKotaBrazilTampilan_p2.style.display = "none";
                beliBrazilTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= brazil_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_brazil_dibeli = true;
                    brazil_p1 = true
                    brazil_p2 = false
                    negaraBrazil.style.border = "5px solid darkblue"
                    brazilTampilan.style.display = "none"
                    beliBrazilTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_brazil_dibeli && brazil_p1) {
                exitBrazilTampilan.style.display = "none"
                // TOMBOL JUAL
                beliBrazilTampilan_p1.style.display = "block";
                beliBrazilTampilan_p2.style.display = "none";
                // JUAL
                if (!brazilDesa1_p1 && !brazilDesa2_p1 && !brazilDesa3_p1 
                    && !brazilKota1_p1 && !brazilKota2_p1) {
                    beliBrazilTampilan_p1.innerHTML = "Jual P1"
                    beliBrazilTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += brazil_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_brazil_dibeli = false;
                        brazil_p1 = false
                        brazil_p2 = false
                        negaraBrazil.style.border = "1px solid white"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p1.innerHTML = "Beli P1"
                        beliBrazilTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (brazilDesa1_p1 && !brazilDesa2_p1 && !brazilDesa3_p1
                    && !brazilKota1_p1 && !brazilKota2_p1) {
                    beliBrazilTampilan_p1.innerHTML = "Jual Desa P1"
                    beliBrazilTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += brazil_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa1_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p1.innerHTML = "Jual P1"
                        beliBrazilTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (brazilDesa1_p1 && brazilDesa2_p1 && !brazilDesa3_p1
                    && !brazilKota1_p1 && !brazilKota2_p1) {
                    beliBrazilTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliBrazilTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += brazil_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        brazilDesa1_p1 = true
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa2_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p1.innerHTML = "Jual Desa P1"
                        beliBrazilTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (brazilDesa1_p1 && brazilDesa2_p1 && brazilDesa3_p1
                    && !brazilKota1_p1 && !brazilKota2_p1) {
                    beliBrazilTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliBrazilTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += brazil_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        brazilDesa1_p1 = true
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = true
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa3_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliBrazilTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (brazilDesa1_p1 && brazilDesa2_p1 && brazilDesa3_p1
                    && brazilKota1_p1 && !brazilKota2_p1) {
                    beliBrazilTampilan_p1.innerHTML = "Jual Kota P1"
                    beliBrazilTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += brazil_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        brazilKota1_p1 = false
                        brazilKota1_p2 = false
                        brazilKota2_p1 = false
                        brazilKota2_p2 = false
                        kota1_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliBrazilTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (brazilDesa1_p1 && brazilDesa2_p1 && brazilDesa3_p1
                    && brazilKota1_p1 && brazilKota2_p1) {
                    beliBrazilTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliBrazilTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += brazil_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        brazilKota1_p1 = true
                        brazilKota1_p2 = false
                        brazilKota2_p1 = false
                        brazilKota2_p2 = false
                        kota2_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliBrazilTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= brazil_desa && !brazilDesa1_p1 && !brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaBrazilTampilan_p1.style.display = "block";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                    beliDesaBrazilTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= brazil_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        brazilDesa1_p1 = true
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa1_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliDesaBrazilTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < brazil_desa && !brazilDesa1_p1 && !brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= brazil_desa && brazilDesa1_p1 && !brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaBrazilTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaBrazilTampilan_p1.style.display = "block";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                    beliDesaBrazilTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= brazil_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        brazilDesa1_p1 = true
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = true
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa2_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliDesaBrazilTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < brazil_desa && brazilDesa1_p1 && !brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= brazil_desa && brazilDesa1_p1 && brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaBrazilTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaBrazilTampilan_p1.style.display = "block";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                    beliDesaBrazilTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= brazil_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        brazilDesa1_p1 = true
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = true
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = true
                        brazilDesa3_p2 = false
                        desa3_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliDesaBrazilTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < brazil_desa && brazilDesa1_p1 && brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= brazil_kota && brazilDesa1_p1 && brazilDesa2_p1
                    && brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaBrazilTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaBrazilTampilan_p1.style.display = "block";
                    beliKotaBrazilTampilan_p2.style.display = "none";
                    beliKotaBrazilTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= brazil_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        brazilKota1_p1 = true
                        brazilKota1_p2 = false
                        brazilKota2_p1 = false
                        brazilKota2_p2 = false
                        kota1_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliKotaBrazilTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < brazil_desa && brazilDesa1_p1 && brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaBrazilTampilan_p1.style.display = "none";
                    beliKotaBrazilTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= brazil_kota && brazilDesa1_p1 && brazilDesa2_p1
                    && brazilDesa3_p1 && brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaBrazilTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaBrazilTampilan_p1.style.display = "block";
                    beliKotaBrazilTampilan_p2.style.display = "none";
                    beliKotaBrazilTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= brazil_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        brazilKota1_p1 = true
                        brazilKota1_p2 = false
                        brazilKota2_p1 = true
                        brazilKota2_p2 = false
                        kota2_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliKotaBrazilTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < brazil_desa && brazilDesa1_p1 && brazilDesa2_p1
                    && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaBrazilTampilan_p1.style.display = "none";
                    beliKotaBrazilTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_brazil_dibeli && !brazil_p1) {
                exitBrazilTampilan.style.display = "block"
                // TOMBOL BELI
                beliBrazilTampilan_p1.style.display = "none";
                beliBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaBrazilTampilan_p1.style.display = "none";
                beliDesaBrazilTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaBrazilTampilan_p1.style.display = "none";
                beliKotaBrazilTampilan_p2.style.display = "none";
                exitBrazilTampilan.addEventListener("click", function close() {
                    brazilTampilan.style.display = "none"
                    exitBrazilTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < brazil_only && !apakah_brazil_dibeli) {
                exitBrazilTampilan.style.display = "block"
                // TOMBOL BELI
                beliBrazilTampilan_p1.style.display = "none";
                beliBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaBrazilTampilan_p1.style.display = "none";
                beliDesaBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaBrazilTampilan_p1.style.display = "none";
                beliKotaBrazilTampilan_p2.style.display = "none";
                exitBrazilTampilan.addEventListener("click", function close() {
                    brazilTampilan.style.display = "none"
                    exitBrazilTampilan.removeEventListener("click", close)
                })
            }
            negaraBrazil.removeEventListener("click", closen)
        });
    } else if ((posY_p2 == 265 && posX_p2 == 835) && 
        (posY_p1 != 265 && (posX_p1 == 335 || posX_p1 == 435 || posX_p1 == 535 || 
        posX_p1 == 635 || posX_p1 == 735 || posX_p1 == 835))) {
        negaraBrazil.addEventListener("click", function closen() {
            brazilTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= brazil_only && !apakah_brazil_dibeli && !brazil_p2) {
                exitBrazilTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliBrazilTampilan_p1.style.display = "none";
                beliBrazilTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaBrazilTampilan_p1.style.display = "none";
                beliDesaBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaBrazilTampilan_p1.style.display = "none";
                beliKotaBrazilTampilan_p2.style.display = "none";
                beliBrazilTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= brazil_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_brazil_dibeli = true;
                    brazil_p1 = false
                    brazil_p2 = true
                    negaraBrazil.style.border = "5px solid darkred"
                    brazilTampilan.style.display = "none"
                    beliBrazilTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_brazil_dibeli && brazil_p2) {
                exitBrazilTampilan.style.display = "none"
                // TOMBOL JUAL
                beliBrazilTampilan_p1.style.display = "none";
                beliBrazilTampilan_p2.style.display = "block";
                // JUAL
                if (!brazilDesa1_p2 && !brazilDesa2_p2 && !brazilDesa3_p2 
                    && !brazilKota1_p2 && !brazilKota2_p2) {
                    beliBrazilTampilan_p2.innerHTML = "Jual P2"
                    beliBrazilTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += brazil_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_brazil_dibeli = false;
                        brazil_p1 = false
                        brazil_p2 = false
                        negaraBrazil.style.border = "1px solid white"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p2.innerHTML = "Beli P2"
                        beliBrazilTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (brazilDesa1_p2 && !brazilDesa2_p2 && !brazilDesa3_p2
                    && !brazilKota1_p2 && !brazilKota2_p2) {
                    beliBrazilTampilan_p2.innerHTML = "Jual Desa P2"
                    beliBrazilTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += brazil_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = false
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa1_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p2.innerHTML = "Jual P2"
                        beliBrazilTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (brazilDesa1_p2 && brazilDesa2_p2 && !brazilDesa3_p2
                    && !brazilKota1_p2 && !brazilKota2_p2) {
                    beliBrazilTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliBrazilTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += brazil_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = true
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa2_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p2.innerHTML = "Jual Desa P2"
                        beliBrazilTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (brazilDesa1_p2 && brazilDesa2_p2 && brazilDesa3_p2
                    && !brazilKota1_p2 && !brazilKota2_p2) {
                    beliBrazilTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliBrazilTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += brazil_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = true
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = true
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa3_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliBrazilTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (brazilDesa1_p2 && brazilDesa2_p2 && brazilDesa3_p2
                    && brazilKota1_p2 && !brazilKota2_p2) {
                    beliBrazilTampilan_p2.innerHTML = "Jual Kota P2"
                    beliBrazilTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += brazil_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        brazilKota1_p1 = false
                        brazilKota1_p2 = false
                        brazilKota2_p1 = false
                        brazilKota2_p2 = false
                        kota1_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliBrazilTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (brazilDesa1_p2 && brazilDesa2_p2 && brazilDesa3_p2
                    && brazilKota1_p2 && brazilKota2_p2) {
                    beliBrazilTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliBrazilTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += brazil_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        brazilKota1_p1 = false
                        brazilKota1_p2 = true
                        brazilKota2_p1 = false
                        brazilKota2_p2 = false
                        kota2_brazil.style.display = "none"
                        brazilTampilan.style.display = "none"
                        beliBrazilTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliBrazilTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= brazil_desa && !brazilDesa1_p2 && !brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "block";
                    beliDesaBrazilTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= brazil_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = true
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = false
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa1_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliDesaBrazilTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < brazil_desa && !brazilDesa1_p2 && !brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= brazil_desa && brazilDesa1_p2 && !brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaBrazilTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "block";
                    beliDesaBrazilTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= brazil_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = true
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = true
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = false
                        desa2_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliDesaBrazilTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < brazil_desa && brazilDesa1_p2 && !brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= brazil_desa && brazilDesa1_p2 && brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaBrazilTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "block";
                    beliDesaBrazilTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= brazil_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        brazilDesa1_p1 = false
                        brazilDesa1_p2 = true
                        brazilDesa2_p1 = false
                        brazilDesa2_p2 = true
                        brazilDesa3_p1 = false
                        brazilDesa3_p2 = true
                        desa3_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliDesaBrazilTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < brazil_desa && brazilDesa1_p2 && brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaBrazilTampilan_p1.style.display = "none";
                    beliDesaBrazilTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= brazil_kota && brazilDesa1_p2 && brazilDesa2_p2
                    && brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaBrazilTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaBrazilTampilan_p1.style.display = "none";
                    beliKotaBrazilTampilan_p2.style.display = "block";
                    beliKotaBrazilTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= brazil_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        brazilKota1_p1 = false
                        brazilKota1_p2 = true
                        brazilKota2_p1 = false
                        brazilKota2_p2 = false
                        kota1_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliKotaBrazilTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < brazil_desa && brazilDesa1_p2 && brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaBrazilTampilan_p1.style.display = "none";
                    beliKotaBrazilTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= brazil_kota && brazilDesa1_p2 && brazilDesa2_p2
                    && brazilDesa3_p2 && brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaBrazilTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaBrazilTampilan_p1.style.display = "none";
                    beliKotaBrazilTampilan_p2.style.display = "block";
                    beliKotaBrazilTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= brazil_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        brazilKota1_p1 = false
                        brazilKota1_p2 = true
                        brazilKota2_p1 = false
                        brazilKota2_p2 = true
                        kota2_brazil.style.display = "block"
                        brazilTampilan.style.display = "none"
                        beliKotaBrazilTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < brazil_desa && brazilDesa1_p2 && brazilDesa2_p2
                    && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaBrazilTampilan_p1.style.display = "none";
                    beliKotaBrazilTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_brazil_dibeli && !brazil_p2) {
                exitBrazilTampilan.style.display = "block"
                // TOMBOL BELI
                beliBrazilTampilan_p1.style.display = "none";
                beliBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaBrazilTampilan_p1.style.display = "none";
                beliDesaBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaBrazilTampilan_p1.style.display = "none";
                beliKotaBrazilTampilan_p2.style.display = "none";
                exitBrazilTampilan.addEventListener("click", function close() {
                    brazilTampilan.style.display = "none"
                    exitBrazilTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < brazil_only && !apakah_brazil_dibeli) {
                exitBrazilTampilan.style.display = "block"
                // TOMBOL BELI
                beliBrazilTampilan_p1.style.display = "none";
                beliBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaBrazilTampilan_p1.style.display = "none";
                beliDesaBrazilTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaBrazilTampilan_p1.style.display = "none";
                beliKotaBrazilTampilan_p2.style.display = "none";
                exitBrazilTampilan.addEventListener("click", function close() {
                    brazilTampilan.style.display = "none"
                    exitBrazilTampilan.removeEventListener("click", close)
                })
            }
            negaraBrazil.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 835 && posX_p2 == 835 && posY_p1 == 265 && posY_p2 == 265) ||
        (posX_p1 != 835 && posX_p2 != 835 || posY_p1 != 265 && posY_p2 != 265)) {
        negaraBrazil.addEventListener("click", function closen() {
            brazilTampilan.style.display = "block"
            exitBrazilTampilan.style.display = "block"
            // TOMBOL BELI
            beliBrazilTampilan_p1.style.display = "none";
            beliBrazilTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaBrazilTampilan_p1.style.display = "none";
            beliDesaBrazilTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaBrazilTampilan_p1.style.display = "none";
            beliKotaBrazilTampilan_p2.style.display = "none";
            exitBrazilTampilan.addEventListener("click", function close() {
                brazilTampilan.style.display = "none"
                exitBrazilTampilan.removeEventListener("click", close)
            })
            negaraBrazil.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_brazil_dibeli && !brazil_p1 && posX_p1 == 335 && posY_p1 == 265 && !brazil_p1_kenaPajak
        && !brazilDesa1_p2 && !brazilDesa2_p2 && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
        moneyPlayer1 -= brazil_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        brazil_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_brazil_dibeli && !brazil_p1 && posX_p1 == 835 && posY_p1 == 265 && !brazil_p1_kenaPajak
        && brazilDesa1_p2 && !brazilDesa2_p2 && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
        moneyPlayer1 -= brazil_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        brazil_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_brazil_dibeli && !brazil_p1 && posX_p1 == 835 && posY_p1 == 265 && !brazil_p1_kenaPajak
        && brazilDesa1_p2 && brazilDesa2_p2 && !brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
        moneyPlayer1 -= brazil_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        brazil_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_brazil_dibeli && !brazil_p1 && posX_p1 == 835 && posY_p1 == 265 && !brazil_p1_kenaPajak
        && brazilDesa1_p2 && brazilDesa2_p2 && brazilDesa3_p2 && !brazilKota1_p2 && !brazilKota2_p2) {
        moneyPlayer1 -= brazil_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        brazil_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_brazil_dibeli && !brazil_p1 && posX_p1 == 835 && posY_p1 == 265 && !brazil_p1_kenaPajak
        && brazilDesa1_p2 && brazilDesa2_p2 && brazilDesa3_p2 && brazilKota1_p2 && !brazilKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - brazil_pajak_desa*3 - brazil_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        brazil_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_brazil_dibeli && !brazil_p1 && posX_p1 == 835 && posY_p1 == 265 && !brazil_p1_kenaPajak
        && brazilDesa1_p2 && brazilDesa2_p2 && brazilDesa3_p2 && brazilKota1_p2 && brazilKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - brazil_pajak_desa*3 - brazil_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        brazil_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_brazil_dibeli && !brazil_p2 && posX_p2 == 835 && posY_p2 == 265 && !brazil_p2_kenaPajak
        && !brazilDesa1_p1 && !brazilDesa2_p1 && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
        moneyPlayer2 -= brazil_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        brazil_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_brazil_dibeli && !brazil_p2 && posX_p2 == 835 && posY_p2 == 265 && !brazil_p2_kenaPajak
        && brazilDesa1_p1 && !brazilDesa2_p1 && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
        moneyPlayer2 -= brazil_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        brazil_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_brazil_dibeli && !brazil_p2 && posX_p2 == 835 && posY_p2 == 265 && !brazil_p2_kenaPajak
        && brazilDesa1_p1 && brazilDesa2_p1 && !brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
        moneyPlayer2 -= brazil_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        brazil_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_brazil_dibeli && !brazil_p2 && posX_p2 == 835 && posY_p2 == 265 && !brazil_p2_kenaPajak
        && brazilDesa1_p1 && brazilDesa2_p1 && brazilDesa3_p1 && !brazilKota1_p1 && !brazilKota2_p1) {
        moneyPlayer2 -= brazil_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        brazil_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_brazil_dibeli && !brazil_p2 && posX_p2 == 835 && posY_p2 == 265 && !brazil_p2_kenaPajak
        && brazilDesa1_p1 && brazilDesa2_p1 && brazilDesa3_p1 && brazilKota1_p1 && !brazilKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - brazil_pajak_desa*3 - brazil_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        brazil_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_brazil_dibeli && !brazil_p2 && posX_p2 == 835 && posY_p2 == 265 && !brazil_p2_kenaPajak
        && brazilDesa1_p1 && brazilDesa2_p1 && brazilDesa3_p1 && brazilKota1_p1 && brazilKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - brazil_pajak_desa*3 - brazil_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        brazil_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 < 835 && posY_p1 == 565 || posX_p2 < 835 && posY_p2 == 565) {
        brazil_p1_kenaPajak = false
        brazil_p2_kenaPajak = false
    } 
}