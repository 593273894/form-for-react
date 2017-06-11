import React from 'react';
import createFormField from '../createFormField';

export interface SelectProps extends FormInputProps {
    options: Array<any>;
    value: string;
}

const emptyString = '';

class Select extends React.Component<SelectProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        const { value = emptyString, options, changeFieldValue, name } = this.props;
        return (
            <select
                name={name}
                id={name}
                value={value}
                onChange={(e) => {
                    changeFieldValue(e.target.value);
                }}>
                <option value=""> --- </option>
                {
                    options.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        );
                    })
                }
            </select >
        );
    }
}

export default createFormField(Select);