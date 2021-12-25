import React from "react";
import s from './Bigbutton.module.scss'

export const BigButton = (props) => {
    return (
        <div className={s.bigButtonContainer}>
            <div>
                <span
                    className={s.firstWord}
                    data-text={props.firstWorld}>
                    {props.firstWorld}
                </span>&nbsp;
                <span
                    className={s.secondWord}
                    data-text={props.secondWorld}
                >
                    {props.secondWorld}
                </span>
            </div>
        </div>
    )
}