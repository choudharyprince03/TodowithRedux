import React, { useState } from 'react'
import { addTodo } from '../feature/todo/todoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [todo, setTodo] = useState(''); 
    const Dispatch = useDispatch(); 

    const addTodoHandler = (e) => {
        e.preventDefault(); 
        Dispatch(addTodo(todo)); 
        setTodo(''); 
    }

  return (
   <>
     <form 
       onSubmit={addTodoHandler} 
       className="flex items-center gap-3 justify-center mt-6 bg-white p-4 rounded-xl shadow-md"
     >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a new todo..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add Todo
        </button>
      </form>
   </>
  )
}

export default AddTodo
