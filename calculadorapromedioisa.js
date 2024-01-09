//variables
let nombreAlumno = "";
let nota1 = 0;
let nota2 = 0;
let nota3 = 0;

// Solicitud del nombre del alumno
console.log("Ingrese el nombre del alumno: ");
nombreAlumno = prompt();

// Solicitud de las tres notas
console.log("Ingrese la primera nota: ");
nota1 = Number(prompt());
console.log("Ingrese la segunda nota: ");
nota2 = Number(prompt());
console.log("Ingrese la tercera nota: ");
nota3 = Number(prompt());

// Validación de que las notas se encuentren dentro del rango válido
if (nota1 < 0 || nota1 > 10) {
  console.log("La nota 1 debe estar entre 0 y 10.");
  return;
}
if (nota2 < 0 || nota2 > 10) {
  console.log("La nota 2 debe estar entre 0 y 10.");
  return;
}
if (nota3 < 0 || nota3 > 10) {
  console.log("La nota 3 debe estar entre 0 y 10.");
  return;
}

// Cálculo el promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// Mensaje correspondiente
if (promedio >= 7) {
  console.log(`${nombreAlumno}, ¡felicidades! Has aprobado con un promedio de ${promedio}.`);
} else {
  console.log(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio}.`);
}
