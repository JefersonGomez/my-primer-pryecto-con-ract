import Task from "./Task";
import Formulario from "./Formulario";
import React, { useState, useEffect } from "react";
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="conteiner mx-auto p-10">
        <Task />
        <Formulario />
      </div>
    </main>
  );
}

export default App;
