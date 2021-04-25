var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`); //la variable es el parametro que le estamos pasando a la funcion
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //saca un elemento del carray cada que se cumpla un loop
    saludarEstudiantes(estudiante);
}
