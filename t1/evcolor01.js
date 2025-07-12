

//click handler

let selectedpartid;
let color;
console.log("object loaded")


function hc(color) {
    this.color = color

}

function getcolor(selectedpartid) {
    this.selectedpartid = selectedpartid
    console.log("  id = " + this.selectedpartid + "  color is = " + this.color)
document.getElementById(this.selectedpartid).style.fill=this.color

}

