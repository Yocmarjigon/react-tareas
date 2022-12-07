import {createContext, useState, useEffect} from 'react'

import {tareas as data} from '../../data/TareasList'

export const TareaContext = createContext()

export function TareaContextProvider(props){
  
  const [tareas, setTareas] = useState([]);

  

  function crearTarea(tarea){
    return setTareas([...tareas, {
      id: tareas.length,
      title: tarea.title,
      description: tarea.description
      
    }])
  }

  function eliminarTarea(tareaId){
    setTareas(tareas.filter(tarea => tarea.id != tareaId))
  }

  useEffect(() => {
    setTareas(data);
  }, []);

  return (
      <TareaContext.Provider value={{
        tareas,
        crearTarea,
        eliminarTarea
      }}>
        {props.children}
      </TareaContext.Provider>
  )
} 

