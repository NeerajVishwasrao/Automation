//click handler
function hc(torf, location) {
    reset()
    // document.querySelector("."+location).setAttribute("fill", "#ffffff")

    if (torf === "true") {
        // highlighter()
        document.getElementById(location).setAttribute("fill", "#55ff55")
    }
    else {
        document.getElementById(location).setAttribute("fill", "#ff5555")

    }

}

function highlighter(relobj) {
    document.getElementById("ans").childNodes[1].setAttribute("fill", "#55ff55");

}

function reset() {
    document.getElementById("1").setAttribute("fill", "#5555ff")
    document.getElementById("2").setAttribute("fill", "#5555ff")


}