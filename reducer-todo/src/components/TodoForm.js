import React, { useState } from 'react'

export function TodoForm (props) {
    const [form, setForm] = useState('')
    return (

        <form 
            onSubmit={(e) => {
                e.preventDefault()
                props.addTodo(form)
                setForm('')
        }}>
            <input 
                name='todo'
                placeholder='Add your todos here'
                value={form}
                onChange={(e) => {
                    setForm(e.target.value)
                }}
            />
            <br></br><br></br>
            <button className='submit-button' type='submit'>Add Todo</button>
        </form>
    )
}