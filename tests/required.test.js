import React from 'react';
import { mount } from 'enzyme';
import { Form, Input, RadioGroup, CheckboxGroup, Select } from '../form';
import { defaultRequiredMessage } from '../src/constants';

test('show required message after touched', () => {
    const component = mount(
        <Form>
            <Input
                name="input"
                label="input"
                required />
        </Form>
    );
    component.find('#input').simulate('change', { target: { value: '' } });
    let text = component.find('.form').childAt(0).find('.validation-message').text();
    expect(text).toEqual(defaultRequiredMessage);
});

test('show custom required message', () => {
    const requiredMessage = "please input this field";
    const component = mount(
        <Form>
            <Input
                name="input"
                label="input"
                required
                requiredMessage={requiredMessage} />
        </Form>
    );
    component.find('#input').simulate('change', { target: { value: '' } });
    let text = component.find('.form').childAt(0).find('.validation-message').text();
    expect(text).toEqual(requiredMessage);
});

test('show required message after form submit', () => {
    const component = mount(
        <Form>
            <Input
                name="input"
                label="input"
                required />
        </Form>
    );
    component.find('.form').simulate('submit');
    let text = component.find('.form').childAt(0).find('.validation-message').text();
    expect(text).toEqual(defaultRequiredMessage);
});

