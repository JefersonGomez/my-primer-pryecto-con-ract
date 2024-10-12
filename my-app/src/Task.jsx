import CartaTareas from "./CartaTareas";
import { TareaContexto } from "./contex/TareaContexto";
import React, { useContext } from "react";

function Task() {
  const { Lista } = useContext(TareaContexto);
  if (Lista.length === 0) {
    <h1 className="text-white text-4xl font-bold text-center">
      No hay tareas aun
    </h1>;
  }

  return (
    <div className=" grid grid-cols-4 gap-2">
      {Lista.map((Lista) => (
        <CartaTareas key={Lista.id} Lista={Lista} />
      ))}
    </div>
  );
}
export default Task;
