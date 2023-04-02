import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { AddBox } from '@mui/icons-material';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = React.memo((props: AddItemFormPropsType) => {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) setError(null);

        if (e.charCode === 13) {
            addItem();
        }
    }

    return <div style={{display: "flex", marginBottom: "15px"}}>
        {/*<input*/}
		<TextField
			value={title}
			error={!!error}
			variant="outlined"
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
			label="Title"
            helperText={error}
            
        />
		{/*{error && <div className="error-message">{error}</div>}*/}
		
		<IconButton style={{padding: "15px"}} color="primary" onClick={addItem}>
            <AddBox/>
        </IconButton>
		{/*<button onClick={addItem}>+</button>*/}
    </div>
})
