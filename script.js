// Asegurarnos de que el DOM esté completamente cargado antes de ejecutar scripts
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página inicializada correctamente.");

    // Seleccionamos todas las tarjetas
    const cards = document.querySelectorAll('.card');

    // Añadimos interactividad a cada tarjeta
    cards.forEach(card => {
        card.addEventListener('click', (evento) => {
            // Obtenemos el título de la tarjeta seleccionada
            const tituloTarjeta = card.querySelector('.card-tab').textContent;
            
            // Registramos en consola (útil para debuggeo o futuras analíticas)
            console.log(`Navegando a la sección: ${tituloTarjeta}`);
            
            // Nota: El navegador seguirá el enlace (href) de forma natural
            // Si quisieras hacer una transición de salida con JS antes de ir a 
            // la otra instancia, usarías evento.preventDefault() aquí.
        });
    });
});