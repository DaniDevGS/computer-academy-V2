document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector(".dark-mode");
            
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode-active");
                
                // Guardar preferencia en localStorage
        if(document.body.classList.contains("dark-mode-active")) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
            
            // Verificar preferencia guardada al cargar la página
    if(localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add("dark-mode-active");
    }
});