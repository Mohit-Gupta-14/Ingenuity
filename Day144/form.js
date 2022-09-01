window.onload= function(){
    setInterval(stopload,5000);
}
function stopload(){
    document.querySelector(".container").style.display="none";
    document.querySelector(".contain").style.display="flex";
}
var bu=document.getElementById("button1");
bu.onclick = function ()
{
    alert("Data Submiited");
}