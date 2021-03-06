import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NO_ERROR } from './constants';

function noop() { }
interface State {
    errors: Object;
}

export interface FormProps {
    onChange?: Function;
    onSubmit?: Function;
    onValid?: Function;
    onInvalid?: Function;
    className?: string;
}

export default class Form extends React.Component<FormProps, State> {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
        this.values = {};
        this.touched = {
            __allTouched: false
        };
        this.validates = {};
        this.fields = {};
        this.mounted = false;
    }
    static defaultProps: FormProps = {
        onSubmit: noop,
    };
    static childContextTypes = {
        api: PropTypes.object
    };
    values: {};
    touched: { __allTouched: Boolean };
    validates: {};
    fields: {};
    mounted: boolean;
    getChildContext() {
        return {
            api: {
                getErrors: this.getErrors.bind(this),
                setValue: this.setValue.bind(this),
                getValues: this.getValues.bind(this),
                getTouched: this.getTouched.bind(this),
                addField: this.addField.bind(this),
                changeField: this.changeField.bind(this),
                removeField: this.removeField.bind(this),
            }
        };
    }
    componentDidMount() {
        this.mounted = true;
    }
    addField(field: Field) {
        this.fields[field.name] = field;
        this.values[field.name] = '';
        this.touched[field.name] = false;
        this.setState({
            errors: {
                ...this.state.errors,
                [field.name]: null,
            },
        });
    }
    changeField(field: Field) {
        this.fields[field.name] = field;
        this.setValue(field.name, this.values[field.name]);
    }
    removeField(name) {
        delete this.fields[name];
        delete this.values[name];
        delete this.touched[name];
        const errors = this.state.errors;
        delete errors[name];
        this.setState({
            errors,
        });
    }
    validateFields() {
        let errors = {};
        for (let name in this.fields) {
            const field = this.fields[name];
            if (isEmpty(this.values[name])) {
                if (field.required) {
                    errors[name] = field.requiredMessage;
                }
                else {
                    errors[name] = NO_ERROR;
                }
            }
            else {
                if (typeof this.fields[name].validate === 'function') {
                    const validateMessage = this.fields[name].validate(this.values[name], this.values);
                    if (typeof validateMessage !== 'string' && validateMessage !== NO_ERROR) {
                        console.warn('Expected return value of validate() to be a string for error message ' +
                            'or a null for validate success');
                    }
                    errors[name] = this.fields[name].validate(this.values[name], this.values);
                }
                else {
                    errors[name] = NO_ERROR;
                }
            }
        }
        return errors;
        function isEmpty(value) {
            if (Array.isArray(value)) {
                return value.length === 0;
            }
            if (typeof value === 'number') {
                return value === undefined;
            }
            else {
                return !value;
            }
        }
    }
    setValue(name, value, triggerFormOnChange = false) {
        this.values[name] = value;
        const errors = this.validateFields();
        let noerror = true;
        for (let name in errors) {
            if (errors[name] !== NO_ERROR && errors[name] !== undefined) {
                noerror = false;
                break;
            }
        }
        this.setState({
            errors
        });
        noerror ? this.onValid() : this.onInvalid();
        if (triggerFormOnChange) {
            this.touched[name] = true;
            this.onchange(name, value);
        }
    }
    getValues() {
        return this.values;
    }
    getErrors() {
        return this.state.errors;
    }
    getTouched() {
        return this.touched;
    }
    onchange(name, value) {
        this.mounted && this.props.onChange && this.props.onChange(name, value);
    }
    onValid() {
        this.props.onValid && this.props.onValid();
    }
    onInvalid() {
        this.props.onInvalid && this.props.onInvalid();
    }
    onSubmit(e?: React.FormEvent<HTMLFormElement>) {
        e && e.preventDefault && e.preventDefault();
        this.touched.__allTouched = true;
        const errors = this.validateFields();
        let noerror = true;
        for (let name in errors) {
            if (errors[name] !== NO_ERROR && errors[name] !== undefined) {
                noerror = false;
                break;
            }
        }
        if (noerror) {
            this.props.onSubmit && this.props.onSubmit(this.values);
        }
        this.setState({
            errors
        });
    }
    submit = this.onSubmit;

    render() {
        const { className, onChange, onSubmit, onInvalid, onValid, children, ...rest } = this.props;
        return (
            <form className={classnames('form', className)} onSubmit={e => this.onSubmit(e)} {...rest} >
                {this.props.children}
            </form>
        );
    }
}