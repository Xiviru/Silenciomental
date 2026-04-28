// La variable 'quotes' con 1000 frases ahora se carga desde quotes.js

// --- Lógica de Fecha ---
function getDaysSinceEpoch(date) {
    // Usamos el 1 de Enero de 2024 como punto de partida (Epoch)
    const epoch = new Date(2024, 0, 1);
    const diff = date - epoch + (epoch.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}


// --- Generador de Fondo Místico Dinámico ---
function generateMysticalBackground(dayIndex) {
    // Usamos un índice que puede llegar a miles sin repetirse fácilmente
    // Aseguramos 1000 combinaciones usando dayIndex % 1000
    const index = Math.abs(dayIndex) % 1000;
    
    // Generamos tonos usando números primos para evitar repeticiones prontas
    const baseHue = (index * 137) % 360; 
    const secHue = (baseHue + 45 + (index % 30)) % 360;    
    const darkHue = (baseHue + 200 + (index % 50)) % 360;   

    // Gradiente complejo radial
    const bg = `
        radial-gradient(circle at 20% 30%, hsl(${baseHue}, 70%, 15%) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, hsl(${secHue}, 60%, 15%) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, hsl(${darkHue}, 80%, 5%) 0%, hsl(${darkHue}, 90%, 2%) 100%)
    `;
    
    return bg;
}

// --- Actualización de la Interfaz ---
function updateDailyContent() {
    const now = new Date();
    const daysSinceEpoch = getDaysSinceEpoch(now);
    

    // 2. Seleccionar y actualizar Frase
    // Usamos el índice de días para iterar sobre las 1000 frases (o las que haya)
    const quoteIndex = Math.abs(daysSinceEpoch) % quotes.length;
    const dailyQuote = quotes[quoteIndex];
    
    document.getElementById('quote-text').textContent = dailyQuote.text;
    document.getElementById('quote-author').textContent = dailyQuote.author;
    
    // 3. Aplicar Fondo Místico
    const mysticBg = generateMysticalBackground(daysSinceEpoch);
    document.body.style.background = mysticBg;
    
    // 4. Programar recarga a medianoche
    scheduleMidnightRefresh();
}

function scheduleMidnightRefresh() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Próxima medianoche
    
    const timeUntilMidnight = midnight.getTime() - now.getTime();
    
    // Limpiar timeout anterior si existe (buena práctica)
    if (window.midnightTimeout) {
        clearTimeout(window.midnightTimeout);
    }
    
    window.midnightTimeout = setTimeout(() => {
        updateDailyContent(); // Actualizar sin recargar la página entera
    }, timeUntilMidnight + 1000); // 1 segundo después de medianoche para asegurar el cambio de día
}

// --- Generación de Estrellas (Estético) ---
function createStars(containerId, count) {
    const container = document.getElementById(containerId);
    let shadowParams = [];
    
    for(let i=0; i<count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadowParams.push(`${x}px ${y}px #FFF`);
    }
    
    // Aplicamos estilos directamente vía CSSOM para no ensuciar el HTML
    const style = document.createElement('style');
    style.innerHTML = `
        #${containerId} {
            width: 1px;
            height: 1px;
            background: transparent;
            box-shadow: ${shadowParams.join(', ')};
            animation: animStar ${containerId === 'stars' ? 50 : containerId === 'stars2' ? 100 : 150}s linear infinite;
        }
        @keyframes animStar {
            from { transform: translateY(0px); }
            to { transform: translateY(-2000px); }
        }
    `;
    document.head.appendChild(style);
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar estrellas para el fondo
    createStars('stars', 700);
    createStars('stars2', 200);
    createStars('stars3', 100);
    
    // Cargar contenido del día
    updateDailyContent();
});
