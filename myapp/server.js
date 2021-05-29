const express = require('express');
const app = express();

/*const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));*/

app.get('/', (req, res) => {
    res.send('Hello You')
});

app.get('/add', (req, res) => {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    let sum = number1 + number2;
    console.log(`Adding ${number1} and ${number2}`);
    res.send('The sum is: ' + sum);
});

app.get('/substract', (req, res) => {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    let substraction = number1 - number2;
    console.log(`Substracting ${number1} and ${number2}`);
    console.log(substraction);
    res.send('The substraction is: ' + substraction);
});

app.get('/multiply', (req, res) => {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    let multiplication = number1 * number2;
    console.log(`Multiplicating ${number1} and ${number2}`);
    res.send('The multiplication is: ' + multiplication);
});

app.get('/divide', (req, res) => {
    const number1 = parseInt(req.query.value1);
    const number2 = parseInt(req.query.value2);
    let division = number1 / number2;
    console.log(`Dividing ${number1} by ${number2}`);
    console.log(division);
    res.send('The division is: ' + division);
});

//could be also parseFloat

app.get('/add/:value1/:value2', (req, res) => {
    const number1 = parseFloat(req.params.value1);
    const number2 = parseFloat(req.params.value2);
    let sum = number1 + number2;
    console.log(`Adding ${number1} and ${number2}`);
    res.send('The sum is: ' + sum);
}) 

app.get('/substract/:value1/:value2', (req, res) => {
    const number1 = parseFloat(req.params.value1);
    const number2 = parseFloat(req.params.value2);
    let substraction = number1 - number2;
    console.log(`Substracting ${number1} and ${number2}`);
    res.send('The sum is: ' + substraction);
})

app.get('/multiply/:value1/:value2', (req, res) => {
    const number1 = parseInt(req.params.value1);
    const number2 = parseInt(req.params.value2);
    let multiplication = number1 * number2;
    console.log(`Multiplicating ${number1} and ${number2}`);
    res.send('The multiplication is: ' + multiplication);
});

app.get('/divide/:value1/:value2', (req, res) => {
    const number1 = parseInt(req.params.value1);
    const number2 = parseInt(req.params.value2);
    let division = number1 / number2;
    console.log(`Dividing ${number1} by ${number2}`);
    res.send('The division is: ' + division);
});

const myLogger = (req, res, next) => {
    const visitTime = new Date();
    console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
    next();
  };
  app.use(myLogger);

app.listen(3000, () => console.log("Server is up and running"))