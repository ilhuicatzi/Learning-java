import Container from "@/components/ui/container";
import CodeBlock from "@/components/code/CodeBlock";
import CodeString from "@/components/code/CodeString";
import Code from "@/components/code/Code";
import {
  declaracion_Variables,
  declaracion_Variables_salida,
  operadores_Aritmeticos,
    operadores_Aritmeticos_salida,
    operadores_Comparacion,
    operadores_Comparacion_salida,
    operadores_Logicos,
    operadores_Logicos_salida,
    estructuras_Control,
    estructuras_Control_salida,
    metodos_parametros,
    metodos_parametros_salida,
    metodos_retorno,
    metodos_retorno_salida,
} from "@/utils/codigoJava/codeM1_SintaxisBasica";

function M1_SintaxisBasica() {
  return (
    <Container>
      <article>
        <h2 className="group text-3xl font-medium mb-7">
          2. Sintaxis Básica de Java{" "}
          <span className="text-transparent group-hover:text-primary">#</span>
        </h2>
        <p>
          Java es un lenguaje de programación de propósito general, orientado a
          objetos y de alto nivel. A continuación, se presentan los conceptos
          básicos de la sintaxis de Java:
        </p>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">
          2.1 Variables y Tipos de Datos
        </h3>
        <p>
          En Java, una variable es un contenedor para almacenar valores. Los
          tipos de datos definen el tipo de valor que puede almacenar una
          variable. Java es un lenguaje fuertemente tipado, lo que significa que
          cada variable debe declararse con un tipo de dato.
        </p>

        <div>
          <h4 className="font-semibold">Tipos de datos primitivos en Java:</h4>
          <ul className="list-disc list-inside pl-4 space-y-3">
            <li>
              <Code>byte</Code>: 8 bits, rango de -128 a 127
            </li>
            <li>
              <Code>short</Code>: 16 bits, rango de -32,768 a 32,767
            </li>
            <li>
              <Code>int</Code>: 32 bits, rango de -2,147,483,648 a 2,147,483,647
            </li>
            <li>
              <Code>long</Code>: 64 bits, rango de -9,223,372,036,854,775,808 a
              9,223,372,036,854,775,807
            </li>
            <li>
              <Code>float</Code>: 32 bits, rango de 3.40282347 x 10^38 a
              1.40239846 x 10^-45
            </li>
            <li>
              <Code>double</Code>: 64 bits, rango de 1.7976931348623157 x 10^308
              a 4.9406564584124654 x 10^-324
            </li>
            <li>
              <Code>char</Code>: 16 bits, rango de 0 a 65,535
            </li>
            <li>
              <Code>boolean</Code>: true o false
            </li>
          </ul>
        </div>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">
            Ejemplo: Declaración y uso de variables{" "}
          </h4>
            <CodeBlock code={declaracion_Variables} />
            <p className="font-semibold">Salida:</p>
            <CodeString code={declaracion_Variables_salida} />
        </div>
      </article>

        <article>
            <h3 className="text-xl font-medium my-3">2.2 Operadores Aritméticos</h3>
            <p>
            Los operadores aritméticos se utilizan para realizar operaciones
            matemáticas en Java. Los operadores aritméticos básicos son:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-3">
            <li>
                <Code>+</Code>: Suma
            </li>
            <li>
                <Code>-</Code>: Resta
            </li>
            <li>
                <Code>*</Code>: Multiplicación
            </li>
            <li>
                <Code>/</Code>: División
            </li>
            <li>
                <Code>%</Code>: Módulo (resto de la división)
            </li>
            </ul>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de operadores aritméticos: </h4>
            <CodeBlock code={operadores_Aritmeticos} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={operadores_Aritmeticos_salida} />
            </div>
        </article>

        <article>
            <h3 className="text-xl font-medium my-3">2.3 Operadores de Comparación</h3>
            <p>
            Los operadores de comparación se utilizan para comparar dos valores en
            Java. Los operadores de comparación básicos son:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-3">
            <li>
                <Code>==</Code>: Igual a
            </li>
            <li>
                <Code>!=</Code>: Diferente de
            </li>
            <li>
                <Code>&gt;</Code>: Mayor que
            </li>
            <li>
                <Code>&lt;</Code>: Menor que
            </li>
            <li>
                <Code>&gt;=</Code>: Mayor o igual que
            </li>
            <li>
                <Code>&lt;=</Code>: Menor o igual que
            </li>
            </ul>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de operadores de comparación: </h4>
            <CodeBlock code={operadores_Comparacion} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={operadores_Comparacion_salida} />
            </div>
        </article>

        <article>
            <h3 className="text-xl font-medium my-3">2.4 Operadores Lógicos</h3>
            <p>
            Los operadores lógicos se utilizan para combinar expresiones lógicas en
            Java. Los operadores lógicos básicos son:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-3">
            <li>
                <Code>&&</Code>: AND lógico
            </li>
            <li>
                <Code>||</Code>: OR lógico
            </li>
            <li>
                <Code>!</Code>: NOT lógico
            </li>
            </ul>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de operadores lógicos: </h4>
            <CodeBlock code={operadores_Logicos} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={operadores_Logicos_salida} />
            </div>
        </article>

        <article>
            <h3 className="text-xl font-medium my-3">2.5 Estructuras de Control</h3>
            <p>
            Las estructuras de control se utilizan para controlar el flujo de
            ejecución de un programa en Java. Las estructuras de control básicas
            son:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-3">
            <li>
                <Code>if</Code>: Se utiliza para tomar decisiones basadas en una
                condición
            </li>
            <li>
                <Code>else</Code>: Se ejecuta si la condición del <Code>if</Code> es
                falsa
            </li>
            <li>
                <Code>else if</Code>: Se utiliza para evaluar múltiples condiciones
            </li>
            <li>
                <Code>switch</Code>: Se utiliza para seleccionar una de las muchas
                opciones
            </li>
            <li>
                <Code>while</Code>: Se utiliza para repetir un bloque de código
                mientras se cumpla una condición
            </li>
            <li>
                <Code>do-while</Code>: Se utiliza para repetir un bloque de código
                al menos una vez y luego mientras se cumpla una condición
            </li>
            <li>
                <Code>for</Code>: Se utiliza para repetir un bloque de código un
                número específico de veces
            </li>
            </ul>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de estructuras de control: </h4>
            <CodeBlock code={estructuras_Control} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={estructuras_Control_salida} />
            </div>
        </article>

        <article>
            <h3 className="text-xl font-medium my-3">2.6 Métodos y Parámetros</h3>
            <p>
            Un método es un bloque de código que realiza una tarea específica en
            Java. Los métodos pueden tener parámetros que se utilizan para pasar
            datos al método. Los parámetros se definen entre paréntesis después del
            nombre del método.
            </p>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de método con parámetros: </h4>
            <CodeBlock code={metodos_parametros} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={metodos_parametros_salida} />
            </div>
        </article>

        <article>
            <h3 className="text-xl font-medium my-3">2.7 Métodos y Retorno</h3>
            <p>
            Un método puede devolver un valor en Java utilizando la palabra clave
            <Code>return</Code>. El tipo de dato que devuelve un método se define
            antes del nombre del método. Si un método no devuelve ningún valor, se
            utiliza la palabra clave <Code>void</Code>.
            </p>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de método con retorno: </h4>
            <CodeBlock code={metodos_retorno} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={metodos_retorno_salida} />
            </div>
        </article>
    </Container>
  );
}

export default M1_SintaxisBasica;
