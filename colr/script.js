

var rect =document.querySelector("#center");

rect.addEventListener("mousemove", function(){
   var rectangle = rect.getBoundingClientRect();
   var inside = event.clientX - rectangle.left;

   if( inside< rectangle.width/2){
    var redcolor= gsap.utils.mapRange(0,rectangle.width/2,255,0,inside);
     gsap.to(rect,{
        backgroundColor: `rgb(${redcolor},0,0)`,
        ease:Power4,
     })
    }
     else{
        var blueColor = gsap.utils.mapRange(rectangle.width / 2, rectangle.width, 0, 255, inside);

        gsap.to(rect,{
           backgroundColor: `rgb(0,0,${blueColor})`,
           ease:Power4,
     });
    }
});

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor:"white"
    });
});