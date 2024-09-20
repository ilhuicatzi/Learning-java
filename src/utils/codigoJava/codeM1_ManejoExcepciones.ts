export const manejoExcepciones_try_catch = `public class ManejoExcepciones {
    public static void main(String[] args) {
        try {
            int division = 10 / 0; // Esto lanzará una excepción ArithmeticException
            System.out.println("Resultado: " + division);
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero no permitida.");
        }
    }
}
`;

export const manejoExcepciones_try_catch_salida = `Error: División por cero no permitida.
`;

export const manejoExcepciones_try_catch_finally = `public class ManejoExcepciones {
    public static void main(String[] args) {
        try {
            int division = 10 / 0; // Esto lanzará una excepción ArithmeticException
            System.out.println("Resultado: " + division);
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero no permitida.");
        } finally {
            System.out.println("Este bloque siempre se ejecuta.");
        }
    }
}
`;

export const manejoExcepciones_try_catch_finally_salida = `Error: División por cero no permitida.
Este bloque siempre se ejecuta.
`;

export const manejoExcepciones_try_catch_multiple = `public class ManejoExcepciones {
    public static void main(String[] args) {
        try {
            int division = 10 / 0; // Esto lanzará una excepción ArithmeticException
            System.out.println("Resultado: " + division);
        } catch (ArithmeticException e) {
            System.out.println("Error: División por cero no permitida.");
        } catch (Exception e) {
            System.out.println("Error: Algo salió mal.");
        }
    }
}
`;

export const manejoExcepciones_try_catch_multiple_salida = `Error: División por cero no permitida.
`;

export const manejoExcepciones_Verificadas = `import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class ManejoExcepciones {
    public static void main(String[] args) {
        try {
            FileReader file = new FileReader("archivo.txt");
            BufferedReader reader = new BufferedReader(file);
            String linea = reader.readLine();
            System.out.println(linea);
        } catch (FileNotFoundException e) {
            System.out.println("Error: Archivo no encontrado.");
        } catch (IOException e) {
            System.out.println("Error: No se pudo leer el archivo.");
        }
    }
}
`;

export const manejoExcepciones_Verificadas_salida = `Error: Archivo no encontrado.
`;

export const manejoExcepciones_Clausulas_throw_throws = `public class ClavesInseguras {
    public static void validarClave(String clave) throws Exception {
        if (clave.length() < 8) {
            throw new Exception("La clave es demasiado corta.");
        }
    }

    public static void main(String[] args) {
        try {
            validarClave("abc"); // Esto lanzará una excepción
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
`;

export const manejoExcepciones_Clausulas_throw_throws_salida = `Error: La clave es demasiado corta.
`;

export const manejoExcepciones_Perzonalizadas = `class ClaveInseguraException extends Exception {
    public ClaveInseguraException(String mensaje) {
        super(mensaje);
    }
}

public class ExcepcionesPersonalizadas {
    public static void validarClave(String clave) throws ClaveInseguraException {
        if (clave.length() < 8) {
            throw new ClaveInseguraException("La clave es demasiado corta.");
        }
    }

    public static void main(String[] args) {
        try {
            validarClave("1234");
        } catch (ClaveInseguraException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
`;

export const manejoExcepciones_Perzonalizadas_salida = `Error: La clave es demasiado corta.
`;