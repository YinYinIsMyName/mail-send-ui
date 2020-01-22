import React from 'react'

export const InputForm = props => {

    const { type, className, text, ...rest } = props

    return (<input type={type} className={className} required {...rest}>{text}</input>)

}

export const Label = props => {
    const { text, htmlFor } = props
    return (<label htmlFor={htmlFor}>{text}</label>)
}
