
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()

    let materia1 = parseInt(document.getElementById('materia1').value)
    let materia2 = parseInt(document.getElementById('materia2').value)
    let materia3 = parseInt(document.getElementById('materia3').value)
    let materia4 = parseInt(document.getElementById('materia4').value)
    let materia5 = parseInt(document.getElementById('materia5').value)
    var promedioTotal = promedio(materia1,materia2,materia3,materia4,materia5) 
    calificacion(promedioTotal)

})
function promedio(pam1,pam2,pam3,pam4,pam5){
    return (pam1+pam2+pam3+pam4+pam5)/5
}

let parrafo = document.getElementById('text')
function calificacion(promedio) {
    let parrafo = document.getElementById('text');
    parrafo.classList.remove('textoInicial');
    parrafo.classList.add('esconder');

    let nuevoParrafo = document.createElement('p');
    let izq = document.getElementById('izquierda');

    if (promedio > 0 && promedio <= 5) {
        nuevoParrafo.innerHTML = "Reprobaste héchale ganas 😵" + promedio;
    } else if (promedio > 5 && promedio <= 8) {
        nuevoParrafo.innerHTML = "Ni bueno ni malo 😼" + promedio;
    } else if (promedio == 9) {
        nuevoParrafo.innerHTML = "Casi perfecto 🙉" + promedio;
    } else if (promedio == 10) {
        nuevoParrafo.innerHTML = "Excelente sigue asi!! 🤗" + promedio;
    }

    izq.appendChild(nuevoParrafo);
}