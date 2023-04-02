import { TasksStateType } from '../AppWithRedux';
import { v1 } from 'uuid';
import { AddTodolistActionType, RemoveTodolistActionType } from './todolists-reducer';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string,
    todolistId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK',
    todolistId: string
    title: string,
}
export type ChangeStatusTaskActionType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string,
    isDone: boolean,
    todolistId: string
}
export type ChangeTitleTaskActionType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string,
    newTitle: string,
    todolistId: string
}

type ActionType = RemoveTaskActionType | AddTaskActionType
    | ChangeStatusTaskActionType | ChangeTitleTaskActionType
    | AddTodolistActionType | RemoveTodolistActionType

// const initialState: TasksStateType = {
// [todolistId1]: [
// { id: v1(), title: "HTML&CSS", isDone: true },
// { id: v1(), title: "JS", isDone: true }
// ],
// [todolistId2]: [
// { id: v1(), title: "Milk", isDone: true },
// { id: v1(), title: "React Book", isDone: true }
// ]
// }
const initialState: TasksStateType = {};

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export const tasksReducer = (state: TasksStateType = initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let todolistTasks = state[action.todolistId];
            state[action.todolistId] = todolistTasks.filter(t => t.id !== action.taskId)
            return { ...state }
        }

        case 'ADD-TASK': {
            const task = { id: v1(), title: action.title, isDone: false };
            const todolistTasks = state[action.todolistId]
            state[action.todolistId] = [task, ...todolistTasks]
            return { ...state }
        }

        case 'CHANGE-TASK-STATUS': {
            // const stateCopy = { ...state };
            // let tasks = stateCopy[action.todolistId];
            // let task = tasks.find(t => t.id == action.taskId);
            // if (task) {
            //     task.isDone = action.isDone
            // }
            // stateCopy[action.todolistId] = [...tasks]
            // return stateCopy;

            // let todoListTasks = state[action.todolistId];
            // let task = todoListTasks.find(t => t.id == action.taskId);
            // if (task) {
            //     task.isDone = action.isDone
            // }
            // state[action.todolistId] = [...todoListTasks];
            // return { ...state }

            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? { ...t, isDone: action.isDone } : t)
            }
        }

        case 'CHANGE-TASK-TITLE': {
            // let todolistTasks = state[action.todolistId];
            // let task = todolistTasks.find(t => t.id == action.taskId);
            // if (task) {
            //     task.title = action.newTitle
            // }
            // state[action.todolistId] = [...todoListTasks];
            // return { ...state }
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? { ...t, title: action.newTitle } : t)
            }
        }

        case 'ADD-TODOLIST': {
            const stateCopy = { ...state };
            stateCopy[action.todolistId] = [];
            return stateCopy;
        }

        case 'REMOVE-TODOLIST': {
            const stateCopy = { ...state };
            delete stateCopy[action.id];
            return stateCopy;
        }

        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskId, todolistId }
}
export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return { type: 'ADD-TASK', title, todolistId }
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): ChangeStatusTaskActionType => {
    return { type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId }
}
export const changeTaskTitleAC = (taskId: string, newTitle: string, todolistId: string): ChangeTitleTaskActionType => {
    return { type: 'CHANGE-TASK-TITLE', taskId, newTitle, todolistId }
}
