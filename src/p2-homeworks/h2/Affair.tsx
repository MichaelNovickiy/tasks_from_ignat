import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div >
            <span className={s.id}>{props.affair._id}</span>
            <span className={s.name}>{props.affair.name}</span>
            <span className={s.priority}> {props.affair.priority}</span>
            <span>
                <button onClick={deleteCallback}>X</button>
            </span>
        </div>
    )
}

export default Affair
