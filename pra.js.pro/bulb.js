var bulb= document.querySelector(".tor")
var butt= document.querySelector("button")
 var value=0;
  butt.addEventListener("click", () => {
    if(value==0){
        butt.innerHTML= "OFF"
        bulb.style.backgroundColor= "yellow"
        value = 1;
    }
    else{
        butt.innerHTML= "ON"
        bulb.style.backgroundColor= "white"
        value = 0;
    }
})