import React from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: React.ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter, }
) => {
    const inputClass = error ? s.errorInput : s.input
    return (
        <div className={s.greeting}>
           <div>
               <input value={name}
                      onChange={setNameCallback}
                      className={inputClass}
                      onKeyPress={onEnter}
                      onBlur={setNameCallback}
               />
               <div className={s.error}>{error}</div>
           </div>

            <button onClick={addUser} disabled={!name} className={s.btn}>add</button>
            <div className={s.totalUsers}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
