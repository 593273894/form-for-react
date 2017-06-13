import React from 'react';
import FormError from './FormError';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { defaultRequiredMessage } from './constants';
export interface FormFieldProps {
    name: string;
    label: string;
    validate: Function;
    onChange: (name: string, value: any) => any;
    required: boolean;
    value?: string | number;
    requiredMessage?: string;
    fieldClassName?: string;
    fieldStyle?: Object;
    disabled?: boolean;
    help?: string;
}

const createFromField = (Input) => {
    return class FormField extends React.Component<FormFieldProps, any> {
        constructor(props) {
            super(props);
            this.propsValue = props.value;
            this.state = {
                value: props.value
            };
        }
        propsValue: string;
        static contextTypes = {
            api: PropTypes.object
        };
        context: FormContext;
        componentDidMount() {
            this.context.api.addField({
                name: this.props.name,
                validate: this.props.validate,
                required: this.props.required,
                requiredMessage: this.props.requiredMessage || defaultRequiredMessage
            });
            if (this.props.value !== undefined && this.props.value !== '') {
                this.context.api.setValue(this.props.name, this.props.value);
            }
        }
        componentWillUnmount() {
            this.context.api.removeField(this.props.name);
        }
        componentWillReceiveProps(nextprops) {
            if (nextprops.required !== this.props.required) {
                this.context.api.changeField({
                    name: nextprops.name,
                    validate: nextprops.validate,
                    required: nextprops.required
                });
            }
            if (!this.isEqual(this.propsValue, nextprops.value)) {
                this.propsValue = nextprops.value;
                this.context.api.setValue(this.props.name, nextprops.value);
                this.setState({
                    value: nextprops.value
                });
            }
        }
        isEqual(value1, value2) {
            if (typeof value1 === 'string' || typeof value1 === 'undefined' || typeof value1 === 'boolean' ||
                typeof value1 === 'number') {
                return value1 === value2;
            }
            else if (Array.isArray(value1)) {
                return value1.every(item => value2.indexOf(item) >= 0) && value2.every(item => value1.indexOf(item) >= 0);
            }
            else {
                console.error('value should be a string, number, array or boolean');
                return true;
            }
        }
        renderLabel() {
            const { label, required, name } = this.props;
            if (label !== undefined) {
                return (
                    <label htmlFor={name} className="field-label">
                        <span className="required">{required && '*'}</span>
                        <span className="label">{label}</span>
                    </label>
                );
            }
            else {
                return null;
            }
        }
        renderInput() {
            const { name, label, onChange, value, disabled, ...rest } = this.props;
            const { api } = this.context;
            return (
                <div className="field-input">
                    <Input
                        api={this.context.api}
                        name={name} label={label}
                        value={this.state.value}
                        disabled={disabled}
                        changeFieldValue={value => {
                            onChange && onChange(name, value);
                            api.setValue(name, value);
                            this.setState({
                                value: value
                            });
                        }} {...rest} />
                </div>
            );
        }
        renderHelp() {
            const { help } = this.props;
            return (
                help && <span className="field-help">{help}</span>
            );
        }
        renderError() {
            const { name } = this.props;
            const { api } = this.context;
            let touched = api.getTouched();
            touched = touched[name] || touched.__allTouched;
            return (
                touched && <FormError name={name} />
            );
        }
        render() {
            const { fieldClassName, fieldStyle, disabled } = this.props;
            return (
                <div className={classnames('form-field', fieldClassName, { disabled })} style={fieldStyle} >
                    {this.renderLabel()}
                    {this.renderInput()}
                    {this.renderHelp()}
                    {this.renderError()}
                </div>
            );
        }
    };
};

export default createFromField;