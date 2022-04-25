import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback
                                                                 }) => {
    const [name, setName] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>('') // need to fix any

    const setNameCallback = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const addUser = () => {
        alert(`Hello  ! ${name}`)
        setTotalUsers(totalUsers + 1)
        setName('')
    }

    let [totalUsers, setTotalUsers] = useState<number>(0)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
