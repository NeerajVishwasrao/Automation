
function reset() {
    console.log("in reset")
    document.getElementById("locL1").setAttribute("fill", "#ffffff")
    document.getElementById("locL2").setAttribute("fill", "#ffffff")
    document.getElementById("locR1").setAttribute("fill", "#ffffff")
    document.getElementById("locR2").setAttribute("fill", "#ffffff")

    document.querySelector(".locL1").setAttribute("stroke", "#ffffff");
    document.querySelector(".locL2").setAttribute("stroke", "#ffffff");
    document.querySelector(".locR1").setAttribute("stroke", "#ffffff");
    document.querySelector(".locR2").setAttribute("stroke", "#ffffff");

}

function hc(rORw, location) {
    if (rORw === "not") {
        reset()
        select = new selectedclass();
        
    }
    else {
        console.log("here")
        select.myselection(rORw, location);

    }
}
class selectedclass {
    index = 0;
    selected1 = ""
    clickedloc1 = ""
    selected2 = ""
    clickedloc2 = ""
    constructor() {}

    myselection(rORw, location) {

        if (this.index == 0) {
            reset()
            this.selected1 = rORw;
            this.clickedloc1 = location;
            this.index++;
            document.querySelector("."+this.clickedloc1).setAttribute("stroke", "#808080");

        }
        else {
            this.selected2 = rORw;
            this.clickedloc2 = location;
            this.index = 0;
            document.querySelector("."+this.clickedloc2).setAttribute("stroke", "#808080");

            if ((this.selected1 === "true" && this.selected2 === "true") || (this.selected2 === "true" && this.selected1 === "true")) {

                document.getElementById(this.clickedloc1).setAttribute("fill", "#55ff55")
                document.getElementById(this.clickedloc2).setAttribute("fill", "#55ff55")

            }
            else {
                document.getElementById(this.clickedloc1).setAttribute("fill", "#ff5555")
                document.getElementById(this.clickedloc2).setAttribute("fill", "#ff5555")

            }
        }
    }
}