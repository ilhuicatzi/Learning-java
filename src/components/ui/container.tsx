function Container({ children }: { children: React.ReactNode }) {
    return (
      <section className="w-full max-w-3xl m-2 sm:m-10 space-y-8 flex justify-center items-start flex-col scroll-ps-5">
          {children}
      </section>
    )
  }
  
  export default Container