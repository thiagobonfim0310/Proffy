document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    console.log("aqui")
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(fieldDoMomento =>
        fieldDoMomento.value = ""
    )

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}