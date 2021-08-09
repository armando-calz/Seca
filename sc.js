swal("importante","www.seca.com quiere acceder a su ubicación, ¿desea permitir?","warning",{buttons:["no","si"]});
//alert("www.seca.com quiere acceder a su ubicación, ¿desea permitir?")
var usuario = document.getElementById("textoUsuario").value;
//var contraseña = document.getElementById("textoContraseña").value;
//var passw = parseInt(contraseña.value);
//var validPasswords = [19, 20, 21]
//validPasswords.includes(contraseña)
function FunIniciar()
{
  var contraseña = document.getElementById("textoContraseña").value;
  var validPasswords = "19"
  console.log(contraseña);
  console.log(validPasswords);
  if(validPasswords == contraseña)
  {
    window.open("https://www.google.com.mx/maps/search/servicios/@19.531244,-99.266656,13.36z");
    //swal("Bienvenido Acalzada","")
  }

  else
  {
    swal("La cotraseña es incorrecta","","error");
  }
}
