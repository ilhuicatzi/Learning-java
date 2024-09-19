import CardTemarioJava from "@/components/pages/home/CardTemarioJava";

function HomePage() {
  return (
    <div>
      <section className="w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl font-semibold">
          Aprendiendo <span className="text-orange-600">Java</span> y{" "}
          <span className="text-lime-600">Spring Boot</span>
        </h1>
      </section>
      <section className="grid grid-cols-2 gap-4 p-8">
        <CardTemarioJava />
      </section>
    </div>
  );
}

export default HomePage;
