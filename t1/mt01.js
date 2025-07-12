   

    //click handler
function hc(relobj, isAns) {
 
    console.log("Function call")
    console.log(relobj)
    console.log(isAns)
    const rightbox = document.getElementById("second").childNodes[1]
    const wrongbox1 = document.getElementById("first").childNodes[1]
    const wrongbox2 = document.getElementById("third").childNodes[1]
    if (relobj == "b") {    
        // console.log("Rightbox" + rightbox)
        // alert("change box color to green or red -" + isAns);

        rightbox.setAttribute("fill", "#55ff55 ") 
        wrongbox1.setAttribute("fill","#ffffff")
        wrongbox2.setAttribute("fill","#ffffff")
    }
    else if(relobj == "a"){
        
        wrongbox1.setAttribute("fill","#ff5555");

        rightbox.setAttribute("fill","#ffffff")
        wrongbox2.setAttribute("fill","#ffffff")

       }

    else{
        
        wrongbox2.setAttribute("fill","#ff5555")

        wrongbox1.setAttribute("fill","#ffffff");
        rightbox.setAttribute("fill","#ffffff")
    }
    highlighter(relobj);
}

function highlighter(relobj) {
    document.getElementById(isAns).childNodes[1].setAttribute("fill", "#55ff55");
    // alert("highlight the object #"+relobj);
}