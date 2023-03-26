function p12BeliMalaysia() {
    negaraMalaysia.removeEventListener("click", p12BeliMalaysia)
    if ((posX_p1 == 635 && posY_p1 == 565) && 
        (posX_p2 != 635 && (posY_p2 == 65 || posY_p2 == 165 || posY_p2 == 265 || 
        posY_p2 == 365 || posY_p2 == 465 || posY_p2 == 565))) {
        negaraMalaysia.addEventListener("click", function closen() {
            malaysiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer1 >= malay_only && !apakah_malay_dibeli) {
                exitMalaysiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliMalaysiaTampilan_p1.style.display = "block";
                beliMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMalaysiaTampilan_p1.style.display = "none";
                beliDesaMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMalaysiaTampilan_p1.style.display = "none";
                beliKotaMalaysiaTampilan_p2.style.display = "none";
                beliMalaysiaTampilan_p1.addEventListener("click", function beli() {
                    moneyPlayer1 -= malay_only;
                    moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                    apakah_malay_dibeli = true;
                    malay_p1 = true
                    malay_p2 = false
                    negaraMalaysia.style.border = "5px solid darkblue"
                    malaysiaTampilan.style.display = "none"
                    beliMalaysiaTampilan_p1.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_malay_dibeli && malay_p1) {
                exitMalaysiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliMalaysiaTampilan_p1.style.display = "block";
                beliMalaysiaTampilan_p2.style.display = "none";
                // JUAL
                if (!malayDesa1_p1 && !malayDesa2_p1 && !malayDesa3_p1 
                    && !malayKota1_p1 && !malayKota2_p1) {
                    beliMalaysiaTampilan_p1.innerHTML = "Jual P1"
                    beliMalaysiaTampilan_p1.addEventListener("click", function jual0() {
                        moneyPlayer1 += malay_only;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        apakah_malay_dibeli = false;
                        malay_p1 = false
                        malay_p2 = false
                        negaraMalaysia.style.border = "1px solid white"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p1.innerHTML = "Beli P1"
                        beliMalaysiaTampilan_p1.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (malayDesa1_p1 && !malayDesa2_p1 && !malayDesa3_p1
                    && !malayKota1_p1 && !malayKota2_p1) {
                    beliMalaysiaTampilan_p1.innerHTML = "Jual Desa P1"
                    beliMalaysiaTampilan_p1.addEventListener("click", function jual1() {
                        moneyPlayer1 += malay_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        malayDesa1_p1 = false
                        malayDesa1_p2 = false
                        malayDesa2_p1 = false
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa1_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p1.innerHTML = "Jual P1"
                        beliMalaysiaTampilan_p1.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (malayDesa1_p1 && malayDesa2_p1 && !malayDesa3_p1
                    && !malayKota1_p1 && !malayKota2_p1) {
                    beliMalaysiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                    beliMalaysiaTampilan_p1.addEventListener("click", function jual2() {
                        moneyPlayer1 += malay_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        malayDesa1_p1 = true
                        malayDesa1_p2 = false
                        malayDesa2_p1 = false
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa2_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p1.innerHTML = "Jual Desa P1"
                        beliMalaysiaTampilan_p1.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (malayDesa1_p1 && malayDesa2_p1 && malayDesa3_p1
                    && !malayKota1_p1 && !malayKota2_p1) {
                    beliMalaysiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                    beliMalaysiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += malay_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        malayDesa1_p1 = true
                        malayDesa1_p2 = false
                        malayDesa2_p1 = true
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa3_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p1.innerHTML = "Jual Desa 2 P1"
                        beliMalaysiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (malayDesa1_p1 && malayDesa2_p1 && malayDesa3_p1
                    && malayKota1_p1 && !malayKota2_p1) {
                    beliMalaysiaTampilan_p1.innerHTML = "Jual Kota P1"
                    beliMalaysiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += malay_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        malayKota1_p1 = false
                        malayKota1_p2 = false
                        malayKota2_p1 = false
                        malayKota2_p2 = false
                        kota1_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p1.innerHTML = "Jual Desa 3 P1"
                        beliMalaysiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (malayDesa1_p1 && malayDesa2_p1 && malayDesa3_p1
                    && malayKota1_p1 && malayKota2_p1) {
                    beliMalaysiaTampilan_p1.innerHTML = "Jual Kota 2 P1"
                    beliMalaysiaTampilan_p1.addEventListener("click", function jual3() {
                        moneyPlayer1 += malay_kota;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        malayKota1_p1 = true
                        malayKota1_p2 = false
                        malayKota2_p1 = false
                        malayKota2_p2 = false
                        kota2_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p1.innerHTML = "Jual Kota 1 P1"
                        beliMalaysiaTampilan_p1.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer1 >= malay_desa && !malayDesa1_p1 && !malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaMalaysiaTampilan_p1.style.display = "block";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                    beliDesaMalaysiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= malay_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        malayDesa1_p1 = true
                        malayDesa1_p2 = false
                        malayDesa2_p1 = false
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa1_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliDesaMalaysiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer1 < malay_desa && !malayDesa1_p1 && !malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer1 >= malay_desa && malayDesa1_p1 && !malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaMalaysiaTampilan_p1.innerHTML = "Beli Desa 2 P1"
                    beliDesaMalaysiaTampilan_p1.style.display = "block";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                    beliDesaMalaysiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= malay_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        malayDesa1_p1 = true
                        malayDesa1_p2 = false
                        malayDesa2_p1 = true
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa2_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliDesaMalaysiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer1 < malay_desa && malayDesa1_p1 && !malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer1 >= malay_desa && malayDesa1_p1 && malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI DESA
                    beliDesaMalaysiaTampilan_p1.innerHTML = "Beli Desa 3 P1"
                    beliDesaMalaysiaTampilan_p1.style.display = "block";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                    beliDesaMalaysiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= malay_desa
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        malayDesa1_p1 = true
                        malayDesa1_p2 = false
                        malayDesa2_p1 = true
                        malayDesa2_p2 = false
                        malayDesa3_p1 = true
                        malayDesa3_p2 = false
                        desa3_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliDesaMalaysiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer1 < malay_desa && malayDesa1_p1 && malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI DESA 
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer1 >= malay_kota && malayDesa1_p1 && malayDesa2_p1
                    && malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaMalaysiaTampilan_p1.innerHTML = "Beli Kota P1"
                    beliKotaMalaysiaTampilan_p1.style.display = "block";
                    beliKotaMalaysiaTampilan_p2.style.display = "none";
                    beliKotaMalaysiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= malay_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        malayKota1_p1 = true
                        malayKota1_p2 = false
                        malayKota2_p1 = false
                        malayKota2_p2 = false
                        kota1_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliKotaMalaysiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer1 < malay_desa && malayDesa1_p1 && malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaMalaysiaTampilan_p1.style.display = "none";
                    beliKotaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer1 >= malay_kota && malayDesa1_p1 && malayDesa2_p1
                    && malayDesa3_p1 && malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI KOTA
                    beliKotaMalaysiaTampilan_p1.innerHTML = "Beli Kota 2 P1"
                    beliKotaMalaysiaTampilan_p1.style.display = "block";
                    beliKotaMalaysiaTampilan_p2.style.display = "none";
                    beliKotaMalaysiaTampilan_p1.addEventListener("click", function beliDesa() {
                        moneyPlayer1 -= malay_kota
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
                        malayKota1_p1 = true
                        malayKota1_p2 = false
                        malayKota2_p1 = true
                        malayKota2_p2 = false
                        kota2_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliKotaMalaysiaTampilan_p1.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer1 < malay_desa && malayDesa1_p1 && malayDesa2_p1
                    && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
                    // TOMBOL BELI KOTA 
                    beliKotaMalaysiaTampilan_p1.style.display = "none";
                    beliKotaMalaysiaTampilan_p2.style.display = "none";
                }
            } 
            // KONDISI PULAU SUDAH DI BELI PLAYER 2
            if (apakah_malay_dibeli && !malay_p1) {
                exitMalaysiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliMalaysiaTampilan_p1.style.display = "none";
                beliMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMalaysiaTampilan_p1.style.display = "none";
                beliDesaMalaysiaTampilan_p2.style.display = "none";
                 // TOMBOL BELI KOTA
                beliKotaMalaysiaTampilan_p1.style.display = "none";
                beliKotaMalaysiaTampilan_p2.style.display = "none";
                exitMalaysiaTampilan.addEventListener("click", function close() {
                    malaysiaTampilan.style.display = "none"
                    exitMalaysiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer1 < malay_only && !apakah_malay_dibeli) {
                exitMalaysiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliMalaysiaTampilan_p1.style.display = "none";
                beliMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMalaysiaTampilan_p1.style.display = "none";
                beliDesaMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMalaysiaTampilan_p1.style.display = "none";
                beliKotaMalaysiaTampilan_p2.style.display = "none";
                exitMalaysiaTampilan.addEventListener("click", function close() {
                    malaysiaTampilan.style.display = "none"
                    exitMalaysiaTampilan.removeEventListener("click", close)
                })
            }
            negaraMalaysia.removeEventListener("click", closen)
        });
    } else if ((posX_p2 == 635 && posY_p2 == 565) && 
        (posX_p1 != 635 && (posY_p1 == 65 || posY_p1 == 165 || posY_p1 == 265 || 
        posY_p1 == 365 || posY_p1 == 465 || posY_p1 == 565))) {
        negaraMalaysia.addEventListener("click", function closen() {
            malaysiaTampilan.style.display = "block";
            // UANG LEBIH DAN PULAU BELUM DI BELI
            if (moneyPlayer2 >= malay_only && !apakah_malay_dibeli && !malay_p2) {
                exitMalaysiaTampilan.style.display = "none"
                // TOMBOL BELI PULAU
                beliMalaysiaTampilan_p1.style.display = "none";
                beliMalaysiaTampilan_p2.style.display = "block";
                // TOMBOL BELI DESA
                beliDesaMalaysiaTampilan_p1.style.display = "none";
                beliDesaMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMalaysiaTampilan_p1.style.display = "none";
                beliKotaMalaysiaTampilan_p2.style.display = "none";
                beliMalaysiaTampilan_p2.addEventListener("click", function beli() {
                    moneyPlayer2 -= malay_only;
                    moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                    apakah_malay_dibeli = true;
                    malay_p1 = false
                    malay_p2 = true
                    negaraMalaysia.style.border = "5px solid darkred"
                    malaysiaTampilan.style.display = "none"
                    beliMalaysiaTampilan_p2.removeEventListener("click", beli)
                });
            } 
            // KONDISI PULAU SUDAH DI BELI, JUAL ATAU BELI DESA ATAU BELI KOTA
            if (apakah_malay_dibeli && malay_p2) {
                exitMalaysiaTampilan.style.display = "none"
                // TOMBOL JUAL
                beliMalaysiaTampilan_p1.style.display = "none";
                beliMalaysiaTampilan_p2.style.display = "block";
                // JUAL
                if (!malayDesa1_p2 && !malayDesa2_p2 && !malayDesa3_p2 
                    && !malayKota1_p2 && !malayKota2_p2) {
                    beliMalaysiaTampilan_p2.innerHTML = "Jual P2"
                    beliMalaysiaTampilan_p2.addEventListener("click", function jual0() {
                        moneyPlayer2 += malay_only;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        apakah_malay_dibeli = false;
                        malay_p1 = false
                        malay_p2 = false
                        negaraMalaysia.style.border = "1px solid white"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p2.innerHTML = "Beli P2"
                        beliMalaysiaTampilan_p2.removeEventListener("click", jual0)
                    });
                }
                // JUAL DESA 1
                else if (malayDesa1_p2 && !malayDesa2_p2 && !malayDesa3_p2
                    && !malayKota1_p2 && !malayKota2_p2) {
                    beliMalaysiaTampilan_p2.innerHTML = "Jual Desa P2"
                    beliMalaysiaTampilan_p2.addEventListener("click", function jual1() {
                        moneyPlayer2 += malay_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        malayDesa1_p1 = false
                        malayDesa1_p2 = false
                        malayDesa2_p1 = false
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa1_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p2.innerHTML = "Jual P2"
                        beliMalaysiaTampilan_p2.removeEventListener("click", jual1)
                    });
                }
                // JUAL DESA 2
                else if (malayDesa1_p2 && malayDesa2_p2 && !malayDesa3_p2
                    && !malayKota1_p2 && !malayKota2_p2) {
                    beliMalaysiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                    beliMalaysiaTampilan_p2.addEventListener("click", function jual2() {
                        moneyPlayer2 += malay_desa;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        malayDesa1_p1 = false
                        malayDesa1_p2 = true
                        malayDesa2_p1 = false
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa2_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p2.innerHTML = "Jual Desa P2"
                        beliMalaysiaTampilan_p2.removeEventListener("click", jual2)
                    });
                }
                // JUAL DESA 3
                else if (malayDesa1_p2 && malayDesa2_p2 && malayDesa3_p2
                    && !malayKota1_p2 && !malayKota2_p2) {
                    beliMalaysiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                    beliMalaysiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer1 += malay_desa;
                        moneyPlayer1Tampilan.innerHTML = moneyPlayer1;
                        malayDesa1_p1 = false
                        malayDesa1_p2 = true
                        malayDesa2_p1 = false
                        malayDesa2_p2 = true
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa3_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p2.innerHTML = "Jual Desa 2 P2"
                        beliMalaysiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 1
                else if (malayDesa1_p2 && malayDesa2_p2 && malayDesa3_p2
                    && malayKota1_p2 && !malayKota2_p2) {
                    beliMalaysiaTampilan_p2.innerHTML = "Jual Kota P2"
                    beliMalaysiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += malay_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        malayKota1_p1 = false
                        malayKota1_p2 = false
                        malayKota2_p1 = false
                        malayKota2_p2 = false
                        kota1_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p2.innerHTML = "Jual Desa 3 P2"
                        beliMalaysiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // JUAL KOTA 2
                else if (malayDesa1_p2 && malayDesa2_p2 && malayDesa3_p2
                    && malayKota1_p2 && malayKota2_p2) {
                    beliMalaysiaTampilan_p2.innerHTML = "Jual Kota 2 P2"
                    beliMalaysiaTampilan_p2.addEventListener("click", function jual3() {
                        moneyPlayer2 += malay_kota;
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2;
                        malayKota1_p1 = false
                        malayKota1_p2 = true
                        malayKota2_p1 = false
                        malayKota2_p2 = false
                        kota2_malaysia.style.display = "none"
                        malaysiaTampilan.style.display = "none"
                        beliMalaysiaTampilan_p2.innerHTML = "Jual Kota 1 P2"
                        beliMalaysiaTampilan_p2.removeEventListener("click", jual3)
                    });
                }
                // BELI DESA 1
                if (moneyPlayer2 >= malay_desa && !malayDesa1_p2 && !malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "block";
                    beliDesaMalaysiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= malay_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        malayDesa1_p1 = false
                        malayDesa1_p2 = true
                        malayDesa2_p1 = false
                        malayDesa2_p2 = false
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa1_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliDesaMalaysiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 1
                else if (moneyPlayer2 < malay_desa && !malayDesa1_p2 && !malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 2
                if (moneyPlayer2 >= malay_desa && malayDesa1_p2 && !malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaMalaysiaTampilan_p2.innerHTML = "Beli Desa 2 P2"
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "block";
                    beliDesaMalaysiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= malay_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        malayDesa1_p1 = false
                        malayDesa1_p2 = true
                        malayDesa2_p1 = false
                        malayDesa2_p2 = true
                        malayDesa3_p1 = false
                        malayDesa3_p2 = false
                        desa2_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliDesaMalaysiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 2
                else if (moneyPlayer2 < malay_desa && malayDesa1_p2 && !malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI DESA 3
                if (moneyPlayer2 >= malay_desa && malayDesa1_p2 && malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI DESA
                    beliDesaMalaysiaTampilan_p2.innerHTML = "Beli Desa 3 P2"
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "block";
                    beliDesaMalaysiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= malay_desa
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        malayDesa1_p1 = false
                        malayDesa1_p2 = true
                        malayDesa2_p1 = false
                        malayDesa2_p2 = true
                        malayDesa3_p1 = false
                        malayDesa3_p2 = true
                        desa3_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliDesaMalaysiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI DESA 3
                else if (moneyPlayer2 < malay_desa && malayDesa1_p2 && malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI DESA 
                    beliDesaMalaysiaTampilan_p1.style.display = "none";
                    beliDesaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 1
                if (moneyPlayer2 >= malay_kota && malayDesa1_p2 && malayDesa2_p2
                    && malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaMalaysiaTampilan_p2.innerHTML = "Beli Kota P2"
                    beliKotaMalaysiaTampilan_p1.style.display = "none";
                    beliKotaMalaysiaTampilan_p2.style.display = "block";
                    beliKotaMalaysiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= malay_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        malayKota1_p1 = false
                        malayKota1_p2 = true
                        malayKota2_p1 = false
                        malayKota2_p2 = false
                        kota1_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliKotaMalaysiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 1
                else if (moneyPlayer2 < malay_desa && malayDesa1_p2 && malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaMalaysiaTampilan_p1.style.display = "none";
                    beliKotaMalaysiaTampilan_p2.style.display = "none";
                }
                // BELI KOTA 2
                if (moneyPlayer2 >= malay_kota && malayDesa1_p2 && malayDesa2_p2
                    && malayDesa3_p2 && malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI KOTA
                    beliKotaMalaysiaTampilan_p2.innerHTML = "Beli Kota 2 P2"
                    beliKotaMalaysiaTampilan_p1.style.display = "none";
                    beliKotaMalaysiaTampilan_p2.style.display = "block";
                    beliKotaMalaysiaTampilan_p2.addEventListener("click", function beliDesa() {
                        moneyPlayer2 -= malay_kota
                        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
                        malayKota1_p1 = false
                        malayKota1_p2 = true
                        malayKota2_p1 = false
                        malayKota2_p2 = true
                        kota2_malaysia.style.display = "block"
                        malaysiaTampilan.style.display = "none"
                        beliKotaMalaysiaTampilan_p2.removeEventListener("click", beliDesa)
                    })
                } 
                // TIDAK PUNYA UANG BELI KOTA 2
                else if (moneyPlayer2 < malay_desa && malayDesa1_p2 && malayDesa2_p2
                    && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
                    // TOMBOL BELI KOTA 
                    beliKotaMalaysiaTampilan_p1.style.display = "none";
                    beliKotaMalaysiaTampilan_p2.style.display = "none";
                }
            }  
            // KONDISI PULAU SUDAH DI BELI PLAYER 1
            if (apakah_malay_dibeli && !malay_p2) {
                exitMalaysiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliMalaysiaTampilan_p1.style.display = "none";
                beliMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMalaysiaTampilan_p1.style.display = "none";
                beliDesaMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMalaysiaTampilan_p1.style.display = "none";
                beliKotaMalaysiaTampilan_p2.style.display = "none";
                exitMalaysiaTampilan.addEventListener("click", function close() {
                    malaysiaTampilan.style.display = "none"
                    exitMalaysiaTampilan.removeEventListener("click", close)
                })
            } 
            // DUWIE KURANG
            if (moneyPlayer2 < malay_only && !apakah_malay_dibeli) {
                exitMalaysiaTampilan.style.display = "block"
                // TOMBOL BELI
                beliMalaysiaTampilan_p1.style.display = "none";
                beliMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI DESA
                beliDesaMalaysiaTampilan_p1.style.display = "none";
                beliDesaMalaysiaTampilan_p2.style.display = "none";
                // TOMBOL BELI KOTA
                beliKotaMalaysiaTampilan_p1.style.display = "none";
                beliKotaMalaysiaTampilan_p2.style.display = "none";
                exitMalaysiaTampilan.addEventListener("click", function close() {
                    malaysiaTampilan.style.display = "none"
                    exitMalaysiaTampilan.removeEventListener("click", close)
                })
            }
            negaraMalaysia.removeEventListener("click", closen)
        }); 
    // KONDISI UNTUK MELIHAT INFORMASI HANYA MELIHAT
    } else if ((posX_p1 == 635 && posX_p2 == 635 && posY_p2 == 565 && posY_p2 == 565) ||
        (posX_p1 != 635 && posX_p2 != 635 || posY_p2 != 565 && posY_p2 != 565)) {
        negaraMalaysia.addEventListener("click", function closen() {
            malaysiaTampilan.style.display = "block"
            exitMalaysiaTampilan.style.display = "block"
            // TOMBOL BELI
            beliMalaysiaTampilan_p1.style.display = "none";
            beliMalaysiaTampilan_p2.style.display = "none";
            // TOMBOL BELI DESA
            beliDesaMalaysiaTampilan_p1.style.display = "none";
            beliDesaMalaysiaTampilan_p2.style.display = "none";
            // TOMBOL BELI KOTA
            beliKotaMalaysiaTampilan_p1.style.display = "none";
            beliKotaMalaysiaTampilan_p2.style.display = "none";
            exitMalaysiaTampilan.addEventListener("click", function close() {
                malaysiaTampilan.style.display = "none"
                exitMalaysiaTampilan.removeEventListener("click", close)
            })
            negaraMalaysia.removeEventListener("click", closen)
        })
    }
    // PLAYER 1 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_malay_dibeli && !malay_p1 && posX_p1 == 635 && posY_p1 == 565 && !malay_p1_kenaPajak
        && !malayDesa1_p2 && !malayDesa2_p2 && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
        moneyPlayer1 -= malay_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer1
        malay_p1_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_malay_dibeli && !malay_p1 && posX_p1 == 635 && posY_p1 == 565 && !malay_p1_kenaPajak
        && malayDesa1_p2 && !malayDesa2_p2 && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
        moneyPlayer1 -= malay_pajak_desa
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        malay_p1_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_malay_dibeli && !malay_p1 && posX_p1 == 635 && posY_p1 == 565 && !malay_p1_kenaPajak
        && malayDesa1_p2 && malayDesa2_p2 && !malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
        moneyPlayer1 -= malay_pajak_desa*2
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        malay_p1_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_malay_dibeli && !malay_p1 && posX_p1 == 635 && posY_p1 == 565 && !malay_p1_kenaPajak
        && malayDesa1_p2 && malayDesa2_p2 && malayDesa3_p2 && !malayKota1_p2 && !malayKota2_p2) {
        moneyPlayer1 -= malay_pajak_desa*3
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        malay_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_malay_dibeli && !malay_p1 && posX_p1 == 635 && posY_p1 == 565 && !malay_p1_kenaPajak
        && malayDesa1_p2 && malayDesa2_p2 && malayDesa3_p2 && malayKota1_p2 && !malayKota2_p2) {
        console.log(moneyPlayer1)
        moneyPlayer1 = moneyPlayer1 - malay_pajak_desa*3 - malay_pajak_kota
        console.log(moneyPlayer1)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        malay_p1_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_malay_dibeli && !malay_p1 && posX_p1 == 635 && posY_p1 == 565 && !malay_p1_kenaPajak
        && malayDesa1_p2 && malayDesa2_p2 && malayDesa3_p2 && malayKota1_p2 && malayKota2_p2) {
        console.log(moneyPlayer2)
        moneyPlayer1 = moneyPlayer1 - malay_pajak_desa*3 - malay_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer1Tampilan.innerHTML = moneyPlayer1
        malay_p1_kenaPajak = true
    }
    // PLAYER 2 BAYAR PAJAK
    // HANYA PULAU
    if (apakah_malay_dibeli && !malay_p2 && posX_p2 == 635 && posY_p2 == 565 && !malay_p2_kenaPajak
        && !malayDesa1_p1 && !malayDesa2_p1 && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
        moneyPlayer2 -= malay_pajak_only
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        malay_p2_kenaPajak = true
    }
    // PULAU + DESA 1
    if (apakah_malay_dibeli && !malay_p2 && posX_p2 == 635 && posY_p2 == 565 && !malay_p2_kenaPajak
        && malayDesa1_p1 && !malayDesa2_p1 && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
        moneyPlayer2 -= malay_pajak_desa
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        malay_p2_kenaPajak = true
    }
    // PULAU + DESA 2
    if (apakah_malay_dibeli && !malay_p2 && posX_p2 == 635 && posY_p2 == 565 && !malay_p2_kenaPajak
        && malayDesa1_p1 && malayDesa2_p1 && !malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
        moneyPlayer2 -= malay_pajak_desa*2
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        malay_p2_kenaPajak = true
    }
    // PULAU + DESA 3
    if (apakah_malay_dibeli && !malay_p2 && posX_p2 == 635 && posY_p2 == 565 && !malay_p2_kenaPajak
        && malayDesa1_p1 && malayDesa2_p1 && malayDesa3_p1 && !malayKota1_p1 && !malayKota2_p1) {
        moneyPlayer2 -= malay_pajak_desa*3
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        malay_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 1
    if (apakah_malay_dibeli && !malay_p2 && posX_p2 == 635 && posY_p2 == 565 && !malay_p2_kenaPajak
        && malayDesa1_p1 && malayDesa2_p1 && malayDesa3_p1 && malayKota1_p1 && !malayKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - malay_pajak_desa*3 - malay_pajak_kota
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        malay_p2_kenaPajak = true
    }
    // PULAU + DESA 3 + KOTA 2
    if (apakah_malay_dibeli && !malay_p2 && posX_p2 == 635 && posY_p2 == 565 && !malay_p2_kenaPajak
        && malayDesa1_p1 && malayDesa2_p1 && malayDesa3_p1 && malayKota1_p1 && malayKota2_p1) {
        console.log(moneyPlayer2)
        moneyPlayer2 = moneyPlayer2 - malay_pajak_desa*3 - malay_pajak_kota*2
        console.log(moneyPlayer2)
        moneyPlayer2Tampilan.innerHTML = moneyPlayer2
        malay_p2_kenaPajak = true
    }
    // RESET VARIABEL INDEX SUDAH BAYAR PAJAK BELUM
    if (posX_p1 == 335 && posY_p1 < 565 || posX_p2 == 335 && posY_p2 < 565) {
        malay_p1_kenaPajak = false
        malay_p2_kenaPajak = false
    } 
}