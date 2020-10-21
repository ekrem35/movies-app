import React from 'react';
import styles from './Container.module.sass';

function Container(props) {
    return (<div className={styles.main} style={props.style}>{props.children}</div>)
}

Container.defaultProps = {
    style: {}
}

export default Container;