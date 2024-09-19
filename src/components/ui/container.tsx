function Container({ children }: { children: React.ReactNode }) {
    return (
      <section className="w-full max-w-3xl m-10 space-y-4 flex justify-center items-start flex-col">
          {children}
      </section>
    )
  }
  
  export default Container