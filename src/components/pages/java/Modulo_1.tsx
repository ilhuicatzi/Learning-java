import Container from "@/components/ui/container";
import CodeBlock from "@/components/code/CodeBlock";
import CodeString from "@/components/code/CodeString";
import Code from "@/components/code/Code";
import {
  Ejemplo_Clases_Objetos,
  Ejemplo_Clases_Objetos_salida,
  Ejemplo_Encapsulamiento,
  Ejemplo_Encapsulamiento_salida,
  Ejemplo_Herencia,
  Ejemplo_Herencia_salida,
  Ejemplo_Polimorfismo_sobreescritura,
  Ejemplo_Polimorfismo_sobreescritura_salida,
  Ejemplo_Polimorfismo_sobrecarga,
  Ejemplo_Polimorfismo_sobrecarga_salida,
} from "@/utils/codigoJava/modulo_1";
function Modulo_1() {
  return (
    <Container>
      <article>
      <h2 className="group text-3xl font-medium mb-7">
        1. Introducción a la Programación Orientada a Objetos (OOP){" "}
        <span className="text-transparent group-hover:text-primary">#</span>
      </h2>
      <p>
        La <strong>Programación Orientada a Objetos (OOP) </strong> es un
        paradigma de programación que se basa en el concepto de "objetos", que
        pueden contener tanto datos (en forma de atributos o propiedades) como
        métodos (funciones que actúan sobre los datos). Este enfoque permite
        organizar el código de una manera más estructurada y modular.
      </p>
      <div>
        <h3 className="text-xl font-medium my-4">
          Características clave de la OOP:
        </h3>
        <ol className="list-decimal list-inside pl-4">
          <li>
            <span className="font-semibold">Clases y objetos</span>
          </li>
          <li>
            <span className="font-semibold">Encapsulamiento</span>
          </li>
          <li>
            <span className="font-semibold">Herencia</span>
          </li>
          <li>
            <span className="font-semibold">Polimorfismo</span>
          </li>
        </ol>
      </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">1.1 Clases y objetos</h3>
        <ul className="list-disc list-inside pl-4 space-y-3">
          <li>
            <span className="font-semibold">Clase:</span> Es un molde o
            plantilla que define las propiedades y comportamientos (atributos y
            métodos) de los objetos que se crearán a partir de ella.
          </li>
          <li>
            <span className="font-semibold">Objeto: </span>Es una instancia de
            una clase. Los objetos son las unidades reales que interactúan
            dentro del programa.
          </li>
        </ul>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">Ejemplo de clase y objeto: </h4>
          <CodeBlock code={Ejemplo_Clases_Objetos} />
          <p className="font-semibold">Salida:</p>
          <CodeString code={Ejemplo_Clases_Objetos_salida} />
        </div>
      </article>
      <article>
        <h3 className="text-xl font-medium my-3">1.2 Encapsulamiento</h3>
        <p>
          El <strong>encapsulamiento</strong> es el principio de ocultar los
          detalles internos de una clase y permitir el acceso solo a través de
          métodos públicos. Esto se logra mediante la declaración de los
          atributos como <Code>private</Code> y exponiendo métodos públicos (
          <Code>getters</Code> y <Code>setters</Code>) para acceder o modificar
          esos atributos.
        </p>
        <div className="space-y-3 mt-5">
          <h4 className="font-semibold">Ejemplo de encapsulamiento: </h4>
          <CodeBlock code={Ejemplo_Encapsulamiento} />
            <p className="font-semibold">Salida:</p>
            <CodeString code={Ejemplo_Encapsulamiento_salida} />
        </div>
      </article>
        <article>
            <h3 className="text-xl font-medium my-3">1.3 Herencia</h3>
            <p>
            La <strong>herencia</strong> es un mecanismo que permite crear una
            nueva clase (subclase) basada en una clase existente (superclase). La
            subclase hereda los atributos y métodos de la superclase, lo que
            permite reutilizar el código y establecer relaciones entre las clases.
            </p>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Ejemplo de herencia: </h4>
            <CodeBlock code={Ejemplo_Herencia} />
            <p className="font-semibold">Salida:</p>
            <CodeString code={Ejemplo_Herencia_salida} />
            </div>
        </article>

        <article>
            <h3 className="text-xl font-medium my-3">1.4 Polimorfismo</h3>
            <p>
            El <strong>polimorfismo</strong> es la capacidad de un objeto de
            comportarse de múltiples formas. Hay dos tipos de polimorfismo:
            <strong>sobreescritura</strong> (override) y <strong>sobrecarga</strong> (overload).
            </p>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Polimorfismo por sobreescritura: </h4>
            <CodeBlock code={Ejemplo_Polimorfismo_sobreescritura} />
            <p className="font-semibold">Salida:</p>
            <CodeString code={Ejemplo_Polimorfismo_sobreescritura_salida} />
            </div>
            <div className="space-y-3 mt-5">
            <h4 className="font-semibold">Polimorfismo por sobrecarga: </h4>
            <CodeBlock code={Ejemplo_Polimorfismo_sobrecarga} />
            <p className="font-semibold">Salida:</p>
            <CodeString code={Ejemplo_Polimorfismo_sobrecarga_salida} />
            </div>
        </article>
    </Container>
  );
}

export default Modulo_1;
