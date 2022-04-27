import React from 'react'
import s from './pages/Pages.module.css'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className={s.header}>
            <div className={s.nav}><NavLink to='/pre-junior'
                                            className={({isActive}) => isActive ? s.active : s.nav}>preJun</NavLink>
            </div>
            <div className={s.nav}><NavLink to='/Junior'
                                            className={({isActive}) => isActive ? s.active : s.nav}>Jun</NavLink>
            </div>
            <div className={s.nav}><NavLink to='/junior-plus'
                                            className={({isActive}) => isActive ? s.active : s.nav}>JuniorPlus</NavLink>
            </div>
            <div className={s.block}/>
        </div>
    )
}

export default Header
