    //click handler
    // function hc(relobj, isAns){
    //     alert("change box color to green or red -"+isAns);
    //     highlighter(relobj);
    // }

    // function highlighter(relobj){
    //     document.getElementById(relobj).childNodes[1].setAttribute("fill", "green");
    //     // alert("highlight the object #"+relobj);
    // }

    // function selectCircle(circleId) {
    //     // Reset all circles to default stroke color (black)
    //     document.getElementById("first").setAttribute("stroke", "#ffffff");
    //     document.getElementById("second").setAttribute("stroke", "#ffffff");
    //     document.getElementById("third").setAttribute("stroke", "#ffffff");
    //     document.getElementById("fourth").setAttribute("stroke", "#ffffff");
    
    //     // Set stroke color based on correctness
    //     if (circleId === "first" || circleId === "third") {
    //         // Check if the selected circle is correct
    //         document.getElementById(circleId).setAttribute("stroke", "#00ff00"); // Green stroke
    //     } else {
    //         document.getElementById(circleId).setAttribute("stroke", "#ff0000"); // Red stroke
    //     }
    // }


    function hc(isAns, boxno) {
        // alert("change box color to green or red -" + isAns);
    
        if (isAns === "green") {                           //1 /4
            if (boxno === "first") {
                document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
            }
            if (boxno === "second") {
                 //document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
            }
            if (boxno === "third") {
              //   document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
            }
            if (boxno === "fourth") {
                document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
            }
            
            document.getElementById(boxno).childNodes[1].setAttribute("fill", "#55ff55");
    }
    else if (isAns === "red") {
        if (boxno === "first") {
            document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
        }
        if (boxno === "second") {
           // document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
        }
        if (boxno === "third") {
           // document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
        }
        if (boxno === "fourth") {
            document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
        }

        document.getElementById(boxno).childNodes[1].setAttribute("fill", "#ff5555");
        
    }
}