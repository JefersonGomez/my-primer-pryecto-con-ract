import React, { useState, useContext } from "react";
import { TareaContexto } from "./contex/TareaContexto";

function Formulario() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { crearTarea } = useContext(TareaContexto);

  const guardarTarea = (f) => {
    f.preventDefault();

    crearTarea({
      titulo,
      descripcion,
    });
    setDescripcion("");
    setTitulo("");
  };
  return (
    <form onSubmit={guardarTarea} className="bg-slate-800 p-10 mb-4">
      <h1 className="text-2xl font-bold text-white mb-3"> Agrega tu tarea</h1>
      <input
        onChange={function (e) {
          setTitulo(e.target.value);
        }}
        placeholder="escribe tu tarea"
        value={titulo}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <textarea
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        placeholder="Escribe tu tarea"
        value={descripcion}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
  );
}
export default Formulario;
