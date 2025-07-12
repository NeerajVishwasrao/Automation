function hc(isAns, boxno) {
    reset();

    if (isAns === "green") {
        lighter();
        document.getElementById(boxno).childNodes[1].setAttribute("fill", "#55ff55");

    } 
    else if (isAns === "red") {
        document.getElementById(boxno).childNodes[1].setAttribute("fill", "#ff5555");

    }
}

function reset() {
    document.getElementById("first").childNodes[1].setAttribute("fill", "#ffffff");
    document.getElementById("second").childNodes[1].setAttribute("fill", "#ffffff");
    document.getElementById("third").childNodes[1].setAttribute("fill", "#ffffff");
    document.getElementById('a').childNodes[1].setAttribute("fill", "#ffffff");


}
function lighter() {
    document.getElementById('a').childNodes[1].setAttribute("fill", "#55ff55");
    setTimeout(greeting, 100);
    
}

function  greeting(){
    let img = document.createElement('img');
    img.src ='sticker1.gif';
    img.style.position='absolute';
    img.style.zIndex='1';
    document.getElementById('divv').appendChild(img);
}