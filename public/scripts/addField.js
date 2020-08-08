// Procurar o botão e clicar
document.querySelector("#add-time")
.addEventListener("click",cloneField)

//Executar uma ação
function cloneField(){
  //Duplicar os campos. Que campos?
const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
//pegar os campos. Que campos?
const fields = newFieldContainer.querySelectorAll("input")

//para cada campo
fields.forEach(function(field) {
   field.value =""
})

  //Colocar na página: onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

