
let encriptar = document.getElementById('encriptar');

let desencriptar = document.getElementById('desencriptar');

let resultado = document.getElementById('resultado');

let copiar = document.getElementById('copiar');

let imagen = document.getElementById('imagen');

let advertencia1 = document.getElementById('advertencia1');

let advertencia2 = document.getElementById('advertencia2');

let encriptador = (entrada, inicial, final) => entrada.replaceAll(inicial, final);

let lista1 = ["a", "e", "i", "o", "u"];

let lista2 = ["ai", "enter", "imes", "ober", "ufat"];

encriptar.addEventListener('click', function(event) {
    event.preventDefault();
    encripta();
    display();
    clear();
})

desencriptar.addEventListener('click', function(event) {
    event.preventDefault();
    desencripta();
    display();
    clear();
})

copiar.addEventListener('click', function(event) {
    event.preventDefault();
    copia();
    display();
})
 
display();


 function display (){
    if(resultado.textContent == '') {

        copiar.style.display = "none";
        resultado.style.display = "none";
        advertencia1.style.display = "";
        advertencia2.style.display = "";
        imagen.style.display = "";
     } else {
        
        resultado.style.display = "";
        copiar.style.display = "";
        imagen.style.display = "none";
        advertencia1.style.display = "none";
        advertencia2.style.display = "none";
        
     }  
 }

function clear() {
    document.getElementById("entrada").value = '';
}

function check() {

    let input = document.getElementById("entrada").value;

    input = input.replace(/[^a-z\n\s]/g, "");

    document.getElementById('entrada').value = input;

}

function encripta() {
  
    let input = document.getElementById('entrada').value;

    var nuevaStr = input.split('').map((caracter) => { 
  
        var value = caracter;
   
        for(let i = 0; i < lista1.length; i++) {

         if(value == lista1[i]) {
   
          value = value.replace(lista1[i], lista2[i]);
         
         }
        }

        return value
   
      }).join('');

     resultado.textContent = nuevaStr;
   
}

function desencripta() {

    let input = document.getElementById('entrada').value;

    var nuevaStr = input;

   for(let i = 0; i < lista1.length; i++) {

       nuevaStr = encriptador(nuevaStr, lista2[i], lista1[i]);     
   }

  resultado.textContent = nuevaStr;

}

function copia() {
      
    var areaTexto = document.createElement('textarea');

    areaTexto.value = resultado.textContent;

    document.body.appendChild(areaTexto);

    areaTexto.select();

    document.execCommand('copy');

    document.body.removeChild(areaTexto);

}

