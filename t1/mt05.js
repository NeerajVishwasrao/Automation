
let counter = 0
let Target = 0

//click handler
function hc(relobj, isid) {
    // alert("cfunction call -"+isid);

    console.log("target",Target)
    // console.log(relobj)
    // console.log(isid)
    // console.log(relobj=="1")

    // console.log("sfgr")
    let stroke = document.getElementById(isid).childNodes[1].getAttribute('stroke');

    console.log(stroke)
    if (stroke == "#d9d9d9") {
        counter += 1
        // console.log(counter)

        document.getElementById(isid).childNodes[1].setAttribute("stroke", "#55ff55")
        this.displaycount()
    }
    // highlighter(relobj);
}

function displaycount() {
    // console.log("display count function call")
    // console.log(target)
    
    
    var id_to_display = "no" + counter.toString();

    console.log(id_to_display)
    console.log(typeof (id_to_display))

    var id_element = document.getElementById(id_to_display)
    if (id_element) {


        id_element.style.display = 'block';
    }
    if(counter==Target){
        document.getElementById('box').childNodes[1].setAttribute("stroke","#55ff55");

    }

}


function reset(target) {
    // console.log("reset function called")

    Target = target
    // console.log(Target)


    //get element by id of numbers and set display to none
    let no1 = document.getElementById('no1')
    if (no1) {
        no1.style.display = 'none';
    }
    let no2 = document.getElementById('no2')
    if (no2) {
        no2.style.display = 'none';
    }
    let no3 = document.getElementById('no3')
    if (no3) {
        no3.style.display = 'none';
    }
    let no4 = document.getElementById('no4')
    if (no4) {
        no4.style.display = 'none';
    }
    let no5 = document.getElementById('no5')
    if (no5) {
        no5.style.display = 'none';
    }

    let no6 = document.getElementById('no6')
    if (no6) {
        no6.style.display = 'none';
    }



    let no7 = document.getElementById('no7')
    if (no7) {
        no7.style.display = 'none';
    }
    let no8 = document.getElementById('no8')
    if (no8) {
        no8.style.display = 'none';
    }
    let no9 = document.getElementById('no9')
    if (no9) {
        no9.style.display = 'none';
    }
    let no10 = document.getElementById('no10')
    if (no10) {
        no10.style.display = 'none';
    }

   
}
