import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        const trimmedName = event.currentTarget.value.trim()

        if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName('')
            setError('Title is required')
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello  ! ${name}`)
        setTotalUsers(totalUsers + 1)
        setName('')
    }

    const onEnter = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        // console.log(e.key)
        if (e.key === 'Enter') {
            addUser()
        }
    }

    let [totalUsers, setTotalUsers] = useState<number>(0)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
