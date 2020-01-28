setInterval(function(){
   
    var then = new Date("Feb 19, 2020 00:00").getTime();
    var curDate = new Date().getTime();
    var t = then-curDate;

    var days = Math.floor((t) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / (1000)); 


    document.getElementById("showDays").innerHTML = days + " d ";
    document.getElementById("showHours").innerHTML = hours + " h, ";
    document.getElementById("showMinutes").innerHTML = minutes + " m and ";
    document.getElementById("showSeconds").innerHTML = seconds + " s ";

console.log(days)
},1000);


// var endDate = moment.format("dddd, MMMM Do YYYY");
// var curDate = new Date();
// var date = curDate.getDate();
// console.log(date);
// console.log(curDate)