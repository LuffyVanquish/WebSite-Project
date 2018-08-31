setInterval(function () {

    var s1 = document.getElementById('select1').value;
    var s2 = document.getElementById('select2').value;
    var s3 = document.getElementById('select3').value;
    var s4 = document.getElementById('select4').value;
    var s5 = document.getElementById('select5').value;
    var s6 = document.getElementById('select6').value;

    console.log("s1 : " + s1);
    console.log("s2 : " + s2);
    console.log("s3 : " + s3);
    console.log("s4 : " + s4);
    console.log("s5 : " + s5);
    console.log("s6 : " + s6);


    //Casque
    if (s1 == 0) {
        document.getElementById("d1").innerHTML = 0; //Defence
        document.getElementById("d2").innerHTML = 0; //Feu
        document.getElementById("d3").innerHTML = 0; //Eau
        document.getElementById("d4").innerHTML = 0; //Foudre
        document.getElementById("d5").innerHTML = 0; //Glace
        document.getElementById("d6").innerHTML = 0; //Dragon

    } else if (s1 == 1, 2) {
        document.getElementById("d1").innerHTML = 51;
        document.getElementById("d2").innerHTML = 2;
        document.getElementById("d3").innerHTML = 0;
        document.getElementById("d4").innerHTML = 0;
        document.getElementById("d5").innerHTML = 0;
        document.getElementById("d6").innerHTML = 0;

    }

    //Torse
    if (s2 == 0) {
        document.getElementById("d7").innerHTML = 0;
        document.getElementById("d8").innerHTML = 0;
        document.getElementById("d9").innerHTML = 0;
        document.getElementById("d10").innerHTML = 0;
        document.getElementById("d11").innerHTML = 0;
        document.getElementById("d12").innerHTML = 0;

    } else if (s2 == 1, 2) {
        document.getElementById("d7").innerHTML = 51;
        document.getElementById("d8").innerHTML = 2;
        document.getElementById("d9").innerHTML = 0;
        document.getElementById("d10").innerHTML = 0;
        document.getElementById("d11").innerHTML = 0;
        document.getElementById("d12").innerHTML = 0;

    }

    //Bras
    if (s3 == 0) {
        document.getElementById("d13").innerHTML = 0;
        document.getElementById("d14").innerHTML = 0;
        document.getElementById("d15").innerHTML = 0;
        document.getElementById("d16").innerHTML = 0;
        document.getElementById("d17").innerHTML = 0;
        document.getElementById("d18").innerHTML = 0;

    } else if (s3 == 1, 2) {
        document.getElementById("d13").innerHTML = 51;
        document.getElementById("d14").innerHTML = 2;
        document.getElementById("d15").innerHTML = 0;
        document.getElementById("d16").innerHTML = 0;
        document.getElementById("d17").innerHTML = 0;
        document.getElementById("d18").innerHTML = 0;

    }

    //Ceintures
    if (s4 == 0) {
        document.getElementById("d19").innerHTML = 0;
        document.getElementById("d20").innerHTML = 0;
        document.getElementById("d21").innerHTML = 0;
        document.getElementById("d22").innerHTML = 0;
        document.getElementById("d23").innerHTML = 0;
        document.getElementById("d24").innerHTML = 0;

    } else if (s4 == 1, 2) {
        document.getElementById("d19").innerHTML = 51;
        document.getElementById("d20").innerHTML = 2;
        document.getElementById("d21").innerHTML = 0;
        document.getElementById("d22").innerHTML = 0;
        document.getElementById("d23").innerHTML = 0;
        document.getElementById("d24").innerHTML = 0;

    }

    //Jambières
    if (s5 == 0) {
        document.getElementById("d25").innerHTML = 0;
        document.getElementById("d26").innerHTML = 0;
        document.getElementById("d27").innerHTML = 0;
        document.getElementById("d28").innerHTML = 0;
        document.getElementById("d29").innerHTML = 0;
        document.getElementById("d30").innerHTML = 0;

    } else if (s5 == 1, 2) {
        document.getElementById("d25").innerHTML = 51;
        document.getElementById("d26").innerHTML = 2;
        document.getElementById("d27").innerHTML = 0;
        document.getElementById("d28").innerHTML = 0;
        document.getElementById("d29").innerHTML = 0;
        document.getElementById("d30").innerHTML = 0;

    }


},
    1000
);
