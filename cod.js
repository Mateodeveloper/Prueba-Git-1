function saludar(){
  var nombre = document.getElementById("idNombre").value;
  var edad = document.getElementById("idEdad").value;

  document.getElementById("idSaludo").value = nombre + " " + edad;
}