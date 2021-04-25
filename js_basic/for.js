var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var i = 0; i < estudiantes.length; i++){
  // console.log(estudiantes[i]);
  saludarEstudiantes(estudiantes[i]);
}

for(var estudiante of estudiantes){//singular of plural
    saludarEstudiantes(estudiante);
}