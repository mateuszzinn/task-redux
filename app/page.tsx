import Counter from "./componentes/counter/Counter";
import Inicio from "./inicio/page";

export default function Home() {
  return (
    <>
      <section className="container">
        <Inicio/>
        <Counter />
      </section>
    </>
  );
}
