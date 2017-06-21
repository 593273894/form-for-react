import React from 'react';
import createFormField from '../createFormField';

export interface CheckboxGroupProps extends FormInputProps {
    options: Array<any>;
    value: Array<string>;
}

const emptyArray = [];

class CheckboxGroup extends React.Component<CheckboxGroupProps, any> {
    constructor(props) {
        super(props);
    }
    render() {
        const { value = emptyArray, options, changeFieldValue, name } = this.props;
        return (
            <div className="checkbox-group" id={name}>
                {options.map((option) => {
                    const checked = value.indexOf(option.value) >= 0;
                    return (
                        <label key={option.value} className={`checkbox${checked ? ' checked' : ''}`}>
                            <input
                                name={option.name}
                                className="checkbox-input"
                                type="checkbox"
                                checked={checked}
                                onChange={() => {
                                    if (checked) {
                                        changeFieldValue(value.filter(item => item !== option.value));
                                    }
                                    else {
                                        changeFieldValue([...value, option.value]);
                                    }
                                }} />
                            {option.label}
                        </label>
                    );
                }
                )}
            </div>
        );
    }
}

export default createFormField(CheckboxGroup);