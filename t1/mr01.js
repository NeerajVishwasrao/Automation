//click handler
function hc(torf, location) {
    console.log("comming in hc")
    reset()

    if (torf === "true") {
        highlighter()
        document.getElementById(location).setAttribute("fill", "#c1ff72")
    }
    else {
        document.getElementById(location).setAttribute("fill", "#ff5757")

    }

}

function highlighter() {
    document.getElementById("ans").setAttribute("fill", "#55ff55");

}

function reset() {
     document.getElementById("ans").setAttribute("fill", "#ffffff");
    document.getElementById("locR1").setAttribute("fill", "#ffffff")
    document.getElementById("locR2").setAttribute("fill", "#ffffff")
    document.getElementById("locL1").setAttribute("fill", "#ffffff")
    document.getElementById("locL2").setAttribute("fill", "#ffffff")

}