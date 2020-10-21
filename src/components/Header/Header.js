import React from 'react'
import styles from './Header.module.sass'
import Container from '../Container'

export default function Header ({ rightComponent }) {
  return (
    <Container>
      <div className={styles.headerContainer}>
        <div className={styles.logoAndMenu}>
          <h1 className={styles.label}>Movie<b className={styles.yellow}>UP</b></h1>
          <div className={styles.menu}>
            <ul>
              <li>Home</li>
              <li>Favorites</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightComponent}>{rightComponent}</div>
      </div>
    </Container>
  )
}

Header.defaultProps = {
  rightComponent: null
}
