import { createContext, useContext } from "react";

export const TodoContext = createContext({
     todos:[
        {
            id:1,
            todo: "ToDo msg",
            completed : false
        }
     ],
     addTodo :(todo)=>{},
     updateTodo :(id, todo)=>{},
     deleteDTodo:(id)=>{},
     toggleComplete :(id)=>{} 

});
 
export const useTodo =()=>{
   return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

