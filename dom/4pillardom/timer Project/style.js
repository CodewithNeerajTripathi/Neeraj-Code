

const endDate ="9 March 2024 15:06"

document.getElementById("endDate").innerText=endDate;
const input= document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const deff = (end - now)/1000;

    if(deff<0) return ;


     console.log(deff)
     input[0].value= Math.floor(deff/3600/24);
     input[1].value= Math.floor((deff/3600)%24);
     input[2].value= Math.floor((deff/60)%60);
     input[3].value= Math.floor(deff)%60;
     

}

clock()

setInterval(()=>{
    clock();
},1000)