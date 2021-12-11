// Fahrenheit to celcius API

const express = require('express')
const app = express()

// Celcius to Fahrenheit
function ToFahrenheit(c){
    return (c * 9/5) + 32
}

// Fahrenheit to Celcius
function ToCelcius(f){
    return (f - 32) * 5/9
}

// To fahrenheit
app.get('/tf', (req, res) => {
    if (req.query.r == 'true') {res.write(Math.round(ToFahrenheit(req.query.c)).toString())}
    else{
        res.write(ToFahrenheit(req.query.c).toString()) 
    }
    res.end()
});

// To celcius
app.get('/tc', (req, res) => {
    if (req.query.r == 'true') {
        res.write(Math.round(ToCelcius(req.query.f)).toString())
    } else {
        res.write(ToCelcius(req.query.f).toString())
    }
    res.end()
});

app.listen(80);