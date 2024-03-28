import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
function Todo() {
    const [todo, setTodo] = useState([])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const data = {
            id:todo.length + 1,
            email:evt.target.email.value,
            password:evt.target.password.value
        }
        setTodo([...todo, data])
    }
  return (
    <>
    <form onSubmit={handleSubmit} className="flex bg-slate-400 p-3 rounded-md  max-w-md flex-col gap-4 min-w-[500px] mb-5">
        <div>
            <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput name='email' id="email1" type="email" placeholder="name@flowbite.com" required />
        </div>
        <div>
                <div className="mb-2 block">
                    <Label htmlFor="password1" value="Your password" />
                </div>
                <TextInput name='password' id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
    </form>
    
    <ul>
        {todo.length > 0 && todo.map(item => (
            <li className='p-3 rounded-md bg-slate-300 flex flex-col space-x-1  '>
                <span>ID: {item.id}.</span>
                <span>Email: {item.email}</span>
                <span>Passwordsaasssss :{item.password}</span>
            </li>
        ))}
    </ul>
    
    </>
  )
}

export default Todo