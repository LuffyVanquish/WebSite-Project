$("select").click(function () {



    var s1 = parseInt(0 + document.getElementById('select1').value);
    var s2 = parseInt(0 + document.getElementById('select2').value);
    var s3 = parseInt(0 + document.getElementById('select3').value);
    var s4 = parseInt(0 + document.getElementById('select4').value);
    var s5 = parseInt(0 + document.getElementById('select5').value);
    var s6 = parseInt(0 + document.getElementById('select6').value);

    console.log("s1 : " + s1);
    console.log("s2 : " + s2);
    console.log("s3 : " + s3);
    console.log("s4 : " + s4);
    console.log("s5 : " + s5);
    console.log("s6 : " + s6);


    //Casque
    switch (s1) { 
        case 0: //Default

            //Défence
            document.getElementById("d1").innerHTML = 0;
            document.getElementById("d2").innerHTML = 0;
            document.getElementById("d3").innerHTML = 0;
            document.getElementById("d4").innerHTML = 0;
            document.getElementById("d5").innerHTML = 0;
            document.getElementById("d6").innerHTML = 0;

            //Nom Talent
            document.getElementById("t1").innerHTML = "";
            document.getElementById("t2").innerHTML = "";
            document.getElementById("t3").innerHTML = "";
            document.getElementById("t4").innerHTML = "";
            document.getElementById("t5").innerHTML = "";
            
            //Niv Talent
            document.getElementById("nt1").innerHTML = "";
            document.getElementById("nt2").innerHTML = "";
            document.getElementById("nt3").innerHTML = "";
            document.getElementById("nt4").innerHTML = "";
            document.getElementById("nt5").innerHTML = "";

        break;

        case 1: //Cuir Alpha
        case 2: //Cuir Beta 

            //Défence
            document.getElementById("d1").innerHTML = 32;
            document.getElementById("d2").innerHTML = 2;
            document.getElementById("d3").innerHTML = 0;
            document.getElementById("d4").innerHTML = 0;
            document.getElementById("d5").innerHTML = 0;
            document.getElementById("d6").innerHTML = 0;

            if (s1 == 1) { //Alpha

                //Nom Talent
                document.getElementById("t1").innerHTML = "Spartiate" ;
                document.getElementById("t2").innerHTML = "";
                document.getElementById("t3").innerHTML = "";
                document.getElementById("t4").innerHTML = "";
                document.getElementById("t5").innerHTML = "";

                //Niv Talent
                document.getElementById("nt1").innerHTML = 2;
                document.getElementById("nt2").innerHTML = "";
                document.getElementById("nt3").innerHTML = "";
                document.getElementById("nt4").innerHTML = "";
                document.getElementById("nt5").innerHTML = "";
                
            } else { //Beta

                //Nom Talent
                document.getElementById("t1").innerHTML = "Spartiate";
                document.getElementById("t2").innerHTML = "";
                document.getElementById("t3").innerHTML = "";
                document.getElementById("t4").innerHTML = "";
                document.getElementById("t5").innerHTML = "";

                //Niv Talent
                document.getElementById("nt1").innerHTML = 1;
                document.getElementById("nt2").innerHTML = "";
                document.getElementById("nt3").innerHTML = "";
                document.getElementById("nt4").innerHTML = "";
                document.getElementById("nt5").innerHTML = "";

            }

        break;

        case 3: //Maille Alpha
        case 4: //Maille Beta

            //Défence
            document.getElementById("d1").innerHTML = 32;
            document.getElementById("d2").innerHTML = 0;
            document.getElementById("d3").innerHTML = 2;
            document.getElementById("d4").innerHTML = 0;
            document.getElementById("d5").innerHTML = 0;
            document.getElementById("d6").innerHTML = 0;

            if (s1 == 3) { //Alpha

                //Nom Talent
                document.getElementById("t1").innerHTML = "Prince de la cueillette";
                document.getElementById("t2").innerHTML = "Paladin";
                document.getElementById("t3").innerHTML = "";
                document.getElementById("t4").innerHTML = "";
                document.getElementById("t5").innerHTML = "";

                //Niv Talent
                document.getElementById("nt1").innerHTML = 1;
                document.getElementById("nt2").innerHTML = 1;
                document.getElementById("nt3").innerHTML = "";
                document.getElementById("nt4").innerHTML = "";
                document.getElementById("nt5").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t1").innerHTML = "Prince de la cueillette";
                document.getElementById("t2").innerHTML = "";
                document.getElementById("t3").innerHTML = "";
                document.getElementById("t4").innerHTML = "";
                document.getElementById("t5").innerHTML = "";

                //Niv Talent
                document.getElementById("nt1").innerHTML = 1;
                document.getElementById("nt2").innerHTML = "";
                document.getElementById("nt3").innerHTML = "";
                document.getElementById("nt4").innerHTML = "";
                document.getElementById("nt5").innerHTML = "";

            }

        break;
    

    }

    //Torse
    switch (s2) {
        case 0: //Default

            //Défence
            document.getElementById("d7").innerHTML = 0;
            document.getElementById("d8").innerHTML = 0;
            document.getElementById("d9").innerHTML = 0;
            document.getElementById("d10").innerHTML = 0;
            document.getElementById("d11").innerHTML = 0;
            document.getElementById("d12").innerHTML = 0;

            //Nom Talent
            document.getElementById("t6").innerHTML = "";
            document.getElementById("t7").innerHTML = "";
            document.getElementById("t8").innerHTML = "";
            document.getElementById("t9").innerHTML = "";
            document.getElementById("t10").innerHTML = "";

            //Niv Talent
            document.getElementById("nt6").innerHTML = "";
            document.getElementById("nt7").innerHTML = "";
            document.getElementById("nt8").innerHTML = "";
            document.getElementById("nt9").innerHTML = "";
            document.getElementById("nt10").innerHTML = "";

        break;

        case 1: //Cuir Alpha
        case 2: //Cuir Beta 

            //Défence
            document.getElementById("d7").innerHTML = 32;
            document.getElementById("d8").innerHTML = 2;
            document.getElementById("d9").innerHTML = 0;
            document.getElementById("d10").innerHTML = 0;
            document.getElementById("d11").innerHTML = 0;
            document.getElementById("d12").innerHTML = 0;

            if (s2 == 1) { //Alpha

                //Nom Talent
                document.getElementById("t6").innerHTML = "Ignifuge";
                document.getElementById("t7").innerHTML = "";
                document.getElementById("t8").innerHTML = "";
                document.getElementById("t9").innerHTML = "";
                document.getElementById("t10").innerHTML = "";

                //Niv Talent
                document.getElementById("nt6").innerHTML = 1;
                document.getElementById("nt7").innerHTML = "";
                document.getElementById("nt8").innerHTML = "";
                document.getElementById("nt9").innerHTML = "";
                document.getElementById("nt10").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t6").innerHTML = "";
                document.getElementById("t7").innerHTML = "";
                document.getElementById("t8").innerHTML = "";
                document.getElementById("t9").innerHTML = "";
                document.getElementById("t10").innerHTML = "";

                //Niv Talent
                document.getElementById("nt6").innerHTML = "";
                document.getElementById("nt7").innerHTML = "";
                document.getElementById("nt8").innerHTML = "";
                document.getElementById("nt9").innerHTML = "";
                document.getElementById("nt10").innerHTML = "";

            }

        break;

        case 3: //Maille Alpha
        case 4: //Maille Beta

            //Défence
            document.getElementById("d7").innerHTML = 32;
            document.getElementById("d8").innerHTML = 0;
            document.getElementById("d9").innerHTML = 2;
            document.getElementById("d10").innerHTML = 0;
            document.getElementById("d11").innerHTML = 0;
            document.getElementById("d12").innerHTML = 0;

            if (s2 == 3) { //Alpha

                //Nom Talent
                document.getElementById("t6").innerHTML = "Étanchéité";
                document.getElementById("t7").innerHTML = "";
                document.getElementById("t8").innerHTML = "";
                document.getElementById("t9").innerHTML = "";
                document.getElementById("t10").innerHTML = "";

                //Niv Talent
                document.getElementById("nt6").innerHTML = 1;
                document.getElementById("nt7").innerHTML = "";
                document.getElementById("nt8").innerHTML = "";
                document.getElementById("nt9").innerHTML = "";
                document.getElementById("nt10").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t6").innerHTML = "";
                document.getElementById("t7").innerHTML = "";
                document.getElementById("t8").innerHTML = "";
                document.getElementById("t9").innerHTML = "";
                document.getElementById("t10").innerHTML = "";

                //Niv Talent
                document.getElementById("nt6").innerHTML = "";
                document.getElementById("nt7").innerHTML = "";
                document.getElementById("nt8").innerHTML = "";
                document.getElementById("nt9").innerHTML = "";
                document.getElementById("nt10").innerHTML = "";

            }

        break;

    }

    //Bras
    switch (s3) {
        case 0: //Default
        
            //Défence
            document.getElementById("d13").innerHTML = 0;
            document.getElementById("d14").innerHTML = 0;
            document.getElementById("d15").innerHTML = 0;
            document.getElementById("d16").innerHTML = 0;
            document.getElementById("d17").innerHTML = 0;
            document.getElementById("d18").innerHTML = 0;

            //Nom Talent
            document.getElementById("t11").innerHTML = "";
            document.getElementById("t12").innerHTML = "";
            document.getElementById("t13").innerHTML = "";
            document.getElementById("t14").innerHTML = "";
            document.getElementById("t15").innerHTML = "";

            //Niv Talent
            document.getElementById("nt11").innerHTML = "";
            document.getElementById("nt12").innerHTML = "";
            document.getElementById("nt13").innerHTML = "";
            document.getElementById("nt14").innerHTML = "";
            document.getElementById("nt15").innerHTML = "";


        break;

        case 1:  //Cuir Alpha
        case 2:  //Cuir Beta 

            //Défence
            document.getElementById("d13").innerHTML = 32;
            document.getElementById("d14").innerHTML = 2;
            document.getElementById("d15").innerHTML = 0;
            document.getElementById("d16").innerHTML = 0;
            document.getElementById("d17").innerHTML = 0;
            document.getElementById("d18").innerHTML = 0;

            if (s3 == 1) { //Alpha

                //Nom Talent
                document.getElementById("t11").innerHTML = "Halo de guérison";
                document.getElementById("t12").innerHTML = "";
                document.getElementById("t13").innerHTML = "";
                document.getElementById("t14").innerHTML = "";
                document.getElementById("t15").innerHTML = "";

                //Niv Talent
                document.getElementById("nt11").innerHTML = 1;
                document.getElementById("nt12").innerHTML = "";
                document.getElementById("nt13").innerHTML = "";
                document.getElementById("nt14").innerHTML = "";
                document.getElementById("nt15").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t11").innerHTML = "";
                document.getElementById("t12").innerHTML = "";
                document.getElementById("t13").innerHTML = "";
                document.getElementById("t14").innerHTML = "";
                document.getElementById("t15").innerHTML = "";

                //Niv Talent
                document.getElementById("nt11").innerHTML = "";
                document.getElementById("nt12").innerHTML = "";
                document.getElementById("nt13").innerHTML = "";
                document.getElementById("nt14").innerHTML = "";
                document.getElementById("nt15").innerHTML = "";

            }

        break;

        case 3: //Maille Alpha
        case 4: //Maille Beta

            //Défence
            document.getElementById("d13").innerHTML = 32;
            document.getElementById("d14").innerHTML = 0;
            document.getElementById("d15").innerHTML = 2;
            document.getElementById("d16").innerHTML = 0;
            document.getElementById("d17").innerHTML = 0;
            document.getElementById("d18").innerHTML = 0;

            if (s3 == 3) { //Alpha

                //Nom Talent
                document.getElementById("t11").innerHTML = "Halo de guérison";
                document.getElementById("t12").innerHTML = "";
                document.getElementById("t13").innerHTML = "";
                document.getElementById("t14").innerHTML = "";
                document.getElementById("t15").innerHTML = "";

                //Niv Talent
                document.getElementById("nt11").innerHTML = 1;
                document.getElementById("nt12").innerHTML = "";
                document.getElementById("nt13").innerHTML = "";
                document.getElementById("nt14").innerHTML = "";
                document.getElementById("nt15").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t11").innerHTML = "";
                document.getElementById("t12").innerHTML = "";
                document.getElementById("t13").innerHTML = "";
                document.getElementById("t14").innerHTML = "";
                document.getElementById("t15").innerHTML = "";

                //Niv Talent
                document.getElementById("nt11").innerHTML = "";
                document.getElementById("nt12").innerHTML = "";
                document.getElementById("nt13").innerHTML = "";
                document.getElementById("nt14").innerHTML = "";
                document.getElementById("nt15").innerHTML = "";

            }

        break;
    }

    //Ceintures
    switch (s4) {
        case 0: //Default

            //defence
            document.getElementById("d19").innerHTML = 0;
            document.getElementById("d20").innerHTML = 0;
            document.getElementById("d21").innerHTML = 0;
            document.getElementById("d22").innerHTML = 0;
            document.getElementById("d23").innerHTML = 0;
            document.getElementById("d24").innerHTML = 0;

            //Nom Talent
            document.getElementById("t16").innerHTML = "";
            document.getElementById("t17").innerHTML = "";
            document.getElementById("t18").innerHTML = "";
            document.getElementById("t19").innerHTML = "";
            document.getElementById("t20").innerHTML = "";

            //Niv Talent
            document.getElementById("nt16").innerHTML = "";
            document.getElementById("nt17").innerHTML = "";
            document.getElementById("nt18").innerHTML = "";
            document.getElementById("nt19").innerHTML = "";
            document.getElementById("nt20").innerHTML = "";


        break;

        case 1:  //Cuir Alpha
        case 2:  //Cuir Beta 

            //Défence
            document.getElementById("d19").innerHTML = 32;
            document.getElementById("d20").innerHTML = 2;
            document.getElementById("d21").innerHTML = 0;
            document.getElementById("d22").innerHTML = 0;
            document.getElementById("d23").innerHTML = 0;
            document.getElementById("d24").innerHTML = 0;

            if (s4 == 1) { //Alpha

                //Nom Talent
                document.getElementById("t16").innerHTML = "Métabolisme";
                document.getElementById("t17").innerHTML = "";
                document.getElementById("t18").innerHTML = "";
                document.getElementById("t19").innerHTML = "";
                document.getElementById("t20").innerHTML = "";

                //Niv Talent
                document.getElementById("nt16").innerHTML = 1;
                document.getElementById("nt17").innerHTML = "";
                document.getElementById("nt18").innerHTML = "";
                document.getElementById("nt19").innerHTML = "";
                document.getElementById("nt20").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t16").innerHTML = "";
                document.getElementById("t17").innerHTML = "";
                document.getElementById("t18").innerHTML = "";
                document.getElementById("t19").innerHTML = "";
                document.getElementById("t20").innerHTML = "";

                //Niv Talent
                document.getElementById("nt16").innerHTML = "";
                document.getElementById("nt17").innerHTML = "";
                document.getElementById("nt18").innerHTML = "";
                document.getElementById("nt19").innerHTML = "";
                document.getElementById("nt20").innerHTML = "";

            }

        break;

        case 3: //Maille Alpha
        case 4: //Maille Beta

            //Défence
            document.getElementById("d19").innerHTML = 32;
            document.getElementById("d20").innerHTML = 0;
            document.getElementById("d21").innerHTML = 2;
            document.getElementById("d22").innerHTML = 0;
            document.getElementById("d23").innerHTML = 0;
            document.getElementById("d24").innerHTML = 0;

            if (s4 == 3) { //Alpha

                //Nom Talent
                document.getElementById("t16").innerHTML = "Rengainage éclair";
                document.getElementById("t17").innerHTML = "";
                document.getElementById("t18").innerHTML = "";
                document.getElementById("t19").innerHTML = "";
                document.getElementById("t20").innerHTML = "";

                //Niv Talent
                document.getElementById("nt16").innerHTML = 1;
                document.getElementById("nt17").innerHTML = "";
                document.getElementById("nt18").innerHTML = "";
                document.getElementById("nt19").innerHTML = "";
                document.getElementById("nt20").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t16").innerHTML = "";
                document.getElementById("t17").innerHTML = "";
                document.getElementById("t18").innerHTML = "";
                document.getElementById("t19").innerHTML = "";
                document.getElementById("t20").innerHTML = "";

                //Niv Talent
                document.getElementById("nt16").innerHTML = "";
                document.getElementById("nt17").innerHTML = "";
                document.getElementById("nt18").innerHTML = "";
                document.getElementById("nt19").innerHTML = "";
                document.getElementById("nt20").innerHTML = "";

            }

        break;

    }

    //Jambières
    switch (s5) {
        case 0: //Default

            //Défence
            document.getElementById("d25").innerHTML = 0;
            document.getElementById("d26").innerHTML = 0;
            document.getElementById("d27").innerHTML = 0;
            document.getElementById("d28").innerHTML = 0;
            document.getElementById("d29").innerHTML = 0;
            document.getElementById("d30").innerHTML = 0;

            //Nom Talent
            document.getElementById("t21").innerHTML = "";
            document.getElementById("t22").innerHTML = "";
            document.getElementById("t23").innerHTML = "";
            document.getElementById("t24").innerHTML = "";
            document.getElementById("t25").innerHTML = "";

            //Niv Talent
            document.getElementById("nt21").innerHTML = "";
            document.getElementById("nt22").innerHTML = "";
            document.getElementById("nt23").innerHTML = "";
            document.getElementById("nt24").innerHTML = "";
            document.getElementById("nt25").innerHTML = "";

        break;

        case 1:  //Cuir Alpha
        case 2:  //Cuir Beta 

            //Défence
            document.getElementById("d25").innerHTML = 32;
            document.getElementById("d26").innerHTML = 2;
            document.getElementById("d27").innerHTML = 0;
            document.getElementById("d28").innerHTML = 0;
            document.getElementById("d29").innerHTML = 0;
            document.getElementById("d30").innerHTML = 0;

            if (s5 == 1) { //Alpha

                //Nom Talent
                document.getElementById("t21").innerHTML = "Monte-en-l'air";
                document.getElementById("t22").innerHTML = "";
                document.getElementById("t23").innerHTML = "";
                document.getElementById("t24").innerHTML = "";
                document.getElementById("t25").innerHTML = "";

                //Niv Talent
                document.getElementById("nt21").innerHTML = 1;
                document.getElementById("nt22").innerHTML = "";
                document.getElementById("nt23").innerHTML = "";
                document.getElementById("nt24").innerHTML = "";
                document.getElementById("nt25").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t21").innerHTML = "";
                document.getElementById("t22").innerHTML = "";
                document.getElementById("t23").innerHTML = "";
                document.getElementById("t24").innerHTML = "";
                document.getElementById("t25").innerHTML = "";

                //Niv Talent
                document.getElementById("nt21").innerHTML = "";
                document.getElementById("nt22").innerHTML = "";
                document.getElementById("nt23").innerHTML = "";
                document.getElementById("nt24").innerHTML = "";
                document.getElementById("nt25").innerHTML = "";

            }

        break;

        case 3: //Maille Alpha
        case 4: //Maille Beta

            //Défence
            document.getElementById("d25").innerHTML = 32;
            document.getElementById("d26").innerHTML = 0;
            document.getElementById("d27").innerHTML = 2;
            document.getElementById("d28").innerHTML = 0;
            document.getElementById("d29").innerHTML = 0;
            document.getElementById("d30").innerHTML = 0;

            if (s5 == 3) { //Alpha

                //Nom Talent
                document.getElementById("t21").innerHTML = "Cercle de vie";
                document.getElementById("t22").innerHTML = "";
                document.getElementById("t23").innerHTML = "";
                document.getElementById("t24").innerHTML = "";
                document.getElementById("t25").innerHTML = "";

                //Niv Talent
                document.getElementById("nt21").innerHTML = 1;
                document.getElementById("nt22").innerHTML = "";
                document.getElementById("nt23").innerHTML = "";
                document.getElementById("nt24").innerHTML = "";
                document.getElementById("nt25").innerHTML = "";

            } else { //Beta

                //Nom Talent
                document.getElementById("t21").innerHTML = "";
                document.getElementById("t22").innerHTML = "";
                document.getElementById("t23").innerHTML = "";
                document.getElementById("t24").innerHTML = "";
                document.getElementById("t25").innerHTML = "";

                //Niv Talent
                document.getElementById("nt21").innerHTML = "";
                document.getElementById("nt22").innerHTML = "";
                document.getElementById("nt23").innerHTML = "";
                document.getElementById("nt24").innerHTML = "";
                document.getElementById("nt25").innerHTML = "";

            }

        break;


    }

    //Amulette
    switch (s6) {
        case 1: //amulette1

            //Nom Talent
            document.getElementById("t26").innerHTML = "Spartiate";
            document.getElementById("t27").innerHTML = "";
            document.getElementById("t28").innerHTML = "";
            document.getElementById("t29").innerHTML = "";
            document.getElementById("t30").innerHTML = "";

            //Niv Talent
            document.getElementById("nt26").innerHTML = 1;
            document.getElementById("nt27").innerHTML = "";
            document.getElementById("nt28").innerHTML = "";
            document.getElementById("nt29").innerHTML = "";
            document.getElementById("nt30").innerHTML = "";

        break;

        case 2: //amulette2

            //Nom Talent
            document.getElementById("t26").innerHTML = "Cercle de vie";
            document.getElementById("t27").innerHTML = "";
            document.getElementById("t28").innerHTML = "";
            document.getElementById("t29").innerHTML = "";
            document.getElementById("t30").innerHTML = "";

            //Niv Talent
            document.getElementById("nt26").innerHTML = 1;
            document.getElementById("nt27").innerHTML = "";
            document.getElementById("nt28").innerHTML = "";
            document.getElementById("nt29").innerHTML = "";
            document.getElementById("nt30").innerHTML = "";

            break;
    }

    //addition defence total
    document.getElementById("d31").innerHTML = (parseFloat(document.getElementById("d1").textContent) + parseFloat(document.getElementById("d7").textContent) + parseFloat(document.getElementById("d13").textContent) + parseFloat(document.getElementById("d19").textContent) + parseFloat(document.getElementById("d25").textContent))
    document.getElementById("d32").innerHTML = (parseFloat(document.getElementById("d2").textContent) + parseFloat(document.getElementById("d8").textContent) + parseFloat(document.getElementById("d14").textContent) + parseFloat(document.getElementById("d20").textContent) + parseFloat(document.getElementById("d26").textContent))
    document.getElementById("d33").innerHTML = (parseFloat(document.getElementById("d3").textContent) + parseFloat(document.getElementById("d9").textContent) + parseFloat(document.getElementById("d15").textContent) + parseFloat(document.getElementById("d21").textContent) + parseFloat(document.getElementById("d27").textContent))
    document.getElementById("d34").innerHTML = (parseFloat(document.getElementById("d4").textContent) + parseFloat(document.getElementById("d10").textContent) + parseFloat(document.getElementById("d16").textContent) + parseFloat(document.getElementById("d22").textContent) + parseFloat(document.getElementById("d28").textContent))
    document.getElementById("d35").innerHTML = (parseFloat(document.getElementById("d5").textContent) + parseFloat(document.getElementById("d11").textContent) + parseFloat(document.getElementById("d17").textContent) + parseFloat(document.getElementById("d23").textContent) + parseFloat(document.getElementById("d29").textContent))
    document.getElementById("d36").innerHTML = (parseFloat(document.getElementById("d6").textContent) + parseFloat(document.getElementById("d12").textContent) + parseFloat(document.getElementById("d18").textContent) + parseFloat(document.getElementById("d24").textContent) + parseFloat(document.getElementById("d30").textContent))

    //addition talent total

    //Nom Talent
    document.getElementById("t31").innerHTML = (document.getElementById("t1").textContent  + document.getElementById("t6").textContent + document.getElementById("t11").textContent + document.getElementById("t16").textContent + document.getElementById("t21").textContent + document.getElementById("t26").textContent)


    //Niv Talent 
    document.getElementById("nt31").innerHTML = (parseFloat(document.getElementById("nt1").textContent))

});



function save() {
    document.getElementById("d37").innerHTML = document.getElementById("d31").textContent;
    document.getElementById("d38").innerHTML = document.getElementById("d32").textContent;
    document.getElementById("d39").innerHTML = document.getElementById("d33").textContent;
    document.getElementById("d40").innerHTML = document.getElementById("d34").textContent;
    document.getElementById("d41").innerHTML = document.getElementById("d35").textContent;
    document.getElementById("d42").innerHTML = document.getElementById("d36").textContent;
}                                         