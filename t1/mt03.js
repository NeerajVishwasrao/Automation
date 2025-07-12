    //click handler
    function hc(relobj,isid){
        // alert("change box color to green or red -"+relobj);
        if(relobj==="green"){
            document.getElementById('g').childNodes[1].setAttribute("fill","#55ff55");
            document.getElementById('r').childNodes[1].setAttribute("fill","#d9d9d9")
        }
        else{
            document.getElementById('r').childNodes[1].setAttribute("fill","#ff5555");
            document.getElementById('g').childNodes[1].setAttribute("fill","#d9d9d9")

        }


        // highlighter(relobj);
    }

    function highlighter(relobj){
        document.getElementById(relobj).childNodes[1].setAttribute("fill", "green");
        // alert("highlight the object #"+relobj);
    }