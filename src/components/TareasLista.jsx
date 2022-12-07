import TareaCarta from "./TareaCarta";
import {useContext} from 'react'
import {TareaContext} from './context/tareaContext'

function TareasLista() {

  const {tareas} = useContext(TareaContext)
  

  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <TareaCarta tarea={tarea}  key={tarea.id} />
      ))}
    </div>
  );
}

export default TareasLista;
