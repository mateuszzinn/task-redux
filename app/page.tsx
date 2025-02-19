import Counter from "./componentes/counter/Counter";
import Gallery from "./componentes/gallery/Gallery";
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
