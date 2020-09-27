

var formitm = document.getElementById("formAgregar");
var list = document.getElementById("items")
console.log(formitm)
console.log(list)



formitm.addEventListener("submit", formAgregar)
function formAgregar(e){
    e.preventDefault()
    let captura = document.getElementById("item");
    let valoresCaptura= captura.value;
    console.log(valoresCaptura)

    let li = document.createElement("li");
    li.className="list-group-item"
    li.appendChild(document.createTextNode(valoresCaptura))
    console.log(li)

    //Estamos  dando las ordenes de crear un elemento tipo botón
    let button = document.createElement("button")

    //Aquí le asignamos una clase , para que pueda adoptar las propiedades Css
    button.className="btn btn-danger btn-sm float-right eliminar"

    //Le asignamos que debe de tener uno node de tipo texto dentro con el valor de "X"
    button.appendChild(document.createTextNode("X"))
    
    //Incluimos el botón dentro del elemento li
    li.appendChild(button)
    console.log(button)
    //Agregamos el elemento li como un hijo más de la Lista 
    list.appendChild(li)

}
    
//eliminar elementos de  una lista

list.addEventListener("click", deleteList)
function deleteList(e){


    
    if(e.target.classList.contains("eliminar")){
        if(confirm("Seguros que quieres eliminar este elemento?"))
        { let NodoPadre = e.target.parentElement;  
            console.log(NodoPadre);
            list.removeChild(NodoPadre);

        }
    }
}

