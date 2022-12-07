import { tareas as data } from "./data/TareasList";
import TareasLista from "./components/TareasLista";
import TareaForm from "./components/TareaForm";
import {useState, useEffect} from 'react'

function App() {

  

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TareaForm/>
        <TareasLista/>
      </div>
    </div>
  );
}

export default App;
