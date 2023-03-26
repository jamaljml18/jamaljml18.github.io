function p12BeliSingapura() {
    negaraSingapura.removeEventListener("click", p12BeliSingapura)
    if ((posX_p1 == 435 && posY_p1 == 565) && 
        (posX_p2 != 435 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraSingapura.addEventListener("click", function closen() {
            singapuraTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= singa_only && !apakah_singa_dibeli) {
                exitSingapuraTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliSingapuraTampilan_p1.style.display = "block";
                beliSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaSingapuraTampilan_p1.style.display = "none";
                beliDesaSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaSingapuraTampilan_p1.style.display = "none";
                beliKotaSingapuraTampilan_p2.style.display = "none";
                beliSingapuraTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= singa_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_singa_dibeli = true;
                    singa_p1 = true
                    singa_p2 = false
                    negaraSingapura.style.border = "5px solid darkblue"
                    singapuraTampilan.style.display = "none"
                    beliSingapuraTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_singa_dibeli && singa_p1) {
                exitSingapuraTampilan.style.display = "none"
                // TOMBOL JUAL
                beliSingapuraTampilan_p1.style.display = "block";
                beliSingapuraTampilan_p2.style.display = "none";
                // JUAL
                if (!singaDesa1_p1 && !singaDesa2_p1 && !singaDesa3_p1 
                    && !singaKota1_p1 && !singaKota2_p1) {
                    beliSingapuraTampilan_p1.innerHTML = "Jual P1"
                    beliSingapuraTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += singa_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_singa_dibeli = false;
                        singa_p1 = false
                        singa_p2 = false
                        negaraSingapura.style.border = "1px solid white"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p1.innerHTML = "Beli P1"
                        beliSingapuraTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (singaDesa1_p1 && !singaDesa2_p1 && !singaDesa3_p1
                    && !singaKota1_p1 && !singaKota2_p1) {
                    beliSingapuraTampilan_p1.innerHTML = "Jual Desa P1"
                    beliSingapuraTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += singa_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        singaDesa1_p1 = false
                        singaDesa1_p2 = false
                        singaDesa2_p1 = false
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa1_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p1.innerHTML = "Jual P1"
                        beliSingapuraTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (singaDesa1_p1 && singaDesa2_p1 && !singaDesa3_p1
                    && !singaKota1_p1 && !singaKota2_p1) {
                    beliSingapuraTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliSingapuraTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += singa_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        singaDesa1_p1 = true
                        singaDesa1_p2 = false
                        singaDesa2_p1 = false
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa2_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p1.innerHTML = "Jual Desa P1"
                        beliSingapuraTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (singaDesa1_p1 && singaDesa2_p1 && singaDesa3_p1
                    && !singaKota1_p1 && !singaKota2_p1) {
                    beliSingapuraTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliSingapuraTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += singa_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        singaDesa1_p1 = true
                        singaDesa1_p2 = false
                        singaDesa2_p1 = true
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa3_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliSingapuraTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (singaDesa1_p1 && singaDesa2_p1 && singaDesa3_p1
                    && singaKota1_p1 && !singaKota2_p1) {
                    beliSingapuraTampilan_p1.innerHTML = "Jual Kota P1"
                    beliSingapuraTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += singa_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        singaKota1_p1 = false
                        singaKota1_p2 = false
                        singaKota2_p1 = false
                        singaKota2_p2 = false
                        kota1_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliSingapuraTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (singaDesa1_p1 && singaDesa2_p1 && singaDesa3_p1
                    && singaKota1_p1 && singaKota2_p1) {
                    beliSingapuraTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliSingapuraTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += singa_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        singaKota1_p1 = true
                        singaKota1_p2 = false
                        singaKota2_p1 = false
                        singaKota2_p2 = false
                        kota2_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliSingapuraTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= singa_desa && !singaDesa1_p1 && !singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaSingapuraTampilan_p1.style.display = "block";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                    beliDesaSingapuraTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= singa_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        singaDesa1_p1 = true
                        singaDesa1_p2 = false
                        singaDesa2_p1 = false
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa1_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliDesaSingapuraTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < singa_desa && !singaDesa1_p1 && !singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= singa_desa && singaDesa1_p1 && !singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaSingapuraTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaSingapuraTampilan_p1.style.display = "block";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                    beliDesaSingapuraTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= singa_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        singaDesa1_p1 = true
                        singaDesa1_p2 = false
                        singaDesa2_p1 = true
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa2_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliDesaSingapuraTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < singa_desa && singaDesa1_p1 && !singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= singa_desa && singaDesa1_p1 && singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaSingapuraTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaSingapuraTampilan_p1.style.display = "block";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                    beliDesaSingapuraTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= singa_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        singaDesa1_p1 = true
                        singaDesa1_p2 = false
                        singaDesa2_p1 = true
                        singaDesa2_p2 = false
                        singaDesa3_p1 = true
                        singaDesa3_p2 = false
                        desa3_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliDesaSingapuraTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < singa_desa && singaDesa1_p1 && singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= singa_kota && singaDesa1_p1 && singaDesa2_p1
                    && singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaSingapuraTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaSingapuraTampilan_p1.style.display = "block";
                    beliKotaSingapuraTampilan_p2.style.display = "none";
                    beliKotaSingapuraTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= singa_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        singaKota1_p1 = true
                        singaKota1_p2 = false
                        singaKota2_p1 = false
                        singaKota2_p2 = false
                        kota1_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliKotaSingapuraTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < singa_desa && singaDesa1_p1 && singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaSingapuraTampilan_p1.style.display = "none";
                    beliKotaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= singa_kota && singaDesa1_p1 && singaDesa2_p1
                    && singaDesa3_p1 && singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaSingapuraTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaSingapuraTampilan_p1.style.display = "block";
                    beliKotaSingapuraTampilan_p2.style.display = "none";
                    beliKotaSingapuraTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= singa_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        singaKota1_p1 = true
                        singaKota1_p2 = false
                        singaKota2_p1 = true
                        singaKota2_p2 = false
                        kota2_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliKotaSingapuraTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < singa_desa && singaDesa1_p1 && singaDesa2_p1
                    && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaSingapuraTampilan_p1.style.display = "none";
                    beliKotaSingapuraTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_singa_dibeli && !singa_p1) {
                exitSingapuraTampilan.style.display = "block"
                // TOMBOL BELI
                beliSingapuraTampilan_p1.style.display = "none";
                beliSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaSingapuraTampilan_p1.style.display = "none";
                beliDesaSingapuraTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaSingapuraTampilan_p1.style.display = "none";
                beliKotaSingapuraTampilan_p2.style.display = "none";
                exitSingapuraTampilan.addEventListener("click", function close() {
                    singapuraTampilan.style.display = "none"
                    exitSingapuraTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < singa_only && !apakah_singa_dibeli) {
                exitSingapuraTampilan.style.display = "block"
                // TOMBOL BELI
                beliSingapuraTampilan_p1.style.display = "none";
                beliSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaSingapuraTampilan_p1.style.display = "none";
                beliDesaSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaSingapuraTampilan_p1.style.display = "none";
                beliKotaSingapuraTampilan_p2.style.display = "none";
                exitSingapuraTampilan.addEventListener("click", function close() {
                    singapuraTampilan.style.display = "none"
                    exitSingapuraTampilan.removeEventListener("click", close)
                })
            }
            negaraSingapura.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 435 && posY_p2 == 565) && 
        (posX_p1 != 435 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraSingapura.addEventListener("click", function closen() {
            singapuraTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= singa_only && !apakah_singa_dibeli && !singa_p2) {
                exitSingapuraTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliSingapuraTampilan_p1.style.display = "none";
                beliSingapuraTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaSingapuraTampilan_p1.style.display = "none";
                beliDesaSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaSingapuraTampilan_p1.style.display = "none";
                beliKotaSingapuraTampilan_p2.style.display = "none";
                beliSingapuraTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= singa_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_singa_dibeli = true;
                    singa_p1 = false
                    singa_p2 = true
                    negaraSingapura.style.border = "5px solid darkred"
                    singapuraTampilan.style.display = "none"
                    beliSingapuraTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_singa_dibeli && singa_p2) {
                exitSingapuraTampilan.style.display = "none"
                // TOMBOL JUAL
                beliSingapuraTampilan_p1.style.display = "none";
                beliSingapuraTampilan_p2.style.display = "block";
                // JUAL
                if (!singaDesa1_p2 && !singaDesa2_p2 && !singaDesa3_p2 
                    && !singaKota1_p2 && !singaKota2_p2) {
                    beliSingapuraTampilan_p2.innerHTML = "Jual P2"
                    beliSingapuraTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += singa_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_singa_dibeli = false;
                        singa_p1 = false
                        singa_p2 = false
                        negaraSingapura.style.border = "1px solid white"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p2.innerHTML = "Beli P2"
                        beliSingapuraTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (singaDesa1_p2 && !singaDesa2_p2 && !singaDesa3_p2
                    && !singaKota1_p2 && !singaKota2_p2) {
                    beliSingapuraTampilan_p2.innerHTML = "Jual Desa P2"
                    beliSingapuraTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += singa_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        singaDesa1_p1 = false
                        singaDesa1_p2 = false
                        singaDesa2_p1 = false
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa1_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p2.innerHTML = "Jual P2"
                        beliSingapuraTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (singaDesa1_p2 && singaDesa2_p2 && !singaDesa3_p2
                    && !singaKota1_p2 && !singaKota2_p2) {
                    beliSingapuraTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliSingapuraTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += singa_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        singaDesa1_p1 = false
                        singaDesa1_p2 = true
                        singaDesa2_p1 = false
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa2_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p2.innerHTML = "Jual Desa P2"
                        beliSingapuraTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (singaDesa1_p2 && singaDesa2_p2 && singaDesa3_p2
                    && !singaKota1_p2 && !singaKota2_p2) {
                    beliSingapuraTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliSingapuraTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += singa_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        singaDesa1_p1 = false
                        singaDesa1_p2 = true
                        singaDesa2_p1 = false
                        singaDesa2_p2 = true
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa3_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliSingapuraTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (singaDesa1_p2 && singaDesa2_p2 && singaDesa3_p2
                    && singaKota1_p2 && !singaKota2_p2) {
                    beliSingapuraTampilan_p2.innerHTML = "Jual Kota P2"
                    beliSingapuraTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += singa_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        singaKota1_p1 = false
                        singaKota1_p2 = false
                        singaKota2_p1 = false
                        singaKota2_p2 = false
                        kota1_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliSingapuraTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (singaDesa1_p2 && singaDesa2_p2 && singaDesa3_p2
                    && singaKota1_p2 && singaKota2_p2) {
                    beliSingapuraTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliSingapuraTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += singa_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        singaKota1_p1 = false
                        singaKota1_p2 = true
                        singaKota2_p1 = false
                        singaKota2_p2 = false
                        kota2_singapura.style.display = "none"
                        singapuraTampilan.style.display = "none"
                        beliSingapuraTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliSingapuraTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= singa_desa && !singaDesa1_p2 && !singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "block";
                    beliDesaSingapuraTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= singa_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        singaDesa1_p1 = false
                        singaDesa1_p2 = true
                        singaDesa2_p1 = false
                        singaDesa2_p2 = false
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa1_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliDesaSingapuraTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < singa_desa && !singaDesa1_p2 && !singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= singa_desa && singaDesa1_p2 && !singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaSingapuraTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "block";
                    beliDesaSingapuraTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= singa_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        singaDesa1_p1 = false
                        singaDesa1_p2 = true
                        singaDesa2_p1 = false
                        singaDesa2_p2 = true
                        singaDesa3_p1 = false
                        singaDesa3_p2 = false
                        desa2_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliDesaSingapuraTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < singa_desa && singaDesa1_p2 && !singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= singa_desa && singaDesa1_p2 && singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaSingapuraTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "block";
                    beliDesaSingapuraTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= singa_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        singaDesa1_p1 = false
                        singaDesa1_p2 = true
                        singaDesa2_p1 = false
                        singaDesa2_p2 = true
                        singaDesa3_p1 = false
                        singaDesa3_p2 = true
                        desa3_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliDesaSingapuraTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < singa_desa && singaDesa1_p2 && singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaSingapuraTampilan_p1.style.display = "none";
                    beliDesaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= singa_kota && singaDesa1_p2 && singaDesa2_p2
                    && singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaSingapuraTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaSingapuraTampilan_p1.style.display = "none";
                    beliKotaSingapuraTampilan_p2.style.display = "block";
                    beliKotaSingapuraTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= singa_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        singaKota1_p1 = false
                        singaKota1_p2 = true
                        singaKota2_p1 = false
                        singaKota2_p2 = false
                        kota1_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliKotaSingapuraTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < singa_desa && singaDesa1_p2 && singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaSingapuraTampilan_p1.style.display = "none";
                    beliKotaSingapuraTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= singa_kota && singaDesa1_p2 && singaDesa2_p2
                    && singaDesa3_p2 && singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaSingapuraTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaSingapuraTampilan_p1.style.display = "none";
                    beliKotaSingapuraTampilan_p2.style.display = "block";
                    beliKotaSingapuraTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= singa_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        singaKota1_p1 = false
                        singaKota1_p2 = true
                        singaKota2_p1 = false
                        singaKota2_p2 = true
                        kota2_singapura.style.display = "block"
                        singapuraTampilan.style.display = "none"
                        beliKotaSingapuraTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < singa_desa && singaDesa1_p2 && singaDesa2_p2
                    && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaSingapuraTampilan_p1.style.display = "none";
                    beliKotaSingapuraTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_singa_dibeli && !singa_p2) {
                exitSingapuraTampilan.style.display = "block"
                // TOMBOL BELI
                beliSingapuraTampilan_p1.style.display = "none";
                beliSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaSingapuraTampilan_p1.style.display = "none";
                beliDesaSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaSingapuraTampilan_p1.style.display = "none";
                beliKotaSingapuraTampilan_p2.style.display = "none";
                exitSingapuraTampilan.addEventListener("click", function close() {
                    singapuraTampilan.style.display = "none"
                    exitSingapuraTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < singa_only && !apakah_singa_dibeli) {
                exitSingapuraTampilan.style.display = "block"
                // TOMBOL BELI
                beliSingapuraTampilan_p1.style.display = "none";
                beliSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaSingapuraTampilan_p1.style.display = "none";
                beliDesaSingapuraTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaSingapuraTampilan_p1.style.display = "none";
                beliKotaSingapuraTampilan_p2.style.display = "none";
                exitSingapuraTampilan.addEventListener("click", function close() {
                    singapuraTampilan.style.display = "none"
                    exitSingapuraTampilan.removeEventListener("click", close)
                })
            }
            negaraSingapura.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 435 && posX_p2 == 435 && posY_p2 == 565 && posY_p2 == 565) ||
        (posX_p1 != 435 && posX_p2 != 435 || posY_p2 != 565 && posY_p2 != 565)) {
        negaraSingapura.addEventListener("click", function closen() {
            singapuraTampilan.style.display = "block"
            exitSingapuraTampilan.style.display = "block"
            // TOMBOL BELI
            beliSingapuraTampilan_p1.style.display = "none";
            beliSingapuraTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaSingapuraTampilan_p1.style.display = "none";
            beliDesaSingapuraTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaSingapuraTampilan_p1.style.display = "none";
            beliKotaSingapuraTampilan_p2.style.display = "none";
            exitSingapuraTampilan.addEventListener("click", function close() {
                singapuraTampilan.style.display = "none"
                exitSingapuraTampilan.removeEventListener("click", close)
            })
            negaraSingapura.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_singa_dibeli && !singa_p1 && posX_p1 == 435 && posY_p1 == 565 && !singa_p1_kenaPajak
        && !singaDesa1_p2 && !singaDesa2_p2 && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
        moneyPlayer1 -= singa_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        singa_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_singa_dibeli && !singa_p1 && posX_p1 == 435 && posY_p1 == 565 && !singa_p1_kenaPajak
        && singaDesa1_p2 && !singaDesa2_p2 && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
        moneyPlayer1 -= singa_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        singa_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_singa_dibeli && !singa_p1 && posX_p1 == 435 && posY_p1 == 565 && !singa_p1_kenaPajak
        && singaDesa1_p2 && singaDesa2_p2 && !singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
        moneyPlayer1 -= singa_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        singa_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_singa_dibeli && !singa_p1 && posX_p1 == 435 && posY_p1 == 565 && !singa_p1_kenaPajak
        && singaDesa1_p2 && singaDesa2_p2 && singaDesa3_p2 && !singaKota1_p2 && !singaKota2_p2) {
        moneyPlayer1 -= singa_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        singa_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_singa_dibeli && !singa_p1 && posX_p1 == 435 && posY_p1 == 565 && !singa_p1_kenaPajak
        && singaDesa1_p2 && singaDesa2_p2 && singaDesa3_p2 && singaKota1_p2 && !singaKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - singa_pajak_desa*3 - singa_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        singa_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_singa_dibeli && !singa_p1 && posX_p1 == 435 && posY_p1 == 565 && !singa_p1_kenaPajak
        && singaDesa1_p2 && singaDesa2_p2 && singaDesa3_p2 && singaKota1_p2 && singaKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - singa_pajak_desa*3 - singa_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        singa_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_singa_dibeli && !singa_p2 && posX_p2 == 435 && posY_p2 == 565 && !singa_p2_kenaPajak
        && !singaDesa1_p1 && !singaDesa2_p1 && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
        moneyPlayer2 -= singa_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        singa_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_singa_dibeli && !singa_p2 && posX_p2 == 435 && posY_p2 == 565 && !singa_p2_kenaPajak
        && singaDesa1_p1 && !singaDesa2_p1 && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
        moneyPlayer2 -= singa_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        singa_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_singa_dibeli && !singa_p2 && posX_p2 == 435 && posY_p2 == 565 && !singa_p2_kenaPajak
        && singaDesa1_p1 && singaDesa2_p1 && !singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
        moneyPlayer2 -= singa_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        singa_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_singa_dibeli && !singa_p2 && posX_p2 == 435 && posY_p2 == 565 && !singa_p2_kenaPajak
        && singaDesa1_p1 && singaDesa2_p1 && singaDesa3_p1 && !singaKota1_p1 && !singaKota2_p1) {
        moneyPlayer2 -= singa_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        singa_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_singa_dibeli && !singa_p2 && posX_p2 == 435 && posY_p2 == 565 && !singa_p2_kenaPajak
        && singaDesa1_p1 && singaDesa2_p1 && singaDesa3_p1 && singaKota1_p1 && !singaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - singa_pajak_desa*3 - singa_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        singa_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_singa_dibeli && !singa_p2 && posX_p2 == 435 && posY_p2 == 565 && !singa_p2_kenaPajak
        && singaDesa1_p1 && singaDesa2_p1 && singaDesa3_p1 && singaKota1_p1 && singaKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - singa_pajak_desa*3 - singa_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        singa_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 335 && posY_p1 < 565 || posX_p2 == 335 && posY_p2 < 565) {
        singa_p1_kenaPajak = false
        singa_p2_kenaPajak = false
    } 
}