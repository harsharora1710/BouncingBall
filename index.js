var g=9.8;
var e=1;
var d=2;
var v=0.0;
var z=0;
var y=150;
$("#b3").click(function(){
    $(".circle").css("top","150px");
    z=0;
    y=150;
    v=0;
})

$("#b2").click(function(){ 
    z=0;
})

$("#b1").click(function(){   
    z=1;
    // alert(1);
})

$(document).ready(function() {  
    setInterval(fun, 1000/60)
 });

 function fun(){
    if(z==1)
    {
        var gg=document.getElementById("gg").value;
        var ee=document.getElementById("rr").value;
        var dd=document.getElementById("dd").value;
        g=parseFloat(gg);
        e=parseFloat(ee);
        d=parseFloat(dd);

        v=v+g*0.01;
        if(v>0)
        v-=v*v*d*0.00001;
        else
        v+=v*v*d*0.00001
        // console.log(v);
        y=y+v*0.2;
        if(y>590)
        {
            y=590-(y-590);
            v=-v*e;
        }
        $(".circle").css("top",y);
        if(v>-1.0&&v<1.0)
        console.log(590-y);
    }
 }




