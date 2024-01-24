import React from 'react';
import clsx from "clsx";
import * as styles from "./myButton.module.scss";

const MyButton = ({
    children,
    onClick,
    black,
    transparent,
    golden,
    goldenAnchor,
    fullGolden,
    goldenTransparent,
    ...props
}) => {

    const clsxStyles = clsx(styles.button, {
        [styles.black]: black,
        [styles.transparent]: transparent,
        [styles.golden]: golden,
        [styles.fullGolden]: fullGolden,
        [styles.goldenTransparent]: goldenTransparent,
        [styles.goldenAnchor]:goldenAnchor
    })

    return (
        <button
            onClick={onClick}
            className={clsxStyles}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;