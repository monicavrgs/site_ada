document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario (){
  if (document.getElementById("nome").value != "" && document.getelEmentById ("email").value != ""){
    alert ("Prontinho! Você receberá as novidades por email!")
  }else{
    alert ("Por favor, preencha os campos nome e email!")
  }

}
