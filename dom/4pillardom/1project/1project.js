const bulb =document.querySelector(".light")
const butt=document.querySelector("button")
const body = document.querySelector("body")

body.style.backgroundColor="pink"

var value= 0;
butt.addEventListener("click",function(){
    if(value==0){
        butt.innerHTML="off"
        bulb.style.backgroundColor= "yellow"
        value = 1;
    }
    else{
        butt.innerHTML="ON"
        bulb.style.backgroundColor= "white "
        value = 0;
          
    }

})