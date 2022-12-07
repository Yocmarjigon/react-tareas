import { useState, useContext } from "react";
import { TareaContext } from "./context/tareaContext";

function TareaForm() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const { crearTarea } = useContext(TareaContext);

  const manejaSubmit = (e) => {
    e.preventDefault();
    crearTarea({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={manejaSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          type="text"
          placeholder="Escribe una tarea nueva"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe una descripcion"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-5 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TareaForm;
