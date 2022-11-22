import styles from '../../styles/RadioBtn.module.scss'

// import { useState } from 'react'

function RadioBtn(props) {

    return (
        <label className={ styles.radio_btn_label} htmlFor="radio-test">
      <input className={ styles.radio_btn_input } type="radio" id="radio-test" name="radio-btn" value="money"/>
          { props.innerHTML }
      </label>
    )
}

export default RadioBtn 
