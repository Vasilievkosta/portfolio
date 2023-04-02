import { TodolistType, FilterValuesType } from '../AppWithRedux'
import { v1 } from 'uuid'


export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST',
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST',
    title: string,
    todolistId: string
}
export type ChangeTodolistTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE',
    id: string,
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: 'CHANGE-TODOLIST-FILTER',
    id: string,
    filter: FilterValuesType
}

type ActionType = RemoveTodolistActionType | AddTodolistActionType
    | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export let todolistId1 = v1();
export let todolistId2 = v1();

// let initialState: TodolistType[] = [
    // { id: todolistId1, title: "What to learn", filter: "all" },
    // { id: todolistId2, title: "What to buy", filter: "all" }
// ]
let initialState: TodolistType[] = [];

export const todolistsReducer = (state: TodolistType[] = initialState, action: ActionType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(td => td.id !== action.id)

        case 'ADD-TODOLIST':
            let newTodolist: TodolistType = {
                id: action.todolistId,
                title: action.title,
                filter: "all"
            }
            return [newTodolist, ...state]

        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(t => t.id === action.id);
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]
        }


        case 'CHANGE-TODOLIST-FILTER': {
            const todolist = state.find(t => t.id === action.id);
            if (todolist) {
                todolist.filter = action.filter
            }
            return [...state]
        }

        default:
            return state;
    }
}

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => {
    return { type: 'REMOVE-TODOLIST', id: todolistId }
}
export const addTodolistAC = (title: string): AddTodolistActionType => {

    return { type: 'ADD-TODOLIST', title, todolistId: v1() }
}
export const changeTodolistTitleAC = (id: string, title: string): ChangeTodolistTitleActionType => {
    return { type: 'CHANGE-TODOLIST-TITLE', id: id, title: title }
}
export const changeTodolistFilterAC = (filter: FilterValuesType, id: string): ChangeTodolistFilterActionType => {
    return { type: 'CHANGE-TODOLIST-FILTER', id: id, filter: filter }
}