/**
 * Contexto:
 * Debes programar la lógica JavaScript para un sistema de matriculación de alumnos, aplicando bonificaciones de nota según el turno elegido y validando la aceptación legal.
 * Requisitos obligatorios que debe cumplir tu script:
 * 1. Persistencia de múltiples datos (window.onload y localStorage):
 * - Al cargar la página, recupera dos valores de localStorage: el total_alumnos (contador) y la nota_maxima histórica.
 * - Si no existen, inicialízalos a 0. Muestra ambos en el párrafo de "Estadísticas Globales".
 * 2. Validación Booleana (Checkbox):
 * - Comprueba si el checkbox de "Términos y condiciones" (id="terminos") está marcado (pista: usa la propiedad .checked).
 * - Si es false, muestra un mensaje de error: "Debes aceptar los términos y condiciones para continuar" y detén la ejecución.
 * 3. Validación de Textos (Objeto String):
 * - El nombre completo debe tener al menos 3 caracteres y no estar vacío.
 * - Al guardarlo, conviértelo a MAYÚSCULAS y aplícale .trim() para limpiar espacios accidentales.
 * 4. Control de Fechas (Objeto Date):
 * - Calcula la edad exacta del alumno basándote en su fecha de nacimiento y el día de hoy (teniendo en cuenta meses y días).
 * - Si la edad es menor de 0 (fecha futura), lanza un error.
 * 5. Lógica Matemática y Condicionales (Radio Buttons y Objeto Math / Number):
 * - Lee la "Nota de Acceso". Si está vacía, no es un número (isNaN) o no está entre 0 y 10, muestra un error.
 * - Modificador por Turno: Comprueba qué Radio Button está seleccionado. Si el alumno ha elegido el turno de Tarde (id="turnoTarde" está .checked), aplícale una bonificación de +0.5 puntos a su nota. (Importante: la nota final nunca puede superar el 10.00). Si es de Mañana, la nota se queda igual.
 * - Genera un ID aleatorio de 4 cifras (entre 1000 y 9999).
 * - La nota final debe redondearse estrictamente a 2 decimales para mostrarse en la tabla.
 * 6. Manipulación de la Tabla (DOM Clásico):
 * - Usando insertRow(-1) e insertCell(), añade al final de la tabla una fila con: ID, Nombre (mayúsculas), Edad y Nota Final.
 * 7. Actualización de Estadísticas:
 * - Incrementa el total de registros en 1.
 * - Compara la "Nota Final" de este alumno con la nota_maxima global. Si es mayor, actualiza el récord.
 * - Guarda ambos datos actualizados en localStorage, actualiza el texto en pantalla y vacía el formulario (.reset()).*/