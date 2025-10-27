// Asegúrate de que tu backend (Django) esté corriendo en http://localhost:8000
const API_URL = 'http://localhost:8000/api/signup/';

async function handleSignup() {
    const username = document.getElementById('id_username').value;
    const password = document.getElementById('id_password1').value;
    const password2 = document.getElementById('id_password2').value;
    const messageElement = document.getElementById('message');

    // 1. Validar las contraseñas en el frontend (buena práctica)
    if (password !== password2) {
        messageElement.textContent = 'Error: Las contraseñas no coinciden.';
        return;
    }
    
    try {
        // 2. Enviar la solicitud POST a la API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // CORS_ALLOW_CREDENTIALS: True en Django maneja el origen,
                // pero no necesitamos headers especiales aquí aparte del Content-Type
            },
            // ¡IMPORTANTE! El cuerpo se envía como una cadena JSON
            body: JSON.stringify({ 
                username: username,
                password: password,
                password2: password2
            })
        });

        // 3. Procesar la respuesta
        const data = await response.json();

        if (response.ok) {
            // Registro exitoso (Status 201 Created)
            messageElement.textContent = `Registro exitoso para ${data.username}!`;
            
            // **PASO CRUCIAL:** Almacenar el token para futuras peticiones
            localStorage.setItem('authToken', data.token);
            
            // Redirigir al usuario a la página de productos o dashboard
            // window.location.href = '/products'; 
        } else {
            // Error en el registro (Status 400 Bad Request, etc.)
            // El mensaje de error viene del JSON que retorna tu Django API
            const errorMsg = data.error || 'Error desconocido al registrar.';
            messageElement.textContent = `Error al registrar: ${errorMsg}`;
        }
    } catch (error) {
        messageElement.textContent = 'Error de conexión con el servidor.';
        console.error('Fetch error:', error);
    }
}


