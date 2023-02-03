import React from 'react'
import styles from './Button.module.css'

export default function Button(props) {
  const styleButton = {
    padding: props.padding
  }

  return (
    <button onClick={props.onClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  )
}
