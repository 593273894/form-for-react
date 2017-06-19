import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { NO_ERROR } from './constants';

function noop() { }
interface State {
    errors: Object;
}

export interface FormProps {
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
    }
    static defaultProps: FormProps = {
        onSubmit: noop,
    };
    static childContextTypes = {
        api: PropTypes.object
    };
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
    values: {};
    touched: { __allTouched: Boolean };
    validates: {};
    fields: {};
    addField(field) {
        this.fields[field.name] = field;
        this.values[field.name] = '';
    }
    changeField(field) {
        this.fields[field.name] = field;
        this.setValue(field.name, this.values[field.name]);
    }
    removeField(name) {
        delete this.fields[name];
        this.values[name] = '';
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
            else {
                return value === undefined;
            }
        }
    }
    setValue(name, value) {
        this.values[name] = value;
        this.touched[name] = true;
        const errors = this.validateFields();
        let noerror = true;
        for (let name in errors) {
            if (errors[name] !== NO_ERROR) {
                noerror = false;
                break;
            }
        }
        this.setState({
            errors
        });
        noerror ? this.onValid() : this.onInvalid();
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
    onValid() {
        this.props.onValid && this.props.onValid();
    }
    onInvalid() {
        this.props.onInvalid && this.props.onInvalid();
    }
    onSubmit(e) {
        e.preventDefault();
        this.touched.__allTouched = true;
        const errors = this.validateFields();
        let noerror = true;
        for (let name in errors) {
            if (errors[name] !== NO_ERROR) {
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

    render() {
        const { className } = this.props;
        return (
            <form className={classnames('form', className)} onSubmit={e => this.onSubmit(e)}>
                {this.props.children}
            </form>
        );
    }
}