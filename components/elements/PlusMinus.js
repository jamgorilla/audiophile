import styles from '../../styles/PlusMinus.module.scss'

// import { useState } from 'react'

function PlusMinus(props) {



    return (
        <div className={ styles.plus_minus_container }>
        <button className={ styles.plus_minus_buttons } onClick={ props.stepper }> - </button>
        <input className={ styles.number_input } type="number" name="number-up-down"  value={ props.value } readOnly/>
        <button className={ styles.plus_minus_buttons } onClick={ props.stepper }> + </button>
      </div>
    )
}

export default PlusMinus 

