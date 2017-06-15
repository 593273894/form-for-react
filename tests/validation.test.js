import React from 'react';
import { mount } from 'enzyme';
import { Form, Input, RadioGroup, CheckboxGroup, Select } from '../form';

const errorMessage = 'too long';
const validate = (value, values) => {
    if (value.length > 10) {
        return 'too long';
    }
    else {
        return null;
    }
};

test('custom validation', () => {
    const component = mount(
        <Form>
            <Input
                name="input"
                label="input"
                validate={validate} />
        </Form>
    );
    expect(component).toMatchSnapshot();

    component.find('#input').simulate('change', { target: { value: '123' } });
    let hasValidationMessage = component.find('#input').containsMatchingElement(component.find('.validation-message'));
    expect(hasValidationMessage).toEqual(false);

    component.find('#input').simulate('change', { target: { value: '01234567890' } });
    let text = component.find('.form').childAt(0).find('.validation-message').text();
    expect(text).toEqual(errorMessage);

    component.find('#input').simulate('change', { target: { value: '123' } });
    hasValidationMessage = component.find('#input').containsMatchingElement(component.find('.validation-message'));
    expect(hasValidationMessage).toEqual(false);

    expect(component).toMatchSnapshot();
});

test('form submit', () => {
    let output = null;

    const component = mount(
        <Form onSubmit={(values) => output = values}>
            <Input
                name="input"
                label="input"
                validate={validate} />
        </Form>
    );
    expect(component).toMatchSnapshot();

    component.find('#input').simulate('change', { target: { value: '01234567890' } });
    component.find('.form').simulate('submit');
    expect(output).toEqual(null);

    component.find('#input').simulate('change', { target: { value: '012345' } });
    component.find('.form').simulate('submit');
    expect(output).toEqual({
        input: '012345'
    });

    expect(component).toMatchSnapshot();
});

test('form onvalid oninvalid method', () => {
    let output = null;
    const component = mount(
        <Form onInvalid={() => output = 'invalid'} onValid={() => output = 'valid'}>
            <Input
                name="input"
                label="input"
                validate={validate} />
        </Form>
    );
    expect(component).toMatchSnapshot();

    component.find('#input').simulate('change', { target: { value: '012345' } });
    expect(output).toEqual('valid');
    component.find('#input').simulate('change', { target: { value: '01234567890' } });
    expect(output).toEqual('invalid');
    component.find('#input').simulate('change', { target: { value: '012345' } });
    expect(output).toEqual('valid');
    
    expect(component).toMatchSnapshot();
});