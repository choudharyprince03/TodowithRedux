import { useSelector, useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../feature/todo/todoSlice"
import { useState } from "react";

const todo = () => {
  const Dispatch = useDispatch(); 

  //for update todo 
  const [isTodoEditable, setIsTodoEditable] = useState(null); 
  const [newTodo,setNewtodo] = useState("");
  
  const todos = useSelector((state)=>state.todos);

  const handleEdit =(todo)=>{
    setIsTodoEditable(todo.id)
    setNewtodo(todo.text)
  }
  const handleUpdate =(e)=>{
    e.preventDefault(); 
    if (newTodo.trim()=== "") return ; 
    Dispatch(updateTodo({id: todo.id, text: newTodo})); 
    setIsTodoEditable(null); 
    setNewtodo(""); 
  }

  return (
   <>
     <div className="flex justify-center mt-6">
      <ul className="w-96 bg-gray-100 p-5 rounded-xl shadow-md">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos yet. Add one!</p>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-white px-4 py-2 mb-2 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              {isTodoEditable === todo.id ? (
                <input
                  value={newTodo}
                  onChange={(e) => setNewtodo(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <span className="text-gray-800 font-medium">{todo.text}</span>
              )}

              <div className="flex gap-1">
                {isTodoEditable === todo.id ? (
                  <button
                    onClick={(e) => handleUpdate(e)}
                    className="text-white bg-green-500 hover:bg-green-600 border border-green-500 px-2 py-1 rounded-md transition duration-200"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-blue-500 hover:text-white hover:bg-blue-500 border border-blue-500 px-2 py-1 rounded-md transition duration-200"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => Dispatch(deleteTodo(todo.id))}
                  className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-2 py-1 rounded-md transition duration-200"
                >
                  X
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
   </>
  )
}

export default todo
