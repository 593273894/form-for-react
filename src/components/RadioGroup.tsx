import React from 'react';
import createFormField from '../createFormField';

export interface RadioGroupProps extends FormInputProps {
    options: Array<any>;
    value: string;
}

class RadioGroup extends React.Component<RadioGroupProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        const { value, options, changeFieldValue, name } = this.props;
        return (
            <div className="radio-group" id={name}>
                {options.map((option) => {
                    let checked = option.value === value;
                    return (
                        <label key={option.value} className={`radio${checked ? ' checked' : ''}`}>
                            <input
                                name={option.name}
                                className="radio-input"
                                type="radio"
                                checked={checked}
                                onChange={() => {
                                    changeFieldValue(option.value);
                                }} />
                            {option.label}
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default createFormField(RadioGroup);