//click handler
function hc(ID, position) {
    if (ID === "not") {
        reset()
        sc = new selectedclass();

    } else {
        sc.ClickedAns(ID, position)
    }
};

// swing image  1  2  snake text
// snake        3  4  swing
// dog          5  6  dog

function reset() {

    document.getElementById("locR1").setAttribute("fill", "#5e17eb")
    document.getElementById("locR2").setAttribute("fill", "#5e17eb")
    document.getElementById("locR3").setAttribute("fill", "#5e17eb")
    document.getElementById("locL1").setAttribute("fill", "#5e17eb")
    document.getElementById("locL2").setAttribute("fill", "#5e17eb")
    document.getElementById("locL3").setAttribute("fill", "#5e17eb")

    document.querySelectorAll(".match1 path").forEach((element) => {
        element.setAttribute("stroke", "#ffffff")
    })

    document.querySelectorAll(".match2 path").forEach((element) => {
        element.setAttribute("stroke", "#ffffff");
    })

    document.querySelectorAll(".match3 path").forEach((element) => {
        element.setAttribute("stroke", "#ffffff")
    })


}
// swing image  1  2  snake text
// snake        3  4  swing
// dog          5  6  dog

class selectedclass {
    index = 0;
    clickedloc1 = ""
    clickedloc2 = ""
    selected1 = ""
    selected2 = ""
    constructor() { }


    ClickedAns(ID, position) {

        if (this.index == 0) {

            this.clickedloc1 = position;
            this.selected1 = ID;
            this.index++
            document.getElementById(this.clickedloc1).setAttribute("fill", "#FFD700")
        }
        else {
            this.selected2 = ID;
            this.clickedloc2 = position;
            this.index = 0;

            if ((this.selected1 === "match1" && this.selected2 === "match1") || (this.selected2 === "match1" && this.selected1 === "match1") ||
                (this.selected1 === "match2" && this.selected2 === "match2") || (this.selected2 === "match2" && this.selected1 === "match2") ||
                (this.selected1 === "match3" && this.selected2 === "match3") || (this.selected2 === "match3" && this.selected1 === "match3")) {

                document.querySelectorAll("."+this.selected1 +" path").forEach((element) => {
                    element.setAttribute("stroke", "#55ff55")
                })

                document.getElementById(this.clickedloc1).setAttribute("fill", "#90ee90")
                document.getElementById(this.clickedloc2).setAttribute("fill", "#90ee90")

            }
            else {
                document.getElementById(this.clickedloc1).setAttribute("fill", "#5e17eb")
                document.getElementById(this.clickedloc2).setAttribute("fill", "#5e17eb")
            }
        }
    }
}
