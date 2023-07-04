let peticion = new XMLHttpRequest()

peticion.open('get', 'http://localhost:56989/persona', true)

peticion.addEventListener('load', ()=>{
    if(peticion.status === 200){
        var respuesta = JSON.parse(peticion.response)

        let tabla = document.getElementById('tablaPersonas')

        for (let i = 0; i<respuesta.length; i++){
            let fila = '<tr>' +
                        '<td>'+respuesta[i].nombre+' '+respuesta[i].apellido+'</td>' + 
                        '<td>'+respuesta[i].fechaNacimiento+'</td>' +
                        '</tr>' 
            
            tabla.innerHTML += fila
        }
    }
})

peticion.send()