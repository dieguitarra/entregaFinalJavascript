//Primer botón (Usuario)
let botonUsuario = document.getElementById("botonUsuario");
let boton = document.getElementById("botonIngresar");
let mensajeUsuario = document.getElementById("mensajeUsuario");
boton.addEventListener("click", function (e) {
  e.preventDefault();
  if (botonUsuario.value === "") {
    document.getElementById("mensajeUsuario").innerHTML =
      "Los campos están vacíos";
  } else {
    document.getElementById("mensajeUsuario").innerHTML =
      "Bienvenido " + botonUsuario.value + "!";
  }
});

//Segundo botón (Datos)
class Alumno {
  constructor(nombre, dni, edad, fecha) {
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.fecha = fecha;
    this.datos = function () {
      console.log("El nombre es: " + this.nombre);
      console.log("El dni es: " + this.dni);
      console.log("La edad: " + this.edad);
      console.log("La fecha de nacimiento es: " + this.fecha);
    };
  }
}
let alumnos = [];
let boton2 = document.getElementById("cargarAlumnoId");
boton2.addEventListener("click", function cargarAlumno(e) {
  e.preventDefault();
  let alumno = new Alumno("Pedro", 33345655, 16, "15/06/2008");
  console.log("Los datos ingresados serán nombre ej. " + alumno.nombre);
  console.log("Los datos ingresados serán dni ej." + alumno.dni);
  console.log("Los datos ingresados serán edad ej." + alumno.edad);
  console.log("Los datos ingresados serán fecha ej." + alumno.fecha);
  console.log("El alumno ingresará sus datos personales");
  let nombreAlumno = document.getElementById("nombreAlumno").value;
  let dniAlumno = document.getElementById("dniAlumno").value;
  let edadAlumno = document.getElementById("edadAlumno").value;
  let fechaAlumno = document.getElementById("fechaAlumno").value;
  let alumnoData = new Alumno(nombreAlumno, dniAlumno, edadAlumno, fechaAlumno);
  console.log(alumnoData);
  alumnoData.datos();
  if (nombreAlumno + dniAlumno + edadAlumno + fechaAlumno === "") {
    document.getElementById("mensajeUsuario2").innerHTML =
      "Los campos están vacíos";
  } else {
    document.getElementById("mensajeUsuario2").innerHTML =
      "Los datos fueron enviados correctamente";
  }
});

//Tercer botón (Talleres)
$("#botonSlideToggleTalleres").click(function () {
  $("#ocultarMostrarTalleres").slideToggle(2000);
});
boton3 = document.getElementById("capturar");
boton3.addEventListener("click", function capturar(e) {
  e.preventDefault();
  function tallerHorario(taller, horario) {
    this.taller = taller;
    this.horario = horario;
  }
  let valor = document.getElementById("taller").value;
  let valor2 = document.getElementById("horario").value;
  nuevoTaller = new tallerHorario(taller, horario);
  agregarLista();
});
let listaTalleres = [];
if (localStorage.getItem("talleres")) {
  let talleresStorage = JSON.parse(localStorage.getItem("talleres"));
  console.log(talleresStorage);
  for (let taller of talleresStorage) {
    listaTalleres.push(taller);
    document.getElementById("listaTaller").innerHTML +=
      "<li>" + taller.nombre + ": " + taller.horario + "</li>";
  }
  console.log(listaTalleres);
} else {
  console.log("no se encontro nada cargado");
}
function agregarLista() {
  let nombreTaller = document.getElementById("taller").value;
  let horarioTaller = document.getElementById("horario").value;
  let datosTaller = { nombre: nombreTaller, horario: horarioTaller };
  console.log(datosTaller);
  listaTalleres.push(datosTaller);
  console.log(listaTalleres);
  document.getElementById("listaTaller").innerHTML +=
    "<li>" + datosTaller.nombre + " " + datosTaller.horario + "</li>";
  localStorage.setItem("talleres", JSON.stringify(listaTalleres));
}
boton3bis = document.getElementById("borrarTalleres");
boton3bis.addEventListener("click", function borrarTalleres() {
  let lista = document.getElementById("listaTaller");
  lista.removeChild(lista.lastChild);
});
boton3Submit = document.getElementById("boton3Enviar");
boton3Submit.addEventListener("click", function () {
  if (taller.value + horario.value === "") {
    document.getElementById("mensajeTalleres").innerHTML =
      "Los campos están vacíos";
  } else {
    document.getElementById("mensajeTalleres").innerHTML =
      "Sus datos fueron enviados correctamente";
  }
});

//Cuarto botón (Primer cuatrimestre)
let boton4 = document.getElementById("calificacionesId");
boton4.addEventListener("click", function calificaciones(e) {
  e.preventDefault();
  let sumaTotal = 0;
  let cantidadCalificaciones = 6;
  for (let i = 1; i <= 6; i++) {
    let calificacionIngresada = parseInt(
      prompt("ingrese sus calificacion nº: " + i)
    );
    sumaTotal = sumaTotal + calificacionIngresada;
  }
  let resultadoFinal = sumaTotal / cantidadCalificaciones;
  if (resultadoFinal >= 7) {
    //swal es sweetalert (un alert más cool)
    swal("Tu calificación es " + resultadoFinal + " ,estás aprobado", {
      icon: "success",
    });
  } else if (resultadoFinal >= 4) {
    swal(
      "Tu calificación es " + resultadoFinal + " ,tenés que esforzarte más",
      { icon: "warning" }
    );
  } else {
    swal(
      "Tu calificación es " +
        resultadoFinal +
        " ,lamentablemente tenés que recursar",
      { icon: "error" }
    );
  }
});

//Quinto botón (Calificaciones anuales)
let boton5 = document.getElementById("notasId");
boton5.addEventListener("click", function notas(e) {
  e.preventDefault();
  let notas = [];
  let calificacionNotas;
  for (let i = 0; i < 10; i++) {
    calificacionNotas = prompt("ingrese todas sus calificaciones");
    notas.push(calificacionNotas);
  }
  notas.sort((a, b) => {
    return a - b;
  });
  swal("Tus notas son " + notas);
});
//Sexto botón (Materias a marzo)
let boton6 = document.getElementById("materiasId");
boton6.addEventListener("click", function materias() {
  let valor = document.getElementById("listaMaterias");
  let lista = document.getElementById("listaMateriasMarzo");
  let nuevaLi = document.createElement("li");
  nuevaLi.innerHTML = `${valor.value}`;
  nuevaLi.style.color = "red";
  lista.appendChild(nuevaLi);
});
let boton6Bis = document.getElementById("borrarMateriasId");
boton6Bis.addEventListener("click", function borrarMaterias() {
  let lista = document.getElementById("listaMateriasMarzo");
  lista.removeChild(lista.lastChild);
});
let boton6Submit = document.getElementById("boton6Enviar");
boton6Submit.addEventListener("click", function () {
  if (listaMaterias.value === "") {
    document.getElementById("mensajeMarzo").innerHTML =
      "Los campos están vacíos";
  } else {
    document.getElementById("mensajeMarzo").innerHTML =
      "Sus datos fueron enviados correctamente";
  }
});

boton.addEventListener("click", function (e) {
  e.preventDefault();
  if (botonUsuario.value === "") {
    document.getElementById("mensajeUsuario").innerHTML =
      "Los campos están vacíos";
  } else {
    document.getElementById("mensajeUsuario").innerHTML =
      "Bienvenido " + botonUsuario.value + "!";
  }
});

//Séptimo botón (Previas)
$("#boton7").click(function (e) {
  e.preventDefault();
  let valor = $("#input").val();
  //console.log(valor)
  $("#listaUl").append(`<li>${valor}</li>`);
});
$("#boton7Bis").click(function (e) {
  e.preventDefault();
  $("#listaUl").empty();
});
$("#botonSubmitBtn7").click(function () {
  if ($("#input").val() === "") {
    $(".divPrevias").html("Los campos están vacíos");
  } else {
    $(".divPrevias").html("Sus datos fueron enviados correctamente");
  }
});

//Octavo botón (Instrumento complementario)
$("#boton8").on("change", function (e) {
  console.log(e.target.value);
  $("#botonSubmitBtn8").click(function () {
    $(".divInstrumentoCompl").html(
      "Usted eligió " +
        e.target.value +
        ". Sus datos fueron enviados correctamente"
    );
  });
});

//Noveno botón (Sugerencias)
$("#botonSlideToggle").click(function () {
  $(".formularioCaer").slideToggle(2000);
});
$(".sugerencia1").on("keyup", function () {
  let sug1 = $(this).val();
  $("#sugerencia1").html("-" + sug1);
});
$(".sugerencia2").on("keyup", function () {
  let sug2 = $(this).val();
  $("#sugerencia2").html("-" + sug2);
});
$(".sugerencia3").on("keyup", function () {
  let sug3 = $(this).val();
  $("#sugerencia3").html("-" + sug3);
});
$("#botonSubmitBtn9").click(function () {
  if (
    $(".sugerencia1").val() +
      $(".sugerencia2").val() +
      $(".sugerencia3").val() ===
    ""
  ) {
    $(".divSugerencias").html("Los campos están vacíos");
  } else {
    $(".divSugerencias").html("Sus datos fueron enviados correctamente");
  }
});

//Décimo botón (Geoloaction + clima)
let ubicacion = navigator.geolocation.getCurrentPosition(mostrarUbicacion);
function mostrarUbicacion(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let urlClima =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=671a26ae4d9245e0bb2ce30710bdd1e1";
  $("#botonClima").click(function (e) {
    e.preventDefault();
    $.get(urlClima, function (respuesta) {
      console.log(respuesta.weather[0].description);
      let contenido = `<div>
      <h2>${respuesta.name}</h2>
      
      <p>Clima: ${respuesta.weather[0].description}</p>                      
      <p>Temp max: ${respuesta.main.temp_max}</p>
      <p>Temp min: ${respuesta.main.temp_min}</p>
      </div>
      `;
      $(".cardClima").html(contenido);
    });
  });
}

//Botón ScrollTop
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#botonFlecha").fadeIn();
    } else {
      $("#botonFlecha").fadeOut();
    }
  });
  $("#botonFlecha").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 400);
  });
});
