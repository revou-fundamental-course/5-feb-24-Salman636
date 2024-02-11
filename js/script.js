function convert() {
    var celcius = parseFloat(document.getElementById("num1").value);
    var farenheit = (celcius * (9/5)) + 32;
    document.getElementById("result").value = farenheit;
    document.getElementById("cara").value = `${celcius} °C x (9/5) + 32 = ${farenheit} °F`;
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("result").value = "";
    document.getElementById("cara").value = "";
}

function reverse() {
    var farenheit = parseFloat(document.getElementById("result").value);
    var celcius = (farenheit - 32) / (9/5) ;
    document.getElementById("num1").value = celcius;
    document.getElementById("cara").value = `(${farenheit} °F - 32) / (9/5) = ${celcius} °C`;
}

