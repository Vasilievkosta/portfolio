import React, { useCallback } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { AddItemForm } from './AddItemForm';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {
    removeTodolistAC, addTodolistAC, changeTodolistTitleAC,
    changeTodolistFilterAC
} from './state/todolists-reducer';
import { removeTaskAC, addTaskAC, changeTaskStatusAC, changeTaskTitleAC } from './state/tasks-reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppRootState } from './state/store';

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    const todolists = useSelector<AppRootState, TodolistType[]>(state => state.todolists)
    const tasks = useSelector<AppRootState, TasksStateType>(state => state.tasks)
    const dispatch = useDispatch();

    const removeTask = useCallback((id: string, todolistId: string) => {
        dispatch(removeTaskAC(id, todolistId))
    }, [dispatch])

    const addTask = useCallback((title: string, todolistId: string) => {
        dispatch(addTaskAC(title, todolistId))
    }, [dispatch])

    const changeTaskStatus = useCallback((id: string, isDone: boolean, todolistId: string) => {
        dispatch(changeTaskStatusAC(id, isDone, todolistId))
    }, [dispatch])

    const changeTaskTitle = useCallback((id: string, newTitle: string, todolistId: string) => {
        dispatch(changeTaskTitleAC(id, newTitle, todolistId))
    }, [dispatch])

    const changeFilter = useCallback((value: FilterValuesType, todolistId: string) => {
        dispatch(changeTodolistFilterAC(value, todolistId))
    }, [dispatch])

    const removeTodolist = useCallback((id: string) => {
        let action = removeTodolistAC(id)
        dispatch(action)
    }, [dispatch])

    const changeTodolistTitle = useCallback((id: string, title: string) => {
        dispatch(changeTodolistTitleAC(id, title))
    }, [dispatch])

    const addTodolist = useCallback((title: string) => {
        let action = addTodolistAC(title)
        dispatch(action)
    }, [dispatch])

    return (
        <div style={{ padding: '20px' }}>
            <Grid container >
				<AddItemForm addItem={addTodolist} />
			</Grid>
			<Grid container spacing={3}>
            {
                todolists.map(tl => {
                    // let allTodolistTasks = tasks[tl.id];
                    // let tasksForTodolist = allTodolistTasks;                    

                    // if (tl.filter === "active") {
                    //     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                    // }
                    // if (tl.filter === "completed") {
                    //     tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                    // }

                    return <Grid item key={tl.id}>
                        <Paper style={{ padding: '10px' }}>
							<Todolist                        
								id={tl.id}
								title={tl.title}
								tasks={tasks[tl.id]}
								removeTask={removeTask}
								changeFilter={changeFilter}
								addTask={addTask}
								changeTaskStatus={changeTaskStatus}
								filter={tl.filter}
								removeTodolist={removeTodolist}
								changeTaskTitle={changeTaskTitle}
								changeTodolistTitle={changeTodolistTitle}
							/>
						</Paper>
						</Grid>
                })
            }
			</Grid>
        </div>
    );
}

export default AppWithRedux;
