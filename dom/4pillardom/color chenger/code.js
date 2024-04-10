

 const butt = function(){
    const num=Math.floor(Math.random()*16777215);
    const random="#" + num.toString(16);
    
    document.body.style.backgroundColor = random;
    document.getElementById("color").innerText=random;
}
document.getElementById("btns").addEventListener( "click", butt)

butt();