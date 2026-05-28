let boton = document.querySelectorAll(".navbar-nav a");
let contatc = document.querySelector("#contacto");
let info = document.querySelector("#info");
let preview = document.querySelector("#preview");
let bases = document.querySelector("#bases");
let pie = document.querySelector("#pie");



for (const element of boton){
    element.addEventListener("click",cambioVendido);
}

function cambioVendido(e){

    if(e.target.getAttribute("data-posicion")=="1"){
        contatc.classList.add("collapse");
        info.classList.remove("collapse");
        preview.classList.add("collapse");
        bases.classList.add("collapse");
        pie.classList.remove("fijo");
    }
    else if(e.target.getAttribute("data-posicion")=="3"){
        contatc.classList.remove("collapse");
        info.classList.add("collapse");
        preview.classList.add("collapse");
        bases.classList.add("collapse");
        pie.classList.add("fijo");
        
    }
    else if(e.target.getAttribute("data-posicion")=="2"){
        contatc.classList.add("collapse");
        info.classList.add("collapse");
        preview.classList.remove("collapse");
        bases.classList.add("collapse");
        pie.classList.remove("fijo");
    }
    else{
        contatc.classList.add("collapse");
        info.classList.add("collapse");
        preview.classList.add("collapse");
        bases.classList.remove("collapse");
        pie.classList.add("fijo");
    }
}
