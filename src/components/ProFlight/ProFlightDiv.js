import React from 'react'
import logo from'../../assets/logo.png'
import Styles from './ProFlight.module.css'

export const ProFlightDiv = ({style}) => {
    return (
        <div styles={style} className={style}>
            <img src={logo} alt="ProFlight logo"/>
        </div>
    )
}
