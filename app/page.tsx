import Counter from "./componentes/counter/Counter";
import KanbanBoard from "./componentes/kanban/KanbanBoard";
import TodoList from "./componentes/todo/TodoList";
import Inicio from "./inicio/page";

export default function Home() {
  return (
    <>
      <section className="container">
        <Inicio/>
        <Counter />
        <TodoList/>
        <KanbanBoard/>
      </section>
    </>
  );
}
