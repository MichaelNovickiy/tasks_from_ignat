import React from 'react'
import {AffairType, FilterType} from './HW2'
import Affair from "./Affair";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filer: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.affairBlock}>

            {mappedAffairs}
            <div className={s.btn}>
                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
