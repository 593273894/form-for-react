'use strict';

const { Form, Input, RadioGroup, CheckboxGroup, Select } = window['form-for-react'];

class FormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = (name, value) => this._onChange(name, value);
        this.onSubmit = (values) => this._onSubmit(values);
    }
    _onSubmit(values) {
        this.setState(values);
    }
    _onChange(name, value) {
        var obj = {};
        obj[name] = value;
        this.setState(obj);
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Input
                        name="input"
                        label="input"
                        onChange={this.onChange} />
                    <RadioGroup
                        name="radio"
                        label="radio"
                        options={[{
                            label: 'red', value: 'red'
                        }, {
                            label: 'yellow', value: 'yellow'
                        }, {
                            label: 'blue', value: 'blue'
                        }]}
                        onChange={this.onChange} />
                    <CheckboxGroup
                        name="checkbox"
                        label="checkbox"
                        options={[{
                            label: 'apple', value: 'apple'
                        }, {
                            label: 'banana', value: 'banana'
                        }]}
                        onChange={this.onChange} />
                    <Select
                        name="select"
                        label="select"
                        options={[{
                            label: 'apple', value: 'apple'
                        }, {
                            label: 'banana', value: 'banana'
                        }]}
                        onChange={this.onChange} />
                    <button type="submit">submit</button>
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