import { createSlice,nanoid } from "@reduxjs/toolkit";

//ek initial state banayenge jisse pata chlega hamara feature 
// (Slice)kaisa dikhega

const initialState = {
    todos: [{ id: 1,  text:'' }]
}

export const todoSlice = createSlice({
    //name of Slice 
    name: 'todo',
    //initial state
    initialState, 
    //reducers  
    reducers:{
        //properties&functions with the declaration and definition (what it does )
        addTodo: (state,action)=>{
            const todo = {
                 id: nanoid(), 
                 text: action.payload,
            }
            state.todos.push(todo)
        }, 
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!== action.payload)
        },
        updateTodo: (state,action)=>{
            
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo,text: action.payload.text} : todo)
        }
    }
})
//exporting the slice
export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions
//store ko bhi awareness chahiye reducers ki isliye unhe bhi export karenge 
export default todoSlice.reducer ;   