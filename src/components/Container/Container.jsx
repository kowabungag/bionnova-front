import React from 'react';

// styles
import * as styles from "./container.module.scss";

const Container = ({children, sizeZero,additionalPadding, background}) => {
    return (
        <div style={background?{ backgroundColor: background }:{}}>
            <div className={styles.container}>
                <div
                    className={`
                ${styles.wrapper} 
                ${sizeZero ? styles.sizeZero : styles.sizeFull}
                ${additionalPadding? styles.additionalPadding:''}
                `}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Container;