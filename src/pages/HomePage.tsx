import CardTemario from "@/components/pages/home/CardTemario";
import { TemarioJava, TemarioSpringBoot } from "@/utils/temarioJavaSpring";

function HomePage() {
  return (
    <div>
      <section className="w-full flex justify-center items-center flex-col">
        <h1 className="text-3xl sm:text-5xl font-semibold text-center">
          Aprendiendo <span className="text-orange-600">Java</span> y{" "}
          <span className="text-lime-600">Spring Boot</span>
        </h1>
      </section>
      <section className="grid lg:grid-cols-2 gap-7 sm:p-10 p-3">
        <CardTemario temario={TemarioJava} color="orange" />
        <CardTemario temario={TemarioSpringBoot} color="lime" />
      </section>
    </div>
  );
}

export default HomePage;
