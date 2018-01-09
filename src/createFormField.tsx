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
        componentWillMount() {
            this.context.api.addField({
                name: this.props.name,
                validate: this.props.validate,
                required: this.props.required,
                requiredMessage: this.props.requiredMessage === undefined ? defaultRequiredMessage : this.props.requiredMessage,
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
            if (Array.isArray(value1)) {
                return value1.every(item => value2.indexOf(item) >= 0) && value2.every(item => value1.indexOf(item) >= 0);
            }
            else {
                return value1 === value2;
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
            const { name, onChange, value, // props for input component
                label, fieldClassName, fieldStyle, disabled, validate, requiredMessage, required, help, // props for field, don't pass to input component
                ...rest // user's props
            } = this.props;
            const { api } = this.context;
            return (
                <div className="field-input">
                    <Input
                        api={this.context.api}
                        name={name}
                        value={this.state.value}
                        changeFieldValue={value => {
                            onChange && onChange(name, value);
                            api.setValue(name, value, true);
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
            const { fieldClassName, fieldStyle, disabled, name } = this.props;
            const { api } = this.context;
            let touched = api.getTouched();
            touched = touched[name] || touched.__allTouched;
            const hasError = api.getErrors()[name] && touched;
            return (
                <div className={classnames('form-field', fieldClassName, { disabled, 'has-error': hasError })} style={fieldStyle} >
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