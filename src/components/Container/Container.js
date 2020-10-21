import React from 'react';
import styles from './Container.module.sass';

function Container(props) {
    return (<div className={styles.main}>{props.children}</div>)
}

export default Container;