

function highlighter(relobj) {
}
function reset() {
    document.querySelector(".class1").setAttribute("fill", "#ffffff")
    document.querySelector(".class2").setAttribute("fill", "#ffffff")
    document.querySelector(".class3").setAttribute("fill", "#ffffff")
    document.querySelector(".class4").setAttribute("fill", "#ffffff")


    // document.getElementById("1").setAttribute("fill", "#ffffff")
    // document.getElementById("2").setAttribute("fill", "#ffffff")
    // document.getElementById("3").setAttribute("fill", "#ffffff")
    // document.getElementById("4").setAttribute("fill", "#ffffff")

}


class selelctedans {

    index = 1;
    constructor() {
        console.log("object is got created");
    }
    ans(torf) {

        console.log(parseInt(torf, 10));
        var ans = parseInt(torf, 10);

        if (ans === this.index) {
            document.getElementById(torf).setAttribute("fill", "#F0F0F0");
            document.querySelector(".class" + torf).setAttribute("fill", "#55ff55");
            torf++
            if (torf < 5) {
                document.querySelector(".class" + torf).setAttribute("stroke", "#ff5555");
            }
            torf--
            document.querySelector(".class" + torf).setAttribute("stroke", "#000000");

            if (ans === 4) {
                document.querySelectorAll(".not").forEach(element => {
                    element.setAttribute("fill", "#ff5555");
                });

            }
            this.index++

        }
        else {

            console.log("wrong answer");
        }
    }
}


function hc(torf) {
    if (torf == "not") {
        reset()
        se = new selelctedans();
    } else {
        se.ans(torf);
    }
}