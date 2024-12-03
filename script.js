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
    // Simulamos la entrada de la operación 2 + 3
    clearDisplay();
    agregarNumero('2');
    agregarNumero('+');
    agregarNumero('3');
    calcular();

    // Verificamos si el resultado es '5'
    console.assert(display.value === '5', 'Error en suma 2 + 3');
    console.log('Prueba de suma completada');
    
    // Puedes agregar más pruebas aquí, si lo deseas
}

// Llamamos a la función para ejecutar las pruebas cuando cargue la página
pruebasCalculadora();
