function magicBox(){
    alert("Greeting Mr. X please choose the surprise box");
    document.getElementById("magicTab").style.display = "";
}


// on click of box 1 show text in box3 and show colors in box 2
function changeBox3(){
    document.getElementById("box3").innerHTML = "3<br>Opps something went wrong?";
    let box2 = document.getElementById("box2");
    let i = 0;
    box2.style.backgroundColor = `red`;
    setInterval(function(){ 
        if(i == 0)
            box2.style.backgroundColor = `yellow`;
        if(i == 1)
            box2.style.backgroundColor = `blue`;
        if(i == 2)
            box2.style.backgroundColor = `red`;
        i++;
        if(i == 3)
            i = 0;
    }, 3000);
}

document.onkeydown = checkKey;
let i = 0;
const colors = ["purple", "skyblue", "pink", "cyan", "black"];
function checkKey(e){
    // check if any arrow key clicked
    if(e.keyCode == '37' || e.keyCode == '38' || e.keyCode == '39' || e.keyCode == '40'){
        let box4 = document.getElementById("box4");
        box4.style.backgroundColor = `black`;

        //if up and right then show next color
        if(e.keyCode == '38' || e.keyCode == '39'){
            if(i == 5)
                i = 0;
            box4.style.backgroundColor = `${colors[i]}`;
            i++;
        }

        // if down or left key pressed then previous color
        if(e.keyCode == '37' || e.keyCode == '40'){
            if(i == 5)
                i = 0;
            box4.style.backgroundColor = `${colors[i]}`;
            i++;
        }
        setInterval(function(){ 
            if(i == 5)
                i = 0;
            box4.style.backgroundColor = `${colors[i]}`;
            i++;
        }, 5000);
    }
}
