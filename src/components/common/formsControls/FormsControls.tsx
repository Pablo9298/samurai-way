import React, {FC} from 'react';
import styles from './FormsControls.module.css'
import {Field} from 'redux-form';


type TextareaType = {
    input?: any,
    meta?: any
    children?: React.ReactNode
}

export const FormControl: FC<TextareaType> = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: FC<TextareaType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<TextareaType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}

export const createField = (
    placeholder: string | null,
    name: string,
    validators: any[],
    component: any,
    props : any ,
    text: string | null
) => (
    <div>
        <Field name={name}
               placeholder={placeholder}
               validate={validators}
               component={component}
               {...props}

        />
        {text}
    </div>

)