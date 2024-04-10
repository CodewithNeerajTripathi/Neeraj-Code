

const  req = document.querySelector("h4")

const button= document.querySelector("#butt")

var value =0;

button.addEventListener("click", function(){
    if(value==0){
    req.innerHTML="Friends"
    button.innerHTML="Accept"
    value=1;
    }
    else{
        req.innerHTML="Stanger"
    button.innerHTML="Add Friends"
    value=0;
    }
})