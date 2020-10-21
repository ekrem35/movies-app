import React from 'react'
import InputSearch from '../InputSearch'
import styles from './SearchBox.module.sass'

export default function SearchBox () {
  return (<div className={styles.searchBox}>
    <InputSearch />
  </div>)
}
