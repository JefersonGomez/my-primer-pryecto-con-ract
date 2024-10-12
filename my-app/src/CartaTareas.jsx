import React, { useContext } from "react";
import { TareaContexto } from "./contex/TareaContexto";

function CartaTareas({ Lista }) {
  const { ElimnarTarea } = useContext(TareaContexto);
  return (
    <div className="bg-gray-800 text-white  p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{Lista.titulo}</h1>
      <p className="text-gray-500 text-sm">{Lista.descripcion}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => ElimnarTarea(Lista.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
export default CartaTareas;
