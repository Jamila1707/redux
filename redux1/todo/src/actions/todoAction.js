import {ADD,COMPLETE,UPDATE,DELETE} from "./types"


export const addtodo=(input)=>{
    return{
        type:ADD,
        payload: input
    }
}
export const deleteTodo=(id)=>{
    return{
        type:DELETE,
        payload: id
    }
}
export const completeTodo=(id)=>{
    return{
        type:COMPLETE,
        payload: id
    }
}
export const updateTodo=(edit,id)=>{
    return{
        type:UPDATE,
        payload:{edit,id}
    }
}