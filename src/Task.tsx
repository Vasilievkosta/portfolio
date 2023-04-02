import React, { ChangeEvent, useCallback } from 'react';
import { TaskType } from './Todolist';
import { EditableSpan } from 'EditableSpan';
import Checkbox from '@mui/material/Checkbox';
import Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

type TaskPropsType = {
    task: TaskType
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
}

export const Task = React.memo((props: TaskPropsType) => {
    
    const onClickHandler = () => props.removeTask(props.task.id)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.task.id, newIsDoneValue);
    }
    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue);
    }, [props])

    return <div className={props.task.isDone ? "task is-done" : "task"}>
        {/*<input type="checkbox" onChange={onChangeHandler} checked={props.task.isDone} />*/}
        <Checkbox  onChange={onChangeHandler} checked={props.task.isDone} color="primary"/>
        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
        {/*<button onClick={onClickHandler}><span>&#10006;</span></button>*/}
		<IconButton onClick={onClickHandler}>
            <Delete/>
        </IconButton>
    </div>
})


