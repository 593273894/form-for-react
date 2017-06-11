import React from 'react';
import createFormField from '../createFormField';

export interface InputProps extends FormInputProps {
    placeholder: string;
    type?: string;
    value?: string | number;
    onFocus?: any;
    autoComplete?: string;
    style: Object;
}

const emptyString = '';
function noop() { }

class Input extends React.Component<InputProps, any> {
    render() {
        const { name, value = emptyString, changeFieldValue, placeholder, type = 'text', onFocus = noop, disabled, autoComplete = 'off', style } = this.props;
        return (
            <input
                id={name}
                type={type}
                className="input"
                value={value}
                onChange={e => {
                    changeFieldValue(e.target.value);
                }}
                placeholder={placeholder}
                disabled={disabled}
                onFocus={onFocus}
                autoComplete={autoComplete}
                style={style}
            />
        );
    }
}

export default createFormField(Input);