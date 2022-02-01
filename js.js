//name and group
document.getElementById("ng").innerHTML = "Leila Zhuruntayeva CS-2111";

//year
document.getElementById("year").innerHTML ="Year: " + new Date().getFullYear();

//day of the week
let d = new Date();
const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let cdayw = week[d.getDay()];
document.getElementById("cdayw").innerHTML ="Today is : " + cdayw;

//date
let cdate  = d.getDate();
document.getElementById("cdate").innerHTML = "Date: "  + cdate;

//current month
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let cmonth = d.getMonth();
document.getElementById("cmonth").innerHTML = "Month: " + months[cmonth];

//time
let hour = d.getHours();
let minute = d.getMinutes();
let seconds = d.getSeconds();
document.getElementById("time").innerHTML = "Current time is: " + hour + ":" + minute+":"+seconds;

//days till graduation
let gdate = new Date('06/30/2024');
let diff = gdate.getTime() - d.getTime();
let conv = 1000*3600*24;
document.getElementById("unigrad").innerHTML = Math.round(diff/conv) + " days left until the freedom!";

//calc
let a = document.getElementById("num1");
let b = document.getElementById("num2");
let res = document.getElementById("res");

//multiply
function Multiplication(){
	res.innerText = (a.value * b.value).toString();
}

//divide
function Division(){
	res.innerText = (a.value / b.value).toString();
}
