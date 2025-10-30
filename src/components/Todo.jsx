import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../feature/todo/todoSlice"

const todo = () => {
  const Dispatch = useDispatch(); 
  const todos = useSelector((state)=>state.todos)

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
                <span className="text-gray-800 font-medium">{todo.text}</span>
                <button
                  onClick={() => Dispatch(deleteTodo(todo.id))}
                  className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-2 py-1 rounded-md transition duration-200"
                >
                  X
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
   </>
  )
}

export default todo
