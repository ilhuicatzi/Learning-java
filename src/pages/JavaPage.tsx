import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroJava from "@/components/pages/java/HeroJava";
import Modulo_1 from "@/components/pages/java/Modulo_1";
function JavaPage() {
  return (
    <main className="w-full max-w-4xl">
      <HeroJava />
      <Accordion type="single" collapsible className="w-full mx-20">
        <AccordionItem value="item-HolaMundo">
          <AccordionTrigger className="text-lg">Módulo 1</AccordionTrigger>
          <AccordionContent>
            <Modulo_1 />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default JavaPage;
