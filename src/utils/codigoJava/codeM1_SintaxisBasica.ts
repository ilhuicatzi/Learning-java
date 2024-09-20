export const declaracion_Variables = `public class DeclaracionVariables {
    public static void main(String[] args) {
        // Declaración de variables
        int numeroEntero = 10;
        double numeroDecimal = 5.75;
        boolean esVerdadero = true;
        char caracter = 'A';
        String cadena = "Hola Mundo";
        
        // Imprimir valores
        System.out.println("Número entero: " + numeroEntero);
        System.out.println("Número decimal: " + numeroDecimal);
        System.out.println("Booleano: " + esVerdadero);
        System.out.println("Carácter: " + caracter);
        System.out.println("Cadena: " + cadena);
    }
}`;

export const declaracion_Variables_salida = `Número entero: 10
Número decimal: 5.75
Booleano: true
Carácter: A
Cadena: Hola Mundo`;


export const operadores_Aritmeticos = `public class OperadoresAritmeticos {
    public static void main(String[] args) {
        // Declaración de variables
        int numero1 = 10;
        int numero2 = 5;
        
        // Operadores aritméticos
        int suma = numero1 + numero2;
        int resta = numero1 - numero2;
        int multiplicacion = numero1 * numero2;
        int division = numero1 / numero2;
        int modulo = numero1 % numero2;
        
        // Imprimir resultados
        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        System.out.println("División: " + division);
        System.out.println("Módulo: " + modulo);
    }
}`;

export const operadores_Aritmeticos_salida = `Suma: 15
Resta: 5
Multiplicación: 50
División: 2
Módulo: 0`;

export const operadores_Comparacion = `public class OperadoresComparacion {
    public static void main(String[] args) {
        // Declaración de variables
        int numero1 = 10;
        int numero2 = 5;
        
        // Operadores de comparación
        boolean igual = numero1 == numero2;
        boolean diferente = numero1 != numero2;
        boolean mayorQue = numero1 > numero2;
        boolean menorQue = numero1 < numero2;
        boolean mayorIgual = numero1 >= numero2;
        boolean menorIgual = numero1 <= numero2;
        
        // Imprimir resultados
        System.out.println("Igual: " + igual);
        System.out.println("Diferente: " + diferente);
        System.out.println("Mayor que: " + mayorQue);
        System.out.println("Menor que: " + menorQue);
        System.out.println("Mayor o igual: " + mayorIgual);
        System.out.println("Menor o igual: " + menorIgual);
    }
}`;

export const operadores_Comparacion_salida = `Igual: false
Diferente:  true
Mayor que: true
Menor que: false
Mayor o igual: true
Menor o igual: false`;


export const operadores_Logicos = `public class OperadoresLogicos {
    public static void main(String[] args) {
        // Declaración de variables
        boolean a = true;
        boolean b = false;
        
        // Operadores lógicos
        boolean and = a && b;
        boolean or = a || b;
        boolean not = !a;
        
        // Imprimir resultados
        System.out.println("AND: " + and);
        System.out.println("OR: " + or);
        System.out.println("NOT: " + not);
    }
}`;

export const operadores_Logicos_salida = `AND: false
OR: true
NOT: false`;

export const estructuras_Control = `public class EstructurasControl {
    public static void main(String[] args) {
        // Declaración de variables
        int numero = 10;
        
        // Estructura condicional if
        if (numero > 0) {
            System.out.println("El número es positivo");
        } else if (numero < 0) {
            System.out.println("El número es negativo");
        } else {
            System.out.println("El número es cero");
        }
        
        // Estructura repetitiva for
        for (int i = 1; i <= 3; i++) {
            System.out.println("IteraciónFor " + i);
        }
        
        // Estructura repetitiva while
        int j = 1;
        while (j <= 2) {
            System.out.println("IteraciónWhile " + j);
            j++;
        }
    }
}`;

export const estructuras_Control_salida = `El número es positivo
IteraciónFor 1
IteraciónFor 2
IteraciónFor 3
IteraciónWhile 1
IteraciónWhile 2`;


export const metodos_parametros = `public class MetodosParametros {
    // Método con parámetros
    public static void saludar(String nombre) {
        System.out.println("Hola, " + nombre + "!");
    }
    
    public static void main(String[] args) {
        // Llamada al método con argumento
        saludar("Mundo");
    }
}`;

export const metodos_parametros_salida = `Hola, Mundo!`;

export const metodos_retorno = `public class MetodosRetorno {
    // Método con retorno
    public static int sumar(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        // Llamada al método con retorno
        int resultado = sumar(5, 3);
        System.out.println("La suma es: " + resultado);
    }
}`;

export const metodos_retorno_salida = `La suma es: 8`;


