'use strict';

const { Form, createFormField } = window['form-for-react'];
const { InputNumber, Button, Slider } = antd;

class InputField extends React.Component {
    render() {
        const { value, max, min, changeFieldValue } = this.props;
        return (
            <InputNumber
                max={max}
                min={min}
                value={value}
                onChange={value => {
                    changeFieldValue(value);
                }}
            />
        );
    }
}
InputField = createFormField(InputField);

class SliderField extends React.Component {
    render() {
        const { value, changeFieldValue, marks } = this.props;
        return (
            <Slider
                value={value}
                onChange={value => {
                    changeFieldValue(value);
                }}
                marks={marks}
            />
        );
    }
}
SliderField = createFormField(SliderField);

class FormExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 30,
            max: 70,
            output: ''
        };
        this.onChange = (name, value) => this._onChange(name, value);
        this.onSubmit = (values) => this._onSubmit(values);
        this.checkTemperature = (value, values) => {
            if (value > this.state.max) {
                return 'Too hot!';
            }
            if (value < this.state.min) {
                return 'Too cold!';
            }
            return null;
        };
    }
    _onSubmit(values) {
        var output = this.state.output;
        output += 'output: ' + JSON.stringify(values) + '\n';
        this.setState({ output });
    }
    _onChange(name, value) {
        var obj = {};
        obj[name] = value;
        this.setState(obj);
    }
    render() {
        const min = this.state.min || 0;
        const max = this.state.max || 0;
        const marks = {
            0: '0°C',
            [min]: min + '°C',
            [max]: max + '°C',
            100: {
                style: {
                    color: '#f50',
                },
                label: '100°C',
            }
        };
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <InputField
                        label="Minimum temperature"
                        name="min"
                        max={max}
                        min={0}
                        value={min}
                        required
                        onChange={this.onChange} />
                    <InputField
                        label="Maximum temperature"
                        name="max"
                        max={100}
                        min={min}
                        value={max}
                        required
                        onChange={this.onChange} />
                    <SliderField
                        label="Temperature"
                        name="temperature"
                        marks={marks}
                        onChange={this.onChange}
                        validate={this.checkTemperature}
                        required />
                    <Button htmlType="submit">submit</Button>
                </Form>
                <div>
                    data:
                    <pre>
                        {JSON.stringify(Object.assign({}, this.state, { output: undefined }), null, 4)}
                    </pre>
                    output:
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<FormExample />, document.getElementById('target'));