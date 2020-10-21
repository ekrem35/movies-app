import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { InputBase, IconButton, Paper } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import styles from './InputSearch.module.sass'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 320,
    backgroundColor: '#eee'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderWidth: 0
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}))

export default function InputSearch () {
  const classes = useStyles()

  return (
    <div className={styles.inputContainer}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </div>)
}
