import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { Lista as datos } from "../Lista";
export const TareaContexto = createContext();

export function TareaContextoProvider(props) {
  const [Lista, setLista] = useState([]);
  function crearTarea(tituloTarea) {
    setLista([
      ...Lista,
      {
        titulo: tituloTarea.titulo,
        id: Lista.length,
        descripcion: tituloTarea.descripcion,
      },
    ]);
  }
  function ElimnarTarea(ListaId) {
    console.log(Lista);
    console.log(ListaId);
    setLista(Lista.filter((Lista) => Lista.id != ListaId));
  }
  useEffect(() => {
    setLista(datos);
  }, []);
  return (
    <>
      <TareaContexto.Provider
        value={{
          Lista: Lista,
          crearTarea: crearTarea,
          ElimnarTarea: ElimnarTarea,
        }}
      >
        {props.children}
      </TareaContexto.Provider>
    </>
  );
}
