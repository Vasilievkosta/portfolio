import React, { useCallback } from 'react';
import { FilterValuesType } from './AppWithRedux';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import { Task } from './Task'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Todolist = React.memo((props: PropsType) => {
    
    let tasksAll = props.tasks;
    let tasksPaint = tasksAll;

    if (props.filter === "active") {
        tasksPaint = tasksAll.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksPaint = tasksAll.filter(t => t.isDone === true);
    }

    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props])

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props])

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props]);

    const removeTask = useCallback((taskId: string) => props.removeTask(taskId, props.id), [props]);

    const changeTaskStatus = useCallback((taskId: string, status: boolean) => {
        props.changeTaskStatus(taskId, status, props.id)
    }, [props])

    const changeTaskTitle = useCallback((taskId: string, newValue: string) => {
        props.changeTaskTitle(taskId, newValue, props.id)
    }, [props])

    return <div>
        <h3>
            <EditableSpan value={props.title} onChange={changeTodolistTitle} />

            {/*<button onClick={removeTodolist}>x</button>*/}
            <IconButton aria-label="delete" onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask} />
        <div>
            {
                tasksPaint.map(t => {
                    return <Task
                        key={t.id}
                        task={t}
                        removeTask={removeTask}
                        changeTaskStatus={changeTaskStatus}
                        changeTaskTitle={changeTaskTitle}
                    />
                })
            }
        </div>
        <div>
            {/*<button className={props.filter === 'all' ? "active-filter" : ""}
                onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed
            </button>*/}

            <Button variant={props.filter === 'all' ? "outlined" : "text"}
                size="small" color="inherit" onClick={onAllClickHandler}>
                All
            </Button>
            <Button variant={props.filter === 'active' ? "outlined" : "text"}
                size="small" color="primary" onClick={onActiveClickHandler}>
                Active
            </Button>
            <Button variant={props.filter === 'completed' ? "outlined" : "text"}
                size="small" color="secondary" onClick={onCompletedClickHandler}>
                Completed
            </Button>
        </div>
    </div>
})


