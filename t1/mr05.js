//click handler
function hc(index) {
    // reset()
    // document.querySelector("."+location).setAttribute("fill", "#ffffff")
document.getElementById(index).setAttribute("fill","#5555ff")
  

}

function highlighter(relobj) {
    document.getElementById("ans").childNodes[1].setAttribute("fill", "#55ff55");

}

function reset() {
    document.getElementById("1").setAttribute("fill", "#ffffff")
    document.getElementById("2").setAttribute("fill", "#ffffff")

    document.getElementById("3").setAttribute("fill", "#ffffff")
    document.getElementById("4").setAttribute("fill", "#ffffff")
    document.getElementById("5").setAttribute("fill", "#ffffff")
    document.getElementById("6").setAttribute("fill", "#ffffff")



}