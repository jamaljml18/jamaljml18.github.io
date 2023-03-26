function p12BeliThailand() {
    negaraThailand.removeEventListener("click", p12BeliThailand)
    if ((posX_p1 == 535 && posY_p1 == 565) && 
        (posX_p2 != 535 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraThailand.addEventListener("click", function closen() {
            thailandTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= thai_only && !apakah_thai_dibeli) {
                exitThailandTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliThailandTampilan_p1.style.display = "block";
                beliThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaThailandTampilan_p1.style.display = "none";
                beliDesaThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaThailandTampilan_p1.style.display = "none";
                beliKotaThailandTampilan_p2.style.display = "none";
                beliThailandTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= thai_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_thai_dibeli = true;
                    thai_p1 = true
                    thai_p2 = false
                    negaraThailand.style.border = "5px solid darkblue"
                    thailandTampilan.style.display = "none"
                    beliThailandTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_thai_dibeli && thai_p1) {
                exitThailandTampilan.style.display = "none"
                // TOMBOL JUAL
                beliThailandTampilan_p1.style.display = "block";
                beliThailandTampilan_p2.style.display = "none";
                // JUAL
                if (!thaiDesa1_p1 && !thaiDesa2_p1 && !thaiDesa3_p1 
                    && !thaiKota1_p1 && !thaiKota2_p1) {
                    beliThailandTampilan_p1.innerHTML = "Jual P1"
                    beliThailandTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += thai_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_thai_dibeli = false;
                        thai_p1 = false
                        thai_p2 = false
                        negaraThailand.style.border = "1px solid white"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p1.innerHTML = "Beli P1"
                        beliThailandTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (thaiDesa1_p1 && !thaiDesa2_p1 && !thaiDesa3_p1
                    && !thaiKota1_p1 && !thaiKota2_p1) {
                    beliThailandTampilan_p1.innerHTML = "Jual Desa P1"
                    beliThailandTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += thai_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa1_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p1.innerHTML = "Jual P1"
                        beliThailandTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (thaiDesa1_p1 && thaiDesa2_p1 && !thaiDesa3_p1
                    && !thaiKota1_p1 && !thaiKota2_p1) {
                    beliThailandTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliThailandTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += thai_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        thaiDesa1_p1 = true
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa2_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p1.innerHTML = "Jual Desa P1"
                        beliThailandTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (thaiDesa1_p1 && thaiDesa2_p1 && thaiDesa3_p1
                    && !thaiKota1_p1 && !thaiKota2_p1) {
                    beliThailandTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliThailandTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += thai_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        thaiDesa1_p1 = true
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = true
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa3_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliThailandTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (thaiDesa1_p1 && thaiDesa2_p1 && thaiDesa3_p1
                    && thaiKota1_p1 && !thaiKota2_p1) {
                    beliThailandTampilan_p1.innerHTML = "Jual Kota P1"
                    beliThailandTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += thai_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        thaiKota1_p1 = false
                        thaiKota1_p2 = false
                        thaiKota2_p1 = false
                        thaiKota2_p2 = false
                        kota1_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliThailandTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (thaiDesa1_p1 && thaiDesa2_p1 && thaiDesa3_p1
                    && thaiKota1_p1 && thaiKota2_p1) {
                    beliThailandTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliThailandTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += thai_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        thaiKota1_p1 = true
                        thaiKota1_p2 = false
                        thaiKota2_p1 = false
                        thaiKota2_p2 = false
                        kota2_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliThailandTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= thai_desa && !thaiDesa1_p1 && !thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaThailandTampilan_p1.style.display = "block";
                    beliDesaThailandTampilan_p2.style.display = "none";
                    beliDesaThailandTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= thai_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        thaiDesa1_p1 = true
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa1_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliDesaThailandTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < thai_desa && !thaiDesa1_p1 && !thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= thai_desa && thaiDesa1_p1 && !thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaThailandTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaThailandTampilan_p1.style.display = "block";
                    beliDesaThailandTampilan_p2.style.display = "none";
                    beliDesaThailandTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= thai_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        thaiDesa1_p1 = true
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = true
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa2_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliDesaThailandTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < thai_desa && thaiDesa1_p1 && !thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= thai_desa && thaiDesa1_p1 && thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaThailandTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaThailandTampilan_p1.style.display = "block";
                    beliDesaThailandTampilan_p2.style.display = "none";
                    beliDesaThailandTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= thai_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        thaiDesa1_p1 = true
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = true
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = true
                        thaiDesa3_p2 = false
                        desa3_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliDesaThailandTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < thai_desa && thaiDesa1_p1 && thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= thai_kota && thaiDesa1_p1 && thaiDesa2_p1
                    && thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaThailandTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaThailandTampilan_p1.style.display = "block";
                    beliKotaThailandTampilan_p2.style.display = "none";
                    beliKotaThailandTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= thai_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        thaiKota1_p1 = true
                        thaiKota1_p2 = false
                        thaiKota2_p1 = false
                        thaiKota2_p2 = false
                        kota1_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliKotaThailandTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < thai_desa && thaiDesa1_p1 && thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaThailandTampilan_p1.style.display = "none";
                    beliKotaThailandTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= thai_kota && thaiDesa1_p1 && thaiDesa2_p1
                    && thaiDesa3_p1 && thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaThailandTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaThailandTampilan_p1.style.display = "block";
                    beliKotaThailandTampilan_p2.style.display = "none";
                    beliKotaThailandTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= thai_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        thaiKota1_p1 = true
                        thaiKota1_p2 = false
                        thaiKota2_p1 = true
                        thaiKota2_p2 = false
                        kota2_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliKotaThailandTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < thai_desa && thaiDesa1_p1 && thaiDesa2_p1
                    && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaThailandTampilan_p1.style.display = "none";
                    beliKotaThailandTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_thai_dibeli && !thai_p1) {
                exitThailandTampilan.style.display = "block"
                // TOMBOL BELI
                beliThailandTampilan_p1.style.display = "none";
                beliThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaThailandTampilan_p1.style.display = "none";
                beliDesaThailandTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaThailandTampilan_p1.style.display = "none";
                beliKotaThailandTampilan_p2.style.display = "none";
                exitThailandTampilan.addEventListener("click", function close() {
                    thailandTampilan.style.display = "none"
                    exitThailandTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < thai_only && !apakah_thai_dibeli) {
                exitThailandTampilan.style.display = "block"
                // TOMBOL BELI
                beliThailandTampilan_p1.style.display = "none";
                beliThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaThailandTampilan_p1.style.display = "none";
                beliDesaThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaThailandTampilan_p1.style.display = "none";
                beliKotaThailandTampilan_p2.style.display = "none";
                exitThailandTampilan.addEventListener("click", function close() {
                    thailandTampilan.style.display = "none"
                    exitThailandTampilan.removeEventListener("click", close)
                })
            }
            negaraThailand.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 535 && posY_p2 == 565) && 
        (posX_p1 != 535 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraThailand.addEventListener("click", function closen() {
            thailandTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= thai_only && !apakah_thai_dibeli && !thai_p2) {
                exitThailandTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliThailandTampilan_p1.style.display = "none";
                beliThailandTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaThailandTampilan_p1.style.display = "none";
                beliDesaThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaThailandTampilan_p1.style.display = "none";
                beliKotaThailandTampilan_p2.style.display = "none";
                beliThailandTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= thai_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_thai_dibeli = true;
                    thai_p1 = false
                    thai_p2 = true
                    negaraThailand.style.border = "5px solid darkred"
                    thailandTampilan.style.display = "none"
                    beliThailandTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_thai_dibeli && thai_p2) {
                exitThailandTampilan.style.display = "none"
                // TOMBOL JUAL
                beliThailandTampilan_p1.style.display = "none";
                beliThailandTampilan_p2.style.display = "block";
                // JUAL
                if (!thaiDesa1_p2 && !thaiDesa2_p2 && !thaiDesa3_p2 
                    && !thaiKota1_p2 && !thaiKota2_p2) {
                    beliThailandTampilan_p2.innerHTML = "Jual P2"
                    beliThailandTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += thai_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_thai_dibeli = false;
                        thai_p1 = false
                        thai_p2 = false
                        negaraThailand.style.border = "1px solid white"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p2.innerHTML = "Beli P2"
                        beliThailandTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (thaiDesa1_p2 && !thaiDesa2_p2 && !thaiDesa3_p2
                    && !thaiKota1_p2 && !thaiKota2_p2) {
                    beliThailandTampilan_p2.innerHTML = "Jual Desa P2"
                    beliThailandTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += thai_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = false
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa1_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p2.innerHTML = "Jual P2"
                        beliThailandTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (thaiDesa1_p2 && thaiDesa2_p2 && !thaiDesa3_p2
                    && !thaiKota1_p2 && !thaiKota2_p2) {
                    beliThailandTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliThailandTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += thai_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = true
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa2_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p2.innerHTML = "Jual Desa P2"
                        beliThailandTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (thaiDesa1_p2 && thaiDesa2_p2 && thaiDesa3_p2
                    && !thaiKota1_p2 && !thaiKota2_p2) {
                    beliThailandTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliThailandTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += thai_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = true
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = true
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa3_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliThailandTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (thaiDesa1_p2 && thaiDesa2_p2 && thaiDesa3_p2
                    && thaiKota1_p2 && !thaiKota2_p2) {
                    beliThailandTampilan_p2.innerHTML = "Jual Kota P2"
                    beliThailandTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += thai_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        thaiKota1_p1 = false
                        thaiKota1_p2 = false
                        thaiKota2_p1 = false
                        thaiKota2_p2 = false
                        kota1_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliThailandTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (thaiDesa1_p2 && thaiDesa2_p2 && thaiDesa3_p2
                    && thaiKota1_p2 && thaiKota2_p2) {
                    beliThailandTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliThailandTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += thai_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        thaiKota1_p1 = false
                        thaiKota1_p2 = true
                        thaiKota2_p1 = false
                        thaiKota2_p2 = false
                        kota2_thailand.style.display = "none"
                        thailandTampilan.style.display = "none"
                        beliThailandTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliThailandTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= thai_desa && !thaiDesa1_p2 && !thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "block";
                    beliDesaThailandTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= thai_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = true
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = false
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa1_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliDesaThailandTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < thai_desa && !thaiDesa1_p2 && !thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= thai_desa && thaiDesa1_p2 && !thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaThailandTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "block";
                    beliDesaThailandTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= thai_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = true
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = true
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = false
                        desa2_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliDesaThailandTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < thai_desa && thaiDesa1_p2 && !thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= thai_desa && thaiDesa1_p2 && thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaThailandTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "block";
                    beliDesaThailandTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= thai_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        thaiDesa1_p1 = false
                        thaiDesa1_p2 = true
                        thaiDesa2_p1 = false
                        thaiDesa2_p2 = true
                        thaiDesa3_p1 = false
                        thaiDesa3_p2 = true
                        desa3_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliDesaThailandTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < thai_desa && thaiDesa1_p2 && thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaThailandTampilan_p1.style.display = "none";
                    beliDesaThailandTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= thai_kota && thaiDesa1_p2 && thaiDesa2_p2
                    && thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaThailandTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaThailandTampilan_p1.style.display = "none";
                    beliKotaThailandTampilan_p2.style.display = "block";
                    beliKotaThailandTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= thai_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        thaiKota1_p1 = false
                        thaiKota1_p2 = true
                        thaiKota2_p1 = false
                        thaiKota2_p2 = false
                        kota1_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliKotaThailandTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < thai_desa && thaiDesa1_p2 && thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaThailandTampilan_p1.style.display = "none";
                    beliKotaThailandTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= thai_kota && thaiDesa1_p2 && thaiDesa2_p2
                    && thaiDesa3_p2 && thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaThailandTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaThailandTampilan_p1.style.display = "none";
                    beliKotaThailandTampilan_p2.style.display = "block";
                    beliKotaThailandTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= thai_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        thaiKota1_p1 = false
                        thaiKota1_p2 = true
                        thaiKota2_p1 = false
                        thaiKota2_p2 = true
                        kota2_thailand.style.display = "block"
                        thailandTampilan.style.display = "none"
                        beliKotaThailandTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < thai_desa && thaiDesa1_p2 && thaiDesa2_p2
                    && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaThailandTampilan_p1.style.display = "none";
                    beliKotaThailandTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_thai_dibeli && !thai_p2) {
                exitThailandTampilan.style.display = "block"
                // TOMBOL BELI
                beliThailandTampilan_p1.style.display = "none";
                beliThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaThailandTampilan_p1.style.display = "none";
                beliDesaThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaThailandTampilan_p1.style.display = "none";
                beliKotaThailandTampilan_p2.style.display = "none";
                exitThailandTampilan.addEventListener("click", function close() {
                    thailandTampilan.style.display = "none"
                    exitThailandTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < thai_only && !apakah_thai_dibeli) {
                exitThailandTampilan.style.display = "block"
                // TOMBOL BELI
                beliThailandTampilan_p1.style.display = "none";
                beliThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaThailandTampilan_p1.style.display = "none";
                beliDesaThailandTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaThailandTampilan_p1.style.display = "none";
                beliKotaThailandTampilan_p2.style.display = "none";
                exitThailandTampilan.addEventListener("click", function close() {
                    thailandTampilan.style.display = "none"
                    exitThailandTampilan.removeEventListener("click", close)
                })
            }
            negaraThailand.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 535 && posX_p2 == 535 && posY_p2 == 565 && posY_p2 == 565) ||
        (posX_p1 != 535 && posX_p2 != 535 || posY_p2 != 565 && posY_p2 != 565)) {
        negaraThailand.addEventListener("click", function closen() {
            thailandTampilan.style.display = "block"
            exitThailandTampilan.style.display = "block"
            // TOMBOL BELI
            beliThailandTampilan_p1.style.display = "none";
            beliThailandTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaThailandTampilan_p1.style.display = "none";
            beliDesaThailandTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaThailandTampilan_p1.style.display = "none";
            beliKotaThailandTampilan_p2.style.display = "none";
            exitThailandTampilan.addEventListener("click", function close() {
                thailandTampilan.style.display = "none"
                exitThailandTampilan.removeEventListener("click", close)
            })
            negaraThailand.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_thai_dibeli && !thai_p1 && posX_p1 == 535 && posY_p1 == 565 && !thai_p1_kenaPajak
        && !thaiDesa1_p2 && !thaiDesa2_p2 && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
        moneyPlayer1 -= thai_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        thai_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_thai_dibeli && !thai_p1 && posX_p1 == 535 && posY_p1 == 565 && !thai_p1_kenaPajak
        && thaiDesa1_p2 && !thaiDesa2_p2 && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
        moneyPlayer1 -= thai_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        thai_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_thai_dibeli && !thai_p1 && posX_p1 == 535 && posY_p1 == 565 && !thai_p1_kenaPajak
        && thaiDesa1_p2 && thaiDesa2_p2 && !thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
        moneyPlayer1 -= thai_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        thai_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_thai_dibeli && !thai_p1 && posX_p1 == 535 && posY_p1 == 565 && !thai_p1_kenaPajak
        && thaiDesa1_p2 && thaiDesa2_p2 && thaiDesa3_p2 && !thaiKota1_p2 && !thaiKota2_p2) {
        moneyPlayer1 -= thai_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        thai_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_thai_dibeli && !thai_p1 && posX_p1 == 535 && posY_p1 == 565 && !thai_p1_kenaPajak
        && thaiDesa1_p2 && thaiDesa2_p2 && thaiDesa3_p2 && thaiKota1_p2 && !thaiKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - thai_pajak_desa*3 - thai_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        thai_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_thai_dibeli && !thai_p1 && posX_p1 == 535 && posY_p1 == 565 && !thai_p1_kenaPajak
        && thaiDesa1_p2 && thaiDesa2_p2 && thaiDesa3_p2 && thaiKota1_p2 && thaiKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - thai_pajak_desa*3 - thai_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        thai_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_thai_dibeli && !thai_p2 && posX_p2 == 535 && posY_p2 == 565 && !thai_p2_kenaPajak
        && !thaiDesa1_p1 && !thaiDesa2_p1 && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
        moneyPlayer2 -= thai_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        thai_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_thai_dibeli && !thai_p2 && posX_p2 == 535 && posY_p2 == 565 && !thai_p2_kenaPajak
        && thaiDesa1_p1 && !thaiDesa2_p1 && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
        moneyPlayer2 -= thai_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        thai_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_thai_dibeli && !thai_p2 && posX_p2 == 535 && posY_p2 == 565 && !thai_p2_kenaPajak
        && thaiDesa1_p1 && thaiDesa2_p1 && !thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
        moneyPlayer2 -= thai_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        thai_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_thai_dibeli && !thai_p2 && posX_p2 == 535 && posY_p2 == 565 && !thai_p2_kenaPajak
        && thaiDesa1_p1 && thaiDesa2_p1 && thaiDesa3_p1 && !thaiKota1_p1 && !thaiKota2_p1) {
        moneyPlayer2 -= thai_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        thai_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_thai_dibeli && !thai_p2 && posX_p2 == 535 && posY_p2 == 565 && !thai_p2_kenaPajak
        && thaiDesa1_p1 && thaiDesa2_p1 && thaiDesa3_p1 && thaiKota1_p1 && !thaiKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - thai_pajak_desa*3 - thai_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        thai_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_thai_dibeli && !thai_p2 && posX_p2 == 535 && posY_p2 == 565 && !thai_p2_kenaPajak
        && thaiDesa1_p1 && thaiDesa2_p1 && thaiDesa3_p1 && thaiKota1_p1 && thaiKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - thai_pajak_desa*3 - thai_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        thai_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 335 && posY_p1 < 565 || posX_p2 == 335 && posY_p2 < 565) {
        thai_p1_kenaPajak = false
        thai_p2_kenaPajak = false
    } 
}