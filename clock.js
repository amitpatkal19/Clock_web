//1) This code will just simply show all details of indian time 

// let a;
// setInterval(() => {
//     a=new Date();
//     document.getElementById('current_time').innerHTML=a;
//     }, 1000);
      
//2) This will show better time and date ,year,etc
let a,time,date,year,second,minute,month;
setInterval(() => {
    a=new Date();
    date=a.getDate();
    month=a.getMonth();
    year=a.getFullYear();
    second=a.getSeconds();
    minute=a.getMinutes();
    hour=a.getHours();
    if(second>10) 
        document.getElementById('current_time').innerHTML= hour+":"+ minute+":"+second+"  on "+date+"/"+month+"/"+year; 
    else 
        document.getElementById('current_time').innerHTML= hour+":"+ minute+":0"+second+"  on "+date+"/"+month+"/"+year; 
}, 1000);