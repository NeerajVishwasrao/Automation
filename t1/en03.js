

function highlighter(relobj) {
loc
}
function reset() {
    document.getElementById("loc1").childNodes[1].setAttribute("fill", "#ffffff")
    document.getElementById("loc2").childNodes[1].setAttribute("fill", "#ffffff")
    document.getElementById("loc3").childNodes[1].setAttribute("fill", "#ffffff")

}
function hc(torf, position) {
    if (torf === "true") {
        document.getElementById(position).childNodes[1].setAttribute("fill", "#55ff55")

    }
    else if (torf === "false") {
        document.getElementById(position).childNodes[1].setAttribute("fill", "#ff5555")

    }
}