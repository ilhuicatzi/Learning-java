import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Temario } from "@/utils/temarioJavaSpring";
interface ColorProps {
  color?:
    | "rose"
    | "blue"
    | "green"
    | "red"
    | "orange"
    | "lime"
    | "cyan"
    | "yellow"
    | "purple"; // Hacemos opcional el color
}

function CardTemario({
  temario,
  titulo,
  color = "primary" as ColorProps["color"],
}: {
  temario: Temario[];
  titulo: string;
  color?: ColorProps["color"];
}) {
  const colorClass = {
    rose: "text-rose-600",
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    orange: "text-orange-600",
    lime: "text-lime-600",
    cyan: "text-cyan-600",
    yellow: "text-yellow-600",
    purple: "text-purple-600",
    primary: "text-primary", // Clase para el color por defecto
  };

  const selectedColor = color ? colorClass[color] : ""; // Ensure color is defined
  return (
    <Card>
      <CardHeader>
        <CardTitle className={`text-center text-2xl text-primary ${selectedColor}`}>
          {titulo}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {temario.map((modulo) => (
          <div key={modulo.id}>
            <h2 className="text-xl font-medium mt-7 mb-3">{modulo.modulo}</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {modulo.topics.map((topic) => (
                <li key={topic.id} className="text-lg">
                  {topic.title}
                  <ul className="list-disc list-inside">
                    {topic.content.map((subtopic) => (
                      <li
                        key={subtopic}
                        className={`text-base ${
                          topic.complete
                            ? "text-foreground cursor-pointer hover:text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {subtopic}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default CardTemario;
