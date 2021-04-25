function sum(num1, num2) {  //funcion que recibe los 2 parametros y realiza la suma
    return num1 + num2;
}

function calc(num1, num2, callback) {   //funcion que se ejecuta
    return callback(num1, num2);        //recibe 3 parametros, el 3ro es el callback
}                                       //el 3er paramaetro es una funcion, y se devuelve pasandole el 1ro y 2do parametro

console.log(calc(6, 2, sum));           //se ejecuta la funcion calc
                                        //calc devuelve la funcion sum utilizando los 2 parametros que le pasamos
//la ejecuon seria:                     //se realiza la suma ya que esta definida la funcion sum
// function calc(6, 2) {   
//     return sum(6, 2);       
// } 

function date(callback) {
    console.log(new Date);  //este objeto tiene la fecha del equipo
    setTimeout(() => {
        let date = new Date;    //se declara que dentro de esa variable estara la fecha
        callback(date);         //se le pasa como parametro al callback la variable date
    }, 3000);                   //como a printDate se le pasa la variable date, entonces la muestra en consola porque eso hace la funcion
}

function printTDate(dateNow) {
    console.log(dateNow);
}

date(printTDate);   //se ejecuta date y se le pasa como parametro printDate
                    //printDate es la funcion que es callback
                    //en funcion date se definio que al callback se le va a pasar como parametro la variable date

//la ejecuon seria:
// function date(printTDate) {
//     console.log(new Date);  
//     setTimeout(() => {
//         let date = new Date;    
//         printTDate(date);         
//     }, 3000);
// }