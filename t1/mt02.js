    //click handler
    // function hc(relobj, isAns){
    //     alert("change box color to green or red -"+isAns);
    //     highlighter(relobj);
    // }

    // function highlighter(relobj){
    //     document.getElementById(relobj).childNodes[1].setAttribute("fill", "green");
    //     // alert("highlight the object #"+relobj);
    // }
    function hc(isAns, boxno){

        if (isAns === "green") {
            if (boxno === "first") {
                document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("fourth").childNodes[1].setAttribute("fill","#ffffff");
            }
            if (boxno === "second") {
                document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("fourth").childNodes[1].setAttribute("fill","#ffffff");
            }
            if (boxno === "third") {
                document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("fourth").childNodes[1].setAttribute("fill","#ffffff");
            }
            if (boxno === "fourth") {
                document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
                document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
            }
            document.getElementById(boxno).childNodes[1].setAttribute("fill", "#55ff55");
          

    }

    else if (isAns === "red") {
        if (boxno === "first") {
            // document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("fourth").childNodes[1].setAttribute("fill","#ffffff");
            document.getElementById("third").childNodes[1].setAttribute("fill","#ffffff");
        }
        if (boxno === "second") {
            document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("fourth").childNodes[1].setAttribute("fill","#ffffff")
        }
        if (boxno === "third") {
            document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("fourth").childNodes[1].setAttribute("fill","#ffffff");
        }

        if (boxno === "fourth") {
            document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
            document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
        }

        document.getElementById(boxno).childNodes[1].setAttribute("fill", "#ff5555");
        // reset();
    }



}

