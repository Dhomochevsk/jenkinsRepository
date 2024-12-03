// Obtener referencia al campo de texto de la pantalla
const display = document.getElementById('display');

// Función para agregar números o símbolos al display
function agregarNumero(valor) {
    display.value += valor; // Concatenar el valor en el display
}

// Función para borrar el contenido del display
function clearDisplay() {
    display.value = ''; // Limpiar el contenido del display
}

// Función para calcular el resultado
function calcular() {
    try {
        // Validar que el display no esté vacío antes de calcular
        if (display.value.trim() === '') {
            display.value = '0';
            return;
        }
        // Evaluar la expresión matemática ingresada
        const resultado = eval(display.value);
        // Mostrar el resultado en el display
        display.value = resultado;
    } catch (error) {
        // Mostrar un mensaje de error si la expresión no es válida
        display.value = 'Error';
    }
}

// Función para realizar las pruebas
function pruebasCalculadora() {
    // Prueba de suma
    display.value = '2+3';
    calcular();
    console.assert(display.value === '5', 'Error en suma 2 + 3');

    // Prueba de resta
    display.value = '5-3';
    calcular();
    console.assert(display.value === '2', 'Error en resta 5 - 3');

    // Prueba de multiplicación
    display.value = '2*3';
    calcular();
    console.assert(display.value === '6', 'Error en multiplicación 2 * 3');

    // Prueba de división
    display.value = '6/3';
    calcular();
    console.assert(display.value === '2', 'Error en división 6 / 3');

    // Prueba de error (expresión inválida)
    display.value = '2//3';
    calcular();
    console.assert(display.value === 'Error', 'Error en manejo de expresión inválida');
}

// Llamada a la función de pruebas
pruebasCalculadora();
