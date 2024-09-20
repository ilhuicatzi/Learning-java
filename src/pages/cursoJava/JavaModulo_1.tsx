import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Introduccion from "@/components/pages/java/modulos/M1_Introduccion";
import SintaxisBasica from "@/components/pages/java/modulos/M1_SintaxisBasica";
import ClasesObjetos from "@/components/pages/java/modulos/M1_ClasesObjetos";
import ManjoExcepciones from "@/components/pages/java/modulos/M1_ManejoExcepciones";

function JavaIntroduccion() {
  return (
    <main className="w-full max-w-4xl">
      <h1 className="text-4xl font-semibold my-5 mx-5 md:mx-10 xl:mx-20 "><span className="text-orange-600">Módulo 1:</span> Fundamentos de Java</h1>
      <Accordion type="single" collapsible className="w-11/12 mx-5 md:mx-10 xl:mx-20 ">
        <AccordionItem value="item-HolaMundo">
          <AccordionTrigger className="text-lg">Introducción</AccordionTrigger>
          <AccordionContent>
            <Introduccion />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-SintaxisBasica">
          <AccordionTrigger className="text-lg">Sintaxis Básica</AccordionTrigger>
          <AccordionContent>
            <SintaxisBasica />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-ClasesObjetos">
          <AccordionTrigger className="text-lg">Clases y Objetos</AccordionTrigger>
          <AccordionContent>
            <ClasesObjetos />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-ManejoExcepciones">
          <AccordionTrigger className="text-lg">Manejo de Excepciones</AccordionTrigger>
          <AccordionContent>
            <ManjoExcepciones />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

export default JavaIntroduccion