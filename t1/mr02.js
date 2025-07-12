//click handler
function hc(location) {
    
 document.getElementById(location).style.display = "none";   
    
   
    // reset()
    // document.querySelector(location).setAttribute("fill", "#ffffff")

    // if (torf === "true") {
    //     highlighter()
    //     document.getElementById(location).setAttribute("fill", "#55ff55")
    // }
    // else {
    //     document.getElementById(location).setAttribute("fill", "#ff5555")

    // }

}

function onhover(location){
document.querySelector("."+location).setAttribute("fill","#006400")
}

function onleave(location){
    document.querySelector("."+location).setAttribute("fill","#c1ff72")

}
function highlighter(relobj) {
    document.getElementById("ans").childNodes[1].setAttribute("fill", "#55ff55");

}

function reset() {
   

}