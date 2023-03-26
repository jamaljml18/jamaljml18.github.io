function p12BeliIndonesia() {
    negaraIndonesia.removeEventListener("click", p12BeliIndonesia)
    if ((posX_p1 == 735 && posY_p1 == 565) && 
        (posX_p2 != 735 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraIndonesia.addEventListener("click", function closen() {
            indonesiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= indo_only && !apakah_indo_dibeli) {
                exitIndonesiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliIndonesiaTampilan_p1.style.display = "block";
                beliIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndonesiaTampilan_p1.style.display = "none";
                beliDesaIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndonesiaTampilan_p1.style.display = "none";
                beliKotaIndonesiaTampilan_p2.style.display = "none";
                beliIndonesiaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= indo_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_indo_dibeli = true;
                    indo_p1 = true
                    indo_p2 = false
                    negaraIndonesia.style.border = "5px solid darkblue"
                    indonesiaTampilan.style.display = "none"
                    beliIndonesiaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_indo_dibeli && indo_p1) {
                exitIndonesiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliIndonesiaTampilan_p1.style.display = "block";
                beliIndonesiaTampilan_p2.style.display = "none";
                // JUAL
                if (!indoDesa1_p1 && !indoDesa2_p1 && !indoDesa3_p1 
                    && !indoKota1_p1 && !indoKota2_p1) {
                    beliIndonesiaTampilan_p1.innerHTML = "Jual P1"
                    beliIndonesiaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += indo_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_indo_dibeli = false;
                        indo_p1 = false
                        indo_p2 = false
                        negaraIndonesia.style.border = "1px solid white"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p1.innerHTML = "Beli P1"
                        beliIndonesiaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (indoDesa1_p1 && !indoDesa2_p1 && !indoDesa3_p1
                    && !indoKota1_p1 && !indoKota2_p1) {
                    beliIndonesiaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliIndonesiaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += indo_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indoDesa1_p1 = false
                        indoDesa1_p2 = false
                        indoDesa2_p1 = false
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa1_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p1.innerHTML = "Jual P1"
                        beliIndonesiaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (indoDesa1_p1 && indoDesa2_p1 && !indoDesa3_p1
                    && !indoKota1_p1 && !indoKota2_p1) {
                    beliIndonesiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliIndonesiaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += indo_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indoDesa1_p1 = true
                        indoDesa1_p2 = false
                        indoDesa2_p1 = false
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa2_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliIndonesiaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (indoDesa1_p1 && indoDesa2_p1 && indoDesa3_p1
                    && !indoKota1_p1 && !indoKota2_p1) {
                    beliIndonesiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliIndonesiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += indo_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indoDesa1_p1 = true
                        indoDesa1_p2 = false
                        indoDesa2_p1 = true
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa3_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliIndonesiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (indoDesa1_p1 && indoDesa2_p1 && indoDesa3_p1
                    && indoKota1_p1 && !indoKota2_p1) {
                    beliIndonesiaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliIndonesiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += indo_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indoKota1_p1 = false
                        indoKota1_p2 = false
                        indoKota2_p1 = false
                        indoKota2_p2 = false
                        kota1_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliIndonesiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (indoDesa1_p1 && indoDesa2_p1 && indoDesa3_p1
                    && indoKota1_p1 && indoKota2_p1) {
                    beliIndonesiaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliIndonesiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += indo_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indoKota1_p1 = true
                        indoKota1_p2 = false
                        indoKota2_p1 = false
                        indoKota2_p2 = false
                        kota2_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliIndonesiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= indo_desa && !indoDesa1_p1 && !indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaIndonesiaTampilan_p1.style.display = "block";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                    beliDesaIndonesiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indo_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indoDesa1_p1 = true
                        indoDesa1_p2 = false
                        indoDesa2_p1 = false
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa1_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliDesaIndonesiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < indo_desa && !indoDesa1_p1 && !indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= indo_desa && indoDesa1_p1 && !indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaIndonesiaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaIndonesiaTampilan_p1.style.display = "block";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                    beliDesaIndonesiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indo_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indoDesa1_p1 = true
                        indoDesa1_p2 = false
                        indoDesa2_p1 = true
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa2_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliDesaIndonesiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < indo_desa && indoDesa1_p1 && !indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= indo_desa && indoDesa1_p1 && indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaIndonesiaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaIndonesiaTampilan_p1.style.display = "block";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                    beliDesaIndonesiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indo_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indoDesa1_p1 = true
                        indoDesa1_p2 = false
                        indoDesa2_p1 = true
                        indoDesa2_p2 = false
                        indoDesa3_p1 = true
                        indoDesa3_p2 = false
                        desa3_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliDesaIndonesiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < indo_desa && indoDesa1_p1 && indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= indo_kota && indoDesa1_p1 && indoDesa2_p1
                    && indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaIndonesiaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaIndonesiaTampilan_p1.style.display = "block";
                    beliKotaIndonesiaTampilan_p2.style.display = "none";
                    beliKotaIndonesiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indo_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indoKota1_p1 = true
                        indoKota1_p2 = false
                        indoKota2_p1 = false
                        indoKota2_p2 = false
                        kota1_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliKotaIndonesiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < indo_desa && indoDesa1_p1 && indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndonesiaTampilan_p1.style.display = "none";
                    beliKotaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= indo_kota && indoDesa1_p1 && indoDesa2_p1
                    && indoDesa3_p1 && indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaIndonesiaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaIndonesiaTampilan_p1.style.display = "block";
                    beliKotaIndonesiaTampilan_p2.style.display = "none";
                    beliKotaIndonesiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= indo_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        indoKota1_p1 = true
                        indoKota1_p2 = false
                        indoKota2_p1 = true
                        indoKota2_p2 = false
                        kota2_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliKotaIndonesiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < indo_desa && indoDesa1_p1 && indoDesa2_p1
                    && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndonesiaTampilan_p1.style.display = "none";
                    beliKotaIndonesiaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_indo_dibeli && !indo_p1) {
                exitIndonesiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndonesiaTampilan_p1.style.display = "none";
                beliIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndonesiaTampilan_p1.style.display = "none";
                beliDesaIndonesiaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaIndonesiaTampilan_p1.style.display = "none";
                beliKotaIndonesiaTampilan_p2.style.display = "none";
                exitIndonesiaTampilan.addEventListener("click", function close() {
                    indonesiaTampilan.style.display = "none"
                    exitIndonesiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < indo_only && !apakah_indo_dibeli) {
                exitIndonesiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndonesiaTampilan_p1.style.display = "none";
                beliIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndonesiaTampilan_p1.style.display = "none";
                beliDesaIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndonesiaTampilan_p1.style.display = "none";
                beliKotaIndonesiaTampilan_p2.style.display = "none";
                exitIndonesiaTampilan.addEventListener("click", function close() {
                    indonesiaTampilan.style.display = "none"
                    exitIndonesiaTampilan.removeEventListener("click", close)
                })
            }
            negaraIndonesia.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 735 && posY_p2 == 565) && 
        (posX_p1 != 735 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraIndonesia.addEventListener("click", function closen() {
            indonesiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= indo_only && !apakah_indo_dibeli && !indo_p2) {
                exitIndonesiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliIndonesiaTampilan_p1.style.display = "none";
                beliIndonesiaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaIndonesiaTampilan_p1.style.display = "none";
                beliDesaIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndonesiaTampilan_p1.style.display = "none";
                beliKotaIndonesiaTampilan_p2.style.display = "none";
                beliIndonesiaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= indo_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_indo_dibeli = true;
                    indo_p1 = false
                    indo_p2 = true
                    negaraIndonesia.style.border = "5px solid darkred"
                    indonesiaTampilan.style.display = "none"
                    beliIndonesiaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_indo_dibeli && indo_p2) {
                exitIndonesiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliIndonesiaTampilan_p1.style.display = "none";
                beliIndonesiaTampilan_p2.style.display = "block";
                // JUAL
                if (!indoDesa1_p2 && !indoDesa2_p2 && !indoDesa3_p2 
                    && !indoKota1_p2 && !indoKota2_p2) {
                    beliIndonesiaTampilan_p2.innerHTML = "Jual P2"
                    beliIndonesiaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += indo_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_indo_dibeli = false;
                        indo_p1 = false
                        indo_p2 = false
                        negaraIndonesia.style.border = "1px solid white"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p2.innerHTML = "Beli P2"
                        beliIndonesiaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (indoDesa1_p2 && !indoDesa2_p2 && !indoDesa3_p2
                    && !indoKota1_p2 && !indoKota2_p2) {
                    beliIndonesiaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliIndonesiaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += indo_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indoDesa1_p1 = false
                        indoDesa1_p2 = false
                        indoDesa2_p1 = false
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa1_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p2.innerHTML = "Jual P2"
                        beliIndonesiaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (indoDesa1_p2 && indoDesa2_p2 && !indoDesa3_p2
                    && !indoKota1_p2 && !indoKota2_p2) {
                    beliIndonesiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliIndonesiaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += indo_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indoDesa1_p1 = false
                        indoDesa1_p2 = true
                        indoDesa2_p1 = false
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa2_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliIndonesiaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (indoDesa1_p2 && indoDesa2_p2 && indoDesa3_p2
                    && !indoKota1_p2 && !indoKota2_p2) {
                    beliIndonesiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliIndonesiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += indo_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        indoDesa1_p1 = false
                        indoDesa1_p2 = true
                        indoDesa2_p1 = false
                        indoDesa2_p2 = true
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa3_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliIndonesiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (indoDesa1_p2 && indoDesa2_p2 && indoDesa3_p2
                    && indoKota1_p2 && !indoKota2_p2) {
                    beliIndonesiaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliIndonesiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += indo_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indoKota1_p1 = false
                        indoKota1_p2 = false
                        indoKota2_p1 = false
                        indoKota2_p2 = false
                        kota1_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliIndonesiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (indoDesa1_p2 && indoDesa2_p2 && indoDesa3_p2
                    && indoKota1_p2 && indoKota2_p2) {
                    beliIndonesiaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliIndonesiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += indo_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        indoKota1_p1 = false
                        indoKota1_p2 = true
                        indoKota2_p1 = false
                        indoKota2_p2 = false
                        kota2_indonesia.style.display = "none"
                        indonesiaTampilan.style.display = "none"
                        beliIndonesiaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliIndonesiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= indo_desa && !indoDesa1_p2 && !indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "block";
                    beliDesaIndonesiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indo_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indoDesa1_p1 = false
                        indoDesa1_p2 = true
                        indoDesa2_p1 = false
                        indoDesa2_p2 = false
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa1_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliDesaIndonesiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < indo_desa && !indoDesa1_p2 && !indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= indo_desa && indoDesa1_p2 && !indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaIndonesiaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "block";
                    beliDesaIndonesiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indo_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indoDesa1_p1 = false
                        indoDesa1_p2 = true
                        indoDesa2_p1 = false
                        indoDesa2_p2 = true
                        indoDesa3_p1 = false
                        indoDesa3_p2 = false
                        desa2_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliDesaIndonesiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < indo_desa && indoDesa1_p2 && !indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= indo_desa && indoDesa1_p2 && indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaIndonesiaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "block";
                    beliDesaIndonesiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indo_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indoDesa1_p1 = false
                        indoDesa1_p2 = true
                        indoDesa2_p1 = false
                        indoDesa2_p2 = true
                        indoDesa3_p1 = false
                        indoDesa3_p2 = true
                        desa3_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliDesaIndonesiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < indo_desa && indoDesa1_p2 && indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaIndonesiaTampilan_p1.style.display = "none";
                    beliDesaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= indo_kota && indoDesa1_p2 && indoDesa2_p2
                    && indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaIndonesiaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaIndonesiaTampilan_p1.style.display = "none";
                    beliKotaIndonesiaTampilan_p2.style.display = "block";
                    beliKotaIndonesiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indo_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indoKota1_p1 = false
                        indoKota1_p2 = true
                        indoKota2_p1 = false
                        indoKota2_p2 = false
                        kota1_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliKotaIndonesiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < indo_desa && indoDesa1_p2 && indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndonesiaTampilan_p1.style.display = "none";
                    beliKotaIndonesiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= indo_kota && indoDesa1_p2 && indoDesa2_p2
                    && indoDesa3_p2 && indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaIndonesiaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaIndonesiaTampilan_p1.style.display = "none";
                    beliKotaIndonesiaTampilan_p2.style.display = "block";
                    beliKotaIndonesiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= indo_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        indoKota1_p1 = false
                        indoKota1_p2 = true
                        indoKota2_p1 = false
                        indoKota2_p2 = true
                        kota2_indonesia.style.display = "block"
                        indonesiaTampilan.style.display = "none"
                        beliKotaIndonesiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < indo_desa && indoDesa1_p2 && indoDesa2_p2
                    && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaIndonesiaTampilan_p1.style.display = "none";
                    beliKotaIndonesiaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_indo_dibeli && !indo_p2) {
                exitIndonesiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndonesiaTampilan_p1.style.display = "none";
                beliIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndonesiaTampilan_p1.style.display = "none";
                beliDesaIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndonesiaTampilan_p1.style.display = "none";
                beliKotaIndonesiaTampilan_p2.style.display = "none";
                exitIndonesiaTampilan.addEventListener("click", function close() {
                    indonesiaTampilan.style.display = "none"
                    exitIndonesiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < indo_only && !apakah_indo_dibeli) {
                exitIndonesiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliIndonesiaTampilan_p1.style.display = "none";
                beliIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaIndonesiaTampilan_p1.style.display = "none";
                beliDesaIndonesiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaIndonesiaTampilan_p1.style.display = "none";
                beliKotaIndonesiaTampilan_p2.style.display = "none";
                exitIndonesiaTampilan.addEventListener("click", function close() {
                    indonesiaTampilan.style.display = "none"
                    exitIndonesiaTampilan.removeEventListener("click", close)
                })
            }
            negaraIndonesia.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 735 && posX_p2 == 735 && posY_p2 == 565 && posY_p2 == 565) ||
        (posX_p1 != 735 && posX_p2 != 735 || posY_p2 != 565 && posY_p2 != 565)) {
        negaraIndonesia.addEventListener("click", function closen() {
            indonesiaTampilan.style.display = "block"
            exitIndonesiaTampilan.style.display = "block"
            // TOMBOL BELI
            beliIndonesiaTampilan_p1.style.display = "none";
            beliIndonesiaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaIndonesiaTampilan_p1.style.display = "none";
            beliDesaIndonesiaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaIndonesiaTampilan_p1.style.display = "none";
            beliKotaIndonesiaTampilan_p2.style.display = "none";
            exitIndonesiaTampilan.addEventListener("click", function close() {
                indonesiaTampilan.style.display = "none"
                exitIndonesiaTampilan.removeEventListener("click", close)
            })
            negaraIndonesia.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_indo_dibeli && !indo_p1 && posX_p1 == 735 && posY_p1 == 565 && !indo_p1_kenaPajak
        && !indoDesa1_p2 && !indoDesa2_p2 && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
        moneyPlayer1 -= indo_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        indo_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_indo_dibeli && !indo_p1 && posX_p1 == 735 && posY_p1 == 565 && !indo_p1_kenaPajak
        && indoDesa1_p2 && !indoDesa2_p2 && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
        moneyPlayer1 -= indo_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indo_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_indo_dibeli && !indo_p1 && posX_p1 == 735 && posY_p1 == 565 && !indo_p1_kenaPajak
        && indoDesa1_p2 && indoDesa2_p2 && !indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
        moneyPlayer1 -= indo_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indo_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_indo_dibeli && !indo_p1 && posX_p1 == 735 && posY_p1 == 565 && !indo_p1_kenaPajak
        && indoDesa1_p2 && indoDesa2_p2 && indoDesa3_p2 && !indoKota1_p2 && !indoKota2_p2) {
        moneyPlayer1 -= indo_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indo_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_indo_dibeli && !indo_p1 && posX_p1 == 735 && posY_p1 == 565 && !indo_p1_kenaPajak
        && indoDesa1_p2 && indoDesa2_p2 && indoDesa3_p2 && indoKota1_p2 && !indoKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - indo_pajak_desa*3 - indo_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indo_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_indo_dibeli && !indo_p1 && posX_p1 == 735 && posY_p1 == 565 && !indo_p1_kenaPajak
        && indoDesa1_p2 && indoDesa2_p2 && indoDesa3_p2 && indoKota1_p2 && indoKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - indo_pajak_desa*3 - indo_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        indo_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_indo_dibeli && !indo_p2 && posX_p2 == 735 && posY_p2 == 565 && !indo_p2_kenaPajak
        && !indoDesa1_p1 && !indoDesa2_p1 && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
        moneyPlayer2 -= indo_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indo_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_indo_dibeli && !indo_p2 && posX_p2 == 735 && posY_p2 == 565 && !indo_p2_kenaPajak
        && indoDesa1_p1 && !indoDesa2_p1 && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
        moneyPlayer2 -= indo_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indo_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_indo_dibeli && !indo_p2 && posX_p2 == 735 && posY_p2 == 565 && !indo_p2_kenaPajak
        && indoDesa1_p1 && indoDesa2_p1 && !indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
        moneyPlayer2 -= indo_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indo_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_indo_dibeli && !indo_p2 && posX_p2 == 735 && posY_p2 == 565 && !indo_p2_kenaPajak
        && indoDesa1_p1 && indoDesa2_p1 && indoDesa3_p1 && !indoKota1_p1 && !indoKota2_p1) {
        moneyPlayer2 -= indo_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indo_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_indo_dibeli && !indo_p2 && posX_p2 == 735 && posY_p2 == 565 && !indo_p2_kenaPajak
        && indoDesa1_p1 && indoDesa2_p1 && indoDesa3_p1 && indoKota1_p1 && !indoKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - indo_pajak_desa*3 - indo_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indo_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_indo_dibeli && !indo_p2 && posX_p2 == 735 && posY_p2 == 565 && !indo_p2_kenaPajak
        && indoDesa1_p1 && indoDesa2_p1 && indoDesa3_p1 && indoKota1_p1 && indoKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - indo_pajak_desa*3 - indo_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        indo_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 335 && posY_p1 < 565 || posX_p2 == 335 && posY_p2 < 565) {
        indo_p1_kenaPajak = false
        indo_p2_kenaPajak = false
    } 
}