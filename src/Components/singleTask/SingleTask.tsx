import React from 'react'
import {Stack, Button} from '@mui/material/';

import DeleteIcon from '../../images/icons/DeleteIcon'
import DoneIcon from '../../images/icons/DoneIcon'
import ImportantIcon from '../../images/icons/ImportantIcon'

import './singleTask.css'

interface SingleTaskInterface {
  name: string,
  onDelete: () => void,
  onToggleDone: () => void,
  onToggleImportant: () => void,
  addNewTask: (text : string) => void,
  important: boolean,
  done: boolean,
}

const SingleTask = ({name,onDelete,onToggleDone, onToggleImportant, addNewTask, important, done}: SingleTaskInterface)  => {
  
  return (
    <div className='task-container'>
      <li className="task-item">
            <p className={`task-subtitle ${important ? 'task-subtitle__important' : ''} ${done ? 'task-subtitle__done' : ''}`} onClick={onToggleDone}>{name}</p>
            <Stack direction="row" spacing={2}>
                <Button color="secondary" type="button" className='btn btn-outline-important' onClick={onToggleImportant}>
                    <ImportantIcon/>
                </Button>

                <Button variant="contained" color="success" type="button" className="btn btn-outline-primary" onClick={onToggleDone}>
                    <DoneIcon/>
                </Button>

                <Button variant="outlined" type="button" className="btn btn-outline-danger" onClick={onDelete}>
                    <DeleteIcon/>
                </Button>
                
            </Stack>

        </li>
    </div>
  )
}

export default SingleTask