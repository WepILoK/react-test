import React from "react";
import styles from "./FormsControls.module.scss";

const FormControl = ({input, meta:{touched, error}, child, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><textarea{...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input{...input} {...restProps}/></FormControl>
}