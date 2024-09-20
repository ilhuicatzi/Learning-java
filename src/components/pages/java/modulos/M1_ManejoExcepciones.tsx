import Container from "@/components/ui/container";
import CodeBlock from "@/components/code/CodeBlock";
import CodeString from "@/components/code/CodeString";
import Code from "@/components/code/Code";
import {
  manejoExcepciones_try_catch,
  manejoExcepciones_try_catch_salida,
  manejoExcepciones_try_catch_finally,
  manejoExcepciones_try_catch_finally_salida,
  manejoExcepciones_try_catch_multiple,
  manejoExcepciones_try_catch_multiple_salida,
  manejoExcepciones_Verificadas,
  manejoExcepciones_Verificadas_salida,
  manejoExcepciones_Clausulas_throw_throws,
  manejoExcepciones_Clausulas_throw_throws_salida,
  manejoExcepciones_Perzonalizadas,
  manejoExcepciones_Perzonalizadas_salida,
} from "@/utils/codigoJava/codeM1_ManejoExcepciones";

function M1_ManejoExcepciones() {
  return (
    <Container>
      <article>
        <h2 className="group text-3xl font-medium mb-7">
          4. Manejo de excepciones{" "}
          <span className="text-transparent group-hover:text-primary">#</span>
        </h2>
        <p>
          El manejo de excepciones en Java es una técnica para gestionar errores
          y situaciones inesperadas durante la ejecución de un programa. En
          lugar de permitir que el programa se cierre abruptamente cuando ocurre
          un error, Java proporciona mecanismos para manejar estas situaciones
          de manera controlada. Aquí están los conceptos clave junto con
          ejemplos de código.
        </p>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">4.1 try-catch</h3>
        <p>
          La estructura <Code>try-catch</Code> se utiliza para manejar
          excepciones en Java. El código que puede lanzar una excepción se
          coloca dentro del bloque <Code>try</Code>, y el código que maneja la
          excepción se coloca dentro del bloque <Code>catch</Code>.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">Sintaxis de try-catch:</h4>
          <CodeBlock code={manejoExcepciones_try_catch} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={manejoExcepciones_try_catch_salida} />
        </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">4.2 try-catch-finally</h3>
        <p>
          La estructura <Code>try-catch-finally</Code> se utiliza para manejar
          excepciones en Java y garantizar que cierto código se ejecute
          independientemente de si ocurre una excepción o no. El bloque
          <Code>finally</Code> se ejecuta siempre, incluso si no se lanza
          ninguna excepción.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">Sintaxis de try-catch-finally:</h4>
          <CodeBlock code={manejoExcepciones_try_catch_finally} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={manejoExcepciones_try_catch_finally_salida} />
        </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">
          4.3 try-catch con múltiples bloques catch
        </h3>
        <p>
          Se pueden tener múltiples bloques <Code>catch</Code> para manejar
          diferentes tipos de excepciones en Java. Los bloques{" "}
          <Code>catch</Code>
          se evalúan en orden, y el primero que coincida con el tipo de
          excepción capturará la excepción.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">
            Sintaxis de try-catch con múltiples bloques catch:
          </h4>
          <CodeBlock code={manejoExcepciones_try_catch_multiple} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={manejoExcepciones_try_catch_multiple_salida} />
        </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">
          4.4 Excepciones verificadas
        </h3>
        <p>
          Las excepciones verificadas son excepciones que el compilador obliga a
          manejar. Estas excepciones deben ser capturadas o declaradas en la
          firma del método. Ejemplos comunes de excepciones verificadas son
          <Code>IOException</Code> y <Code>FileNotFoundException</Code>.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">Ejemplo de excepciones verificadas:</h4>
          <CodeBlock code={manejoExcepciones_Verificadas} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={manejoExcepciones_Verificadas_salida} />
        </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">
          4.5 Clausulas throw y throws
        </h3>
        <p>
          Las cláusulas <Code>throw</Code> y <Code>throws</Code> se utilizan
          para lanzar excepciones en Java. La cláusula <Code>throw</Code> se
          utiliza para lanzar una excepción manualmente, mientras que la
          cláusula
          <Code>throws</Code> se utiliza para declarar que un método puede
          lanzar una excepción.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">Sintaxis de throw y throws:</h4>
          <CodeBlock code={manejoExcepciones_Clausulas_throw_throws} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={manejoExcepciones_Clausulas_throw_throws_salida} />
        </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">
          4.6 Excepciones personalizadas
        </h3>
        <p>
          En Java, puedes crear tus propias excepciones personalizadas
          extendiendo la clase <Code>Exception</Code> o{" "}
          <Code>RuntimeException</Code>. Esto te permite definir excepciones
          específicas para tu aplicación.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">
            Ejemplo de excepciones personalizadas:
          </h4>
          <CodeBlock code={manejoExcepciones_Perzonalizadas} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={manejoExcepciones_Perzonalizadas_salida} />
        </div>
      </article>
    </Container>
  );
}

export default M1_ManejoExcepciones;
