import {useContext} from 'react';
import {TareaContext} from './context/tareaContext'


function TareaCarta({tarea}) {

  
  const {eliminarTarea, tareas} = useContext(TareaContext)



  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>Tarea: {tarea.title}</h1>
      <p className='text-gray-500 text-sm'>Descripcion: {tarea.description}</p>
      <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300' onClick={()=>{eliminarTarea(tarea.id)}}>
        Eliminar
      </button>
    </div>
    
  );
}

export default TareaCarta;
