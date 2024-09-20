import Container from "@/components/ui/container";
import CodeBlock from "@/components/code/CodeBlock";
import CodeString from "@/components/code/CodeString";

import { sintaxis_clase,
    sintaxis_clase_salida,
    sintaxis_constructor,
    sintaxis_constructor_salida,
    sintaxis_metodos,
    sintaxis_metodos_salida,
    sintaxis_metodos_estaticos,
    sintaxis_metodos_estaticos_salida,
    sintaxis_sobrecarga,
    sintaxis_sobrecarga_salida,
    sintaxis_herencia,
    sintaxis_herencia_salida,
 } from "@/utils/codigoJava/codeM1_ClaseObjetos";
function M1_ClasesObjetos() {
  return (
    <Container>
      <article>
        <h2 className="group text-3xl font-medium mb-7">
          3. Clases y Objetos en Java{" "}
          <span className="text-transparent group-hover:text-primary">#</span>
        </h2>
        <p>
            Java es un lenguaje de programación orientado a objetos, lo que significa
            que todo en Java es un objeto. Un objeto es una instancia de una clase,
            que es un modelo o plantilla para crear objetos. Las clases en Java
            definen los atributos y métodos que tienen los objetos.
        </p>
      </article>
        <article>
            <h3 className="text-xl font-medium my-3">
            3.1 Clases y Objetos
            </h3>
            <p>
                Una clase es una plantilla para crear objetos. Define los atributos
                (variables) y métodos (funciones) que tienen los objetos. Para crear un
                objeto en Java, primero se debe definir una clase y luego instanciarla.
            </p>
            <div className="space-y-3 mt-5">
                <h4 className="font-semibold">Definición de una clase en Java:</h4>
                <CodeBlock code={sintaxis_clase} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={sintaxis_clase_salida} />
            </div>
        </article>
        <article>
            <h3 className="text-xl font-medium my-3">
            3.2 Constructores
            </h3>
            <p>
                Un constructor es un método especial que se llama cuando se crea un
                objeto. Se utiliza para inicializar los atributos de un objeto. En Java,
                el nombre del constructor debe ser el mismo que el de la clase.
            </p>
            <div className="space-y-3 mt-5">
                <h4 className="font-semibold">Sintaxis de un constructor en Java:</h4>
                <CodeBlock code={sintaxis_constructor} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={sintaxis_constructor_salida} />
            </div>
        </article>
        <article>
            <h3 className="text-xl font-medium my-3">
            3.3 Métodos
            </h3>
            <p>
                Los métodos son funciones que se definen en una clase y se utilizan para
                realizar operaciones sobre los objetos de esa clase. Pueden tener
                parámetros y un valor de retorno.
            </p>
            <div className="space-y-3 mt-5">
                <h4 className="font-semibold">Definición de métodos en Java:</h4>
                <CodeBlock code={sintaxis_metodos} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={sintaxis_metodos_salida} />
            </div>
        </article>
        <article>
            <h3 className="text-xl font-medium my-3">
            3.4 Métodos Estáticos
            </h3>
            <p>
                Los métodos estáticos pertenecen a la clase en lugar de a un objeto
                específico. Se pueden llamar sin crear una instancia de la clase y se
                utilizan para realizar operaciones que no dependen de un objeto en
                particular.
            </p>
            <div className="space-y-3 mt-5">
                <h4 className="font-semibold">Definición de métodos estáticos en Java:</h4>
                <CodeBlock code={sintaxis_metodos_estaticos} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={sintaxis_metodos_estaticos_salida} />
            </div>
        </article>
        <article>
            <h3 className="text-xl font-medium my-3">
            3.5 Sobrecarga de Métodos
            </h3>
            <p>
                La sobrecarga de métodos es la capacidad de definir varios métodos con
                el mismo nombre pero con diferentes parámetros. Java determina cuál
                método llamar en función de los argumentos que se pasan al método.
            </p>
            <div className="space-y-3 mt-5">
                <h4 className="font-semibold">Ejemplo de sobrecarga de métodos en Java:</h4>
                <CodeBlock code={sintaxis_sobrecarga} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={sintaxis_sobrecarga_salida} />
            </div>
        </article>
        <article>
            <h3 className="text-xl font-medium my-3">
            3.6 Herencia
            </h3>
            <p>
                La herencia es un mecanismo en el que una clase adquiere los atributos y
                métodos de otra clase. La clase que hereda se conoce como subclase y la
                clase de la que hereda se conoce como superclase.
            </p>
            <div className="space-y-3 mt-5">
                <h4 className="font-semibold">Ejemplo de herencia en Java:</h4>
                <CodeBlock code={sintaxis_herencia} />
                <p className="font-semibold">Salida:</p>
                <CodeString code={sintaxis_herencia_salida} />
            </div>
        </article>
    </Container>
  )
}

export default M1_ClasesObjetos