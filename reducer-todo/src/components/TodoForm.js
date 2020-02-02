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
            <button type='submit'>Add your Todo's</button>
        </form>
    )
} 