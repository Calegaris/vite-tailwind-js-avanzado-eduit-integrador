import './style.css'


/* Dada una cantidad de alumnos que puede variar, que no se sabe cuantos van a ser, calcular el promedio sin saber la cantidad de notas que tiene cada alumno. Al final de la aplicacion vamos a mostrar los promedios */


// que informacion tenemos 
// notas -> 0 a 10
// guardar las notas de ese alumno
// guardar la suma de esas notas
// guardar la cantidad de notas del alumno
// Sacar el promedio (sumar / cantidad-notas )
let alumnos = []

console.log('Bienvenido');
//Aunque sea una vez
do {
  let sumaPromedio = 0
  let cantidad = 0
  let notas = []


  console.log('Ingrese el nombre de un alumno: ');

  let nombre = prompt('Ingrese el nombre del alumno: ')
  console.log(nombre);

  do {

    let nota = prompt(`Ingrese las notas del alumno ${nombre}, para terminar presione la tecla f`)

    console.log(nota);


    if (nota === 'f') {
      console.log('Ingreso f');
      break //detiene y sale del while
    }

    if (nota >= 0 && nota <= 10 && nota != '' && nota != null && !isNaN(parseInt(nota))) {

      let notaNumero = parseInt(nota)
      sumaPromedio = sumaPromedio + parseInt(nota)
      notas.push(notaNumero)
      console.log(sumaPromedio);
      cantidad++
      console.log(cantidad);

    } else {
      alert(`la nota ${nota} no es valida`)
    }



    console.log('Siguiente nota...');

  } while (true);

  /*   console.log(nombre);
    console.log(sumaPromedio);
    console.log(cantidad);
    console.log(notas); */

  const alumno = {
    nombre_alumno: nombre,
    sumaria_notas: sumaPromedio,
    cantidad_notas: cantidad,
    todas_las_notas: notas,
    promedio: sumaPromedio / cantidad
  }
  console.log(alumno);
  alumnos.push(alumno)



} while (confirm('Desea calcular el promedio de otro alumno?'));


console.log(alumnos);

let sumatoriaPromedio = 0

alumnos.forEach(alumno => {
  sumatoriaPromedio += alumno.promedio
})

let promediosTotal = sumatoriaPromedio / alumnos.length

console.log(promediosTotal);

console.log('Fin');