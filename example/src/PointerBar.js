import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import styles from './pointerBar.module.scss'

const PointerBar = () => (
    <ProgressBar completed={50} className={styles.myClassName} />
)

export default PointerBar