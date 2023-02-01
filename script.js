function showTime(){
    
    date = new Date();
    
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if(h>12){
        session = "PM";
        h = h - 12;
    }
    
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;
    
    if(h=="00"){
        h="12"
    }
    
    var time =  h +':' + m + ':' + s + " " + session ;
 var clock = document.getElementsByClassName("clock")[0].innerHTML = time;



 setInterval(showTime,1000)
}
showTime();