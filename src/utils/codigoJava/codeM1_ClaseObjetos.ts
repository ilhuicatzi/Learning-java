export const sintaxis_clase = `// Definición de la clase Persona
public class Persona {
    // Atributos de la clase Persona
    String nombre;
    int edad;

    // Método de la clase Persona
    public void mostrarInfo() {
        System.out.println("Nombre: " + nombre + ", Edad: " + edad);
    }

    // Método main para probar la clase
    public static void main(String[] args) {
        // Creación de un objeto de la clase Persona
        Persona persona1 = new Persona();
        persona1.nombre = "Juan";
        persona1.edad = 25;

        // Uso del método mostrarInfo
        persona1.mostrarInfo();
    }
}
`;

export const sintaxis_clase_salida = `Nombre: Juan, Edad: 25`;

export const sintaxis_constructor = `// Definición de la clase Persona
public class Persona {
    // Atributos de la clase Persona
    String nombre;
    int edad;

    // Constructor de la clase Persona
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método de la clase Persona
    public void mostrarInfo() {
        System.out.println("Nombre: " + nombre + ", Edad: " + edad);
    }

    // Método main para probar la clase
    public static void main(String[] args) {
        // Creación de un objeto de la clase Persona con constructor
        Persona persona1 = new Persona("Juan", 25);

        // Uso del método mostrarInfo
        persona1.mostrarInfo();
    }
}
`;

export const sintaxis_constructor_salida = `Nombre: Juan, Edad: 25`;

export const sintaxis_metodos = `// Definición de la clase Calculadora
public class Calculadora {
    // Método para sumar dos números
    public int sumar(int a, int b) {
        return a + b;
    }

    // Método para restar dos números
    public int restar(int a, int b) {
        return a - b;
    }

    // Método main para probar la clase
    public static void main(String[] args) {
        // Creación de un objeto de la clase Calculadora
        Calculadora calc = new Calculadora();

        // Uso de los métodos sumar y restar
        int resultadoSuma = calc.sumar(5, 3);
        int resultadoResta = calc.restar(5, 3);

        System.out.println("Suma: " + resultadoSuma);
        System.out.println("Resta: " + resultadoResta);
    }
}
`;

export const sintaxis_metodos_salida = `Suma: 8
Resta: 2`;


export const sintaxis_metodos_estaticos = `public class Persona {
    // Atributo estático
    static int contadorPersonas = 0;

    // Atributos de instancia
    String nombre;
    int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
        contadorPersonas++;  // Incrementa el contador cada vez que se crea un objeto
    }

    // Método estático
    public static void mostrarContador() {
        System.out.println("Número de personas creadas: " + contadorPersonas);
    }

    // Método de instancia
    public void mostrarInfo() {
        System.out.println("Nombre: " + nombre + ", Edad: " + edad);
    }

    public static void main(String[] args) {
        // Crear objetos de la clase Persona
        Persona persona1 = new Persona("Ana", 22);
        Persona persona2 = new Persona("Luis", 28);

        // Mostrar información de los objetos
        persona1.mostrarInfo();
        persona2.mostrarInfo();

        // Llamar al método estático para mostrar el contador
        Persona.mostrarContador();
    }
}
`;

export const sintaxis_metodos_estaticos_salida = `Nombre: Ana, Edad: 22
Nombre: Luis, Edad: 28
Número de personas creadas: 2`;


export const sintaxis_sobrecarga = `public class Calculadora {
    // Método para sumar dos enteros
    public int sumar(int a, int b) {
        return a + b;
    }

    // Método sobrecargado para sumar tres enteros
    public int sumar(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        Calculadora calc = new Calculadora();

        // Uso de la sobrecarga de métodos
        System.out.println("Suma de dos números: " + calc.sumar(5, 10));
        System.out.println("Suma de tres números: " + calc.sumar(5, 10, 15));
    }
}
`;

export const sintaxis_sobrecarga_salida = `Suma de dos números: 15
Suma de tres números: 30`;


export const sintaxis_herencia = `// Clase base o superclase
class Animal {
    // Método de la superclase
    public void comer() {
        System.out.println("El animal está comiendo");
    }
}

// Clase derivada o subclase
class Perro extends Animal {
    // Método de la subclase
    public void ladrar() {
        System.out.println("El perro está ladrando");
    }
}

// Clase principal
public class Main {
    public static void main(String[] args) {
        // Crear un objeto de la clase Perro
        Perro miPerro = new Perro();

        // Llamar a los métodos de la superclase y subclase
        miPerro.comer();
        miPerro.ladrar();
    }
}
`;

export const sintaxis_herencia_salida = `El animal está comiendo
El perro está ladrando`;
