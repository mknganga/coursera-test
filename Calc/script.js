


function compute()
{

var p = document.getElementById("principal").value;

var yrs = document.getElementById("years").value;


var r = document.getElementById("rate").value;

if (p == 0){
	alert("Please Enter a Positive Number");
	document.getElementById("principal").focus();
    return false;
}

var interest = (p*r*yrs)/100;


window.p = p;
window.yrs = yrs;
window.r = r; 
window.interest = interest;
};

document.getElementById("thebtn").addEventListener("click", function() {

yrs = Number(yrs);
var d = new Date();
var year = d.getFullYear() + yrs;

document.getElementById("p1").innerHTML = "If you deposit:" + '&nbsp' +  "<span class='highlight'>"+ p + "</span>";
  
document.getElementById("r").innerHTML = "at an interest rate of:" + '&nbsp' +  "<span class='highlight'>" +r + "</span>";
document.getElementById("i").innerHTML = "You will receive an amount of:" + '&nbsp' +  "<span class='highlight'>" +interest +"</span>";
document.getElementById("y").innerHTML = "in the year:" + '&nbsp' +  "<span class='highlight'>" + year + "</span>";

});

function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}

for(var i=1; i<=24; i++){
    var select = document.getElementById("years");
    var option = document.createElement("OPTION");
    select.options.add(option);
    option.text = i;
    option.value = i;
}

