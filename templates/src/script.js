document.addEventListener('DOMContentLoaded', function() {
    const fechaAcceso = new Date();
    
    // Formatear datos
    const datos = {
        fecha: fechaAcceso.toISOString().split('T')[0],
        hora: fechaAcceso.toTimeString().split(' ')[0],
        dia_semana: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'][fechaAcceso.getDay()],
        timestamp: fechaAcceso.getTime()
    };

    // Configurar petición
    fetch('http://localhost:5000/registrar-acceso', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});