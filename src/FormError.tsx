import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export interface FormErrorProps {
    name: string;
    className?: string;
}

class FormError extends React.Component<FormErrorProps, any> {
    constructor(props, context) {
        super(props, context);
        this.error = null;
    }
    static contextTypes = {
        api: PropTypes.object
    }
    error: string | null;
    shouldComponentUpdate() {
        const { name } = this.props;
        const { api } = this.context;
        const error = api.getErrors(name);
        if (error !== this.error) {
            this.error = error;
            return true;
        }
        else {
            return false;
        }
    }
    render() {
        const { name, className } = this.props;
        const { api } = this.context;
        const error = api.getErrors()[name];
        return (
            error ? <span className={classnames('validation-message', className)}>{error}</span> : null
        );
    }
}

export default FormError;