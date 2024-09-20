export const Ejemplo_Clases_Objetos = `// Definición de la clase Persona
class Persona {
    // Atributos (propiedades)
    String nombre;
    int edad;

    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método (comportamiento)
    public void saludar() {
        System.out.println(
            "Hola, mi nombre es " + nombre + " y tengo " + edad + " años."
            );
    }
}

public class Main {
    public static void main(String[] args) {
        // Crear un objeto de la clase Persona
        Persona persona1 = new Persona("Juan", 25);
        
        // Llamar al método del objeto
        persona1.saludar();
    }
}
`;

export const Ejemplo_Clases_Objetos_salida = `Hola, mi nombre es Juan y tengo 25 años.`;

export const Ejemplo_Encapsulamiento = `class Coche {
    // Atributos privados
    private String marca;
    private int velocidad;

    // Constructor
    public Coche(String marca, int velocidad) {
        this.marca = marca;
        this.velocidad = velocidad;
    }

    // Getter para obtener la marca
    public String getMarca() {
        return marca;
    }

    // Setter para modificar la velocidad
    public void setVelocidad(int velocidad) {
        if (velocidad > 0) {
            this.velocidad = velocidad;
        }
    }

    // Método para mostrar la información del coche
    public void mostrarInfo() {
        System.out.println("Coche marca: " + marca + ", velocidad: " + velocidad + " km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        // Crear un objeto de la clase Coche
        Coche miCoche = new Coche("Toyota", 100);

        // Mostrar información del coche
        miCoche.mostrarInfo();

        // Cambiar la velocidad
        miCoche.setVelocidad(120);

        // Mostrar información actualizada del coche
        miCoche.mostrarInfo();
    }
}
`;

export const Ejemplo_Encapsulamiento_salida = `Coche marca: Toyota, velocidad: 100 km/h
Coche marca: Toyota, velocidad: 120 km/h
`;

export const Ejemplo_Herencia = `// Superclase
class Animal {
    public void hacerSonido() {
        System.out.println("El animal hace un sonido");
    }
}

// Subclase
class Perro extends Animal {
    // Sobrescribir el método de la superclase
    @Override
    public void hacerSonido() {
        System.out.println("El perro ladra");
    }
}

public class Main {
    public static void main(String[] args) {
        // Crear un objeto de la clase Perro
        Perro miPerro = new Perro();

        // Llamar al método sobrescrito
        miPerro.hacerSonido();
    }
}
`;

export const Ejemplo_Herencia_salida = `El perro ladra`;

export const Ejemplo_Polimorfismo_sobreescritura = `class Vehiculo {
    public void arrancar() {
        System.out.println("El vehículo está arrancando");
    }
}

class Coche extends Vehiculo {
    @Override
    public void arrancar() {
        System.out.println("El coche está arrancando");
    }
}

class Moto extends Vehiculo {
    @Override
    public void arrancar() {
        System.out.println("La moto está arrancando");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehiculo vehiculo1 = new Coche();
        Vehiculo vehiculo2 = new Moto();

        // Comportamiento diferente en función del objeto
        vehiculo1.arrancar();
        vehiculo2.arrancar();
    }
}
`;

export const Ejemplo_Polimorfismo_sobreescritura_salida = `El coche está arrancando
La moto está arrancando
`;

export const Ejemplo_Polimorfismo_sobrecarga = `class Calculadora {
    // Sobrecarga del método sumar
    public int sumar(int a, int b) {
        return a + b;
    }

    public int sumar(int a, int b, int c) {
        return a + b + c;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();

        System.out.println("Suma de dos números: " + calc.sumar(5, 10));
        System.out.println("Suma de tres números: " + calc.sumar(3, 7, 2));
    }
}
`;

export const Ejemplo_Polimorfismo_sobrecarga_salida = `Suma de dos números: 15
Suma de tres números: 12
`;
