import React from 'react';
import { FallingLines } from  'react-loader-spinner';

import * as styles from './loader.module.scss';

const MyLoader = () => {
    return (
        <div className={styles.loaderContainer}>
            <FallingLines
                color="#F5B335"
                width="100"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    );
};

export default MyLoader;