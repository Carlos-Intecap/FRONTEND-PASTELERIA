document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    const form = document.getElementById('passwordForm');

    toggleButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleButton.textContent = 'Ocultar';
        } else {
            passwordInput.type = 'password';
            toggleButton.textContent = 'Mostrar';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado con la contraseña: ' + passwordInput.value);
        // Aquí puedes agregar tu lógica para enviar el formulario
    });
});