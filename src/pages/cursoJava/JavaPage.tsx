import { TemarioJava } from "@/utils/temarioJavaSpring";
import HeroJava from "@/components/pages/java/HeroJava";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Temario } from "@/utils/temarioJavaSpring";
import { Link } from "react-router-dom";
function JavaPage() {
  return (
    <main className="w-full max-w-5xl">
      <HeroJava />
      <section className="grid md:grid-cols-2  xl:grid-cols-3 gap-5 mx-5 md:mx-10 xl:mx-20 my-10">
      {TemarioJava.map((modulo:Temario) => (
        <Card key={modulo.id} className="bg-background hover:bg-muted cursor-pointer">
          <Link to={modulo.url_modulo} >
          <CardHeader>
            <CardTitle>{modulo.modulo}</CardTitle>
          </CardHeader>
          <CardContent>
            {modulo.topics.map((topic) => (
              <div key={topic.id}>
                <ul className="list-disc list-inside pl-2 text-sm">
                  <li className="truncate">{topic.title}</li>
                </ul>
              </div>
            ))}
          </CardContent>
        </Link>
        </Card>
      ))}
      </section>
      
    </main>
  );
}

export default JavaPage;
