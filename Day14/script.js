 var dir=document.getElementsByClassName("dirt");
 var mol=document.getElementsByClassName("mole");
 var po=document.getElementsByClassName("points");
 console.log(po);
 po[0].style.visibility = "hidden";
 po[1].style.visibility = "hidden";
for(var i=0;i<dir.length;i++)
{
mol[i].style.visibility = "hidden";
dir[i].style.visibility = "hidden";
}
var score=0;
function start()
{
    document.getElementById("mud").style.visibility ="hidden";
    document.getElementById("mole").style.visibility ="hidden";
    for(var i=0;i<dir.length;i++)
{
dir[i].style.visibility = "visible";
document.getElementById("start").style.visibility ="hidden";
}
po[0].style.visibility = "visible";
 po[1].style.visibility = "visible";
    setTimeout(outer,6000);
   var out=setInterval(pri,2000); 
}
function outer()

{
    console.log("function called")
    clearInterval(out);
}
function pri()
{
    var ran=Math.floor(Math.random() * 7);
    mol[ran].style.visibility="visible";
    mol[ran].onclick = addPoint;
    setTimeout(hid,1000);
    function hid(){
        mol[ran].style.visibility="hidden";
    }
    
}

function addPoint(){
    score++;
    po[1].innerText=""+score;
    var myaudio=new Audio();
    myaudio.src="./su.mp3";
    myaudio.play();
}


    

