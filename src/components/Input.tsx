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

class Input extends React.Component<InputProps, any> {
    render() {
        const { name, value = emptyString, api,
            changeFieldValue,
            ...rest } = this.props;
        return (
            <input
                id={name}
                className="input"
                value={value}
                onChange={e => {
                    changeFieldValue(e.target.value);
                }}
                {...rest}
            />
        );
    }
}

export default createFormField(Input);