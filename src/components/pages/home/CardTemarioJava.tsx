import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TemarioJava } from "@/utils/temarioJava";

function CardTemarioJava() {
  return (
    <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl text-orange-600">Temario Java</CardTitle>
          </CardHeader>
          <CardContent>
            {TemarioJava.map((modulo) => (
              <div key={modulo.id}>
                <h2 className="text-xl font-medium mt-7 mb-3">{modulo.modulo}</h2>
                <ol className="list-decimal pl-5 space-y-2">
                  {modulo.topics.map((topic) => (
                    <li key={topic.id} className="text-lg">
                      {topic.title}
                      <ul className="list-disc list-inside">
                        {topic.content.map((subtopic) => (
                          <li key={subtopic} className={`text-base ${topic.complete ? "text-foreground cursor-pointer hover:text-primary" : "text-muted-foreground"}`}>{subtopic}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </CardContent>
        </Card>
  )
}

export default CardTemarioJava