import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = (s.error.length > 0 ? error : '')

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
