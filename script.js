
function convert(){

let temperature = document.getElementById("temperature").value;
let fromUnit = document.getElementById("fromUnit").value;
let toUnit = document.getElementById("toUnit").value;

let result;

if (isNaN(temperature)){
    document.getElementById("result").innerHTML = "Please Enter a Temperature Value.";
    return;
}

temperature = +temperature;
if (isNaN(temperature)){
    document.getElementById("result").innerHTML = "Please Enter a Temperature Value.";
}
else if(fromUnit === "Celsius" && toUnit === "Fahrenheit"){
 result = (temperature * 9/5) + 32;
 document.getElementById("result").innerHTML = `${result.toFixed(2)} °F`;
}

else if (fromUnit === "Fahrenheit" && toUnit === "Celsius"){
    result = (temperature - 32) * 5/9;
    document.getElementById("result").innerHTML = `${result.toFixed(2)} °C`;
}
else {
    document.getElementById("result").innerHTML = "Please select different units for conversion.";
}
}

function refresh(){
    document.getElementById("temperature").value = "";
    document.getElementById("result").innerHTML = "";
   
}