'use strict';

const { Form, Input, RadioGroup, CheckboxGroup, Select } = window['form-for-react'];
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class FormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = (name, value) => this._onChange(name, value);
        this.onSubmit = (values) => this._onSubmit(values);
        this.checkEmail = (value, values) => this._checkEmail(value, values);
        this.checkConfirm = (value, values) => this._checkConfirm(value, values);
    }
    _onSubmit(values) {
        this.setState(values);
    }
    _onChange(name, value) {
        var obj = {};
        obj[name] = value;
        this.setState(obj);
    }
    _checkEmail(value, values) {
        if (emailRegex.test(value)) {
            return null; // return null when correct
        }
        else {
            return 'Not a valid E-mail!';
        }
    }
    _checkConfirm(value, values) {
        if (value === values['password']) {
            return null;
        }
        else {
            return 'Inconsistent passwords!';
        }
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        name="email"
                        label="E-mail"
                        required
                        onChange={this.onChange}
                        validate={this.checkEmail} />
                    <Input
                        name="password"
                        label="Password"
                        type="password"
                        required
                        onChange={this.onChange} />
                    <Input
                        name="confirm"
                        label="Confirm Password"
                        type="password"
                        required
                        onChange={this.onChange}
                        validate={this.checkConfirm} />
                    <button type="submit">Register</button>
                </Form>
                <div>
                    data:
                    <pre>
                        {JSON.stringify(this.state, null, 4)}
                    </pre>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<FormExample />, document.getElementById('target'));